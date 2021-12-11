import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'

const ProtectedRoute = ({ user, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (user) {
          return children
        }
        if (!user) {
          return <Redirect to='/login' />
        }
        return
      }}
    />
  )
}

export default ProtectedRoute
