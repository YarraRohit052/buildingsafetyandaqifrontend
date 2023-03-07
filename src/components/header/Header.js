import "./Header.css";
import Leftinfo from "./Leftinfo";
import Middleinfo from "./Middleinfo";
import Rightinfo from "./Rightinfo";
const Header = () => {
    return (
        <div className="app__bar">
            <div className="rightinfo__container">
                <Rightinfo />
            </div>
            <div className="middleinfo__container">
                <Middleinfo />
            </div>
            <div className="leftinfo__container">
                <Leftinfo />
            </div>
        </div>
    );
};
export default Header;