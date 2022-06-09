import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { authentication } from "./Firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import SignIn from "./SignIn";
import Home from "./Home";

const App = () => {
  const [isSigned, setIsSigned] = useState(true);
  onAuthStateChanged(authentication, (user) => {
    if (user) {
      return setIsSigned(true);
    }
    return setIsSigned(false);
  });

  if (isSigned === true) {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </>
    );
  } else {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
          </Routes>
        </Router>
      </>
    );
  }
};

export default App;
