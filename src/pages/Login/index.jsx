import React from 'react'
import './login.style.css'
import img from '../../assets/eating.svg'
import Button from '../../component/Button'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
      <div className='container loginContainer'>
        <h1 className='loginH1'>Login</h1>
        <div className='flexContainer'>
          <div className='loginLeft'>
            <form>
              <div className='form-group'>
                <label className='text-muted'>Email</label>
                <input
                  type='email'
                  name='email'
                  placeholder='Enter Email'
                  required
                  className='form-control'
                />
              </div>
              <div className='form-group'>
                <label className='text-muted'>Password</label>
                <input
                  type='password'
                  name='password'
                  placeholder='Enter Password'
                  required
                  className='form-control'
                />
              </div>
              <Button>Sign In</Button>
            </form>
            <div className='formBottom'>
              <p>
                Dont have account <Link to='/register'>Register</Link>
              </p>
            </div>
          </div>
          <div className='loginRight'>
            <img src={img} alt='LoginImg' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
