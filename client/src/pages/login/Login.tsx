import { useDispatch } from "react-redux"
import { setIsAuthenticated } from "../../redux/slices/app"

const Login = () => {

    

    const dispatch = useDispatch()
  return (
    <div>
        <h1>Login Page</h1>
        <button
        onClick={() => {
            dispatch(setIsAuthenticated(true))
        }}
        >Login</button>
    </div>
  )
}

export default Login