"use client";
import { useEffect, useState } from "react";

export default function SectionNav({ sections }) {
 const [active, setActive] = useState(null);
 useEffect(() => {
  let frame;
  const update = () => {
   const threshold = (document.querySelector('.site-header')?.getBoundingClientRect().height || 90) + 50;
   let current = null;
   for (const section of sections) {
    const element = document.getElementById(section.id);
    if (element && element.getBoundingClientRect().top <= threshold) current = section.id;
   }
   setActive(current);
  };
  const schedule = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
  update();
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  window.addEventListener('hashchange', schedule);
  return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); window.removeEventListener('hashchange', schedule); };
 }, [sections]);
 return <nav className="section-navigation" aria-label="On this page"><p className="section-navigation-label">Explore this page</p><div className="detail-contents">{sections.map(section => <a key={section.id} href={`#${section.id}`} aria-current={active === section.id ? "location" : undefined}>{section.label}</a>)}</div></nav>;
}
