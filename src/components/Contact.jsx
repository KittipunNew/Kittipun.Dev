import { useContext, forwardRef, useEffect } from 'react';
import { ScrollContext } from '../Context/ScrollContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = forwardRef(function (props, ref) {
  const { contactRef } = useContext(ScrollContext);

  useEffect(() => {
    AOS.init({
      duration: 1000, // ระยะเวลา animation (ms)
      offset: 100, // ระยะห่างก่อนเริ่มแสดง animation
      once: false, // เล่นแค่ครั้งเดียว (true) หรือเล่นทุกครั้งที่ scroll (false)
    });
  }, []);
  return (
    <div
      className="mx-5 mt-16 flex flex-col gap-5"
      ref={contactRef}
      data-aos="fade-up"
    >
      <h1 className="font-montserrat font-bold text-3xl lg:text-5xl">
        Contact
      </h1>
      <div className="flex items-center gap-2 lg:gap-5">
        <box-icon name="phone" type="solid" size="md"></box-icon>
        <div className="font-montserrat lg:text-xl">
          <p>PHONE</p>
          <p>093-106-0679</p>
        </div>
      </div>
      <div className="flex items-center gap-2 lg:gap-5">
        <box-icon name="envelope" type="solid" size="md"></box-icon>
        <div className="font-montserrat lg:text-xl">
          <p>EMAIL</p>
          <p>kittipun.dev@gmail.ccom</p>
        </div>
      </div>
    </div>
  );
});

export default Contact;
