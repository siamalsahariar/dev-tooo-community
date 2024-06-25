export default function Footer() {
  return (
    <footer className="crayons-footer print-hidden">
      <div id="footer-container" className="crayons-footer__container">
        <p className="fs-s crayons-footer__description">
          <a
            className="c-link c-link--branded fw-medium"
            aria-label="DEV Community Home"
            href="/"
          >
            DEV Community
          </a>{" "}
          — A constructive and inclusive social network for software developers.
          With you every step of your journey.
        </p>
        <ul className="footer__nav-links flex gap-2 justify-center flex-wrap fs-s p-0">
          <li className="footer__nav-link flex items-center">
            <a href="/">Home</a>
            <span className="dot ml-2"></span>
          </li>
          <li className="footer__nav-link flex items-center">
            <a href="/listings">Listings</a>
            <span className="dot ml-2"></span>
          </li>
          <li className="footer__nav-link flex items-center">
            <a href="/pod">Podcasts</a>
            <span className="dot ml-2"></span>
          </li>
          <li className="footer__nav-link flex items-center">
            <a href="/videos">Videos</a>
            <span className="dot ml-2"></span>
          </li>
          <li className="footer__nav-link flex items-center">
            <a href="/tags">Tags</a>
            <span className="dot ml-2"></span>
          </li>
          <li className="footer__nav-link flex items-center">
            <a href="/faq">FAQ</a>
            <span className="dot ml-2"></span>
          </li>
          <li className="footer__nav-link flex items-center">
            <a href="https://shop.forem.com">Forem Shop</a>
            <span className="dot ml-2"></span>
          </li>
          <li className="footer__nav-link flex items-center">
            <a href="/sponsorships">Sponsors</a>
            <span className="dot ml-2"></span>
          </li>
          <li className="footer__nav-link flex items-center">
            <a href="/about">About</a>
            <span className="dot ml-2"></span>
          </li>
          <li className="footer__nav-link flex items-center">
            <a href="/contact">Contact</a>
            <span className="dot ml-2"></span>
          </li>
          <li className="footer__nav-link flex items-center">
            <a href="/guides">Guides</a>
            <span className="dot ml-2"></span>
          </li>
          <li className="footer__nav-link flex items-center">
            <a href="/software-comparisons">Software comparisons</a>
            <span className="dot ml-2"></span>
          </li>
        </ul>
        <ul className="footer__nav-links flex gap-2 justify-center flex-wrap fs-s p-0">
          <li className="footer__nav-link flex items-center">
            <a href="/code-of-conduct">Code of Conduct</a>
            <span className="dot ml-2"></span>
          </li>
          <li className="footer__nav-link flex items-center">
            <a href="/privacy">Privacy Policy</a>
            <span className="dot ml-2"></span>
          </li>
          <li className="footer__nav-link flex items-center">
            <a href="/terms">Terms of use</a>
            <span className="dot ml-2"></span>
          </li>
        </ul>
        <div className="fs-s">
          <p>
            Built on{" "}
            <a
              className="c-link c-link--branded"
              target="_blank"
              rel="noopener"
              href="https://www.forem.com"
            >
              Forem
            </a>{" "}
            — the{" "}
            <a
              target="_blank"
              rel="noopener"
              className="c-link c-link--branded"
              href="https://dev.to/t/opensource"
            >
              open source
            </a>{" "}
            software that powers{" "}
            <a
              target="_blank"
              rel="noopener"
              className="c-link c-link--branded"
              href="https://dev.to"
            >
              DEV
            </a>{" "}
            and other inclusive communities.
          </p>
          <p>
            Made with love and{" "}
            <a
              target="_blank"
              rel="noopener"
              className="c-link c-link--branded"
              href="https://dev.to/t/rails"
            >
              Ruby on Rails
            </a>
            . DEV Community <span title="copyright">©</span> 2016 - 2023.
          </p>
        </div>
      </div>
    </footer>
  );
}
