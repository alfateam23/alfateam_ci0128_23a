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
