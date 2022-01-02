import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAuth } from '../../modules/auth';

const ProtectedRoutes = () => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    // Redirect them to the /signin page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they sign in, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
