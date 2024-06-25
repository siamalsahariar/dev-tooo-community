"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import * as ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";

export default function Main() {
  const pathname = usePathname();

  return (
    <>
      <div id="hamburger" className="hamburger">
        <div className="hamburger__content">
          <header className="hamburger__content__header">
            <h2 className="fs-l fw-bold flex-1 break-word lh-tight">
              DEV Community
            </h2>
            <button
              id="close"
              className="c-btn c-btn--icon-alone js-hamburger-trigger shrink-0"
              aria-label="open"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                role="img"
                aria-labelledby="alzc7o4g3utnd566rc10wc37id48xjp0"
                aria-hidden="true"
                className="crayons-icon c-btn__icon"
              >
                <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z"></path>
              </svg>
            </button>
          </header>

          <div className="p-2 js-navigation-links-container">
            <div>
              <div className="crayons-card crayons-card--secondary p-4">
                <h2 className="crayons-subtitle-2 lh-tight mb-4">
                  DEV Community is a community of 1,038,202 amazing developers
                </h2>
                <p className="color-base-70 mb-4">
                  We're a place where coders share, stay up-to-date and grow
                  their careers.
                </p>
                <div>
                  <a
                    href="create-account/index.html"
                    className="c-cta c-cta--branded justify-center w-100 mb-1"
                    aria-label="Create new account"
                  >
                    Create account
                  </a>
                  <a
                    href="login/index.html"
                    className="c-link c-link--block justify-center"
                    aria-label="Log in"
                  >
                    Log in
                  </a>
                </div>
              </div>
              <nav className="mb-4 mt-4" aria-label="DEV Community">
                <ul className="default-navigation-links sidebar-navigation-links spec-sidebar-navigation-links">
                  <li>
                    <Link
                      className={`link ${pathname === "/" ? "active" : ""}`}
                      href="/"
                    >
                      <span className="c-link__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 44 44"
                          width="24"
                          height="24"
                        >
                          <g className="nc-icon-wrapper">
                            <path
                              fill="#A0041E"
                              d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"
                            ></path>
                            <path
                              fill="#FFE8B6"
                              d="M9 20L22 7l13 13v17H9z"
                            ></path>
                            <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
                            <path
                              fill="#66757F"
                              d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"
                            ></path>
                            <path
                              fill="#66757F"
                              d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"
                            ></path>
                            <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
                            <path
                              fill="#55ACEE"
                              d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"
                            ></path>
                            <path
                              fill="#5C913B"
                              d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"
                            ></path>
                          </g>
                        </svg>
                      </span>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === "/listings" ? "active" : ""
                      }`}
                      href="/listings"
                      prefetch={false}
                    >
                      <span className="c-link__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 44 44"
                          width="24"
                          height="24"
                        >
                          <g className="nc-icon-wrapper">
                            <path
                              fill="#FFD983"
                              d="M36 4H14a4 4 0 00-4 4v24H8a4 4 0 000 8h24a4 4 0 004-4V12a4 4 0 000-8z"
                            ></path>
                            <path
                              fill="#E39F3D"
                              d="M12 14h24v-2H14l-2-1z"
                            ></path>
                            <path
                              fill="#FFE8B6"
                              d="M14 4a4 4 0 00-4 4v24.555A3.955 3.955 0 008 32a4 4 0 104 4V11.445c.59.344 1.268.555 2 .555a4 4 0 000-8z"
                            ></path>
                            <path
                              fill="#C1694F"
                              d="M16 8a2 2 0 11-4.001-.001A2 2 0 0116 8m-6 28a2 2 0 11-4.001-.001A2 2 0 0110 36m24-17a1 1 0 01-1 1H15a1 1 0 010-2h18a1 1 0 011 1m0 4a1 1 0 01-1 1H15a1 1 0 110-2h18a1 1 0 011 1m0 4a1 1 0 01-1 1H15a1 1 0 110-2h18a1 1 0 011 1m0 4a1 1 0 01-1 1H15a1 1 0 110-2h18a1 1 0 011 1"
                            ></path>
                          </g>
                        </svg>
                      </span>
                      Listing
                    </Link>
                  </li>
                  <li>
                    <a
                      href="/pod"
                      className="sidebar-navigation-link c-link c-link--block c-link--icon-left"
                    >
                      <span className="c-link__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 44 44"
                          width="24"
                          height="24"
                        >
                          <g className="nc-icon-wrapper">
                            <path
                              fill="#292F33"
                              d="M10 19h24v2H10zm15 15c0 2.208-.792 4-3 4-2.209 0-3-1.792-3-4s.791-2 3-2c2.208 0 3-.208 3 2z"
                            ></path>
                            <path
                              fill="#66757F"
                              d="M22 35c-6.627 0-10 1.343-10 3v2h20v-2c0-1.657-3.373-3-10-3z"
                            ></path>
                            <path
                              fill="#99AAB5"
                              d="M22 4a9 9 0 00-9 9v7h18v-7a9 9 0 00-9-9z"
                            ></path>
                            <g fill="#292F33" transform="translate(4 4)">
                              <circle cx="15.5" cy="2.5" r="1.5"></circle>
                              <circle cx="20.5" cy="2.5" r="1.5"></circle>
                              <circle cx="17.5" cy="6.5" r="1.5"></circle>
                              <circle cx="22.5" cy="6.5" r="1.5"></circle>
                              <circle cx="12.5" cy="6.5" r="1.5"></circle>
                              <circle cx="15.5" cy="10.5" r="1.5"></circle>
                              <circle cx="10.5" cy="10.5" r="1.5"></circle>
                              <circle cx="20.5" cy="10.5" r="1.5"></circle>
                              <circle cx="25.5" cy="10.5" r="1.5"></circle>
                              <circle cx="17.5" cy="14.5" r="1.5"></circle>
                              <circle cx="22.5" cy="14.5" r="1.5"></circle>
                              <circle cx="12.5" cy="14.5" r="1.5"></circle>
                            </g>
                            <path
                              fill="#66757F"
                              d="M13 19.062V21c0 4.971 4.029 9 9 9s9-4.029 9-9v-1.938H13z"
                            ></path>
                            <path
                              fill="#66757F"
                              d="M34 18a1 1 0 00-1 1v2c0 6.074-4.925 11-11 11s-11-4.926-11-11v-2a1 1 0 00-2 0v2c0 7.18 5.82 13 13 13s13-5.82 13-13v-2a1 1 0 00-1-1z"
                            ></path>
                          </g>
                        </svg>
                      </span>
                      Podcasts
                    </a>
                  </li>
                  <li>
                    <Link
                      className={`link ${
                        pathname === "/videos" ? "active" : ""
                      }`}
                      href="/videos"
                    >
                      <span className="c-link__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 44 44"
                          width="24"
                          height="24"
                        >
                          <g transform="translate(4 4)">
                            <path
                              fill="#31373D"
                              d="M34.074 18l-4.832 3H28v-4c0-.088-.02-.169-.026-.256C31.436 15.864 34 12.735 34 9a8 8 0 00-16.001 0c0 1.463.412 2.822 1.099 4H14.92c.047-.328.08-.66.08-1a7 7 0 10-14 0 6.995 6.995 0 004 6.317V29a4 4 0 004 4h15a4 4 0 004-4v-3h1.242l4.832 3H35V18h-.926zM28.727 3.977a5.713 5.713 0 012.984 4.961L28.18 8.35a2.276 2.276 0 00-.583-.982l1.13-3.391zm-.9 6.342l3.552.592a5.713 5.713 0 01-4.214 3.669 3.985 3.985 0 00-1.392-1.148l.625-2.19a2.425 2.425 0 001.429-.923zM26 3.285c.282 0 .557.027.828.067l-1.131 3.392c-.404.054-.772.21-1.081.446L21.42 5.592A5.703 5.703 0 0126 3.285zM20.285 9c0-.563.085-1.106.236-1.62l3.194 1.597-.002.023c0 .657.313 1.245.771 1.662L23.816 13h-1.871a5.665 5.665 0 01-1.66-4zm-9.088-.385A4.64 4.64 0 0112.667 12c0 .344-.043.677-.113 1H10.1c.145-.304.233-.641.233-1a2.32 2.32 0 00-.392-1.292l1.256-2.093zM8 7.333c.519 0 1.01.105 1.476.261L8.22 9.688c-.073-.007-.145-.022-.22-.022a2.32 2.32 0 00-1.292.392L4.615 8.803A4.64 4.64 0 018 7.333zM3.333 12c0-.519.105-1.01.261-1.477l2.095 1.257c-.007.073-.022.144-.022.22 0 .75.36 1.41.91 1.837a3.987 3.987 0 00-1.353 1.895C4.083 14.881 3.333 13.533 3.333 12z"
                            ></path>
                            <circle
                              fill="#8899A6"
                              cx="24"
                              cy="19"
                              r="2"
                            ></circle>
                            <circle
                              fill="#8899A6"
                              cx="9"
                              cy="19"
                              r="2"
                            ></circle>
                            <path
                              fill="#8899A6"
                              d="M24 27a2 2 0 00-2-2H11a2 2 0 00-2 2v6a2 2 0 002 2h11a2 2 0 002-2v-6z"
                            ></path>
                          </g>
                        </svg>
                      </span>
                      Videos
                    </Link>
                  </li>
                  <li>
                    <a
                      href="/tags"
                      className="sidebar-navigation-link c-link c-link--block c-link--icon-left"
                    >
                      <span className="c-link__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 44 44"
                          width="24"
                          height="24"
                        >
                          <g className="nc-icon-wrapper">
                            <path
                              fill="#FFD983"
                              d="M36.017 24.181L21.345 9.746C20.687 9.087 19.823 9 18.96 9H8.883C7.029 9 6 10.029 6 11.883v10.082c0 .861.089 1.723.746 2.38L21.3 39.017a3.287 3.287 0 004.688 0l10.059-10.088c1.31-1.312 1.28-3.438-.03-4.748zm-23.596-8.76a1.497 1.497 0 11-2.118-2.117 1.497 1.497 0 012.118 2.117z"
                            ></path>
                            <path
                              fill="#D99E82"
                              d="M13.952 11.772a3.66 3.66 0 00-5.179 0 3.663 3.663 0 105.18 5.18 3.664 3.664 0 00-.001-5.18zm-1.53 3.65a1.499 1.499 0 11-2.119-2.12 1.499 1.499 0 012.119 2.12z"
                            ></path>
                            <path
                              fill="#C1694F"
                              d="M12.507 14.501a1 1 0 11-1.415-1.414l8.485-8.485a1 1 0 111.415 1.414l-8.485 8.485z"
                            ></path>
                          </g>
                        </svg>
                      </span>
                      Tags
                    </a>
                  </li>
                  <li>
                    <a
                      href="/faq"
                      className="sidebar-navigation-link c-link c-link--block c-link--icon-left"
                    >
                      <span className="c-link__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 44 44"
                          width="24"
                          height="24"
                        >
                          <g className="nc-icon-wrapper">
                            <path
                              fill="#FFD983"
                              d="M33 15.06c0 6.439-5 7.439-5 13.44 0 3.098-3.123 3.359-5.5 3.359-2.053 0-6.586-.779-6.586-3.361C15.914 22.5 11 21.5 11 15.06c0-6.031 5.285-10.92 11.083-10.92C27.883 4.14 33 9.029 33 15.06z"
                            ></path>
                            <path
                              fill="#CCD6DD"
                              d="M26.167 36.5c0 .828-2.234 2.5-4.167 2.5-1.933 0-4.167-1.672-4.167-2.5 0-.828 2.233-.5 4.167-.5 1.933 0 4.167-.328 4.167.5z"
                            ></path>
                            <path
                              fill="#FFCC4D"
                              d="M26.707 14.293a.999.999 0 00-1.414 0L22 17.586l-3.293-3.293a1 1 0 10-1.414 1.414L21 19.414V30a1 1 0 102 0V19.414l3.707-3.707a.999.999 0 000-1.414z"
                            ></path>
                            <path
                              fill="#99AAB5"
                              d="M28 35a2 2 0 01-2 2h-8a2 2 0 01-2-2v-6h12v6z"
                            ></path>
                            <path
                              fill="#CCD6DD"
                              d="M15.999 36a1 1 0 01-.163-1.986l12-2a.994.994 0 011.15.822.999.999 0 01-.822 1.15l-12 2a.927.927 0 01-.165.014zm0-4a1 1 0 01-.163-1.986l12-2a.995.995 0 011.15.822.999.999 0 01-.822 1.15l-12 2a.927.927 0 01-.165.014z"
                            ></path>
                          </g>
                        </svg>
                      </span>
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://shop.forem.com"
                      className="sidebar-navigation-link c-link c-link--block c-link--icon-left"
                    >
                      <span className="c-link__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 44 44"
                          width="24"
                          height="24"
                        >
                          <g className="nc-icon-wrapper">
                            <path
                              fill="#F4900C"
                              d="M15 4a8 8 0 00-8 8v8h2v-8a6 6 0 0112 0v8h2v-8a8 8 0 00-8-8z"
                            ></path>
                            <path
                              fill="#DD2E44"
                              d="M5 12l2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2v23H5z"
                            ></path>
                            <path
                              fill="#FFCC4D"
                              d="M29 9a8 8 0 00-8 8v8h2v-8a6 6 0 0112 0v8h2v-8a8 8 0 00-8-8z"
                            ></path>
                            <path
                              fill="#744EAA"
                              d="M19 17l2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2v23H19z"
                            ></path>
                          </g>
                        </svg>
                      </span>
                      Forem Shop
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sponsorships"
                      className="sidebar-navigation-link c-link c-link--block c-link--icon-left"
                    >
                      <span className="c-link__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 44 44"
                          width="24"
                          height="24"
                        >
                          <path
                            fill="#DD2E44"
                            d="M39.885 15.833c0-5.45-4.418-9.868-9.867-9.868-3.308 0-6.227 1.633-8.018 4.129-1.791-2.496-4.71-4.129-8.017-4.129-5.45 0-9.868 4.417-9.868 9.868 0 .772.098 1.52.266 2.241C5.751 26.587 15.216 35.568 22 38.034c6.783-2.466 16.249-11.447 17.617-19.959.17-.721.268-1.469.268-2.242z"
                          ></path>
                        </svg>
                      </span>
                      Sponsors
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="sidebar-navigation-link c-link c-link--block c-link--icon-left"
                    >
                      <span className="c-link__icon">
                        <svg
                          viewBox="0 0 235 234"
                          xmlns="http://www.w3.org/2000/svg"
                          className="rainbow-logo"
                          preserveAspectRatio="xMinYMin meet"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <path
                              fill="#88AEDC"
                              d="M234.04 175.67l-75.69 58.28h47.18L234.04 212z"
                            ></path>
                            <path d="M234.04 140.06l-121.93 93.89h.02l121.91-93.87zM133.25.95L.04 103.51v.02L133.27.95z"></path>
                            <path
                              fill="#F58F8E"
                              fill-rule="nonzero"
                              d="M.04.95v30.16L39.21.95z"
                            ></path>
                            <path
                              fill="#FEE18A"
                              fill-rule="nonzero"
                              d="M39.21.95L.04 31.11v35.9L85.84.95z"
                            ></path>
                            <path
                              fill="#F3F095"
                              fill-rule="nonzero"
                              d="M85.84.95L.04 67.01v36.5L133.25.95z"
                            ></path>
                            <path
                              fill="#55C1AE"
                              fill-rule="nonzero"
                              d="M133.27.95L.04 103.53v35.59L179.49.95z"
                            ></path>
                            <path
                              fill="#F7B3CE"
                              fill-rule="nonzero"
                              d="M234.04.95h-7.37L.04 175.45v35.93l234-180.18z"
                            ></path>
                            <path
                              fill="#88AEDC"
                              fill-rule="nonzero"
                              d="M179.49.95L.04 139.12v36.33L226.67.95z"
                            ></path>
                            <path
                              fill="#F58F8E"
                              fill-rule="nonzero"
                              d="M234.04 31.2L.04 211.38v22.57h18.03l215.97-166.3z"
                            ></path>
                            <path
                              fill="#FEE18A"
                              fill-rule="nonzero"
                              d="M234.04 67.65L18.07 233.95H64.7l169.34-130.39z"
                            ></path>
                            <path
                              fill="#F3F095"
                              fill-rule="nonzero"
                              d="M234.04 103.56L64.7 233.95h47.41l121.93-93.89z"
                            ></path>
                            <path
                              fill="#55C1AE"
                              fill-rule="nonzero"
                              d="M234.04 140.08l-121.91 93.87h46.22l75.69-58.28z"
                            ></path>
                            <path
                              fill="#F7B3CE"
                              fill-rule="nonzero"
                              d="M234.04 212l-28.51 21.95h28.51z"
                            ></path>
                            <path
                              d="M65.237 77.75c4.514.95 7.774 2.8 11.135 6.3 3.059 3.2 4.965 6.85 5.767 10.95.652 3.45.652 40.55 0 44.05-1.705 9.1-9.479 16.2-19.109 17.45-2.006.25-8.727.5-14.845.5H37V77h12.438c8.828 0 13.342.2 15.8.75zM51.545 117v25.6l5.166-.2c4.464-.15 5.417-.35 7.423-1.5 3.912-2.3 3.962-2.45 3.962-24.2 0-21.2 0-21.2-3.661-23.6-1.806-1.2-2.558-1.35-7.473-1.55l-5.417-.15V117zm79.245-32.75v7.25h-25.58v18h15.549V124H105.21l.1 9.1.15 9.15 12.69.15 12.638.1V157h-14.795c-16.451 0-19.009-.3-21.617-2.6-3.661-3.2-3.46-1.15-3.611-36.3-.1-21.9.05-32.25.401-33.65.702-2.6 3.661-5.8 6.27-6.7 1.554-.55 5.466-.7 17.704-.75h15.648v7.25zm31.647 20.85c3.712 14.25 6.821 25.6 6.922 25.25.15-.35 3.31-12.4 7.071-26.85l6.872-26.25 7.824-.15c5.918-.1 7.874.05 7.874.5s-17.354 66.2-18.357 69.5c-.702 2.3-4.463 7-6.57 8.25-2.658 1.5-6.57 1.75-8.978.5-2.156-1.1-5.015-4.4-6.47-7.5-.902-1.9-15.648-56-19.058-70l-.352-1.35h7.825c7.673 0 7.874 0 8.275 1.1.2.65 3.41 12.8 7.122 27z"
                              fill="#FFF"
                            ></path>
                          </g>
                        </svg>
                      </span>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contacts"
                      className="sidebar-navigation-link c-link c-link--block c-link--icon-left"
                    >
                      <span className="c-link__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 44 44"
                          width="24"
                          height="24"
                        >
                          <g className="nc-icon-wrapper">
                            <path
                              fill="#FFAC33"
                              d="M38.724 33.656c-1.239-.01-1.241 1.205-1.241 1.205H22.5c-5.246 0-9.5-4.254-9.5-9.5s4.254-9.5 9.5-9.5 9.5 4.254 9.5 9.5c0 3.062-1.6 5.897-3.852 7.633h5.434C35.022 30.849 36 28.139 36 25.361c0-7.456-6.045-13.5-13.5-13.5-7.456 0-13.5 6.044-13.5 13.5 0 7.455 6.044 13.5 13.5 13.5h14.982s-.003 1.127 1.241 1.139c1.238.012 1.228-1.245 1.228-1.245l.014-3.821s.001-1.267-1.241-1.278zM9 18.26a16.047 16.047 0 014-4.739V13c0-5 5-7 5-8s-1-1-1-1H5C4 4 4 5 4 5c0 1 5 3.333 5 7.69v5.57z"
                            ></path>
                            <path
                              fill="#BE1931"
                              d="M17.091 33.166a9.487 9.487 0 01-4.045-8.72l-3.977-.461c-.046.452-.069.911-.069 1.376 0 4.573 2.28 8.608 5.76 11.051l2.331-3.246z"
                            ></path>
                            <path
                              fill="#BE1931"
                              d="M10 29.924s-5.188-.812-5 1 5-1 5-1zm0 .312s-4.125 2.688-2.938 3.75S10 30.236 10 30.236z"
                            ></path>
                          </g>
                        </svg>
                      </span>
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav
                className="mb-4"
                data-testid="other-nav"
                aria-labelledby="other-nav-heading-hamburger"
              >
                <h2
                  id="other-nav-heading-hamburger"
                  className="crayons-subtitle-3 py-2 pl-3"
                >
                  Other
                </h2>
                <ul className="other-navigation-links sidebar-navigation-links spec-sidebar-navigation-links">
                  <li>
                    <a
                      href="/code-of-conduct"
                      className="sidebar-navigation-link c-link c-link--block c-link--icon-left"
                    >
                      <span className="c-link__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 44 44"
                          width="24"
                          height="24"
                        >
                          <g className="nc-icon-wrapper">
                            <path
                              fill="#FFDB5E"
                              d="M38.956 21.916c0-.503-.12-.975-.321-1.404-1.341-4.326-7.619-4.01-16.549-4.221-1.493-.035-.639-1.798-.115-5.668.341-2.517-1.282-6.382-4.01-6.382-4.498 0-.171 3.548-4.148 12.322-2.125 4.688-6.875 2.062-6.875 6.771v10.719c0 1.833.18 3.595 2.758 3.885 2.499.281 1.937 2.062 5.542 2.062h18.044a3.337 3.337 0 003.333-3.334c0-.762-.267-1.456-.698-2.018 1.02-.571 1.72-1.649 1.72-2.899 0-.76-.266-1.454-.696-2.015 1.023-.57 1.725-1.649 1.725-2.901 0-.909-.368-1.733-.961-2.336a3.311 3.311 0 001.251-2.581z"
                            ></path>
                            <path
                              fill="#EE9547"
                              d="M27.02 25.249h8.604c1.17 0 2.268-.626 2.866-1.633a.876.876 0 00-1.506-.892 1.588 1.588 0 01-1.361.775h-8.81c-.873 0-1.583-.71-1.583-1.583s.71-1.583 1.583-1.583H32.7a.875.875 0 000-1.75h-5.888a3.337 3.337 0 00-3.333 3.333c0 1.025.475 1.932 1.205 2.544a3.32 3.32 0 00-.998 2.373c0 1.028.478 1.938 1.212 2.549a3.318 3.318 0 00.419 5.08 3.305 3.305 0 00-.852 2.204 3.337 3.337 0 003.333 3.333h5.484a3.35 3.35 0 002.867-1.632.875.875 0 00-1.504-.894 1.594 1.594 0 01-1.363.776h-5.484c-.873 0-1.583-.71-1.583-1.583s.71-1.583 1.583-1.583h6.506a3.35 3.35 0 002.867-1.633.875.875 0 10-1.504-.894 1.572 1.572 0 01-1.363.777h-7.063a1.585 1.585 0 010-3.167h8.091a3.35 3.35 0 002.867-1.632.875.875 0 00-1.504-.894 1.573 1.573 0 01-1.363.776H27.02a1.585 1.585 0 010-3.167z"
                            ></path>
                          </g>
                        </svg>
                      </span>
                      Code of Conduct
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy"
                      className="sidebar-navigation-link c-link c-link--block c-link--icon-left"
                    >
                      <span className="c-link__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 44 44"
                          width="24"
                          height="24"
                        >
                          <g transform="translate(4 4)">
                            <circle
                              fill="#FFCC4D"
                              cx="18"
                              cy="18"
                              r="18"
                            ></circle>
                            <path
                              fill="#664500"
                              d="M27.335 23.629a.501.501 0 00-.635-.029c-.039.029-3.922 2.9-8.7 2.9-4.766 0-8.662-2.871-8.7-2.9a.5.5 0 10-.729.657C8.7 24.472 11.788 29.5 18 29.5s9.301-5.028 9.429-5.243a.499.499 0 00-.094-.628z"
                            ></path>
                            <path
                              fill="#65471B"
                              d="M18 26.591c-.148 0-.291-.011-.438-.016v4.516h.875v-4.517c-.145.005-.289.017-.437.017z"
                            ></path>
                            <path
                              fill="#FFF"
                              d="M22 26c.016-.004-1.45.378-2.446.486-.366.042-.737.076-1.117.089v4.517H20c1.1 0 2-.9 2-2V26zm-8 0c-.016-.004 1.45.378 2.446.486.366.042.737.076 1.117.089v4.517H16c-1.1 0-2-.9-2-2V26z"
                            ></path>
                            <path
                              fill="#65471B"
                              d="M27.335 23.629a.501.501 0 00-.635-.029c-.03.022-2.259 1.668-5.411 2.47-.443.113-1.864.43-3.286.431-1.424 0-2.849-.318-3.292-.431-3.152-.802-5.381-2.448-5.411-2.47a.501.501 0 00-.729.657c.097.162 1.885 3.067 5.429 4.481v-1.829c-.016-.004 1.45.378 2.446.486.366.042.737.076 1.117.089.146.005.289.016.437.016.148 0 .291-.011.438-.016.38-.013.751-.046 1.117-.089.996-.108 2.462-.49 2.446-.486v1.829c3.544-1.414 5.332-4.319 5.429-4.481a.5.5 0 00-.095-.628zm-.711-9.605c0 1.714-.938 3.104-2.096 3.104-1.157 0-2.096-1.39-2.096-3.104s.938-3.104 2.096-3.104c1.158 0 2.096 1.39 2.096 3.104zm-17.167 0c0 1.714.938 3.104 2.096 3.104 1.157 0 2.096-1.39 2.096-3.104s-.938-3.104-2.096-3.104c-1.158 0-2.096 1.39-2.096 3.104z"
                            ></path>
                            <path
                              fill="#292F33"
                              d="M34.808 9.627c-.171-.166-1.267.274-2.376-.291-2.288-1.166-8.07-2.291-11.834.376-.403.285-2.087.333-2.558.313-.471.021-2.155-.027-2.558-.313-3.763-2.667-9.545-1.542-11.833-.376-1.109.565-2.205.125-2.376.291-.247.239-.247 1.196.001 1.436.246.239 1.477.515 1.722 1.232.247.718.249 4.958 2.213 6.424 1.839 1.372 6.129 1.785 8.848.238 2.372-1.349 2.289-4.189 2.724-5.881.155-.603.592-.907 1.26-.907s1.105.304 1.26.907c.435 1.691.351 4.532 2.724 5.881 2.719 1.546 7.009 1.133 8.847-.238 1.965-1.465 1.967-5.706 2.213-6.424.245-.717 1.476-.994 1.722-1.232.248-.24.249-1.197.001-1.436zm-20.194 3.65c-.077 1.105-.274 3.227-1.597 3.98-.811.462-1.868.743-2.974.743h-.001c-1.225 0-2.923-.347-3.587-.842-.83-.619-1.146-3.167-1.265-4.12-.076-.607-.28-2.09.388-2.318 1.06-.361 2.539-.643 4.052-.643.693 0 3.021.043 4.155.741 1.005.617.872 1.851.829 2.459zm16.278-.253c-.119.954-.435 3.515-1.265 4.134-.664.495-2.362.842-3.587.842h-.001c-1.107 0-2.163-.281-2.975-.743-1.323-.752-1.52-2.861-1.597-3.966-.042-.608-.176-1.851.829-2.468 1.135-.698 3.462-.746 4.155-.746 1.513 0 2.991.277 4.052.638.668.228.465 1.702.389 2.309z"
                            ></path>
                          </g>
                        </svg>
                      </span>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms"
                      className="sidebar-navigation-link c-link c-link--block c-link--icon-left"
                    >
                      <span className="c-link__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 44 44"
                          width="24"
                          height="24"
                        >
                          <g transform="translate(4 4)">
                            <ellipse
                              fill="#F5F8FA"
                              cx="8.828"
                              cy="18"
                              rx="7.953"
                              ry="13.281"
                            ></ellipse>
                            <path
                              fill="#E1E8ED"
                              d="M8.828 32.031C3.948 32.031.125 25.868.125 18S3.948 3.969 8.828 3.969 17.531 10.132 17.531 18s-3.823 14.031-8.703 14.031zm0-26.562C4.856 5.469 1.625 11.09 1.625 18s3.231 12.531 7.203 12.531S16.031 24.91 16.031 18 12.8 5.469 8.828 5.469z"
                            ></path>
                            <circle
                              fill="#8899A6"
                              cx="6.594"
                              cy="18"
                              r="4.96"
                            ></circle>
                            <circle
                              fill="#292F33"
                              cx="6.594"
                              cy="18"
                              r="3.565"
                            ></circle>
                            <circle
                              fill="#F5F8FA"
                              cx="7.911"
                              cy="15.443"
                              r="1.426"
                            ></circle>
                            <ellipse
                              fill="#F5F8FA"
                              cx="27.234"
                              cy="18"
                              rx="7.953"
                              ry="13.281"
                            ></ellipse>
                            <path
                              fill="#E1E8ED"
                              d="M27.234 32.031c-4.88 0-8.703-6.163-8.703-14.031s3.823-14.031 8.703-14.031S35.938 10.132 35.938 18s-3.824 14.031-8.704 14.031zm0-26.562c-3.972 0-7.203 5.622-7.203 12.531 0 6.91 3.231 12.531 7.203 12.531S34.438 24.91 34.438 18 31.206 5.469 27.234 5.469z"
                            ></path>
                            <circle
                              fill="#8899A6"
                              cx="25"
                              cy="18"
                              r="4.96"
                            ></circle>
                            <circle
                              fill="#292F33"
                              cx="25"
                              cy="18"
                              r="3.565"
                            ></circle>
                            <circle
                              fill="#F5F8FA"
                              cx="26.317"
                              cy="15.443"
                              r="1.426"
                            ></circle>
                          </g>
                        </svg>
                      </span>
                      Terms of use
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="flex justify-start mb-4">
                <a
                  href="https://twitter.com/thepracticaldev"
                  target="_blank"
                  className="c-link c-link--icon-alone c-link--block "
                  rel="noopener me"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-labelledby="ai116q82v7rg5xa356xwu6gk621y01an"
                    className="crayons-icon c-link__icon"
                  >
                    <path d="M22.162 5.656a8.383 8.383 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.211 4.211 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.395 8.395 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.495 8.495 0 002.087-2.165l-.001-.001z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com/thepracticaldev"
                  target="_blank"
                  className="c-link c-link--icon-alone c-link--block "
                  rel="noopener me"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-labelledby="ajlgwxfsq3iia4pnxdca9ymmiw8zfrds"
                    className="crayons-icon c-link__icon"
                  >
                    <path d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.188 19.188 0 00-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1h-4.598z"></path>
                  </svg>
                </a>
                <a
                  href="https://github.com/forem"
                  target="_blank"
                  className="c-link c-link--icon-alone c-link--block "
                  rel="noopener me"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-labelledby="an5v7x99k4mtamsjhwrplkiir1tvcgrv"
                    className="crayons-icon c-link__icon"
                  >
                    <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"></path>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/thepracticaldev"
                  target="_blank"
                  className="c-link c-link--icon-alone c-link--block "
                  rel="noopener me"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-labelledby="ar9kcfjaw6iat21bad9cg6immc3i1u3l"
                    className="crayons-icon c-link__icon"
                  >
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitch.com/thepracticaldev"
                  target="_blank"
                  className="c-link c-link--icon-alone c-link--block "
                  rel="noopener me"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-labelledby="al7hwf99q7nvv59iwexjjpkd6u5mwob8"
                    className="crayons-icon c-link__icon"
                  >
                    <path d="M4.3 3H21v11.7l-4.7 4.7h-3.9l-2.5 2.4H7v-2.4H3V6.2L4.3 3zM5 17.4h4v2.4h.095l2.5-2.4h3.877L19 13.872V5H5v12.4zM15 8h2v4.7h-2V8zm0 0h2v4.7h-2V8zm-5 0h2v4.7h-2V8z"></path>
                  </svg>
                </a>
                <a
                  href="https://fosstodon.org/@thepracticaldev"
                  target="_blank"
                  className="c-link c-link--icon-alone c-link--block "
                  rel="noopener me"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-labelledby="aaklodp0dsqms3lp1fgtm2gmfdria6jp"
                    className="crayons-icon c-link__icon"
                  >
                    <path d="M21.258 13.99c-.274 1.41-2.456 2.955-4.962 3.254-1.306.156-2.593.3-3.965.236-2.243-.103-4.014-.535-4.014-.535 0 .218.014.426.04.62.292 2.215 2.196 2.347 4 2.41 1.82.062 3.44-.45 3.44-.45l.076 1.646s-1.274.684-3.542.81c-1.25.068-2.803-.032-4.612-.51-3.923-1.039-4.598-5.22-4.701-9.464-.031-1.26-.012-2.447-.012-3.44 0-4.34 2.843-5.611 2.843-5.611 1.433-.658 3.892-.935 6.45-.956h.062c2.557.02 5.018.298 6.451.956 0 0 2.843 1.272 2.843 5.61 0 0 .036 3.201-.397 5.424zm-2.956-5.087c0-1.074-.273-1.927-.822-2.558-.567-.631-1.308-.955-2.229-.955-1.065 0-1.871.41-2.405 1.228l-.518.87-.519-.87C11.276 5.8 10.47 5.39 9.405 5.39c-.921 0-1.663.324-2.229.955-.549.631-.822 1.484-.822 2.558v5.253h2.081V9.057c0-1.075.452-1.62 1.357-1.62 1 0 1.501.647 1.501 1.927v2.79h2.07v-2.79c0-1.28.5-1.927 1.5-1.927.905 0 1.358.545 1.358 1.62v5.1h2.08V8.902l.001.001z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hamburger__overlay js-hamburger-trigger"></div>
      </div>

      <div className="wrapper stories stories-index">
        <div className="screen-ready">
          <div className="crayons-layout crayons-layout--3-cols crayons-layout--3-cols--drop-right-left">
            <div className="sidebar-wrapper sidebar-wrapper-left crayons-layout__sidebar-left crayons-layout__content">
              <aside className="side-bar" aria-label="Primary sidebar">
                <div className="crayons-card crayons-card--secondary p-4">
                  <h2 className="crayons-subtitle-2 lh--tight mb-4">
                    DEV Community is a community of 1,029,388 amazing developers
                  </h2>
                  <p className="color-base-70 mb-4">
                    We're a place where coders share, stay up-to-date and grow
                    their careers.
                  </p>
                  <div>
                    <a
                      href="create-account/index.html"
                      className="c-cta c-cta--branded justify-center w-100 mb-1"
                      aria-label="create new account"
                    >
                      Create account
                    </a>
                    <a
                      href="login/index.html"
                      className="c-link c-link--block justify-center"
                      aria-label="Log in"
                    >
                      Log in
                    </a>
                  </div>
                </div>
                <nav className="mb-4 mt-4" aria-label="DEV Community">
                  <ul className="default-navigation-links sidebar-navigation-links">
                    <li>
                      <a
                        href="/_"
                        className="sidebar-navigation-link c-link        
                    c-link--block c-link--icon-left"
                      >
                        <span className="c-link__icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 44 44"
                            width="24"
                            height="24"
                          >
                            <g className="nc-icon-wrapper">
                              <path
                                fill="#A0041E"
                                d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"
                              ></path>
                              <path
                                fill="#FFE8B6"
                                d="M9 20L22 7l13 13v17H9z"
                              ></path>
                              <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
                              <path
                                fill="#66757F"
                                d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"
                              ></path>
                              <path
                                fill="#66757F"
                                d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"
                              ></path>
                              <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
                              <path
                                fill="#55ACEE"
                                d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"
                              ></path>
                              <path
                                fill="#5C913B"
                                d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="listings/index.html"
                        className="sidebar-navigation-link c-link        
                    c-link--block c-link--icon-left"
                      >
                        <span className="c-link__icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 44 44"
                            width="24"
                            height="24"
                          >
                            <g className="nc-icon-wrapper">
                              <path
                                fill="#FFD983"
                                d="M36 4H14a4 4 0 00-4 4v24H8a4 4 0 000 8h24a4 4 0 004-4V12a4 4 0 000-8z"
                              ></path>
                              <path
                                fill="#E39F3D"
                                d="M12 14h24v-2H14l-2-1z"
                              ></path>
                              <path
                                fill="#FFE8B6"
                                d="M14 4a4 4 0 00-4 4v24.555A3.955 3.955 0 008 32a4 4 0 104 4V11.445c.59.344 1.268.555 2 .555a4 4 0 000-8z"
                              ></path>
                              <path
                                fill="#C1694F"
                                d="M16 8a2 2 0 11-4.001-.001A2 2 0 0116 8m-6 28a2 2 0 11-4.001-.001A2 2 0 0110 36m24-17a1 1 0 01-1 1H15a1 1 0 010-2h18a1 1 0 011 1m0 4a1 1 0 01-1 1H15a1 1 0 110-2h18a1 1 0 011 1m0 4a1 1 0 01-1 1H15a1 1 0 110-2h18a1 1 0 011 1m0 4a1 1 0 01-1 1H15a1 1 0 110-2h18a1 1 0 011 1"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        Listings
                      </a>
                    </li>
                    <li>
                      <a
                        href="/_"
                        className="sidebar-navigation-link c-link        
                    c-link--block c-link--icon-left"
                      >
                        <span className="c-link__icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 44 44"
                            width="24"
                            height="24"
                          >
                            <g className="nc-icon-wrapper">
                              <path
                                fill="#292F33"
                                d="M10 19h24v2H10zm15 15c0 2.208-.792 4-3 4-2.209 0-3-1.792-3-4s.791-2 3-2c2.208 0 3-.208 3 2z"
                              ></path>
                              <path
                                fill="#66757F"
                                d="M22 35c-6.627 0-10 1.343-10 3v2h20v-2c0-1.657-3.373-3-10-3z"
                              ></path>
                              <path
                                fill="#99AAB5"
                                d="M22 4a9 9 0 00-9 9v7h18v-7a9 9 0 00-9-9z"
                              ></path>
                              <g fill="#292F33" transform="translate(4 4)">
                                <circle cx="15.5" cy="2.5" r="1.5"></circle>
                                <circle cx="20.5" cy="2.5" r="1.5"></circle>
                                <circle cx="17.5" cy="6.5" r="1.5"></circle>
                                <circle cx="22.5" cy="6.5" r="1.5"></circle>
                                <circle cx="12.5" cy="6.5" r="1.5"></circle>
                                <circle cx="15.5" cy="10.5" r="1.5"></circle>
                                <circle cx="10.5" cy="10.5" r="1.5"></circle>
                                <circle cx="20.5" cy="10.5" r="1.5"></circle>
                                <circle cx="25.5" cy="10.5" r="1.5"></circle>
                                <circle cx="17.5" cy="14.5" r="1.5"></circle>
                                <circle cx="22.5" cy="14.5" r="1.5"></circle>
                                <circle cx="12.5" cy="14.5" r="1.5"></circle>
                              </g>
                              <path
                                fill="#66757F"
                                d="M13 19.062V21c0 4.971 4.029 9 9 9s9-4.029 9-9v-1.938H13z"
                              ></path>
                              <path
                                fill="#66757F"
                                d="M34 18a1 1 0 00-1 1v2c0 6.074-4.925 11-11 11s-11-4.926-11-11v-2a1 1 0 00-2 0v2c0 7.18 5.82 13 13 13s13-5.82 13-13v-2a1 1 0 00-1-1z"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        Podcasts
                      </a>
                    </li>
                    <li>
                      <a
                        href="video/index.html"
                        className="sidebar-navigation-link c-link        
                    c-link--block c-link--icon-left"
                      >
                        <span className="c-link__icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 44 44"
                            width="24"
                            height="24"
                          >
                            <g transform="translate(4 4)">
                              <path
                                fill="#31373D"
                                d="M34.074 18l-4.832 3H28v-4c0-.088-.02-.169-.026-.256C31.436 15.864 34 12.735 34 9a8 8 0 00-16.001 0c0 1.463.412 2.822 1.099 4H14.92c.047-.328.08-.66.08-1a7 7 0 10-14 0 6.995 6.995 0 004 6.317V29a4 4 0 004 4h15a4 4 0 004-4v-3h1.242l4.832 3H35V18h-.926zM28.727 3.977a5.713 5.713 0 012.984 4.961L28.18 8.35a2.276 2.276 0 00-.583-.982l1.13-3.391zm-.9 6.342l3.552.592a5.713 5.713 0 01-4.214 3.669 3.985 3.985 0 00-1.392-1.148l.625-2.19a2.425 2.425 0 001.429-.923zM26 3.285c.282 0 .557.027.828.067l-1.131 3.392c-.404.054-.772.21-1.081.446L21.42 5.592A5.703 5.703 0 0126 3.285zM20.285 9c0-.563.085-1.106.236-1.62l3.194 1.597-.002.023c0 .657.313 1.245.771 1.662L23.816 13h-1.871a5.665 5.665 0 01-1.66-4zm-9.088-.385A4.64 4.64 0 0112.667 12c0 .344-.043.677-.113 1H10.1c.145-.304.233-.641.233-1a2.32 2.32 0 00-.392-1.292l1.256-2.093zM8 7.333c.519 0 1.01.105 1.476.261L8.22 9.688c-.073-.007-.145-.022-.22-.022a2.32 2.32 0 00-1.292.392L4.615 8.803A4.64 4.64 0 018 7.333zM3.333 12c0-.519.105-1.01.261-1.477l2.095 1.257c-.007.073-.022.144-.022.22 0 .75.36 1.41.91 1.837a3.987 3.987 0 00-1.353 1.895C4.083 14.881 3.333 13.533 3.333 12z"
                              ></path>
                              <circle
                                fill="#8899A6"
                                cx="24"
                                cy="19"
                                r="2"
                              ></circle>
                              <circle
                                fill="#8899A6"
                                cx="9"
                                cy="19"
                                r="2"
                              ></circle>
                              <path
                                fill="#8899A6"
                                d="M24 27a2 2 0 00-2-2H11a2 2 0 00-2 2v6a2 2 0 002 2h11a2 2 0 002-2v-6z"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        Videos
                      </a>
                    </li>
                    <li>
                      <a
                        href="/_"
                        className="sidebar-navigation-link c-link        
                    c-link--block c-link--icon-left"
                      >
                        <span className="c-link__icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 44 44"
                            width="24"
                            height="24"
                          >
                            <g className="nc-icon-wrapper">
                              <path
                                fill="#FFD983"
                                d="M36.017 24.181L21.345 9.746C20.687 9.087 19.823 9 18.96 9H8.883C7.029 9 6 10.029 6 11.883v10.082c0 .861.089 1.723.746 2.38L21.3 39.017a3.287 3.287 0 004.688 0l10.059-10.088c1.31-1.312 1.28-3.438-.03-4.748zm-23.596-8.76a1.497 1.497 0 11-2.118-2.117 1.497 1.497 0 012.118 2.117z"
                              ></path>
                              <path
                                fill="#D99E82"
                                d="M13.952 11.772a3.66 3.66 0 00-5.179 0 3.663 3.663 0 105.18 5.18 3.664 3.664 0 00-.001-5.18zm-1.53 3.65a1.499 1.499 0 11-2.119-2.12 1.499 1.499 0 012.119 2.12z"
                              ></path>
                              <path
                                fill="#C1694F"
                                d="M12.507 14.501a1 1 0 11-1.415-1.414l8.485-8.485a1 1 0 111.415 1.414l-8.485 8.485z"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        Tags
                      </a>
                    </li>
                    <li>
                      <a
                        href="/_"
                        className="sidebar-navigation-link c-link        
                    c-link--block c-link--icon-left"
                      >
                        <span className="c-link__icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 44 44"
                            width="24"
                            height="24"
                          >
                            <g className="nc-icon-wrapper">
                              <path
                                fill="#FFD983"
                                d="M33 15.06c0 6.439-5 7.439-5 13.44 0 3.098-3.123 3.359-5.5 3.359-2.053 0-6.586-.779-6.586-3.361C15.914 22.5 11 21.5 11 15.06c0-6.031 5.285-10.92 11.083-10.92C27.883 4.14 33 9.029 33 15.06z"
                              ></path>
                              <path
                                fill="#CCD6DD"
                                d="M26.167 36.5c0 .828-2.234 2.5-4.167 2.5-1.933 0-4.167-1.672-4.167-2.5 0-.828 2.233-.5 4.167-.5 1.933 0 4.167-.328 4.167.5z"
                              ></path>
                              <path
                                fill="#FFCC4D"
                                d="M26.707 14.293a.999.999 0 00-1.414 0L22 17.586l-3.293-3.293a1 1 0 10-1.414 1.414L21 19.414V30a1 1 0 102 0V19.414l3.707-3.707a.999.999 0 000-1.414z"
                              ></path>
                              <path
                                fill="#99AAB5"
                                d="M28 35a2 2 0 01-2 2h-8a2 2 0 01-2-2v-6h12v6z"
                              ></path>
                              <path
                                fill="#CCD6DD"
                                d="M15.999 36a1 1 0 01-.163-1.986l12-2a.994.994 0 011.15.822.999.999 0 01-.822 1.15l-12 2a.927.927 0 01-.165.014zm0-4a1 1 0 01-.163-1.986l12-2a.995.995 0 011.15.822.999.999 0 01-.822 1.15l-12 2a.927.927 0 01-.165.014z"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        href="/_"
                        className="sidebar-navigation-link c-link        
                    c-link--block c-link--icon-left"
                      >
                        <span className="c-link__icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 44 44"
                            width="24"
                            height="24"
                          >
                            <g className="nc-icon-wrapper">
                              <path
                                fill="#F4900C"
                                d="M15 4a8 8 0 00-8 8v8h2v-8a6 6 0 0112 0v8h2v-8a8 8 0 00-8-8z"
                              ></path>
                              <path
                                fill="#DD2E44"
                                d="M5 12l2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2v23H5z"
                              ></path>
                              <path
                                fill="#FFCC4D"
                                d="M29 9a8 8 0 00-8 8v8h2v-8a6 6 0 0112 0v8h2v-8a8 8 0 00-8-8z"
                              ></path>
                              <path
                                fill="#744EAA"
                                d="M19 17l2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-2v23H19z"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        Forem Shop
                      </a>
                    </li>
                    <li>
                      <a
                        href="/_"
                        className="sidebar-navigation-link c-link        
                    c-link--block c-link--icon-left"
                      >
                        <span className="c-link__icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 44 44"
                            width="24"
                            height="24"
                          >
                            <path
                              fill="#DD2E44"
                              d="M39.885 15.833c0-5.45-4.418-9.868-9.867-9.868-3.308 0-6.227 1.633-8.018 4.129-1.791-2.496-4.71-4.129-8.017-4.129-5.45 0-9.868 4.417-9.868 9.868 0 .772.098 1.52.266 2.241C5.751 26.587 15.216 35.568 22 38.034c6.783-2.466 16.249-11.447 17.617-19.959.17-.721.268-1.469.268-2.242z"
                            ></path>
                          </svg>
                        </span>
                        Sponsors
                      </a>
                    </li>
                    <li>
                      <a
                        href="about/index.html"
                        className="sidebar-navigation-link c-link        
                    c-link--block c-link--icon-left"
                      >
                        <span className="c-link__icon">
                          <svg
                            viewBox="0 0 235 234"
                            xmlns="http://www.w3.org/2000/svg"
                            className="rainbow-logo"
                            preserveAspectRatio="xMinYMin meet"
                          >
                            <g fill="none" fill-rule="evenodd">
                              <path
                                fill="#88AEDC"
                                d="M234.04 175.67l-75.69 58.28h47.18L234.04 212z"
                              ></path>
                              <path d="M234.04 140.06l-121.93 93.89h.02l121.91-93.87zM133.25.95L.04 103.51v.02L133.27.95z"></path>
                              <path
                                fill="#F58F8E"
                                fill-rule="nonzero"
                                d="M.04.95v30.16L39.21.95z"
                              ></path>
                              <path
                                fill="#FEE18A"
                                fill-rule="nonzero"
                                d="M39.21.95L.04 31.11v35.9L85.84.95z"
                              ></path>
                              <path
                                fill="#F3F095"
                                fill-rule="nonzero"
                                d="M85.84.95L.04 67.01v36.5L133.25.95z"
                              ></path>
                              <path
                                fill="#55C1AE"
                                fill-rule="nonzero"
                                d="M133.27.95L.04 103.53v35.59L179.49.95z"
                              ></path>
                              <path
                                fill="#F7B3CE"
                                fill-rule="nonzero"
                                d="M234.04.95h-7.37L.04 175.45v35.93l234-180.18z"
                              ></path>
                              <path
                                fill="#88AEDC"
                                fill-rule="nonzero"
                                d="M179.49.95L.04 139.12v36.33L226.67.95z"
                              ></path>
                              <path
                                fill="#F58F8E"
                                fill-rule="nonzero"
                                d="M234.04 31.2L.04 211.38v22.57h18.03l215.97-166.3z"
                              ></path>
                              <path
                                fill="#FEE18A"
                                fill-rule="nonzero"
                                d="M234.04 67.65L18.07 233.95H64.7l169.34-130.39z"
                              ></path>
                              <path
                                fill="#F3F095"
                                fill-rule="nonzero"
                                d="M234.04 103.56L64.7 233.95h47.41l121.93-93.89z"
                              ></path>
                              <path
                                fill="#55C1AE"
                                fill-rule="nonzero"
                                d="M234.04 140.08l-121.91 93.87h46.22l75.69-58.28z"
                              ></path>
                              <path
                                fill="#F7B3CE"
                                fill-rule="nonzero"
                                d="M234.04 212l-28.51 21.95h28.51z"
                              ></path>
                              <path
                                d="M65.237 77.75c4.514.95 7.774 2.8 11.135 6.3 3.059 3.2 4.965 6.85 5.767 10.95.652 3.45.652 40.55 0 44.05-1.705 9.1-9.479 16.2-19.109 17.45-2.006.25-8.727.5-14.845.5H37V77h12.438c8.828 0 13.342.2 15.8.75zM51.545 117v25.6l5.166-.2c4.464-.15 5.417-.35 7.423-1.5 3.912-2.3 3.962-2.45 3.962-24.2 0-21.2 0-21.2-3.661-23.6-1.806-1.2-2.558-1.35-7.473-1.55l-5.417-.15V117zm79.245-32.75v7.25h-25.58v18h15.549V124H105.21l.1 9.1.15 9.15 12.69.15 12.638.1V157h-14.795c-16.451 0-19.009-.3-21.617-2.6-3.661-3.2-3.46-1.15-3.611-36.3-.1-21.9.05-32.25.401-33.65.702-2.6 3.661-5.8 6.27-6.7 1.554-.55 5.466-.7 17.704-.75h15.648v7.25zm31.647 20.85c3.712 14.25 6.821 25.6 6.922 25.25.15-.35 3.31-12.4 7.071-26.85l6.872-26.25 7.824-.15c5.918-.1 7.874.05 7.874.5s-17.354 66.2-18.357 69.5c-.702 2.3-4.463 7-6.57 8.25-2.658 1.5-6.57 1.75-8.978.5-2.156-1.1-5.015-4.4-6.47-7.5-.902-1.9-15.648-56-19.058-70l-.352-1.35h7.825c7.673 0 7.874 0 8.275 1.1.2.65 3.41 12.8 7.122 27z"
                                fill="#FFF"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="contacts/index.html"
                        className="sidebar-navigation-link c-link        
                    c-link--block c-link--icon-left"
                      >
                        <span className="c-link__icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 44 44"
                            width="24"
                            height="24"
                          >
                            <g className="nc-icon-wrapper">
                              <path
                                fill="#FFAC33"
                                d="M38.724 33.656c-1.239-.01-1.241 1.205-1.241 1.205H22.5c-5.246 0-9.5-4.254-9.5-9.5s4.254-9.5 9.5-9.5 9.5 4.254 9.5 9.5c0 3.062-1.6 5.897-3.852 7.633h5.434C35.022 30.849 36 28.139 36 25.361c0-7.456-6.045-13.5-13.5-13.5-7.456 0-13.5 6.044-13.5 13.5 0 7.455 6.044 13.5 13.5 13.5h14.982s-.003 1.127 1.241 1.139c1.238.012 1.228-1.245 1.228-1.245l.014-3.821s.001-1.267-1.241-1.278zM9 18.26a16.047 16.047 0 014-4.739V13c0-5 5-7 5-8s-1-1-1-1H5C4 4 4 5 4 5c0 1 5 3.333 5 7.69v5.57z"
                              ></path>
                              <path
                                fill="#BE1931"
                                d="M17.091 33.166a9.487 9.487 0 01-4.045-8.72l-3.977-.461c-.046.452-.069.911-.069 1.376 0 4.573 2.28 8.608 5.76 11.051l2.331-3.246z"
                              ></path>
                              <path
                                fill="#BE1931"
                                d="M10 29.924s-5.188-.812-5 1 5-1 5-1zm0 .312s-4.125 2.688-2.938 3.75S10 30.236 10 30.236z"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        href="/_"
                        className="sidebar-navigation-link c-link        
                    c-link--block c-link--icon-left"
                      >
                        <span className="c-link__icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            viewBox="0 0 47.5 47.5"
                            id="svg2"
                          >
                            <defs id="defs6">
                              <clipPath id="clipPath18">
                                <path
                                  d="M 0,38 38,38 38,0 0,0 0,38 z"
                                  id="path20"
                                ></path>
                              </clipPath>
                            </defs>
                            <g
                              transform="matrix(1.25,0,0,-1.25,0,47.5)"
                              id="g12"
                            >
                              <g id="g14">
                                <g clip-path="url(#clipPath18)" id="g16">
                                  <g transform="translate(33,30)" id="g22">
                                    <path
                                      d="m 0,0 -28,0 c -2.209,0 -4,-1.791 -4,-4 l 0,-15 c 0,-2.209 1.791,-4 4,-4 l 11.416,0 c 0.52,-0.596 1.477,-1 2.584,-1 1.107,0 2.064,0.404 2.584,1 L 0,-23 c 2.209,0 4,1.791 4,4 L 4,-4 C 4,-1.791 2.209,0 0,0"
                                      id="path24"
                                    ></path>
                                  </g>
                                  <g transform="translate(21,10)" id="g26">
                                    <path
                                      d="m 0,0 c 0,-1.104 -0.896,-2 -2,-2 -1.104,0 -2,0.896 -2,2 l 0,18 c 0,1.104 0.896,2 2,2 1.104,0 2,-0.896 2,-2 L 0,0 z"
                                      id="path28"
                                    ></path>
                                  </g>
                                  <g transform="translate(19,11)" id="g30">
                                    <path
                                      d="m 0,0 c 0,-1.104 -0.896,-2 -2,-2 l -12,0 c -1.104,0 -2,0.896 -2,2 l 0,18 c 0,1.104 0.896,2 2,2 l 12,0 c 1.104,0 2,-0.896 2,-2 L 0,0 z"
                                      id="path32"
                                    ></path>
                                  </g>
                                  <g transform="translate(19,11)" id="g34">
                                    <path
                                      d="m 0,0 c -0.999,1.998 -3.657,2 -4,2 -2,0 -5,-2 -8,-2 -1,0 -2,0.896 -2,2 l 0,16 c 0,1.104 1,2 2,2 3.255,0 6,2 8,2 3,0 4,-1.896 4,-3 L 0,0 z"
                                      id="path36"
                                    ></path>
                                  </g>
                                  <g transform="translate(35,11)" id="g38">
                                    <path
                                      d="m 0,0 c 0,-1.104 -0.896,-2 -2,-2 l -12,0 c -1.104,0 -2,0.896 -2,2 l 0,18 c 0,1.104 0.896,2 2,2 l 12,0 c 1.104,0 2,-0.896 2,-2 L 0,0 z"
                                      id="path40"
                                    ></path>
                                  </g>
                                  <g transform="translate(19,11)" id="g42">
                                    <path
                                      d="m 0,0 c 0.999,1.998 3.657,2 4,2 2,0 5,-2 8,-2 1,0 2,0.896 2,2 l 0,16 c 0,1.104 -1,2 -2,2 C 8.744,20 6,22 4,22 1,22 0,20.104 0,19 L 0,0 z"
                                      id="path44"
                                    ></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </span>
                        Guides
                      </a>
                    </li>
                    <li>
                      <a
                        href="/_"
                        className="sidebar-navigation-link c-link        
                    c-link--block c-link--icon-left"
                      >
                        <span className="c-link__icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 45 45"
                            version="1.1"
                            id="svg2"
                          >
                            <metadata id="metadata8"></metadata>
                            <defs id="defs6">
                              <clipPath
                                id="clipPath16"
                                clipPathUnits="userSpaceOnUse"
                              >
                                <path
                                  id="path18"
                                  d="M 0,36 36,36 36,0 0,0 0,36 Z"
                                ></path>
                              </clipPath>
                            </defs>
                            <g transform="matrix(1.25,0,0,-1.25,0,45)" id="g10">
                              <g id="g12">
                                <g clip-path="url(#clipPath16)" id="g14">
                                  <g transform="translate(2,20)" id="g20">
                                    <path
                                      id="path22"
                                      d="m 0,0 c 0,-8.837 7.164,-16 16,-16 8.837,0 16,7.163 16,16 C 32,8.836 24.837,16 16,16 7.164,16 0,8.836 0,0"
                                    ></path>
                                  </g>
                                  <g
                                    transform="translate(15.4063,25.5)"
                                    id="g24"
                                  >
                                    <path
                                      id="path26"
                                      d="m 0,0 c 0,-1.381 -0.896,-2.5 -2,-2.5 -1.104,0 -2,1.119 -2,2.5 0,1.38 0.896,2.5 2,2.5 1.104,0 2,-1.12 2,-2.5"
                                    ></path>
                                  </g>
                                  <g transform="translate(26,24.5)" id="g28">
                                    <path
                                      id="path30"
                                      d="m 0,0 c 0,-1.381 -0.895,-2.5 -2,-2.5 -1.104,0 -2,1.119 -2,2.5 0,1.38 0.896,2.5 2,2.5 1.105,0 2,-1.12 2,-2.5"
                                    ></path>
                                  </g>
                                  <g
                                    transform="translate(9.6709,29.667)"
                                    id="g32"
                                  >
                                    <path
                                      id="path34"
                                      d="M 0,0 C -0.164,0.087 -0.303,0.223 -0.391,0.398 -0.607,0.827 -0.431,1.325 0.002,1.511 4.268,3.341 7.701,1.554 7.845,1.477 8.278,1.246 8.453,0.729 8.236,0.323 8.02,-0.082 7.496,-0.223 7.063,0.005 6.94,0.069 4.231,1.437 0.785,-0.042 0.528,-0.151 0.238,-0.127 0,0"
                                    ></path>
                                  </g>
                                  <g
                                    transform="translate(14.7427,16.4277)"
                                    id="g36"
                                  >
                                    <path
                                      id="path38"
                                      d="M 0,0 C -0.136,0.127 -0.236,0.293 -0.276,0.486 -0.375,0.955 -0.078,1.392 0.389,1.46 4.981,2.138 7.841,-0.469 7.962,-0.58 8.322,-0.914 8.357,-1.457 8.044,-1.795 7.732,-2.131 7.189,-2.133 6.83,-1.801 6.726,-1.709 4.458,0.307 0.748,-0.24 0.471,-0.281 0.197,-0.184 0,0"
                                    ></path>
                                  </g>
                                  <g
                                    transform="translate(20.4307,25.917)"
                                    id="g40"
                                  >
                                    <path
                                      id="path42"
                                      d="M 0,0 C -0.156,0.098 -0.286,0.243 -0.362,0.424 -0.549,0.866 -0.339,1.352 0.105,1.508 4.486,3.044 7.79,1.028 7.929,0.941 8.344,0.681 8.483,0.154 8.24,-0.237 7.998,-0.627 7.464,-0.732 7.049,-0.475 6.929,-0.402 4.321,1.146 0.782,-0.095 0.518,-0.187 0.23,-0.143 0,0"
                                    ></path>
                                  </g>
                                  <g
                                    transform="translate(17.2764,0.8682)"
                                    id="g44"
                                  >
                                    <path
                                      id="path46"
                                      d="m 0,0 c 0,0 1.265,0.411 1.429,1.352 0.173,0.971 -0.624,1.167 -0.624,1.167 0,0 1.041,0.208 1.172,1.376 0.123,1.1 -0.862,1.363 -0.862,1.363 0,0 0.97,0.4 1.016,1.539 0.038,0.959 -0.995,1.428 -0.995,1.428 0,0 5.038,1.22 5.555,1.34 0.516,0.121 1.321,0.616 1.07,1.695 -0.249,1.08 -1.204,1.118 -1.698,1.003 -0.494,-0.116 -6.744,-1.567 -8.9,-2.069 -0.23,-0.053 -1.308,-0.302 -1.439,-0.334 -0.54,-0.127 -0.785,0.111 -0.405,0.512 0.509,0.536 0.833,1.129 0.947,2.113 0.119,1.036 -0.232,2.314 -0.433,2.809 -0.374,0.921 -1.005,1.649 -1.734,1.899 -1.138,0.39 -1.946,-0.321 -1.542,-1.561 0.604,-1.855 0.209,-3.375 -0.833,-4.293 -2.449,-2.157 -3.589,-3.695 -2.83,-6.973 0.827,-3.575 4.377,-5.876 7.952,-5.048 C -2.965,-0.64 0,0 0,0"
                                    ></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </span>
                        Software comparisons
                      </a>
                    </li>
                  </ul>
                </nav>
                <nav className="mb-4">
                  <h2 className="crayons-subtitle-3 py-2 p1-3">Other</h2>
                  <ul className="other-navigation-links sidebar-navigation-links spac-sidebar-navigation-links">
                    <li>
                      <a
                        href="/code-of-conduct"
                        className="sidebar-navigation-link c-link c-link--block c-link--icon-left"
                      >
                        <span className="c-link__icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 44 44"
                            width="24"
                            height="24"
                          >
                            <g className="nc-icon-wrapper">
                              <path
                                fill="#FFDB5E"
                                d="M38.956 21.916c0-.503-.12-.975-.321-1.404-1.341-4.326-7.619-4.01-16.549-4.221-1.493-.035-.639-1.798-.115-5.668.341-2.517-1.282-6.382-4.01-6.382-4.498 0-.171 3.548-4.148 12.322-2.125 4.688-6.875 2.062-6.875 6.771v10.719c0 1.833.18 3.595 2.758 3.885 2.499.281 1.937 2.062 5.542 2.062h18.044a3.337 3.337 0 003.333-3.334c0-.762-.267-1.456-.698-2.018 1.02-.571 1.72-1.649 1.72-2.899 0-.76-.266-1.454-.696-2.015 1.023-.57 1.725-1.649 1.725-2.901 0-.909-.368-1.733-.961-2.336a3.311 3.311 0 001.251-2.581z"
                              ></path>
                              <path
                                fill="#EE9547"
                                d="M27.02 25.249h8.604c1.17 0 2.268-.626 2.866-1.633a.876.876 0 00-1.506-.892 1.588 1.588 0 01-1.361.775h-8.81c-.873 0-1.583-.71-1.583-1.583s.71-1.583 1.583-1.583H32.7a.875.875 0 000-1.75h-5.888a3.337 3.337 0 00-3.333 3.333c0 1.025.475 1.932 1.205 2.544a3.32 3.32 0 00-.998 2.373c0 1.028.478 1.938 1.212 2.549a3.318 3.318 0 00.419 5.08 3.305 3.305 0 00-.852 2.204 3.337 3.337 0 003.333 3.333h5.484a3.35 3.35 0 002.867-1.632.875.875 0 00-1.504-.894 1.594 1.594 0 01-1.363.776h-5.484c-.873 0-1.583-.71-1.583-1.583s.71-1.583 1.583-1.583h6.506a3.35 3.35 0 002.867-1.633.875.875 0 10-1.504-.894 1.572 1.572 0 01-1.363.777h-7.063a1.585 1.585 0 010-3.167h8.091a3.35 3.35 0 002.867-1.632.875.875 0 00-1.504-.894 1.573 1.573 0 01-1.363.776H27.02a1.585 1.585 0 010-3.167z"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        Code of conduct
                      </a>
                    </li>
                    <li>
                      <a
                        href="/privacy"
                        className="sidebar-navigation-link c-link c-link--block c-link--icon-left"
                      >
                        <span className="c-link__icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 44 44"
                            width="24"
                            height="24"
                          >
                            <g transform="translate(4 4)">
                              <circle
                                fill="#FFCC4D"
                                cx="18"
                                cy="18"
                                r="18"
                              ></circle>
                              <path
                                fill="#664500"
                                d="M27.335 23.629a.501.501 0 00-.635-.029c-.039.029-3.922 2.9-8.7 2.9-4.766 0-8.662-2.871-8.7-2.9a.5.5 0 10-.729.657C8.7 24.472 11.788 29.5 18 29.5s9.301-5.028 9.429-5.243a.499.499 0 00-.094-.628z"
                              ></path>
                              <path
                                fill="#65471B"
                                d="M18 26.591c-.148 0-.291-.011-.438-.016v4.516h.875v-4.517c-.145.005-.289.017-.437.017z"
                              ></path>
                              <path
                                fill="#FFF"
                                d="M22 26c.016-.004-1.45.378-2.446.486-.366.042-.737.076-1.117.089v4.517H20c1.1 0 2-.9 2-2V26zm-8 0c-.016-.004 1.45.378 2.446.486.366.042.737.076 1.117.089v4.517H16c-1.1 0-2-.9-2-2V26z"
                              ></path>
                              <path
                                fill="#65471B"
                                d="M27.335 23.629a.501.501 0 00-.635-.029c-.03.022-2.259 1.668-5.411 2.47-.443.113-1.864.43-3.286.431-1.424 0-2.849-.318-3.292-.431-3.152-.802-5.381-2.448-5.411-2.47a.501.501 0 00-.729.657c.097.162 1.885 3.067 5.429 4.481v-1.829c-.016-.004 1.45.378 2.446.486.366.042.737.076 1.117.089.146.005.289.016.437.016.148 0 .291-.011.438-.016.38-.013.751-.046 1.117-.089.996-.108 2.462-.49 2.446-.486v1.829c3.544-1.414 5.332-4.319 5.429-4.481a.5.5 0 00-.095-.628zm-.711-9.605c0 1.714-.938 3.104-2.096 3.104-1.157 0-2.096-1.39-2.096-3.104s.938-3.104 2.096-3.104c1.158 0 2.096 1.39 2.096 3.104zm-17.167 0c0 1.714.938 3.104 2.096 3.104 1.157 0 2.096-1.39 2.096-3.104s-.938-3.104-2.096-3.104c-1.158 0-2.096 1.39-2.096 3.104z"
                              ></path>
                              <path
                                fill="#292F33"
                                d="M34.808 9.627c-.171-.166-1.267.274-2.376-.291-2.288-1.166-8.07-2.291-11.834.376-.403.285-2.087.333-2.558.313-.471.021-2.155-.027-2.558-.313-3.763-2.667-9.545-1.542-11.833-.376-1.109.565-2.205.125-2.376.291-.247.239-.247 1.196.001 1.436.246.239 1.477.515 1.722 1.232.247.718.249 4.958 2.213 6.424 1.839 1.372 6.129 1.785 8.848.238 2.372-1.349 2.289-4.189 2.724-5.881.155-.603.592-.907 1.26-.907s1.105.304 1.26.907c.435 1.691.351 4.532 2.724 5.881 2.719 1.546 7.009 1.133 8.847-.238 1.965-1.465 1.967-5.706 2.213-6.424.245-.717 1.476-.994 1.722-1.232.248-.24.249-1.197.001-1.436zm-20.194 3.65c-.077 1.105-.274 3.227-1.597 3.98-.811.462-1.868.743-2.974.743h-.001c-1.225 0-2.923-.347-3.587-.842-.83-.619-1.146-3.167-1.265-4.12-.076-.607-.28-2.09.388-2.318 1.06-.361 2.539-.643 4.052-.643.693 0 3.021.043 4.155.741 1.005.617.872 1.851.829 2.459zm16.278-.253c-.119.954-.435 3.515-1.265 4.134-.664.495-2.362.842-3.587.842h-.001c-1.107 0-2.163-.281-2.975-.743-1.323-.752-1.52-2.861-1.597-3.966-.042-.608-.176-1.851.829-2.468 1.135-.698 3.462-.746 4.155-.746 1.513 0 2.991.277 4.052.638.668.228.465 1.702.389 2.309z"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/terms"
                        className="sidebar-navigation-link c-link c-link--block c-link--icon-left"
                      >
                        <span className="c-link__icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 44 44"
                            width="24"
                            height="24"
                          >
                            <g transform="translate(4 4)">
                              <ellipse
                                fill="#F5F8FA"
                                cx="8.828"
                                cy="18"
                                rx="7.953"
                                ry="13.281"
                              ></ellipse>
                              <path
                                fill="#E1E8ED"
                                d="M8.828 32.031C3.948 32.031.125 25.868.125 18S3.948 3.969 8.828 3.969 17.531 10.132 17.531 18s-3.823 14.031-8.703 14.031zm0-26.562C4.856 5.469 1.625 11.09 1.625 18s3.231 12.531 7.203 12.531S16.031 24.91 16.031 18 12.8 5.469 8.828 5.469z"
                              ></path>
                              <circle
                                fill="#8899A6"
                                cx="6.594"
                                cy="18"
                                r="4.96"
                              ></circle>
                              <circle
                                fill="#292F33"
                                cx="6.594"
                                cy="18"
                                r="3.565"
                              ></circle>
                              <circle
                                fill="#F5F8FA"
                                cx="7.911"
                                cy="15.443"
                                r="1.426"
                              ></circle>
                              <ellipse
                                fill="#F5F8FA"
                                cx="27.234"
                                cy="18"
                                rx="7.953"
                                ry="13.281"
                              ></ellipse>
                              <path
                                fill="#E1E8ED"
                                d="M27.234 32.031c-4.88 0-8.703-6.163-8.703-14.031s3.823-14.031 8.703-14.031S35.938 10.132 35.938 18s-3.824 14.031-8.704 14.031zm0-26.562c-3.972 0-7.203 5.622-7.203 12.531 0 6.91 3.231 12.531 7.203 12.531S34.438 24.91 34.438 18 31.206 5.469 27.234 5.469z"
                              ></path>
                              <circle
                                fill="#8899A6"
                                cx="25"
                                cy="18"
                                r="4.96"
                              ></circle>
                              <circle
                                fill="#292F33"
                                cx="25"
                                cy="18"
                                r="3.565"
                              ></circle>
                              <circle
                                fill="#F5F8FA"
                                cx="26.317"
                                cy="15.443"
                                r="1.426"
                              ></circle>
                            </g>
                          </svg>
                        </span>
                        Terms of use
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="flex justify-start mb-4">
                  <a
                    href="https://twitter.com/thepracticaldev"
                    target="_blank"
                    className="c-link c-link--icon-alone c-link--block "
                    rel="noopener me"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-labelledby="a9sybmiben7q0leada0d5pr5w234jn9"
                      className="crayons-icon c-link__icon"
                    >
                      <path d="M22.162 5.656a8.383 8.383 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.211 4.211 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.395 8.395 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.495 8.495 0 002.087-2.165l-.001-.001z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com/thepracticaldev"
                    target="_blank"
                    className="c-link c-link--icon-alone c-link--block "
                    rel="noopener me"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-labelledby="ab2ipci0ml6hvbmvh4vfuekird5yvsky"
                      className="crayons-icon c-link__icon"
                    >
                      <path d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.188 19.188 0 00-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1h-4.598z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/forem"
                    target="_blank"
                    className="c-link c-link--icon-alone c-link--block "
                    rel="noopener me"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-labelledby="am3uwp7sczrxjoiw6xcnaaxstdqu1zh5"
                      className="crayons-icon c-link__icon"
                    >
                      <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/thepracticaldev"
                    target="_blank"
                    className="c-link c-link--icon-alone c-link--block "
                    rel="noopener me"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-labelledby="a8sbh5dc53a757f40vjz1p2ovdnd2kta"
                      className="crayons-icon c-link__icon"
                    >
                      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://twitch.com/thepracticaldev"
                    target="_blank"
                    className="c-link c-link--icon-alone c-link--block "
                    rel="noopener me"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-labelledby="aj2am5t4679y4guseeeu1p540wio6lr3"
                      className="crayons-icon c-link__icon"
                    >
                      <path d="M4.3 3H21v11.7l-4.7 4.7h-3.9l-2.5 2.4H7v-2.4H3V6.2L4.3 3zM5 17.4h4v2.4h.095l2.5-2.4h3.877L19 13.872V5H5v12.4zM15 8h2v4.7h-2V8zm0 0h2v4.7h-2V8zm-5 0h2v4.7h-2V8z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://fosstodon.org/@thepracticaldev"
                    target="_blank"
                    className="c-link c-link--icon-alone c-link--block "
                    rel="noopener me"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-labelledby="agf4t3swaivyo1mzog15aqn7s32d5a9z"
                      className="crayons-icon c-link__icon"
                    >
                      <path d="M21.258 13.99c-.274 1.41-2.456 2.955-4.962 3.254-1.306.156-2.593.3-3.965.236-2.243-.103-4.014-.535-4.014-.535 0 .218.014.426.04.62.292 2.215 2.196 2.347 4 2.41 1.82.062 3.44-.45 3.44-.45l.076 1.646s-1.274.684-3.542.81c-1.25.068-2.803-.032-4.612-.51-3.923-1.039-4.598-5.22-4.701-9.464-.031-1.26-.012-2.447-.012-3.44 0-4.34 2.843-5.611 2.843-5.611 1.433-.658 3.892-.935 6.45-.956h.062c2.557.02 5.018.298 6.451.956 0 0 2.843 1.272 2.843 5.61 0 0 .036 3.201-.397 5.424zm-2.956-5.087c0-1.074-.273-1.927-.822-2.558-.567-.631-1.308-.955-2.229-.955-1.065 0-1.871.41-2.405 1.228l-.518.87-.519-.87C11.276 5.8 10.47 5.39 9.405 5.39c-.921 0-1.663.324-2.229.955-.549.631-.822 1.484-.822 2.558v5.253h2.081V9.057c0-1.075.452-1.62 1.357-1.62 1 0 1.501.647 1.501 1.927v2.79h2.07v-2.79c0-1.28.5-1.927 1.5-1.927.905 0 1.358.545 1.358 1.62v5.1h2.08V8.902l.001.001z"></path>
                    </svg>
                  </a>
                </div>
                <nav className="mb-6" aria-label="Secondary sidebar nav">
                  <h3 className="crayons-subtitle-3 p-2">Popular Tags</h3>
                  <div className="overflow-y-auto">
                    <div className="sidebar-nav-element">
                      <a href="/t/webdev" className="c-link c-link--block">
                        #webdev
                      </a>
                    </div>
                    <div className="sidebar-nav-element">
                      <a href="/t/javascript" className="c-link c-link--block">
                        #javascript
                      </a>
                    </div>
                    <div className="sidebar-nav-element">
                      <a href="/t/beginners" className="c-link c-link--block">
                        #beginners
                      </a>
                    </div>
                    <div className="sidebar-nav-element">
                      <a href="/t/programming" className="c-link c-link--block">
                        #programming
                      </a>
                    </div>
                    <div className="sidebar-nav-element">
                      <a href="/t/tutorial" className="c-link c-link--block">
                        #tutorial
                      </a>
                    </div>
                    <div className="sidebar-nav-element">
                      <a href="/t/react" className="c-link c-link--block">
                        #react
                      </a>
                    </div>
                    <div className="sidebar-nav-element">
                      <a href="/t/python" className="c-link c-link--block">
                        #python
                      </a>
                    </div>
                    <div className="sidebar-nav-element">
                      <a
                        href="/t/productivity"
                        className="c-link c-link--block"
                      >
                        #productivity
                      </a>
                    </div>
                    <div className="sidebar-nav-element">
                      <a href="/t/devops" className="c-link c-link--block">
                        #devops
                      </a>
                    </div>
                    <div className="sidebar-nav-element">
                      <a href="/t/css" className="c-link c-link--block">
                        #css
                      </a>
                    </div>
                    <div className="sidebar-nav-element">
                      <a href="/t/aws" className="c-link c-link--block">
                        #aws
                      </a>
                    </div>
                    <div className="sidebar-nav-element">
                      <a href="/t/node" className="c-link c-link--block">
                        #node
                      </a>
                    </div>
                    <div className="sidebar-nav-element">
                      <a href="/t/opensource" className="c-link c-link--block">
                        #opensource
                      </a>
                    </div>
                    <div className="sidebar-nav-element">
                      <a href="/t/typescript" className="c-link c-link--block">
                        #typescript
                      </a>
                    </div>
                    <div className="sidebar-nav-element">
                      <a href="/t/career" className="c-link c-link--block">
                        #career
                      </a>
                    </div>
                    <div className="sidebar-nav-element">
                      <a href="/t/html" className="c-link c-link--block">
                        #html
                      </a>
                    </div>
                    <div className="sidebar-nav-element">
                      <a href="/t/discuss" className="c-link c-link--block">
                        #discuss
                      </a>
                    </div>
                    <div className="sidebar-nav-element">
                      <a href="/t/news" className="c-link c-link--block">
                        #news
                      </a>
                    </div>
                    <div className="sidebar-nav-element">
                      <a href="/t/github" className="c-link c-link--block">
                        #github
                      </a>
                    </div>
                    <div className="sidebar-nav-element">
                      <a href="/t/testing" className="c-link c-link--block">
                        #testing
                      </a>
                    </div>
                    <div className="sidebar-nav-element">
                      <a href="/t/cloud" className="c-link c-link--block">
                        #cloud
                      </a>
                    </div>
                    <div className="sidebar-nav-element">
                      <a href="/t/php" className="c-link c-link--block">
                        #php
                      </a>
                    </div>
                    <div className="sidebar-nav-element">
                      <a href="/t/android" className="c-link c-link--block">
                        #android
                      </a>
                    </div>
                    <div className="sidebar-nav-element">
                      <a href="/t/java" className="c-link c-link--block">
                        #java
                      </a>
                    </div>
                    <div className="sidebar-nav-element">
                      <a href="/t/api" className="c-link c-link--block">
                        #api
                      </a>
                    </div>
                  </div>
                </nav>
                <div className="crayons-card crayons-card--secondary crayons-sponsorship">
                  <div className="crayons-sponsorship__header relative">
                    <div className="crayons-sponsorship__title">
                      DEV Community
                    </div>
                    <button
                      id="sponsorship-dropdown-trigger-477"
                      aria-controls="sponsorship-dropdown-477"
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="dropBtn crayons-sponsorship__dropdown crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon"
                      aria-label="Toggle dropdown menu"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        role="img"
                        aria-labelledby="aoovo6d3pq590vkirtwwpmtoy4t6g43d"
                        className="crayons-icon pointer-events-none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id="sponsorship-dropdown-477"
                      className="crayons-dropdown right-0"
                    >
                      <ul className="list-none m-0">
                        <li>
                          <a
                            className="crayons-link crayons-link--block"
                            href="/billboards"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              role="img"
                              aria-hidden="true"
                              className="crayons-icon c-btn__icon"
                            >
                              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"></path>
                            </svg>
                            What's a billboard?
                          </a>
                        </li>
                        <li>
                          <a
                            className="crayons-link crayons-link--block"
                            href="/settings/customization#sponsors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              role="img"
                              aria-hidden="true"
                              className="crayons-icon c-btn__icon"
                            >
                              <path
                                d="M3.34 16.9999C2.91727 16.2689 2.58866 15.4874 2.362 14.6739C2.85531 14.423 3.26959 14.0406 3.55903 13.5688C3.84846 13.0971 4.00176 12.5545 4.00197 12.0011C4.00218 11.4476 3.84928 10.9049 3.5602 10.4329C3.27112 9.961 2.85712 9.57821 2.364 9.32694C2.81604 7.69243 3.67673 6.1999 4.865 4.98994C5.32909 5.29167 5.86762 5.45911 6.42098 5.47373C6.97434 5.48834 7.52095 5.34958 8.00033 5.07278C8.47971 4.79598 8.87315 4.39194 9.13713 3.90539C9.4011 3.41883 9.52531 2.86872 9.496 2.31594C11.1381 1.89157 12.8612 1.89226 14.503 2.31795C14.474 2.87071 14.5984 3.42073 14.8626 3.90715C15.1268 4.39357 15.5204 4.79742 15.9998 5.07401C16.4793 5.35059 17.0259 5.48913 17.5793 5.4743C18.1326 5.45946 18.671 5.29183 19.135 4.98994C19.714 5.57994 20.228 6.25095 20.66 6.99995C21.093 7.74895 21.417 8.52995 21.638 9.32595C21.1447 9.57685 20.7304 9.95932 20.441 10.4311C20.1515 10.9028 19.9982 11.4454 19.998 11.9988C19.9978 12.5523 20.1507 13.095 20.4398 13.5669C20.7289 14.0389 21.1429 14.4217 21.636 14.6729C21.184 16.3075 20.3233 17.8 19.135 19.0099C18.6709 18.7082 18.1324 18.5408 17.579 18.5262C17.0257 18.5115 16.479 18.6503 15.9997 18.9271C15.5203 19.2039 15.1268 19.6079 14.8629 20.0945C14.5989 20.5811 14.4747 21.1312 14.504 21.6839C12.8619 22.1083 11.1388 22.1076 9.497 21.6819C9.52605 21.1292 9.4016 20.5792 9.13742 20.0927C8.87324 19.6063 8.47964 19.2025 8.00017 18.9259C7.5207 18.6493 6.97405 18.5108 6.42073 18.5256C5.8674 18.5404 5.32896 18.7081 4.865 19.0099C4.27399 18.4069 3.76159 17.7315 3.34 16.9999ZM9 17.1959C10.0656 17.8106 10.8668 18.797 11.25 19.9659C11.749 20.0129 12.25 20.0139 12.749 19.9669C13.1324 18.7978 13.934 17.8114 15 17.1969C16.0652 16.5806 17.3205 16.3794 18.525 16.6319C18.815 16.2239 19.065 15.7889 19.273 15.3339C18.4524 14.4174 17.9991 13.2302 18 11.9999C18 10.7399 18.47 9.56295 19.273 8.66595C19.0635 8.21109 18.8125 7.77658 18.523 7.36795C17.3193 7.62025 16.0648 7.41942 15 6.80395C13.9344 6.18932 13.1332 5.20293 12.75 4.03394C12.251 3.98694 11.75 3.98594 11.251 4.03294C10.8676 5.20209 10.066 6.1885 9 6.80295C7.93478 7.41926 6.67948 7.62046 5.475 7.36795C5.18556 7.77623 4.93513 8.21081 4.727 8.66595C5.54757 9.5825 6.00088 10.7697 6 11.9999C6 13.2599 5.53 14.4369 4.727 15.3339C4.93647 15.7888 5.18754 16.2233 5.477 16.6319C6.68072 16.3796 7.93521 16.5805 9 17.1959ZM12 14.9999C11.2044 14.9999 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 11.9999C9 11.2043 9.31607 10.4412 9.87868 9.87862C10.4413 9.31602 11.2044 8.99995 12 8.99995C12.7956 8.99995 13.5587 9.31602 14.1213 9.87862C14.6839 10.4412 15 11.2043 15 11.9999C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 14.9999 12 14.9999ZM12 12.9999C12.2652 12.9999 12.5196 12.8946 12.7071 12.7071C12.8946 12.5195 13 12.2652 13 11.9999C13 11.7347 12.8946 11.4804 12.7071 11.2928C12.5196 11.1053 12.2652 10.9999 12 10.9999C11.7348 10.9999 11.4804 11.1053 11.2929 11.2928C11.1054 11.4804 11 11.7347 11 11.9999C11 12.2652 11.1054 12.5195 11.2929 12.7071C11.4804 12.8946 11.7348 12.9999 12 12.9999Z"
                                fill="black"
                              ></path>
                            </svg>
                            Manage preferences
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            className="crayons-link crayons-link--block"
                            href="/report-abuse?billboard=477"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 16 17"
                              fill="none"
                              role="img"
                              aria-hidden="true"
                              className="crayons-icon c-btn__icon"
                            >
                              <path
                                d="M2.16667 11.3333V16.3333H0.5V0.5H8.31833C8.47305 0.500083 8.62469 0.543236 8.75627 0.624627C8.88785 0.706018 8.99417 0.822433 9.06333 0.960833L9.66667 2.16667H14.6667C14.8877 2.16667 15.0996 2.25446 15.2559 2.41074C15.4122 2.56703 15.5 2.77899 15.5 3V12.1667C15.5 12.3877 15.4122 12.5996 15.2559 12.7559C15.0996 12.9122 14.8877 13 14.6667 13H9.34833C9.19361 12.9999 9.04197 12.9568 8.91039 12.8754C8.77882 12.794 8.67249 12.6776 8.60333 12.5392L8 11.3333H2.16667ZM2.16667 2.16667V9.66667H9.03L9.86333 11.3333H13.8333V3.83333H8.63667L7.80333 2.16667H2.16667Z"
                                fill="#404040"
                              ></path>
                            </svg>
                            Report billboard
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-1 pt-3 text-styles text-styles--display-ad">
                    <h2>
                      <a
                        href="#easiest-way-to-help-the-dev-community-feel-more-like-a-community"
                        className="anchor"
                      ></a>
                      Easiest way to help the DEV community feel more like a
                      community?
                    </h2>
                    <p>
                      Head over to our
                      <a href="https://dev.to/welcome"> Welcome Thread </a>
                      greet some new DEV members!
                    </p>
                  </div>
                </div>
                t
                <div className="pt-4">
                  <div className="crayons-card crayons-card--secondary crayons-sponsorship">
                    <div className="crayons-sponsorship__header relative">
                      <div className="crayons-sponsorship__title">
                        DEV Community
                      </div>
                      <button
                        className="dropBtn crayons-sponsorship__dropdown crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon"
                        aria-label="Toggle dropdown menu"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          role="img"
                          aria-labelledby="a2qsbfjy8qxknar7dtw6gguclbuhs1av"
                          className="crayons-icon pointer-events-none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                          ></path>
                        </svg>
                      </button>
                      <div
                        id="sponsorship-dropdown-675"
                        className="crayons-dropdown right-0"
                      >
                        <ul className="list-none m-0">
                          <li>
                            <a
                              className="crayons-link crayons-link--block"
                              href="/billboards"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                role="img"
                                aria-hidden="true"
                                className="crayons-icon c-btn__icon"
                              >
                                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"></path>
                              </svg>
                              What's a billboard?
                            </a>
                          </li>
                          <li>
                            <a
                              className="crayons-link crayons-link--block"
                              href="/settings/customization#sponsors"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                role="img"
                                aria-hidden="true"
                                className="crayons-icon c-btn__icon"
                              >
                                <path
                                  d="M3.34 16.9999C2.91727 16.2689 2.58866 15.4874 2.362 14.6739C2.85531 14.423 3.26959 14.0406 3.55903 13.5688C3.84846 13.0971 4.00176 12.5545 4.00197 12.0011C4.00218 11.4476 3.84928 10.9049 3.5602 10.4329C3.27112 9.961 2.85712 9.57821 2.364 9.32694C2.81604 7.69243 3.67673 6.1999 4.865 4.98994C5.32909 5.29167 5.86762 5.45911 6.42098 5.47373C6.97434 5.48834 7.52095 5.34958 8.00033 5.07278C8.47971 4.79598 8.87315 4.39194 9.13713 3.90539C9.4011 3.41883 9.52531 2.86872 9.496 2.31594C11.1381 1.89157 12.8612 1.89226 14.503 2.31795C14.474 2.87071 14.5984 3.42073 14.8626 3.90715C15.1268 4.39357 15.5204 4.79742 15.9998 5.07401C16.4793 5.35059 17.0259 5.48913 17.5793 5.4743C18.1326 5.45946 18.671 5.29183 19.135 4.98994C19.714 5.57994 20.228 6.25095 20.66 6.99995C21.093 7.74895 21.417 8.52995 21.638 9.32595C21.1447 9.57685 20.7304 9.95932 20.441 10.4311C20.1515 10.9028 19.9982 11.4454 19.998 11.9988C19.9978 12.5523 20.1507 13.095 20.4398 13.5669C20.7289 14.0389 21.1429 14.4217 21.636 14.6729C21.184 16.3075 20.3233 17.8 19.135 19.0099C18.6709 18.7082 18.1324 18.5408 17.579 18.5262C17.0257 18.5115 16.479 18.6503 15.9997 18.9271C15.5203 19.2039 15.1268 19.6079 14.8629 20.0945C14.5989 20.5811 14.4747 21.1312 14.504 21.6839C12.8619 22.1083 11.1388 22.1076 9.497 21.6819C9.52605 21.1292 9.4016 20.5792 9.13742 20.0927C8.87324 19.6063 8.47964 19.2025 8.00017 18.9259C7.5207 18.6493 6.97405 18.5108 6.42073 18.5256C5.8674 18.5404 5.32896 18.7081 4.865 19.0099C4.27399 18.4069 3.76159 17.7315 3.34 16.9999ZM9 17.1959C10.0656 17.8106 10.8668 18.797 11.25 19.9659C11.749 20.0129 12.25 20.0139 12.749 19.9669C13.1324 18.7978 13.934 17.8114 15 17.1969C16.0652 16.5806 17.3205 16.3794 18.525 16.6319C18.815 16.2239 19.065 15.7889 19.273 15.3339C18.4524 14.4174 17.9991 13.2302 18 11.9999C18 10.7399 18.47 9.56295 19.273 8.66595C19.0635 8.21109 18.8125 7.77658 18.523 7.36795C17.3193 7.62025 16.0648 7.41942 15 6.80395C13.9344 6.18932 13.1332 5.20293 12.75 4.03394C12.251 3.98694 11.75 3.98594 11.251 4.03294C10.8676 5.20209 10.066 6.1885 9 6.80295C7.93478 7.41926 6.67948 7.62046 5.475 7.36795C5.18556 7.77623 4.93513 8.21081 4.727 8.66595C5.54757 9.5825 6.00088 10.7697 6 11.9999C6 13.2599 5.53 14.4369 4.727 15.3339C4.93647 15.7888 5.18754 16.2233 5.477 16.6319C6.68072 16.3796 7.93521 16.5805 9 17.1959ZM12 14.9999C11.2044 14.9999 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 11.9999C9 11.2043 9.31607 10.4412 9.87868 9.87862C10.4413 9.31602 11.2044 8.99995 12 8.99995C12.7956 8.99995 13.5587 9.31602 14.1213 9.87862C14.6839 10.4412 15 11.2043 15 11.9999C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 14.9999 12 14.9999ZM12 12.9999C12.2652 12.9999 12.5196 12.8946 12.7071 12.7071C12.8946 12.5195 13 12.2652 13 11.9999C13 11.7347 12.8946 11.4804 12.7071 11.2928C12.5196 11.1053 12.2652 10.9999 12 10.9999C11.7348 10.9999 11.4804 11.1053 11.2929 11.2928C11.1054 11.4804 11 11.7347 11 11.9999C11 12.2652 11.1054 12.5195 11.2929 12.7071C11.4804 12.8946 11.7348 12.9999 12 12.9999Z"
                                  fill="black"
                                ></path>
                              </svg>
                              Manage preferences
                            </a>
                          </li>
                          <hr />
                          <li>
                            <a
                              className="crayons-link crayons-link--block"
                              href="/report-abuse?billboard=675"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 16 17"
                                fill="none"
                                role="img"
                                aria-hidden="true"
                                className="crayons-icon c-btn__icon"
                              >
                                <path
                                  d="M2.16667 11.3333V16.3333H0.5V0.5H8.31833C8.47305 0.500083 8.62469 0.543236 8.75627 0.624627C8.88785 0.706018 8.99417 0.822433 9.06333 0.960833L9.66667 2.16667H14.6667C14.8877 2.16667 15.0996 2.25446 15.2559 2.41074C15.4122 2.56703 15.5 2.77899 15.5 3V12.1667C15.5 12.3877 15.4122 12.5996 15.2559 12.7559C15.0996 12.9122 14.8877 13 14.6667 13H9.34833C9.19361 12.9999 9.04197 12.9568 8.91039 12.8754C8.77882 12.794 8.67249 12.6776 8.60333 12.5392L8 11.3333H2.16667ZM2.16667 2.16667V9.66667H9.03L9.86333 11.3333H13.8333V3.83333H8.63667L7.80333 2.16667H2.16667Z"
                                  fill="#404040"
                                ></path>
                              </svg>
                              Report billboard
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="p-1 pt-3 text-styles text-styles--display-ad">
                      <h3>
                        {" "}
                        <a
                          href="#the-legend-of-the-lonely-coderdebunked"
                          className="anchor"
                        >
                          {" "}
                        </a>{" "}
                        The Legend of the Lonely Coder...Debunked.
                      </h3>
                      <p>
                        <img
                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--J_nk7IJV--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1ps0bld7xrgq17ze8ung.png"
                          alt="Image description"
                          loading="lazy"
                          width="654"
                          height="596"
                        />{" "}
                        <br />
                        <a href="https://dev.to/enter?state=new-user">
                          Join Over 1 Million Developers on DEV
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
            <main
              id="main-content"
              className="articles-list crayons-layout__content"
            >
              <header className="p-2 px-3 m:p-0 m:px-0 m:mb-2 fs-1">
                <h1 className="screen-reader-only">Posts</h1>
                <nav
                  className="-mx-3 m:mx-0 s:flex items-center justify-between"
                  aria-label="View posts by"
                >
                  <ul className="crayons-navigation crayons-navigation--horizontal">
                    <li>
                      <a
                        href="/_"
                        className="crayons-navigation__item crayons-navigation__item--current"
                      >
                        Relevant
                      </a>
                    </li>
                    <li>
                      <a href="/_" className="crayons-navigation__item">
                        Latest
                      </a>
                    </li>
                    <li>
                      <a href="/_" className="crayons-navigation__item">
                        {" "}
                        Top
                      </a>
                    </li>
                  </ul>
                </nav>
              </header>
              <div className="crayons-story crayons-story--featured">
                <a href="/_" className="crayons-story__hidden-navigation-link">
                  10 Trending Node.js Libraries and Frameworks to Boost Your Web
                  Development
                </a>
                <div className="crayons-article__cover crayons-article__cover__image__feed">
                  <a
                    href="/_"
                    title="10 Trending Node.js Libraries and Frameworks to Boost Your Web Development"
                    aria-label="article"
                    className="crayons-article__cover__image__feed crayons-story__cover__image"
                  >
                    <img
                      src="https://res.cloudinary.com/practicaldev/image/fetch/s--tGUZi0qk--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nhc8sc48qh04yxjz5q1h.png"
                      className="crayons-article__cover__image__feed"
                      alt="Cover image for 10 Trending Node.js Libraries and Frameworks to Boost Your Web Development"
                      width="650"
                      height="275"
                    />
                  </a>
                </div>
                <div className="crayons-story__body">
                  <div className="crayons-story__top">
                    <div className="crayons-story__meta">
                      <div className="crayons-story__author-pic">
                        <a
                          href="/ben"
                          className="crayons-avatar  crayons-avatar--l  "
                        >
                          <img
                            src="https://res.cloudinary.com/practicaldev/image/fetch/s--4bV32lIE--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/166066/c547c6b8-e501-4fa8-ad3c-fdc460cad2ec.png"
                            alt="nialljoemaher profile"
                            className="crayons-avatar__image"
                            loading="lazy"
                          />
                        </a>
                      </div>
                      <div>
                        <div>
                          <a
                            href="/ben"
                            className="crayons-story__secondary fw-medium m:hidden"
                          >
                            Niall Maher
                          </a>
                          <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                            <button className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost">
                              {" "}
                              Niall Maher
                            </button>
                            <div className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0 reverse">
                              <div className="gap-4 grid">
                                <div className="-mt-4">
                                  <a href="/_" className="flex">
                                    <span className="crayons-avatar crayons-avatar--xl mr-2 shirnk-0">
                                      <img
                                        src="https://res.cloudinary.com/practicaldev/image/fetch/s--Ea1OGrCb--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1/f451a206-11c8-4e3d-8936-143d0a7e65bb.png"
                                        className="crayons-avatar__image"
                                        alt=""
                                        loading="lazy"
                                      />
                                    </span>
                                    <span className="crayons-link crayons-subtitle-2 mt-5">
                                      Niall Maher
                                    </span>
                                  </a>
                                </div>
                                <div className="author-preview-metadata-container"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a href="/_" className="crayons-story__tertiary fs-xs">
                          <time title="Monday, March 20, 2023 at 7:06:55 PM">
                            Apr 5
                          </time>
                          <span className="time-ago-indication-initial-placeholder"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="crayons-story__indention">
                    <h2 className="crayons-story__title">
                      <a href="/ben/meme-monday-54i0">
                        10 Trending Node.js Libraries and Frameworks to Boost
                        Your Web Development
                      </a>
                    </h2>
                    <div className="crayons-story__tags">
                      <a
                        className="crayons-tag crayons-tag--filled  "
                        href="/t/jokes"
                      >
                        <span className="crayons-tag__prefix">#</span>
                        js
                      </a>
                      <a
                        className="crayons-tag  crayons-tag--monochrome "
                        href="/t/watercooler"
                      >
                        <span className="crayons-tag__prefix">#</span>
                        watercooler
                      </a>
                      <a
                        className="crayons-tag  crayons-tag--monochrome "
                        href="/t/discuss"
                      >
                        <span className="crayons-tag__prefix">#</span>
                        discuss
                      </a>
                    </div>
                    <div className="crayons-story__bottom">
                      <div className="crayons-story__details">
                        <a
                          href="/_"
                          className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                        >
                          <div className="multiple_reactions_aggregate">
                            <span
                              className="multiple_reactions_icons_container"
                              dir="rtl"
                            >
                              <span className="crayons_icon_container">
                                <img
                                  src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                                  width="18"
                                  height="18"
                                />
                              </span>
                              <span className="crayons_icon_container">
                                <img
                                  src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                                  width="18"
                                  height="18"
                                />
                              </span>
                              <span className="crayons_icon_container">
                                <img
                                  src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                                  width="18"
                                  height="18"
                                />
                              </span>
                              <span className="crayons_icon_container">
                                <img
                                  src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                  width="18"
                                  height="18"
                                />
                              </span>
                            </span>
                            <span className="aggregate_reactions_counter">
                              83
                              <span className="hidden s:inline">reactions</span>
                            </span>
                          </div>
                        </a>
                        <a
                          href="/alvaromontoro/css-is-dead-1i4#comments"
                          className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                          aria-label="Add a comment to post - CSS Is Dead!"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            role="img"
                            aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                            className="crayons-icon"
                          >
                            <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                          </svg>
                          8
                          <span className="hidden s:inline">
                            &nbsp;comments
                          </span>
                        </a>
                      </div>
                      <div className="crayons-story__save">
                        <small className="crayons-story__tertiary fs-xs mr-2">
                          {" "}
                          1 min read{" "}
                        </small>
                        <button
                          type="button"
                          className="c-btn c-btn--icon-alone bookmark-button"
                          aria-label="Save post Meme Monday 🧵 to reading list"
                          title="Save post Meme Monday 🧵 to reading list"
                        >
                          <span className="bm-initial">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              aria-hidden="true"
                            >
                              <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                            </svg>
                          </span>
                          <span className="bm-success">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              aria-hidden="true"
                            >
                              <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="substories">
                <div className="crayons-story ">
                  <a
                    href="/alvaromontoro"
                    className="crayons-story__hidden-navigation-link"
                  >
                    CSS Is Dead!
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/alvaromontoro"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--yG9NaJlu--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/161327/2ff05281-db58-4dcb-946a-4b679e4a266b.jpeg"
                              alt="alvaromontoro profile"
                              className="crayons-avatar__image"
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/alvaromontoro"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              Alvaro Montoro
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button
                                id="story-author-preview-trigger-1407809"
                                aria-controls="story-author-preview-content-1407809"
                                className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost"
                                aria-label="Alvaro Montoro profile details"
                                aria-expanded="false"
                                aria-haspopup="true"
                                data-initialized="true"
                              >
                                Alvaro Montoro
                              </button>
                              <div
                                id="story-author-preview-content-1407809"
                                className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0"
                                data-repositioning-dropdown="true"
                                data-testid="profile-preview-card"
                              >
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/alvaromontoro" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--yG9NaJlu--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/161327/2ff05281-db58-4dcb-946a-4b679e4a266b.jpeg"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        Alvaro Montoro
                                      </span>
                                    </a>
                                  </div>
                                  <div className="author-preview-metadata-container"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-20T13:05:19Z"
                              title="Monday, March 20, 2023 at 7:05:19 PM"
                            >
                              Apr 4
                            </time>
                            <span className="time-ago-indicator-initial-placeholder"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a href="/alvaromontoro/css-is-dead-1i4">
                          CSS Is Dead!
                        </a>
                      </h2>
                      <div className="crayons-story__tags">
                        <a
                          className="crayons-tag crayons-tag--filled  "
                          href="/t/showdev"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          showdev
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/webdev"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          webdev
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/css"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          css
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/joke"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          joke
                        </a>
                      </div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/_"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <span
                                className="multiple_reactions_icons_container"
                                dir="rtl"
                              >
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                              </span>
                              <span className="aggregate_reactions_counter">
                                4
                                <span className="hidden s:inline">
                                  reactions
                                </span>
                              </span>
                            </div>
                          </a>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4#comments"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>

                            <span className="hidden s:inline">Add comment</span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            2 min read
                          </small>
                          <button
                            type="button"
                            className="c-btn c-btn--icon-alone bookmark-button"
                            aria-label="Save post CSS Is Dead! to reading list"
                            title="Save post CSS Is Dead! to reading list"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crayons-story ">
                  <a
                    href="/alvaromontoro"
                    className="crayons-story__hidden-navigation-link"
                  >
                    APIRank.dev - we crawled and ranked all public APIs on the
                    internet 🔭
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/tristankalos"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--yg8d5P18--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/831088/4b297e96-a4f4-444a-8c62-ef9ae5d868b0.jpg"
                              alt="tristankalos profile"
                              className="crayons-avatar__image"
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/alvaromontoro"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              Tristan Kalos
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button
                                className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost"
                                aria-label="Tristan Kalos profile details"
                              >
                                Tristan Kalos
                              </button>
                              <div className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0">
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/tristankalos" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--yg8d5P18--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/831088/4b297e96-a4f4-444a-8c62-ef9ae5d868b0.jpg"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        Tristan Kalos
                                      </span>
                                    </a>
                                  </div>
                                  <div className="author-preview-metadata-container"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-20T13:05:19Z"
                              title="Monday, March 19, 2023 at 9:55:36 PM"
                            >
                              Apr 4
                            </time>
                            <span className="time-ago-indicator-initial-placeholder"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a href="/tristankalos/apirankdev-we-crawled-and-ranked-all-public-apis-on-the-internet-1iho">
                          APIRank.dev - we crawled and ranked all public APIs on
                          the internet 🔭
                        </a>
                      </h2>
                      <div className="crayons-story__tags">
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/webdev"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          webdev
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/api"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          api
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/programming"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          programming
                        </a>
                      </div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/_"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <span
                                className="multiple_reactions_icons_container"
                                dir="rtl"
                              >
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                              </span>
                              <span className="aggregate_reactions_counter">
                                5
                                <span className="hidden s:inline">
                                  reactions
                                </span>
                              </span>
                            </div>
                          </a>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4#comments"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>
                            3
                            <span className="hidden s:inline">
                              &nbsp;comments
                            </span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            3 min read
                          </small>
                          <button
                            type="button"
                            id="article-save-button-1409471"
                            className="c-btn c-btn--icon-alone bookmark-button"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="crayons-card mt-2 m:mt-0 mb-2 m:p-8 p-4"
                  id="in-feed-cta"
                >
                  <div className="align-center">
                    <img
                      className="authentication-feed__image"
                      src="https://res.cloudinary.com/practicaldev/image/fetch/s--pcSkTMZL--/c_limit,f_auto,fl_progressive,q_80,w_190/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png"
                      alt="Secondary DEV Community logo"
                      loading="lazy"
                    />
                  </div>
                  <h2 className="crayons-subtitle-3 mt-5 fs-1 align-center">
                    DEV Community is a community of 1,029,834 amazing developers
                  </h2>
                  <p className="align-center mt-1 color-base-60 fs-base">
                    We're a place where coders share, stay up-to-date and grow
                    their careers.
                  </p>
                  <div
                    className="align-center mt-4"
                    id="authentication-feed-actions"
                  >
                    <div>
                      <div className="align-center">
                        <a
                          href="/enter?state=new-user"
                          className="crayons-btn crayons-btn-c w-75"
                        >
                          Create account
                        </a>
                      </div>
                      <div className="align-center mt-4">
                        <span>
                          Already have an account?
                          <a href="/enter" className="sign" aria-label="Log in">
                            Sign in
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crayons-story ">
                  <a
                    href="/_"
                    className="crayons-story__hidden-navigation-link"
                  >
                    DevOps For Developers: Continuous Integration, GitHub
                    Actions &amp; Sonar Cloud
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/codenameone"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--v7g4NVuO--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/417973/a7b22dd9-5565-48f5-bfab-7e5035b3888f.png"
                              alt="codenameone profile"
                              className="crayons-avatar__image"
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/codenameone"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              Shai Almog
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost">
                                Shai Almog
                              </button>
                              <div className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0 reverse">
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/codenameone" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--v7g4NVuO--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/417973/a7b22dd9-5565-48f5-bfab-7e5035b3888f.png"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        Shai Almog
                                      </span>
                                    </a>
                                  </div>
                                  <div className="color-base-70">
                                    Entrepreneur, Author, Blogger, Open Source
                                    Hacker, DevRel, Java Rockstar, Conference
                                    Speaker and Instructor{" "}
                                  </div>
                                  <div className="user-metadata-details">
                                    <ul className="user-metadata-details-inner">
                                      <li>
                                        <div className="key">Work</div>
                                        <div className="value">
                                          debugagent.com, Co-founder at Codename
                                          One
                                        </div>
                                      </li>
                                      <li>
                                        <div className="key">Joined</div>
                                        <div className="value">
                                          <time
                                            dateTime="2020-06-27T07:55:05Z"
                                            className="date"
                                          >
                                            June 27, 2020
                                          </time>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/codenameone/devops-for-developers-continuous-integration-github-actions-sonar-cloud-ob0"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-21T17:13:11Z"
                              title="Tuesday, March 21, 2023 at 11:13:11 PM"
                            >
                              Apr 4
                            </time>
                            <span
                              className="time-ago-indicator-initial-placeholder"
                              data-seconds="1679418791"
                            ></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a href="/codenameone/devops-for-developers-continuous-integration-github-actions-sonar-cloud-ob0">
                          DevOps For Developers: Continuous Integration, GitHub
                          Actions &amp; Sonar Cloud
                        </a>
                      </h2>
                      <div className="crayons-story__tags">
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/devops"
                        >
                          <span className="crayons-tag__prefix">#</span>devops
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/tutorial"
                        >
                          <span className="crayons-tag__prefix">#</span>tutorial
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/github"
                        >
                          <span className="crayons-tag__prefix">#</span>github
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/ci"
                        >
                          <span className="crayons-tag__prefix">#</span>ci
                        </a>
                      </div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/alvaromontoro/css-is-dead-1i4"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <span
                                className="multiple_reactions_icons_container"
                                dir="rtl"
                              >
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                              </span>
                              <span className="aggregate_reactions_counter">
                                12
                                <span className="hidden s:inline">
                                  reactions
                                </span>
                              </span>
                            </div>
                          </a>
                          <a
                            href="/_"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>
                            4
                            <span className="hidden s:inline">
                              &nbsp;comments
                            </span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            17 min read
                          </small>
                          <button
                            type="button"
                            className="c-btn c-btn--icon-alone bookmark-button"
                            aria-label="Save post DevOps For Developers: Continuous Integration, GitHub Actions &amp; Sonar Cloud to reading list"
                            title="Save post DevOps For Developers: Continuous Integration, GitHub Actions &amp; Sonar Cloud to reading list"
                            data-save-initialized="true"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crayons-story ">
                  <a
                    href="/acidop/encryption-explained-to-a-5-year-old-fci"
                    aria-labelledby="article-link-1409462"
                    className="crayons-story__hidden-navigation-link"
                  >
                    Encryption: Explained to a 5 Year Old 👶🏻
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/acidop"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--VzQjz3rW--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/936575/6887e800-f547-4306-9843-b9d7090052b2.jpg"
                              alt="acidop profile"
                              className="crayons-avatar__image"
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/acidop"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              Zeeshan (Acid) 🎖
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button
                                className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost"
                                aria-label="Zeeshan (Acid) 🎖 profile details"
                              >
                                Zeeshan (Acid) 🎖
                              </button>
                              <div className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0">
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/acidop" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--VzQjz3rW--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/936575/6887e800-f547-4306-9843-b9d7090052b2.jpg"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        Zeeshan (Acid) 🎖
                                      </span>
                                    </a>
                                  </div>
                                  <div className="author-preview-metadata-container"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/acidop/encryption-explained-to-a-5-year-old-fci"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-21T17:36:58Z"
                              title="Tuesday, March 21, 2023 at 11:36:58 PM"
                            >
                              Apr 3
                            </time>
                            <span
                              className="time-ago-indicator-initial-placeholder"
                              data-seconds="1679420218"
                            ></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a
                          href="/acidop/encryption-explained-to-a-5-year-old-fci"
                          data-preload-image=""
                          id="article-link-1409462"
                        >
                          Encryption: Explained to a 5 Year Old 👶🏻
                        </a>
                      </h2>
                      <div className="crayons-story__tags">
                        <a
                          className="crayons-tag crayons-tag--filled  "
                          href="/t/explainlikeimfive"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          explainlikeimfive
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/programming"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          programming
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/codenewbie"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          codenewbie
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/beginners"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          beginners
                        </a>
                      </div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/alvaromontoro/css-is-dead-1i4"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <div className="multiple_reactions_aggregate">
                                <span
                                  className="multiple_reactions_icons_container"
                                  dir="rtl"
                                >
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                </span>
                                <span className="aggregate_reactions_counter">
                                  54
                                  <span className="hidden s:inline">
                                    &nbsp;reactions
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4#comments"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>
                            17
                            <span className="hidden s:inline">
                              &nbsp;comments
                            </span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            2 min read
                          </small>
                          <button
                            type="button"
                            className="c-btn c-btn--icon-alone bookmark-button"
                            data-reactable-id="1409462"
                            aria-label="Save post Encryption: Explained to a 5 Year Old 👶🏻 to reading list"
                            title="Save post Encryption: Explained to a 5 Year Old 👶🏻 to reading list"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crayons-story ">
                  <a
                    href="/kalashin1/create-a-passwordless-authentication-system-ci3"
                    aria-labelledby="article-link-1406133"
                    className="crayons-story__hidden-navigation-link"
                  >
                    Create A Passwordless Authentication System
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/kalashin1"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--6mXUzZUY--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/444740/92a9eec6-cc80-41d4-800d-9fbf23819d1b.jpg"
                              alt="kalashin1 profile"
                              className="crayons-avatar__image"
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/kalashin1"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              Kinanee Samson
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button
                                id="story-author-preview-trigger-1406133"
                                aria-controls="story-author-preview-content-1406133"
                                className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost"
                                aria-label="Kinanee Samson profile details"
                                aria-expanded="false"
                                aria-haspopup="true"
                                data-initialized="true"
                              >
                                Kinanee Samson
                              </button>
                              <div
                                className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0"
                                data-repositioning-dropdown="true"
                                data-testid="profile-preview-card"
                              >
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/kalashin1" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--6mXUzZUY--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/444740/92a9eec6-cc80-41d4-800d-9fbf23819d1b.jpg"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        Kinanee Samson
                                      </span>
                                    </a>
                                  </div>
                                  <div className="print-hidden">
                                    <button
                                      className="crayons-btn follow-action-button whitespace-nowrap follow-user w-100"
                                      data-fetched="fetched"
                                      aria-label="Follow user: Kinanee Samson"
                                      aria-pressed="false"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                  <div className="author-preview-metadata-container"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/kalashin1/create-a-passwordless-authentication-system-ci3"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-21T17:33:51Z"
                              title="Tuesday, March 21, 2023 at 11:33:51 PM"
                            >
                              Apr 3
                            </time>
                            <span
                              className="time-ago-indicator-initial-placeholder"
                              data-seconds="1679420031"
                            ></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a
                          href="/kalashin1/create-a-passwordless-authentication-system-ci3"
                          data-preload-image="https://res.cloudinary.com/practicaldev/image/fetch/s--XQapx6a0--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f0mynbm42clnmzfr2dfu.jpg"
                          id="article-link-1406133"
                        >
                          Create A Passwordless Authentication System
                        </a>
                      </h2>
                      <div className="crayons-story__tags">
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/javascript"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          javascript
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/typescript"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          typescript
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/node"
                        >
                          <span className="crayons-tag__prefix">#</span>node
                        </a>
                      </div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/alvaromontoro/css-is-dead-1i4"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            data-reaction-count=""
                            data-reactable-id="1407809"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <span
                                className="multiple_reactions_icons_container"
                                dir="rtl"
                              >
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                              </span>
                              <span className="aggregate_reactions_counter">
                                14
                                <span className="hidden s:inline">
                                  &nbsp;reactions
                                </span>
                              </span>
                            </div>
                          </a>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4#comments"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>

                            <span className="hidden s:inline">Add comment</span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            4 min read
                          </small>
                          <button
                            type="button"
                            id="article-save-button-1406133"
                            className="c-btn c-btn--icon-alone bookmark-button"
                            data-reactable-id="1406133"
                            data-article-author-id="444740"
                            aria-label="Save post Create A Passwordless Authentication System to reading list"
                            title="Save post Create A Passwordless Authentication System to reading list"
                            data-save-initialized="true"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crayons-story ">
                  <a
                    href="/_"
                    className="crayons-story__hidden-navigation-link"
                  >
                    An in-depth comparison of the most popular DynamoDB wrappers
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/thomasaribart"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--xRb1Y3eV--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/456341/566992e9-a2e1-4098-887c-9406d797633d.jpeg"
                              alt="thomasaribart profile"
                              className="crayons-avatar__image"
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/thomasaribart"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              Thomas Aribart
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button
                                className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost"
                                aria-label="Thomas Aribart profile details"
                              >
                                Thomas Aribart
                              </button>
                              <div
                                id="story-author-preview-content-1387220"
                                className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0 reverse"
                              >
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/thomasaribart" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--xRb1Y3eV--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/456341/566992e9-a2e1-4098-887c-9406d797633d.jpeg"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        Thomas Aribart
                                      </span>
                                    </a>
                                  </div>
                                  <div className="print-hidden">
                                    <button
                                      className="crayons-btn follow-action-button whitespace-nowrap follow-user w-100"
                                      data-fetched="fetched"
                                      aria-label="Follow user: Thomas Aribart"
                                      aria-pressed="false"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                  <div className="author-preview-metadata-container"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/thomasaribart/an-in-depth-comparison-of-the-most-popular-dynamodb-wrappers-5b73"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-21T12:09:39Z"
                              title="Tuesday, March 21, 2023 at 6:09:39 PM"
                            >
                              Apr 2
                            </time>
                            <span
                              className="time-ago-indicator-initial-placeholder"
                              data-seconds="1679400579"
                            ></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a href="/_">
                          An in-depth comparison of the most popular DynamoDB
                          wrappers
                        </a>
                      </h2>
                      <div className="crayons-story__tags">
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/typescript"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          typescript
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/dynamodb"
                        >
                          <span className="crayons-tag__prefix">#</span>dynamodb
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/aws"
                        >
                          <span className="crayons-tag__prefix">#</span>aws
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/serverless"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          serverless
                        </a>
                      </div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/alvaromontoro/css-is-dead-1i4"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <span
                                className="multiple_reactions_icons_container"
                                dir="rtl"
                              >
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                              </span>
                              <span className="aggregate_reactions_counter">
                                11
                                <span className="hidden s:inline">
                                  &nbsp;reactions
                                </span>
                              </span>
                            </div>
                          </a>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4#comments"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>
                            2
                            <span className="hidden s:inline">
                              &nbsp;comments
                            </span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            7 min read
                          </small>
                          <button
                            type="button"
                            id="article-save-button-1387220"
                            className="c-btn c-btn--icon-alone bookmark-button"
                            data-reactable-id="1387220"
                            data-article-author-id="456341"
                            aria-label="Save post An in-depth comparison of the most popular DynamoDB wrappers to reading list"
                            title="Save post An in-depth comparison of the most popular DynamoDB wrappers to reading list"
                            data-save-initialized="true"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crayons-story ">
                  <a
                    href="/_"
                    className="crayons-story__hidden-navigation-link"
                  >
                    Create text change hover effect with JavaScript
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/rmmgc"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--ENEIhJgZ--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/967120/00a88138-68f9-48f7-98e1-e199f24fd512.jpeg"
                              alt="rmmgc profile"
                              className="crayons-avatar__image"
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/rmmgc"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              Ramo Mujagic
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button
                                className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost"
                                aria-label="Ramo Mujagic profile details"
                              >
                                Ramo Mujagic
                              </button>
                              <div className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0">
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/rmmgc" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--ENEIhJgZ--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/967120/00a88138-68f9-48f7-98e1-e199f24fd512.jpeg"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        Ramo Mujagic
                                      </span>
                                    </a>
                                  </div>
                                  <div className="print-hidden">
                                    <button
                                      className="crayons-btn follow-action-button whitespace-nowrap follow-user w-100"
                                      data-info='{"style":"full","id":967120,"classNameName":"User","name":"Ramo Mujagic"}'
                                      data-fetched="fetched"
                                      aria-label="Follow user: Ramo Mujagic"
                                      aria-pressed="false"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                  <div className="author-preview-metadata-container"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/_"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-21T18:25:30Z"
                              title="Wednesday, March 22, 2023 at 12:25:30 AM"
                            >
                              Apr 2
                            </time>
                            <span
                              className="time-ago-indicator-initial-placeholder"
                              data-seconds="1679423130"
                            ></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a href="/_">
                          Create text change hover effect with JavaScript
                        </a>
                      </h2>
                      <div className="crayons-story__tags">
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/javascript"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          javascript
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/webdev"
                        >
                          <span className="crayons-tag__prefix">#</span>webdev
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/beginners"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          beginners
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/tutorial"
                        >
                          <span className="crayons-tag__prefix">#</span>tutorial
                        </a>
                      </div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/alvaromontoro/css-is-dead-1i4"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <span
                                className="multiple_reactions_icons_container"
                                dir="rtl"
                              >
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                              </span>
                              <span className="aggregate_reactions_counter">
                                5
                                <span className="hidden s:inline">
                                  reactions
                                </span>
                              </span>
                            </div>
                          </a>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4#comments"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>
                            2
                            <span className="hidden s:inline">
                              &nbsp;comments
                            </span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            9 min read
                          </small>
                          <button
                            type="button"
                            className="c-btn c-btn--icon-alone bookmark-button"
                            aria-label="Save post Create text change hover effect with JavaScript to reading list"
                            title="Save post Create text change hover effect with JavaScript to reading list"
                            data-save-initialized="true"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crayons-story ">
                  <a
                    href="/zanfranceschi/desafio-10-desafios-simples-de-system-design-c3h"
                    aria-labelledby="article-link-1409598"
                    className="crayons-story__hidden-navigation-link"
                  >
                    [Desafio] - 10 Desafios Simples de System Design
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/zanfranceschi"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--xoFrwAWN--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/839958/86f93374-f880-4d01-a920-f5d0fbece718.jpeg"
                              alt="zanfranceschi profile"
                              className="crayons-avatar__image"
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/zanfranceschi"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              Francisco Zanfranceschi
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button
                                className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost"
                                aria-label="Francisco Zanfranceschi profile details"
                              >
                                Francisco Zanfranceschi
                              </button>
                              <div
                                id="story-author-preview-content-1409598"
                                className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0"
                                data-repositioning-dropdown="true"
                                data-testid="profile-preview-card"
                              >
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/zanfranceschi" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--xoFrwAWN--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/839958/86f93374-f880-4d01-a920-f5d0fbece718.jpeg"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        Francisco Zanfranceschi
                                      </span>
                                    </a>
                                  </div>
                                  <div className="author-preview-metadata-container"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/_"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-21T17:38:16Z"
                              title="Tuesday, March 21, 2023 at 11:38:16 PM"
                            >
                              Apr 1
                            </time>
                            <span
                              className="time-ago-indicator-initial-placeholder"
                              data-seconds="1679420296"
                            ></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a href="/_">
                          [Desafio] - 10 Desafios Simples de System Design
                        </a>
                      </h2>
                      <div className="crayons-story__tags"></div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/alvaromontoro/css-is-dead-1i4"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <div className="multiple_reactions_aggregate">
                                <span
                                  className="multiple_reactions_icons_container"
                                  dir="rtl"
                                >
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                </span>
                                <span className="aggregate_reactions_counter">
                                  36
                                  <span className="hidden s:inline">
                                    &nbsp;reactions
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4#comments"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>
                            3
                            <span className="hidden s:inline">
                              &nbsp;comments
                            </span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            3 min read
                          </small>
                          <button
                            type="button"
                            id="article-save-button-1409598"
                            className="c-btn c-btn--icon-alone bookmark-button"
                            data-reactable-id="1409598"
                            data-article-author-id="839958"
                            aria-label="Save post [Desafio] - 10 Desafios Simples de System Design to reading list"
                            title="Save post [Desafio] - 10 Desafios Simples de System Design to reading list"
                            data-save-initialized="true"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crayons-story ">
                  <a
                    href="/fredy/8-free-resources-tools-for-web-developers-and-designers-2959"
                    aria-labelledby="article-link-1409007"
                    className="crayons-story__hidden-navigation-link"
                  >
                    8+ Free Resources &amp; Tools for Web Developers and
                    Designers
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/fredy"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--Q9Kwp-uC--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/609838/bc3ac0a6-8c2e-4c51-8fdd-83bd3d6ec159.jpeg"
                              alt="fredy profile"
                              className="crayons-avatar__image"
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/fredy"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              Fredy Andrei
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button
                                id="story-author-preview-trigger-1409007"
                                aria-controls="story-author-preview-content-1409007"
                                className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost"
                                aria-label="Fredy Andrei profile details"
                                aria-expanded="false"
                                aria-haspopup="true"
                                data-initialized="true"
                              >
                                Fredy Andrei
                              </button>
                              <div
                                id="story-author-preview-content-1409007"
                                className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0"
                                data-repositioning-dropdown="true"
                                data-testid="profile-preview-card"
                              >
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/fredy" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--Q9Kwp-uC--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/609838/bc3ac0a6-8c2e-4c51-8fdd-83bd3d6ec159.jpeg"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        Fredy Andrei
                                      </span>
                                    </a>
                                  </div>

                                  <div className="author-preview-metadata-container"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/fredy/8-free-resources-tools-for-web-developers-and-designers-2959"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-21T17:00:00Z"
                              title="Tuesday, March 21, 2023 at 11:00:00 PM"
                            >
                              Mar 31
                            </time>
                            <span
                              className="time-ago-indicator-initial-placeholder"
                              data-seconds="1679418000"
                            ></span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a href="/_">
                          8+ Free Resources &amp; Tools for Web Developers and
                          Designers
                        </a>
                      </h2>
                      <div className="crayons-story__tags">
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/webdev"
                        >
                          <span className="crayons-tag__prefix">#</span>webdev
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/tutorial"
                        >
                          <span className="crayons-tag__prefix">#</span>tutorial
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/productivity"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          productivity
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/design"
                        >
                          <span className="crayons-tag__prefix">#</span>design
                        </a>
                      </div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/alvaromontoro/css-is-dead-1i4"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <span
                                className="multiple_reactions_icons_container"
                                dir="rtl"
                              >
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                              </span>
                              <span className="aggregate_reactions_counter">
                                6
                                <span className="hidden s:inline">
                                  reactions
                                </span>
                              </span>
                            </div>
                          </a>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4#comments"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>
                            2
                            <span className="hidden s:inline">
                              &nbsp;comments
                            </span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            4 min read
                          </small>
                          <button
                            type="button"
                            className="c-btn c-btn--icon-alone bookmark-button"
                            aria-label="Save post 8+ Free Resources &amp; Tools for Web Developers and Designers to reading list"
                            title="Save post 8+ Free Resources &amp; Tools for Web Developers and Designers to reading list"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crayons-story ">
                  <a
                    href="/perber/updating-your-kubernetes-cluster-best-practices-lessons-learned-and-tips-for-success-3aep"
                    aria-labelledby="article-link-1403877"
                    className="crayons-story__hidden-navigation-link"
                  >
                    Lessons Learned: Kubernetes Cluster Updates and Challenges
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/perber"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--opuMUYDZ--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1040630/828fec19-6ad6-479e-ba0f-abfd5efe509d.jpeg"
                              alt="perber profile"
                              className="crayons-avatar__image"
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/perber"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              perber
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button
                                id="story-author-preview-trigger-1403877"
                                aria-controls="story-author-preview-content-1403877"
                                className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost"
                                aria-label="perber profile details"
                                aria-expanded="false"
                                aria-haspopup="true"
                                data-initialized="true"
                              >
                                perber
                              </button>
                              <div
                                id="story-author-preview-content-1403877"
                                className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0"
                                data-repositioning-dropdown="true"
                                data-testid="profile-preview-card"
                              >
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/perber" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--opuMUYDZ--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1040630/828fec19-6ad6-479e-ba0f-abfd5efe509d.jpeg"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        perber
                                      </span>
                                    </a>
                                  </div>
                                  <div className="print-hidden">
                                    <button
                                      className="crayons-btn follow-action-button whitespace-nowrap follow-user w-100"
                                      data-info='{"style":"full","id":1040630,"classNameName":"User","name":"perber"}'
                                      data-fetched="fetched"
                                      aria-label="Follow user: perber"
                                      aria-pressed="false"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                  <div
                                    className="author-preview-metadata-container"
                                    data-author-id="1040630"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/perber/updating-your-kubernetes-cluster-best-practices-lessons-learned-and-tips-for-success-3aep"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-21T14:34:52Z"
                              title="Tuesday, March 21, 2023 at 8:34:52 PM"
                            >
                              Mar 30
                            </time>
                            <span
                              className="time-ago-indicator-initial-placeholder"
                              data-seconds="1679409292"
                            ></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a
                          href="/perber/updating-your-kubernetes-cluster-best-practices-lessons-learned-and-tips-for-success-3aep"
                          data-preload-image=""
                          id="article-link-1403877"
                        >
                          Lessons Learned: Kubernetes Cluster Updates and
                          Challenges
                        </a>
                      </h2>
                      <div className="crayons-story__tags">
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/devops"
                        >
                          <span className="crayons-tag__prefix">#</span>devops
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/kubernetes"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          kubernetes
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/linux"
                        >
                          <span className="crayons-tag__prefix">#</span>linux
                        </a>
                      </div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/alvaromontoro/css-is-dead-1i4"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            data-reaction-count=""
                            data-reactable-id="1407809"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <div className="multiple_reactions_aggregate">
                                <span
                                  className="multiple_reactions_icons_container"
                                  dir="rtl"
                                >
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                </span>
                                <span className="aggregate_reactions_counter">
                                  24
                                  <span className="hidden s:inline">
                                    &nbsp;reactions
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4#comments"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>
                            7
                            <span className="hidden s:inline">
                              &nbsp;comments
                            </span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            7 min read
                          </small>
                          <button
                            type="button"
                            id="article-save-button-1403877"
                            className="c-btn c-btn--icon-alone bookmark-button"
                            data-reactable-id="1403877"
                            data-article-author-id="1040630"
                            aria-label="Save post Lessons Learned: Kubernetes Cluster Updates and Challenges to reading list"
                            title="Save post Lessons Learned: Kubernetes Cluster Updates and Challenges to reading list"
                            data-save-initialized="true"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crayons-story ">
                  <a
                    href="/kuldeeptarapara/new-material-buttons-and-buttonthemes-after-flutter-20-2nan"
                    aria-labelledby="article-link-1408934"
                    className="crayons-story__hidden-navigation-link"
                  >
                    New Material Buttons And ButtonThemes After Flutter 2.0
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/kuldeeptarapara"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--RSjWpPu7--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/770056/06feb277-54f5-482f-be53-0a26057b1957.jpg"
                              alt="kuldeeptarapara profile"
                              className="crayons-avatar__image"
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/kuldeeptarapara"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              Kuldeep Tarapara
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button
                                id="story-author-preview-trigger-1408934"
                                aria-controls="story-author-preview-content-1408934"
                                className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost"
                                aria-label="Kuldeep Tarapara profile details"
                                aria-expanded="false"
                                aria-haspopup="true"
                                data-initialized="true"
                              >
                                Kuldeep Tarapara
                              </button>
                              <div
                                id="story-author-preview-content-1408934"
                                className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0"
                                data-repositioning-dropdown="true"
                                data-testid="profile-preview-card"
                              >
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/kuldeeptarapara" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--RSjWpPu7--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/770056/06feb277-54f5-482f-be53-0a26057b1957.jpg"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        Kuldeep Tarapara
                                      </span>
                                    </a>
                                  </div>
                                  <div className="print-hidden">
                                    <button
                                      className="crayons-btn follow-action-button whitespace-nowrap follow-user w-100"
                                      data-info='{"style":"full","id":770056,"classNameName":"User","name":"Kuldeep Tarapara"}'
                                      data-fetched="fetched"
                                      aria-label="Follow user: Kuldeep Tarapara"
                                      aria-pressed="false"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                  <div
                                    className="author-preview-metadata-container"
                                    data-author-id="770056"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/kuldeeptarapara/new-material-buttons-and-buttonthemes-after-flutter-20-2nan"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-21T09:55:27Z"
                              title="Tuesday, March 21, 2023 at 3:55:27 PM"
                            >
                              Mar 28
                            </time>
                            <span
                              className="time-ago-indicator-initial-placeholder"
                              data-seconds="1679392527"
                            ></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a
                          href="/kuldeeptarapara/new-material-buttons-and-buttonthemes-after-flutter-20-2nan"
                          data-preload-image="https://res.cloudinary.com/practicaldev/image/fetch/s--MNnStsGZ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mq8fsu9f0nkjnab39bf3.jpg"
                          id="article-link-1408934"
                        >
                          New Material Buttons And ButtonThemes After Flutter
                          2.0
                        </a>
                      </h2>
                      <div className="crayons-story__tags">
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/flutter"
                        >
                          <span className="crayons-tag__prefix">#</span>flutter
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/programming"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          programming
                        </a>
                      </div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/alvaromontoro/css-is-dead-1i4"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            data-reaction-count=""
                            data-reactable-id="1407809"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <div className="multiple_reactions_aggregate">
                                <span
                                  className="multiple_reactions_icons_container"
                                  dir="rtl"
                                >
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                </span>
                                <span className="aggregate_reactions_counter">
                                  10
                                  <span className="hidden s:inline">
                                    &nbsp;reactions
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4#comments"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>
                            5
                            <span className="hidden s:inline">
                              &nbsp;comments
                            </span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            4 min read
                          </small>
                          <button
                            type="button"
                            id="article-save-button-1408934"
                            className="c-btn c-btn--icon-alone bookmark-button"
                            data-reactable-id="1408934"
                            data-article-author-id="770056"
                            aria-label="Save post New Material Buttons And ButtonThemes After Flutter 2.0 to reading list"
                            title="Save post New Material Buttons And ButtonThemes After Flutter 2.0 to reading list"
                            data-save-initialized="true"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crayons-story ">
                  <a
                    href="/singula_team/chizzy-your-virtual-friend-for-navigating-remote-work-chaos-2odb"
                    aria-labelledby="article-link-1409219"
                    className="crayons-story__hidden-navigation-link"
                  >
                    Chizzy: Your Virtual Friend for Navigating Remote Work Chaos
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/singula_team"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--S56YD48A--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/949096/cc199577-6a81-41c8-a7b6-081815dd9114.jpg"
                              alt="singula_team profile"
                              className="crayons-avatar__image"
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/singula_team"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              Singula Team
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button
                                id="story-author-preview-trigger-1409219"
                                aria-controls="story-author-preview-content-1409219"
                                className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost"
                                aria-label="Singula Team profile details"
                                aria-expanded="false"
                                aria-haspopup="true"
                                data-initialized="true"
                              >
                                Singula Team
                              </button>
                              <div
                                id="story-author-preview-content-1409219"
                                className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0"
                                data-repositioning-dropdown="true"
                                data-testid="profile-preview-card"
                              >
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/singula_team" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--S56YD48A--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/949096/cc199577-6a81-41c8-a7b6-081815dd9114.jpg"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        Singula Team
                                      </span>
                                    </a>
                                  </div>
                                  <div className="print-hidden">
                                    <button
                                      className="crayons-btn follow-action-button whitespace-nowrap follow-user w-100"
                                      data-info='{"style":"full","id":949096,"classNameName":"User","name":"Singula Team"}'
                                      data-fetched="fetched"
                                      aria-label="Follow user: Singula Team"
                                      aria-pressed="false"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                  <div
                                    className="author-preview-metadata-container"
                                    data-author-id="949096"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/singula_team/chizzy-your-virtual-friend-for-navigating-remote-work-chaos-2odb"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-21T13:36:10Z"
                              title="Tuesday, March 21, 2023 at 7:36:10 PM"
                            >
                              Mar 27
                            </time>
                            <span
                              className="time-ago-indicator-initial-placeholder"
                              data-seconds="1679405770"
                            ></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a
                          href="/singula_team/chizzy-your-virtual-friend-for-navigating-remote-work-chaos-2odb"
                          data-preload-image="https://res.cloudinary.com/practicaldev/image/fetch/s--bKRGzZwi--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uqgt59480qkex1izdpl5.jpg"
                          id="article-link-1409219"
                        >
                          Chizzy: Your Virtual Friend for Navigating Remote Work
                          Chaos
                        </a>
                      </h2>
                      <div className="crayons-story__tags">
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/uiweekly"
                        >
                          <span className="crayons-tag__prefix">#</span>uiweekly
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/productivity"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          productivity
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/nocode"
                        >
                          <span className="crayons-tag__prefix">#</span>nocode
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/opensource"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          opensource
                        </a>
                      </div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/alvaromontoro/css-is-dead-1i4"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            data-reaction-count=""
                            data-reactable-id="1407809"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <div className="multiple_reactions_aggregate">
                                <span
                                  className="multiple_reactions_icons_container"
                                  dir="rtl"
                                >
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                </span>
                                <span className="aggregate_reactions_counter">
                                  48
                                  <span className="hidden s:inline">
                                    &nbsp;reactions
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4#comments"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>
                            3
                            <span className="hidden s:inline">
                              &nbsp;comments
                            </span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            1 min read
                          </small>
                          <button
                            type="button"
                            id="article-save-button-1409219"
                            className="c-btn c-btn--icon-alone bookmark-button"
                            data-reactable-id="1409219"
                            data-article-author-id="949096"
                            aria-label="Save post Chizzy: Your Virtual Friend for Navigating Remote Work Chaos to reading list"
                            title="Save post Chizzy: Your Virtual Friend for Navigating Remote Work Chaos to reading list"
                            data-save-initialized="true"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crayons-story ">
                  <a
                    href="/itskunal/must-use-libraries-with-react-framework--47cb"
                    aria-labelledby="article-link-1408744"
                    className="crayons-story__hidden-navigation-link"
                  >
                    Must use libraries with react -&gt; Framework ;)
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/itskunal"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--9vU6clva--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/830225/fa5880f7-1ebd-4498-acb3-be64f6b07273.jpeg"
                              alt="itskunal profile"
                              className="crayons-avatar__image"
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/itskunal"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              Kunal Agrawal
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button
                                id="story-author-preview-trigger-1408744"
                                aria-controls="story-author-preview-content-1408744"
                                className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost"
                                aria-label="Kunal Agrawal profile details"
                                aria-expanded="false"
                                aria-haspopup="true"
                                data-initialized="true"
                              >
                                Kunal Agrawal
                              </button>
                              <div
                                id="story-author-preview-content-1408744"
                                className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0"
                                data-repositioning-dropdown="true"
                                data-testid="profile-preview-card"
                              >
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/itskunal" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--9vU6clva--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/830225/fa5880f7-1ebd-4498-acb3-be64f6b07273.jpeg"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        Kunal Agrawal
                                      </span>
                                    </a>
                                  </div>
                                  <div className="print-hidden">
                                    <button
                                      className="crayons-btn follow-action-button whitespace-nowrap follow-user w-100"
                                      data-info='{"style":"full","id":830225,"classNameName":"User","name":"Kunal Agrawal"}'
                                      data-fetched="fetched"
                                      aria-label="Follow user: Kunal Agrawal"
                                      aria-pressed="false"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                  <div
                                    className="author-preview-metadata-container"
                                    data-author-id="830225"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/itskunal/must-use-libraries-with-react-framework--47cb"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-21T08:37:44Z"
                              title="Tuesday, March 21, 2023 at 2:37:44 PM"
                            >
                              Mar 26
                            </time>
                            <span
                              className="time-ago-indicator-initial-placeholder"
                              data-seconds="1679387864"
                            ></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a
                          href="/itskunal/must-use-libraries-with-react-framework--47cb"
                          data-preload-image=""
                          id="article-link-1408744"
                        >
                          Must use libraries with react -&gt; Framework ;)
                        </a>
                      </h2>
                      <div className="crayons-story__tags">
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/react"
                        >
                          <span className="crayons-tag__prefix">#</span>react
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/webdev"
                        >
                          <span className="crayons-tag__prefix">#</span>webdev
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/frontend"
                        >
                          <span className="crayons-tag__prefix">#</span>frontend
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/node"
                        >
                          <span className="crayons-tag__prefix">#</span>node
                        </a>
                      </div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/alvaromontoro/css-is-dead-1i4"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            data-reaction-count=""
                            data-reactable-id="1407809"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <div className="multiple_reactions_aggregate">
                                <span
                                  className="multiple_reactions_icons_container"
                                  dir="rtl"
                                >
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                </span>
                                <span className="aggregate_reactions_counter">
                                  86
                                  <span className="hidden s:inline">
                                    &nbsp;reactions
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4#comments"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>
                            23
                            <span className="hidden s:inline">
                              &nbsp;comments
                            </span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            2 min read
                          </small>
                          <button
                            type="button"
                            id="article-save-button-1408744"
                            className="c-btn c-btn--icon-alone bookmark-button"
                            data-reactable-id="1408744"
                            data-article-author-id="830225"
                            aria-label="Save post Must use libraries with react -> Framework ;) to reading list"
                            title="Save post Must use libraries with react -> Framework ;) to reading list"
                            data-save-initialized="true"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crayons-story ">
                  <a
                    href="/johnste39558689/sap-regression-testing-why-it-matters-33k7"
                    aria-labelledby="article-link-1408945"
                    className="crayons-story__hidden-navigation-link"
                  >
                    SAP Regression Testing: Why It Matters
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/johnste39558689"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--efhveK-e--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/997727/c3c3427b-9a49-435c-b851-60dc61e7c833.png"
                              alt="johnste39558689 profile"
                              className="crayons-avatar__image"
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/johnste39558689"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              John Stein
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button
                                id="story-author-preview-trigger-1408945"
                                aria-controls="story-author-preview-content-1408945"
                                className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost"
                                aria-label="John Stein profile details"
                                aria-expanded="false"
                                aria-haspopup="true"
                                data-initialized="true"
                              >
                                John Stein
                              </button>
                              <div
                                id="story-author-preview-content-1408945"
                                className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0"
                                data-repositioning-dropdown="true"
                                data-testid="profile-preview-card"
                              >
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/johnste39558689" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--efhveK-e--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/997727/c3c3427b-9a49-435c-b851-60dc61e7c833.png"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        John Stein
                                      </span>
                                    </a>
                                  </div>
                                  <div className="print-hidden">
                                    <button
                                      className="crayons-btn follow-action-button whitespace-nowrap follow-user w-100"
                                      data-info='{"style":"full","id":997727,"classNameName":"User","name":"John Stein"}'
                                      data-fetched="fetched"
                                      aria-label="Follow user: John Stein"
                                      aria-pressed="false"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                  <div
                                    className="author-preview-metadata-container"
                                    data-author-id="997727"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/johnste39558689/sap-regression-testing-why-it-matters-33k7"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-21T10:06:54Z"
                              title="Tuesday, March 21, 2023 at 4:06:54 PM"
                            >
                              Mar 25
                            </time>
                            <span
                              className="time-ago-indicator-initial-placeholder"
                              data-seconds="1679393214"
                            ></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a
                          href="/johnste39558689/sap-regression-testing-why-it-matters-33k7"
                          data-preload-image=""
                          id="article-link-1408945"
                        >
                          SAP Regression Testing: Why It Matters
                        </a>
                      </h2>
                      <div className="crayons-story__tags"></div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/alvaromontoro/css-is-dead-1i4"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            data-reaction-count=""
                            data-reactable-id="1407809"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <div className="multiple_reactions_aggregate">
                                <span
                                  className="multiple_reactions_icons_container"
                                  dir="rtl"
                                >
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                </span>
                                <span className="aggregate_reactions_counter">
                                  68
                                  <span className="hidden s:inline">
                                    &nbsp;reactions
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4#comments"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>
                            15
                            <span className="hidden s:inline">
                              &nbsp;comments
                            </span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            3 min read
                          </small>
                          <button
                            type="button"
                            id="article-save-button-1408945"
                            className="c-btn c-btn--icon-alone bookmark-button"
                            data-reactable-id="1408945"
                            data-article-author-id="997727"
                            aria-label="Save post SAP Regression Testing: Why It Matters to reading list"
                            title="Save post SAP Regression Testing: Why It Matters to reading list"
                            data-save-initialized="true"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crayons-story ">
                  <a
                    href="/javinpaul/is-bytebytego-and-system-design-interview-an-insiders-guide-book-by-alex-xu-worth-it-266j"
                    aria-labelledby="article-link-1408712"
                    className="crayons-story__hidden-navigation-link"
                  >
                    Is ByteByteGo and System Design Interview - An insider's
                    guide book by Alex Xu Worth it?
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/javinpaul"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--0fM98SnQ--/c_fill,f_auto,fl_progressive,h_90,q_66,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/101616/c488dc69-7dca-4855-b291-3711ce5ac7da.gif"
                              alt="javinpaul profile"
                              className="crayons-avatar__image"
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/javinpaul"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              javinpaul
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button
                                id="story-author-preview-trigger-1408712"
                                aria-controls="story-author-preview-content-1408712"
                                className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost"
                                aria-label="javinpaul profile details"
                                aria-expanded="false"
                                aria-haspopup="true"
                                data-initialized="true"
                              >
                                javinpaul
                              </button>
                              <div
                                id="story-author-preview-content-1408712"
                                className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0"
                                data-repositioning-dropdown="true"
                                data-testid="profile-preview-card"
                              >
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/javinpaul" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--0fM98SnQ--/c_fill,f_auto,fl_progressive,h_90,q_66,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/101616/c488dc69-7dca-4855-b291-3711ce5ac7da.gif"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        javinpaul
                                      </span>
                                    </a>
                                  </div>
                                  <div className="print-hidden">
                                    <button
                                      className="crayons-btn follow-action-button whitespace-nowrap follow-user w-100"
                                      data-info='{"style":"full","id":101616,"classNameName":"User","name":"javinpaul"}'
                                      data-fetched="fetched"
                                      aria-label="Follow user: javinpaul"
                                      aria-pressed="false"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                  <div
                                    className="author-preview-metadata-container"
                                    data-author-id="101616"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/javinpaul/is-bytebytego-and-system-design-interview-an-insiders-guide-book-by-alex-xu-worth-it-266j"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-21T10:42:27Z"
                              title="Tuesday, March 21, 2023 at 4:42:27 PM"
                            >
                              Mar 24
                            </time>
                            <span
                              className="time-ago-indicator-initial-placeholder"
                              data-seconds="1679395347"
                            ></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a
                          href="/javinpaul/is-bytebytego-and-system-design-interview-an-insiders-guide-book-by-alex-xu-worth-it-266j"
                          data-preload-image="https://res.cloudinary.com/practicaldev/image/fetch/s--34OGsNqv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sh0ncruy92qcmdou5oi2.jpg"
                          id="article-link-1408712"
                        >
                          Is ByteByteGo and System Design Interview - An
                          insider's guide book by Alex Xu Worth it?
                        </a>
                      </h2>
                      <div className="crayons-story__tags">
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/programming"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          programming
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/book"
                        >
                          <span className="crayons-tag__prefix">#</span>book
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/coding"
                        >
                          <span className="crayons-tag__prefix">#</span>coding
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/systemdesign"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          systemdesign
                        </a>
                      </div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/alvaromontoro/css-is-dead-1i4"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            data-reaction-count=""
                            data-reactable-id="1407809"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <div className="multiple_reactions_aggregate">
                                <span
                                  className="multiple_reactions_icons_container"
                                  dir="rtl"
                                >
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                </span>
                                <span className="aggregate_reactions_counter">
                                  28
                                  <span className="hidden s:inline">
                                    &nbsp;reactions
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4#comments"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>
                            6
                            <span className="hidden s:inline">
                              &nbsp;comments
                            </span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            12 min read
                          </small>
                          <button
                            type="button"
                            id="article-save-button-1408712"
                            className="c-btn c-btn--icon-alone bookmark-button"
                            data-reactable-id="1408712"
                            data-article-author-id="101616"
                            aria-label="Save post Is ByteByteGo and System Design Interview - An insider's guide book by Alex Xu Worth it? to reading list"
                            title="Save post Is ByteByteGo and System Design Interview - An insider's guide book by Alex Xu Worth it? to reading list"
                            data-save-initialized="true"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crayons-story ">
                  <a
                    href="/moonly/moonly-weekly-progress-update-41-3cod"
                    aria-labelledby="article-link-1409239"
                    className="crayons-story__hidden-navigation-link"
                  >
                    Moonly weekly progress update #41
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/moonly"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--76DVpeKI--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/870310/c0e6681f-b5ce-45ea-8a13-c0d302e3f74c.jpg"
                              alt="moonly profile"
                              className="crayons-avatar__image"
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/moonly"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              Moon.ly
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button
                                id="story-author-preview-trigger-1409239"
                                aria-controls="story-author-preview-content-1409239"
                                className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost"
                                aria-label="Moon.ly profile details"
                                aria-expanded="false"
                                aria-haspopup="true"
                                data-initialized="true"
                              >
                                Moon.ly
                              </button>
                              <div
                                id="story-author-preview-content-1409239"
                                className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0"
                                data-repositioning-dropdown="true"
                                data-testid="profile-preview-card"
                              >
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/moonly" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--76DVpeKI--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/870310/c0e6681f-b5ce-45ea-8a13-c0d302e3f74c.jpg"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        Moon.ly
                                      </span>
                                    </a>
                                  </div>
                                  <div className="print-hidden">
                                    <button
                                      className="crayons-btn follow-action-button whitespace-nowrap follow-user w-100"
                                      data-info='{"style":"full","id":870310,"classNameName":"User","name":"Moon.ly"}'
                                      data-fetched="fetched"
                                      aria-label="Follow user: Moon.ly"
                                      aria-pressed="false"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                  <div
                                    className="author-preview-metadata-container"
                                    data-author-id="870310"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/moonly/moonly-weekly-progress-update-41-3cod"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-21T14:08:31Z"
                              title="Tuesday, March 21, 2023 at 8:08:31 PM"
                            >
                              Mar 22
                            </time>
                            <span
                              className="time-ago-indicator-initial-placeholder"
                              data-seconds="1679407711"
                            ></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a
                          href="/moonly/moonly-weekly-progress-update-41-3cod"
                          data-preload-image="https://res.cloudinary.com/practicaldev/image/fetch/s--RhB_X1vi--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rd97w52yh93bsk8gvtkb.png"
                          id="article-link-1409239"
                        >
                          Moonly weekly progress update #41
                        </a>
                      </h2>
                      <div className="crayons-story__tags">
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/javascript"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          javascript
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/blockchain"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          blockchain
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/nft"
                        >
                          <span className="crayons-tag__prefix">#</span>nft
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/saas"
                        >
                          <span className="crayons-tag__prefix">#</span>saas
                        </a>
                      </div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/alvaromontoro/css-is-dead-1i4"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            data-reaction-count=""
                            data-reactable-id="1407809"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <div className="multiple_reactions_aggregate">
                                <span
                                  className="multiple_reactions_icons_container"
                                  dir="rtl"
                                >
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                </span>
                                <span className="aggregate_reactions_counter">
                                  37
                                  <span className="hidden s:inline">
                                    &nbsp;reactions
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4#comments"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>
                            9
                            <span className="hidden s:inline">
                              &nbsp;comments
                            </span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            2 min read
                          </small>
                          <button
                            type="button"
                            id="article-save-button-1409239"
                            className="c-btn c-btn--icon-alone bookmark-button"
                            data-reactable-id="1409239"
                            data-article-author-id="870310"
                            aria-label="Save post Moonly weekly progress update #41 to reading list"
                            title="Save post Moonly weekly progress update #41 to reading list"
                            data-save-initialized="true"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crayons-story ">
                  <a
                    href="/apollolabsbin/stm32f4-embedded-rust-at-the-pac-creating-hardware-abstractions-58gp"
                    aria-labelledby="article-link-1409635"
                    className="crayons-story__hidden-navigation-link"
                  >
                    STM32F4 Embedded Rust at the PAC: Creating Hardware
                    Abstractions
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/apollolabsbin"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--A_2eKtaO--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/832324/61258977-1ddf-4131-832f-adbd812f06ab.png"
                              alt="apollolabsbin profile"
                              className="crayons-avatar__image"
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/apollolabsbin"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              Omar.unwrap();
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button
                                id="story-author-preview-trigger-1409635"
                                aria-controls="story-author-preview-content-1409635"
                                className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost"
                                aria-label="Omar.unwrap(); profile details"
                                aria-expanded="false"
                                aria-haspopup="true"
                                data-initialized="true"
                              >
                                Omar.unwrap();
                              </button>
                              <div
                                id="story-author-preview-content-1409635"
                                className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0"
                                data-repositioning-dropdown="true"
                                data-testid="profile-preview-card"
                              >
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/apollolabsbin" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--A_2eKtaO--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/832324/61258977-1ddf-4131-832f-adbd812f06ab.png"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        Omar.unwrap();
                                      </span>
                                    </a>
                                  </div>
                                  <div className="print-hidden">
                                    <button
                                      className="crayons-btn follow-action-button whitespace-nowrap follow-user w-100"
                                      data-info='{"style":"full","id":832324,"classNameName":"User","name":"Omar.unwrap();"}'
                                      data-fetched="fetched"
                                      aria-label="Follow user: Omar.unwrap();"
                                      aria-pressed="false"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                  <div
                                    className="author-preview-metadata-container"
                                    data-author-id="832324"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/apollolabsbin/stm32f4-embedded-rust-at-the-pac-creating-hardware-abstractions-58gp"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-21T19:16:46Z"
                              title="Wednesday, March 22, 2023 at 1:16:46 AM"
                            >
                              Mar 21
                            </time>
                            <span
                              className="time-ago-indicator-initial-placeholder"
                              data-seconds="1679426206"
                            ></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a
                          href="/apollolabsbin/stm32f4-embedded-rust-at-the-pac-creating-hardware-abstractions-58gp"
                          data-preload-image="https://res.cloudinary.com/practicaldev/image/fetch/s--SghO5x4m--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2g80xj96589aezi732l0.png"
                          id="article-link-1409635"
                        >
                          STM32F4 Embedded Rust at the PAC: Creating Hardware
                          Abstractions
                        </a>
                      </h2>
                      <div className="crayons-story__tags">
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/rust"
                        >
                          <span className="crayons-tag__prefix">#</span>rust
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/tutorial"
                        >
                          <span className="crayons-tag__prefix">#</span>tutorial
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/programming"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          programming
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/embedded"
                        >
                          <span className="crayons-tag__prefix">#</span>embedded
                        </a>
                      </div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/alvaromontoro/css-is-dead-1i4"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            data-reaction-count=""
                            data-reactable-id="1407809"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <div className="multiple_reactions_aggregate">
                                <span
                                  className="multiple_reactions_icons_container"
                                  dir="rtl"
                                >
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                </span>
                                <span className="aggregate_reactions_counter">
                                  56
                                  <span className="hidden s:inline">
                                    &nbsp;reactions
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4#comments"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>
                            18
                            <span className="hidden s:inline">
                              &nbsp;comments
                            </span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            6 min read
                          </small>
                          <button
                            type="button"
                            id="article-save-button-1409635"
                            className="c-btn c-btn--icon-alone bookmark-button"
                            data-reactable-id="1409635"
                            data-article-author-id="832324"
                            aria-label="Save post STM32F4 Embedded Rust at the PAC: Creating Hardware Abstractions to reading list"
                            title="Save post STM32F4 Embedded Rust at the PAC: Creating Hardware Abstractions to reading list"
                            data-save-initialized="true"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crayons-story ">
                  <a
                    href="/balagmadhu/the-price-of-open-source-4bc5"
                    aria-labelledby="article-link-1389280"
                    className="crayons-story__hidden-navigation-link"
                  >
                    The Price of Open Source
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/balagmadhu"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--Lm2uUwkG--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/941014/b1a07aad-ad09-41bc-84b3-b3227eece888.jpg"
                              alt="balagmadhu profile"
                              className="crayons-avatar__image"
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/balagmadhu"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              Bala Madhusoodhanan
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button
                                id="story-author-preview-trigger-1389280"
                                aria-controls="story-author-preview-content-1389280"
                                className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost"
                                aria-label="Bala Madhusoodhanan profile details"
                                aria-expanded="false"
                                aria-haspopup="true"
                                data-initialized="true"
                              >
                                Bala Madhusoodhanan
                              </button>
                              <div
                                id="story-author-preview-content-1389280"
                                className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0"
                                data-repositioning-dropdown="true"
                                data-testid="profile-preview-card"
                              >
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/balagmadhu" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--Lm2uUwkG--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/941014/b1a07aad-ad09-41bc-84b3-b3227eece888.jpg"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        Bala Madhusoodhanan
                                      </span>
                                    </a>
                                  </div>
                                  <div className="print-hidden">
                                    <button
                                      className="crayons-btn follow-action-button whitespace-nowrap follow-user w-100"
                                      data-info='{"style":"full","id":941014,"classNameName":"User","name":"Bala Madhusoodhanan"}'
                                      data-fetched="fetched"
                                      aria-label="Follow user: Bala Madhusoodhanan"
                                      aria-pressed="false"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                  <div
                                    className="author-preview-metadata-container"
                                    data-author-id="941014"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/balagmadhu/the-price-of-open-source-4bc5"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-21T14:46:41Z"
                              title="Tuesday, March 21, 2023 at 8:46:41 PM"
                            >
                              Mar 20
                            </time>
                            <span
                              className="time-ago-indicator-initial-placeholder"
                              data-seconds="1679410001"
                            ></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a
                          href="/balagmadhu/the-price-of-open-source-4bc5"
                          data-preload-image="https://res.cloudinary.com/practicaldev/image/fetch/s--Xsmbcy1Z--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/434wucj20uuvgeoegjqz.png"
                          id="article-link-1389280"
                        >
                          The Price of Open Source
                        </a>
                      </h2>
                      <div className="crayons-story__tags">
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/engineering"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          engineering
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/programming"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          programming
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/architecture"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          architecture
                        </a>
                      </div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/alvaromontoro/css-is-dead-1i4"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            data-reaction-count=""
                            data-reactable-id="1407809"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <div className="multiple_reactions_aggregate">
                                <span
                                  className="multiple_reactions_icons_container"
                                  dir="rtl"
                                >
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                </span>
                                <span className="aggregate_reactions_counter">
                                  13
                                  <span className="hidden s:inline">
                                    &nbsp;reactions
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4#comments"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>

                            <span className="hidden s:inline">Add comment</span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            2 min read
                          </small>
                          <button
                            type="button"
                            id="article-save-button-1389280"
                            className="c-btn c-btn--icon-alone bookmark-button"
                            data-reactable-id="1389280"
                            data-article-author-id="941014"
                            aria-label="Save post The Price of Open Source to reading list"
                            title="Save post The Price of Open Source to reading list"
                            data-save-initialized="true"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crayons-story ">
                  <a
                    href="/olena_kutsenko/first-steps-with-the-apache-kafkar-java-client-library-2ea"
                    aria-labelledby="article-link-1409354"
                    className="crayons-story__hidden-navigation-link"
                  >
                    First steps with the Apache Kafka® Java client library
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/olena_kutsenko"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--OSp7qZAd--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/601720/180ca431-ef24-4039-a996-4978fc435498.png"
                              alt="olena_kutsenko profile"
                              className="crayons-avatar__image"
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/olena_kutsenko"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              Olena Kutsenko
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button
                                id="story-author-preview-trigger-1409354"
                                aria-controls="story-author-preview-content-1409354"
                                className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost"
                                aria-label="Olena Kutsenko profile details"
                                aria-expanded="false"
                                aria-haspopup="true"
                                data-initialized="true"
                              >
                                Olena Kutsenko
                              </button>
                              <div
                                id="story-author-preview-content-1409354"
                                className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0"
                                data-repositioning-dropdown="true"
                                data-testid="profile-preview-card"
                              >
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/olena_kutsenko" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--OSp7qZAd--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/601720/180ca431-ef24-4039-a996-4978fc435498.png"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        Olena Kutsenko
                                      </span>
                                    </a>
                                  </div>
                                  <div className="print-hidden">
                                    <button
                                      className="crayons-btn follow-action-button whitespace-nowrap follow-user w-100"
                                      data-info='{"style":"full","id":601720,"classNameName":"User","name":"Olena Kutsenko"}'
                                      data-fetched="fetched"
                                      aria-label="Follow user: Olena Kutsenko"
                                      aria-pressed="false"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                  <div
                                    className="author-preview-metadata-container"
                                    data-author-id="601720"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/olena_kutsenko/first-steps-with-the-apache-kafkar-java-client-library-2ea"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-21T16:35:39Z"
                              title="Tuesday, March 21, 2023 at 10:35:39 PM"
                            >
                              Mar 18
                            </time>
                            <span
                              className="time-ago-indicator-initial-placeholder"
                              data-seconds="1679416539"
                            ></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a
                          href="/olena_kutsenko/first-steps-with-the-apache-kafkar-java-client-library-2ea"
                          data-preload-image=""
                          id="article-link-1409354"
                        >
                          First steps with the Apache Kafka® Java client library
                        </a>
                      </h2>
                      <div className="crayons-story__tags">
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/apachekafka"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          apachekafka
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/java"
                        >
                          <span className="crayons-tag__prefix">#</span>java
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/data"
                        >
                          <span className="crayons-tag__prefix">#</span>data
                        </a>
                      </div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/alvaromontoro/css-is-dead-1i4"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            data-reaction-count=""
                            data-reactable-id="1407809"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <div className="multiple_reactions_aggregate">
                                <span
                                  className="multiple_reactions_icons_container"
                                  dir="rtl"
                                >
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                </span>
                                <span className="aggregate_reactions_counter">
                                  47
                                  <span className="hidden s:inline">
                                    &nbsp;reactions
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4#comments"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>
                            19
                            <span className="hidden s:inline">
                              &nbsp;comments
                            </span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            14 min read
                          </small>
                          <button
                            type="button"
                            id="article-save-button-1409354"
                            className="c-btn c-btn--icon-alone bookmark-button"
                            data-reactable-id="1409354"
                            data-article-author-id="601720"
                            aria-label="Save post First steps with the Apache Kafka® Java client library to reading list"
                            title="Save post First steps with the Apache Kafka® Java client library to reading list"
                            data-save-initialized="true"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crayons-story ">
                  <a
                    href="/lucasjstifano/flattening-arrays-with-flat-and-flatmap-in-javascript-omo"
                    aria-labelledby="article-link-1409847"
                    className="crayons-story__hidden-navigation-link"
                  >
                    Flattening Arrays with flat() and flatMap() in JavaScript
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/lucasjstifano"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--NbOaJVaI--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1038175/79e4b875-a4d6-41df-b499-ecaaeb09db3e.png"
                              alt="lucasjstifano profile"
                              className="crayons-avatar__image"
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/lucasjstifano"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              Lucas Stifano
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button
                                id="story-author-preview-trigger-1409847"
                                aria-controls="story-author-preview-content-1409847"
                                className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost"
                                aria-label="Lucas Stifano profile details"
                                aria-expanded="false"
                                aria-haspopup="true"
                                data-initialized="true"
                              >
                                Lucas Stifano
                              </button>
                              <div
                                id="story-author-preview-content-1409847"
                                className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0"
                                data-repositioning-dropdown="true"
                                data-testid="profile-preview-card"
                              >
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/lucasjstifano" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--NbOaJVaI--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1038175/79e4b875-a4d6-41df-b499-ecaaeb09db3e.png"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        Lucas Stifano
                                      </span>
                                    </a>
                                  </div>
                                  <div className="print-hidden">
                                    <button
                                      className="crayons-btn follow-action-button whitespace-nowrap follow-user w-100"
                                      data-info='{"style":"full","id":1038175,"classNameName":"User","name":"Lucas Stifano"}'
                                      data-fetched="fetched"
                                      aria-label="Follow user: Lucas Stifano"
                                      aria-pressed="false"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                  <div
                                    className="author-preview-metadata-container"
                                    data-author-id="1038175"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/lucasjstifano/flattening-arrays-with-flat-and-flatmap-in-javascript-omo"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-22T00:25:12Z"
                              title="Wednesday, March 22, 2023 at 6:25:12 AM"
                            >
                              Mar 16
                            </time>
                            <span
                              className="time-ago-indicator-initial-placeholder"
                              data-seconds="1679444712"
                            ></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a
                          href="/lucasjstifano/flattening-arrays-with-flat-and-flatmap-in-javascript-omo"
                          data-preload-image=""
                          id="article-link-1409847"
                        >
                          Flattening Arrays with flat() and flatMap() in
                          JavaScript
                        </a>
                      </h2>
                      <div className="crayons-story__tags">
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/javascript"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          javascript
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/beginners"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          beginners
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/programming"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          programming
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/arrays"
                        >
                          <span className="crayons-tag__prefix">#</span>arrays
                        </a>
                      </div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/alvaromontoro/css-is-dead-1i4"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            data-reaction-count=""
                            data-reactable-id="1407809"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <div className="multiple_reactions_aggregate">
                                <span
                                  className="multiple_reactions_icons_container"
                                  dir="rtl"
                                >
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                </span>
                                <span className="aggregate_reactions_counter">
                                  64
                                  <span className="hidden s:inline">
                                    &nbsp;reactions
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4#comments"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>
                            21
                            <span className="hidden s:inline">
                              &nbsp;comments
                            </span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            5 min read
                          </small>
                          <button
                            type="button"
                            id="article-save-button-1409847"
                            className="c-btn c-btn--icon-alone bookmark-button"
                            data-reactable-id="1409847"
                            data-article-author-id="1038175"
                            aria-label="Save post Flattening Arrays with flat() and flatMap() in JavaScript to reading list"
                            title="Save post Flattening Arrays with flat() and flatMap() in JavaScript to reading list"
                            data-save-initialized="true"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crayons-story ">
                  <a
                    href="/rmmgc/create-text-change-hover-effect-with-javascript-4k5g"
                    aria-labelledby="article-link-1409618"
                    className="crayons-story__hidden-navigation-link"
                  >
                    Alias Essentials: A Step-by-Step Guide to Creating Terminal
                    Shortcuts{" "}
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/rmmgc"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--4bV32lIE--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/166066/c547c6b8-e501-4fa8-ad3c-fdc460cad2ec.png"
                              alt="nialljoemaher profile"
                              className="crayons-avatar__image"
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/rmmgc"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              Niall Maher
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button
                                id="story-author-preview-trigger-1409618"
                                aria-controls="story-author-preview-content-1409618"
                                className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost"
                                aria-label="Ramo Mujagic profile details"
                                aria-expanded="false"
                                aria-haspopup="true"
                                data-initialized="true"
                              >
                                Niall Maher
                              </button>
                              <div
                                id="story-author-preview-content-1409618"
                                className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0"
                                data-repositioning-dropdown="true"
                                data-testid="profile-preview-card"
                              >
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/rmmgc" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--ENEIhJgZ--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/967120/00a88138-68f9-48f7-98e1-e199f24fd512.jpeg"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        Niall Maher
                                      </span>
                                    </a>
                                  </div>
                                  <div className="print-hidden">
                                    <button
                                      className="crayons-btn follow-action-button whitespace-nowrap follow-user w-100"
                                      data-info='{"style":"full","id":967120,"classNameName":"User","name":"Ramo Mujagic"}'
                                      data-fetched="fetched"
                                      aria-label="Follow user: Ramo Mujagic"
                                      aria-pressed="false"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                  <div
                                    className="author-preview-metadata-container"
                                    data-author-id="967120"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/rmmgc/create-text-change-hover-effect-with-javascript-4k5g"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-21T18:25:30Z"
                              title="Wednesday, March 22, 2023 at 12:25:30 AM"
                            >
                              Mar 15
                            </time>
                            <span
                              className="time-ago-indicator-initial-placeholder"
                              data-seconds="1679423130"
                            ></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a
                          href="/rmmgc/create-text-change-hover-effect-with-javascript-4k5g"
                          data-preload-image="https://res.cloudinary.com/practicaldev/image/fetch/s--xfJrOzvz--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4xw8f3j07j85htdi8rkz.png"
                          id="article-link-1409618"
                        >
                          Alias Essentials: A Step-by-Step Guide to Creating
                          Terminal Shortcuts
                        </a>
                      </h2>
                      <div className="crayons-story__tags">
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/javascript"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          javascript
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/webdev"
                        >
                          <span className="crayons-tag__prefix">#</span>webdev
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/beginners"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          beginners
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/tutorial"
                        >
                          <span className="crayons-tag__prefix">#</span>tutorial
                        </a>
                      </div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/alvaromontoro/css-is-dead-1i4"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            data-reaction-count=""
                            data-reactable-id="1407809"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <span
                                className="multiple_reactions_icons_container"
                                dir="rtl"
                              >
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                              </span>
                              <span className="aggregate_reactions_counter">
                                25
                                <span className="hidden s:inline">
                                  reactions
                                </span>
                              </span>
                            </div>
                          </a>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4#comments"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>
                            8
                            <span className="hidden s:inline">
                              &nbsp;comments
                            </span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            4 min read
                          </small>
                          <button
                            type="button"
                            id="article-save-button-1409618"
                            className="c-btn c-btn--icon-alone bookmark-button"
                            data-reactable-id="1409618"
                            data-article-author-id="967120"
                            aria-label="Save post Create text change hover effect with JavaScript to reading list"
                            title="Save post Create text change hover effect with JavaScript to reading list"
                            data-save-initialized="true"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crayons-story ">
                  <a
                    href="/rmmgc/create-text-change-hover-effect-with-javascript-4k5g"
                    aria-labelledby="article-link-1409618"
                    className="crayons-story__hidden-navigation-link"
                  >
                    Understanding the typeof Operator in JavaScript
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/rmmgc"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--GZM7KNP---/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/834412/e22b604d-50b4-4b38-b685-b0495364ec7b.jpeg"
                              alt="makstyle119 profile"
                              className="crayons-avatar__image"
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/rmmgc"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              Mohammmad Moiz Ali
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button
                                id="story-author-preview-trigger-1409618"
                                aria-controls="story-author-preview-content-1409618"
                                className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost"
                                aria-label="Ramo Mujagic profile details"
                                aria-expanded="false"
                                aria-haspopup="true"
                                data-initialized="true"
                              >
                                Mohammad Moiz Ali
                              </button>
                              <div
                                id="story-author-preview-content-1409618"
                                className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0"
                                data-repositioning-dropdown="true"
                                data-testid="profile-preview-card"
                              >
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/rmmgc" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--ENEIhJgZ--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/967120/00a88138-68f9-48f7-98e1-e199f24fd512.jpeg"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        Mohammad Moiz Ali
                                      </span>
                                    </a>
                                  </div>
                                  <div className="print-hidden">
                                    <button
                                      className="crayons-btn follow-action-button whitespace-nowrap follow-user w-100"
                                      data-info='{"style":"full","id":967120,"classNameName":"User","name":"Ramo Mujagic"}'
                                      data-fetched="fetched"
                                      aria-label="Follow user: Ramo Mujagic"
                                      aria-pressed="false"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                  <div
                                    className="author-preview-metadata-container"
                                    data-author-id="967120"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/rmmgc/create-text-change-hover-effect-with-javascript-4k5g"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-21T18:25:30Z"
                              title="Wednesday, March 22, 2023 at 12:25:30 AM"
                            >
                              Mar 13
                            </time>
                            <span
                              className="time-ago-indicator-initial-placeholder"
                              data-seconds="1679423130"
                            ></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a
                          href="/rmmgc/create-text-change-hover-effect-with-javascript-4k5g"
                          data-preload-image="https://res.cloudinary.com/practicaldev/image/fetch/s--xfJrOzvz--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4xw8f3j07j85htdi8rkz.png"
                          id="article-link-1409618"
                        >
                          Understanding the typeof Operator in JavaScript
                        </a>
                      </h2>
                      <div className="crayons-story__tags">
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/javascript"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          javascript
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/tutorial"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          programming
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/beginners"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          beginners
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/arrays"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          makstyle119
                        </a>
                      </div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/alvaromontoro/css-is-dead-1i4"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            data-reaction-count=""
                            data-reactable-id="1407809"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <span
                                className="multiple_reactions_icons_container"
                                dir="rtl"
                              >
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                              </span>
                              <span className="aggregate_reactions_counter">
                                17
                                <span className="hidden s:inline">
                                  reactions
                                </span>
                              </span>
                            </div>
                          </a>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4#comments"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>
                            6
                            <span className="hidden s:inline">
                              &nbsp;comments
                            </span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            2 min read
                          </small>
                          <button
                            type="button"
                            id="article-save-button-1409618"
                            className="c-btn c-btn--icon-alone bookmark-button"
                            data-reactable-id="1409618"
                            data-article-author-id="967120"
                            aria-label="Save post Create text change hover effect with JavaScript to reading list"
                            title="Save post Create text change hover effect with JavaScript to reading list"
                            data-save-initialized="true"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crayons-story ">
                  <a
                    href="/rmmgc/create-text-change-hover-effect-with-javascript-4k5g"
                    aria-labelledby="article-link-1409618"
                    className="crayons-story__hidden-navigation-link"
                  >
                    How to Get Started with Bug Bounty?
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/rmmgc"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              className="radius-full align-middle"
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--O6j_kJ9l--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1058933/c46287ad-0f09-4691-8084-e7f67bd364d5.jpg"
                              alt="Muhammed Batuhan Aydın"
                              width="40"
                              height="40"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/rmmgc"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              Muhammed Batuhan Aydin
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button
                                id="story-author-preview-trigger-1409618"
                                aria-controls="story-author-preview-content-1409618"
                                className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost"
                                aria-label="Ramo Mujagic profile details"
                                aria-expanded="false"
                                aria-haspopup="true"
                                data-initialized="true"
                              >
                                Muhammed Batuhan Aydin
                              </button>
                              <div
                                id="story-author-preview-content-1409618"
                                className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0"
                                data-repositioning-dropdown="true"
                                data-testid="profile-preview-card"
                              >
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/rmmgc" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--ENEIhJgZ--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/967120/00a88138-68f9-48f7-98e1-e199f24fd512.jpeg"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        Muhammed Batuhan Aydin
                                      </span>
                                    </a>
                                  </div>
                                  <div className="print-hidden">
                                    <button
                                      className="crayons-btn follow-action-button whitespace-nowrap follow-user w-100"
                                      data-info='{"style":"full","id":967120,"classNameName":"User","name":"Ramo Mujagic"}'
                                      data-fetched="fetched"
                                      aria-label="Follow user: Ramo Mujagic"
                                      aria-pressed="false"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                  <div
                                    className="author-preview-metadata-container"
                                    data-author-id="967120"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/rmmgc/create-text-change-hover-effect-with-javascript-4k5g"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-21T18:25:30Z"
                              title="Wednesday, March 22, 2023 at 12:25:30 AM"
                            >
                              Mar 12
                            </time>
                            <span
                              className="time-ago-indicator-initial-placeholder"
                              data-seconds="1679423130"
                            ></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a
                          href="/rmmgc/create-text-change-hover-effect-with-javascript-4k5g"
                          data-preload-image="https://res.cloudinary.com/practicaldev/image/fetch/s--xfJrOzvz--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4xw8f3j07j85htdi8rkz.png"
                          id="article-link-1409618"
                        >
                          How to Get Started with Bug Bounty?
                        </a>
                      </h2>
                      <div className="crayons-story__tags">
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/webdev"
                        >
                          <span className="crayons-tag__prefix">#</span>webdev
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/javascript"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          javascript
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/github"
                        >
                          <span className="crayons-tag__prefix">#</span>github
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/discord"
                        >
                          <span className="crayons-tag__prefix">#</span>discord
                        </a>
                      </div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/alvaromontoro/css-is-dead-1i4"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            data-reaction-count=""
                            data-reactable-id="1407809"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <span
                                className="multiple_reactions_icons_container"
                                dir="rtl"
                              >
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                              </span>
                              <span className="aggregate_reactions_counter">
                                38
                                <span className="hidden s:inline">
                                  reactions
                                </span>
                              </span>
                            </div>
                          </a>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4#comments"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>
                            12
                            <span className="hidden s:inline">
                              &nbsp;comments
                            </span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            3 min read
                          </small>
                          <button
                            type="button"
                            id="article-save-button-1409618"
                            className="c-btn c-btn--icon-alone bookmark-button"
                            data-reactable-id="1409618"
                            data-article-author-id="967120"
                            aria-label="Save post Create text change hover effect with JavaScript to reading list"
                            title="Save post Create text change hover effect with JavaScript to reading list"
                            data-save-initialized="true"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crayons-story ">
                  <a
                    href="/rmmgc/create-text-change-hover-effect-with-javascript-4k5g"
                    aria-labelledby="article-link-1409618"
                    className="crayons-story__hidden-navigation-link"
                  >
                    What is artificial intelligence (AI)?
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/rmmgc"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--HUPhFIpS--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/414014/497d9816-6f2d-46b8-b9e9-f4c3c79fda63.png"
                              alt="mahmoudessam profile"
                              className="crayons-avatar__image"
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/rmmgc"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              Mahmoud EL-kariouny
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button
                                id="story-author-preview-trigger-1409618"
                                aria-controls="story-author-preview-content-1409618"
                                className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost"
                                aria-label="Ramo Mujagic profile details"
                                aria-expanded="false"
                                aria-haspopup="true"
                                data-initialized="true"
                              >
                                Mahmoud EL-kariouny
                              </button>
                              <div
                                id="story-author-preview-content-1409618"
                                className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0"
                                data-repositioning-dropdown="true"
                                data-testid="profile-preview-card"
                              >
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/rmmgc" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--ENEIhJgZ--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/967120/00a88138-68f9-48f7-98e1-e199f24fd512.jpeg"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        Mahmoud EL-kariouny
                                      </span>
                                    </a>
                                  </div>
                                  <div className="print-hidden">
                                    <button
                                      className="crayons-btn follow-action-button whitespace-nowrap follow-user w-100"
                                      data-info='{"style":"full","id":967120,"classNameName":"User","name":"Ramo Mujagic"}'
                                      data-fetched="fetched"
                                      aria-label="Follow user: Ramo Mujagic"
                                      aria-pressed="false"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                  <div
                                    className="author-preview-metadata-container"
                                    data-author-id="967120"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/rmmgc/create-text-change-hover-effect-with-javascript-4k5g"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-21T18:25:30Z"
                              title="Wednesday, March 22, 2023 at 12:25:30 AM"
                            >
                              Mar 11
                            </time>
                            <span
                              className="time-ago-indicator-initial-placeholder"
                              data-seconds="1679423130"
                            ></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a
                          href="/rmmgc/create-text-change-hover-effect-with-javascript-4k5g"
                          data-preload-image="https://res.cloudinary.com/practicaldev/image/fetch/s--xfJrOzvz--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4xw8f3j07j85htdi8rkz.png"
                          id="article-link-1409618"
                        >
                          What is artificial intelligence (AI)?
                        </a>
                      </h2>
                      <div className="crayons-story__tags">
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/ai"
                        >
                          <span className="crayons-tag__prefix">#</span>ai
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/githubcopilot"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          githubcopilot
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/documentation"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          documentation
                        </a>
                      </div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/alvaromontoro/css-is-dead-1i4"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            data-reaction-count=""
                            data-reactable-id="1407809"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <span
                                className="multiple_reactions_icons_container"
                                dir="rtl"
                              >
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                              </span>
                              <span className="aggregate_reactions_counter">
                                46
                                <span className="hidden s:inline">
                                  reactions
                                </span>
                              </span>
                            </div>
                          </a>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4#comments"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>
                            17
                            <span className="hidden s:inline">
                              &nbsp;comments
                            </span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            8 min read
                          </small>
                          <button
                            type="button"
                            id="article-save-button-1409618"
                            className="c-btn c-btn--icon-alone bookmark-button"
                            data-reactable-id="1409618"
                            data-article-author-id="967120"
                            aria-label="Save post Create text change hover effect with JavaScript to reading list"
                            title="Save post Create text change hover effect with JavaScript to reading list"
                            data-save-initialized="true"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crayons-story ">
                  <a
                    href="/rmmgc/create-text-change-hover-effect-with-javascript-4k5g"
                    aria-labelledby="article-link-1409618"
                    className="crayons-story__hidden-navigation-link"
                  >
                    Mobile-First and Responsive Design: The Secret to a
                    Successful Website in 2023
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/rmmgc"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--91H0LRYH--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/386490/ba615f45-f793-48a7-9734-b10720afa176.jpg"
                              alt="ahmed_onour profile"
                              className="crayons-avatar__image"
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/rmmgc"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              Ahmed Onour
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button
                                id="story-author-preview-trigger-1409618"
                                aria-controls="story-author-preview-content-1409618"
                                className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost"
                                aria-label="Ramo Mujagic profile details"
                                aria-expanded="false"
                                aria-haspopup="true"
                                data-initialized="true"
                              >
                                Ahmed Onour
                              </button>
                              <div
                                id="story-author-preview-content-1409618"
                                className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0"
                                data-repositioning-dropdown="true"
                                data-testid="profile-preview-card"
                              >
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/rmmgc" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--ENEIhJgZ--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/967120/00a88138-68f9-48f7-98e1-e199f24fd512.jpeg"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        Ahmed Onour
                                      </span>
                                    </a>
                                  </div>
                                  <div className="print-hidden">
                                    <button
                                      className="crayons-btn follow-action-button whitespace-nowrap follow-user w-100"
                                      data-info='{"style":"full","id":967120,"classNameName":"User","name":"Ramo Mujagic"}'
                                      data-fetched="fetched"
                                      aria-label="Follow user: Ramo Mujagic"
                                      aria-pressed="false"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                  <div
                                    className="author-preview-metadata-container"
                                    data-author-id="967120"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/rmmgc/create-text-change-hover-effect-with-javascript-4k5g"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-21T18:25:30Z"
                              title="Wednesday, March 22, 2023 at 12:25:30 AM"
                            >
                              Mar 10
                            </time>
                            <span
                              className="time-ago-indicator-initial-placeholder"
                              data-seconds="1679423130"
                            ></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a
                          href="/rmmgc/create-text-change-hover-effect-with-javascript-4k5g"
                          data-preload-image="https://res.cloudinary.com/practicaldev/image/fetch/s--xfJrOzvz--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4xw8f3j07j85htdi8rkz.png"
                          id="article-link-1409618"
                        >
                          Mobile-First and Responsive Design: The Secret to a
                          Successful Website in 2023
                        </a>
                      </h2>
                      <div className="crayons-story__tags">
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/javascript"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          javascript
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/webdev"
                        >
                          <span className="crayons-tag__prefix">#</span>webdev
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/beginners"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          beginners
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/programming"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          programming
                        </a>
                      </div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/alvaromontoro/css-is-dead-1i4"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            data-reaction-count=""
                            data-reactable-id="1407809"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <span
                                className="multiple_reactions_icons_container"
                                dir="rtl"
                              >
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                              </span>
                              <span className="aggregate_reactions_counter">
                                67
                                <span className="hidden s:inline">
                                  reactions
                                </span>
                              </span>
                            </div>
                          </a>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4#comments"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>
                            9
                            <span className="hidden s:inline">
                              &nbsp;comments
                            </span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            4 min read
                          </small>
                          <button
                            type="button"
                            id="article-save-button-1409618"
                            className="c-btn c-btn--icon-alone bookmark-button"
                            data-reactable-id="1409618"
                            data-article-author-id="967120"
                            aria-label="Save post Create text change hover effect with JavaScript to reading list"
                            title="Save post Create text change hover effect with JavaScript to reading list"
                            data-save-initialized="true"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crayons-story ">
                  <a
                    href="/rmmgc/create-text-change-hover-effect-with-javascript-4k5g"
                    aria-labelledby="article-link-1409618"
                    className="crayons-story__hidden-navigation-link"
                  >
                    How to automatically mark a conversation as "answered" in
                    TalkJS{" "}
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/rmmgc"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              className="radius-full align-middle"
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--yM2nhChk--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/536973/42b9d0f3-7e6a-4b08-9e3a-5a372fa66854.jpg"
                              alt="Emmanuel Aiyenigba"
                              width="40"
                              height="40"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/rmmgc"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              Emmanuel Aiyenigba
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button
                                id="story-author-preview-trigger-1409618"
                                aria-controls="story-author-preview-content-1409618"
                                className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost"
                                aria-label="Ramo Mujagic profile details"
                                aria-expanded="false"
                                aria-haspopup="true"
                                data-initialized="true"
                              >
                                Emmanuel Aiyenigba
                              </button>
                              <div
                                id="story-author-preview-content-1409618"
                                className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0"
                                data-repositioning-dropdown="true"
                                data-testid="profile-preview-card"
                              >
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/rmmgc" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--ENEIhJgZ--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/967120/00a88138-68f9-48f7-98e1-e199f24fd512.jpeg"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        Emmanuel Aiyenigba
                                      </span>
                                    </a>
                                  </div>
                                  <div className="print-hidden">
                                    <button
                                      className="crayons-btn follow-action-button whitespace-nowrap follow-user w-100"
                                      data-info='{"style":"full","id":967120,"classNameName":"User","name":"Ramo Mujagic"}'
                                      data-fetched="fetched"
                                      aria-label="Follow user: Ramo Mujagic"
                                      aria-pressed="false"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                  <div
                                    className="author-preview-metadata-container"
                                    data-author-id="967120"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/rmmgc/create-text-change-hover-effect-with-javascript-4k5g"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-21T18:25:30Z"
                              title="Wednesday, March 22, 2023 at 12:25:30 AM"
                            >
                              Mar 9
                            </time>
                            <span
                              className="time-ago-indicator-initial-placeholder"
                              data-seconds="1679423130"
                            ></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a
                          href="/rmmgc/create-text-change-hover-effect-with-javascript-4k5g"
                          data-preload-image="https://res.cloudinary.com/practicaldev/image/fetch/s--xfJrOzvz--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4xw8f3j07j85htdi8rkz.png"
                          id="article-link-1409618"
                        >
                          How to automatically mark a conversation as "answered"
                          in TalkJS
                        </a>
                      </h2>
                      <div className="crayons-story__tags">
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/webdev"
                        >
                          <span className="crayons-tag__prefix">#</span>webdev
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/javascript"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          javascript
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/github"
                        >
                          <span className="crayons-tag__prefix">#</span>github
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/discord"
                        >
                          <span className="crayons-tag__prefix">#</span>discord
                        </a>
                      </div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/alvaromontoro/css-is-dead-1i4"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            data-reaction-count=""
                            data-reactable-id="1407809"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <span
                                className="multiple_reactions_icons_container"
                                dir="rtl"
                              >
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                              </span>
                              <span className="aggregate_reactions_counter">
                                18
                                <span className="hidden s:inline">
                                  reactions
                                </span>
                              </span>
                            </div>
                          </a>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4#comments"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>
                            7
                            <span className="hidden s:inline">
                              &nbsp;comments
                            </span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            5 min read
                          </small>
                          <button
                            type="button"
                            id="article-save-button-1409618"
                            className="c-btn c-btn--icon-alone bookmark-button"
                            data-reactable-id="1409618"
                            data-article-author-id="967120"
                            aria-label="Save post Create text change hover effect with JavaScript to reading list"
                            title="Save post Create text change hover effect with JavaScript to reading list"
                            data-save-initialized="true"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crayons-story ">
                  <a
                    href="/rmmgc/create-text-change-hover-effect-with-javascript-4k5g"
                    aria-labelledby="article-link-1409618"
                    className="crayons-story__hidden-navigation-link"
                  >
                    Richardson Maturity Model{" "}
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/rmmgc"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--pSXUxDc2--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/580910/b4730f7c-c80f-4aea-b2ff-6979f3867adc.jpeg"
                              alt="ahmedabdulaziz profile"
                              className="crayons-avatar__image"
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/rmmgc"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              Ahmed Ehab Abdul-Aziz
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button
                                id="story-author-preview-trigger-1409618"
                                aria-controls="story-author-preview-content-1409618"
                                className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost"
                                aria-label="Ramo Mujagic profile details"
                                aria-expanded="false"
                                aria-haspopup="true"
                                data-initialized="true"
                              >
                                Ahmed Ehab Abdul-Aziz
                              </button>
                              <div
                                id="story-author-preview-content-1409618"
                                className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0"
                                data-repositioning-dropdown="true"
                                data-testid="profile-preview-card"
                              >
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/rmmgc" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--ENEIhJgZ--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/967120/00a88138-68f9-48f7-98e1-e199f24fd512.jpeg"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        Ahmed Ehab Abdul-Aziz
                                      </span>
                                    </a>
                                  </div>
                                  <div className="print-hidden">
                                    <button
                                      className="crayons-btn follow-action-button whitespace-nowrap follow-user w-100"
                                      data-info='{"style":"full","id":967120,"classNameName":"User","name":"Ramo Mujagic"}'
                                      data-fetched="fetched"
                                      aria-label="Follow user: Ramo Mujagic"
                                      aria-pressed="false"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                  <div
                                    className="author-preview-metadata-container"
                                    data-author-id="967120"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/rmmgc/create-text-change-hover-effect-with-javascript-4k5g"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-21T18:25:30Z"
                              title="Wednesday, March 22, 2023 at 12:25:30 AM"
                            >
                              Mar 8
                            </time>
                            <span
                              className="time-ago-indicator-initial-placeholder"
                              data-seconds="1679423130"
                            ></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a
                          href="/rmmgc/create-text-change-hover-effect-with-javascript-4k5g"
                          data-preload-image="https://res.cloudinary.com/practicaldev/image/fetch/s--xfJrOzvz--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4xw8f3j07j85htdi8rkz.png"
                          id="article-link-1409618"
                        >
                          Richardson Maturity Model
                        </a>
                      </h2>
                      <div className="crayons-story__tags">
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/vscode"
                        >
                          <span className="crayons-tag__prefix">#</span>vscode
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/javascript"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          javascript
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/webdev"
                        >
                          <span className="crayons-tag__prefix">#</span>webdev
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/beginners"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          beginners
                        </a>
                      </div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/alvaromontoro/css-is-dead-1i4"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            data-reaction-count=""
                            data-reactable-id="1407809"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <span
                                className="multiple_reactions_icons_container"
                                dir="rtl"
                              >
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                              </span>
                              <span className="aggregate_reactions_counter">
                                5
                                <span className="hidden s:inline">
                                  reactions
                                </span>
                              </span>
                            </div>
                          </a>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4#comments"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>
                            2
                            <span className="hidden s:inline">
                              &nbsp;comments
                            </span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            3 min read
                          </small>
                          <button
                            type="button"
                            id="article-save-button-1409618"
                            className="c-btn c-btn--icon-alone bookmark-button"
                            data-reactable-id="1409618"
                            data-article-author-id="967120"
                            aria-label="Save post Create text change hover effect with JavaScript to reading list"
                            title="Save post Create text change hover effect with JavaScript to reading list"
                            data-save-initialized="true"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crayons-story ">
                  <a
                    href="/lucasjstifano/flattening-arrays-with-flat-and-flatmap-in-javascript-omo"
                    aria-labelledby="article-link-1409847"
                    className="crayons-story__hidden-navigation-link"
                  >
                    Who am I | Hafiz Muhammad Attaullah
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/lucasjstifano"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--vvYX3zVS--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/548831/c55dba93-e6cb-4eb9-8c57-6ddfa2e4a432.png"
                              alt="attaullahshafiq10 profile"
                              className="crayons-avatar__image"
                              loading="lazy"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/lucasjstifano"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              Hafiz Muhammad Attaullah
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button
                                id="story-author-preview-trigger-1409847"
                                aria-controls="story-author-preview-content-1409847"
                                className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost"
                                aria-label="Lucas Stifano profile details"
                                aria-expanded="false"
                                aria-haspopup="true"
                                data-initialized="true"
                              >
                                Hafiz Muhammad Attaullah
                              </button>
                              <div
                                id="story-author-preview-content-1409847"
                                className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0"
                                data-repositioning-dropdown="true"
                                data-testid="profile-preview-card"
                              >
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/lucasjstifano" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--NbOaJVaI--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1038175/79e4b875-a4d6-41df-b499-ecaaeb09db3e.png"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        Hafiz Muhammad Attaullah
                                      </span>
                                    </a>
                                  </div>
                                  <div className="print-hidden">
                                    <button
                                      className="crayons-btn follow-action-button whitespace-nowrap follow-user w-100"
                                      data-info='{"style":"full","id":1038175,"classNameName":"User","name":"Lucas Stifano"}'
                                      data-fetched="fetched"
                                      aria-label="Follow user: Lucas Stifano"
                                      aria-pressed="false"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                  <div
                                    className="author-preview-metadata-container"
                                    data-author-id="1038175"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/lucasjstifano/flattening-arrays-with-flat-and-flatmap-in-javascript-omo"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-22T00:25:12Z"
                              title="Wednesday, March 22, 2023 at 6:25:12 AM"
                            >
                              Mar 7
                            </time>
                            <span
                              className="time-ago-indicator-initial-placeholder"
                              data-seconds="1679444712"
                            ></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a
                          href="/lucasjstifano/flattening-arrays-with-flat-and-flatmap-in-javascript-omo"
                          data-preload-image=""
                          id="article-link-1409847"
                        >
                          Who am I | Hafiz Muhammad Attaullah
                        </a>
                      </h2>
                      <div className="crayons-story__tags">
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/swift"
                        >
                          <span className="crayons-tag__prefix">#</span>swift
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/ios"
                        >
                          <span className="crayons-tag__prefix">#</span>ios
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/beginners"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          beginners
                        </a>
                      </div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/_"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <div className="multiple_reactions_aggregate">
                                <span
                                  className="multiple_reactions_icons_container"
                                  dir="rtl"
                                >
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                  <span className="crayons_icon_container">
                                    <img
                                      src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                      width="18"
                                      height="18"
                                    />
                                  </span>
                                </span>
                                <span className="aggregate_reactions_counter">
                                  23
                                  <span className="hidden s:inline">
                                    &nbsp;reactions
                                  </span>
                                </span>
                              </div>
                            </div>
                          </a>
                          <a
                            href="/_"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>
                            8
                            <span className="hidden s:inline">
                              &nbsp;comments
                            </span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            4 min read
                          </small>
                          <button
                            type="button"
                            className="c-btn c-btn--icon-alone bookmark-button"
                            aria-label="Save post Flattening Arrays with flat() and flatMap() in JavaScript to reading list"
                            title="Save post Flattening Arrays with flat() and flatMap() in JavaScript to reading list"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="crayons-story ">
                  <a
                    href="/_"
                    aria-labelledby="article-link-1409618"
                    className="crayons-story__hidden-navigation-link"
                  >
                    NavigationExtras in Angular{" "}
                  </a>
                  <div className="crayons-story__body">
                    <div className="crayons-story__top">
                      <div className="crayons-story__meta">
                        <div className="crayons-story__author-pic">
                          <a
                            href="/rmmgc"
                            className="crayons-avatar  crayons-avatar--l  "
                          >
                            <img
                              className="radius-full align-middle"
                              src="https://res.cloudinary.com/practicaldev/image/fetch/s--Ua4HJ-Di--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/259835/748faf9c-5ee6-4952-be39-00ccffc4497f.png"
                              alt="Muhammad Awais"
                              width="40"
                              height="40"
                            />
                          </a>
                        </div>
                        <div>
                          <div>
                            <a
                              href="/rmmgc"
                              className="crayons-story__secondary fw-medium m:hidden"
                            >
                              Muhammad Awais
                            </a>
                            <div className="profile-preview-card relative mb-4 s:mb-0 fw-medium hidden m:inline-block">
                              <button
                                id="story-author-preview-trigger-1409618"
                                aria-controls="story-author-preview-content-1409618"
                                className="profile-preview-card__trigger fs-s p-1 -ml-1 -my-2 crayons-btn crayons-btn--ghost"
                                aria-label="Ramo Mujagic profile details"
                              >
                                Muhammad Awais
                              </button>
                              <div
                                id="story-author-preview-content-1409618"
                                className="profile-preview-card__content crayons-dropdown branded-7 p-4 pt-0"
                                data-repositioning-dropdown="true"
                              >
                                <div className="gap-4 grid">
                                  <div className="-mt-4">
                                    <a href="/rmmgc" className="flex">
                                      <span className="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
                                        <img
                                          src="https://res.cloudinary.com/practicaldev/image/fetch/s--ENEIhJgZ--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/967120/00a88138-68f9-48f7-98e1-e199f24fd512.jpeg"
                                          className="crayons-avatar__image"
                                          alt=""
                                          loading="lazy"
                                        />
                                      </span>
                                      <span className="crayons-link crayons-subtitle-2 mt-5">
                                        Muhammad Awais
                                      </span>
                                    </a>
                                  </div>
                                  <div className="author-preview-metadata-container"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/rmmgc/create-text-change-hover-effect-with-javascript-4k5g"
                            className="crayons-story__tertiary fs-xs"
                          >
                            <time
                              dateTime="2023-03-21T18:25:30Z"
                              title="Wednesday, March 22, 2023 at 12:25:30 AM"
                            >
                              Mar 5
                            </time>
                            <span className="time-ago-indicator-initial-placeholder"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="crayons-story__indention">
                      <h2 className="crayons-story__title">
                        <a href="/_">NavigationExtras in Angular</a>
                      </h2>
                      <div className="crayons-story__tags">
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/javascript"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          javascript
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/tutorial"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          programming
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/beginners"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          beginners
                        </a>
                        <a
                          className="crayons-tag  crayons-tag--monochrome "
                          href="/t/arrays"
                        >
                          <span className="crayons-tag__prefix">#</span>
                          makstyle119
                        </a>
                      </div>
                      <div className="crayons-story__bottom">
                        <div className="crayons-story__details">
                          <a
                            href="/alvaromontoro/css-is-dead-1i4"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <div className="multiple_reactions_aggregate">
                              <span
                                className="multiple_reactions_icons_container"
                                dir="rtl"
                              >
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                                <span className="crayons_icon_container">
                                  <img
                                    src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
                                    width="18"
                                    height="18"
                                  />
                                </span>
                              </span>
                              <span className="aggregate_reactions_counter">
                                12
                                <span className="hidden s:inline">
                                  reactions
                                </span>
                              </span>
                            </div>
                          </a>
                          <a
                            href="/alvaromontoro/css-is-dead-1i4#comments"
                            className="crayons-btn crayons-btn--s crayons-btn--ghost crayons-btn--icon-left flex items-center"
                            aria-label="Add a comment to post - CSS Is Dead!"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              role="img"
                              aria-labelledby="abkhx3u4ql99hmip54a8s6owr5qvre42"
                              className="crayons-icon"
                            >
                              <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                            </svg>
                            3
                            <span className="hidden s:inline">
                              &nbsp;comments
                            </span>
                          </a>
                        </div>
                        <div className="crayons-story__save">
                          <small className="crayons-story__tertiary fs-xs mr-2">
                            2 min read
                          </small>
                          <button
                            type="button"
                            className="c-btn c-btn--icon-alone bookmark-button"
                            aria-label="Save post Create text change hover effect with JavaScript to reading list"
                            title="Save post Create text change hover effect with JavaScript to reading list"
                          >
                            <span className="bm-initial">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                              </svg>
                            </span>
                            <span className="bm-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                aria-hidden="true"
                              >
                                <path d="M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <div className="sidebar-wrapper sidebar-wrapper-right crayons-layout__sidebar-right crayons-layout__content">
              <aside className="side-bar sidebar-additional showing grid gap-4">
                <section className="crayons-card crayons-card--secondary crayons-layout__content">
                  <header className="crayons-card__header">
                    <h3 className="crayons-subtitle-2">Listings</h3>
                    <div className="crayons_card__actions">
                      <a
                        href="/listings"
                        className="crayons-link--branded fw-medium fs-s"
                      >
                        See all
                      </a>
                    </div>
                  </header>
                  <div>
                    <a
                      href="/_"
                      className="crayons-link crayons-link--contentful"
                    >
                      <div>
                        🔥Nervous about your upcoming interviews? Try mock
                        interviews at Meetapro!🔥
                      </div>
                      <div className="crayons-link__secondary">collabs</div>
                    </a>
                    <a
                      href="/_"
                      className="crayons-link crayons-link--contentful"
                    >
                      <div>
                        Gut, a user-friendly Git CLI for Windows, macOS, and
                        Linux.
                      </div>
                      <div className="crayons-link__secondary">products</div>
                    </a>
                    <a
                      href="/_"
                      className="crayons-link crayons-link--contentful"
                    >
                      <div>
                        Master Microsoft Power Platform and Become an In-Demand
                        Developer!
                      </div>
                      <div className="crayons-link__secondary">education</div>
                    </a>
                    <a
                      href="/_"
                      className="crayons-link crayons-link--contentful"
                    >
                      <div>Frontend software engineer</div>
                      <div className="crayons-link__secondary">forhira</div>
                    </a>
                    <a
                      href="/_"
                      className="crayons-link crayons-link--contentful"
                    >
                      <div>
                        Deploy Katalon's Latest On-Premises Solution for
                        Unmatched Testing Capabilities
                      </div>
                      <div className="crayons-link__secondary">products</div>
                    </a>
                    <a
                      href="/_"
                      className="crayons-link crayons-link--branded block align-center p-3 fw-medium fs-s w-100"
                    >
                      Create a Listing
                    </a>
                  </div>
                </section>
                <section className="crayons-card crayons-card--secondary crayons-layout__content">
                  <header className="crayons-card__header">
                    <h3 className="crayons-subtitle-2">
                      <a href="/help" className="crayons-link">
                        #help
                      </a>
                    </h3>
                  </header>
                  <div>
                    <a
                      className="crayons-link crayons-link--contentful"
                      href="/_"
                    >
                      random value
                      <div className="crayons-link__secondary">1 comment</div>
                    </a>
                    <a
                      className="crayons-link crayons-link--contentful"
                      href="/_"
                    >
                      How can i add these animation in react
                      <div className="crayons-link__secondary">
                        <span className="c-indicator c-indicator--warning">
                          New
                        </span>
                      </div>
                    </a>
                    <a
                      className="crayons-link crayons-link--contentful"
                      href="/_"
                    >
                      How can I make a dynamic image overlay like this using PHP
                      or node.js?
                      <div className="crayons-link__secondary">6 comments</div>
                    </a>
                    <a
                      className="crayons-link crayons-link--contentful"
                      href="/_"
                    >
                      Escaping jinja2
                      <div className="crayons-link__secondary">
                        <span className="c-indicator c-indicator--warning">
                          New
                        </span>
                      </div>
                    </a>
                    <a
                      className="crayons-link crayons-link--contentful"
                      href="/_"
                    >
                      Shamanic way to deal with errors
                      <div className="crayons-link__secondary">
                        <span className="c-indicator c-indicator--warning">
                          New
                        </span>
                      </div>
                    </a>
                  </div>
                </section>
                <section className="crayons-card crayons-card--secondary crayons-layout__content">
                  <header className="crayons-card__header">
                    <h3 className="crayons-subtitle-2">
                      <a href="/discuss" className="crayons-link">
                        #discuss
                      </a>
                    </h3>
                  </header>
                  <div>
                    <a
                      className="crayons-link crayons-link--contentful"
                      href="/_"
                    >
                      Meme Monday 🧵
                      <div className="crayons-link__secondary">24 comments</div>
                    </a>
                    <a
                      className="crayons-link crayons-link--contentful"
                      href="/codenewbieteam/how-do-you-stay-motivated-when-facing-programming-problems-580l"
                    >
                      How Do You Stay Motivated When Facing Programming
                      Problems?
                      <div className="crayons-link__secondary">10 comments</div>
                    </a>
                    <a
                      className="crayons-link crayons-link--contentful"
                      href="/_"
                    >
                      A Quick Guide to Meaningful Commits!
                      <div className="crayons-link__secondary">
                        <span className="c-indicator c-indicator--warning">
                          New
                        </span>
                      </div>
                    </a>
                    <a
                      className="crayons-link crayons-link--contentful"
                      href="/_"
                    >
                      How do we get back on track and remove the three beasts of
                      laziness, procrastination and distraction?
                      <div className="crayons-link__secondary">
                        <span className="c-indicator c-indicator--warning">
                          New
                        </span>
                      </div>
                    </a>
                    <a
                      className="crayons-link crayons-link--contentful"
                      href="/_"
                    >
                      03 berufliches Vorwärtskommen: Warum möchtest du beruflich
                      Vorwärtskommen
                      <div className="crayons-link__secondary">
                        <span className="c-indicator c-indicator--warning">
                          New
                        </span>
                      </div>
                    </a>
                  </div>
                </section>
                <section className="crayons-card crayons-card--secondary crayons-layout__content">
                  <header className="crayons-card__header">
                    <h3 className="crayons-subtitle-2">
                      <a href="/explainlikeimfive" className="crayons-link">
                        #explainlikeimfive
                      </a>
                    </h3>
                  </header>
                  <div>
                    <a
                      className="crayons-link crayons-link--contentful"
                      href="/_"
                    >
                      Encryption: Explained to a 5 Year Old 👶🏻
                      <div className="crayons-link__secondary">
                        <span className="c-indicator c-indicator--warning">
                          New
                        </span>
                      </div>
                    </a>
                  </div>
                </section>
                <section className="crayons-card crayons-card--secondary crayons-layout__content">
                  <header className="crayons-card__header">
                    <h3 className="crayons-subtitle-2">
                      <a href="/challenge" className="crayons-link">
                        #challenge
                      </a>
                    </h3>
                  </header>
                  <div>
                    <a
                      className="crayons-link crayons-link--contentful"
                      href="/_"
                    >
                      Learning TypeScript with Exercism
                      <div className="crayons-link__secondary">1 comment</div>
                    </a>
                    <a
                      className="crayons-link crayons-link--contentful"
                      href="/evergrowingdev/7-coding-challenge-websites-to-sharpen-your-skills-1097"
                    >
                      🥷&nbsp;7 Coding Challenge Websites To Sharpen Your Skills
                      <div className="crayons-link__secondary">
                        <span className="c-indicator c-indicator--warning">
                          New
                        </span>
                      </div>
                    </a>
                    <a
                      className="crayons-link crayons-link--contentful"
                      href="/_"
                    >
                      Perl Weekly Challenge #208
                      <div className="crayons-link__secondary">
                        <span className="c-indicator c-indicator--warning">
                          New
                        </span>
                      </div>
                    </a>
                  </div>
                </section>
                <section className="crayons-card crayons-card--secondary crayons-layout__content">
                  <header className="crayons-card__header">
                    <h3 className="crayons-subtitle-2">
                      <a href="/meta" className="crayons-link">
                        #meta
                      </a>
                    </h3>
                  </header>
                  <div>
                    <a
                      className="crayons-link crayons-link--contentful"
                      href="/_"
                    >
                      Join us for #WeCoded 2023!
                      <div className="crayons-link__secondary">74 comments</div>
                    </a>
                    <a
                      className="crayons-link crayons-link--contentful"
                      href="/_"
                    >
                      Final Weekend of the Linode Hackathon on DEV!
                      <div className="crayons-link__secondary">2 comments</div>
                    </a>
                    <a
                      className="crayons-link crayons-link--contentful"
                      href="/_"
                    >
                      Some new features to look forward to on DEV
                      <div className="crayons-link__secondary">24 comments</div>
                    </a>
                    <a
                      className="crayons-link crayons-link--contentful"
                      href="/_"
                    >
                      Linode + DEV Hackathon Reminder ⏰
                      <div className="crayons-link__secondary">3 comments</div>
                    </a>
                    <a
                      className="crayons-link crayons-link--contentful"
                      href="/_"
                    >
                      Announcing the MongoDB Atlas Hackathon 2022 on DEV!
                      <div className="crayons-link__secondary">85 comments</div>
                    </a>
                  </div>
                </section>
                <section className="crayons-card crayons-card--secondary crayons-layout__content">
                  <header className="crayons-card__header">
                    <h3 className="crayons-subtitle-2">
                      <a href="/watercooler" className="crayons-link">
                        #watercooler
                      </a>
                    </h3>
                  </header>
                  <div>
                    <a
                      className="crayons-link crayons-link--contentful"
                      href="/_"
                    >
                      Meme Monday 🧵
                      <div className="crayons-link__secondary">24 comments</div>
                    </a>
                    <a
                      className="crayons-link crayons-link--contentful"
                      href="/_"
                    >
                      Automate the job-finding process
                      <div className="crayons-link__secondary">
                        <span className="c-indicator c-indicator--warning">
                          New
                        </span>
                      </div>
                    </a>
                    <a
                      className="crayons-link crayons-link--contentful"
                      href="/bekahhw/what-are-the-coolest-open-source-projects-that-youve-seen-in-the-last-couple-of-weeks-that-use-ai-i80"
                    >
                      What are the coolest open source projects that you’ve seen
                      in the last couple of weeks that use AI?
                      <div className="crayons-link__secondary">
                        <span className="c-indicator c-indicator--warning">
                          New
                        </span>
                      </div>
                    </a>
                    <a
                      className="crayons-link crayons-link--contentful"
                      href="/_"
                    >
                      [Off-Topic] Living Outside the Algorithm
                      <div className="crayons-link__secondary">
                        <span className="c-indicator c-indicator--warning">
                          New
                        </span>
                      </div>
                    </a>
                    <a
                      className="crayons-link crayons-link--contentful"
                      href="/karlybl/10-remote-tech-companies-hiring-developers-now-march-2023-1ibh"
                    >
                      10 remote tech companies hiring developers now (March
                      2023)
                      <div className="crayons-link__secondary">
                        <span className="c-indicator c-indicator--warning">
                          New
                        </span>
                      </div>
                    </a>
                  </div>
                </section>
                <section className="widget">
                  <header>
                    <h4>trending guides/resources</h4>
                  </header>
                  <div className="widget-body">
                    <div className="widget-link-list">
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        How atomic Git commits dramatically increased my
                        productivity - and will increase yours too
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        Learn How to Setup a CI/CD Pipeline from Scratch
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        Angular &amp; signals. Everything you need to know.
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        I open sourced an AI that creates any UI in seconds.
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        The Evolution of Signals in JavaScript
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        My Favorite Free Courses to Learn DevOps in 2023
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        Kubernetes 101, part I, the fundamentals
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        My Favorite Free Courses to Learn Microservices in Depth
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        7 Free Public APIs you will love as a developer💖
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        7 Libraries You Should Know as a React Developer 💯🔥
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        React vs Signals: 10 Years Later
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        Kubernetes Deployments: Rolling vs Canary vs Blue-Green
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        7 Best Practices for Software Developers
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        My Favorite Courses to Learn Coding and Programming in
                        2023
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        DevOps Career Road Map
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        Which AWS Certification exam should I sit?
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        7 Tools for Faster Development in React
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        Building a forum with React, NodeJS
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        5 tips to become better at CSS
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        7 JavaScript Web APIs to build Futuristic Websites you
                        didn't&nbsp;know🤯
                      </a>
                    </div>
                  </div>
                </section>
                <section className="widget">
                  <header>
                    <h4>recently queried</h4>
                  </header>
                  <div className="widget-body">
                    <div className="widget-link-list">
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        Python \N
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        Software Engineer Interview
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        React Pure Component
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        git stash specific files
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        Free Apis
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        Haiku Checker
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        Install Zsh Ubuntu
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        Python to .exe
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        Vscode Vim
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        Spotify Shuffle Sucks
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        Best Keyboard for Programming
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        React Native Build APK
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        Joi JS
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        Web Components vs React
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        JavaScript Interview Questions and Answers
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        Azure Free Tier
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        Golang Rest Api
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        Icon Library
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        componentDidUpdate Hooks
                      </a>
                      <a
                        className="crayons-link crayons-link--contentful"
                        href="/_"
                      >
                        Flexbox Cheat Sheet
                      </a>
                    </div>
                  </div>
                </section>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
