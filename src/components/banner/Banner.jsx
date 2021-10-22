import kenneth from '../img/banner 2 kenneth.jpg'
import Jhonatan from '../img/banner 2 jhonatan.jpg'
import Camila from '../img/banner principal.jpg'

const Banner = ()=>{
    return (
  
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={Camila} class="d-block w-100"  width="180"/>
      </div>
      <div class="carousel-item">
        <img src={kenneth} class="d-block w-100" width="180"/>
      </div>
      <div class="carousel-item">
        <img src={Jhonatan} class="d-block w-100" width="180"/>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
</div>
        
        
    )
}

export default Banner;