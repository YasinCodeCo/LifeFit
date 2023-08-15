import styled from "./materiel.module.css";
function Materiel(propsM) {
  return (
    <>
      <div className={styled.item}>
        <p>{propsM.materiels.M_name}</p>
        <img src={propsM.materiels.M_imge} alt="" />
      </div>
    </>
  );
}
export default Materiel;
