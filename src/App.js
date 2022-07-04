import React, { Suspense } from "react";
import "./App.css";
import ProductList from './components/ProductList';
import SaleCompleteItems from './components/SaleCompleteItems';
import AddProduct from "./components/AddProduct";
import Counter from "./components/Counter";
import { FilmList } from "./components/FilmList";
import Main from "./slices/main";

import FilmListRTK from "./features/people/filmListRTK";
// import CakeView  from './features/cake/CakeView'
// import IcecreamView  from './features/icecream/IcecreamView'
import ProfileTest from "./ListItem/performancetest"
import StateLocal from "./ListItem/StateLocal";
import Memozing from "./ListItem/Memozing";
import ReactMemo from "./ListItem/ReactMemo";

// const FilmListRTK    = React.lazy(() => import('./features/people/filmListRTK'))
const CakeView    = React.lazy(() => import('./features/cake/CakeView'))
const IcecreamView     = React.lazy(() => import('./features/icecream/IcecreamView'))

function App() {
  return (
    <div className="app">
      {/* <h1>rudux toolkit using in react</h1> */}
			{/* <AddProduct />
			<ProductList />
			<SaleCompleteItems/> */}
      {/* <Counter /> */}
      {/* <FilmList /> */}
      {/* <Main /> */}
      <Suspense fallback={<div>Loading...</div>}>
      <CakeView />
      <IcecreamView />
      </Suspense>
      <FilmListRTK  />
      <ProfileTest />
      <StateLocal />
      <Memozing />
      <ReactMemo />
    </div>
  );
}

export default App;
