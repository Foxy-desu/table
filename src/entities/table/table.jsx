
const Table = ({header=null, body=null, footer=null}) => {
  return (
    <table className="table">
      {header && <thead className="table__head">{header}</thead>}
      {body && <tbody className="table__body">{body}</tbody>}
      {footer && <tfoot className="table__footer">{footer}</tfoot>}
    </table>
  )
};

export default Table;