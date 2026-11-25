import test from "node:test";
import assert from "node:assert/strict";
import { pages } from "../lib/pages.js";
import { andyReviews } from "../lib/andy-review.mjs";
import nextConfig from "../next.config.mjs";

test("review IDs are unique and identify exactly one real page section", () => {
 assert.equal(andyReviews.length, 9);
 assert.equal(new Set(andyReviews.map(item => item.id)).size, 9);
 assert.equal(new Set(andyReviews.map(item => item.anchor)).size, 9);
 const assigned = Object.entries(pages).flatMap(([page, data]) => data.sections.filter(s => s.reviewId).map(s => ({ page, section: s.id, reviewId: s.reviewId })));
 for (const item of andyReviews) {
  const matches = assigned.filter(s => s.reviewId === item.id);
  assert.equal(matches.length, 1, item.id);
  assert.equal(matches[0].page, item.page);
  assert.equal(matches[0].section, item.section);
 }
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
