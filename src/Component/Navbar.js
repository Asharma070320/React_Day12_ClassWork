import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar(props) {
    return (
      <nav class="navbar">
        <div class="logos">
          <img class="logo" src="https://flowbite.com/docs/images/logo.svg" />
          <span class="GeekFoods">GeekFoods</span>
        </div>
  
        {/* lists */}
        <ul>
          <Link className="home" to="/"><li>Home</li> </Link>
          <Link className="link" to="/Quote"><li>Quote</li></Link>
          <Link className="link" to="/Resturants"><li>Resturants</li></Link>
          <Link className="link" to="/Foods"><li>Foods</li></Link>
          <Link className="link" to="/Contact"><li>Contact</li></Link>
        </ul>
        <div class="btn">
          <button class="getStarted">Get Started</button>
        </div>
      </nav>
    );
  }
  export default Navbar;