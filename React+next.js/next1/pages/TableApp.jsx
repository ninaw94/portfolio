import { useState } from 'react'
import Person from './Person'

function TableApp() {

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [entryData, setEntryData] = useState([])

  const tableItems = entryData.map((person, index) => 
    <Person
    key={index}
    firstname={person.firstname}
    lastname={person.lastname}
    onDelete={() => deleteHandler(index)}
    onUpdate={(newFirstname, newLastname) => updateHandler(index, newFirstname, newLastname)}
  />);

  /*let theTable = <p>Sorry, no entries.</p>
  if (entryData.length > 0) {
    theTable = <ul>{tableItems}</ul>
  }*/

  function saveHandler() {
    const person = {
      firstname: firstname,
      lastname: lastname
    }

    setEntryData([...entryData, person])
    setFirstname("")
    setLastname("")
  }

  function deleteHandler(index) {
    const nextEntryData = entryData.slice();
    nextEntryData.splice(index,1);
    setEntryData(nextEntryData);
  }

  function updateHandler(index, newFirstname, newLastname) {
    const nextEntryData = [...entryData];
    nextEntryData[index] = { firstname: newFirstname, lastname: newLastname };
    setEntryData(nextEntryData);
  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="First Name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <button onClick={saveHandler}>Add Person</button>
      </div>
      {entryData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableItems}
          </tbody>
        </table>
      ) : (
        <p>Sorry, no entries.</p>
      )}
    </>
  );
}

export default TableApp

