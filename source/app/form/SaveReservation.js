import sendEmail from "./SendEmail";

export const activateModal = (openModal, setOpenModal) => {
  setOpenModal(!openModal);
};

export const checkEmail = async (modifyModalBody, UserData) => {
  let result = null;
  await fetch('/backend/insertReservation/checkEmail', {
    method: 'POST',
    body: JSON.stringify({
      userData: UserData
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
    modifyModalBody(data)
  })
  .catch((error) => {
    console.error('Error getting user information:', error);
  });
  return result;
};

export const updateUser = async (storedUserData, UserData) => {
  let result = null;
  await fetch('/backend/insertReservation/updateUser', {
    method: 'PUT',
    body: JSON.stringify({
      userData: UserData,
      storedUserData: storedUserData
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

/**
 * Saves a full reservations (meaning that it comes from
 * a new user)
 */
export const SaveReservationFull = async (userData) => {
  let result = null;
  await fetch('/backend/insertReservation/', {
    method: 'POST',
    body: JSON.stringify({
      userData
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(async (res) => {
    if (!res.ok) {
      console.log('Network response was not ok');
    }
    await fetch(`/backend/reservationCode/${userData.id}`)
    .then((res) => {
      if (!res.ok) {
        console.log('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => result = sendEmail(userData, data[0].Codigo))
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
  return result;
};

/**
 * Saves a reservation from an user that is already on the database
 */
export const SaveReservationUser = async (userData) => {
  let result = null;
  await fetch('/backend/insertReservation/oldUser', {
    method: 'POST',
    body: JSON.stringify({
      userData
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(async (res) => {
    if (!res.ok) {
      console.log('Network response was not ok');
    }
    await fetch(`/backend/reservationCode/${userData.id}`)
    .then((res) => {
      if (!res.ok) {
        console.log('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => result = sendEmail(userData, data[0].Codigo))
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
  return result;
};