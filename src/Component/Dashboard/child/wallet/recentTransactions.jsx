import Data from "../../../../RecentTransactions.json"
import {Fragment} from "react";
import {Grid} from "@mui/material";
const RecentTransactions = () => {
  return(

      <Fragment>
          <Grid container className="container-Wallet">
              <Grid xs={6} md={8}>
                  <span className="title"> تراکنش های اخیر</span>
              </Grid>
              <Grid xs={6} md={4} color="#ccc" textAlign="left">
              <span >مشاهده همه</span>
          </Grid>
              <Grid xs={12} md={12} className="list-recent">
              {Data.map(item=>
                      < Grid container  className="item-recent" >
                  <Grid xs={1} md={1} >
                      <img src={item.icon} width="80%" height="80%" />

                  </Grid>
                  <Grid xs={5} md={5}>
                      <b>{item.name}</b>
                  </Grid>
                  <Grid xs={6} md={6} textAlign="left">
                      <span>{item.price}  {item.unitPrice  }</span>
                  </Grid>
                  <Grid xs={6} md={6} color="#ccc" >
                      <span className="description">{item.Description }</span>
                  </Grid>
                  <Grid xs={6} md={6} color="#ccc" textAlign="left">
                     <span className="creatDate"> {item.creatDate}</span>
                  </Grid>
              </Grid>
              )}
              </Grid>
          </Grid>
      </Fragment>
  )
}
export default RecentTransactions