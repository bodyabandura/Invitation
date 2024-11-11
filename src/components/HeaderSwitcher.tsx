import { Select } from "antd";

const { Option } = Select;

const HeaderSwitcher = () => {
  return (
    <div className="flex items-center gap-[5px] bg-white p-2">
      <span className="h-[20px] w-2 rounded-full bg-green-500"></span>{" "}
      {/* Green indicator */}
      <Select
        defaultValue="staging"
        style={{ width: 120 }}
        bordered={false}
        className="text-4xl"
      >
        <Option value="staging">Staging</Option>
        <Option value="prod">Production</Option>
        <Option value="dev">Dev</Option>
      </Select>
    </div>
  );
};

export default HeaderSwitcher;
