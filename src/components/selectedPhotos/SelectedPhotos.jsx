import styled from "./selectedPhotos.module.css";
function SelectedPhotos(propsSPI) {
  // propsSPI =>props Selected Photos Img
  console.log(propsSPI.photo.SP_imge);
  return (
    <>
      <div className={styled.item}>
        <img src={propsSPI.photo.SP_imge} alt="" />
      </div>
    </>
  );
}
export default SelectedPhotos;
