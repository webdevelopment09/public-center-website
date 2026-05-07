import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>მრავალფუნქციური საზოგადოებრივი ცენტრი</h3>

          <p>
            თანამედროვე სივრცე სპორტის, ჯანმრთელობისა და აქტიური ცხოვრების
            სტილისთვის თბილისში.
          </p>
        </div>

        <div className="footer-socials">
          <a
            href="https://www.facebook.com/profile.php?id=61566704541833&locale=ka_GE"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/multifunctional_publiccenter/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.tiktok.com/@multifunctionalcenter"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} მრავალფუნქციური საზოგადოებრივი ცენტრი.
        </span>
      </div>
    </footer>
  );
}