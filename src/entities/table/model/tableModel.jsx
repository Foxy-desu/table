import Table from "../table";

const TableModel = ({users={}, source}) => {
  const columnTitles = [
    'фио',
    'возраст',
    'пол',
    'номер телефона',
    'адрес'
  ];
  function renderTableColumnTitles(titles) {
    if(titles.length > 0) {
      return (
        <tr>
          {titles.map((title)=> {
            return <th key={title}>{title}</th>
          })}
        </tr>
      )
    }
  };
  function renderDataFromDummy(users){
    return users.map((user)=> {
      const {firstName,lastName,age,gender,phone,address} = user;
      const city = address.city;
      const street = address.address;
      return (
        <tr key={user.id}>
          <td>{firstName}<br/>{lastName}</td>
          <td>{age}</td>
          <td>{gender}</td>
          <td>{phone}</td>
          <td>{city}<br/>{street}</td>
        </tr>
      )
    })
  };
  function renderDataFromJSONph(users){
    return users.map((user)=> {
      const {name, id:age, username:gender,phone,address} = user;
      const city = address.city;
      const street = address.street;
      const [firstName, lastName] = name.split(' ');
      return (
        <tr key={user.id}>
          <td>{firstName}<br/>{lastName}</td>
          <td>{age}</td>
          <td>{gender}</td>
          <td>{phone}</td>
          <td>{city}<br/>{street}</td>
        </tr>
      )
    })
  };
  function renderTableRows(users, dataSource){
    if(Object.keys(users).length > 0) {
      if(dataSource === 'JSONph') {
        return renderDataFromJSONph(users)
      } else {
        return renderDataFromDummy(users)
      }
    }
  };
  return (
    <>
      <Table
        header={renderTableColumnTitles(columnTitles)}
        body={renderTableRows(users, source)}
      />
    </>
  )
};

export default TableModel;