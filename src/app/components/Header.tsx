import { Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow px-8 py-5 flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Dashboard</h2>
        <p className="text-slate-500">Bem-vindo de volta.</p>
      </div>

      <div className="flex items-center gap-5">
        <button className="relative p-1 text-slate-600 hover:text-slate-900 transition-colors" aria-label="Notificações">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
        </button>

        <img
          src="https://i.pravatar.cc/100"
          alt="Avatar do Usuário"
          className="w-11 h-11 rounded-full object-cover"
        />
      </div>
    </header>
  );
}