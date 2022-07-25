import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./home/Home";
import Contact from "./about/Contact";
import Gallery from "./gallery/Gallery";
import Error404 from "./Error404";
import Blog from "./blog/Blog";
import ScrollToTop from "./util/ScrollToTop";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<App />} >
                <Route index element={<Home />} />
                <Route path="about" element={<Contact />} />
                {/*ToDo: Gallery: */}
                <Route path="gallery" element={<Gallery />} />
                <Route path="blog" element={<Blog />} >
                    <Route path=":blogId" element={<Blog />} />
                </Route>
                <Route
                    path="*"
                    element={<Error404 />}
                />
            </Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
