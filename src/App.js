import React from 'react';
import { NavbarComponent } from './components';
import { BrowserRouter, Outlet } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <main>
        <Outlet />
      </main>
    </BrowserRouter>
  );
}

export default App;
