import "./input.css";
import { AiOutlineUser } from "react-icons/ai";
function Input(props) {
  return (
    <>
      <div className="divInput">
        {/* <label className="lable" htmlFor="">موضوع</label> */}

        <input className="input" type={props.typeName} placeholder={props.placeholderName}/>

      </div>
    </>
  );
}
export default Input;
