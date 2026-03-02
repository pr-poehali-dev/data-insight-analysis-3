export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-950 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm tracking-widest">Команда</h3>
                <a href="#roster" className="text-white hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base">
                  Состав
                </a>
                <a href="#achievements" className="text-white hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base">
                  Достижения
                </a>
                <a href="#tournaments" className="text-white hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base">
                  Турниры
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm tracking-widest">Соцсети</h3>
                <a
                  href="https://t.me/mentalityteam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Telegram команды
                </a>
                <a
                  href="#"
                  className="text-white hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  VK команды
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[14vw] sm:text-[13vw] lg:text-[11vw] leading-[0.85] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
                MENTALITY
              </h1>
              <p className="text-neutral-400 text-sm sm:text-base">{new Date().getFullYear()} Mentality Team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
