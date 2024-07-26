
const Modal = ({userListElems, closeModal})=> {
  return (
    <div
      className="modal"
    >
      <article className="modal__content">
        <ul className="modal__data-list">
          {userListElems}
        </ul>
        <button className="modal__close" onClick={closeModal}>Закрыть</button>
      </article>
    </div>
  )
};

export default Modal