import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { Login } from 'features/auth/pages/Login';
import { Register } from 'features/auth/pages/Register';
import { DashboardPage } from 'features/dashboard/pages/DashboardPage';
import { FindInventory } from 'features/inventory/pages/FindInventory';
import { FindNeeds } from 'features/inventory/pages/FindNeeds';
import { MyInventory } from 'features/inventory/pages/MyInventory';
import { MyNeeds } from 'features/needs/pages/MyNeeds';
import { Transaction } from 'features/transactions/pages/transaction';
import { NotificationProvider } from 'services/notification/context/NotificationProvider';

import { Paths } from './Paths';
import { RequireAuth } from './RequireAuth';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route element={<Layout />}>
            <Route element={<NotificationProvider />}>
              <Route path={Paths.Inventory} element={<MyInventory />} />
              <Route path={Paths.Transactions} element={<Transaction />} />
              <Route path={Paths.Needs} element={<MyNeeds />} />
              <Route path={Paths.FindNeeds} element={<FindNeeds />} />
              <Route path={Paths.FindInventory} element={<FindInventory />} />
              <Route path={Paths.Transaction} element={<Transaction />} />
              <Route path={Paths.Dashboard} element={<DashboardPage />} />
            </Route>
          </Route>
        </Route>
        <Route path={Paths.Login} element={<Login />} />
        <Route path={Paths.Register} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
