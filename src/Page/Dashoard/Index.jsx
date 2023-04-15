import {Grid} from "@mui/material";
import SidebarDashbord from "../../Component/Sidebar/component/sidebar";
import "./style/style.scss"
import Header from "../../Component/NavBar/component/header";
import DashboardMain from "../../Component/Dashboard/component/main";

const Index = () => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={3} md={3}>
                <SidebarDashbord/>
            </Grid>
            <Grid item xs={9} md={9}>
                <Header/>
                <DashboardMain/>
            </Grid>


        </Grid>
    )
}
export default Index