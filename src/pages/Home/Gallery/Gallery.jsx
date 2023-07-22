
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './gallery.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';



const Gallery = () => {
    return (
        

        <>
        <div className="mt-10 md:w-[1400px] w-full mx-auto p-2">
            <h1 className="md:text-4xl text-3xl font-semibold text-gray-800 text-center border-blue-400 rounded-lg p-2 border-b-4 md:w-96 w-72 mx-auto">Graduate's Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://img.freepik.com/premium-photo/successful-graduates-academic-gowns-hold-their-diplomas-look-camera-smile-outdoor-photo_195549-5204.jpg?size=626&ext=jpg&ga=GA1.2.1134145993.1684385584&semt=ais" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/premium-photo/graduate-looking-back-while-others-are-standing-each-other-raising-hands-front-their-university_259150-4384.jpg?size=626&ext=jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/premium-photo/group-cheerful-students-wearing-graduation-gowns-masters-caps_259150-4360.jpg?size=626&ext=jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/premium-photo/students-university-people-wearing-mantles-group-students_115086-788.jpg?size=626&ext=jpg&ga=GA1.1.1134145993.1684385584&semt=ais" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/premium-psd/student-education-school-academic-friends_53876-28074.jpg?size=626&ext=jpg&ga=GA1.1.1134145993.1684385584&semt=ais" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/portrait-graduated-boy_23-2148522210.jpg?size=626&ext=jpg&ga=GA1.1.1134145993.1684385584&semt=ais" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/group-friends-talking-street-after-class_1301-4284.jpg?size=626&ext=jpg&ga=GA1.1.1134145993.1684385584&semt=ais" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/portrait-group-students-celebrating-their-graduation_23-2148201864.jpg?size=626&ext=jpg&ga=GA1.1.1134145993.1684385584&semt=ais" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/portrait-group-students-celebrating-their-graduation_23-2148201866.jpg?size=626&ext=jpg&ga=GA1.1.1134145993.1684385584&semt=ais" />
        </SwiperSlide>
      </Swiper>
      </div>
    </>

    );
};

export default Gallery;