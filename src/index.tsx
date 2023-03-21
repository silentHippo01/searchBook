import { render } from "react-dom";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import App from "./App";
import { StoreProvider } from "./App/Providers/StoreProvider/ui/StoreProvider";
import './index.scss';

render(
    <StoreProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root')
);