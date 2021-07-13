import Cart from "./routes/Cart/Cart";
import Contacts from "./routes/Contacts/Contacts";
import Login from "./routes/Login/Login";
import DetailedView from "./routes/DetailedView/DetailedView";
import NotFound from "./routes/NotFound/NotFound";
import Books from "./routes/Books/Books";

export const routes = [
  {
    name: "home",
    path: "/",
    exact: true,
    redirect: true,
    to: "/books",
  },
  {
    name: "books",
    path: "/books",
    exact: true,
    component: Books,
  },
  {
    name: "books/:id",
    path: "/books/:id",
    exact: true,
    component: DetailedView,
  },
  {
    name: "name",
    path: "/cart",
    exact: true,
    component: Cart,
  },
  {
    name: "contacts",
    path: "/contacts",
    component: Contacts,
  },
  {
    name: "login",
    path: "/login",
    component: Login,
  },
  {
    name: "notFound",
    component: NotFound,
  },
];
