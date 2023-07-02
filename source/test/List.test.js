import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Lista from '../app/admin_dashboard/pages/Lista/Lista';

describe('Lista component', () => {
    // 1.Prueba de que se muestre mensaje de cargando datos si no hay reservas

  test('renders loading message when data is null', () => {
    render(<Lista />);

    const loadingMessage = screen.getByText('Cargando datos...');
    expect(loadingMessage).toBeInTheDocument();
  });

  // 2.Prueba de que se carguen los datos correctamente y no salga ventana de Cargando datos.

  test('should render data when initial data is loaded', async () => {
    jest.spyOn(window, 'fetch').mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(dummyData),
      });
    });

    render(<Lista />);

    await waitFor(() => screen.getByText('Lista de Reservas'));

    expect(screen.getByText('Camping')).toBeInTheDocument();
    expect(screen.getByText('Picnic')).toBeInTheDocument();
      window.fetch.mockRestore();
  });

 //3. Pruebas de que se renderize la tabla.

  test('renders table with data', () => {
    const testData = [
      { ReservacionCodigo: 1, TipoArea: 'C', TotalCantidadVisitantes: 2, FechaInicio: '2023-05-01', EstadoPago: true },
      { ReservacionCodigo: 2, TipoArea: 'P', TotalCantidadVisitantes: 4, FechaInicio: '2023-05-02', EstadoPago: false },
    ];

    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(testData),
      })
    );

    render(<Lista />);

    const tableRows = screen.getAllByRole('row');
    expect(tableRows).toHaveLength(3);

    const row1 = screen.getByText('1');
    expect(row1).toBeInTheDocument();

    const row2 = screen.getByText('2');
    expect(row2).toBeInTheDocument();
  });

  // 4. Prueba de que el filtro de Aprobado funcione

  test('filters data based on selected state', () => {
    const testData = [
      { ReservacionCodigo: 1, TipoArea: 'C', TotalCantidadVisitantes: 2, FechaInicio: '2023-05-01', EstadoPago: true },
      { ReservacionCodigo: 2, TipoArea: 'P', TotalCantidadVisitantes: 4, FechaInicio: '2023-05-02', EstadoPago: false },
    ];

    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(testData),
      })
    );

    render(<Lista />);

    fireEvent.change(screen.getByLabelText('Estado Filter'), { target: { value: 'Aprobado' } });

    const tableRows = screen.getAllByRole('row');
    expect(tableRows).toHaveLength(2);

    const row1 = screen.getByText('1');
    expect(row1).toBeInTheDocument();

    expect(screen.queryByText('2')).not.toBeInTheDocument();
  });


  //5. Prueba de cancelacion de reserva

  test('should cancel a reservation', async () => {
    jest.spyOn(window, 'fetch').mockImplementation((url) => {
      if (url.includes('/cancelReservation/')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(dummyData),
        });
      }
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(dummyData),
      });
    });

    render(<Lista />);

    await waitFor(() => screen.getByText('Lista de Reservas'));

    const cancelButton = screen.getByText('Cancelar');
    userEvent.click(cancelButton);

    expect(window.fetch).toHaveBeenCalledWith(
      '/backend/reservationDetails/cancelReservation/123'
    );
    expect(screen.getByText('Cancelado')).toBeInTheDocument();
      window.fetch.mockRestore();
  });

    // 6. Prueba de que una reserva se apruebe correctamente
test('should approve a reservation', async () => {
    jest.spyOn(window, 'fetch').mockImplementation((url) => {
      if (url.includes('/confirmReservation/')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(dummyData),
        });
      }
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(dummyData),
      });
    });

    render(<Lista />);
    await waitFor(() => screen.getByText('Lista de Reservas'));
    const approveButton = screen.getByText('Confirmar');
    userEvent.click(approveButton);
    expect(window.fetch).toHaveBeenCalledWith(
      '/backend/reservationDetails/confirmReservation/123'
    );
    expect(screen.getByText('Aprobado')).toBeInTheDocument();
    window.fetch.mockRestore();
  });

//7. Prueba de ordenamiento de elementos

