import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import Possibilities from "../../components/possibilities/Possibilities";
import SelectedPhotos from "../../components/selectedPhotos/SelectedPhotos";
import TitleSection from "../../components/titleSection/TitleSection";
import CourseSport from "../../components/courseSport/CourseSport";
import Materiel from "../../components/materiel/Materiel";
import NewVideo from "../../components/newVideo/NewVideo";
import Footer from "../../components/footer/Footer";
import styled from "./home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
function Home() {

  const [dataPhotos, setDataPhotos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/selected_photos")
      .then((result) => {
        setDataPhotos(result.data.data);
      })
      .catch((error) => {
        alert("data not found [selected_photos]");
      });
  }, []);
  //--------------------------------------------------
  const [dataCourse, setDataCourse] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8001/course_sport")
      .then((result) => {
        setDataCourse(result.data.data);
      })
      .catch((error) => {
        alert("data not found [course_sport]");
      });
  }, []);
  //----------------------------------------------------
  const[dataMateriel,setDataMateriel]=useState([]);
  useEffect(()=>{
    axios
    .get("http://localhost:8002/materiel")
    .then((result)=>{
      setDataMateriel(result.data.data);
    })
    .catch((error)=>{
      alert("data not found [materiel]");
    })
  },[]);

  return (
    <div className="">
      <Navbar />
      <div className={styled.container}>
        <Slider />
        <Possibilities />

        <TitleSection title="عکس های برگزیده" />
        {/* ---------map for selected photos ---------*/}
        <div className={styled.selectedPhotosItems}>
          {dataPhotos.map((photo) => (
            <SelectedPhotos photo={photo} />
          ))}
        </div>

        <TitleSection title="کلاس ها" />
        {/* ---------map for selected photos ---------*/}
        <div className={styled.courseSportItems}>
          {dataCourse.map((courseSport) => (
            <CourseSport courseSport={courseSport} />
          ))}
        </div>

        <TitleSection title="اموزش ها" />
        <NewVideo />

        <TitleSection title="تجهیزات" />
        <div className={styled.materielItems}>
          {dataMateriel.map((materiel) => (
            <Materiel materiels={materiel} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Home;
