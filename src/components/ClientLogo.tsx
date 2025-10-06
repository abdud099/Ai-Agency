import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  "/images/logo/biogen.png",
  "/images/logo/France.png",
  "/images/logo/francetravail.png",
  "/images/logo/ipercut.png",
  "/images/logo/KB2M.png",
  "/images/logo/laposte.png",
  "/images/logo/orange_2.png",
  "/images/logo/orange.png",
  "/images/logo/Percut.png",
  "/images/logo/Suez_.png",
  "/images/logo/suez.png",
  "/images/logo/biogen.png",
  "/images/logo/Transamo_.png",
  "/images/logo/transamo.png",
  "/images/logo/vinci.png",
];

export const ClientLogos = () => {
  return (
    <div className="py-32 md:py-0">
      <div className="mx-auto relative overflow-hidden">
        <motion.div
          animate={{ x: [0, -1500] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 items-center"
        >
          {[...clients, ...clients, ...clients].map((logo, index) => (
            <div
              key={index}
              className="relative h-20 w-30 md:h-20 md:w-50 flex-shrink-0 opacity-100 invert"
            >
              <Image
                src={logo}
                alt="Client logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 80px, 120px"
                priority={index < 3}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
