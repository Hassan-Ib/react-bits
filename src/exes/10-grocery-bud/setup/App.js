import React, { useState, useEffect, useRef } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = window.localStorage.getItem("list");
  return list ? JSON.parse(list) : [];
};
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });
  const inputRef = useRef(null);

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // display alert
      showAlert(true, "please ender a value", "danger");
    } else if (name && isEditing) {
      // deal with editing
      setList(
        list.map((item) => {
          if (item.id === editId) {
            item.title = name;
            return { ...item, title: name };
          }
          return item;
        })
      );
      setIsEditing(false);
      setName("");
      setEditId(null);
      showAlert(true, "value changed", "success");
    } else {
      // show alert
      showAlert(true, "item added", "success");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };
  const editItem = (itemId) => {
    // isEditing is true here
    // get item name with the id from list
    const editingName = list.find((el) => el.id === itemId).title;
    setIsEditing(true);
    setName(editingName);
    setEditId(itemId);
    showAlert(true, `editing ${editingName}`, "edit");
    inputRef.current.focus();
  };
  const deleteItem = (itemId) => {
    const newList = list.filter((item) => item.id !== itemId);
    setList([...newList]);
    setName("");
    setIsEditing(false);
    showAlert(true, "item deleted", "danger");
  };
  const clearList = () => {
    showAlert(true, "empty list", "danger");
    setList([]);
  };
  useEffect(() => {
    window.localStorage.setItem("list", JSON.stringify(list));
  });

  return (
    <section className="section-center">
      <form action="" className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g eggs"
            value={name}
            ref={inputRef}
            onChange={(e) => {
              setName(inputRef.current.value);
            }}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} editItem={editItem} deleteItem={deleteItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}
export default App;
