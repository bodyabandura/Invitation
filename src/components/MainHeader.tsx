import { Select } from "antd";
import ArrowBackIcon from "../assets/icons/ArrowBackIcon.svg";
import LogoImg from "../assets/icons/logo mark.svg";
import HeaderSwitcher from "./HeaderSwitcher";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const MainHeader = () => {
  
  const navigate = useNavigate()
  
  return (
    <header className="bg-white px-5 py-3 h-[10vh] border-b-2 border-[#d6dbe3]">
      <div className="flex items-center gap-5">
        <button onClick={() => {navigate("/")}}   className="bg-transparent">
          <img src={ArrowBackIcon} alt="" />
        </button>

        <button className="bg-transparent">
          <img src={LogoImg} alt="" />
        </button>

        <Select
          defaultValue="product-name"
          variant="borderless"
          className="text-4xl"
        >
          <Option value="product-name">Product name</Option>
          <Option value="product-name-1">Product 1</Option>
        </Select>

        <HeaderSwitcher/>
      </div>
    </header>
  );
};

export default MainHeader;
