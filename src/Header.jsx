import logo from "../src/images/react.png";

const Header = () => {
  return (
    <div className="pt-3 py-3 pl-2" style={{ borderBottom: "1px solid white" }}>
      <img
        alt="logo"
        src={logo}
        style={{ height: "35px", verticalAlign: "top" }}
      ></img>
      <span className="h2 pt-4 m-2 text-white">CountOpedia</span>
    </div>
  );
};

export default Header;
 