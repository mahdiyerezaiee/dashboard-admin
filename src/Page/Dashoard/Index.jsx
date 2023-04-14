import {Grid} from "@mui/material";
import SidebarDashbord from "../../Component/Sidebar/component/sidebar";
import "./style/style.scss"
import Header from "../../Component/NavBar/component/header";
import DashboardMain from "../../Component/Dashboard/component/main";

const Index = () => {
    return (
        <Grid container>
            <Grid item xs={2} md={3}>
                <SidebarDashbord/>
            </Grid>
            <Grid item xs={10} md={9}>
                <Header/>
                <DashboardMain/>
            </Grid>


        </Grid>
    )
}
export default Index