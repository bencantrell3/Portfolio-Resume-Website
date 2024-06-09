33
function ListGroup() {
  const items = [
    
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
    
  ];

const handleClick = (event) => console.log(event);


  const getMessage = () => {
    return ;
  }
  if (items.length === 0) {
    return(
    <>
      <h1>List</h1>
      <p>No item found</p>
    </>
    );
  }

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul ClassName="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
