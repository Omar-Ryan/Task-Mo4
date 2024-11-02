import { PiHeartStraightFill } from "react-icons/pi";
import styles from "./styles.module.css";
const { footer, icon, footerLine } = styles;

const Footer = () => {
  return (
    <div className={footer}>
      <div className={footerLine}></div>
      <div className="d-flex justify-content-between align-items-center">
        <p>Copyright © 2024 V-Verse</p>
        <div className="d-flex gap-2">
          <p>Built with</p>
          <PiHeartStraightFill className={icon} />
          <p>By Area-H</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
