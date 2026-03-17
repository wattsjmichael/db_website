export default function HomePage() {
  const devLogs = [
    {
      date: "March 2026",
      title: "Combat feedback and polish pass",
      body: "Improved battle feel with cleaner UI feedback, better pacing, and stronger presentation for active combo inputs.",
    },
    {
      date: "February 2026",
      title: "Core JRPG combat prototype online",
      body: "Built and tested the first working version of Project Sunder's turn-based combat flow in Unreal Engine.",
    },
    {
      date: "January 2026",
      title: "Project direction locked",
      body: "Committed to a 2.5D JRPG direction with Xenogears and Chrono Trigger inspiration, focusing on atmosphere, narrative, and stylized combat.",
    },
  ];

  const sunderHighlights = [
    "Narrative-driven 2.5D JRPG",
    "Combo-based combat inspired by classic PlayStation-era RPGs",
    "Built in Unreal Engine by one developer",
    "Designed as a serious prototype for grants, audience growth, and long-term studio development",
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-red-500/40 bg-red-500/10 text-red-400">
              DB
            </div>
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-zinc-400">
                DadBod Studios
              </div>
              <div className="text-sm text-zinc-200">
                Built by one developer
              </div>
            </div>
          </a>

          <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
            <a href="#sunder" className="hover:text-white">
              Project Sunder
            </a>
            <a href="#devlog" className="hover:text-white">
              Dev Log
            </a>
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#other" className="hover:text-white">
              Kiln
            </a>
          </nav>
        </div>
      </header>

      <section id="top" className="border-b border-zinc-800">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <div className="mb-5 inline-block rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1 text-sm text-red-300">
              Unreal Engine indie studio
            </div>

            <h1 className="text-5xl font-black tracking-tight md:text-7xl">
              Indie games built after bedtime.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
              DadBod Studios is the solo game development home of Michael Watts.
              The studio is currently focused on{" "}
              <span className="font-semibold text-white">Project Sunder</span>,
              a narrative-driven 2.5D JRPG built in Unreal Engine with
              old-school inspiration and modern ambition.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#sunder"
                className="rounded-2xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-400"
              >
                See Project Sunder
              </a>
              <a
                href="#devlog"
                className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold text-zinc-100 transition hover:bg-zinc-900"
              >
                Read the Dev Log
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-400">
              <span className="rounded-full border border-zinc-800 px-3 py-1">
                Built by one developer
              </span>
              <span className="rounded-full border border-zinc-800 px-3 py-1">
                MegaGrant-ready presentation
              </span>
              <span className="rounded-full border border-zinc-800 px-3 py-1">
                Gameplay-first storytelling
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900/70 shadow-2xl shadow-black/30">
            <div className="aspect-video w-full border-b border-zinc-800 bg-zinc-950">
              <video
                className="h-full w-full object-cover"
                controls
                muted
                loop
                playsInline
                poster="https://placehold.co/1280x720/18181b/f4f4f5?text=Project+Sunder+Gameplay"
              >
                <source src="/videos/sunder-combat.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="p-6">
              <p className="text-sm text-red-300">Featured gameplay clip</p>
              <h2 className="mt-2 text-2xl font-bold">Project Sunder</h2>
              <p className="mt-2 leading-7 text-zinc-300">
                <p className="mt-2 leading-7 text-zinc-300">
                  A dark fantasy 2.5D JRPG focused on atmosphere, stylized
                  combat, and emotional stakes...
                </p>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="sunder" className="border-b border-zinc-800 bg-zinc-900/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-red-400">
                Main Project
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Project Sunder
              </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-300">
                Project Sunder is the flagship project of DadBod Studios. It is
                a narrative-heavy 2.5D JRPG focused on atmosphere, combat
                identity, and emotional direction. This is the project the
                studio is actively building, documenting, and presenting for
                major opportunities.
              </p>
            </div>

            <div className="grid gap-4">
              {sunderHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-5"
                >
                  <p className="leading-7 text-zinc-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950/80">
              <div className="aspect-video bg-zinc-900">
                <video
                  className="h-full w-full object-cover"
                  controls
                  muted
                  loop
                  playsInline
                  poster="https://placehold.co/1280x720/18181b/f4f4f5?text=Combat+Clip"
                >
                  <source src="/videos/sunder-combat.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold">Combat Clip</h3>
                <p className="mt-2 text-zinc-300">
                  Use this for active combat, combo inputs, damage numbers, or
                  battle feedback improvements.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950/80">
              <div className="aspect-video bg-zinc-900">
                <video
                  className="h-full w-full object-cover"
                  controls
                  muted
                  loop
                  playsInline
                  poster="https://placehold.co/1280x720/18181b/f4f4f5?text=Overworld+or+Dialogue+Clip"
                >
                  <source src="/videos/sunder-overworld.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold">World / Dialogue Clip</h3>
                <p className="mt-2 text-zinc-300">
                  Use this for exploration, atmosphere, dialogue, or cinematics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="devlog" className="border-b border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-red-400">
              Development Log
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Consistent progress matters.
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              This section shows that Project Sunder is not just an idea. It is
              an actively built project with visible iteration and momentum.
            </p>
          </div>

          <div className="mt-12 grid gap-6">
            {devLogs.map((log) => (
              <div
                key={log.title}
                className="rounded-[2rem] border border-zinc-800 bg-zinc-900/40 p-6 md:p-8"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-300">
                  {log.date}
                </p>
                <h3 className="mt-2 text-2xl font-bold">{log.title}</h3>
                <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
                  {log.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-zinc-800 bg-zinc-900/30">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-red-400">
              Founder
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Built by one developer.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-300">
            <p>
              DadBod Studios is the solo development studio of{" "}
              <span className="font-semibold text-white">Michael Watts</span>.
              The studio is built around one clear goal: make games with soul,
              identity, and enough execution to stand on their own.
            </p>
            <p>
              Project Sunder is being built in Unreal Engine through focused
              iteration, practical scope decisions, and a lot of late-night
              work. The studio is intentionally small, founder-led, and centered
              on shipping something real.
            </p>
            <p>
              This website is designed to show proof of work: gameplay,
              progress, direction, and the person building it.
            </p>
          </div>
        </div>
      </section>

      <section id="other" className="border-b border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              Other Experiment
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">Kiln</h2>
            <p className="mt-4 text-lg leading-8 text-zinc-300">
              Kiln is a claymation-inspired action prototype exploring a
              different tone and combat feel. It remains part of the wider
              DadBod Studios creative slate, but the current primary focus is
              Project Sunder.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-zinc-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-semibold text-zinc-200">DadBod Studios</div>
            <div>Founder-led indie game development in Unreal Engine.</div>
          </div>

          <div className="flex flex-wrap gap-5">
            <a href="#sunder" className="hover:text-white">
              Project Sunder
            </a>
            <a href="#devlog" className="hover:text-white">
              Dev Log
            </a>
            <a
              href="mailto:hello@dadbodstudios.com"
              className="hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
