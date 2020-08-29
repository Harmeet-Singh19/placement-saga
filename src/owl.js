import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel'; 
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import './owl.css' 
import card1 from './img/card1.3200586f.svg'
import card2 from './img/card2.9642bb74.svg'
import card3 from './img/download.jfif'
import card4 from './img/card4.b5a08772.svg'

export class Owl extends Component{
    render()
    {
        return(
           
                <OwlCarousel items={2}
                className="owl-theme"
                loop={true}
                autoplay ={true}
                slideBy={2}
                autoplayTimeout={1700}
                autoplayHoverPause={false}
                navigation={false}
                autoHeightClass
                margin={2}>
                    
                    <div className="Image-carousel">
                     <div className="img"><img src={card1} alt=""/></div>
                    <div className="Text-carousel">Question<br></br> Library</div>
                    <div className="notch"></div>
                    </div>
                    <div className="NoImage-carousel">
                        <div className="NI-content">
                            250 HANDPICKED QUESTIONS FOR CODING INTERVIEWS IN LEADING COMPANIES.
                        </div>
                        <div className="notch2">

                        </div>
                    </div>
                    
                
                   <div className="Image-carousel">
                     <div className="img"><img src={card2} alt=""/></div>
                    <div className="Text-carousel">Highly<br></br> Qualified<br></br>Mentors</div>
                    <div className="notch"></div>
                    </div>
                    <div className="NoImage-carousel">
                        <div className="NI-content">
                            HIGHLY<br></br>QUALIFIED<br></br>MENTORS FROM<br></br>LEADING TECH<br></br>GIANTS
                        </div>
                        <div className="notch2">

                        </div>
                    </div>
                    <div className="Image-carousel">
                     <div className="img"><img src={card3} alt=""/></div>
                    <div className="Text-carousel">The Perfect<br></br>Playground</div>
                    <div className="notch"></div>
                    </div>
                    <div className="NoImage-carousel">
                        <div className="NI-content">
                            THE PERFECT<br></br>PLAYGROUND TO<br></br>PRACTICE YOUR<br></br>CODING<br></br>INTERVIEW<br></br>QUESTIONS.
                        </div>
                        <div className="notch2">

                        </div>
                    </div>
                    <div className="Image-carousel">
                     <div className="img"><img src={card4} alt=""/></div>
                    <div className="Text-carousel">Mock<br></br> Tests</div>
                    <div className="notch"></div>
                    </div>
                    <div className="NoImage-carousel">
                        <div className="NI-content">
                            FINAL TOUCH WITH COMPANY SPECIFIC MOCK TESTS.
                        </div>
                        <div className="notch2">

                        </div>
                    </div>
                 
                </OwlCarousel>
          
           
        )
    }
}
export default Owl
