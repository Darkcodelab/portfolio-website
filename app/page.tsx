import {
	ArrowUpRight,
	ChevronDown,
	Mail,
	MapPin,
	Sparkles,
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/shared/header";
import { experience, projects, skills } from "@/data/portfolio";

export default function Page() {
	return (
		<main className="min-h-screen overflow-hidden bg-background text-foreground transition-colors duration-500">
			<div className="pointer-events-none fixed inset-0 z-0 opacity-70 [background-image:radial-gradient(circle_at_15%_15%,rgba(129,140,248,.14),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(45,212,191,.10),transparent_24%)]" />
			<Header />
			<div
				id="top"
				className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-36 sm:px-8 lg:px-10"
			>
				<section className="flex min-h-[62vh] items-start justify-center pt-6 text-center sm:pt-10">
					<div className="flex max-w-5xl flex-col items-center">
						<div className="mb-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[.24em] text-primary">
							<span className="size-2 rounded-full bg-primary shadow-[0_0_16px_currentColor]" />{" "}
							Software Engineer
						</div>
						<h1 className="max-w-5xl text-5xl font-semibold leading-[.98] tracking-[-.06em] sm:text-7xl lg:text-[6.8rem]">
							I build software from{" "}
							<span className="text-muted-foreground">messy problems.</span>
						</h1>
						<p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
							I build web applications, automation systems, data pipelines, and
							AI-powered products; from the first idea and architecture to
							deployment and the details that make them useful.
						</p>
						<div className="mt-9 flex flex-wrap items-center justify-center gap-3">
							<a
								href="#work"
								className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:-translate-y-0.5"
							>
								View my work <ArrowUpRight size={16} />
							</a>
							<a
								href="#contact"
								className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition hover:bg-foreground hover:text-background"
							>
								Get in touch <Mail size={16} />
							</a>
						</div>
						<div className="mt-10 flex items-center gap-2 text-sm text-muted-foreground">
							<MapPin size={15} /> Based in Chennai, India
						</div>
					</div>
				</section>

				<section
					id="about"
					className="scroll-mt-28 border-t border-border/60 py-20 sm:py-28"
				>
					<div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
						<div>
							<p className="eyebrow">About me</p>
							<h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
								The person behind the systems.
							</h2>
						</div>
						<p className="max-w-sm text-sm leading-6 text-muted-foreground sm:text-right">
							Curious by default. Practical when it matters.
						</p>
					</div>
					<div className="grid gap-4 lg:grid-cols-[1.1fr_.9fr]">
						<article className="glass relative overflow-hidden rounded-3xl p-6 sm:p-9">
							<div className="absolute -right-4 -top-10 font-mono text-[9rem] font-semibold leading-none text-foreground/[.035]">
								∴
							</div>
							<div className="relative">
								<div className="mb-12 flex items-center justify-between">
									<span className="font-mono text-sm text-primary">
										/ 01 — perspective
									</span>
									<span className="rounded-full border border-primary/30 px-3 py-1 text-[11px] text-primary">
										always learning
									</span>
								</div>
								<p className="max-w-2xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
									I&apos;m a software engineer who enjoys turning complicated,
									repetitive, or poorly defined problems into working software.
								</p>
								<div className="mt-10 flex flex-wrap gap-2 text-xs text-muted-foreground">
									<span className="rounded-full border border-border/70 px-3 py-1.5">
										Curiosity → clarity
									</span>
									<span className="rounded-full border border-border/70 px-3 py-1.5">
										Systems over shortcuts
									</span>
									<span className="rounded-full border border-border/70 px-3 py-1.5">
										Useful beats impressive
									</span>
								</div>
							</div>
						</article>
						<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
							<article className="glass rounded-3xl p-6 sm:p-7">
								<div className="flex items-start justify-between">
									<span className="font-mono text-sm text-primary">
										/ 02 — range
									</span>
									<span className="font-mono text-4xl text-primary/60">{`{ }`}</span>
								</div>
								<p className="mt-8 text-lg leading-7">
									I move comfortably between frontend, backend, databases,
									infrastructure, and the problem itself.
								</p>
							</article>
							<article className="glass rounded-3xl p-6 sm:p-7">
								<div className="flex items-start justify-between">
									<span className="font-mono text-sm text-primary">
										/ 03 — principle
									</span>
									<span className="font-mono text-4xl text-primary/60">→</span>
								</div>
								<p className="mt-8 text-lg leading-7 text-muted-foreground">
									I care less about a particular technology and more about
									choosing a sensible approach and getting it into the hands of
									people who can use it.
								</p>
							</article>
						</div>
					</div>
				</section>

				<section id="work" className="scroll-mt-28 py-10 sm:py-16">
					<div className="mb-10 flex items-end justify-between gap-6">
						<div>
							<p className="eyebrow">Selected work</p>
							<h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
								Things I&apos;ve built.
							</h2>
						</div>
						<p className="hidden max-w-xs text-right text-sm leading-6 text-muted-foreground sm:block">
							A selection of business applications, automation, data systems,
							and AI.
						</p>
					</div>
					<div className="grid gap-4 md:grid-cols-2">
						{projects.map((project) => (
							<article
								key={project.number}
								className="glass group flex min-h-[360px] flex-col rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-foreground/30 sm:p-8"
							>
								<div className="flex items-center justify-between text-xs text-muted-foreground">
									<span>{project.number}</span>
								</div>
								<div className="mt-2">
									<p className="mb-3 text-xs uppercase tracking-[.14em] text-primary">
										{project.category}
									</p>
									<h3 className="text-2xl font-semibold tracking-tight">
										{project.title}
									</h3>
									<p className="mt-3 text-sm leading-6 text-muted-foreground">
										{project.description}
									</p>
									<p className="mt-4 border-l border-primary/50 pl-3 text-xs leading-5 text-muted-foreground">
										{project.detail}
									</p>
									<div className="mt-6 flex flex-wrap gap-2">
										{project.stack.map((item) => (
											<span
												key={item}
												className="rounded-full border border-border/70 px-2.5 py-1 text-[11px] text-muted-foreground"
											>
												{item}
											</span>
										))}
									</div>
								</div>
							</article>
						))}
					</div>
				</section>

				<section
					id="experience"
					className="scroll-mt-28 border-t border-border/60 py-24 sm:py-32"
				>
					<div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
						<div>
							<p className="eyebrow">Experience</p>
							<h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
								A trail of useful work.
							</h2>
						</div>
						<p className="max-w-sm text-sm leading-6 text-muted-foreground sm:text-right">
							Different environments, same instinct: make the complicated thing
							work.
						</p>
					</div>
					<div className="relative ml-2 border-l border-primary/30 sm:ml-6">
						{experience.map(([company, role, date, copy], index) => (
							<article
								key={company}
								className="relative pb-12 pl-8 last:pb-0 sm:pl-12"
							>
								<span className="absolute -left-[7px] top-1 size-3 rounded-full border-2 border-background bg-primary shadow-[0_0_0_4px_hsl(var(--background)),0_0_18px_hsl(var(--primary)/.7)]" />
								<div className="glass rounded-3xl p-6 transition hover:-translate-y-0.5 hover:border-foreground/25 sm:p-8">
									<div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
										<div>
											<p className="text-xs font-medium uppercase tracking-[.16em] text-primary">
												0{index + 1}
											</p>
											<h3 className="mt-3 text-xl font-medium">{company}</h3>
											<p className="mt-1 text-sm text-muted-foreground">
												{role}
											</p>
										</div>
										<p className="text-xs text-muted-foreground sm:text-right">
											{date}
										</p>
									</div>
									<p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground">
										{copy}
									</p>
								</div>
							</article>
						))}
					</div>
				</section>

				<section className="py-10 sm:py-16">
					<div className="rounded-3xl p-6 sm:p-10">
						<div className="mb-12 max-w-2xl">
							<p className="eyebrow">How I work</p>
							<h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
								From unknown to understood.
							</h2>
							<p className="mt-5 text-sm leading-6 text-muted-foreground">
								A problem changes shape as I learn what it really is. The
								process is a sequence of clearer states, not a straight line to
								a predetermined stack.
							</p>
						</div>
						<div className="flex flex-col items-stretch gap-5 lg:flex-row lg:gap-3">
							{[
								[
									"Understand first",
									"Find the real shape of the problem.",
									"/images/stage-1-lines.jpg",
								],
								[
									"Make it concrete",
									"Turn ambiguity into a model and a plan.",
									"/images/stage-2-lines.jpg",
								],
								[
									"Build the useful version",
									"Ship the smallest system that creates value.",
									"/images/stage-3-lines.jpg",
								],
								[
									"Tesseract",
									"Let the finished system hold complexity quietly.",
									"/images/stage-4-lines.jpg",
								],
							].map(([title, copy, shape], index) => (
								<div
									key={title}
									className="flex flex-1 flex-col gap-5 lg:flex-row"
								>
									<div className="glass relative min-h-44 flex-1 rounded-3xl p-6">
										<Image src={shape} alt="" width={60} height={60} />
										<p className="mt-8 text-xs uppercase tracking-[.14em] text-primary">
											State 0{index + 1}
										</p>
										<h3 className="mt-2 text-lg font-medium">{title}</h3>
										<p className="mt-2 text-sm leading-6 text-muted-foreground">
											{copy}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="border-t border-border/60 py-20 sm:py-28">
					<div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
						<div>
							<p className="eyebrow">Toolkit</p>
							<h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
								The tools behind the work.
							</h2>
						</div>
						<p className="max-w-sm text-sm leading-6 text-muted-foreground sm:text-right">
							A practical stack for taking an idea from interface to
							infrastructure.
						</p>
					</div>
					<div className="grid gap-3 sm:grid-cols-2">
						{Object.entries(skills).map(([group, items], index) => (
							<article
								key={group}
								className="glass group relative overflow-hidden rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-foreground/30 sm:min-h-56 sm:p-7"
							>
								<div className="absolute -right-5 -top-8 font-mono text-8xl font-semibold text-foreground/[.04] transition duration-300 group-hover:text-primary/[.10]">
									0{index + 1}
								</div>
								<div className="relative flex h-full flex-col">
									<div className="mb-8 flex items-center justify-between">
										<span className="font-mono text-sm text-primary">
											/ {String(index + 1).padStart(2, "0")}
										</span>
										<span className="text-xs text-muted-foreground">
											{items.length} capabilities
										</span>
									</div>
									<h3 className="text-xl font-medium tracking-tight">
										{group}
									</h3>
									<div className="mt-auto flex flex-wrap gap-2 pt-6">
										{items.map((item) => (
											<span
												key={item}
												className="rounded-full border border-border/70 bg-background/30 px-3 py-1.5 text-xs text-muted-foreground transition group-hover:border-primary/30 group-hover:text-foreground"
											>
												{item}
											</span>
										))}
									</div>
								</div>
							</article>
						))}
					</div>
				</section>

				<section
					id="contact"
					className="scroll-mt-28 border-t border-border/60 py-24 text-center sm:py-36"
				>
					<Sparkles className="mx-auto mb-6 text-primary" size={22} />
					<p className="eyebrow">Contact</p>
					<h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-[-.04em] sm:text-6xl">
						Have something that needs building?
					</h2>
					<p className="mx-auto mt-6 max-w-xl text-muted-foreground">
						If you&apos;re working on a product, automating a painful workflow,
						or have a problem that could use some software, I&apos;d be happy to
						hear about it.
					</p>
					<a
						href="mailto:contact@darkcodelab.in"
						className="mt-9 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:-translate-y-0.5"
					>
						Get in touch <ArrowUpRight size={16} />
					</a>
				</section>

				<footer className="flex flex-col gap-6 border-t border-border/60 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
					<p>Built using Next.js.</p>
					<div className="flex items-center gap-4">
						<a
							href="mailto:contact@darkcodelab.in"
							aria-label="Email"
							className="transition hover:text-foreground"
						>
							<Mail size={17} />
						</a>
						<a
							href="https://github.com/Darkcodelab"
							target="_blank"
							aria-label="GitHub"
							className="transition hover:text-foreground"
							rel="noopener"
						>
							GitHub
						</a>
						<a
							href="https://linkedin.com/in/d4rkcod3r"
							target="_blank"
							aria-label="LinkedIn"
							className="transition hover:text-foreground"
							rel="noopener"
						>
							LinkedIn
						</a>
						<a
							href="#top"
							aria-label="Back to top"
							className="transition hover:text-foreground"
						>
							<ChevronDown className="rotate-180" size={17} />
						</a>
					</div>
				</footer>
			</div>
		</main>
	);
}
