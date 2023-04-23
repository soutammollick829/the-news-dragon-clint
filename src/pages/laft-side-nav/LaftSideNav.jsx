import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LaftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h4>All Caterogy</h4>
      <div className="mt-4">
        {categories.map((category) => (
          <p key={category.id}>
            <NavLink
              to={`/category/${category.id}`}
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                };
              }}
            >
              {category.name}
            </NavLink>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LaftSideNav;
