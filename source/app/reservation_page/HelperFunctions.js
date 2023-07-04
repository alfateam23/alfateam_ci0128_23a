import { activateModal, checkEmail, SaveReservationFull,
updateUser, SaveReservationUser } from "../form/SaveReservation";

export const ModalManager = async (openModal, setOpenModal,
  modifyModalBody, UserData, setStoredUserData,
  setModalBody, navigate, reservationOldUser) => {
  activateModal(openModal, setOpenModal);
    const result = await checkEmail(modifyModalBody, UserData);
    setStoredUserData(result);
    if (result && result.result.userInfo.EmailExists === false) {
      const result = await SaveReservationFull(UserData);
      setModalBody(result);
      if (result === "Correo Enviado!") {
        setTimeout(() => {
          navigate("/")
        }, 4000);
      }
    } else if (result &&
      result.result.userInfo.EmailExists === true) {
        reservationOldUser(0);
    }
};

export const ManageReservationOldUser = async (update,
  storedUserData, UserData, setModalBody, navigate) => {
  if (update && storedUserData) {
    updateUser(storedUserData, UserData);
  }
  const result = await SaveReservationUser(UserData);
  setModalBody(result);
  if (result === "Correo Enviado!") {
    setTimeout(() => {
      navigate("/")
    }, 4000);
  }
};

export const getAvailability = (userData, setDatesCapacity) => {
  let apiParameters = [];
  apiParameters.push(userData.start_date.toISOString())
  userData.end_date !== '' ? apiParameters.push(
    userData.end_date.toISOString()) : apiParameters.push('no');
  apiParameters.push(userData.area)
  
  fetch(`/backend/capacity/${apiParameters[0]}/${apiParameters[1]}/${apiParameters[2]}`)
  .then((res) => {
    if (!res.ok) {
      console.log('Network response was not ok');
    }
    return res.json();
  })
  .then((data) => setDatesCapacity(data))
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
};

export const updateCapacityValue = (prevCount,
  count, datesCapacity, setDatesCapacity) => {
  let operation = prevCount < count ? '+' : '-';
  if (datesCapacity !== null) {
    const newValues = datesCapacity.map(position => {
      if (operation === '-') {
        return {
          ...position,
          CupoOnlineDia: position.CupoOnlineDia + 1,
        };
      } else {
        return {
          ...position,
          CupoOnlineDia: position.CupoOnlineDia - 1,
        };
      }
    });
    newValues.find((pos) => pos.CupoOnlineDia === 0) !== undefined ?
    alert('No hay suficiente espacio') :
    setDatesCapacity(newValues);
  }
}
