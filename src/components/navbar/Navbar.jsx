import logoBarra from '../img/CJK.png'
import BotonCabecera from './Boton'
import Menu from './Menu'
import Buscar from './buscar'

const NavBar = ()=>{
    return (
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <BotonCabecera/>
                <a class="navbar-brand" href="#"> <img src={logoBarra} height="70" /> </a>
            
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <Menu/>
                    <Buscar/>
                </div>
            </nav>
        </div>
        
    )
}


export default NavBar;