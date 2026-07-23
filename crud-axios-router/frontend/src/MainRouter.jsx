import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layout/mainLayout";
import Home from "./pages/Home";
import CrudAxios from "./pages/CrudAxios";
import NoMatch from "./pages/NoMatch";
import TableCategory from "./pages/category/TableCategory";
import FormCategory from "./pages/category/FormCategory";

const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="CrudAxios" element={<CrudAxios />} />
            <Route path="category" element={<TableCategory />} />
            <Route path="category/create" element={<FormCategory />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
