import { useContext, forwardRef } from "react";
import { ScrollContext } from "../Context/ScrollContext";

const Contact = forwardRef(function (props, ref) {
  const { contactRef } = useContext(ScrollContext);
  return (
    <div className="mx-5 mt-16 flex flex-col gap-5" ref={contactRef}>
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
