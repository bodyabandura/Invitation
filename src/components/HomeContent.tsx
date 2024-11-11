import { Card, Col, Row, Button, Steps } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import icons from "../components/custom-icons"
import CalendarIcon from "../assets/icons/CalendarIcon.svg";
import PeopleIcon from "../assets/icons/PeopleIcon.svg";
import EmailIcon from "../assets/icons/EmailIcon.svg";
import ThumbIcon from "../assets/icons/ThumbIcon.svg";
import ChartIcon from "../assets/icons/ChartIcon.svg";
import { useNavigate } from "react-router-dom";


const { Step } = Steps;
const {CheckIcon} = icons

const HomeContent = () => {
  
    const navigate = useNavigate()
  
    const services = [
    {
      title: "Self Serve",
      icon: ThumbIcon,
      onClick : () => {},
      actions: "View",
      subtitle: "0 workflows generated",
      details: ["Customized", "Integrated", "Promoted"],
      status: "Promoted",
    },
    {
      title: "Business Telemetry",
      icon: ChartIcon,
      onClick : () => {},
      subtitle: "Create reports and CRM records",
      details: ["Customized", "Integrated", "Live"],
      status: "Coming Soon",
    },
    {
      title: "User Management (In-app feature)",
      icon: PeopleIcon,
      onClick : () => {},
      actions: "Setup",
      subtitle: "0 workflows generated",
      status: "Not setup",
    },
    {
      title: "Invitation (In-app feature)",
      icon: EmailIcon,
      onClick : () => {navigate("/invitation")},
      actions: "Setup",
      subtitle: "0 workflows generated",
      status: "Not setup",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center px-2 pb-8 border-t border-[#e2e8f0]">
      <header className="text-2xl font-black mt-12 mb-8">Get Started</header>

      <div className="max-w-[612px]">
        <Row gutter={[16, 16]} justify="center" className="w-full">
          {services.map((service, index) => (
            <Col key={index} xs={24} lg={24} style={{ maxWidth: "300px" }}>
              <Card
                style={{
                  height:
                    service.title === "Business Telemetry" ? "390px" : "auto",
                }}
                className="rounded-lg shadow-md font-satoshi relative"
              >
                <div
                  className={`py-[2px] px-[8px] w-fit text-sm rounded absolute top-3 right-3 ${
                    service.status === "Promoted"
                      ? "bg-[#d3eeeb]"
                      : "bg-[#f1f5f9]"
                  }`}
                >
                  {service.status}
                </div>

                <img className="mb-6" src={service.icon} alt={service.title} />

                <h2 className="font-bold text-lg mb-1 w-[70%]">
                  {service.title}
                </h2>
                <h4 className="text-[#64748B] text-sm">{service.subtitle}</h4>

                {service.details && (
                  <Steps
                    className="mt-3"
                    direction="vertical"
                    size="small"
                    current={3}
                  >
                    {service.details?.map((el, index) => (
                      <Step
                        key={index}
                        title={el}
                        icon={
                          service.title === "Self Serve" ? (
                            <CheckIcon size={24} color="#0d9488"/>
                          ) : (
                            <ExclamationCircleOutlined
                              size={18}
                              style={{ color: "#eff2f5" }}
                            />
                          )
                        }
                      />
                    ))}
                  </Steps>
                )}

                {service.actions && (
                  <div className="flex gap-7 items-center mt-9">
                    <Button onClick={service.onClick} className="w-[68px] h-[40px] text-white bg-[#1238ce] rounded-[8px] text-sm">
                      {service.actions}
                    </Button>
                    {/* //TODO Need to replace it by Link (React router dom)} */}
                    <span className="text-[#1238ce] cursor-pointer">
                      Help guide
                    </span>
                  </div>
                )}
              </Card>
            </Col>
          ))}
        </Row>

        <div className="mt-9 bg-[#F9F7FD] rounded-[8px] w-full] flex justify-between items-center p-6">
          <img src={CalendarIcon} alt="" />

          <div className="max-w-[359px]">
            <h4 className="font-medium text-[1rem]">
              Need help getting started?
            </h4>
            <p className="text-[#64748B] text-sm">
              Setup a call with our experts to accelerate your onboarding
            </p>
          </div>

          <span className="text-[#1238CE] text-sm cursor-pointer">
            Schedule a call
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
