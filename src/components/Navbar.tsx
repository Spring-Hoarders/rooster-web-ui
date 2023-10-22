import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="40px" />
      </Link>
      <Link to="/">Home</Link>
      {/* <Link to="/error">error</Link> */}
    </HStack>
  );
};

export default Navbar;
