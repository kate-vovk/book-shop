import Goods from "./routes/Goods/Goods";
import Cart from "./routes/Cart/Cart";
import Contacts from "./routes/Contacts/Contacts";
import Login from "./routes/Login/Login";

export const routes = [
  {
    path: "/",
    exact: true,
    redirect: true,
    to: "/books",
  },
  {
    path: "/books",
    component: Goods,
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
];
