"use client";

import {
  Menu,
  User,
  CreditCard,
  ArrowRightLeft,
  Settings,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type MenuItemProps = {
  icon: React.ReactNode;
  text: string;
  open: boolean;
  onClick?: () => void;
  active?: boolean;
};

function MenuItem({ icon, text, open, onClick, active }: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-4 hover:bg-white/40 p-4 transition-all text-left font-medium ${
        active ? "bg-white/50 text-blue-600 shadow-sm border-r-4 border-blue-500" : "text-slate-600"
      }`}
    >
      {icon}
      {open && <span>{text}</span>}
    </button>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  function logout() {
    // Exemplo: remove dados do usuário
    localStorage.removeItem("CHAVE_SESSAO");

    // Redireciona para a página de login
    router.push("/");
  }

  return (
    <aside
      className={`bg-white/20 border-r border-white/50 text-slate-800 h-full duration-300 transition-all ${
        open ? "w-64" : "w-20"
      }`}
    >
      <div className="flex justify-between items-center p-5">
        {open && <h1 className="font-bold text-xl">ECK-BANK</h1>}

        <button
          onClick={() => setOpen(!open)}
          className="hover:bg-white/40 rounded-lg p-2 transition-all text-slate-600"
          aria-label="Toggle menu"
        >
          <Menu size={22} />
        </button>
      </div>

      <nav className="mt-10">
        <MenuItem icon={<User size={20} />} text="Conta" open={open} onClick={() => router.push("/conta")} active={pathname.startsWith("/conta")} />
        <MenuItem icon={<CreditCard size={20} />} text="Cartões" open={open} onClick={() => router.push("/cartoes")} active={pathname.startsWith("/cartoes")} />
        <MenuItem icon={<ArrowRightLeft size={20} />} text="Transações" open={open} onClick={() => router.push("/transacoes")} active={pathname.startsWith("/transacoes")} />
        <MenuItem icon={<Settings size={20} />} text="Configurações" open={open} onClick={() => router.push("/configuracoes")} active={pathname.startsWith("/configuracoes")} />

        <MenuItem
          icon={<LogOut size={20} />}
          text="Sair"
          open={open}
          onClick={logout}
        />
      </nav>
    </aside>
  );
}