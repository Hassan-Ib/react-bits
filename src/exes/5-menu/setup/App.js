import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const categories = items.map((item) => item.category);
const uniqueCat = new Set(categories);

console.log(uniqueCat);
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [cat, setCat] = useState([...uniqueCat]);

  const filterItems = (catigory) => {
    const newItems = items.filter((item) => item.category === catigory);

    if (catigory === "all") {
      setMenuItems(items);
      return;
    }
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>

        <Categories
          items={menuItems}
          categories={cat}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
