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
