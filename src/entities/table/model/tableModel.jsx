import Table from "../table";

const TableModel = ({ users = {}, openModal}) => {
  const columnTitles = ["фио", "возраст", "пол", "номер телефона", "адрес"];
  function renderTableColumnTitles(titles) {
    if (titles.length > 0) {
      return (
        <tr>
          {titles.map((title) => {
            return <th key={title}>{title}</th>;
          })}
        </tr>
      );
    }
  }
  function renderData(users) {
    if(Object.keys(users).length > 0) {
      return users.map((user) => {
        const { firstName, lastName, age, gender, phone, address } = user;
        const city = address.city;
        const street = address.address;
        return (
          <tr key={user.id} onClick={()=> {openModal(user)}}>
            <td>
              {firstName}
              <br />
              {lastName}
            </td>
            <td>{age}</td>
            <td>{gender}</td>
            <td>{phone}</td>
            <td>
              {city}
              <br />
              {street}
            </td>
          </tr>
        );
      });
    }
  }
  
  return (
    <>
      <Table
        header={renderTableColumnTitles(columnTitles)}
        body={renderData(users)}
      />
    </>
  );
};

export default TableModel;
