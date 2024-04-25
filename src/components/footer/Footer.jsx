import { useContext } from "react";
import { LanguageContext } from "../../App";

import "./footer.scss";

const Footer = () => {
  const {languageObj:t} = useContext(LanguageContext)
  return (
    <div id="footer">
      <div className="container">
        <div className="footer-top-container">
          <a href="/" className="footer-logo">
            <img src="/pizza-logo.svg" alt="pizza" />
            <p>{t.brand_name}</p>
          </a>
          <ul>
            <h1>{t.brand_name}</h1>
            <li>
              <a href="about">{t.about}</a>
            </li>
            <li>
              <a href="connect">{t.rules}</a>
            </li>
            <li>
              <a href="warrant">{t.warrant}</a>
            </li>
          </ul>
          <ul>
            <h1>{t.help}</h1>
            <li>
              <a href="about">{t.restauran}</a>
            </li>
            <li>
              <a href="connect">{t.contact}</a>
            </li>
            <li>
              <a href="about">{t.support}</a>
            </li>
            <li>
              <a href="about">{t.track_order}</a>
            </li>
          </ul>
          <ul className="contact-list">
            <h1>{t.contact}</h1>
            <li>
              <a href="about">
                <img src="/phone.svg" alt="phone" />
                +7 (926) 223-10-11
              </a>
            </li>
            <li>
              <a href="3">
                <img src="/Location.svg" alt="location" />
                +7 (926) 223-10-11
              </a>
            </li>
            <li className="medias">
              <a href="3">
                <img src="/facebook.svg" alt="facebook" />
                Facebook
              </a>
              <a href="3">
                <img src="/instagram.svg" alt="instagram" />
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom-container">
          © Copyright 2021 — {t.brand_name}
        </div>
      </div>
    </div>
  );
};

export default Footer;
