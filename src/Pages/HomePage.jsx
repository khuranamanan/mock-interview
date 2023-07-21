import { useState } from "react";
import { PRODUCTS } from "../Data/data";

function HomePage() {
  const [checkbox, setCheckBox] = useState([]);

  const categories = PRODUCTS.reduce(
    (result, { category }) =>
      result.includes(category) ? result : [...result, category],
    []
  );

  function handlecheckboxSelection(event) {
    if (checkbox.includes(event.target.value)) {
      setCheckBox(checkbox.filter((cat) => cat !== event.target.value));
    } else {
      setCheckBox([...checkbox, event.target.value]);
    }
  }

  const filterPro =
    checkbox.length === 0
      ? PRODUCTS
      : PRODUCTS.filter(({ category }) => checkbox.includes(category));

  const productsMapped = filterPro.map((pro, index) => (
    <div key={index} className="p-4 my-2">
      <h2>{pro.name}</h2>
      <p>{pro.price}</p>
      <p>{pro.category}</p>
    </div>
  ));

  return (
    <div>
      <div>
        {categories.map((cat) => (
          <label key={cat}>
            <input
              type="checkbox"
              value={cat}
              onChange={handlecheckboxSelection}
              checked={checkbox.includes(cat)}
            />{" "}
            {cat}
          </label>
        ))}
      </div>
      <div>{productsMapped}</div>
    </div>
  );
}

export default HomePage;
