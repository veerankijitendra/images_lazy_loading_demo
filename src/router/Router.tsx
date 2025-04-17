import { Routes, Route } from "react-router-dom"
import { ERoutes } from "../utils/constants/route-constants";
import Landing from "../pages/landing/Landing";
import ErrorPage from "../components/errorPage/ErrorPage";
import ReactLazyLoad from "../pages/react-lazyload/ReactLazyLoad";
interface IProps {
  // Define your props here
}

export default function Router({}: IProps) {
  return (
    <Routes>
        <Route path={ERoutes.landing}>
            <Route index element={<Landing />}/>
            <Route path={ERoutes.lazyLoadComponent} element={<ReactLazyLoad  />} />
        </Route>
        <Route path="*" element={<h1>Route Not Found</h1>} />
    </Routes>
  );
}