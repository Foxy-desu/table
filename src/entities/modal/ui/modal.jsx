import Btn from '../../../shared/btn/btn';
import cl from './modal.module.scss';

const Modal = ({user, closeModal})=> {
  function renderData(filtered) {
    return Object.entries(filtered).map(([key,value]) => {
      if(Array.isArray(value)) {
        value = value.join(' ');
      }
      return (
      <li key={key} className={cl.datalistItem}>
        <p className={cl.itemTitle}>{key}</p>
        <p className={cl.itemData}>{value}</p>
      </li>)
  });
  }
  return (
    <div
      className={cl.modal}
    >
      <article className={cl.content}>
        <ul className={cl.datalist}>
          {renderData(user)}
        </ul>
        <Btn onClick={closeModal}>Закрыть</Btn>
      </article>
    </div>
  )
};

export default Modal