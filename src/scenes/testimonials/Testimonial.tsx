import { motion } from "framer-motion";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";

type Props = {
  name: string;
  image: string;
  title?: string;
  testimonial: string;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1 },
};

const Testimonial = ({ name, image, title, testimonial }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4 }}
      variants={childVariant}
      className="mb-12 md:mb-0 mx-8 mt-8"
    >
      <div className="mb-6 flex justify-center">
        <img
          src={image}
          className="w-32 rounded-full shadow-lg"
          alt="testimonials"
        />
      </div>
      <h5 className="mb-4 text-lg font-bold text-black">{name}</h5>
      <h6 className="mb-4 font-medium text-primary-500">{title}</h6>
      <p className="mb-4">
      <div className="mb-4 flex items-center">
        <FaQuoteLeft className="text-primary-500 mr-2" />
        <p className="flex-1">{testimonial}</p>
        <FaQuoteRight className="text-primary-500 ml-2" />
      </div>
      </p>
    </motion.div>
  );
};

export default Testimonial;