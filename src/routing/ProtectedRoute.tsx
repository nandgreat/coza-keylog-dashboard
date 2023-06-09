import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import useLocalStorage from '../hooks/useLocalStorage';
import { User } from '../models/user';

const ProtectedRoute = () => {
  const [user] = useLocalStorage<User>('user_data', { name: "", token: "" });

  // useEffect(() => {
  //   if (user.name == "") navigate('/auth/signin')
  // }, [])

  // show unauthorized screen if no user is found in redux store
  if (user.name == "") {
    return (
      <div className=''>
        <h1>Unauthorized :(</h1>
        <span>
          <NavLink to='/'>Login</NavLink> to gain access
        </span>
      </div>
    )
  }

  return <Outlet />
}

export default ProtectedRoute
