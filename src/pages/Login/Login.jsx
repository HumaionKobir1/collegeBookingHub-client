import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { FcGoogle } from 'react-icons/fc'
import { useContext, useRef } from 'react'
import {TbFidgetSpinner} from 'react-icons/tb'
import { AuthContext } from '../../providers/AuthProvider'
import { saveUser } from '../../api/auth'

const Login = () => {
    const {signIn, setLoading, loading, resetPassword, signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const emailRef = useRef();

    // Handle submit
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            console.log(result.user);
            navigate(from, {replace: true});
        })
        .catch(err => {
            setLoading(false);
            console.log(err.message)
            toast.error(err.message);
        })
    }


    // Handle Google signIn
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
          // save user to db
          saveUser(result.user)
            console.log(result);
            navigate(from, {replace: true});
        })
        .catch(error => {
            setLoading(false);
            console.log(error.message)
            toast.error(error.message);
            
        })
    }

    // handle password reset
    const handleReset = () => {
        const email = emailRef.current.value;
        resetPassword(email)
        .then(() => {
            toast.success("Please check your email for reset link")
            setLoading(false);
        })
        .catch(error => {
            setLoading(false);
            console.log(error.message)
            toast.error(error.message);
            
        })
    }

  return (
    <div className='p-2 bg-gradient-to-r from-blue-500 to-purple-500'>
      <div className='md:w-[1000px] w-full p-2 rounded-md sm:p-10 justify-center mx-auto'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Log In</h1>
          <p className='text-sm text-gray-100'>
            Sign in to access your account
          </p>
        </div>
        <form
        onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
              ref={emailRef}
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-blue-800 hover:bg-blue-700 w-full rounded-md py-3 text-white'
            >
                {loading?<TbFidgetSpinner size={24} className='mx-auto animate-spin'></TbFidgetSpinner> : 'Continue'}
              
            </button>
          </div>
        </form>
        <div className='space-y-1'>
          <button onClick={handleReset} className='text-xs hover:underline hover:text-rose-800 text-gray-100'>
            Forgot password?
          </button>
        </div>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Login with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 hover:bg-blue-500 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-100'>
          Don't have an account yet?{' '}
          <Link
            to='/signUp'
            className='hover:underline hover:text-rose-900 text-rose-800'
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default Login;