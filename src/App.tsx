import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import GamePage from "./pages/GamePage";
import AuthPage from "./pages/AuthPage";

function App() {
    const isAuth = true;

    return (
        <Routes>
            <Route path='/auth' element={<AuthPage />} />
            {isAuth &&
                <Route path='/chess' element={<GamePage />} />
            }
            <Route path="*" element={<Navigate to="/auth"/>}/>
        </Routes>
  );
}

export default App;
