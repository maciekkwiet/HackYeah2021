import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from 'App';
import { Login } from 'features/auth/pages/Login';
import { Register } from 'features/auth/pages/Register';

import { Paths } from './Paths';
import { RequireAuth } from './RequireAuth';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route path={Paths.Dashboard} element={<App />} />
        </Route>
        <Route path={Paths.Login} element={<Login />} />
        <Route path={Paths.Register} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
