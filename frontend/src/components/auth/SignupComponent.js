import {useState, useEffect} from 'react'
import {signup, isAuth} from '../../../actions/auth'
import Router from 'next/router'

const SignupComponent = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    loading: false,
    message: '',
    showForm: false
   })

  const {name, email, password, error, loading, message, showForm} = values

  useEffect(() => {
    isAuth() && Router.push(`/`);
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handingl submit')
    setValues({...values, loading: true, error: false})
    const user = {name, email, password}

    signup(user)
    .then(data => {
      if(data.error) {
        setValues({...values, error: data.error})
      } else {
        setValues({...values, name: '', email: '', password: '', error: '', loading: false, message: data.message })
      }
    })
  }

  const handleChange = name => e => {
    setValues({...values, error: false, [name]: e.target.value})
  }

  const showLoading = () => (loading ? <div className="alert alert-info"> Loading... </div> : '');
  const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
  const showMessage = () => (message ? <div className="alert alert-info"> {message} </div> : '');


  const signupForm = () => {
    return(
      <div class="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input value={name} onChange={handleChange('name')} type="text" className="form-control" placeholder="Type your name"/>
          </div>

          <div className="form-group">
            <input value={email} onChange={handleChange('email')} type="email" className="form-control" placeholder="Type your email"/>
          </div>

          <div className="form-group">
            <input value={password} onChange={handleChange('password')} type="password" className="form-control" placeholder="Type your password"/>
          </div>

          <div>
            <button class="btn btn-primary">Sign Up</button>
          </div>
        </form>
      </div>
    )
  }

  return (
    <React.Fragment>
      {showError()}
      {showLoading()}
      {showMessage()}
      <h1>This is the sign up page</h1>
      /*{showForm && signupForm()}*/
      {signupForm()}
    </React.Fragment>
  )
}

export default SignupComponent
