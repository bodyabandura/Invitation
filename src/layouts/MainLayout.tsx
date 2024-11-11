import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import MainHeader from "../components/MainHeader";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout>
      <MainHeader />
      <Content className="bg-[#f8fafc]">
        <Outlet />
      </Content>
    </Layout>
  );
};

export default MainLayout;
