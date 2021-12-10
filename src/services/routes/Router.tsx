import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from 'App';
import { Login } from 'features/auth/pages/Login';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
