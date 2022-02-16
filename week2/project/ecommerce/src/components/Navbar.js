const Navbar = ({ handleList, categories, isLoading }) => {
  return isLoading ? (
    <p style={{ textAlign: "center" }}>Getting categories....</p>
  ) : (
    <ul className="navbar">
      {categories.map((item, index) => {
        return (
          <li
            key={index}
            className="navItem"
            onClick={() => {
              handleList(item);
            }}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
