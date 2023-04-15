
import Property from "./Property";
import BasicTable from "./table";
import CommonlyUsed from "./CommonlyUsed";
import {Fragment} from "react";

const Report = () => {
    return (
        <Fragment>
        <div className="weight">
            <Property/>
            <BasicTable/>
        </div>
    <div className="weight">

            <CommonlyUsed/>
        </div>
        </Fragment>
    )
}
export default Report