import SetupWrapper from "../SetupWrapper";
import SetupRoleImg from "../../assets/img/SetupRole.png";

type Props = {
  onBtnClick : () => void
}

const SetupDesign = ({onBtnClick}: Props) => {
  return (
    <>
      <SetupWrapper
        handleLearnMoreClick={() => {}}
        btnTitle="Save and apply"
        title="Design email template"
        isHasLearnMore={false}
        onBtnClick={onBtnClick}
      >
        <div></div>
      </SetupWrapper>

      <img src={SetupRoleImg} alt="" />
    </>
  );
};

export default SetupDesign;
