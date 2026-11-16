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
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pt-8 pb-16 sm:px-10"
      >
        <h1 className="font-display max-w-4xl text-5xl leading-[0.95] font-bold tracking-[-0.045em] sm:text-7xl lg:text-8xl">
          Tout est
          <span className="block text-violet">connecté.</span>
        </h1>
        <p className="mt-8 max-w-md text-lg leading-8 text-ink sm:text-xl">
          {site.slogan} Bientôt à {site.city}.
        </p>
      </main>

      <footer className="relative z-10 mx-auto w-full max-w-6xl px-6 py-8 text-sm text-muted sm:px-10">
        <p>© 2026 Novanode</p>
      </footer>
    </div>
  );
}
