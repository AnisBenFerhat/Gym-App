import { ClassType, SelectedPage } from "@/shared/types";
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";
import Class from './Class'


const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Sculpt your body with strength and power in these intensive sessions designed to build muscle and enhance endurance.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Focus on your core strength and stability, shaping a powerful and resilient foundation for overall fitness.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
    "Tailored workouts crafted to boost your overall fitness level, offering a variety of exercises for a holistic approach.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Comprehensive and specialized training sessions crafted to refine your skills and elevate your fitness regime.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{delay: 0.2, duration: 0.5}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x: 0}
           }}
        >
          <div className="md:w-3/5">
            <Htext>OUR CLASSES</Htext>
            <p className="py-5">Discover a diverse range of classes from Yoga to HIIT, guided by expert trainers, 
              shaping your path to a healthier lifestyle</p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>

        </div>

      </motion.div>
    </section>
  )
}
export default OurClasses;