import Card from "../wallet/card";
import DollarAssets from "../wallet/dollarAssets";
import RecentTransactions from "../wallet/recentTransactions";
import {Grid} from "@mui/material";
import DonutChart from "./donutChart";
import Property from "./Property";
import BasicTable from "./table";
import CommonlyUsed from "./CommonlyUsed";

const Report = () => {
    return (
        <div className="weight">
            <Property/>
            <BasicTable/>
            <CommonlyUsed/>
        </div>
    )
}
export default Report