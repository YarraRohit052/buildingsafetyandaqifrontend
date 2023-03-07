import "./Bodycontent.css";
import Marquee from "react-fast-marquee";
import Containers from "./Containers";
const Bodycontent = (props) => {
    return (
        <>
            <div className="bodycontent__container">
               <Containers/>
            </div>
            <Marquee>
                <div className="marquee">
                    <span>This project is executed by Surendra, Rohit, Deva Sai kiran, Prabhu, Chaitanya, Kotesh, Harsha under the mentorship of Dr.V.S.N. Narasimha Raju.</span>
                </div>
            </Marquee>
        </>
    );
};
export default Bodycontent;