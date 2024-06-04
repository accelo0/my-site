import Links from "./Links";
import Welcome from "./Welcome";
import PropTypes from "prop-types";

function Header({ src, name }) {
  return (
    <>
      <div className="flex justify-center items-center mt-14">
        <div className="grid place-items-center gap-y-4 text-center">
          <img
            src={src}
            className={`size-28 rounded-full p-1 border-2 border-spacing-6 border-white-green`}
            alt=""
            draggable={false}
          />
          <p className="font-montserrat font-extrabold text-3xl">{name}</p>
        </div>
      </div>
      <Links />
      <Welcome />
    </>
  );
}

Header.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Header;
