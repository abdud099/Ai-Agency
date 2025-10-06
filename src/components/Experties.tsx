import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const expertises = [
  {
    title: "Large Language Model (LLM)",
    description:
      "Large Language Models (LLMs) are capable of analyzing and interpreting virtually unlimited amounts of textual data, while solving problems in an automated way. Our AI agency has seasoned expertise in developing this technology and delivering tailor-made results to companies in their projects.",
  },
  {
    title: "Large Multimodal Models (LMM)",
    description:
      "Multi-modal models (LMMs) are technologies that enable companies to analyze images, photos, videos and even handwritten documents in real time. Thanks to our expertise, we harness the power of LMMs to transform complex data into concrete actions tailored to business needs.",
  },
  {
    title: "Retrieval Augmented Generation (RAG)",
    description:
      "RAG combines information retrieval and content generation, exploiting external data beyond training limits. Our AI agency has delivered 10+ RAG projects in production, including RAGtime — an innovative tool for performance assessment and monitoring.",
  },
  {
    title: "Natural Language Processing (NLP)",
    description:
      "NLP enables corporate IT systems to understand and interact with human language. We develop applications that automate operations, improve productivity and simplify business processes with cutting-edge NLP.",
  },
  {
    title: "Machine Learning",
    description:
      "Machine learning is revolutionizing automation across industries. Our agency develops predictive algorithms, image analysis, document recognition and sentiment analysis tools customized for every sector.",
  },
  {
    title: "Data Analysis and Utilization",
    description:
      "Data analysis is at the heart of digital transformation. We design solutions for trend detection, predictive analysis, automated segmentation and large-scale data extraction to empower decision-making.",
  },
];

export const Experties = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row text-white/80 justify-between"
        >
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
              OUR EXPERTISES
            </h2>
            <h4 className="text-4xl md:text-5xl lg:text-6xl italic px-4 md:px-12 font-light">
              — IN AI
            </h4>
          </div>

          <p className="text-lg md:text-xl max-w-md mt-6 md:mt-0 text-white/80">
            With over 20 years&apos; experience, BeTomorrow has developed
            recognized digital expertise. Our engineers, averaging 10+ years of
            experience, excel in designing, deploying and maintaining
            tailor-made AI solutions.
          </p>
        </motion.div>

        {/* Expertise Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertises.map((expertise, index) => (
            <motion.div
              key={expertise.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 text-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col">
                {/* Title */}
                <h4 className="text-xl sm:text-2xl font-semibold mb-4">
                  {expertise.title}
                </h4>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed flex-1">
                  {expertise.description}
                </p>

                {/* Small underline effect */}
                <div className="mt-4 w-0 h-0.5 bg-white/80 transition-all duration-500 group-hover:w-20"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
