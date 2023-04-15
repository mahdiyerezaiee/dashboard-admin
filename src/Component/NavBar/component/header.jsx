import {Grid} from "@mui/material";
import Search from "./search";
import "../style/style.scss"
import img from "../style/img/img.png"
import InputBase from "@mui/material/InputBase";

const Header = () => {
    return (
        <div className="header">
            <Grid container>
                <Grid item xs={4} md={6} className="name">
                    <span> مهرناز عزیز، سلام!</span>
                </Grid>
                <Grid item xs={8} md={6} className="box">
                    <Search/>
                    <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
<path
    d="M11.91 14.2448C11.4149 14.2448 11.0044 13.8343 11.0044 13.3392V13.0857C11.0044 11.685 12.0307 10.9968 12.4171 10.7311C12.8639 10.4293 13.0087 10.224 13.0087 9.91005C13.0087 9.30631 12.5137 8.81121 11.91 8.81121C11.3062 8.81121 10.8112 9.30631 10.8112 9.91005C10.8112 10.4051 10.4007 10.8157 9.9056 10.8157C9.41054 10.8157 9 10.4051 9 9.91005C9 8.30411 10.304 7 11.91 7C13.5159 7 14.8199 8.30411 14.8199 9.91005C14.8199 11.2866 13.8057 11.9748 13.4314 12.2284C12.9605 12.5423 12.8156 12.7476 12.8156 13.0857V13.3392C12.8156 13.8464 12.405 14.2448 11.91 14.2448Z"
    fill="#606060"/>
<path
    d="M11.9102 17.2517C11.4031 17.2517 11.0046 16.8412 11.0046 16.3461C11.0046 15.8511 11.4151 15.4405 11.9102 15.4405C12.4053 15.4405 12.8158 15.8511 12.8158 16.3461C12.8158 16.8412 12.4173 17.2517 11.9102 17.2517Z"
    fill="#606060"/>
<path fillRule="evenodd" clipRule="evenodd"
      d="M21.2502 12C21.2502 18.937 18.9372 21.25 12.0002 21.25C5.06324 21.25 2.75024 18.937 2.75024 12C2.75024 5.063 5.06324 2.75 12.0002 2.75C18.9372 2.75 21.2502 5.063 21.2502 12Z"
      stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</span>
                    <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd"
      d="M12 17.8476C17.3075 17.8476 19.7629 17.1242 20 14.2205C20 11.3188 18.2881 11.5054 18.2881 7.94511C18.2881 5.16414 15.8073 2 12 2C8.19273 2 5.71186 5.16414 5.71186 7.94511C5.71186 11.5054 4 11.3188 4 14.2205C4.23807 17.1352 6.69343 17.8476 12 17.8476Z"
      stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.2483 20.8574C12.9644 22.3721 10.9616 22.3901 9.66544 20.8574" stroke="#606060" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round"/>
</svg>

</span>
                    <span>
                    <div className="img-box">
                                            <img src={img}/>

                    </div>

            </span>
                </Grid>
<Grid item xs={12} md={0} className="input-phone">
    <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="  جست و جو"
    />

</Grid>


            </Grid>
        </div>
    )
}
export default Header