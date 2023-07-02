import { Route,  useNavigate ,Navigate} from 'react-router-dom'
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({children, ...rest}) =>{
    const navigate = useNavigate()
    let {user} = useContext{AuthContext}
    if (!authenticated) {
        return <Navigate to="/login" />;
      }
    
      // 其他组件渲染逻辑
      return <div>Authenticated content</div>;
    };



export default PrivateRoute;