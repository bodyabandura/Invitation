import SetupWrapper from "../SetupWrapper";
import SetupRoleImg from "../../assets/img/SetupRole.png";

type Props = {
  onBtnClick : () => void
}

const SetupRole = ({onBtnClick}: Props) => {
  return (
    <>
      <SetupWrapper
        handleLearnMoreClick={() => {}}
        btnTitle="Save and apply"
        title="Setup roles"
        isHasLearnMore={true}
        badge="One time setup"
        onBtnClick={onBtnClick}
      >
        <div></div>
      </SetupWrapper>

      <img src={SetupRoleImg} alt="" />
    </>
  );
};

export default SetupRole;
