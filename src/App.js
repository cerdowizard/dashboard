import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/login";
import List from "./Pages/List/List";
import SinglePage from "./Pages/singlePage/Single";
import New from "./Pages/New/New";
const App = () => {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="users">
          <Route index element={<List />} />
          <Route path=":userId" element={<SinglePage/>} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="products">
          <Route index element={<List />} />
          <Route path=":productId" element={<SinglePage/>} />
          <Route path="new" element={<New />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>;
};

export default App;
