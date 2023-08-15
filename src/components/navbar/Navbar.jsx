import logo from "../../assets/image/logo.jpg";
import styled from "./navbar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
function Navbar() {
  
  return (
    <div className={styled.container}>
      <div className={styled.navbar}>
        <AiOutlineMenu className={styled.menuIcone} />
        <img className={styled.logo} src={logo} alt="" />
          <ul className={styled.navbarItem}>
            <li><a  className={styled.activMenu} href="#">بخش منو</a></li>
            <li><a href="#">بخش منو</a></li>
            <li><a href="#">بخش منو</a></li>
            <li><a href="#">بخش منو</a></li>
            <li><a href="#">بخش منو</a></li>
          </ul>
          <Link to="/Login"><RiAccountCircleFill className={styled.avatar} /></Link>
          
        </div>
    </div>
  );
}

export default Navbar;
