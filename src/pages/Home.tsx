import HomeContent from "../components/HomeContent"
import HomeHeader from "../components/HomeHeader"
import Sidebar from "../components/Sidebar"

const Home = () => {
  return (
    <div className="">
        <Sidebar/>
        <div className="ml-[100px]">
          <HomeHeader/>
          <HomeContent/>
        </div>
    </div>
  )
}

export default Home