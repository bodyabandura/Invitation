import SetupWrapper from "../SetupWrapper";
import SetupTeamsImg from "../../assets/img/SetupTeams.png";

type Props = {
  onBtnClick : () => void
}

const SetupTeams = ({onBtnClick}: Props) => {
  return (
    <>
      <SetupWrapper
        handleLearnMoreClick={() => {}}
        btnTitle="Save and apply"
        title="Setup teams"
        isHasLearnMore={true}
        badge="One time setup"
        onBtnClick={onBtnClick}
      >
        <div></div>
      </SetupWrapper>
      
        <img className="max-w-[550px]" src={SetupTeamsImg} />

      
    </>
  );
};

export default SetupTeams;
