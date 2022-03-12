import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'

const ProtectedRoute = ({ user, children, setIsModal, ...rest }) => {
  return (
    <>
      {console.count('Run from pro')}
      <Route
        {...rest}
        render={() => {
          if (user) {
            return children
          } else {
            // setIsModal(true)

            return <Redirect to={{ pathname: '/', state: true }} />
          }
        }}
      />
    </>
  )
}

export default ProtectedRoute
