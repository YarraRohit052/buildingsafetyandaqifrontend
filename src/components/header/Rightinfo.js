import "./Rightinfo.css"
import { Avatar } from "react-rainbow-components";
import logo from "../../images/logo1.jpg";
const Rightinfo = () => {
    return (
        <>
            <div className="company__logo__container">
                <Avatar className="company__logo" src={logo} />
            </div>
            <div className="company__name__container">
                <h4 className="company__name">GREEN FUSION IoT SOLUTIONS</h4>
            </div>
        </>
    );
};
export default Rightinfo;