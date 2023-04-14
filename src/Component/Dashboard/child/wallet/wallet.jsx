import "../../style/style.scss"
import Card from "./card";
import DollarAssets from "./dollarAssets";
import RecentTransactions from "./recentTransactions";

const Wallet = () => {
return(
    <div className="weight">
    <Card/>
        <DollarAssets/>
        <RecentTransactions/>
       </div>
)
}
export  default  Wallet