import styled from './titleSection.module.css'
function TitleSection(proms){
    return(
        <div className={styled.container} style={{direction:'rtl'}}>
            <h3 className={styled.title}>{proms.title}</h3>
        </div>
    );
}
export default TitleSection;