import styles from "./styles.module.css";
const { circle, textSt, dateSt, lineSt } = styles;

interface TimelineProps {
  id: number;
  icon: React.JSX.Element | string;
  text: string;
  date: string;
  line: boolean;
}

const TimelineDataBox = ({ icon, text, date, line, id }: TimelineProps) => {
  return (
    <div key={id}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-2">
          <div className={circle}>
            {typeof icon === "string" ? (
              <span className="icon">{icon}</span>
            ) : (
              icon
            )}
          </div>
          <div className="d-flex align-items-center">
            <p className={textSt}>{text}</p>
          </div>
        </div>
        <div className="d-flex gap-2">
          <p className={dateSt}>{date}</p>
          {/* <span></span> */}
          {/* <p>View Requirements</p> */}
        </div>
      </div>
      {line && <div className={lineSt}></div>}
    </div>
  );
};

export default TimelineDataBox;
