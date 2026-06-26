import { useTranslation } from "react-i18next";
import Section from "./components/Section";
import SkillGroup from "./components/SkillGroup";
import Project from "./components/Project";
import HeaderLink from "./components/HeaderLink";

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
          <h1 className="mt-3 font-serif text-xl font-bold tracking-tight text-stone-900 sm:text-3xl">
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

        {/* Languages */}
        <Section title={t("languages.heading")}>
          <div className="flex gap-10">
            <div>
              <span className="text-[15px] font-medium text-stone-800">
                {t("languages.ukrainian")}
              </span>
              <span className="ml-2 text-sm text-stone-400">
                — {t("languages.nativeLevel")}
              </span>
            </div>
            <div>
              <span className="text-[15px] font-medium text-stone-800">
                {t("languages.english")}
              </span>
              <span className="ml-2 text-sm text-stone-400">
                — {t("languages.englishLevel")}
              </span>
            </div>
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
