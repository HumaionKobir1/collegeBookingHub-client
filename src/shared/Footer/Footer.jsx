const Footer = () => {
    return (
        <div className=' bg-gray-300 mt-10'>
            <div className='md:w-5/6 mx-auto grid md:grid-cols-3 md:py-20 py-5 px-3'>
                <div className='md:border-e-2 text-black mb-3 md:mb-0'>
                    <h3 className='text-3xl mb-5'>Subscribe</h3>
                    <p className='mb-4'>Register and get notified about all the news & updates before it gets too late.</p>
                    <input className='rounded p-3' type="text" placeholder='Enter Your Email' /> <button className=' bg-blue-600 rounded-lg px-2 py-3 text-white hover:text-black border-none'>Sign up</button>
                </div>
                <div className='md:border-e-2 text-black md:px-20 mb-3 md:mb-0'>
                    <h3 className='text-3xl mb-5'>Explore</h3>
                    <p>Submit a Recipe</p>
                    <p className='my-2'>Our Chefs</p>
                    <p className='my-2'>Latest News</p>
                    <p>Contact</p>

                </div>
                <div className=' text-black md:px-20'>
                    <h3 className='text-3xl mb-5'>Contact</h3>
                    <p className='my-2'>787 Mark View Street, New Town, California</p>
                    <p>needhelp@admission.com</p>
                    <p className='my-2'>666 888 0000</p>
                </div>
            </div>
            <p className='text-center text-black p-2 -mt-5'><small>All rights reserved Collage Admission Hub</small></p>
        </div>
    );
};

export default Footer;