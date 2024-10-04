import { URLS } from "shared/utils/urls";
import { publicRoutes, reverseGuardedRoutes } from "../utils/router";
import AccountDashboardPage from "./pages/AccountDashboardPage";
import AccountDetailsPage from "./pages/AccountDetailsPage";
import AccountOrderPage from "./pages/AccountOrdersPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage/ForgetPasswordPage";
import LoginPage from "./pages/Login/LoginPage";
import MyAddressessPage from "./pages/MyAddressessPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ResetPassword from "./pages/RestPassword";
import TrackOrderPage from "./pages/TrackOrderPage";

// i will change it to guardedRoutes
publicRoutes([
  {
    path: URLS.account.dashboard,
    component: AccountDashboardPage,
  },
  {
    path: URLS.account.orders,
    component: AccountOrderPage,
  },
  {
    path: URLS.account.trackOrder,
    component: TrackOrderPage,
  },
  {
    path: URLS.account.addresses,
    component: MyAddressessPage,
  },
  {
    path: URLS.account.details,
    component: AccountDetailsPage,
  },
  {
    path: URLS.account.resetPassword,
    component: ResetPassword,
  },
  {
    path: URLS.auth.login,
    component: LoginPage, 
  },
  { path: URLS.auth.register, component: RegisterPage },
  { path: URLS.auth.forgetPassword, component: ForgetPasswordPage },
]);
