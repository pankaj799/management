import React, { lazy, Suspense } from 'react'
import { Provider } from "react-redux"
import store from "./store"
import './App.css';
import 'antd/dist/antd.css';
const AppRouter = lazy(() => import('./routes'))

const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<div className={'text-center mt-3'}>Loading Please Wait....</div>}>
        <AppRouter />
      </Suspense>
    </Provider>
  );
}

export default App;
