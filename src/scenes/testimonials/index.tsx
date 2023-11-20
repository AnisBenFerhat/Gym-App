import { SelectedPage, testimonialType } from "@/shared/types";
import { motion } from "framer-motion";
import Testimonial from "./Testimonial";
import Htext from "@/shared/Htext";
import Person1 from '@/assets/person1.jpg'
import Person2 from '@/assets/person2.jpg'
import Person3 from '@/assets/person3.jpg'

const testimonials: Array<testimonialType> = [
  {
    id: 1,
    name: "Sophia Johnson",
    image: Person1,
    title: "Freelance Writer",
    testimonial:
      "Joining this gym has been a life-changer! The variety of classes and expert trainers make every workout exciting. I've seen incredible results and feel more energized every day..",
  },
  {
    id: 2,
    name: "David Williams",
    image: Person3,
    title: "Graphic Designer",
    testimonial:
      "This gym is more than just a fitness center. It's a community! The trainers are knowledgeable and caring. I've reached fitness goals I never thought possible thanks to their guidance.",
    },
    {
      id: 3,
      name: "Emma Davis",
      image: Person2,
      title: "Software Developer",
      testimonial:
      "I've been a member here for years, and I can confidently say it's the best gym in town. The equipment, friendly atmosphere, and supportive staff keep me motivated to stay fit.",
    },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Testimonials = ({ setSelectedPage }: Props) => {
  return (
    <section id="testimonials" className="mx-auto min-h-full w-5/6 py-20 mt-4">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        className=""
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-4/5"
        >
          <Htext>TESTIMONIALS</Htext>
          <p className="py-5">
            Hear from our amazing clients about their experiences and how our 
            services have made a difference in their lives.
          </p>
        </motion.div>
        <div className="mt-16 items-center justify-between gap-20 text-center md:mt-28 md:flex">
          <div className="lg:gap-x-12 grid gap-x-6 md:grid-cols-3">
            {testimonials &&
              testimonials.map((item: testimonialType) => (
                <Testimonial
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  testimonial={item.testimonial}
                />
              ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;