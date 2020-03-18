import React, { useState, useCallback } from "react";
import { Router, navigate } from "@reach/router";
import "./styles.css";
import Home from "./Home";
import Public from "./Public";
import Notifications from "./Notifications";
import Bookmarks from "./Bookmarks";
import useFunctionCalls from "./useFunctionCalls";
import TabBar from "./TabBar";

export default function App() {
  const [path, setPath] = useState("/");
  
  const handlePath = useCallback((e, toPath) => {
    setPath(toPath);
    navigate(toPath);
  }, []);
  
  
  // You can uncomment this for experimenting.
  /*
  const handlePath = (e, toPath) => {
    setPath(toPath);
    navigate(toPath);
  }
  */
 
  const calls = useFunctionCalls([handlePath]);

  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Public path="public" />
        <Notifications path="notifications" />
        <Bookmarks path="bookmarks" />
      </Router>
      <h1>Function calls: {calls}</h1>
      <TabBar handlePath={handlePath} value={path} />
    </div>
  );
}
