// Wholly fictional data for an interactive packaging demonstration.
// All quantities are per 100 g of product, not per 100 g protein.
export const examplePath = "/products/partner-protein-example";
export const examplePreviewOrigin = "https://perfect-protein-partners-git-rede-9137ff-perfectproteinpartners.vercel.app";
export const labelProteinGrams = 30;
export const measuredAminoAcidGrams = 28.8;
const aminoAcids = [
  ["Glu", "Glutamic acid", 160], ["Asp", "Aspartic acid", 102],
  ["Leu", "Leucine", 88], ["Lys", "Lysine", 76], ["Pro", "Proline", 68],
  ["Val", "Valine", 62], ["Ile", "Isoleucine", 58], ["Thr", "Threonine", 54],
  ["Ser", "Serine", 48], ["Ala", "Alanine", 44], ["Phe", "Phenylalanine", 40],
  ["Arg", "Arginine", 36], ["Gly", "Glycine", 32], ["Tyr", "Tyrosine", 30],
  ["Met", "Methionine", 28], ["His", "Histidine", 26],
  ["Cys", "Cystine", 25], ["Trp", "Tryptophan", 23],
];
export const exampleProfile = aminoAcids.map(([abbr, name, share], i) => ({
  abbr, name, mg: Math.round(share * measuredAminoAcidGrams * 10) / 10,
  // Visual grouping only; this demonstration is not an SRT computation.
  tail: i >= 12,
}));
const essential = new Set(["His", "Ile", "Leu", "Lys", "Met", "Phe", "Thr", "Trp", "Val"]);
const branched = new Set(["Ile", "Leu", "Val"]);
const totalFor = names => exampleProfile.filter(aa => names.has(aa.abbr)).reduce((sum, aa) => sum + aa.mg, 0) / 1000;
export const essentialGrams = totalFor(essential);
export const bcaaGrams = totalFor(branched);
export const leucineGrams = exampleProfile.find(aa => aa.abbr === "Leu").mg / 1000;
export const aminoAcidToLabelPercent = measuredAminoAcidGrams / labelProteinGrams * 100;
// Independent fictional concentrations, with no safety thresholds or pass/fail labels.
export const exampleMetals = [
  { name: "Lead", micrograms: 0.42 }, { name: "Cadmium", micrograms: 0.68 },
  { name: "Mercury", micrograms: 0.08 }, { name: "Arsenic", micrograms: 0.24 },
];
