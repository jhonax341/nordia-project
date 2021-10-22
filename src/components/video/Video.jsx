import Teaser from '../img/Corporativo Teaser.mp4';
import ReactPlayer from 'react-player';
import './video.css';

const Video = ()=>{
    return (

 <div id="contenedorVideo">
   <ReactPlayer id="video" url={Teaser} type="video/mp4" controls autoplay/>
 </div>

)
}

export default Video;