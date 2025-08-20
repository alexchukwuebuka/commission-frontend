import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/auth/Login';
import AdminRoutes from './AdminRoutes';
import LgaDashboard from '../pages/lga/LgaDashboard';
import Unauthorized from '../pages/errors/Unauthorized';
import ProtectedRoute from './ProtectedRoute';
import Home from '../pages/Home';
import Signup from '../pages/auth/Register';
import About from '../pages/about/About';
import Complaint from '../pages/complaints/Complaint';
import GalleryPage from '../pages/gallery/GalleryPage';
import NewsPage from '../pages/NewsPage/NewsPage';
import LocalGovernmentPage from '../pages/LocalGovernmentPage/LocalGovernmentPage';
import DcPage from '../pages/DevelopmentCenterPage/DcPage';
import Faq from '../pages/faq/Faq';

const AppRouter = () => {
  const route = 'http://localhost:5000'
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup route={route} />} />
      <Route path="/about" element={<About />} />
      <Route path="/development-centers" element={<DcPage/>} />
      <Route path="/local-governments" element={<LocalGovernmentPage/>} />
      <Route path="/news-and-updates" element={<NewsPage/>} />
      <Route path="/gallery" element={<GalleryPage/>} />
      <Route path="/complaints-$-reports" element={<Complaint/>} />
      <Route path="/faq" element={<Faq/>} />
      
      <Route
        path="/lga"
        element={
          <ProtectedRoute allowedRoles={['lga']}>
            <LgaDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<Home />} />

      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
    < AdminRoutes />
    </>
  );
};

export default AppRouter;
