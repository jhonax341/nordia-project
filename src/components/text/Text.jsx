
import comic4 from '../img/Comic 2.jpg';
import comic1 from '../img/Comic 1.jpg';
import comic2 from '../img/Comic 2.jpg';
import comic3 from '../img/comic 4.jpg';


const Text = ()=>{
  return (
    <div class="text-center">
    <a href="https://www.marvel.com/unlimited?cid=SEM_Google_20200302_unlimited_Brand&gclid=Cj0KCQjwpdqDBhCSARIsAEUJ0hP-D60eQZfsAzipFs3cRoi3XUGajuKRPh8T3oiB1mIJg00QseO-QcUaAhSkEALw_wcB">
    <button type="button" class="btn btn-primary">
      <img src={comic4} class="rounded" height="300" width="200"/>
    </button>
  </a>
    <a href="https://www.queenonline.com/es">
    <button type="button" class="btn btn-primary"> 
      <img src={comic1} class="rounded" height="300" width="200"/></button>
      </a>
  
  <a href="https://surtido.pe/la-sexta-parte-de-jojos-bizarre-adventure-stone-ocean-confirma-su-anime/">
      <button type="button" class="btn btn-primary">
     <img src={comic2} class="rounded" height="300" width="200"/>
      </button>
    </a>
      <a href="https://culturaimpaciente.com/series/artista-convierte-los-episodios-de-black-mirror-en-portadas-de-comic/">
    <button type="button" class="btn btn-primary" href="">
      <img src={comic3} class="rounded" height="300" width="200" /></button></a>
  </div>
      
  )
}


export default Text;