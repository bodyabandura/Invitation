import SetupWrapper from "../SetupWrapper"
import SetupRoleImg from "../../assets/img/SetupRole.png"

type Props = {
  onBtnClick : () => void
}

const SetupConfigure = ({onBtnClick}: Props) => {
  return (
    <>
      <SetupWrapper
      handleLearnMoreClick={() => {}}
        btnTitle="Save and aply"
        title="Configure invite tracking system"
        isHasLearnMore={true}
        onBtnClick={onBtnClick}
        badge="Optional step"
      >
        <div></div>
      </SetupWrapper>

      <img src={SetupRoleImg} alt="" />
    </>
  )
}

export default SetupConfigure