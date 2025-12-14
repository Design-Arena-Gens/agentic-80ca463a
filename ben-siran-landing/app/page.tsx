import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    title: "13+ Years Guiding Learners",
    detail: "Tailored English coaching for professionals, performers, and creatives on three continents.",
  },
  {
    title: "360° Artistic Mastery",
    detail: "Certified vocalist, visual storyteller, and theatre practitioner blending art with language.",
  },
  {
    title: "Holistic Communication Method",
    detail: "Voice, body, and narrative techniques to unlock confidence on stage and in boardrooms.",
  },
];

const artistryStrands = [
  {
    label: "English Mentorship",
    description:
      "Executive fluency, IELTS and TOEFL preparation, accent refinement, and expressive writing for global impact.",
    accent: "from-sky-400/60 via-sky-500/40 to-cyan-300/20",
  },
  {
    label: "Vocal Performance",
    description:
      "Stage-ready coaching, repertoire building, and studio-quality vocal production for soloists and ensembles.",
    accent: "from-violet-400/60 via-fuchsia-500/40 to-pink-400/30",
  },
  {
    label: "Visual & Performing Arts",
    description:
      "Story-driven art direction, theatre production, and multimedia experiences that fuse language with movement.",
    accent: "from-emerald-400/60 via-teal-500/40 to-lime-300/25",
  },
];

