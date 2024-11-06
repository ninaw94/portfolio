import { useState,useRef,useEffect } from 'react'
//import './MyLi.css'

function Person({ firstname, lastname, onDelete, onUpdate }) {
    const [editing, setEditing] = useState(false);
    const [myFirstname, setMyFirstname] = useState(firstname);
    const [myLastname, setMyLastname] = useState(lastname);
    const myFirstnameInput = useRef(null);
    const myLastnameInput = useRef(null);
  
    useEffect(() => {
      if (editing) {
        if (myFirstnameInput.current) {
          myFirstnameInput.current.focus();
        } else if (myLastnameInput.current) {
          myLastnameInput.current.focus();
        }
      }
    }, [editing]);
  
    function editHandler() {
      setEditing(true);
    }
  
    function updateHandler() {
      setEditing(false);
      onUpdate(myFirstname, myLastname);
    }
  
    return (
      <tr className={editing ? "editing" : ""}>
        <td>
          {!editing ? (
            <span className="view" onDoubleClick={editHandler}>
              {firstname}
            </span>
          ) : (
            <input
              className="edit"
              onBlur={updateHandler}
              value={myFirstname}
              onChange={(e) => setMyFirstname(e.target.value)}
              ref={myFirstnameInput}
            />
          )}
        </td>
        <td>
          {!editing ? (
            <span className="view" onDoubleClick={editHandler}>
              {lastname}
            </span>
          ) : (
            <input
              className="edit"
              onBlur={updateHandler}
              value={myLastname}
              onChange={(e) => setMyLastname(e.target.value)}
              ref={myLastnameInput}
            />
          )}
        </td>
        <td><button onClick={onDelete}>x</button></td>
      </tr>
    );
  }
  
  export default Person;
  