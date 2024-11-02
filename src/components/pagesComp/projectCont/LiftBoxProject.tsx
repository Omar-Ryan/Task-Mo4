import MainTitleLine from "../../MainTitle/MainTitleLine";
import TimelineDataBox from "./TimelineDataBox";
import { IoMdCheckmark } from "react-icons/io";
import { BiHide } from "react-icons/bi";
import { LuNewspaper } from "react-icons/lu";
import styles from "./styles.module.css";
const {
  table,
  box,
  MidContent,
  circle,
  verLineL,
  typesComp,
  typesCompText,
  verLineM,
  verLineList,
  textBox,
  paid,
  pending,
  deliverablesBox,
  deliverablesBoxTitle,
  Declined,
  deliverablesBoxLine,
  deliverablesBoxText,
} = styles;
const timelineData = [
  {
    id: 1,
    icon: <IoMdCheckmark className="icon" />,
    text: "<V-Client Name> Added Milestone <Milestone Title>",
    date: "09-Sep-2024 05:45 PM",
    line: true,
  },
  {
    id: 2,
    icon: <IoMdCheckmark className="icon" />,
    text: "<V-Client Name> Added Milestone <Milestone Title>",
    date: "09-Sep-2024 05:45 PM",
    line: true,
  },
  {
    id: 3,
    icon: <IoMdCheckmark className="icon" />,
    text: "<V-Client Name> Added Milestone <Milestone Title>",
    date: "10-Sep-2024 03:45 PM",
    line: true,
  },
  {
    id: 4,
    icon: "X",
    text: "<V-Client Name> Declined The Delivery",
    date: "11-Sep-2024 02:00 PM",
    line: true,
  },
  {
    id: 5,
    icon: <IoMdCheckmark className="icon" />,
    text: "<V-Client Name> Added Milestone <Milestone Title>",
    date: "12-Sep-2024 03:45 PM",
    line: true,
  },
  {
    id: 6,
    icon: "X",
    text: "<V-Client Name> Declined The Delivery",
    date: "12-Sep-2024 02:00 PM",
    line: false,
  },
];

const LiftBoxProject = () => {
  return (
    <div className={table}>
      <div className={box}>
        <div className={MidContent}>
          <MainTitleLine title="Contract Tracker" iconBoolean={true} />
          {/* Timeline Contents */}
          {timelineData.map((ele) => (
            <TimelineDataBox {...ele} />
          ))}
        </div>
      </div>
      <div className={box}>
        <div className={MidContent}>
          <MainTitleLine title="Contract Milestones" iconBoolean={true} />
          <div className="list">
            <div className={typesComp}>
              <div>
                <div className={circle}>
                  <BiHide className="icon" />
                </div>
                <div className={verLineL}>
                  <span></span>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <p className={typesCompText}>Hide Completed</p>
              </div>
            </div>

            <div className={typesComp}>
              <div>
                <div className={circle}>
                  <IoMdCheckmark className="icon" />
                </div>
                <div className={verLineM}>
                  <span></span>
                </div>
              </div>

              <div className={textBox}>
                <div className="d-flex align-items-center">
                  <p className={typesCompText}>Milestone :</p>
                  <p className="typesCompTextSecond">{`<Milestone Title>`}</p>
                </div>
                <div className="d-flex align-items-center gx-2 ">
                  <p>$100.00</p>
                  <p className={paid}>Paid</p>
                  <p>
                    <span>Delivery Date:</span>
                    <span>11-Sep-2024 11:35 AM</span>
                  </p>
                </div>
              </div>
            </div>
            {/* VerLine */}
            <div className={verLineList}>
              <span></span>
            </div>

            <div className={typesComp}>
              <div>
                <div className={circle}>
                  <IoMdCheckmark className="icon" />
                </div>
                <div className={verLineM}>
                  <span></span>
                </div>
              </div>

              <div className={textBox}>
                <div className="d-flex align-items-center">
                  <p className={typesCompText}>Milestone :</p>
                  <p className="typesCompTextSecond">{`<Milestone Title>`}</p>
                </div>
                <div className="d-flex align-items-center g-2">
                  <p>$0.00</p>

                  <p>
                    <span>Delivery Date:</span>
                    <span>11-Sep-2024 11:35 AM</span>
                  </p>
                  <p className={pending}>Pending</p>
                </div>
              </div>
            </div>

            {/* VerLine */}
            <div className={verLineList}>
              <span></span>
            </div>

            <div className={typesComp}>
              <div>
                <div className={circle}>
                  <BiHide className="icon" />
                </div>
              </div>
              <div className="d-flex align-items-center">
                <p className={typesCompText}>Hide Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contract Deliverables */}
      <div className={box}>
        <div className={MidContent}>
          <MainTitleLine title="Contract Deliverables" iconBoolean={true} />
          <div className="list d-flex g-2">
            <div className={circle}>
              <LuNewspaper className="icon" />
            </div>
            <div className={deliverablesBox}>
              <div className="d-flex justify-content-between align-items-center">
                <h5 className={deliverablesBoxTitle}>Delivery-1</h5>
                <div className="d-flex g-2 align-items-center">
                  <span>15-Sep-2022 11:30 AM</span>
                  <p className={Declined}>Declined</p>
                </div>
              </div>
              <div className={deliverablesBoxLine}></div>
              <p className={deliverablesBoxText}>
                Id risus urna neque nunc feugiat metus turpis vel. Quis sed
                adipiscing vitae aliquet tincidunt ut. Ut fusce tellus bibendum
                at massa massa etiam. Fringilla.
              </p>
              <div>part-3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiftBoxProject;
