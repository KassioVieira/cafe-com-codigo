import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

import Layout from "./components/Layout";
import CartProvider from "./shared/contexts/CartContext";

const Product = withRouter(lazy(() => import("./pages/Product")));

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<div />}>
        <CartProvider>
          <Layout>
            <Switch>
              <Route path="/" exact component={Product} />
            </Switch>
          </Layout>
        </CartProvider>
      </Suspense>
    </Router>
  );
};

export default Routes;
