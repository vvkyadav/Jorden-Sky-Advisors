import Chart from "../../components/Chart/Chart";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import "./Home.css";
// import { userData } from "../../dummyData";

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart />
        </div>
    );
}