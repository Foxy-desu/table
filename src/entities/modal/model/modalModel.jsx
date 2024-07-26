import Modal from "../ui/modal";

const ModalModel =({user, closeModal})=> {
  const userFiltered = {
    'ФИО': [user.firstName, user.lastName],
    'возраст': user.age,
    'улица': user.address.address,
    'город': user.address.city,
    'рост': user.height,
    'вес':user.weight,
    'телефон': user.phone,
    'почта': user.email
  }

  function renderData(filtered) {
    return Object.entries(filtered).map(([key,value]) => {
      if(Array.isArray(value)) {
        value = value.join(' ');
      }
      return (
      <li key={key} className="modal__content-item">
        <p className="modal__content-title">{key}</p>
        <p className="modal__content-data">{value}</p>
      </li>)
  });
  }

  return (
    <>
      <Modal closeModal={closeModal} userListElems={renderData(userFiltered)}/>
    </>
  )
};

export default ModalModel;