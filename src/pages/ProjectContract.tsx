import MainTitleLine from "../components/MainTitle/MainTitleLine";
import LiftBoxProject from "../components/pagesComp/projectCont/LiftBoxProject";
import RightBoxProject from "../components/pagesComp/projectCont/RightBoxProject";

const ProjectContract = () => {
  return (
    <div>
      <MainTitleLine title="Project Contract" />
      <div className="d-flex justify-content-between g-3 mt-3">
        <div className="g-2 w-75">
          <LiftBoxProject />
        </div>
        <div className=" w-25">
          <RightBoxProject />
        </div>
      </div>
    </div>
  );
};

export default ProjectContract;
