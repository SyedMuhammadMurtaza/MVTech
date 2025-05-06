import Link from "next/link";
import { FaTwitter, FaFacebookF, FaLinkedin, FaGithub, FaMapMarker, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from '../../ContactForm'

const ContactSection = () => {
  return (
    <div className="section zubuz-section-padding2 white-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="zubuz-default-content m-right">
              <h2>Contact our support team</h2>
              <p>
                Book an appointment with our team now! If you have any questions
                about growing your business, contact our team and schedule a
                call.
              </p>
              <div className="zubuz-extara-mt">
                <div className="zubuz-iconbox-wrap-left d-block">
                  <div className="zubuz-iconbox-data data-small">
                    <span style={{marginBottom:"30px"}}>Office Location:</span>
                    <ul>
                      
                      <li style={{display:'flex', alignItems:'center', marginTop:'15px'}}><span> <FaMapMarkerAlt style={{color:"#ee7a34"}}/></span><p className="paraLocation"> <b> Dubai, UAE </b> <br/> Senitinel Business Center </p> </li>
                      <li style={{display:'flex', alignItems:'center', marginTop:'20px'}}><span> <FaMapMarkerAlt style={{color:"#ee7a34"}}/></span><p className="paraLocation"> <b>  Toronto, Canada </b> <br/> Industrious Office Yonge & Bloor </p> </li>
                      <li style={{display:'flex', alignItems:'center', marginTop:'20px'}}><span> <FaMapMarkerAlt style={{color:"#ee7a34"}}/></span><p className="paraLocation"> <b> Karachi, Pakistan </b> <br/> 603 6th Floor Elite Tower </p> </li>
                    </ul>
                  </div>
                </div>
                <div className="zubuz-iconbox-wrap-left d-block">
                  <div className="zubuz-iconbox-data data-small">
                    <span>Social Media:</span>
                    <div className="zubuz-social-icon social-box">
                      <ul>
                        <li>
                          <Link href="https://twitter.com/">
                            <FaTwitter />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://facebook.com/">
                            <FaFacebookF />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.linkedin.com/">
                            <FaLinkedin />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://github.com/">
                            <FaGithub />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
              <ContactForm/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
