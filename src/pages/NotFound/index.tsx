import { Navigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  console.warn('404 not found: redirected to home page');
  return <Navigate to="/" replace />;
};

export default NotFoundPage;
