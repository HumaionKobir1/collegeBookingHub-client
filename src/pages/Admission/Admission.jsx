import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { TbFidgetSpinner } from 'react-icons/tb';
const img_hosting_token = import.meta.env.VITE_IMGBB_KEY;


const Admission = () => {
  const [loading, setLoading] = useState(false);
  const [colleges, setColleges] = useState([]);
  const [college, setCollege] = useState(null);
  const [ , setImage] = useState('');

  const url = 'http://localhost:5000/allCollage';
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setColleges(data)
        })
    }, [])

  const handleCollegeClick = (collegeName) => {
    setCollege(collegeName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const date = form.date.value;
    const address = form.address.value;
    const subject = form.subject.value;
    const image = form.image.files[0]
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      const admissionData = {
        image: data.data.display_url,
        name,
        email,
        subject,
        number,
        date,
        address,
      }
      fetch(`http://localhost:5000/admission`, {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(admissionData)
      })
      .then(res => res.json())
      .then(data => {
        toast.success('Add Class Successfully')
        console.log(data)
      })
      .catch(err => console.log(err))
  
      console.log(admissionData)
      setLoading(false);
    })
    

  };

  return (
    <div>
      
      <div className=" banner relative bg-gradient-to-r from-blue-500 to-purple-500 py-12">
                <div
                    className="absolute top-0 left-0 right-0 bottom-0 opacity-40 bg-black"
                />
                <div
                    className="absolute top-0 left-0 right-0 bottom-0"
                    
                />
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-10 relative">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                            Admission Your Dreams University
                        </h1>
                    </div>
                </div>
      </div>
      <h1 className='text-xl md:w-[1400px] mt-4 text-center border-b-4 rounded-lg w-full mx-auto p-2 text-gray-800'>Select Your University</h1>
      <div className="flex flex-wrap mb-4 md:w-[1400px] w-full mx-auto p-2">
        {colleges.slice(0, 7).map((collegeName) => (
          <div
            key={collegeName._id}
            className={`bg-white rounded-lg p-4  font-semibold text-blue-500 cursor-pointer mr-4 mb-4 ${
              college === collegeName ? 'border-2 border-blue-500' : ''
            }`}
            onClick={() => handleCollegeClick(collegeName)}
          >
            {collegeName.name}
          </div>
        ))}
      </div>
      <div className='border-b-2 -mt-5 mb-7'></div>
      {college && (
        <form onSubmit={handleSubmit} className="md:w-3/4 w-full mx-auto p-4 bg-white rounded-lg shadow-lg">
          <h3 className='text-center font-semibold -mt-8  border-b-2 border-r-2 border-l-2 rounded-lg mb-7 text-xl'> Fill Up the form</h3>
          <div className='flex gap-10'>
            <div className="mb-4 w-full">
              <label className="block text-sm font-bold mb-1">Candidate Name</label>
              <input
                type="text"
                name='name'
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-sm font-bold mb-1">Subject</label>
              <input
                type="text"
                name='subject'
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-1">Candidate Email</label>
            <input
              type="email"
              name='email'
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-1">Candidate Phone Number</label>
            <input
              type="tel"
              name='number'
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-1">Address</label>
            <input
              type="text"
              name='address'
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className='flex gap-10'>
            <div className="mb-4 w-full">
              <label className="block text-sm font-bold mb-1">Date of Birth</label>
              <input
                type="date"
                name='date'
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block text-sm font-bold mb-1">Image</label>
              <input
                type="file"
                onChange={(e) => setImage(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                accept="image/*"
                name='image'
                required
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
          >
            {loading?<TbFidgetSpinner size={24} className='mx-auto animate-spin'></TbFidgetSpinner> : 'Add Class'}
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Admission;