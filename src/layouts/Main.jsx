import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

const Main = () => {
    return (
        <div className='bg-white'>
            <Header></Header>
            <div className='min-h-[calc(100vh-484px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;