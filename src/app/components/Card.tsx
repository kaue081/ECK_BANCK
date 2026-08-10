type Props = {
  title: string;
  value: string;
};

export default function Card({ title, value }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <p className="text-slate-500 font-medium">{title}</p>
      <h2 className="text-3xl font-bold mt-3 text-slate-800">{value}</h2>
    </div>
  );
}