import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/home';
import RegisterScreen from './screens/auth/register'
import LoginScreen from './screens/auth/login'
import NotesScreen from './screens/notes/index'
import UserEditScreen from './screens/users/edit'

import PrivateRoute from './components/auth/private_route';
import PublicRoute from './components/auth/public_route';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute exact path="/" component={HomeScreen} />
      <PublicRoute exact path='/register' component={RegisterScreen} />
      <PublicRoute exact path='/login' component={LoginScreen} />
      <PrivateRoute exact path='/notes' component={NotesScreen} />
      <PrivateRoute exact path='/users/edit' component={UserEditScreen} />
    </Switch>
  </BrowserRouter>
)

export default Routes;
