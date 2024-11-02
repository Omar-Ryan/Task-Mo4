import { FaArrowLeft } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import styles from "./styles.module.css";
const { box, icon, mTitle, line, iconR } = styles;

interface mainTitleProps {
  title: string;
  iconBoolean?: boolean;
}

const MainTitleLine = ({ title, iconBoolean }: mainTitleProps) => {
  return (
    <div className={box}>
      {!iconBoolean && (
        <span>
          <FaArrowLeft className={icon} />
        </span>
      )}

      <h3 className={mTitle}>{title}</h3>
      <span className={line}></span>
      {iconBoolean && (
        <span>
          <IoIosArrowUp className={iconR} />
        </span>
      )}
    </div>
  );
};

export default MainTitleLine;
