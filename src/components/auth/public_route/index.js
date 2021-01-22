import { Route, Redirect } from 'react-router-dom';

const publicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('user')
      ? <Redirect to={{ pathname: '/notes' }} />
      : <Component {...props} />
  )} />
)

export default publicRoute;