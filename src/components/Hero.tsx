import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

function FireCanvas() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0"
          style={{ left: `${(i / 18) * 100}%` }}
          animate={{
            y: [0, -120 - Math.random() * 180, -200 - Math.random() * 200],
            x: [0, (Math.random() - 0.5) * 60, (Math.random() - 0.5) * 40],
            scaleX: [1, 1.3 + Math.random() * 0.4, 0.2],
            scaleY: [1, 1.2, 0.1],
            opacity: [0.9, 0.7, 0],
          }}
          transition={{
            duration: 1.8 + Math.random() * 1.4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeOut",
          }}
        >
          <div
            className="rounded-full blur-md"
            style={{
              width: `${24 + Math.random() * 40}px`,
              height: `${60 + Math.random() * 80}px`,
              background: `radial-gradient(ellipse at center, 
                ${Math.random() > 0.5 ? "#ff2200" : "#cc0000"} 0%, 
                #880000 40%, 
                #330000 75%, 
                transparent 100%)`,
            }}
          />
        </motion.div>
      ))}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`inner-${i}`}
          className="absolute bottom-0"
          style={{ left: `${5 + (i / 12) * 90}%` }}
          animate={{
            y: [0, -80 - Math.random() * 100, -160 - Math.random() * 120],
            x: [0, (Math.random() - 0.5) * 30],
            scaleX: [1, 1.1, 0.1],
            scaleY: [1, 1.4, 0.1],
            opacity: [1, 0.8, 0],
          }}
          transition={{
            duration: 1.2 + Math.random() * 1,
            repeat: Infinity,
            delay: Math.random() * 1.5,
            ease: "easeOut",
          }}
        >
          <div
            className="rounded-full blur-sm"
            style={{
              width: `${12 + Math.random() * 20}px`,
              height: `${30 + Math.random() * 50}px`,
              background: `radial-gradient(ellipse at center, 
                #ff6600 0%, 
                #ff2200 35%, 
                #990000 70%, 
                transparent 100%)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

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
        <FireCanvas />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
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
