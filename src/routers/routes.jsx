import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./router";
import Announcements from "../Components/announcements";
import LoginPage from "../Components/login";
import AnnouncementDetail from "../Components/announcementDetail";
import ProtectedRoute from "./ProtectedRoute";
import NoPageFound from "../Components/NoPageFound";



// import NotFound from 'pages/notFound';
export default class AllRoutes extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Routes>

            <Route element={<ProtectedRoute />}>
              <Route
                path={"/announcements"}
                element={
                  <Announcements />
                }
              />
              <Route
                path="/posts"
                element={<AnnouncementDetail />}
              />
            </Route>
            <Route
              path={"*"}
              element={<NoPageFound />}
            />
            <Route path={"/"} element={<LoginPage />} />

          </Routes>
        </Router>
      </React.Fragment>
    );
  }
}
