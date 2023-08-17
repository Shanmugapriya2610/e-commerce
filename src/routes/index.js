import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import routes from "./routes";
import Page404 from '../screens/page404';
import * as Layout from '../layout'
import './styles.scss'
import { NotificationContainer } from "react-notifications";
import Loader from "../components/loader";

const AppRoutes = () => {


  return (
    <div>

      <Router>
        <Routes>
          {routes.map(({
            layout,
            path,
            childrens,
          }, index) => {

            if (childrens) {
              const LayoutComponent = Layout[layout];

              return (
                childrens.map((
                  {
                    component,
                    childPath,
                    exact,
                  }, i
                ) => {
                  let comp = `${component}`.charAt(0).toLowerCase() + `${component}`.slice(1);
                  console.log(comp, "compppp")
                  const Component = require(`../screens/${comp}`).default;
                  console.log(Component, "Component")
                  return (
                    <Route
                      key={`${index}_${i}`}
                      path={`${path}${childPath}`}
                      exact={exact}
                      element={
                        <div>
                          <LayoutComponent>
                            <Component />
                          </LayoutComponent>
                          <Loader />
                        </div>

                      }
                    />
                  )


                })
              )
            } else {
              return (
                path === "*" ?
                  <Route
                    key={"page_404"}
                    path={path}
                    element={<Page404 />}
                  />
                  :
                  <Route
                    key={"init"}
                    path={path}
                    element={<Navigate to="/auth/login" />}
                  />
              )
            }

          })}

        </Routes>
        <NotificationContainer />
      </Router>

    </div>

  );
}


export default AppRoutes;