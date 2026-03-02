import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const upcoming = [
  { date: "15 МАР 2026", name: "Spring Invitational", format: "Online · 5v5", status: "Регистрация открыта" },
  { date: "28 МАР 2026", name: "Regional League S3", format: "LAN · Москва", status: "Подтверждено" },
  { date: "10 АПР 2026", name: "Open Cup 2026", format: "Online · 5v5", status: "Скоро" },
];

const results = [
  { date: "Фев 2026", name: "Winter Series", result: "1 место", score: "3 : 0" },
  { date: "Янв 2026", name: "CIS Championship", result: "2 место", score: "2 : 3" },
  { date: "Дек 2025", name: "Year End Cup", result: "1 место", score: "3 : 1" },
  { date: "Ноя 2025", name: "Autumn Clash", result: "3 место", score: "2 : 3" },
];

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <>
      {/* Ближайшие турниры */}
      <div id="tournaments" className="bg-white px-6 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <h3 className="uppercase mb-4 text-sm tracking-widest text-neutral-500">Расписание</h3>
          <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-16 leading-tight">
            БЛИЖАЙШИЕ<br />ТУРНИРЫ
          </h2>
          <div className="flex flex-col gap-4">
            {upcoming.map((t) => (
              <div
                key={t.name}
                className="flex flex-col sm:flex-row sm:items-center justify-between border border-neutral-200 p-6 hover:border-purple-500 transition-all duration-300 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                  <span className="text-purple-600 font-mono text-sm font-bold">{t.date}</span>
                  <div>
                    <h4 className="text-neutral-900 font-bold text-lg">{t.name}</h4>
                    <p className="text-neutral-500 text-sm">{t.format}</p>
                  </div>
                </div>
                <span className="mt-3 sm:mt-0 text-sm border border-purple-200 text-purple-700 px-3 py-1 w-fit">
                  {t.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Параллакс-секция с результатами */}
      <div
        ref={container}
        className="relative flex items-center justify-center h-screen overflow-hidden"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
          <motion.div style={{ y }} className="relative w-full h-full">
            <img
              src="/images/spiral-circles.jpg"
              alt="Abstract background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
          </motion.div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <h3 className="uppercase text-purple-400 text-sm tracking-widest mb-4">Последние матчи</h3>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-12">РЕЗУЛЬТАТЫ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {results.map((r) => (
              <div key={r.name} className="border border-white/20 p-6 backdrop-blur-sm hover:border-purple-400 transition-all duration-300">
                <p className="text-neutral-400 text-xs uppercase tracking-widest mb-2">{r.date}</p>
                <h4 className="text-white font-bold mb-3">{r.name}</h4>
                <p className="text-3xl font-mono font-bold text-purple-400">{r.score}</p>
                <p className="text-neutral-300 text-sm mt-1">{r.result}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
