
import '../HomeF/Home.css'
import GradPic from '../Pictures/Gradschool.jpg'
import Mentorship from '../Pictures/Mentorship.jpg'
import Research from '../Pictures/Research.jpg'
import StudyAbroad from '../Pictures/Study-Abroad.png'
import Scholarship from '../Pictures/Scholarship.jpg'
import Internship from '../Pictures/Internship.jpg'
import Hackathon from '../Pictures/Hackathon.jfif'
import OnCampus from '../Pictures/On-Campus.jfif'
import { Carousel } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';
import { useState } from 'react'
import './reviews.css';

const logout =()=>{
    localStorage.clear()
    window.location.reload()
}
const Home = () => {
    const [index, setIndex] = useState(0);
    

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };

    return (
        <>
            <body className='homeback'>
                <br /><br />
                <div className="text-opp">
                    <h1>Our Offerings</h1>
                </div>
                <div style={{backgroundColor:"#EAD650"}}>
                    <Carousel activeIndex={index} onSelect={handleSelect} style={{display:"flex", justifyContent:"center", alignItems:"center", width:"700px", marginLeft: "25%"}}>

                    <Carousel.Item>
                        
                        <img src={Scholarship} height="350px" style={{width:"50%"}} alt="" />
                        <Carousel.Caption style={{color:'#F4BA1B', fontWeight:'bolder'}}>Scholarships</Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        
                        <img src={Research} height="350px" style={{width:"50%"}} alt="" />
                        <Carousel.Caption style={{color:'#F4BA1B', fontWeight:'bolder'}}>Research</Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                       
                        <img src={GradPic} height="350px" style={{width:"50%"}} alt="" />
                        <Carousel.Caption style={{color:'#F4BA1B', fontWeight:'bolder'}}>Graduation</Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        
                        <img src={Internship} height="350px" style={{width:"50%"}} alt="" />
                        <Carousel.Caption style={{color:'#F4BA1B', fontWeight:'bolder'}}>Internship</Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Carousel.Caption style={{color:'#F4BA1B', fontWeight:'bolder'}}>Mentorship</Carousel.Caption>
                        <img src={Mentorship} height="350px" style={{width:"50%"}} alt="" />
                    </Carousel.Item>
                    
                    <Carousel.Item>
                    <Carousel.Caption style={{color:'#F4BA1B', fontWeight:'bolder'}}>Hackathon</Carousel.Caption>
                        <img src={Hackathon} height="350px" style={{width:"50%"}} alt="" />
                        
                    </Carousel.Item>

                    <Carousel.Item >
                    <Carousel.Caption style={{color:'#F4BA1B', fontWeight:'bolder'}}>Study Abroad</Carousel.Caption>
                        <img src={StudyAbroad} height="350px" style={{width:"50%"}} alt="" />
                        
                    </Carousel.Item>

                    <Carousel.Item>
                    <Carousel.Caption style={{color:'#F4BA1B', fontWeight:'bolder'}}>On Campus Job Opportunities</Carousel.Caption>
                        <img src={OnCampus} height="350px" style={{width:"50%"}} alt="" />
                        
                    </Carousel.Item>
                </Carousel>
                </div>

       

                <br /><br />
                <div className="container-3" style={{color:"black"}}>
                    <div id="about-fiskbook">
                        FiskBook is a website created by the students of Fisk University to make different available opportunities spread among the Fisk University with an intention of whole school participation in the opportunities. The creators of FiskBook are Aashish Panthi, Netra Nyaupane, Rasneet Singh, and Rejin Nepal.
                    </div>
                </div>

                <br /><br />


                <div className="end-part">
                    <div>
                        <div className="connection">Connect with us SOCIALLY!!</div>
                        <div className="social-icons">
                        <a href="https://youtube.com">
                            <SocialIcon  network="youtube" ></SocialIcon>
                        </a>
                        
                        <a href="https://facebook.com">
                            <SocialIcon  network="facebook"  ></SocialIcon>
                        </a>
                        
                        <a href="https://instagram.com">
                            <SocialIcon network="instagram" ></SocialIcon>
                        </a>
                    </div>
                    </div>
                </div>

                <footer className="social-footer">
                    
                </footer>

                <footer>
                    <p className="cr">© FiskBook 2023</p>
                </footer>

            </body>
        </>

    )
}

export default Home
