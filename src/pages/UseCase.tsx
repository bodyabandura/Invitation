import { useState } from "react";
import UseCaseForm from "../components/UseCaseForm";
import InviteForm from "../components/InviteForm";
import ArrowWhiteIcon from "../assets/icons/ArrowWhiteIcon.svg";
import PersonIcon from "../assets/icons/PersonIcon.svg";
import { Form, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
import icons  from "../components/custom-icons";

const {LightningIcon}= icons


const UseCase = () => {
  const [isUseCaseSetting, setIsUseCaseSetting] = useState<boolean>(false);
  const [assignRole, setAssignRole] = useState("yes");
  const [addToTeam, setAddToTeam] = useState("yes");

  const navigate = useNavigate();

  return (
    <main className="flex h-[90vh]">
      {/* Forms */}
      <div className="bg-white w-[45%] rounded-xl pt-14 pb-[60px] h-full flex flex-col justify-between border-2 pl-[5%] pr-12 border-[#E2E8F0]">
        <div>
          <div className="flex gap-2">
            <button
              style={{
                backgroundColor: isUseCaseSetting ? "#E2E8F0" : "#728CF3",
              }}
              onClick={() => setIsUseCaseSetting(false)}
              className="w-[60px] h-1 rounded-[10px]"
            ></button>
            <button
              style={{
                backgroundColor: !isUseCaseSetting ? "#E2E8F0" : "#728CF3",
              }}
              onClick={() => setIsUseCaseSetting(true)}
              className="w-[60px] h-1 rounded-[10px]"
            ></button>
          </div>

          <h1 className="text-2xl font-black my-7">
            {isUseCaseSetting ? "Use case settings" : "Invitation use case"}
          </h1>

          {isUseCaseSetting ? (
            <UseCaseForm
              assignRole={assignRole}
              setAssignRole={setAssignRole}
              addToTeam={addToTeam}
              setAddToTeam={setAddToTeam}
            />
          ) : (
            <InviteForm />
          )}
        </div>
        <button
          className="bg-[#1238CE] hover:bg-[#152f96] text-white w-fit h-fit py-2 px-14 flex gap-1 rounded-lg"
          //TODO Change this function to the real
          onClick={() => {
            navigate("/setup");
          }}
        >
          {isUseCaseSetting ? "Next integrate" : "Start with setup"}
          <img src={ArrowWhiteIcon} />
        </button>
      </div>

      {/* Your app */}
      <div className="w-[55%] flex items-center justify-center">
        <div className="w-[90%] border border-[#D9D4D4] rounded-lg overflow-hidden">
          <div className="h-14 w-full bg-black px-10 flex justify-between items-center text-white">
            <div className="flex gap-2 items-center">
              <div className="bg-[#D9D4D4] w-4 h-4 rounded-[4px]"></div>
              <span className="font-bold">Your App</span>
            </div>
            <button className="flex gap-2 shadow-purple bg-white py-2 px-5 text-[16px] font-bold text-black rounded-[48px]">
              <img src={PersonIcon} />
              Invite
            </button>
          </div>
          <div className="h-[480px] flex justify-center items-center">
            <Form
              layout="vertical"
              className="bg-white py-6 px-[30px] rounded-xl w-[70%]"
            >
              <h2 className="text-lg font-bold mb-5">Invite people</h2>

              <Form.Item>
                <Input.TextArea
                  style={{ resize: "none" }}
                  size="middle"
                  placeholder="Add emails separated by commas"
                />
              </Form.Item>

              {assignRole === "yes" && (
                <Form.Item label="Invite as">
                  <Select placeholder="Select role">
                    <Select.Option value="admin">Admin</Select.Option>
                    <Select.Option value="editor">Editor</Select.Option>
                    <Select.Option value="viewer">Viewer</Select.Option>
                  </Select>
                </Form.Item>
              )}

              {addToTeam === "yes" && (
                <Form.Item label="Add to team">
                  <Select placeholder="Select team">
                    <Select.Option value="team1">Team 1</Select.Option>
                    <Select.Option value="team2">Team 2</Select.Option>
                  </Select>
                </Form.Item>
              )}

              <div className="flex justify-between items-center">
                <button className="text-sm rounded-md flex gap-1 text-white font-bold py-1 px-2 w-fit h-fit bg-gradient-to-r from-[#8739BF] to-[#1238CE] hover:from-[#7622B0] hover:to-[#102BA0]">
                  <LightningIcon />
                  Powered by Thrivestack
                </button>
                <button className="bg-[#0F172A] shadow-purple text-white w-fit py-3 px-7 rounded-[68px] font-bold text-[16px]">
                  Send Invite
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UseCase;
