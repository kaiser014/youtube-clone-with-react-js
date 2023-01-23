import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/homecomponent";
const Index = () => {
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}
export default Index;