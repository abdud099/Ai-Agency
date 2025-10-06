import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const trainers = [
  {
    name: "Laurent Alvaro",
    role: "CTO",
    description:
      "A passionate engineer, musician and procedural artist, Laurent has been leading BeTomorrow's technical direction and R&D activities for 2 decades. He shares his creativity through training workshops in mathematics, artificial intelligence and data.",
    link: "/images/people/laurent-alvaro.jpg",
  },
  {
    name: "Paul Breton",
    role: "AI and Data Tech Lead",
    description:
      "Paul is BeTomorrow's AI and data solutions architect. Committed to research and technology watch activities, Paul explores AI to deliver the most innovative and powerful solutions to our customers.",
    link: "/images/people/paul-breton.jpg",
  },
  {
    name: "Tom Rethaller",
    role: "R&D Engineer - Generative AI Expert",
    description:
      "With a brilliant background in the world of video games, Tom stands out for creating unique and innovative interactive experiences. Two years ago, he naturally turned to generative AI for ever richer and more original projects.",
    link: "/images/people/tom-rethaller.jpg",
  },
];

export const TrainingTeam = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-left"
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
              YOUR
            </h2>
            <h4 className="text-4xl md:text-5xl lg:text-6xl italic px-4 md:px-12 font-extralight">
              — TRAINING TEAM
            </h4>
          </div>
          <p className="text-base sm:text-lg mt-4 mx-auto lg:mx-0">
            Our experts who will help you make a real difference in your market.
          </p>
        </motion.div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="w-full max-w-xs md:max-w-lg flex flex-col items-center"
            >
              {/* Image / Banner */}
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden">
                <Image
                  src={trainer.link}
                  alt={trainer.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="py-4 flex flex-col flex-grow texct ">
                <h4 className="text-3xl font-semibold">{trainer.name}</h4>
                <p className="text-xl font-medium mb-3 text-gray-500">
                  {trainer.role}
                </p>
                <p className="text-lg leading-relaxed tracking-tight">
                  {trainer.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
