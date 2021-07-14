import Cart from "./routes/Cart/Cart";
import Contacts from "./routes/Contacts/Contacts";
import Login from "./routes/Login/Login";
import DetailedView from "./routes/DetailedView/DetailedView";
import NotFound from "./routes/NotFound/NotFound";
import Books from "./routes/Books/Books";

export const routes = [
  {
    path: "/",
    exact: true,
    redirect: true,
    to: "/books",
  },
  {
    path: "/books",
    exact: true,
    component: Books,
  },
  {
    path: "/books/:id",
    exact: true,
    component: DetailedView,
  },
  {
    path: "/cart",
    exact: true,
    component: Cart,
  },
  {
    path: "/contacts",
    component: Contacts,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    component: NotFound,
  },
];
