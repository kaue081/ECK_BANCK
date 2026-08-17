type Props = {
  title: string;
  value: string;
};

export default function Card({ title, value }: Props) {
  return (
    <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl shadow-[0_4px_16px_0_rgba(31,38,135,0.05)] p-6 hover:bg-white/50 transition-all hover:-translate-y-1">
      <p className="text-slate-500 font-medium">{title}</p>
      <h2 className="text-3xl font-bold mt-3 text-slate-800">{value}</h2>
    </div>
  );
}