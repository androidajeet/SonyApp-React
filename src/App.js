import React from 'react';
import Layout from '../src/components/Layout/Layout';
import ProductCatalog from './containers/ProductCatelouge/ProductCatalog';
import { BrowserRouter as Router, Route ,Switch } from "react-router-dom";
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './containers/Cart/Cart';


function App() {
  return (
    <Router>
        <Layout>
          <Switch>
            <Route  exact  path="/" component={ProductCatalog} />
            <Route path="/details" component={ProductDetails} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </Layout>
    </Router>
  );
}

export default App;



//<ProductCatalog />






//import './App.css';
 //<div className="App">