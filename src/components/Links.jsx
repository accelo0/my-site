function Links() {
  return (
    <>
      <div className="flex justify-center text-p-text pt-6 text-center space-x-6">
        <div className="grid grid-cols-4 gap-10">
          <a
            href="https://github.com/accelo0"
            target="_blank"
            className="cursor-pointer hover:opacity-30"
          >
            <i className="fa-brands fa-github fa-lg"></i>
          </a>
          <a
            href="https://x.com/aangeloprs"
            target="_blank"
            className="cursor-pointer hover:opacity-30"
          >
            <i className="fa-brands fa-twitter fa-lg"></i>
          </a>
          <a
            href="https://www.instagram.com/angelopruscino/"
            target="_blank"
            className="cursor-pointer hover:opacity-30"
          >
            <i className="fa-brands fa-instagram fa-lg"></i>
          </a>
          <a
            href="mailto:angeloprs.dev@icloud.com"
            target="_blank"
            className="cursor-pointer hover:opacity-30"
          >
            <i className="fa-solid fa-envelope fa-lg"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Links;
