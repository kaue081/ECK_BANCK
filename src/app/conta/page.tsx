'use client';

import Card from "../components/Card";
import Layout from "../components/Layout";
import { useAppContext } from "../context/AppContext";

export default function Dashboard() {
  const { saldo } = useAppContext();
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Saldo" value={`R$ ${saldo.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} />
        <Card title="Receitas" value="R$ 9.250,00" />
        <Card title="Despesas" value="R$ 3.410,00" />
      </div>

      <div className="mt-10 bg-white/40 backdrop-blur-xl border border-white/60 rounded-4xl shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] p-4 sm:p-8">
        <h2 className="text-xl font-bold mb-6 text-slate-800">
          Últimas Transações
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-slate-700 min-w-100">
            <thead>
              <tr className="text-left border-b border-white/50">
                <th className="pb-4 font-semibold px-2 sm:px-0">Descrição</th>
                <th className="pb-4 font-semibold px-2 sm:px-0">Data</th>
                <th className="pb-4 font-semibold px-2 sm:px-0">Valor</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-white/30 hover:bg-white/20 transition-colors">
                <td className="py-4 px-2 sm:px-0">Mercado</td>
                <td className="px-2 sm:px-0">04/08</td>
                <td className="text-red-600 font-medium px-2 sm:px-0">-R$120</td>
              </tr>

              <tr className="border-b border-white/30 hover:bg-white/20 transition-colors">
                <td className="py-4 px-2 sm:px-0">Salário</td>
                <td className="px-2 sm:px-0">01/08</td>
                <td className="text-green-600 font-medium px-2 sm:px-0">+R$4200</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
