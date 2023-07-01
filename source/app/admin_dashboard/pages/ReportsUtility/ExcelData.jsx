export const getVisitationData = async (startDate, endDate) => {
  var result = null;
  await fetch(`/backend/reports/excelData/visits/${startDate}/${endDate}`)
    .then((res) => {
      if (!res.ok) {
        console.log('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => {
      result = data;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  return result;
};

export const getBody = async (startDate, endDate, area) => {
  var result = null;
  await fetch(`/backend/reports/excelData/financial/${startDate}/${endDate}/${area}`)
    .then((res) => {
      if (!res.ok) {
        console.log('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => {
      result = data;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  return result;
};

export const getPrices = async () => {
  var result = null;
  await fetch(`/tarifas`)
    .then((res) => {
      if (!res.ok) {
        console.log('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => {
      result = data;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  return result;
};

export const getHeader = (prices) => {
  var fill = [
    [
      "Adulto", ("₡"+(prices.Nacional.filter(item=>item.Estatus === "Adulto")[0].Monto)),
      "Niño 6-12", ("₡"+(prices.Nacional.filter(item=>item.Estatus === "Niño 6 a 12 años")[0].Monto)),
      "Niño 0-6", ("₡"+(prices.Nacional.filter(item=>item.Estatus === "Niño 0 a 6 años")[0].Monto)),
      "Adulto 65+", ("₡"+(prices.Nacional.filter(item=>item.Estatus === "Adulto 65 años o más")[0].Monto)),
      "",
      "Adulto", ("$"+(prices.Extranjero.filter(item=>item.Estatus === "Adulto")[0].Monto)),
      "Niño 6-12", ("$"+(prices.Extranjero.filter(item=>item.Estatus === "Niño 6 a 12 años")[0].Monto)),
      "Niño 0-6", ("$"+(prices.Extranjero.filter(item=>item.Estatus === "Niño 0 a 6 años")[0].Monto)),
      "Adulto 65+", ("$"+(prices.Extranjero.filter(item=>item.Estatus === "Adulto 65 años o más")[0].Monto)),
    ],
    [
      "Cant. Tiquetes", "Total",
      "Cant. Tiquetes", "Total",
      "Cant. Tiquetes", "Total",
      "Cant. Tiquetes", "Total",
      "",
      "Cant. Tiquetes", "Total",
      "Cant. Tiquetes", "Total",
      "Cant. Tiquetes", "Total",
      "Cant. Tiquetes", "Total",
    ]
  ]
  return fill;
}
