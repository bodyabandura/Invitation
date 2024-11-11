import SetupWrapper from "../SetupWrapper"
import SetupRoleImg from "../../assets/img/SetupRole.png"

type Props = {
  onBtnClick : () => void
}

const SetupIntegrate = ({onBtnClick}: Props) => {
  return (
    <>
      <SetupWrapper
      handleLearnMoreClick={() => {}}
        btnTitle="Test"
        title="Integrate with your app"
        isHasLearnMore={false}
        onBtnClick={onBtnClick}
      >
        <div></div>
      </SetupWrapper>

      <img src={SetupRoleImg} alt="" />
    </>
  )
}

export default SetupIntegrate