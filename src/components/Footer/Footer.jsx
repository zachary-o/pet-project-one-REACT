import "./Footer.scss"

const Footer = () => {

const today = new Date();
const currentYear = today.getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <p className="footer__copyright">Zakhar Osetskyi 🤘 {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer