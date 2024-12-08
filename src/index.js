import React, {Suspense} from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./store"
import Spinner from "./components/Spinner";

const App = React.lazy(() => import("./App"));

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <React.Fragment>
        <Provider store={store}>
            <Suspense fallback={<Spinner/>}>
                <App />
            </Suspense>
        </Provider>
    </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();