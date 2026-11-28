import test from "node:test";
import assert from "node:assert/strict";
import { exampleProfile, exampleMetals, measuredAminoAcidGrams, labelProteinGrams, essentialGrams, bcaaGrams, leucineGrams, aminoAcidToLabelPercent } from "../lib/product-example.mjs";

test("100 g example profile reconciles with the total amino acid card", () => {
  const total = exampleProfile.reduce((sum, aa) => sum + aa.mg, 0);
  assert.ok(Math.abs(total - measuredAminoAcidGrams * 1000) < 0.01);
  assert.ok(measuredAminoAcidGrams <= labelProteinGrams && labelProteinGrams <= 100);
});
test("EAA, BCAA and leucine cards use the same product basis", () => {
  assert.ok(Math.abs(essentialGrams - 13.104) < 0.0001);
  assert.ok(Math.abs(bcaaGrams - 5.9904) < 0.0001);
  assert.ok(Math.abs(leucineGrams - 2.5344) < 0.0001);
  assert.ok(leucineGrams < bcaaGrams && bcaaGrams < essentialGrams && essentialGrams < measuredAminoAcidGrams);
  assert.ok(Math.abs(aminoAcidToLabelPercent - 96) < 0.000001);
});
test("profile has 18 unique amino acids in descending order", () => {
  assert.equal(new Set(exampleProfile.map(aa => aa.abbr)).size, 18);
  assert.ok(exampleProfile.every((aa, i) => aa.mg > 0 && (!i || aa.mg <= exampleProfile[i - 1].mg)));
});
test("metals use nonnegative microgram quantities within the example chart scale", () => {
  assert.deepEqual(exampleMetals.map(m => m.name), ["Lead", "Cadmium", "Mercury", "Arsenic"]);
  assert.ok(exampleMetals.every(m => Number.isFinite(m.micrograms) && m.micrograms >= 0 && m.micrograms <= 0.8));
});
