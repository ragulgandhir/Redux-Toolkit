import React, { lazy, Suspense } from "react";
import "./App.css";
import ProductList from './components/ProductList';
import SaleCompleteItems from './components/SaleCompleteItems';
import AddProduct from "./components/AddProduct";
import Counter from "./components/Counter";
import { FilmList } from "./components/FilmList";

// import FilmListRTK from "./features/people/filmListRTK";
// import CakeView  from './features/cake/CakeView'
// import IcecreamView  from './features/icecream/IcecreamView'
// import ListItems from "./ListItem/ListItem";

const FilmListRTK    = lazy(() => import('./features/people/filmListRTK'))
const CakeView    = lazy(() => import('./features/cake/CakeView'))
const IcecreamView     = lazy(() => import('./features/icecream/IcecreamView'))
const ListItems     = lazy(() => import('./ListItem/ListItem'))

function App() {
  return (
    <div className="app">
      {/* <h1>rudux toolkit using in react</h1> */}
			{/* <AddProduct />
			<ProductList />
			<SaleCompleteItems/> */}
      {/* <Counter /> */}
      {/* <FilmList /> */}
      <Suspense fallback={<div>Loading...</div>}>
      <CakeView />
      <IcecreamView />
      <FilmListRTK  />
      <ListItems />
      </Suspense>
    </div>
  );
}

export default App;
