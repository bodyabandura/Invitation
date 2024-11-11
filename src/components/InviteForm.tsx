import { useState } from "react";
import { Input, Typography, Radio, Form } from "antd";

const { Title, Text } = Typography;

const InviteForm = () => {
  const [inviteType, setInviteType] = useState("Entire application");

  const handleInviteTypeChange = (e: any) => {
    setInviteType(e.target.value);
  };

  return (
    <Form className="w-full" layout="vertical">
      <Form.Item>
        <Title level={5}>Invite user to..</Title>
        <Radio.Group
          buttonStyle="outline"
          className="grid grid-cols-2 gap-2 w-full"
          size="large"
          value={inviteType}
          onChange={handleInviteTypeChange}
        >
          <Radio.Button
            className="w-full rounded-lg"
            value="Entire application"
          >
            Entire application
          </Radio.Button>
          <Radio.Button className="w-full rounded-lg" value="Page or feature">
            Page or feature
          </Radio.Button>
          <Radio.Button className="w-full rounded-lg" value="Team or workspace">
            Team or workspace
          </Radio.Button>
          <Radio.Button className="w-full rounded-lg" value="Assign a task">
            Assign a task
          </Radio.Button>
        </Radio.Group>
      </Form.Item>

      <div className="flex flex-col">
        <Text className="text-[16px] font-bold mb-1">Give it a name</Text>
        <Text className="mb-5 text-[#334155]">
          This will help you manage the use case in Thrivestack
        </Text>
        <Input className="p-3 text-[16px]"  placeholder="e.g. Use case 1" />
      </div>
    </Form>
  );
};

export default InviteForm;
