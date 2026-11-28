import test from "node:test";
import assert from "node:assert/strict";
import { pages } from "../lib/pages.js";
import nextConfig from "../next.config.mjs";

test("links from the private walkthrough still reach the resolved topics", () => {
 const targets = Object.entries(pages).flatMap(([page, data]) => data.sections
  .filter(section => section.legacyAnchor)
  .map(section => [page, section.id, section.legacyAnchor]));
 assert.deepEqual(targets, [
  ["seal", "packaging", "ppp-a02"],
  ["opportunities", "srt", "ppp-a06"],
  ["about", "our-story", "ppp-a08"],
  ["about", "people", "ppp-a09"],
 ]);
});
test("merged page redirects lead to existing section anchors", async () => {
 const redirects = await nextConfig.redirects();
 assert.deepEqual(redirects.map(r => r.source).sort(), ["/process", "/transparency"]);
 for (const rule of redirects) {
  const [page, anchor] = rule.destination.slice(1).split("#");
  assert.ok(pages[page]?.sections.some(s => s.id === anchor), rule.destination);
  assert.equal(rule.permanent, true);
 }
 assert.ok(!pages.process && !pages.transparency);
});
test("supporting page section anchors are unique", () => {
 for (const [name, page] of Object.entries(pages)) {
  assert.equal(new Set(page.sections.map(s => s.id)).size, page.sections.length, name);
 }
});
