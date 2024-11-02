import { CiSearch } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { FaRegBell } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { PiListThin } from "react-icons/pi";
import styles from "./styles.module.css";
const { header, headerBox, logo, iconBox, totalNum, iconBoxList } = styles;

const Header = () => {
  return (
    <header className={header}>
      <div className={headerBox}>
        <div>
          <h1 className={logo}>V</h1>
        </div>
        <div className="d-flex">
          <div className="d-flex justify-content-between align-items-center g-2">
            <div className={iconBox}>
              <CiSearch />
            </div>
            <div className={iconBox}>
              <IoIosAdd />
            </div>
            <div className={iconBox}>
              <CiHeart />
            </div>
            <div className={iconBox}>
              <FaRegBell />

              <h4 className={totalNum}>90</h4>
            </div>
            <div className={iconBox}>
              <svg
                xmlns="http:www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
              </svg>

              <h4 className={totalNum}>12</h4>
            </div>
            <div className={iconBox}>
              <RxAvatar />
            </div>
            <div className={iconBoxList}>
              <PiListThin />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
