import { Routes, Route } from "react-router-dom"
import { ERoutes } from "../utils/constants/route-constants";
import Landing from "../pages/landing/Landing";
interface IProps {
  // Define your props here
}

export default function Router({}: IProps) {
  return (
    <Routes>
        <Route path={ERoutes.landing}>
            <Route index element={<Landing />}/>
        </Route>
    </Routes>
  );
}