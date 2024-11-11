import { Modal, Input, Select, Form } from "antd";
import LightningIcon from "./custom-icons/LightningIcon";

type Props = {
  isModalVisible: boolean;
  setIsModalVisible: (state: boolean) => void;
};

const InviteModal = ({ isModalVisible, setIsModalVisible }: Props) => {
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      title={
        <h1 className="text-[#0F172A] text-2xl font-black mb-7">
          Invite people
        </h1>
      }
      open={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
    >
      <Form layout="vertical">
        <Form.Item>
          <Input.TextArea placeholder="Add emails separated by commas" />
        </Form.Item>

        <Form.Item label="Invite as">
          <Select placeholder="Select role">
            <Select.Option value="admin">Admin</Select.Option>
            <Select.Option value="member">Member</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Add to team">
          <Select placeholder="Select team">
            <Select.Option value="team1">Team 1</Select.Option>
            <Select.Option value="team2">Team 2</Select.Option>
          </Select>
        </Form.Item>

        <div className="flex justify-between items-center">
          <button className="text-sm uppercase rounded-[20px] flex gap-1 text-white font-bold py-1 px-2 w-fit h-fit bg-gradient-to-r from-[#8739BF] to-[#1238CE] hover:from-[#7622B0] hover:to-[#102BA0]">
            <LightningIcon/>
            Powered by Thrivestack
          </button>
          <button
            className="bg-[#0F172A] text-white w-fit py-3 px-7 rounded-[68px] font-bold text-[16px]"
          >
            Send Invite
          </button>
        </div>
      </Form>
    </Modal>
  );
};

export default InviteModal;
