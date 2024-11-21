import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LandingPage } from './pages/LandingPage';
import { SuperAdminDashboard } from './pages/SuperAdminDashboard';
import { CompanyDashboard } from './pages/CompanyDashboard';
import { UserDashboard } from './pages/UserDashboard';
import { FormBuilder } from './pages/FormBuilder';
import { FormView } from './pages/FormView';
import { Login } from './pages/Login';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useAuthStore } from './store/authStore';

function App() {
  const { isAuthenticated, user } = useAuthStore();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />} />
        
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={
              user?.role === 'SUPER_ADMIN' ? <SuperAdminDashboard /> :
              user?.role === 'COMPANY_ADMIN' ? <CompanyDashboard /> :
              <UserDashboard />
            } />
            <Route path="/forms/new" element={<FormBuilder />} />
            <Route path="/forms/:formId" element={<FormView />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}