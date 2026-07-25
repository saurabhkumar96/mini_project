const Login = () => {
  return (
    <div>
        <button onClick={() => window.location.href = "http://localhost:5000/auth/google"}>Login with Google</button>
    </div>
  )
}

export default Login