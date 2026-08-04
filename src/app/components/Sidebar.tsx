"use client";

import {
  Menu,
  Home,
  Wallet,
  CreditCard,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

type MenuItemProps = {
  icon: React.ReactNode;
  text: string;
  open: boolean;
  onClick?: () => void;
};

function MenuItem({
  icon,
  text,
  open,
  onClick,
}: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className="
        w-full
        flex
        items-center
        gap-4
        hover:bg-slate-800
        p-4
      "
    >
      {icon}

      {open && <span>{text}</span>}
    </button>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  function logout() {
    // Exemplo: remove dados do usuário
    localStorage.removeItem("CHAVE_SESSAO");

    // Redireciona para a página de login
    router.push("/");
  }

  return (
    <aside
      className={`
        bg-slate-900
        text-white
        h-screen
        duration-300
        transition-all
        ${open ? "w-64" : "w-20"}
      `}
    >
      <div className="flex justify-between items-center p-5">
        {open && (
          <h1 className="font-bold text-xl">
            MyBank
          </h1>
        )}

        <button
          onClick={() => setOpen(!open)}
          className="hover:bg-slate-700 rounded-lg p-2"
        >
          <Menu size={22} />
        </button>
      </div>

      <nav className="mt-10">
        <MenuItem icon={<Home />} text="Dashboard" open={open} />
        <MenuItem icon={<Wallet />} text="Contas" open={open} />
        <MenuItem icon={<CreditCard />} text="Cartões" open={open} />
        <MenuItem icon={<BarChart3 />} text="Investimentos" open={open} />
        <MenuItem icon={<Settings />} text="Configurações" open={open} />

        <MenuItem
          icon={<LogOut />}
          text="Sair"
          open={open}
          onClick={logout}
        />
      </nav>
    </aside>
  );
}