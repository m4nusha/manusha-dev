import { Title } from "./title";

export function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 border-2 border-solid border-emerald-300 text-slate-100 p-4 rounded-lg">
      <Title name={title} />
      {children}
    </div>
  );
}
