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
import { useAppContext } from "../context/AppContext";

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
      title={open ? undefined : text}
      className={`flex-1 md:flex-none md:w-full flex items-center md:justify-start justify-center gap-1 md:gap-4 hover:bg-white/40 p-3 md:p-4 transition-all text-left font-medium flex-col md:flex-row ${
        active 
          ? "bg-white/50 text-blue-600 shadow-sm md:border-r-4 border-t-4 md:border-t-0 border-blue-500 rounded-lg md:rounded-none" 
          : "text-slate-600 border-t-4 md:border-t-0 md:border-r-4 border-transparent hover:text-blue-500 rounded-lg md:rounded-none"
      }`}
    >
      <div className="flex items-center justify-center">
        {icon}
      </div>
      <span className={`text-[10px] md:text-base ${open ? 'md:inline' : 'md:hidden'} block text-center md:text-left`}>
        {text}
      </span>
    </button>
  );
}

export default function Sidebar() {
  const { sidebarOpen: open, setSidebarOpen: setOpen } = useAppContext();
  const router = useRouter();
  const pathname = usePathname();

  function logout() {
    // Limpa os dois storages
    localStorage.clear();
    sessionStorage.clear();

    // Redireciona para a página de login
    router.push("/");
  }

  return (
    <aside
      className={`bg-white/90 md:bg-white/20 border-t md:border-t-0 md:border-r border-white/50 text-slate-800 transition-all duration-300 z-50 flex md:flex-col pb-safe md:pb-0 ${
        open ? "md:w-64" : "md:w-20"
      } w-full md:w-auto h-auto md:h-full`}
    >
      <div className="hidden md:flex justify-between items-center p-5">
        {open && <h1 className="font-bold text-xl truncate">ECK-BANK</h1>}

        <button
          onClick={() => setOpen(!open)}
          className="hover:bg-white/40 rounded-lg p-2 transition-all text-slate-600"
          aria-label="Toggle menu"
        >
          <Menu size={22} />
        </button>
      </div>

      <nav className="flex flex-row md:flex-col flex-1 justify-around md:justify-start w-full md:mt-10 overflow-x-auto md:overflow-visible">
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