const testimonials = [
  {
    quote:
      "Ben helped me transform my academic English into a persuasive performance. I now deliver conference talks with artistic flair and crystal clarity.",
    name: "Dr. Amina Roux",
    role: "Cultural Historian & Lecturer",
  },
  {
    quote:
      "From diction to stage presence, Ben engineered my audition success. His artistic instincts and disciplined pedagogy are unmatched.",
    name: "Jared Kim",
    role: "Actor, Seoul National Theatre",
  },
  {
    quote:
      "Every session feels like a masterclass in artistry and humanity. I left with a sharper voice, stronger storytelling, and a renewed creative drive.",
    name: "Lucía Martínez",
    role: "Creative Director, Barcelona",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1f2475_0%,transparent_60%)] opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#6f1d75_0%,transparent_55%)] opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,#1b8a84_0%,transparent_45%)] opacity-60" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-10 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between gap-6 rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur">
          <span className="text-sm font-semibold tracking-[0.3em] uppercase text-slate-200">
            Ben Siran
          </span>
          <Link
            href="#connect"
            className="group inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-5 py-2 text-sm font-semibold text-slate-100 shadow-lg shadow-slate-900/40 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Book a Private Session
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </header>

        <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-400/30 bg-slate-100/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-200">
              Artist • Singer • Master Educator
            </p>
            <h1 className="font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              English excellence sculpted through artistry, voice, and story.
            </h1>
            <p className="max-w-xl text-lg text-slate-200/80 sm:text-xl">
              I&apos;m Ben Siran—an English mentor with 13+ years of global
              teaching, concert stages, and studio direction. I transform
              language into performance, equipping creatives and leaders to
              speak, sing, and shine with unapologetic confidence.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#pillars"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
              >
                Explore My Practice
              </Link>
              <Link
                href="#connect"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Request a Discovery Call
              </Link>
            </div>
            <dl className="grid gap-6 pt-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner shadow-black/40 backdrop-blur"
                >
                  <dt className="text-sm font-medium uppercase tracking-[0.15em] text-slate-200/80">
                    {item.title}
                  </dt>
                  <dd className="mt-3 text-sm text-slate-100/75">
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-white/20 via-white/5 to-white/0 blur-3xl" />
              <div className="relative overflow-hidden rounded-[36px] border border-white/15 bg-white/5 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.8)] backdrop-blur">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_55%)]" />
                <Image
                  src="/ben-siran-portrait.svg"
                  alt="Illustrated portrait of Ben Siran"
                  width={480}
                  height={640}
                  priority
                  className="relative h-full w-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-slate-900/70 px-5 py-4 text-sm font-medium text-slate-100 shadow-lg backdrop-blur">
                  “Art is language. Language is performance. Together we craft
                  the voice you dream of.”
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="pillars"
          className="space-y-10 rounded-[48px] border border-white/10 bg-white/[0.08] p-10 shadow-[0_35px_120px_-60px_rgba(15,23,42,0.9)] backdrop-blur"
        >
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
              Signature Pillars
            </p>
            <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
              Precision teaching that harmonizes intellect and emotion.
            </h2>
            <p className="text-slate-200/80">
              From one-on-one vocal intensives to artistic English residencies,
              every program is engineered to elevate your articulation, musical
              phrasing, and visual storytelling—anchored in compassionate,
              data-informed pedagogy.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {artistryStrands.map((strand) => (
              <div
                key={strand.label}
                className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-inner shadow-slate-900/30`}
              >
                <div
                  className={`pointer-events-none absolute -inset-32 bg-gradient-to-br ${strand.accent} opacity-40 blur-3xl`}
                />
                <div className="relative space-y-4">
                  <h3 className="font-heading text-2xl font-semibold text-white">
                    {strand.label}
                  </h3>
                  <p className="text-sm text-slate-200/85">
                    {strand.description}
                  </p>
                  <span className="inline-flex text-xs font-semibold uppercase tracking-[0.3em] text-slate-200/60">
                    Learn more →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
              Studio Experience
            </p>
            <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
              A creative sanctuary shaped by masterful craft and human warmth.
            </h2>
            <p className="text-slate-200/80">
              Sessions unfold inside a hybrid studio where microphones meet
              canvases, and critical listening pairs with luminous storytelling.
              Expect rigorous technique, curated repertoire, and empathetic
              feedback that champions your unique voice.
            </p>
            <ul className="space-y-3 text-sm text-slate-100/80">
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-sky-400" />
                Cross-disciplinary curriculum interlacing phonetics, vocal
                anatomy, and dramaturgy.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-fuchsia-400" />
                Bespoke lesson artifacts: annotated scripts, vocal warm-up
                scores, and video recaps.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" />
                Performance labs simulating interviews, recitals, and gallery
                talks with targeted coaching.
              </li>
            </ul>
          </div>
          <div className="relative space-y-6 rounded-[48px] border border-white/10 bg-white/5 p-8">
            <div className="absolute inset-0 rounded-[48px] bg-[radial-gradient(circle_at_top,#ffffff22,transparent_60%)] opacity-80" />
            <div className="relative space-y-8">
              {testimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.name}
                  className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 text-sm text-slate-200/85 shadow-lg backdrop-blur"
                >
                  “{testimonial.quote}”
                  <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300/80">
                    {testimonial.name} · {testimonial.role}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-10 rounded-[48px] border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-indigo-900/60 p-10 shadow-[0_45px_120px_-60px_rgba(15,23,42,0.9)]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
              Upcoming Focus
            </p>
            <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
              2024 Residency • Voices of Light & Line
            </h2>
            <p className="max-w-2xl text-slate-200/80">
              A curated three-month journey blending English storytelling,
              improvisational singing, and live painting. Limited to twelve
              artists ready to merge language with luminous soundscapes.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="mailto:hello@bensiran.studio?subject=Residency%20Inquiry"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Request an Invitation
            </Link>
            <Link
              href="#connect"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Full Curriculum
            </Link>
          </div>
        </section>

        <section id="connect" className="space-y-8 lg:space-y-10">
          <div className="grid gap-8 rounded-[48px] border border-white/10 bg-white/5 p-10 backdrop-blur lg:grid-cols-[0.7fr_1.3fr]">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
                Let&apos;s Design Your Next Chapter
              </p>
              <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
                Studio availability: virtual & on-location (Paris, Seoul,
                Montreal).
              </h2>
              <p className="text-slate-200/80">
                Share your artistic dreams, language goals, or upcoming
                performance. I&apos;ll respond with a tailored roadmap and
                curated resources within 48 hours.
              </p>
            </div>

            <form className="grid gap-4 text-sm text-slate-900">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="rounded-2xl border border-white/20 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-white/50 focus:ring-2 focus:ring-slate-100/40"
                  type="text"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  placeholder="you@email.com"
                  className="rounded-2xl border border-white/20 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-white/50 focus:ring-2 focus:ring-slate-100/40"
                  type="email"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="focus" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
                  Primary Focus
                </label>
                <select
                  id="focus"
                  name="focus"
                  className="rounded-2xl border border-white/20 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-white/50 focus:ring-2 focus:ring-slate-100/40"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose an area
                  </option>
                  <option value="english">English Communication</option>
                  <option value="vocal">Vocal Performance</option>
                  <option value="art">Visual & Performing Arts</option>
                  <option value="residency">Residency Inquiry</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your goals, timeline, and any upcoming performances."
                  rows={4}
                  className="rounded-2xl border border-white/20 bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-white/50 focus:ring-2 focus:ring-slate-100/40"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 font-semibold text-white shadow-lg shadow-slate-900/40 transition hover:bg-slate-800"
              >
                Send Message
              </button>
            </form>
          </div>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-slate-200/60">
            Fluent in English, French, Spanish, and Korean · Virtual studio
            equipped for broadcast-quality recordings
          </p>
        </section>
      </div>
    </main>
  );
}
