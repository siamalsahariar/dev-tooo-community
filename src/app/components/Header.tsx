export default function Header() {
  return (
    <>
      <header className="crayons-header print-hidden">
        <a href="#main-content" className="skip-content-link">
          Skip to content
        </a>
        <div className="crayons-header__container">
          <span className="inline-block m:hidden">
            <button
              id="open"
              className="c-btn c-btn--icon-alone js-hamburger-trigger mx-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                role="img"
                aria-labelledby="a5ryd94ofbx8324erv3mzbkxb99k05fd"
                className="crayons-icon"
              >
                <title id="a5ryd94ofbx8324erv3mzbkxb99k05fd">
                  Navigation menu
                </title>
                <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
              </svg>
            </button>
          </span>
          <a href="/_" className="site-logo" aria-label="DEV Community Home">
            <img
              className="site-logo__img"
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt="DEV Community"
            />
          </a>
          <div className="header-search">
            <form
              method="get"
              action="/search"
              role="search"
              accept-charset="UTF-8"
            >
              <div className="header-fields--horizontal">
                <div className="header-field">
                  <input
                    className="header-search--input crayons-textfield"
                    type="text"
                    placeholder="Search..."
                    aria-label="Search term"
                  />
                  <button
                    type="submit"
                    aria-label="Search"
                    className="c-btn c-btn-search py-0 mt-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="crayons-icon c-btn__icon"
                      focusable="false"
                    >
                      <path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="flex items-center h-100 m1-auto">
            <a
              className="c-link c-link--icon-alone c-link--block mx-1 m:hidden"
              aria-label="Search"
              href="/search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                role="img"
                aria-labelledby="a5s8tja4u3qvkg3wdme3pkk08kli1xwx"
                className="header-icon"
              >
                <title id="a5s8tja4u3qvkg3wdme3pkk08kli1xwx">Search</title>
                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"></path>
              </svg>
            </a>
            <div className="flex">
              <span className="hidden m:block">
                <a
                  href="login/index.html"
                  className="c-link c-link--block mr-2 whitespace-noweap m1-auto"
                >
                  Log in
                </a>
              </span>
              <a
                href="create-account/index.html"
                className="c-cta c-cta--branded whitespace-nowrap mr-2"
              >
                Create account
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
