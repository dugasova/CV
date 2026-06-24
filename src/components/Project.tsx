import { useTranslation } from "react-i18next";

export default function Project({
  name,
  description,
  tech,
  code,
  demo,
}: {
  name: string;
  description: string;
  tech: string[];
  code: string;
  demo: string;
}) {
  const { t } = useTranslation();

  return (
    <div className="group rounded-xl border border-stone-150 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="text-lg font-semibold text-stone-900">{name}</h3>
        <div className="flex gap-4 text-sm">
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="text-accent-muted transition-colors hover:text-accent"
          >
            {t("projects.live")} ↗
          </a>
          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            className="text-accent-muted transition-colors hover:text-accent"
          >
            {t("projects.code")} ↗
          </a>
        </div>
      </div>
      <p className="mt-3 text-[14px] leading-relaxed text-stone-500">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-md bg-stone-50 px-2 py-0.5 text-[12px] font-medium text-stone-500 ring-1 ring-stone-100"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
