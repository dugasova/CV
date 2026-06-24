export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-14">
      <h2 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400">
        {title}
      </h2>
      {children}
    </section>
  );
}
