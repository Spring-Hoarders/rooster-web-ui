import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="flex justify-between items-center align-content-center bg-green-500 p-3">
        <div className="flex"></div>
        <div className="flex items-center cursor-pointer space-x-4">
          <div className="flex space-x-8 text-white text-sm">
            <div onClick={() => navigate("/home")}>Home</div>
            <div onClick={() => navigate("/profile")}>Profile</div>
            <div onClick={() => navigate("/dashboard")}>Dashboard</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
