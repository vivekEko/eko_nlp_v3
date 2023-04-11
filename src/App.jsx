import Login from "./pages/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";
import UserCreateSurvey from "./pages/UserCreateSurvey";
import UserShareSurvey from "./pages/UserShareSurvey";
import UserResponseSurvey from "./pages/UserResponseSurvey";
import UserAnalyticsSurvey from "./pages/UserAnalyticsSurvey";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Navigate to={"/login"} replace={true} />} />
        {/* <Route element={<LandingPage />} path={"/"} /> */}
        <Route element={<Login />} path={"/login"} />
        <Route
          element={<UserCreateSurvey />}
          path={"/user_dashboard/create_survey"}
        />

        <Route
          element={<UserShareSurvey />}
          path={"/user_dashboard/share_survey"}
        />

        <Route
          element={<UserResponseSurvey />}
          path={"/user_dashboard/response_survey"}
        />

        <Route
          element={<UserAnalyticsSurvey />}
          path={"/user_dashboard/analytics_survey"}
        />
      </Routes>
    </div>
  );
}

export default App;
