import "./footer.scss";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer-top-container">
          <a href="/" className="footer-logo">
            <img src="/pizza-logo.svg" alt="pizza" />
            <p>Куда пицца</p>
          </a>
          <ul>
            <h1>Куда пицца</h1>
            <li>
              <a href="about">О компании</a>
            </li>
            <li>
              <a href="connect">Пользовательское соглашение</a>
            </li>
            <li>
              <a href="about">Условия гарантии</a>
            </li>
          </ul>
          <ul>
            <h1>Помощь</h1>
            <li>
              <a href="about">Ресторан</a>
            </li>
            <li>
              <a href="connect">Контакты</a>
            </li>
            <li>
              <a href="about">Поддержка</a>
            </li>
            <li>
              <a href="about">Отследить заказ</a>
            </li>
          </ul>
          <ul className="contact-list">
            <h1>Контакты</h1>
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
          © Copyright 2021 — Куда Пицца
        </div>
      </div>
    </div>
  );
};

export default Footer;
