import '../contact.css'
import { Button, Form } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons'

const ContactUs = () => {
    return (
        <>
            <body>
                <br /><br />

                <h1 class="section-header" style={{ color: 'black', fontFamily: 'Arial, sans-serif', fontWeight:"bold" }}> Contact Us</h1>

                <div class="contact-wrapper">

                    <Form id="contact-form" class="form-horizontal" role="form">

                        <Form.Group  className="mb-3" controlId="formBasicEmail">
                            
                            <Form.Control style={{marginTop: '-10px'}}  placeholder="Enter full name" />
                        </Form.Group>
                        

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
   
                        <textarea  class="form-control message" rows="10" placeholder="Write your Message Here..." name="message" required></textarea>
                        <br />

                        <Button style={{marginTop: '-10px', width:'100%', background:'#F4BA1B', borderRadius: '20px'}} class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                            SEND
                        </Button>

                    </Form>



                    <div class="direct-contact-container">

                        <ul class="contact-list" >
                            <li class="list-item" style={{ marginTop: '-50px',marginBottom: '-50px'}}><i class="fa fa-map-marker fa-2x"><span class="contact-text place">FiskBook</span></i></li>
                            <li class="list-item" style={{marginBottom: '-50px'}}><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Nashville, TN</span></i></li>
                            <li class="list-item" style={{marginBottom: '-50px'}}><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">helpdesk@fiskbook.com</a></span></i></li>
                        </ul>



                    </div>

                </div>
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

        </>
    )
}

export default ContactUs