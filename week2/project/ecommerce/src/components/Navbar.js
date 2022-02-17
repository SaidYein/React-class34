import Spinner from "./Loader/Loader";

const Navbar = ({ handleList, categories, isLoading }) => {
  return isLoading ? (
    <Spinner />
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