test('should sort reservations by column', async () => {
    render(<Lista />);

    await waitFor(() => screen.getByText('Lista de Reservas'));

    const codeHeader = screen.getByText('Codigo');
    userEvent.click(codeHeader);

    const rows = screen.getAllByRole('row');
    expect(rows[1]).toHaveTextContent('123');
    expect(rows[2]).toHaveTextContent('456');

    userEvent.click(codeHeader);

    const reversedRows = [...rows].reverse();
    expect(reversedRows[1]).toHaveTextContent('456');
    expect(reversedRows[2]).toHaveTextContent('123');
  });

//8. Prueba de renderizado del boton cancelar

test('should render "Cancelar" button', async () => {
    render(<Lista />);

    await waitFor(() => screen.getByText('Lista de Reservas'));

    const reservationItems = screen.getAllByRole('row');
    reservationItems.forEach((item) => {
      expect(screen.getByText('Cancelar', { container: item })).toBeInTheDocument();
    });
  });

//9. Prueba del boton cancelar

test('should cancel a reservation when "Cancelar" button is clicked', async () => {
    render(<Lista />);

    await waitFor(() => screen.getByText('Lista de Reservas'));

    const cancelButtons = screen.getAllByText('Cancelar');
    userEvent.click(cancelButtons[0]);

    expect(mockCancelReservation).toHaveBeenCalledWith(123);
    expect(screen.getByText('Cancelado')).toBeInTheDocument();
  });

//10.Prueba de renderizado del boton aceptar

test('should render "Aceptar" button', async () => {
    render(<Lista />);

    await waitFor(() => screen.getByText('Lista de Reservas'));

    const reservationItems = screen.getAllByRole('row');
    reservationItems.forEach((item) => {
      expect(screen.getByText('Aceptar', { container: item })).toBeInTheDocument();
    });
  });

//11. Prueba del boton aceptar

test('should confirm a reservation when "Confirmar" button is clicked', async () => {
    render(<Lista />);
    await waitFor(() => screen.getByText('Lista de Reservas'));
    const confirmButtons = screen.getAllByText('Confirmar');
    userEvent.click(confirmButtons[0]);

    expect(mockConfirmReservation).toHaveBeenCalledWith(123);
    expect(screen.getByText('Aprobado')).toBeInTheDocument();
  });

//12. Prueba del boton mostrar calendario

test('should render "Mostrar Calendario" button', async () => {
    render(<Lista />);
    await waitFor(() => screen.getByText('Lista de Reservas'));

    expect(screen.getByText('Mostrar Calendario')).toBeInTheDocument();
  });

//13.Prueba de funcionalidad del boton mostrar calendario
test('should show calendar when "Mostrar Calendario" button is clicked', async () => {
    render(<Lista />);
    await waitFor(() => screen.getByText('Lista de Reservas'));
    const showCalendarButton = screen.getByText('Mostrar Calendario');
    userEvent.click(showCalendarButton);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
 //11. Prueba de rederizado del boton oscultar calendario
 test('should render "Ocultar Calendario" button', async () => {
    render(<Lista />);

    await waitFor(() => screen.getByText('Lista de Reservas'));

    const showCalendarButton = screen.getByText('Mostrar Calendario');
    userEvent.click(showCalendarButton);

    expect(screen.getByText('Ocultar Calendario')).toBeInTheDocument();
  });

//14.Prueba de funcionalidad del boton ocultar calendario
test('should hide calendar when "Ocultar Calendario" button is clicked', async () => {
    render(<Lista />);

    await waitFor(() => screen.getByText('Lista de Reservas'));
    const showCalendarButton = screen.getByText('Mostrar Calendario');
    userEvent.click(showCalendarButton);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    const hideCalendarButton = screen.getByText('Ocultar Calendario');
    userEvent.click(hideCalendarButton);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

//15. Prueba que el calendario se despliega al dar MostrarCalendario

test('should render calendar when "Mostrar Calendario" button is clicked', async () => {
    // Render the component
    render(<Lista />);
    await waitFor(() => screen.getByText('Lista de Reservas'));
    const mostrarCalendarioButton = screen.getByText('Mostrar Calendario');
    fireEvent.click(mostrarCalendarioButton);
    expect(screen.getByTestId('my-calendar')).toBeInTheDocument();
  });

  afterEach(() => {
    global.fetch.mockRestore();
  });
});
