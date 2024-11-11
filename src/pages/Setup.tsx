import { useState } from "react";
import SetupHeader from "../components/SetupHeader";
import icons from "../components/custom-icons";
import screens from "../components/screens";

const { CheckIcon } = icons;
const screensValue = [
  "setup-roles",
  "setup-teams",
  "setup-integrate",
  "setup-design",
  "setup-configure",
];
const { SetupConfigure, SetupDesign, SetupIntegrate, SetupRole, SetupTeams } =
  screens;

const Setup = () => {
  const [activeScreenNumber, setActiveScreenNumber] = useState<number>(0);
  const [screen, setScreen] = useState(screensValue[activeScreenNumber]);

  const changeScreen = () => {
    setActiveScreenNumber((prev) => {
      const newScreenNumber = prev + 1;
      setScreen(screensValue[newScreenNumber]);
      return newScreenNumber;
    });
  };

  const navigateOptions = [
    { title: "Setup roles", screen: "setup-roles" },
    { title: "Setup teams", screen: "setup-teams" },
    { title: "Integrate with your app", screen: "setup-integrate" },
    { title: "Design email template", screen: "setup-design" },
    { title: "Configure invite tracking system", screen: "setup-configure" },
  ];

  const renderScreen = () => {
    switch (screen) {
      case "setup-roles":
        return <SetupRole onBtnClick={changeScreen} />;
      case "setup-teams":
        return <SetupTeams onBtnClick={changeScreen} />;
      case "setup-integrate":
        return <SetupIntegrate onBtnClick={changeScreen} />;
      case "setup-design":
        return <SetupDesign onBtnClick={changeScreen} />;
      case "setup-configure":
        return <SetupConfigure onBtnClick={() => {}} />;

      default:
        return null;
    }
  };

  return (
    <div className="h-[90vh]">
      <SetupHeader screen={screen} />
      <main className="h-[90%] bg-[#f8fafc] px-[5%] py-4 flex gap-[10px]">
        <ul className="flex flex-col gap-3 w-[240px]">
          {navigateOptions.map((el, index) => (
            <li
              className={`py-4 pl-4 rounded-lg border-[#1238CE] w-full flex gap-2 items-center ${
                el.screen === screen && "border"
              }`}
            >
              {index < activeScreenNumber ? (
                <CheckIcon color="#0d9488" size={24} />
              ) : (
                <div
                  className={`size-5 border ${
                    el.screen === screen
                      ? "border-[#1238CE]"
                      : "border-[#CBD5E1]"
                  } rounded-full`}
                ></div>
              )}
              <h5
                className={`${
                  el.screen === screen ? "text-[#1238CE]" : "text-[#0F172A]"
                }`}
              >
                {el.title}
              </h5>
            </li>
          ))}
        </ul>

        {renderScreen()}
      </main>
    </div>
  );
};

export default Setup;
