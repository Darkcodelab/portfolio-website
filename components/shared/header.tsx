"use client";

import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
	const [dark, setDark] = useState(false);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", dark);
	}, [dark]);

	return (
		<nav className="glass fixed left-1/2 top-4 z-20 flex w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 items-center justify-between rounded-full px-4 py-3 sm:px-6">
			<a href="#top" className="font-semibold tracking-tight">
				DC<span className="text-primary">.</span>
			</a>
			<div className="hidden items-center gap-6 text-xs text-muted-foreground md:flex">
				<Link className="transition hover:text-foreground" href="#about">
					About
				</Link>
				<Link className="transition hover:text-foreground" href="#work">
					Work
				</Link>
				<Link className="transition hover:text-foreground" href="#experience">
					Experience
				</Link>
				<Link className="transition hover:text-foreground" href="#contact">
					Contact
				</Link>
			</div>
			<button
				aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
				onClick={() => setDark((value) => !value)}
				className="rounded-full border border-border/70 p-2 text-muted-foreground transition hover:bg-foreground hover:text-background"
				type="button"
			>
				{dark ? <Sun size={15} /> : <Moon size={15} />}
			</button>
		</nav>
	);
}
