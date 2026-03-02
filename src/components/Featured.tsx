const players = [
  { nick: "zachem", name: "Максим О.", role: "Капитан / IGL", country: "🇷🇺" },
  { nick: "badyyyi", name: "Бадя Б.", role: "AWP / Снайпер", country: "🇷🇺" },
  { nick: "kkazerx", name: "Егор Ж.", role: "Entry Fragger", country: "🇧🇾" },
  { nick: "hikowexz", name: "Павел Б.", role: "Support", country: "🇱🇻" },
  { nick: "z1rox", name: "Марк Д.", role: "Lurker", country: "🇷🇺" },
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
          <div className="border border-neutral-800 p-10 text-center">
            <p className="text-neutral-400 text-xl">Нету сыгранных турниров</p>
          </div>
        </div>
      </div>
    </div>
  );
}