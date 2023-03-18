import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import Addflight from "./Addflight";
import Addholiday from "./Addholiday";
import { useRouteMatch } from "react-router-dom";
function Admin() {
  let { url, path } = useRouteMatch();
  return (
    <BrowserRouter>
      <div>
        <ul className="nav bg-dark text-white justify-content-evenly">
          <li className="nav-item">
            <Link className="nav-link text-light" to={`${url}/addflight`}>
              Add Flight
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to={`${url}/addholiday`}>
              Add Holiday Package
            </Link>
          </li>
        </ul>

        <Switch>
          <Route path={`${path}/addflight`}>
            <Addflight />
          </Route>
          <Route path={`${path}/addholiday`}>
            <Addholiday />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Admin;
