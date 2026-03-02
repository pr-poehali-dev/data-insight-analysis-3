interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white font-bold text-lg uppercase tracking-widest">
          MENTALITY<span className="text-purple-400"> TEAM</span>
        </div>
        <nav className="flex gap-6 sm:gap-8">
          <a href="#roster" className="text-white hover:text-purple-400 transition-colors duration-300 uppercase text-sm">
            Состав
          </a>
          <a href="#achievements" className="text-white hover:text-purple-400 transition-colors duration-300 uppercase text-sm">
            Достижения
          </a>
          <a href="#tournaments" className="text-white hover:text-purple-400 transition-colors duration-300 uppercase text-sm">
            Турниры
          </a>
        </nav>
      </div>
    </header>
  );
}
