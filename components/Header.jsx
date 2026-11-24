"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
export function Brand() { return <><span className="brand-mark" aria-hidden="true">PPP<i /></span><span className="brand-name">Perfect Protein<br />Partners</span></>; }
export default function Header() {
  const [open, setOpen] = useState(false); const path = usePathname();
  return <header className="site-header"><div className="header-inner"><Link href="/" className="brand" aria-label="Perfect Protein Partners home" onClick={() => setOpen(false)}><Brand /></Link><button className="menu-button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(v => !v)}>{open ? "Close menu" : "Menu"}</button><nav id="main-navigation" aria-label="Main navigation" className={open ? "navigation is-open" : "navigation"} onKeyDown={e => { if (e.key === "Escape") { setOpen(false); document.querySelector(".menu-button")?.focus(); } }}>{[["/seal", "The seal"], ["/process", "Our process"], ["/testing", "Your results"], ["/about", "About PPP"]].map(([href, label]) => <Link key={href} href={href} aria-current={path === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>)}<Link href="/contact" className="button small" onClick={() => setOpen(false)}>Let’s talk</Link></nav></div></header>;
}
