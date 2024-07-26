import cl from './btn.module.scss';

const Btn =({children, ...props})=> {
  return (
    <button {...props} className={cl.btn}>
      {children}
    </button>
  )
};

export default Btn;