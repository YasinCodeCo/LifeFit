import styled from "./courseSport.module.css";
function CourseSport(propsCS) {
  return (
    <>
        <div className={styled.item}>
          <p className={styled.itemTitle}>{propsCS.courseSport.CS_name}</p>
          <img src={propsCS.courseSport.CS_imge} alt="cross" />
        </div>
    </>
  );
}
export default CourseSport;
