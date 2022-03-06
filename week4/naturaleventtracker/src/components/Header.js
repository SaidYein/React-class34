import { RiTornadoLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <RiTornadoLine
          style={{ width: "2rem", height: "2rem", marginRight: "64px" }}
        />
        Natural Event Tracker <span>(Powered by NASA)</span>
      </h1>
    </header>
  );
};

export default Header;
