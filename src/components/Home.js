import React from "react";
import Header from "./Header";
import SlideBar from "./SlideBar";
import Weather from "./Weather";
import Page from "../pages/Page";
import Cricket from "./Cricket";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function Home() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex" }}>
            <Router>
            <SlideBar />
              <Routes>
                <Route exact path="/" element={<Page cat="World" />} />
                <Route exact path="/Business" element={<Page cat="Business" />} />
                <Route
                  path="/Entertainment"
                  element={<Page cat="Entertainment" />}
                />
                <Route path="/Health" element={<Page cat="Health" />} />
                <Route path="/Science" element={<Page cat="Science" />} />
                <Route path="/Sports" element={<Page cat="Sports" />} />
                <Route path="/Technology" element={<Page cat="Technology" />} />
              </Routes>
            </Router>
          </div>
          <div style={{ top: "0", position: "sticky", height: "fit-content" }}>
            <Weather />
            <Cricket />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
