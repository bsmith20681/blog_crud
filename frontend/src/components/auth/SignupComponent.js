import {useState} from 'react'

const SignupComponent = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    loading: false,
    message: '',
    showForm: true
  })

  const {name, email, password, error, loading, message, showForm} = values


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handingl submit')
  }

  const handleChange = name => e => {
    setValues({...values, error: false, [name]: e.target.value})
  }

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
      {signupForm()}
    </React.Fragment>
  )
}

export default SignupComponent
