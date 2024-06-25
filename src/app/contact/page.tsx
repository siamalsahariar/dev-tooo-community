export default function Contact() {
  return (
    <div className="crayons-layout crayons-layout--limited-l">
      <div className="crayons-card text-styles text-padding">
        <h1 className="fs-3xl s:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-4 mt-0">
          Contacts
        </h1>

        <p>DEV Community would love to hear from you!</p>
        <p>
          Email: <a href="mailto:yo@dev.to">yo@dev.to</a> 😁
        </p>
        <p>
          Twitter:{" "}
          <a href="http://twitter.com/thepracticaldev">@thepracticaldev</a> 👻
        </p>
        <p>
          Report a vulnerability:{" "}
          <a href="https://dev.to/security">dev.to/security</a> 🐛
        </p>
        <p>
          To report a bug, please create{" "}
          <a href="https://github.com/forem/forem/issues/new/choose">
            a bug report
          </a>{" "}
          in our open source repository.
        </p>
        <p>
          To request a feature, please{" "}
          <a href="https://github.com/forem/forem/discussions">
            start a new GitHub Discussion
          </a>{" "}
          in the Forem repo!
        </p>
      </div>
    </div>
  );
}
