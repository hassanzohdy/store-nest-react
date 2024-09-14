import { reverseGuardedRoutes } from "../utils/router";
import RegisterPage from "./pages/register-page/RegisterPage";

reverseGuardedRoutes([
  { path: "/account/register", component: RegisterPage }, //if user already loggedIn return back home page
]);
