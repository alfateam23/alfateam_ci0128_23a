export const checkVisitorExistance = async (id) => {
  var result = null;
  await fetch(`/backend/service/checkVisitor/${id}`)
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

export const getServices = async () => {
  var result = null;
  await fetch(`/backend/service/getServices`)
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

export const saveService = async (serviceType, useTime, dateTime, id) => {
  const formattedDateTime = values(dateTime);
  let result = null;
  await fetch('/backend/service/saveService', {
    method: 'POST',
    body: JSON.stringify({
      id: id,
      name: serviceType,
      time: useTime,
      date: formattedDateTime[0],
      hour: formattedDateTime[1]
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => {
    if (!res.ok) {
      console.log('Network response was not ok');
    }
    return res.json();
  }).then((data) => {
    result = data;
  })
  .catch((error) => {
    console.error('Error getting user information:', error);
  });
  return result;
};

export const values = (dateTime) => {
  const year = dateTime.getFullYear();
  const month = String(dateTime.getMonth() + 1).padStart(2, '0');
  const day = String(dateTime.getDate()).padStart(2, '0');
  
  const date = `${year}-${month}-${day}`;

  const hours = String(dateTime.getHours()).padStart(2, '0');
  const minutes = String(dateTime.getMinutes()).padStart(2, '0');
  const seconds = String(dateTime.getSeconds()).padStart(2, '0');
  
  const time = `${hours}:${minutes}:${seconds}`;
  return [date,time];
}
