import './App.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope,faCake} from '@fortawesome/free-solid-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
export const Ap =() => {
  return (
    <>
    
      <body>
        <header>
        
        <nav>
            <h1>Your Website</h1>
            <section class="head_options">
            <a href="#about">About Us</a>
            <a href="russia">Russia</a>
            <a href="algeria">Algeria</a>
            <a href="#contacts">Contacts</a>
            </section>
            <button>Sign Up</button>
        </nav>
        </header>

        <hr></hr>

        <section id="about" class="about-us">
        <div>
            <h2>Conecting Russia</h2>
            <h2>and Algeria for mutual growth</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget metus ac turpis facilisis faucibus.</p>
            <button>Sign up</button>
        </div>
        <img src="/img/IMG_9533.jpg" alt="Logo"/>
        
        </section>


        <section id="our-projects" class="our-projects">
        <h2>Our Projects</h2>
        
    </section>

    <section id="our-team" class="our-team">
        <h2>Our Team</h2>
        
    </section>

    <section id="our-services" class="our-services">

        <h2>Our Services</h2>
        <section class="services">
        <div class="services-block">
            {/* <img src="service1.png" alt="Service 1"> */}
            <h3>Service 1</h3>
            <p>Description of Service 1.</p>
        </div>
        <div class="services-block">
            {/* <img src="service2.png" alt="Service 2"> */}
            <h3>Service 2</h3>
            <p>Description of Service 2.</p>
        </div>
        <div class="services-block">
            {/* <img src="service3.png" alt="Service 3"> */}
            <h3>Service 3</h3>
            <p>Description of Service 3.</p>
        </div>
        </section>
        </section>
        

        <section id="contacts" class="contacts">

        <section>
        <h2>Contacs</h2>
        <button>Submit</button>
        </section>
        <section>
        <h3>Follow Us</h3>
        <section class="pils-links">
        <span class="pils"><a href="#" ><FontAwesomeIcon icon={faTelegram} /> Telegram</a></span>
        <span class="pils"><a href="#" ><FontAwesomeIcon icon="fa-brands fa-telegram" />Telegram</a></span>
        <span class="pils"><a href="#" ><FontAwesomeIcon icon="fa-brands fa-telegram" />Telegram</a></span>
        <span class="pils"><a href="#" ><FontAwesomeIcon icon="fa-brands fa-telegram" />Telegram</a></span>
        </section>
        </section>
        </section>



    <footer>
        <nav>
            <a href="russia">Russia</a>
            <p>© 2023 Your Website. All rights reserved.</p>
            <a href="algeria">Algeria</a>
        </nav>
    </footer>



      </body>



    </>
  );
}

export default Ap;