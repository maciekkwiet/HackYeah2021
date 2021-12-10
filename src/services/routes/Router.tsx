import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from 'App';
import { Login } from 'features/auth/pages/Login';
import { Register } from 'features/auth/pages/Register';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
