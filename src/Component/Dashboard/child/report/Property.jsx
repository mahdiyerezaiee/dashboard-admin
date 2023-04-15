import {Grid} from "@mui/material";
import DonutChart from "./donutChart";
import LineChart from "./lineChart";

const Property = () => {
  return(
      <Grid container>
          <Grid item  xs={12} md={12}>
          <span className="title"> دارایی های من</span>
          </Grid>
          <Grid item  xs={12} md={6}>
              <DonutChart/>
          </Grid>
          <Grid item  xs={12} md={6}>
              <LineChart/>
          </Grid>
      </Grid>
  )
}
export default Property