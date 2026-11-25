"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PackagingSeal from "@/components/PackagingSeal";
import QrCode from "@/components/QrCode";
import ProductSummary from "@/components/ProductSummary";
import { examplePath, examplePreviewOrigin } from "@/lib/product-example.mjs";

export default function ProductStory() {
  const dialog = useRef(null), previousOverflow = useRef(""), opened = useRef(false);
  const [origin, setOrigin] = useState(examplePreviewOrigin);
  useEffect(() => { setOrigin(window.location.origin); return () => { if (opened.current) document.body.style.overflow = previousOverflow.current; }; }, []);
  function openSummary(e) {
    if (!dialog.current?.showModal || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault(); previousOverflow.current = document.body.style.overflow;
    dialog.current.showModal(); opened.current = true; document.body.style.overflow = "hidden";
  }
  return <>
    <div className="qr-product-demo">
      <p className="eyebrow light">From the wrapper to the results</p>
      <div className="qr-product-package">
        <Image src="/images/partner-protein-qr-bar.jpg" alt="Fictional Partner Protein vanilla bar with a PPP seal and clickable QR code on the front of the wrapper" width={1536} height={1024} sizes="(max-width:760px) 100vw, 50vw" />
        <div className="qr-package-seal"><PackagingSeal /></div>
        <a className="qr-package-code" href={examplePath} onClick={openSummary} aria-haspopup="dialog" aria-label="Open the example product summary from the packaging QR code"><QrCode value={`${origin}${examplePath}`} /></a>
      </div>
      <div className="qr-demo-instruction"><svg className="qr-pointer" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M7 5h12v12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg><a href={examplePath} onClick={openSummary} aria-haspopup="dialog">Click or scan to explore</a><p>One code. A closer look at the product.</p></div>
      <ol className="qr-demo-flow" aria-label="How the product QR works"><li><span>01</span> Find the seal</li><li><span>02</span> Scan the code</li><li><span>03</span> View the summary</li></ol>
      <p className="qr-demo-caption">Demonstration packaging · three-star example</p>
    </div>
    <dialog className="qr-summary-dialog" ref={dialog} aria-labelledby="qr-summary-title" onClose={() => { opened.current = false; document.body.style.overflow = previousOverflow.current; }} onClick={e => { if (e.target !== e.currentTarget) return; const r = e.currentTarget.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) e.currentTarget.close(); }}>
      <div className="qr-summary-toolbar"><span id="qr-summary-title">Example product summary</span><button type="button" onClick={() => dialog.current.close()} autoFocus aria-label="Close example product summary">Close ×</button></div>
      <ProductSummary />
      <div className="qr-summary-link"><a className="text-link light-link" href={examplePath} target="_blank" rel="noopener noreferrer">Open the full summary page</a></div>
    </dialog>
  </>;
}
