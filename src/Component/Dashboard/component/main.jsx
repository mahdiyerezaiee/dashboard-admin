import {Grid} from "@mui/material";
import Wallet from "../child/wallet/wallet";
import Report from "../child/report/report";

const DashboardMain = () => {
    return (
        <Grid container spacing={1} marginTop={4} className="main-layout">
            <Grid item xs={12} md={4} >
                <Wallet/>
            </Grid>
            <Grid item xs={12} md={8}>
<Report/>
            </Grid>
        </Grid>
    )
}
export default DashboardMain