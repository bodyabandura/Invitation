import { Typography, Radio, Space, Form } from "antd";

const { Title, Text } = Typography;

type Props = {
  assignRole: string;
  setAssignRole: (value: string) => void;
  addToTeam: string;
  setAddToTeam: (value: string) => void;
}

const UseCaseForm = ({ assignRole, setAssignRole, addToTeam, setAddToTeam }: Props) => {
  const handleAssignRoleChange = (e: any) => {
    setAssignRole(e.target.value);
  };

  const handleAddToTeamChange = (e: any) => {
    setAddToTeam(e.target.value);
  };

  return (
    <Form layout="vertical">
      <Form.Item>
        <Title level={5}>Assign roles while inviting?</Title>
        <Text type="secondary">
          For example: Sales team, marketing team, product team
        </Text>
        <Radio.Group
          value={assignRole}
          className="flex gap-2 mt-4"
          onChange={handleAssignRoleChange}
        >
          <Space direction="horizontal" wrap>
            <Radio.Button value="yes">Yes, assign</Radio.Button>
            <Radio.Button value="no">
              No, not for this use case
            </Radio.Button>
          </Space>
        </Radio.Group>
      </Form.Item>

      <Form.Item>
        <Title level={5}>Add to a team while inviting?</Title>
        <Text type="secondary">
          For example: Sales team, marketing team, product team
        </Text>
        <Radio.Group
          className="mt-5"
          value={addToTeam}
          onChange={handleAddToTeamChange}
        >
          <Space direction="horizontal" wrap>
            <Radio.Button value="yes">
              Yes, add to a team
            </Radio.Button>
            <Radio.Button value="no">No, skip it</Radio.Button>
          </Space>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};

export default UseCaseForm;
