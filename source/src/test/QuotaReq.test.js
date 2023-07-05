const db = require('../../backend/DbConfig'); // Import the database module
const index = require('../../backend/dashboard/QuotaReq')

// Hacemos un mock del execute query
jest.mock('../../backend/DbConfig', () => ({
  executeQuery: jest.fn(),
}));

describe('Tests for getQuota function (backend/dashboard/QuotaReq)', () => {
  test('given the area \"area\" should return based on the mock result', async () => {
    const mockResult = {
      recordset: [{ CupoTotal: 100, CupoOnline: 50 }],
    };
    db.executeQuery.mockResolvedValueOnce(mockResult);

    const result = await index.getQuota('area');

    expect(db.executeQuery).toHaveBeenCalledWith(
      "SELECT CupoTotal, CupoOnline FROM Area WHERE Tipo='area'"
    );
    expect(result).toEqual({ CupoTotal: 100, CupoOnline: 50 });
  });

  test('should throw an error when no records are found', async () => {
    const mockResult = {
      recordset: [],
    };
    db.executeQuery.mockResolvedValueOnce(mockResult);

    await expect(index.getQuota('area')).rejects.toThrow(
      'No se encontraron registros para el área especificada'
    );
  });

  test('should rethrow an error when an exception occurs', async () => {
    const mockError = new Error('Database error');
    db.executeQuery.mockRejectedValueOnce(mockError);

    await expect(index.getQuota('area')).rejects.toThrow('Database error');
  });
});

describe('tests for updateQuota function', () => {
  test('should update the quota and return the updated values', async () => {
    const mockResult = {
      recordsets: [[{ CupoTotal: 200, CupoOnline: 100 }]],
    };
    db.executeQuery.mockResolvedValueOnce(mockResult);

    const result = await index.updateQuota('area', '200', '100');

    expect(db.executeQuery).toHaveBeenCalledWith(
      `UPDATE Area
      SET CupoTotal = '200',
          CupoOnline = '100'
      OUTPUT inserted.CupoTotal, inserted.CupoOnline
      WHERE Tipo='area'`
    );
    expect(result).toEqual({ CupoTotal: 200, CupoOnline: 100 });
  });

  test('should throw an error when no records are found', async () => {
    const mockResult = {
      recordsets: [[]],
    };
    db.executeQuery.mockResolvedValueOnce(mockResult);

    await expect(index.updateQuota('area', '200', '100')).rejects.toThrow(
      'No se encontraron registros para el área especificada'
    );
  });

  test('should rethrow an error when an exception occurs', async () => {
    const mockError = new Error('Database error');
    db.executeQuery.mockRejectedValueOnce(mockError);

    await expect(index.updateQuota('area', '200', '100')).rejects.toThrow('Database error');
  });
});