import "./FeaturedInfo.css";
import { FiberManualRecord } from "@material-ui/icons";


export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">My Balance</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2634.80</span>
        </div>
        <div className="dots"><FiberManualRecord /><span>Income</span>
          <FiberManualRecord /><span>Spend</span>
        </div>
      </div>
    </div>
  );
}