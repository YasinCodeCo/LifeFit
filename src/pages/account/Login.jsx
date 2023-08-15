import Input from "../../components/input/Input";
import styled from "./login.module.css";
import { Link } from "react-router-dom";
import {AiFillHome} from"react-icons/ai"
function Login(){
    return(
        <>
        <div className={styled.backToHome}>
            <Link to="/"><AiFillHome size={25} color="#fff"/></Link>
        </div>

        <div className={styled.loginInfo}>
        <Input placeholderName="نام کاربری" typeName="type" />
        <Input  placeholderName="پسورد" typeName="password" />
            <button className={styled.btnLoginInfo}>ورود</button>

            <span>رمز خود را فراموش کردید</span>
        </div>
        </>
    );
}
export default Login;