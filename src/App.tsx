import { useTranslation } from "react-i18next";

export default function App() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === "en";

  const toggleLang = () => i18n.changeLanguage(isEn ? "ua" : "en");

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-700 antialiased print:bg-white">
      <div className="mx-auto max-w-[800px] px-8 py-16 sm:py-20">
        {/* Language toggle */}
        <div className="mb-10 flex justify-end print:hidden">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-4 py-1.5 text-xs font-medium text-stone-500 shadow-sm transition-all hover:border-stone-300 hover:text-stone-700"
          >
            <span className={isEn ? "text-stone-900" : ""}>EN</span>
            <span className="text-stone-300">/</span>
            <span className={!isEn ? "text-stone-900" : ""}>UA</span>
          </button>
        </div>

        {/* Header */}
        <header className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-muted">
            {t("title")}
          </p>
          <h1 className="mt-3 font-serif text-5xl font-bold tracking-tight text-stone-900 sm:text-6xl">
            Natalia
            <br />
            Dugasova
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-stone-500">
            <HeaderLink href="mailto:dugasova@gmail.com" icon="mail">
              dugasova@gmail.com
            </HeaderLink>
            <HeaderLink href="https://github.com/dugasova" icon="github">
              github.com/dugasova
            </HeaderLink>
          </div>
        </header>

        {/* About */}
        <Section title={t("about.heading")}>
          <p className="max-w-[620px] text-[15px] leading-[1.75] text-stone-600">
            {t("about.text")}
          </p>
        </Section>

        {/* Skills */}
        <Section title={t("skills.heading")}>
          <div className="grid grid-cols-2 gap-x-12 gap-y-5 sm:grid-cols-3">
            <SkillGroup
              title={t("skills.core")}
              items={["React 19", "TypeScript", "JavaScript ES6+", "HTML5 / CSS3"]}
            />
            <SkillGroup
              title={t("skills.stateRouting")}
              items={["Redux Toolkit", "React Router", "Context API"]}
            />
            <SkillGroup
              title={t("skills.formsValidation")}
              items={["react-hook-form", "Zod"]}
            />
            <SkillGroup
              title={t("skills.backendAuth")}
              items={["Firebase Auth", "Firestore", "REST API"]}
            />
            <SkillGroup
              title={t("skills.uiAnimation")}
              items={["SCSS", "Tailwind CSS", "Framer Motion", "Swiper"]}
            />
            <SkillGroup
              title={t("skills.toolingTesting")}
              items={["Vite", "Git", "Vitest", "Playwright", "react-i18next"]}
            />
          </div>
        </Section>

        {/* Projects */}
        <Section title={t("projects.heading")}>
          <div className="space-y-10">
            <Project
              name="BeautyBag"
              description={t("projects.beautybag")}
              tech={["React 19", "TypeScript", "Redux Toolkit", "Firebase", "Framer Motion", "SCSS"]}
              code="https://github.com/dugasova/Beautybag"
              demo="https://beautybag.dugasova.workers.dev/"
            />
            <Project
              name="BiteForge"
              description={t("projects.biteforge")}
              tech={["React 19", "TypeScript", "Redux Toolkit", "Firebase", "Playwright", "SCSS"]}
              code="https://github.com/dugasova/BiteForge"
              demo="https://biteforge.dugasova.workers.dev/"
            />
            <Project
              name="Dog Club"
              description={t("projects.dogclub")}
              tech={["React 18", "TypeScript", "Context API", "Firebase", "Vitest", "SCSS"]}
              code="https://github.com/dugasova/dog-club"
              demo="https://dog-club.dugasova.workers.dev/"
            />
          </div>
        </Section>

        {/* Education */}
        <Section title={t("education.heading")}>
          <div className="space-y-4">
            {[
              {
                course: "React",
                url: "https://certificate.ithillel.ua/view/86118515",
              },
              {
                course: "TypeScript",
                url: "https://certificate.ithillel.ua/view/40868327",
              },
              {
                course: "JavaScript",
                url: "https://certificate.ithillel.ua/ru/view/29631990",
              },
            ].map(({ course, url }) => (
              <div
                key={course}
                className="flex items-baseline justify-between border-b border-stone-100 pb-3 last:border-0"
              >
                <div>
                  <span className="text-[15px] font-medium text-stone-800">
                    {course}
                  </span>
                  <span className="ml-2 text-sm text-stone-400">
                    IT Hillel
                  </span>
                </div>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-accent-muted transition-colors hover:text-accent"
                >
                  {t("education.certificate")} ↗
                </a>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({
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

function SkillGroup({ title, items }: { title: string; items: string[] }) {
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

function Project({
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
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-stone-50 px-2 py-0.5 text-[12px] font-medium text-stone-500 ring-1 ring-stone-100"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function HeaderLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: "mail" | "github";
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={icon === "github" ? "_blank" : undefined}
      rel={icon === "github" ? "noreferrer" : undefined}
      className="group/link flex items-center gap-2 transition-colors hover:text-stone-800"
    >
      {icon === "mail" ? (
        <svg
          className="h-4 w-4 text-stone-400 transition-colors group-hover/link:text-accent-muted"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      ) : (
        <svg
          className="h-4 w-4 text-stone-400 transition-colors group-hover/link:text-accent-muted"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      )}
      <span className="text-[13px]">{children}</span>
    </a>
  );
}
