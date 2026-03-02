const players = [
  { nick: "zachem", name: "Максим О.", role: "Капитан / IGL", country: "🇷🇺", tg: null },
  { nick: "badyyyi", name: "Бадя Б.", role: "AWP / Снайпер", country: "🇷🇺", tg: null },
  { nick: "kkazerx", name: "Егор Ж.", role: "Entry Fragger", country: "🇧🇾", tg: null },
  { nick: "hikowexz", name: "Павел Б.", role: "Support", country: "🇱🇻", tg: "https://t.me/hikolivewarllokk" },
  { nick: "z1rox", name: "Марк Д.", role: "Lurker", country: "🇷🇺", tg: null },
];

export default function Featured() {
  return (
    <div id="roster" className="bg-white">
      {/* Состав */}
      <div className="min-h-screen px-6 py-20 lg:py-32 max-w-7xl mx-auto">
        <h3 className="uppercase mb-4 text-sm tracking-widest text-neutral-500">Наши игроки</h3>
        <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-16 leading-tight">
          СОСТАВ КОМАНДЫ
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {players.map((player) => (
            <div
              key={player.nick}
              className="border border-neutral-200 p-6 hover:border-purple-500 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors duration-300">
                <span className="text-white font-bold text-xl">{player.nick[0]}</span>
              </div>
              <p className="text-xs uppercase tracking-widest text-purple-500 mb-1">{player.role}</p>
              <h4 className="text-2xl font-bold text-neutral-900 mb-1">{player.nick}</h4>
              <p className="text-neutral-500 text-sm">{player.country} {player.name}</p>
              {player.tg && (
                <a
                  href={player.tg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs text-purple-500 hover:text-purple-700 transition-colors duration-300"
                >
                  Telegram →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Достижения */}
      <div id="achievements" className="min-h-screen px-6 py-20 lg:py-32 bg-neutral-950 max-w-full">
        <div className="max-w-7xl mx-auto">
          <h3 className="uppercase mb-4 text-sm tracking-widest text-purple-400">Наши победы</h3>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-16 leading-tight">
            ДОСТИЖЕНИЯ
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border border-neutral-800 p-6 hover:border-red-700 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <span className="text-red-500 font-mono text-sm font-bold">1-е МЕСТО</span>
                <div>
                  <h4 className="text-white font-bold text-lg">Day Media Cup 2025</h4>
                  <p className="text-neutral-500 text-sm">Online · 5v5</p>
                </div>
              </div>
              <span className="mt-3 sm:mt-0 text-sm border border-red-800 text-red-400 px-3 py-1 w-fit">🏆 Победа</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border border-neutral-800 p-6 hover:border-neutral-600 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <span className="text-neutral-400 font-mono text-sm font-bold">2-е МЕСТО</span>
                <div>
                  <h4 className="text-white font-bold text-lg">Digital Winter Cup 2025</h4>
                  <p className="text-neutral-500 text-sm">Online · 5v5</p>
                </div>
              </div>
              <span className="mt-3 sm:mt-0 text-sm border border-neutral-600 text-neutral-400 px-3 py-1 w-fit">🥈 Финалист</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}