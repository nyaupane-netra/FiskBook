import '../AboutUs/AboutUs.css' 
import nabin from '../AboutUs/nabin.jpg'
import aashish from '../AboutUs/aashish.jpg'
import rejin from '../AboutUs/rejin.jpg'
import rasneet from '../AboutUs/myself.jpg'
import { SocialIcon } from 'react-social-icons'


const About = () =>{
    return (
        <body>
        <div style={{ color: 'black', fontFamily: 'Arial, sans-serif', fontWeight:"bold" }}>
            <div class="vision">
                <h1> OUR VISION </h1>
            </div>
            <div class="vstatement">
                <p> "To Build largest community of students for acessing opportunties"</p>
            </div>

            <div class="vision">
                <h1> OUR MISSION </h1>
            </div>
            <div class="mstatement">
                <p> "To elevate the academic pursuits of students by guaranteeing awareness about  opportunities" </p>
            </div>

            <div class="vision">
                <h1> OUR VALUES </h1>
            </div>
            <div className="mstatement">
                <p>Student Focused | Collaboration | Success</p>
            </div>
        </div>

        <div class="wrapper" style={{ color: 'black', fontFamily: 'Arial, sans-serif', fontWeight:"bold" }}>
            <h1>Our Team</h1>
            <div class="our_team">
                <div class="team_member">
                  <div class="member_img">
                     <img src={aashish} alt="our_team"/>
                    <div class="social_media">
                        <a href='https://facebook.com/'><SocialIcon  network="facebook"  ></SocialIcon> </a>
                        <a href='https://twitter.com/'><SocialIcon  network="twitter"  ></SocialIcon></a>
                        <a href='https://instagram.com/'><SocialIcon network="instagram" ></SocialIcon></a>
                     </div>
                  </div>
                  <h3>Aashish Panthi</h3>
                  <span>Freshman</span>
                  <p>Computer Science Major</p>
                </div>
                <div class="team_member">
                   <div class="member_img">
                     <img src={nabin} alt="our_team"/>
                     <div class="social_media">
                        <a href='https://facebook.com/'><SocialIcon  network="facebook"  ></SocialIcon> </a>
                        <a href='https://twitter.com/'><SocialIcon  network="twitter"  ></SocialIcon></a>
                        <a href='https://instagram.com/'><SocialIcon network="instagram" ></SocialIcon></a>
                     </div>
                  </div>
                  <h3>Netra Neupane</h3>
                  <span>Sophomore</span>
                  <p>Computer Science Major </p>
              </div>
                <div class="team_member">
                   <div class="member_img">
                     <img src={rasneet} alt="our_team"/>
                     <div class="social_media">
                        <a href='https://facebook.com/'><SocialIcon  network="facebook"  ></SocialIcon> </a>
                        <a href='https://twitter.com/'><SocialIcon  network="twitter"  ></SocialIcon></a>
                        <a href='https://instagram.com/'><SocialIcon network="instagram" ></SocialIcon></a>
                     </div>
                  </div>
                  <h3>Rasneet Singh</h3>
                  <span>Senior</span>
                  <p>Computer Science Major </p>
              </div>
                <div class="team_member">
                   <div class="member_img">
                     <img src={rejin} alt="our_team"/>
                     <div class="social_media">
                        <a href='https://facebook.com/rejinnepal1'><SocialIcon  network="facebook"  ></SocialIcon> </a>
                        <a href='https://twitter.com/rejinnepal'><SocialIcon  network="twitter"  ></SocialIcon></a>
                        <a href='https://instagram.com/rejinnepal'><SocialIcon network="instagram" ></SocialIcon></a>
                     
                       
                     </div>
                  </div>
                  <h3>Rejin Nepal</h3>
                  <span>Junior</span>
                  <p>Computer Science and Physics Major</p>
              </div>  
            </div>
        </div>
        <br/><br/><br/>
        
        <div class="end-part">
                    <div class="connection">Connect with us SOCIALLY !!! </div>

                    <footer class="social-footer">
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
                    </footer>

                    <footer>
                        <p class="cr">© FiskBook 2022</p>
                    </footer>
                </div>
  
    </body>
    )
}

export default About