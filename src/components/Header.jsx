import colors from "../assets/colors.json";
import img from "../assets/pfpImg.jpg";
function Header() {
  return (
    <>
      <div className="flex justify-center items-center mt-14">
        <div className="grid place-items-center gap-y-4 text-center">
          <img
            src={img}
            className={`size-28 rounded-full p-1 border-2 border-spacing-6 border-[${colors["white-green"]}]`}
            alt=""
            draggable={false}
          />
          <p className="font-montserrat font-extrabold text-3xl">
            Angelo Pruscino
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
