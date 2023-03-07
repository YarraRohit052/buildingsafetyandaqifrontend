import "./Leftinfo.css";
import { Avatar } from "react-rainbow-components";
import userlogo from "../../images/logo.jpg";
const Leftinfo = () => {
    return (
        <div className="user__info__container">
            <div className="user__logo__container">
                <Avatar className="user__logo" src={userlogo} />
            </div>
            <div className="user__details__container">
                <h4 className="user__info__name">VISHNU INSTITUTE OF TECHNOLOGY</h4>
            </div>
        </div>
    );
};
export default Leftinfo;