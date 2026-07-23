import { Link } from "react-router";
import { Outlet } from "react-router";
function MainLayout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/CrudAxios">Crud Axios</Link>
          </li>
          <li>
            <Link to="/category">Kategori</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default MainLayout;
