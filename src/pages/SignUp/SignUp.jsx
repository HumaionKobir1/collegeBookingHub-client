import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { FcGoogle } from 'react-icons/fc'
import { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider'
import {TbFidgetSpinner} from 'react-icons/tb'
import { saveUser } from '../../api/auth'


const SignUp = () => {
  const { setLoading, loading, signInWithGoogle, createUser, updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const img_hosting_token = import.meta.env. VITE_IMGBB_KEY;

  // Handle user registration
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // Image Upload
    const image = form.image.files[0]
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    fetch(url, {
      method: 'POST',
      body: formData,
    })
    .then(res => res.json())
    .then(imageData => {
     const imageUrl = (imageData.data.display_url)
      createUser(email, password)
      .then(result => {        
        console.log(result);
        updateUserProfile(name, imageUrl)
        .then(() => {
          toast.success('SignUp successful')

        // save user to db
          saveUser(result.user)

          navigate(from, {replace: true});
        })
        .catch(error => {
            setLoading(false);
            console.log(error.message)
            toast.error(error.message);
            
        })
      })
      .catch(error => {
          setLoading(false);
          console.log(error.message)
          toast.error(error.message);
          
      })

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

        navigate(from, {replace: true});
    })
    .catch(error => {
        setLoading(false);
        toast.error(error.message);
        
    })
}

  return (
    <div className='p-2 bg-gradient-to-r from-blue-500 to-purple-500'>
      <div className='w-[1000px] p-6 rounded-md sm:p-10 justify-center mx-auto'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-gray-100'>welcome to Our Website</p>
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
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
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
              className='bg-blue-800 hover:bg-blue-700  w-full rounded-md py-3 text-white'
            >
                {loading?<TbFidgetSpinner size={24} className='mx-auto animate-spin'></TbFidgetSpinner> : 'Continue'}
              
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm  dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div onClick={handleGoogleSignIn} className='flex justify-center hover:bg-blue-500 items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-200'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-rose-500 text-rose-800'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default SignUp