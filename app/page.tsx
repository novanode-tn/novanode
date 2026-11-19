import { FadeUp } from "@/components/fade-up";
import { Mark } from "@/components/mark";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-tint sm:h-[28rem] sm:w-[28rem]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 -translate-x-1/3 translate-y-1/3 rounded-full bg-violet/10 sm:h-80 sm:w-80"
      />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center px-6 py-7 sm:px-10">
        <div className="flex items-center gap-3 text-ink">
          <Mark className="h-8 w-10 text-violet" />
          <span className="text-[1.65rem] leading-none font-bold tracking-[-0.04em]">
            novanode
          </span>
        </div>
      </header>

      <main
        id="contenu"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pt-4 sm:px-10"
      >
        <section className="pb-16 sm:pb-20">
          <FadeUp inView={false}>
            <h1 className="font-display max-w-4xl text-5xl leading-[0.95] font-bold tracking-[-0.045em] sm:text-7xl lg:text-8xl">
              Tout est
              <span className="block text-violet">connecté.</span>
            </h1>
          </FadeUp>
          <FadeUp inView={false} delay={0.15}>
            <p className="mt-8 max-w-md text-lg leading-8 text-ink sm:text-xl">
              {site.slogan} Bientôt à {site.city}.
            </p>
          </FadeUp>
        </section>

        <section aria-label="Nos disciplines" className="border-t border-ink/10 py-14 sm:py-16">
          <FadeUp inView>
            <p className="font-display text-xs font-semibold tracking-[0.18em] text-muted uppercase">
              Ce que nous connectons
            </p>
          </FadeUp>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-3">
            {site.pillars.map((pillar, index) => (
              <FadeUp
                key={pillar.title}
                inView
                delay={0.1 + index * 0.12}
                className="bg-paper p-6 sm:p-7"
              >
                <article>
                  <h2 className="font-display text-2xl font-bold tracking-[-0.02em]">
                    {pillar.title}
                  </h2>
                  <p className="mt-3 text-[0.95rem] leading-7 text-muted">
                    {pillar.text}
                  </p>
                </article>
              </FadeUp>
            ))}
          </div>
        </section>

        <section aria-label="Lancement" className="py-14 sm:py-16">
          <div className="flex flex-col gap-8 rounded-2xl bg-ink px-7 py-9 text-paper sm:flex-row sm:items-end sm:justify-between sm:px-10">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                Nous lançons.
              </h2>
              <p className="mt-3 max-w-md text-[0.95rem] leading-7 text-paper/70">
                Novanode ouvre ses portes à {site.city}. Écrivez-nous :
                nous serons ravis de parler de votre marque.
              </p>
            </div>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-violet px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-violet/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
            >
              {site.email}
              <span aria-hidden className="translate-x-0.5">→</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>© 2026 {site.name} — {site.city}, {site.country}</p>
        <a
          href={`mailto:${site.email}`}
          className="transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
        >
          {site.email}
        </a>
      </footer>
    </div>
  );
}
