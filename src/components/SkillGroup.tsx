export default function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-stone-400">
        {title}
      </h3>
      <ul className="space-y-0.5">
        {items.map((item) => (
          <li key={item} className="text-[14px] text-stone-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
