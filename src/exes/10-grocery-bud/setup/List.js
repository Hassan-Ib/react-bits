import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, deleteItem, editItem }) => {
  const handleClick = (e) => {
    const btn = e.target.closest(".btn");
    if (!btn) return;
    const btnClassList = btn.classList;
    const itemId = btn.parentNode.dataset.id;
    if (!btnClassList.contains("delete-btn")) {
      editItem(itemId);
    } else {
      deleteItem(itemId);
    }
  };

  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { title, id } = item;
        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div className="btn-container" data-id={id} onClick={handleClick}>
              <button type="button" className="edit-btn btn">
                <FaEdit />
              </button>

              <button type="button" className="delete-btn btn">
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
