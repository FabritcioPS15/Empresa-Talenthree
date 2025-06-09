import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const companies = [
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbAfNf4_sWAhQTLH6c7-6Msl6k9_-SdClpw&s',
  },
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCusXVB3HjNe1WD3OijuIQLs32YLrx5ECmQ&s',
  },
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqk2eJ4vjJ7F3Fm_LAaT0M1k5jJjYMvx2MRw&s',
  },
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt2roPGDQaXJhKOVuU3tf-xNWJIi-cCIiPqA&s',
  },
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbqp_gzyxjdJS2cy-MSKuFRT2eyX_TU94UqQ&s',
  },
  {
    logo: 'https://yt3.googleusercontent.com/IY4fmz52J_4sn2JVpgwwu2qDF69Oj3cQb_pGr6zw8sUiUrnbJCJmgk3PvRf84D4Ws4ZmWCfvhrs=s900-c-k-c0x00ffffff-no-rj',
  },
];

const CompanyCarousel: React.FC = () => {
  return (
    <section className="py-8 bg-primary-100 dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-center mb-2">
        </h2>
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="py-4"
        >
          {companies.map((company, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-2 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-2">
                  <img
                    src={company.logo}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CompanyCarousel;