import { Routes, Route } from "react-router-dom"

interface IProps {
  // Define your props here
}

export default function Router({}: IProps) {
  return (
    <Routes>
        <Route path="/">
            <Route index element={<h1>HOme</h1>}/>

        </Route>
    </Routes>
  );
}