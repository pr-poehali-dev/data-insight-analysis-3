const players = [
  { nick: "Shadow", name: "Алексей К.", role: "Капитан / IGL", country: "🇷🇺" },
  { nick: "Vortex", name: "Дмитрий П.", role: "AWP / Снайпер", country: "🇷🇺" },
  { nick: "Phantom", name: "Артём С.", role: "Entry Fragger", country: "🇷🇺" },
  { nick: "Steel", name: "Никита В.", role: "Support", country: "🇷🇺" },
  { nick: "Nova", name: "Иван М.", role: "Lurker", country: "🇷🇺" },
];

const achievements = [
  { place: "🥇 1 место", event: "Regional Cup 2024", prize: "50 000 ₽" },
  { place: "🥈 2 место", event: "Open Championship 2024", prize: "25 000 ₽" },
  { place: "🥉 3 место", event: "Winter Clash 2023", prize: "10 000 ₽" },
  { place: "🏆 Топ-8", event: "Major Qualifier 2023", prize: "Квалификация" },
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((item) => (
              <div
                key={item.event}
                className="border border-neutral-800 p-8 hover:border-purple-500 transition-all duration-300"
              >
                <p className="text-3xl mb-3">{item.place.split(" ")[0]}</p>
                <p className="text-purple-400 text-sm uppercase tracking-widest mb-2">
                  {item.place.replace(item.place.split(" ")[0] + " ", "")}
                </p>
                <h4 className="text-white text-xl font-bold mb-2">{item.event}</h4>
                <p className="text-neutral-400 text-sm">Призовые: {item.prize}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
