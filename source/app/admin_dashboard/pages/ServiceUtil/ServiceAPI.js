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
