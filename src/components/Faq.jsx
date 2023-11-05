import '../Faq/faq.css'
import {Accordion} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'



const Faq = () => {

    const handleEnter = (e) => {
        e.target.style.background = '#24364C'
        e.target.style.color = "white"
    }
    const handleLeave =(e) =>{
        e.target.style.background = 'white'
        e.target.style.color = '#24364C'
    }
    
    return (
        <>
            <body> 
                <div className="Container">
                    <div className="UpperContainer">
                        <div className="ask">
                            <h2 style={{color: 'white', marginTop: '20px'}}id="help">How can we help you?</h2>
                            <Link to='/contactus'>
                                <button style={{marginTop: '20px'}} type="button" id="button1" >CONTACT US</button>
                            </Link>
                        </div>
                    </div>
                    <div className="LowerContainer">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0" >
                                <Accordion.Header onMouseEnter={handleEnter} onMouseLeave={handleLeave}>What should we include in our posts?</Accordion.Header>
                                <Accordion.Body >
                                The posts should include brief information of the program along with application deadline for internships and event date for events.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" >
                                <Accordion.Header onMouseEnter={handleEnter} onMouseLeave={handleLeave}>Can only Fisk students apply?</Accordion.Header>
                                <Accordion.Body>
                                No the information provided is open to everyone.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" >
                                <Accordion.Header onMouseEnter={handleEnter} onMouseLeave={handleLeave}>Does applying guarantee an acceptance?</Accordion.Header>
                                <Accordion.Body>
                                No, it does not. Our role is just to compile the available opportunities.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" >
                                <Accordion.Header onMouseEnter={handleEnter} onMouseLeave={handleLeave}>When is the right time to apply?</Accordion.Header>
                                <Accordion.Body>
                                There is no such right time to apply as long as it is before the deadline, but the earlier the better.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4" >
                                <Accordion.Header onMouseEnter={handleEnter} onMouseLeave={handleLeave}>How can I get in touch with you?</Accordion.Header>
                                <Accordion.Body>
                                Send us a message in our contact us form.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
                <br /><br />

                <div className="end-part">
                    <div className="connection">Connect with us SOCIALLY !!! </div>

                    <footer>
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
                        <p className="cr">© FiskBook 2022</p>
                    </footer>
                </div>
                {/* <!-- for container --> */}

                {/* <!-- <div class="ContactUs">
    <h1>Has something not been adressed?</h1>
    <button type="button"><i class="contact">Contact Us</i></button>
</div> --> */}

            </body >
        </>
    )
}

export default Faq