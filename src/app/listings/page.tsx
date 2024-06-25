const Listings = () => {
  return (
    <div id="main-content">
      <header className="listings-page-header s:pb-0">
        <h1 className="listings-title">Listings</h1>
        <nav className="flex items-center" aria-label="Listings">
          <ul className="list-none flex">
            <li>
              {" "}
              <a
                href="/listings/new"
                className="listings-btn listings-btn--secondary"
              >
                Create
              </a>
            </li>
            <li>
              {" "}
              <a
                href="/listings/dashboard"
                className="listings-btn listings-btn--secondary ml-2"
              >
                Manage
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="listings-container" />
      <div className="listings-layout listings-layout--2-cols" />
      <div className="listings-layout__sidebar-left pb-3">
        <div className="relative pb-2 m:pb-3 px-3 m:px-0">
          <input
            className="listings-textfield"
            type="text"
            placeholder="Search..."
            aria-label="Search listings"
          />
          <section></section>
        </div>
        <div className="listing-filters px-3 s:px-0">
          <nav className="hidden m:block" aria-label="Listings by category">
            <a
              href="/listings"
              className="listings-link listings-link--block listings-link--current"
            >
              All listings
            </a>
            <section>
              <a href="/_" className="listing-link listings-link--block">
                Contributors/Collaborators Wanted
              </a>
              <a href="/_" className="listing-link listings-link--block">
                Conference CFP
              </a>
              <a href="/_" className="listing-link listings-link--block">
                Available for Hire
              </a>
              <a href="/_" className="listing-link listings-link--block">
                Education/Courses
              </a>
              <a href="/_" className="listing-link listings-link--block">
                Job Listings
              </a>
              <a href="/_" className="listing-link listings-link--block">
                Offering Mentorship
              </a>
              <a href="/_" className="listing-link listings-link--block">
                Seeking a Mentor
              </a>
              <a href="/_" className="listing-link listings-link--block">
                Stuff for Sale
              </a>
              <a href="/_" className="listing-link listings-link--block">
                Upcoming Events
              </a>
              <a href="/_" className="listing-link listings-link--block">
                Miscellaneous
              </a>
              <a href="/_" className="listing-link listings-link--block">
                Products/Tools
              </a>
            </section>
          </nav>
          <div className="block m:hidden">
            <select className="listings-select" aria-label="Listings">
              <option value="/listings">All listings</option>
              <option value="/listings/collabs">
                Contributors/Collaborators Wanted
              </option>
              <option value="/listings/cfp">Conference CFP</option>
              <option value="/listings/forhire">Available for Hire</option>
              <option value="/listings/education">Education/Courses</option>
              <option value="/listings/jobs">Job Listings</option>
              <option value="/listings/mentors">Offering Mentorship</option>
              <option value="/listings/mentees">Seeking a Mentor</option>
              <option value="/listings/forsale">Stuff for Sale</option>
              <option value="/listings/events">Upcoming Events</option>
              <option value="/listings/misc">Miscellaneous</option>
              <option value="/listings/products">Products/Tools</option>
            </select>
          </div>
        </div>
      </div>
      <div className="listing-layout__content" />
      <div className="listings-columns">
        <div
          id="button"
          className="single-listing relative listings-card"
          style="grid-row-end: span 25;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link">
                    Devtools app for Sale
                  </a>
                </h2>
                <time
                  dateTime="Thu May 25 2023 03:37:21 GMT+0600 (Bangladesh Standard Time)"
                  title="Thursday, May 25, 2023 at 3:37:21 AM"
                  className="single-listing__date"
                >
                  May 25
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>tools
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>tooling
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>product
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>productivity
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>webdev
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>javascript
                  </a>
                </div>
                <div
                  id="dropdown"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a
                        id="link"
                        href="/_"
                        className="crayons-link crayons-link--block"
                      >
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  I created an application that has many developer related tools
                  in it. Think of it like Swiss Army Knife for Developers. The
                  developers I've tested it on love the tools but I just don't
                  have the time to dedicate to it. There's no reason it
                  shouldn't generate decent revenue.
                </p>
                <p>
                  Try it at <a href="/_">https://www.omkar.cloud/devtools/</a>
                  <br />I am open to serious offers.
                </p>
                <p>
                  Whatsapp: <a href="_">https://www.omkar.cloud/l/whatsapp</a>
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--10ipr91Y--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/574513/00169428-1345-49d4-bfcd-26db432fd3dc.jpg"
                    alt="Chetan"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    Chetan
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      className="crayons-link crayons-link--secondary"
                    >
                      forsale
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-1"
          className="single-listing relative listings-card"
          style="grid-row-end: span 24;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" data-no-instant="true" className="crayons-link">
                    The Typescript Compiler API Book
                  </a>
                </h2>
                <time
                  dateTime="Wed May 24 2023 21:22:59 GMT+0600 (Bangladesh Standard Time)"
                  title="Wednesday, May 24, 2023 at 9:22:59 PM"
                  className="single-listing__date"
                >
                  May 24
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>typescript
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>compiler
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>codegeneration
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>linter
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>books
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>javascript
                  </a>
                </div>
                <div
                  id="dropdown-1"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-1"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-1"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  The Typescript Compiler API book is the all-in-one source for
                  learning about everything related to{" "}
                  <strong>Typescript Code Generation</strong>,{" "}
                  <strong>Abstract Syntax Trees</strong>,{" "}
                  <strong>Custom Linters</strong>, <strong>Diagnostics</strong>,{" "}
                  <strong>Type Checkers</strong> and more!
                  <br />
                  Supercharge your Typescript abilities with{" "}
                  <a href="/_">https://typescriptcompilerapi.com</a>
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--3ukSSJNk--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/7272/a72959f4-811a-43da-8f05-0491517c7357.jpg"
                    alt="Jason"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    Jason
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      data-no-instant="true"
                      className="crayons-link crayons-link--secondary"
                    >
                      education
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-2"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 21;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link">
                    Available for Mentoring
                  </a>
                </h2>
                <time
                  dateTime="Wed May 24 2023 07:11:32 GMT+0600 (Bangladesh Standard Time)"
                  title="Wednesday, May 24, 2023 at 7:11:32 AM"
                  className="single-listing__date"
                >
                  May 24
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>mentalhealth
                  </a>
                </div>
                <div
                  id="dropdown-2"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-2"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-2"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  I am teaching Html, CSS, JavaScript,React and can also help in
                  fixing problems while creating React projects as paid service.
                  Please visit{" "}
                  <a href="https://www.omkar.cloud/l/whatsapp">
                    https://www.omkar.cloud/l/whatsapp
                  </a>{" "}
                  to discuss further.
                  <br />
                  Availability: We can discuss that based on our schedule.
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--10ipr91Y--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/574513/00169428-1345-49d4-bfcd-26db432fd3dc.jpg"
                    alt="Chetan"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    Chetan
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      className="crayons-link crayons-link--secondary"
                    >
                      mentors
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-3"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 22;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link">
                    [Livestream] Mastering Payments &amp; FinTech: Rapyd U
                    Office Hours
                  </a>
                </h2>
                <time
                  dateTime="Wed May 24 2023 02:14:07 GMT+0600 (Bangladesh Standard Time)"
                  title="Wednesday, May 24, 2023 at 2:14:07 AM"
                  className="single-listing__date"
                >
                  May 24
                </time>
                <div className="-ml-1 single-listing__tags"></div>
                <div
                  id="dropdown-3"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-3"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-3"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  Join us on Discord on Thursday 5/25/23 at 11 AM PST | 6:00 PM
                  GMT for an overview of the Rapyd API, Developer Community
                  Resources, and API examples working with a Request Signature
                  in Curl.{" "}
                </p>
                <p>
                  <a href="https://discord.gg/UmZqWJ8w?event=1103182204521156620">
                    https://discord.gg/UmZqWJ8w?event=1103182204521156620
                  </a>
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--uJcTMeqw--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/674639/3a6a2fde-5755-4080-91bd-3441f29b67cb.jpg"
                    alt="Kyle Pollock"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    Kyle Pollock
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/listings/collabs"
                      data-no-instant="true"
                      className="crayons-link crayons-link--secondary"
                    >
                      collabs
                    </a>
                    <a
                      className="crayons-link crayons-link--secondary"
                      href="/_"
                    >
                      ・https://discord.gg/UmZqWJ8w
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-4"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 24;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link">
                    Online Mentored Web/Mobile Development Bootcamp
                  </a>
                </h2>
                <time
                  dateTime="Tue May 23 2023 14:16:25 GMT+0600 (Bangladesh Standard Time)"
                  title="Tuesday, May 23, 2023 at 2:16:25 PM"
                  className="single-listing__date"
                >
                  May 23
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>
                    online
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>
                    bootcamp
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>
                    javascript
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>
                    react
                  </a>
                </div>
                <div
                  id="dropdown-4"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-4"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-4"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <a href="/_"></a>
                9, 13 or 16 weeks to learn online with mentors support.
                <a href="/_"></a>
                From beginner to junior developer level ready to start working!
                <p>
                  HTML, CSS, JavaScript, Reactjs, Node, Express, mongoDB, React
                  Native. Complete two apps and add them to your portfolio.{" "}
                </p>
                <p>
                  We will take you through the curriculum with constant support.{" "}
                </p>
                <p>
                  It's here: <a href="/_">https://bit.ly/30rMAns</a>
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--pQUAeVeR--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/60369/643d7f79-0415-4e80-896b-c591c458348a.jpg"
                    alt="George K."
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    George K.
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      className="crayons-link crayons-link--secondary"
                    >
                      education
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-5"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 27;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" data-no-instant="true" className="crayons-link">
                    Web/Mobile Development Bootcamp in Barcelona
                  </a>
                </h2>
                <time
                  dateTime="Tue May 23 2023 14:13:06 GMT+0600 (Bangladesh Standard Time)"
                  title="Tuesday, May 23, 2023 at 2:13:06 PM"
                  className="single-listing__date"
                >
                  May 23
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>javascript
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="/_">#</span>bootcamp
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>react
                  </a>
                </div>
                <div
                  id="dropdown-5"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-5"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-5"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <a href="/_"></a>
                Become a developer and land a job
                <p>
                  Yes, in 9 weeks you can learn HTML, CSS, JavaScript, React,
                  Node, Express, mongoDB and React Native and be able to start
                  working as a junior developer! At least that's what hundreds
                  of our graduates did!{" "}
                </p>
                <p>
                  9-week in-person full-time bootcamp in Barcelona Code School.
                  You are welcome!{" "}
                </p>
                <p>
                  <a href="/_>https://bit.ly/2APQkEy"></a>
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--pQUAeVeR--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/60369/643d7f79-0415-4e80-896b-c591c458348a.jpg"
                    alt="George K."
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    George K.
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      data-no-instant="true"
                      className="crayons-link crayons-link--secondary"
                    >
                      education
                    </a>
                    <a
                      className="crayons-link crayons-link--secondary"
                      href="/_"
                    >
                      ・Barcelona
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-6"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 26;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link">
                    Streamlit 101: An Intro to Building Web Apps with Just
                    Python - Tuesday May 23, 1pm ET (UTC -4)
                  </a>
                </h2>
                <time
                  dateTime="Tue May 23 2023 06:39:54 GMT+0600 (Bangladesh Standard Time)"
                  title="Tuesday, May 23, 2023 at 6:39:54 AM"
                  className="single-listing__date"
                >
                  May 23
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>python
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>webdev
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>meetup
                  </a>
                </div>
                <div
                  id="dropdown-6"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-6"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-6"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  Streamlit is an open source application framework that allows
                  developers to build web applications in pure Python. In this
                  session, Caroline Frasca will walk you through, step by step,
                  how to build a web application with Python using Streamlit’s
                  open source library.
                  <a href="/_">
                    https://cfe.dev/events/streamlit-101-python-for-web/
                  </a>
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--zsE2FdvI--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/2939/a11acfc4-249c-4194-8172-29d0dad6b181.png"
                    alt="Brian Rinaldi"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    Brian Rinaldi
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      data-no-instant="true"
                      className="crayons-link crayons-link--secondary"
                    >
                      events
                    </a>
                    <a
                      className="crayons-link crayons-link--secondary"
                      href="/_"
                    >
                      ・Online
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-7"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 30;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link">
                    FrontEnd Developer - Mobile &amp; Web Available for hire
                  </a>
                </h2>
                <time
                  dateTime="Tue May 23 2023 02:14:12 GMT+0600 (Bangladesh Standard Time)"
                  title="Tuesday, May 23, 2023 at 2:14:12 AM"
                  className="single-listing__date"
                >
                  May 23
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>javascript
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>react
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>nextjs
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>dart
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>flutter
                  </a>
                </div>
                <div
                  id="dropdown-7"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-7"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-7"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>Hello everyone,</p>
                <p>
                  My expertise lies in Mobile and Web Development.
                  <br />I have extensive experience in HTML, CSS and JavaScript
                  for 6 years, Node.js, React and Next.js for 4 years, Dart and
                  Flutter for 2 years.
                </p>
                <p>
                  I am looking for a remote job where I can work on new/old
                  project.
                </p>
                <p>
                  Contact: <a href="/_">raphaelchaula@gmail.com</a>
                  <br />
                  Github: <a href="/_">https://github.com/raphaelchaula</a>
                  <br />
                  LinkedIn:{" "}
                  <a href="/_">https://www.linkedin.com/in/raphaelchaula/</a>
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--8IID_Mxq--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/144904/16904e2f-69eb-48a1-9616-84c8c363eeec.png"
                    alt="Raphael Chaula"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/raphaelchaula" className="crayons-link fw-medium">
                    Raphael Chaula
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      className="crayons-link crayons-link--secondary"
                    >
                      forhire
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-8"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 25;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" data-no-instant="true" className="crayons-link">
                    EMPLUG STUDENT AMBASSADORS (ESA)
                  </a>
                </h2>
                <time
                  dateTime="Mon May 22 2023 20:49:56 GMT+0600 (Bangladesh Standard Time)"
                  title="Monday, May 22, 2023 at 8:49:56 PM"
                  className="single-listing__date"
                >
                  May 22
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>ambassador
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>internship
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>sponsorship
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>productivity
                  </a>
                </div>
                <div
                  id="dropdown-8"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-8"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-8"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  Emplug, the rapidly expanding social enterprise App Ecosystem
                  in Africa, is seeking dedicated student ambassadors. Join us
                  in spearheading transformative change and empowerment.
                  Represent our esteemed Tech Powerhouse, committed to unbiased
                  job access, financial inclusion, and impactful initiatives.
                  Apply now to become an Emplug Ambassador for your school!
                </p>
                <p>
                  <a href="/_">https://forms.gle/zQzboBKAXx5XLE4p6</a>
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--fBggU9EB--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/720588/6e483f07-231f-43be-8319-329d30765d74.jpg"
                    alt="FOLASAYO SAMUEL "
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    FOLASAYO SAMUEL{" "}
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      className="crayons-link crayons-link--secondary"
                    >
                      collabs
                    </a>
                    <a
                      className="crayons-link crayons-link--secondary"
                      href="/_"
                    >
                      ・Nigeria
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-9"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 22;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link">
                    Four ways GPT can enhance the travel industry
                  </a>
                </h2>
                <time
                  dateTime="Mon May 22 2023 11:23:32 GMT+0600 (Bangladesh Standard Time)"
                  title="Monday, May 22, 2023 at 11:23:32 AM"
                  className="single-listing__date"
                >
                  May 22
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>chatgpt
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>engineering
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>code
                  </a>
                </div>
                <div
                  id="dropdown-9"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-9"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-9"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  The travel industry is an ideal candidate for AI integration,
                  given the vast amount of information involved in planning,
                  booking, and embarking on trips. Travel tech companies possess
                  far more information than the average consumer can manage
                  independently.
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--kVplLJTW--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/247073/e6f9ddee-f9d7-4851-a5c3-49f577231ae2.jpeg"
                    alt="Janetsomehow"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/janetsomehow" className="crayons-link fw-medium">
                    Janetsomehow
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/listings/misc"
                      data-no-instant="true"
                      className="crayons-link crayons-link--secondary"
                    >
                      misc
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-10"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 26;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link">
                    The JavaScript Interview Bible - A Comprehensive Guide with
                    1000+ Essential Questions and Answers!
                  </a>
                </h2>
                <time
                  dateTime="Mon May 22 2023 07:55:13 GMT+0600 (Bangladesh Standard Time)"
                  title="Monday, May 22, 2023 at 7:55:13 AM"
                  className="single-listing__date"
                >
                  May 22
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>javascript
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>books
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>job
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>preparation
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>jobhelp
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>career
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>betterjob
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>interview
                  </a>
                </div>
                <div
                  id="dropdown-10"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-10"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-10"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  <a href="/_">
                    https://nezirzahirovic.gumroad.com/l/javascript-bible
                  </a>
                  <br />
                  As a JavaScript developer, you know how important it is to
                  have a strong understanding of the language and its
                  intricacies. And if you're looking to take your skills to the
                  next level and land your dream job, then you need to ace your
                  JavaScript interviews.
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--bhTnvSYs--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/2512/0118448c-8414-450f-9f56-61a7e2ec580c.jpg"
                    alt="Nezir Zahirovic"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    Nezir Zahirovic
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      className="crayons-link crayons-link--secondary"
                    >
                      education
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-11"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 25;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link">
                    App Development Hackathon: Win More Than US$9,000 in Prizes
                    💻
                  </a>
                </h2>
                <time
                  dateTime="Mon May 22 2023 06:39:12 GMT+0600 (Bangladesh Standard Time)"
                  title="Monday, May 22, 2023 at 6:39:12 AM"
                  className="single-listing__date"
                >
                  May 22
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>hackathon
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>javascript
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>sql
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>webdev
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>programming
                  </a>
                </div>
                <div
                  id="dropdown-11"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-11"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-11"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  It's time to take a break from building side projects on
                  Heroku, GitHub, or your own environment.
                </p>
                <p>
                  Join Five.Co's 2023 Hackathon: build the best app and win more
                  than US$9000 in prizes! Put your JavaScript, TypeScript, and
                  SQL skills to the test. ⌨️{" "}
                </p>
                <p>Submissions close on June 9th, 2023.</p>
                <p>
                  To learn more and sign up, visit{" "}
                  <a href="/_">https://five.co/hackathon</a>
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a
                  href="/fivedotco"
                  className="crayons-avatar crayons-avatar--l mr-2"
                >
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--07cY6fvw--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/6783/7f86be8b-258b-4f9e-81b6-975ded7fabf3.png"
                    alt="Five"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/fivedotco" className="crayons-link fw-medium">
                    Five
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/listings/events"
                      data-no-instant="true"
                      className="crayons-link crayons-link--secondary"
                    >
                      events
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-12"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 22;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" data-no-instant="true" className="crayons-link">
                    SalesforceToNotion
                  </a>
                </h2>
                <time
                  dateTime="Sun May 21 2023 19:30:21 GMT+0600 (Bangladesh Standard Time)"
                  title="Sunday, May 21, 2023 at 7:30:21 PM"
                  className="single-listing__date"
                >
                  May 21
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>notion
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>salesforce
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>api
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>productivity
                  </a>
                </div>
                <div
                  id="dropdown-12"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-12"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-12"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  Chrome extension that integrates data between Salesforce and
                  Notion. With this add-on, you can pull Salesforce data
                  directly into your Notion workspace.
                </p>
                <p>
                  <a href="/_">salesforcetonotion.com</a>
                </p>
                <p>
                  Chrome Web Store Listing:
                  <br />
                  <a href="/_">salesforcetonotion</a>
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--vOCxkNDN--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/172211/362885f2-07a0-473a-bc55-f6d3fe417652.png"
                    alt="Andrej Gajdos"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/andrej_gajdos" className="crayons-link fw-medium">
                    Andrej Gajdos
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      className="crayons-link crayons-link--secondary"
                    >
                      products
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-13"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 24;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" data-no-instant="true" className="crayons-link">
                    Notion Api Connector
                  </a>
                </h2>
                <time
                  dateTime="Sun May 21 2023 19:27:06 GMT+0600 (Bangladesh Standard Time)"
                  title="Sunday, May 21, 2023 at 7:27:06 PM"
                  className="single-listing__date"
                >
                  May 21
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>notion
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>api
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>productivity
                  </a>
                </div>
                <div
                  id="dropdown-13"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-13"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-13"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  Connect and import data from any API to Notion. Connect Notion
                  to any application or API with no-code using the Notion Api
                  Connector browser extension.
                </p>
                <p>
                  Notion Api Connector:
                  <br />
                  <a href="/_">notionapiconnector.com</a>
                </p>
                <p>
                  Chrome Web Store Listing:
                  <br />
                  <a href="/_">notionapiconnector</a>
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--vOCxkNDN--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/172211/362885f2-07a0-473a-bc55-f6d3fe417652.png"
                    alt="Andrej Gajdos"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    Andrej Gajdos
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      className="crayons-link crayons-link--secondary"
                    >
                      products
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-14"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 17;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link">
                    .NET and Web developer, author of xania (javascript reactive
                    ui library),{" "}
                  </a>
                </h2>
                <time
                  dateTime="Sun May 21 2023 06:41:47 GMT+0600 (Bangladesh Standard Time)"
                  title="Sunday, May 21, 2023 at 6:41:47 AM"
                  className="single-listing__date"
                >
                  May 21
                </time>
                <div className="-ml-1 single-listing__tags"></div>
                <div
                  id="dropdown-14"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-14"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-14"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  <a href="/_">ibrahim.bensalah@xania.nl</a>
                  <br />
                  <a href="/_">https://github.com/xania/view</a>
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--e-8Kdg78--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/979052/60a8e7c5-ea25-4ebf-9d20-33543d8397a6.png"
                    alt="Ibrahim ben Salah"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    Ibrahim ben Salah
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      className="crayons-link crayons-link--secondary"
                    >
                      collabs
                    </a>
                    <a
                      className="crayons-link crayons-link--secondary"
                      href="/_"
                    >
                      ・Amstelveen
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-15"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 19;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link">
                    C++ Software Developer
                  </a>
                </h2>
                <time
                  dateTime="Sun May 21 2023 03:31:27 GMT+0600 (Bangladesh Standard Time)"
                  title="Sunday, May 21, 2023 at 3:31:27 AM"
                  className="single-listing__date"
                >
                  May 21
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>c
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>cpp
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>career
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>remote
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>senior
                  </a>
                </div>
                <div
                  id="dropdown-15"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-15"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-15"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  Hi, my name is Kyrylo Cherneha, I am from Ukraine, currently
                  live in Barcelona. Looking for interesting project, or can
                  help with mentorship.
                </p>
                <p>
                  Linkedin:{" "}
                  <a href="https://www.linkedin.com/in/kyrylo-cherneha">
                    https://www.linkedin.com/in/kyrylo-cherneha
                  </a>
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--MKf2zxK0--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1058099/1b4a06ee-242e-46f9-8766-e0bee2cb3655.png"
                    alt="kcherneha"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    kcherneha
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      className="crayons-link crayons-link--secondary"
                    >
                      forhire
                    </a>
                    <a
                      className="crayons-link crayons-link--secondary"
                      href="/_"
                    >
                      ・Barcelona
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-16"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 18;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link">
                    Toasts in vanilla 😋-Toaster Ui
                  </a>
                </h2>
                <time
                  dateTime="Sat May 20 2023 16:36:52 GMT+0600 (Bangladesh Standard Time)"
                  title="Saturday, May 20, 2023 at 4:36:52 PM"
                  className="single-listing__date"
                >
                  May 20
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>javascript
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>opensource
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>
                    contributorswanted
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>webdev
                  </a>
                </div>
                <div
                  id="dropdown-16"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-16"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-16"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  You can find the Toaster-UI repository on GitHub:{" "}
                  <a href="/_">Toaster-UI GitHub Repository</a>
                </p>
                <p>
                  <a href="/_">Documentation</a>
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--kL3tzjfI--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/992067/c151996c-2878-4d29-9827-eac449ced439.jpeg"
                    alt="Murtaza Joo"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    Murtaza Joo
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      className="crayons-link crayons-link--secondary"
                    >
                      collabs
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-17"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 21;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link">
                    The Plumbing and Electrical Doctor
                  </a>
                </h2>
                <time
                  dateTime="Sat May 20 2023 08:40:34 GMT+0600 (Bangladesh Standard Time)"
                  title="Saturday, May 20, 2023 at 8:40:34 AM"
                  className="single-listing__date"
                >
                  May 20
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>plumber
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>electrician
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>blockedrains
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>hotwatersystem
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>gasifitting
                  </a>
                </div>
                <div
                  id="dropdown-17"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-17"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-17"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  <a href="/_">The Plumbing and Electrical Doctor</a> is your
                  one-stop shop for all your plumbing and electrical needs. Our
                  experienced, licensed professionals are here to help you with
                  whatever you need. We offer various services, from plumbing
                  repair to electrical wiring, so you can always rely on us for
                  the best quality workmanship.
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--9HLI0fRG--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/695940/333b1689-1ae8-4b89-b079-471d5a3a6636.png"
                    alt="The Plumbing &amp; Electrical Doctor"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    The Plumbing &amp; Electrical Doctor
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      data-no-instant="true"
                      className="crayons-link crayons-link--secondary"
                    >
                      forhire
                    </a>
                    <a
                      className="crayons-link crayons-link--secondary"
                      href="/listings/?q=Gateshead, Australia"
                    >
                      ・Gateshead, Australia
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-18"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 19;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link">
                    Chainpage challenge
                  </a>
                </h2>
                <time
                  dateTime="Fri May 19 2023 22:58:10 GMT+0600 (Bangladesh Standard Time)"
                  title="Friday, May 19, 2023 at 10:58:10 PM"
                  className="single-listing__date"
                >
                  May 19
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>chainpages
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>solidity
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>blockchain
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>webpage
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>webpages
                  </a>
                </div>
                <div
                  id="dropdown-18"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-18"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-18"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  A while back, I have created a technology known as chainpages.
                  See:
                  <br />
                  <a href="/_">
                    https://dev.to/kjsisco/let-me-make-this-clear-48nk
                  </a>
                  <br />
                  Create your own chainpage using this technology.
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--6rxIdzKI--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/989747/e18c27d4-4ba3-4a47-ad6b-25d3fdaf5990.png"
                    alt="kjsisco"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    kjsisco
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      className="crayons-link crayons-link--secondary"
                    >
                      misc
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-19"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 21;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link">
                    Create websites with Generative AI and export to Code
                  </a>
                </h2>
                <time
                  dateTime="Fri May 19 2023 22:17:31 GMT+0600 (Bangladesh Standard Time)"
                  title="Friday, May 19, 2023 at 10:17:31 PM"
                  className="single-listing__date"
                >
                  May 19
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>ai
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>productivity
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>saas
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>html
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>react
                  </a>
                </div>
                <div
                  id="dropdown-19"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-19"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-19"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  I built a no-code platform that builds a complete website from
                  a prompt using AI. You can give it a try at{" "}
                  <a href="/_">codedesign.ai</a>. You can either host it or
                  export the code. Right now, HTML is only supported. React
                  &amp; Angular in the future.
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--uZmWvkpr--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/125908/30511f60-a000-454e-9107-cae06dd3a142.jpg"
                    alt="Manjunath"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    Manjunath
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      className="crayons-link crayons-link--secondary"
                    >
                      products
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-20"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 22;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link">
                    Calling Enterprise Developers 🚀
                  </a>
                </h2>
                <time
                  dateTime="Fri May 19 2023 21:03:33 GMT+0600 (Bangladesh Standard Time)"
                  title="Friday, May 19, 2023 at 9:03:33 PM"
                  className="single-listing__date"
                >
                  May 19
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>developer
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>java
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>enterprise
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>python
                  </a>
                </div>
                <div
                  id="dropdown-20"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-20"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-20"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  Participate in our new short survey designed for Enterprise
                  Developers, Engineers, and IT professionals, which aims to
                  assess their knowledge of tools and resources. By taking part,
                  you will have an opportunity to win Apple AirPods, Gift Cards
                  and subscriptions!
                  <br />
                  Enter <a href="/_">here</a>
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--100Ltafl--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/1530/abcad3a7-07f7-41ba-9541-a2fcaf40ccc0.png"
                    alt="Developer Nation"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    Developer Nation
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      className="crayons-link crayons-link--secondary"
                    >
                      collabs
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-21"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 26;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link">
                    My first book on Amazon! The Ruby On Rails Interview Bible
                    2023
                  </a>
                </h2>
                <time
                  dateTime="Fri May 19 2023 09:29:35 GMT+0600 (Bangladesh Standard Time)"
                  title="Friday, May 19, 2023 at 9:29:35 AM"
                  className="single-listing__date"
                >
                  May 19
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>books
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>amazon
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>publishing
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>ruby
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>interviewing
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>jobhelp
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>juniordev
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>job
                  </a>
                </div>
                <div
                  id="dropdown-21"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-21"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-21"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  Attention, <a href="_">Ruby on Rails</a> enthusiasts and
                  aspiring developers! We are thrilled to announce the release
                  of an invaluable resource designed to catapult your
                  programming career to new heights. Introducing "
                  <a href="https://www.amazon.com/dp/B0C5MG4ZS1">
                    The Ruby on Rails Interview Bible 2023
                  </a>
                  " - a comprehensive guide that equips you with the knowledge,
                  strategies...
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--bhTnvSYs--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/2512/0118448c-8414-450f-9f56-61a7e2ec580c.jpg"
                    alt="Nezir Zahirovic"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    Nezir Zahirovic
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/listings/education"
                      data-no-instant="true"
                      className="crayons-link crayons-link--secondary"
                    >
                      education
                    </a>
                    <a
                      data-testid="single-listing-location"
                      className="crayons-link crayons-link--secondary"
                      href="/listings/?q=Amazon"
                    >
                      ・Amazon
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-22"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 25;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link">
                    Globalping - Run free network tests from any location in the
                    world
                  </a>
                </h2>
                <time
                  dateTime="Thu May 18 2023 22:34:41 GMT+0600 (Bangladesh Standard Time)"
                  title="Thursday, May 18, 2023 at 10:34:41 PM"
                  className="single-listing__date"
                >
                  May 18
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>devops
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>network
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>networking
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>monitoring
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>performance
                  </a>
                </div>
                <div
                  id="dropdown-22"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-22"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-22"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  <a href="/_">Globalping</a> is a platform that allows anyone
                  to run networking commands such as ping, traceroute, dig and
                  mtr on probes distributed all around the world.{" "}
                </p>
                <p>
                  Test your website, compare CDN providers and more. Ping
                  globally, traceroute from any region, run DNS checks from any
                  location and webtest any site from any hosting provider.
                </p>
                <p>Free and open source!</p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--Bx_K-NjX--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/7016/dfda0963-8e0a-4f80-a78b-2ad71a3d32ab.png"
                    alt="Globalping"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    Globalping
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      className="crayons-link crayons-link--secondary"
                    >
                      products
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-23"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 25;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link">
                    Connected APM and infrastructure monitoring at up to 1/3rd
                    the cost of Datadog
                  </a>
                </h2>
                <time
                  dateTime="Thu May 18 2023 21:16:33 GMT+0600 (Bangladesh Standard Time)"
                  title="Thursday, May 18, 2023 at 9:16:33 PM"
                  className="single-listing__date"
                >
                  May 18
                </time>
                <div className="-ml-1 single-listing__tags"></div>
                <div
                  id="dropdown-23"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-23"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-23"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  New Relic now enables engineers to correlate their performance
                  across infrastructure, APM, and the rest of their stack, at up
                  to 1/3rd the cost of Datadog.{" "}
                  <a href="/_">
                    https://newrelic.com/blog/nerdlog/connected-infrastructure-and-apm?utm_source=devto&amp;utm_medium=community&amp;utm_campaign=amer-fy-24-q1-apm_1/3rdthecostofdatadog
                  </a>
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--c-q2mXQ7--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/2621/9f60ba91-e078-4981-a2a3-9848e4e4fafa.png"
                    alt="New Relic"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    New Relic
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      className="crayons-link crayons-link--secondary"
                    >
                      misc
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-24"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 24;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link">
                    Building Chatbots: ChatGPT API, HTML, CSS AND JS
                  </a>
                </h2>
                <time
                  dateTime="Thu May 18 2023 10:25:36 GMT+0600 (Bangladesh Standard Time)"
                  title="Thursday, May 18, 2023 at 10:25:36 AM"
                  className="single-listing__date"
                >
                  May 18
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>javascript
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>webdev
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>programming
                  </a>
                  <a href="_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>tutorial
                  </a>
                </div>
                <div
                  id="dropdown-24"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-24"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-24"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  Looking to build a chatbot? Look no further than ChatGPT API!
                  With HTML, CSS, and JS integration, creating a custom chatbot
                  has never been easier. Let us help you streamline your
                  customer service and increase engagement today!
                  <br />
                  <a href="/_">
                    https://www.udemy.com/course/building-chatbots-chatgpt-api-html-css-and-js/?couponCode=MAY2023
                  </a>
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--OFgLIqll--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/972482/f8b4e662-dc9a-4662-905d-591c57abe58e.jpg"
                    alt="Christopher Glikpo"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    Christopher Glikpo
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      data-no-instant="true"
                      className="crayons-link crayons-link--secondary"
                    >
                      education
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-25"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 17;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" data-no-instant="true" className="crayons-link">
                    Front-end Developer{" "}
                  </a>
                </h2>
                <time
                  dateTime="Thu May 18 2023 07:07:28 GMT+0600 (Bangladesh Standard Time)"
                  title="Thursday, May 18, 2023 at 7:07:28 AM"
                  className="single-listing__date"
                >
                  May 18
                </time>
                <div className="-ml-1 single-listing__tags"></div>
                <div
                  id="dropdown-25"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-25"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-25"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  Front-End Developer available for hire on Remote Basis At any
                  cost.
                </p>
                <p>My goal is nothing more than to gain experience.</p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--RO-D9rwX--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/863939/e9699539-e4ee-4193-9a1e-77dfc9c30044.jpg"
                    alt="Elaammari Abderrahman"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    Elaammari Abderrahman
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      data-no-instant="true"
                      className="crayons-link crayons-link--secondary"
                    >
                      collabs
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-26"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 16;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" data-no-instant="true" className="crayons-link">
                    Ninja Kubernetes Developer
                  </a>
                </h2>
                <time
                  dateTime="Thu May 18 2023 06:57:50 GMT+0600 (Bangladesh Standard Time)"
                  title="Thursday, May 18, 2023 at 6:57:50 AM"
                  className="single-listing__date"
                >
                  May 18
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>kubernetes
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>devops
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>docker
                  </a>
                </div>
                <div
                  id="dropdown-26"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-26"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-26"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  Ninja Kubernetes Developer available for hire on a freelance
                  basis. Visit{" "}
                  <a href="/_">https://www.omkar.cloud/l/whatsapp</a> to hire.
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--10ipr91Y--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/574513/00169428-1345-49d4-bfcd-26db432fd3dc.jpg"
                    alt="Chetan"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    Chetan
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      className="crayons-link crayons-link--secondary"
                    >
                      forhire
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-27"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 25;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link">
                    [Technical Webinar] Learn how to build an Interactive Live
                    Streaming Experience
                  </a>
                </h2>
                <time
                  dateTime="Thu May 18 2023 02:49:11 GMT+0600 (Bangladesh Standard Time)"
                  title="Thursday, May 18, 2023 at 2:49:11 AM"
                  className="single-listing__date"
                >
                  May 18
                </time>
                <div className="-ml-1 single-listing__tags"></div>
                <div
                  id="dropdown-27"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-27"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-27"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  <strong>
                    Join our virtual webinar happening Wednesday, Jun 7th at 9
                    am PT / 12 pm ET
                  </strong>{" "}
                  to begin building a highly stylized and interactive video
                  experience for your product.{" "}
                </p>
                <p>
                  This 60-minute webinar is designed to put developers on the
                  fast track to building a powerful live streaming UI.
                </p>
                <p>
                  <a href="/_">Click here to RSVP</a>
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--zLkQ-2hT--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/362553/37c74277-36d5-4c93-8e03-da51601c4d29.jpeg"
                    alt="Tasha"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    Tasha
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      className="crayons-link crayons-link--secondary"
                    >
                      collabs
                    </a>
                    <a
                      className="crayons-link crayons-link--secondary"
                      href="/listings/?q=Online"
                    >
                      ・Online
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-28"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 27;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link">
                    Vrite - open-source headless CMS for technical content
                  </a>
                </h2>
                <time
                  dateTime="Thu May 18 2023 00:23:45 GMT+0600 (Bangladesh Standard Time)"
                  title="Thursday, May 18, 2023 at 12:23:45 AM"
                  className="single-listing__date"
                >
                  May 18
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>typescript
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>solidjs
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>javascript
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>saas
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>writing
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>opensource
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>webdev
                  </a>
                </div>
                <div
                  id="dropdown-28"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-28"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-28"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  I've just launched the <em>Public Beta</em> of{" "}
                  <strong>Vrite</strong> - a CMS focused on technical content -
                  like programming blog posts here on DEV, documentation, and
                  others. It includes features like built-in Kanban, code
                  editor, Prettier integration, real-time collaboration, and
                  more! Now <strong>open-source</strong>! 🔥
                </p>
                <p>
                  Star on GitHub 🌟:{" "}
                  <a href="https://github.com/vriteio/vrite">
                    https://github.com/vriteio/vrite
                  </a>
                  <br />
                  Try it out 🚀:{" "}
                  <a href="https://app.vrite.io/">https://app.vrite.io/</a>
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--FiUljCOB--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/116507/5e36c5cb-4d47-481e-970a-0e1b996179ef.png"
                    alt="Arek Nawo"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    Arek Nawo
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      data-no-instant="true"
                      className="crayons-link crayons-link--secondary"
                    >
                      products
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-29"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 31;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link">
                    EuroPython 2023 (17-23 July) in Prague
                  </a>
                </h2>
                <time
                  dateTime="Wed May 17 2023 21:48:45 GMT+0600 (Bangladesh Standard Time)"
                  title="Wednesday, May 17, 2023 at 9:48:45 PM"
                  className="single-listing__date"
                >
                  May 17
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>europython
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>python
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>conference
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>sprints
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>workshops
                  </a>
                </div>
                <div
                  id="dropdown-29"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-29"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-29"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  <strong>EuroPython 2023</strong> will be held on 17-23 July,
                  both in person and virtually. In person, it will be held at
                  The Prague Congress Centre, Czechia.{" "}
                </p>
                <p>
                  You can find the list of talks via{" "}
                  <a href="https://ep2023.europython.eu/sessions">
                    https://ep2023.europython.eu/sessions
                  </a>
                </p>
                <p>Important dates:-</p>
                <ul>
                  <li>FinAid 2nd Round Applications open till 21 May</li>
                  <li>First-Time Speaker Workshop - Thursday 1 June 2023</li>
                </ul>
                <p>
                  🎟 Get yours now:{" "}
                  <a href="/_">https://ep2023.europython.eu/tickets</a> 🐍
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--t4ztq6Xu--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/2525/d477aa66-b1d8-4f2f-9e16-effb9a50ea97.png"
                    alt="EuroPython"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    EuroPython
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      data-no-instant="true"
                      className="crayons-link crayons-link--secondary"
                    >
                      events
                    </a>
                    <a
                      data-testid="single-listing-location"
                      className="crayons-link crayons-link--secondary"
                      href="/_"
                    >
                      ・Prague
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-30"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 21;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link">
                    New Free Open Source web development framework
                  </a>
                </h2>
                <time
                  dateTime="Tue May 16 2023 22:23:26 GMT+0600 (Bangladesh Standard Time)"
                  title="Tuesday, May 16, 2023 at 10:23:26 PM"
                  className="single-listing__date"
                >
                  May 16
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>webdev
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>programming
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>opensource
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>beginners
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>productivity
                  </a>
                </div>
                <div
                  id="dropdown-30"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-30"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-30"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  Program like it's 1989 with ergonomics of 2023. Performance
                  with simplicity for web and database applications, middleware,
                  anything. <br />
                  <a href="https://vely.dev">https://vely.dev</a>{" "}
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--M4PTn1mi--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1065295/aab0643d-6271-451e-96e0-b5524feccbb9.png"
                    alt="Vely"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    Vely
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      data-no-instant="true"
                      className="crayons-link crayons-link--secondary"
                    >
                      products
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-31"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 25;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link">
                    No-code in the front, Python in the back - Streamsync
                  </a>
                </h2>
                <time
                  dateTime="Tue May 16 2023 18:32:57 GMT+0600 (Bangladesh Standard Time)"
                  title="Tuesday, May 16, 2023 at 6:32:57 PM"
                  className="single-listing__date"
                >
                  May 16
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>python
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>vue
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>datascience
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>lowcode
                  </a>
                </div>
                <div
                  id="dropdown-31"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-31"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-31"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  <a href="/_">Demo app</a>
                  <br />
                  <a href="/_">Github repo</a>
                </p>
                <p>
                  An open-source framework for creating web-based data apps,
                  using a UI editor and Python for event handlers. Ideal for
                  complex, customizable, multipage web layouts for Python apps
                  or dashboards, with no JS/CSS/HTML involved.
                </p>
                <p>It's an alternative to Plotly Dash, Anvil and Streamlit.</p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--2Oyhrw_m--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1079052/02759f20-9d57-413e-976a-5927eea433a5.jpeg"
                    alt="Ramiro Medina"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    Ramiro Medina
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      data-no-instant="true"
                      className="crayons-link crayons-link--secondary"
                    >
                      products
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-32"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 28;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link">
                    Chingu.io - Turn what you learn into experience to get Dev
                    jobs
                  </a>
                </h2>
                <time
                  dateTime="Tue May 16 2023 18:17:57 GMT+0600 (Bangladesh Standard Time)"
                  title="Tuesday, May 16, 2023 at 6:17:57 PM"
                  className="single-listing__date"
                >
                  May 16
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>education
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>webdev
                  </a>
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>collaboration
                  </a>
                </div>
                <div
                  id="dropdown-32"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-32"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-32"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  Are you making Dev career goals &amp; really committing &amp;
                  investing in them❓❓❓
                  <br />
                  <br />
                  Get out of "Tutorial Purgatory" &amp; join our remote team
                  projects &amp; supportive community to turn what you learn
                  into the experience needed to get a Dev job! The experience
                  employers are looking for!
                  <br />
                  <br />
                  See how @ <a href="/_">https://chingu.io</a> - It's FREE!
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--aImpBPn2--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/462/1eba8151-95e3-4df8-b2a0-6d6b5a4c9bdd.png"
                    alt="Chingu "
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    Chingu{" "}
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      data-no-instant="true"
                      className="crayons-link crayons-link--secondary"
                    >
                      collabs
                    </a>
                    <a
                      className="crayons-link crayons-link--secondary"
                      href="/_"
                    >
                      ・https://chingu.io
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-33"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 27;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link">
                    Experienced product mentors 🤜 🤛 devs making their side
                    projects{" "}
                  </a>
                </h2>
                <time
                  dateTime="Tue May 16 2023 14:32:09 GMT+0600 (Bangladesh Standard Time)"
                  title="Tuesday, May 16, 2023 at 2:32:09 PM"
                  className="single-listing__date"
                >
                  May 16
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag">
                    <span className="crayons-tag__prefix">#</span>startup
                  </a>
                </div>
                <div
                  id="dropdown-33"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-33"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-33"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  Hi folks!
                  <br />
                  My team at text.com is organizing an accelerator program (
                  <a href="https://incubator.text.com/text-accelerated">
                    https://incubator.text.com/text-accelerated
                  </a>
                  ). We're looking for teams or individuals working on their
                  side projects/start-ups. We give you 1/1 support of people
                  experienced in product companies and 8 product-related
                  workshops. Text Accelerated program is free of charge and open
                  to start-ups on any stage of their journey.{" "}
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--9g0JCJrm--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/2659/6c3aebbe-3047-4674-89c3-1ef49c9be224.png"
                    alt="LiveChat"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    LiveChat
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      data-no-instant="true"
                      className="crayons-link crayons-link--secondary"
                    >
                      mentors
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-34"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 27;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link" data-listing-id="6203">
                    How We Overcame Persistent HTTP Connection Issues When
                    Migrating Traffic
                  </a>
                </h2>
                <time
                  dateTime="Tue May 16 2023 09:51:14 GMT+0600 (Bangladesh Standard Time)"
                  title="Tuesday, May 16, 2023 at 9:51:14 AM"
                  className="single-listing__date"
                >
                  May 16
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag" data-no-instant="true">
                    <span className="crayons-tag__prefix">#</span>engineering
                  </a>
                  <a href="/_" className="crayons-tag" data-no-instant="true">
                    <span className="crayons-tag__prefix">#</span>database
                  </a>
                  <a href="/_" className="crayons-tag" data-no-instant="true">
                    <span className="crayons-tag__prefix">#</span>datacentre
                  </a>
                  <a href="/_" className="crayons-tag" data-no-instant="true">
                    <span className="crayons-tag__prefix">#</span>coding
                  </a>
                </div>
                <div
                  id="dropdown-34"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-34"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-34"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  Persistent HTTP connections can present significant challenges
                  in achieving this. These connections persist even when the
                  server is down or unavailable, leading to suboptimal user
                  experiences and increased downtime risks.{" "}
                  <a href="https://medium.com/agoda-engineering/breaking-the-connection-how-we-overcame-persistent-http-connection-issues-when-migrating-traffic-c6634ed839ae">
                    https://medium.com/agoda-engineering/breaking-the-connection-how-we-overcame-persistent-http-connection-issues-when-migrating-traffic-c6634ed839ae
                  </a>
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--kVplLJTW--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/247073/e6f9ddee-f9d7-4851-a5c3-49f577231ae2.jpeg"
                    alt="Janetsomehow"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    Janetsomehow
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      data-no-instant="true"
                      className="crayons-link crayons-link--secondary"
                    >
                      misc
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="button-35"
          className="single-listing relative crayons-card"
          style="grid-row-end: span 24;"
        >
          <div className="listing-content p-4">
            <div className="relative">
              <div className="mb-3">
                <h2 className="fs-2xl fw-bold lh-tight mb-1 pr-8">
                  <a href="/_" className="crayons-link">
                    Nerd Level Tech
                  </a>
                </h2>
                <time
                  dateTime="Sat May 13 2023 20:14:47 GMT+0600 (Bangladesh Standard Time)"
                  title="Saturday, May 13, 2023 at 8:14:47 PM"
                  className="single-listing__date"
                >
                  May 13
                </time>
                <div className="-ml-1 single-listing__tags">
                  <a href="/_" className="crayons-tag" data-no-instant="true">
                    <span className="crayons-tag__prefix">#</span>tutorial
                  </a>
                  <a href="/_" className="crayons-tag" data-no-instant="true">
                    <span className="crayons-tag__prefix">#</span>beginners
                  </a>
                  <a href="/_" className="crayons-tag" data-no-instant="true">
                    <span className="crayons-tag__prefix">#</span>javascript
                  </a>
                  <a href="/_" className="crayons-tag" data-no-instant="true">
                    <span className="crayons-tag__prefix">#</span>python
                  </a>
                  <a href="/_" className="crayons-tag" data-no-instant="true">
                    <span className="crayons-tag__prefix">#</span>devops
                  </a>
                  <a href="/_" className="crayons-tag" data-no-instant="true">
                    <span className="crayons-tag__prefix">#</span>developer
                  </a>
                  <a href="/_" className="crayons-tag" data-no-instant="true">
                    <span className="crayons-tag__prefix">#</span>webdev
                  </a>
                  <a href="/_" className="crayons-tag" data-no-instant="true">
                    <span className="crayons-tag__prefix">#</span>api
                  </a>
                </div>
                <div
                  id="dropdown-35"
                  className="single-listing__dropdown absolute right-0 top-0"
                >
                  <button
                    id="click-35"
                    className="crayons-btn crayons-btn--ghost crayons-btn--icon"
                    type="button"
                    aria-label="Listing options"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="crayons-icon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="show-35"
                    className="crayons-dropdown absolute right-0 top-100 p-1"
                  >
                    <div>
                      <a href="/_" className="crayons-link crayons-link--block">
                        Report abuse
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p>
                  By engaging in tutorials and seeking out learning insights @{" "}
                  <a href="https://nerdleveltech.com/">
                    https://nerdleveltech.com/
                  </a>{" "}
                  related to the popular tech topics that are in high demand
                  within the job market, you can acquire a wealth of knowledge
                  and practical skills that can help you advance your career and
                  stay up-to-date with the latest industry trends.
                </p>
              </div>
              <div className="fs-s flex items-center">
                <a href="/_" className="crayons-avatar crayons-avatar--l mr-2">
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--AooHtSgM--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/869489/15f774ad-6f68-4a86-a289-d16df1693adf.jpeg"
                    alt="Ahmed Radwan"
                    className="crayons-avatar__image"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                </a>
                <div>
                  <a href="/_" className="crayons-link fw-medium">
                    Ahmed Radwan
                  </a>
                  <p className="fs-xs">
                    <a
                      href="/_"
                      data-no-instant="true"
                      className="crayons-link crayons-link--secondary"
                    >
                      education
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Listings;
