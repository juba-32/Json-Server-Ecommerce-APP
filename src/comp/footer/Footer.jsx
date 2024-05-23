import "./Footer.css";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import img from "../../assets/logo.png";
const Footer = () => {
  return (
    <>
        <div className="footer">
          <div className="logo">
            <img src={img} alt="" />
          </div>
          <div className="footer-sec">
            <ul>
              <h3>customer support</h3>
              <li>
                <i>
                  <IoIosArrowForward />
                </i>
                <p>about us</p>
              </li>
              <li>
                <i>
                  <IoIosArrowForward />
                </i>
                <p>privacy policy</p>
              </li>
              <li>
                <i>
                  <IoIosArrowForward />
                </i>
                <p>terms & conditions</p>
              </li>
              <li>
                <i>
                  <IoIosArrowForward />
                </i>
                <p>product returns</p>
              </li>
            </ul>
          </div>
        
          <div className="footer-sec">
            <ul>
              <h3>quick links</h3>
        
              <li>
                <i>
                  <IoIosArrowForward />
                </i>
                <p>product</p>
              </li>
              <li>
                <i>
                  <IoIosArrowForward />
                </i>
                <p>profile</p>
              </li>
              <li>
                <i>
                  <IoIosArrowForward />
                </i>
                <p>contact</p>
              </li>
              <li>
                <i>
                  <IoIosArrowForward />
                </i>
                <p>terms</p>
              </li>
            </ul>
          </div>
          <ul className="sochial-links">
            <li>
              <i>
                <FaFacebookF />
              </i>
            </li>
            <li>
              <i>
                {" "}
                <TiSocialTwitter />
              </i>
            </li>
            <li>
              <i>
                <FaLinkedinIn />
              </i>
            </li>
            <li>
              <i>
                <FaYoutube />
              </i>
            </li>
          </ul>
        </div>
        
        
      <div className="copyright">
          <p>
            <span>copyright </span> <i>@</i> <b> ahmed bendary. </b>
            <span> all right reserved</span>
          </p>
        </div>
    </>
  );
};

export default Footer;
