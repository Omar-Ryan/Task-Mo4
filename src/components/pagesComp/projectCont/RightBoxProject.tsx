import styles from "./styles.module.css";
const { table, box, MidContent } = styles;

const RightBoxProject = () => {
  return (
    <div className={table}>
      <div className={box}>
        <div className={MidContent}>
          <div></div>
          <div className="list"></div>
        </div>
      </div>
    </div>
  );
};

export default RightBoxProject;
