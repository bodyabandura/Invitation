import { Avatar, Button, Select, Switch } from "antd";
import LogoImg from "../assets/icons/logo mark.svg";
import icons from "../components/custom-icons";

const {AnalyzeIcon, BuildIcon, DriveIcon, SettingsIcon} = icons
const { Option } = Select;

const menuElements = [
  { id: "1", title: "Build", imgSrc: <BuildIcon/> },
  { id: "2", title: "Analyze", imgSrc: <AnalyzeIcon/>  },
  { id: "3", title: "Drive", imgSrc:  <DriveIcon/>},
  { id: "4", title: "Settings", imgSrc: <SettingsIcon/> },
];

const Sidebar = () => { 
  return (
    <aside className="shadow-md w-[100px] h-screen fixed top-0 left-0 bg-secondary px-[14px] py-[24px] flex flex-col justify-between overflow-hidden">
      <div className="flex flex-col items-center">
        <img className="w-[32px] h-[32px]" src={LogoImg} alt={"logo"} />

        <Select
          defaultValue="staging"
          bordered={false}
          className="text-black my-[12px] bg-white rounded-[8px] w-full border-0 h-[42px]"
        >
          <Option value="staging">D</Option>
          <Option value="prod">P</Option>
        </Select>

        <ul className="w-full items-center flex flex-col gap-[10px]">
          {menuElements.map((el) => (
            <li
              className={`group hover:text-[#1238ce] py-[12px] h-[72px] w-[72px] flex flex-col items-center gap-[4px] rounded-[8px] cursor-pointer hover:bg-[#ecf0fd] ${
                el.title === "Settings" &&
                "border-t border-[#CBD5E1] rounded-t-none pt-[10px]"
              }`}
              key={el.id}
            >
              {/* <img src={el.imgSrc} alt="" /> */}
                {el.imgSrc}
              <h5 className="font-medium text-sm text-inherit transition-colors group-hover:font-bold duration-300">
                {el.title}
              </h5>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center w-full gap-[16px]">
        <div className="flex gap-[4px] py-[12px] items-center">
          <Switch size="small" defaultChecked={false} />
          <span className="text-sm text-[#334155]">Demo</span>
        </div>

        <Button className="bg-white w-full font-medium text-[11px] text-[#64748B] uppercase border-0">
          FREE TRIAL
        </Button>

        <Avatar
          size={64}
          src="https://via.placeholder.com/64"
          style={{
            margin: "0 auto",
            border: "2px solid #F0F0F0",
          }}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
