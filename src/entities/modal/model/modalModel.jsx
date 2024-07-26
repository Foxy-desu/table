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

  return (
    <>
      <Modal closeModal={closeModal} user={userFiltered}/>
    </>
  )
};

export default ModalModel;