import { Navigate } from 'react-router-dom';
import { getAuth } from './auth';

export default function PrivateRoute({ children }) {
  return getAuth() ? children : <Navigate to="/login" />;
}
