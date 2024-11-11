import Ilustration from "../assets/img/Illustration.png";
import Explanation from "../assets/img/Explanation.png";
import ArrowWhiteIcon from "../assets/icons/ArrowWhiteIcon.svg";
import { Button, Steps } from "antd";
import { useEffect, useState } from "react";
import InviteModal from "../components/InviteModal";
import CongratsBar from "../components/CongratsBar";
import { Link, useNavigate } from "react-router-dom";
import icons from "../components/custom-icons";

const { CheckIcon } = icons;

const steps = [
  {
    title: "Trigger the invitation flow",
    description: "UI by Thrivestack SDK",
  },
  { title: "Email sent to invited user" },
  { title: "Invitation accepted by user" },
  { title: "Redirected to invited page" },
  { title: "Virality report updated" },
  {
    title: "User updated in admin portal",
    description: (
      <div>
        <h5 className="text-black">
          Setup user management in just <strong>30 mins</strong>
        </h5>
        <Link className="text-[#1238CE] font-medium text-[16px]" to={""}>
          Integrate now
        </Link>
      </div>
    ),
  },
];

const Invitation = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalVisible(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col h-[105vh] justify-between">
      <CongratsBar />

      <div className="w-full h-auto min-h-[80%] flex">
        <div className="bg-white w-1/2 rounded-xl pt-12 h-full flex flex-col items-center pl-[15%] border-2 border-[#E2E8F0]">
          <div>
            <h1 className="font-black text-2xl mb-1">
              What are In-app invitation?
            </h1>
            <p className="text-[#334155] text-[1rem] leading-[22px] mb-2">
              When this feature is enabled, it allows current users of your app
              to invite new users, creating an in-app growth loop for your
              product.
              <br />
              Invitations act as a glue between your traditional User-Management
              and Product Virality.
            </p>
            <img className="mb-10" src={Ilustration} alt="" />

            <h2 className="font-bold text-[16px] mb-3">How it works?</h2>
            <img src={Explanation} alt="" />
          </div>
        </div>

        <div className="flex justify-center items-center w-1/2">
          <div>
            <h2 className="font-bold text-lg mb-8">
              Try the invitation feature
            </h2>

            <div className="flex">
              <Steps direction="vertical">
                {steps.map((s) => (
                  <Steps.Step
                    icon={<CheckIcon size={32} color="#cbd5e1" />}
                    title={
                      <h5 className="font-medium text-[16px] text-[#0F172A]">
                        {s.title}
                      </h5>
                    }
                    description={s?.description}
                  />
                ))}
              </Steps>

              <Button
                className="border-[#1238CE] text-[#1238CE] w-fit py-3 px-4"
                variant="outlined"
                onClick={showModal}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 5.20326V18.797C6 19.6145 6.79688 20.1339 7.45312 19.742L19.0734 12.7872C19.6416 12.4473 19.6416 11.553 19.0734 11.2131L7.45312 4.25826C6.79688 3.86639 6 4.38576 6 5.20326Z"
                    stroke="#1238CE"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                </svg>
                Try invitation
              </Button>
            </div>
            <InviteModal
              isModalVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center h-[10%] bg-white items-center gap-6">
        <h4 className="text-[#00A98B] text-sm font-bold border-b-2 border-[#00A98B] border-dashed pb-1">
          5 steps, Less than 1 hr
        </h4>
        <button
          onClick={() => {
            navigate("/use-case");
          }}
          className="bg-[#1238CE] hover:bg-[#152f96] text-white w-fit h-fit py-2 px-14 flex gap-1 rounded-lg"
        >
          Start with setup
          <img src={ArrowWhiteIcon} />
        </button>
      </div>
    </div>
  );
};

export default Invitation;
