import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/2d34e7b8-bb59-4919-9f6f-385240a72928/files/f36e9704-5c48-444e-893b-3b6296f4b655.jpg"
          alt="Mentality Team Background"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </motion.div>

      {/* Anime character left side */}
      <motion.div
        className="absolute left-0 bottom-0 h-full z-10 pointer-events-none select-none"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.img
          src="https://cdn.poehali.dev/projects/2d34e7b8-bb59-4919-9f6f-385240a72928/files/4bc7eff3-e22d-4cd9-b75b-a3ffec45dd27.jpg"
          alt="Anime character"
          className="h-full w-auto object-contain object-bottom"
          style={{ maxWidth: "45vw" }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pink-600/30 to-transparent blur-xl" />
      </motion.div>

      {/* TEAM label top-left */}
      <motion.div
        className="absolute top-24 left-6 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <span className="text-white font-bold text-5xl md:text-7xl lg:text-8xl tracking-widest leading-none select-none">
          TEAM
        </span>
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="uppercase tracking-[0.4em] text-purple-400 text-sm mb-4">Киберспортивная команда</p>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-6">
          MENTALITY
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto opacity-80 leading-relaxed">
          Игра на победу. Мышление чемпиона.
        </p>
      </div>
    </div>
  );
}
