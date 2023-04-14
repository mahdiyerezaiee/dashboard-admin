import React from 'react';
import "../style/style.scss"
import {Button} from "@mui/material";
import CircleChart from "./circleChart";
export const FooterSidebar = () => {
    return (
        <div className="footerSideBar">
            <CircleChart/>
<p>احراز هویت شما کامل نشده است!</p>
            <span>اطلاعات خود را به صورت کامل وارد کنید تا
احراز هویت شما انجام شود.</span>
            <Button  >احراز هویت</Button>
        </div>

    );
};