export const pages = {
  seal: {
    title: "The PPP seal", eyebrow: "Earned recognition", heading: ["Earn the seal.", "Stand behind the story."],
    intro: "Understand what the PPP seal represents, how it appears on your products and how selected findings can support a clearer product story.",
    cta: { interest: "seal", heading: ["Discuss your products.", "Explore earned recognition."], description: "Talk with PPP about evaluation, seal use and the information your brand wants to share." },
    sections: [
      { id: "star-ratings", navLabel: "Ratings", title: "What the stars communicate.", text: "The stars identify a product’s level within PPP’s protein-profile evaluation system. Independent laboratory amino acid measurements inform PPP’s evaluation; the explanation of the assigned level belongs alongside the recognition." },
      { id: "evaluated-products", navLabel: "Eligibility", title: "Recognition belongs to the evaluated product.", text: "Discuss individual products or a wider product range. Each product’s findings and evaluation provide the context for its seal use. Start with your current formulations and agree which products and questions the work should cover.", links: [{ href: "/testing#how-it-works", label: "See how evaluation begins" }] },
      {
        id: "packaging", navLabel: "Packaging", title: "Make room for recognition.", legacyAnchor: "ppp-a02",
        paragraphs: [
          "The horizontal PPP Protein Profile mark can be demonstrated on a tub label or a bar wrapper, with the stars integrated into the design. Artwork size, placement and the explanation accompanying the seal should be agreed for the packaging format. A QR code can sit beside the mark to give customers a route to further information.",
          "To retain the PPP seal, a product must be reassessed at least once every 40 calendar weeks, and sooner if a qualifying change occurs.",
        ],
      },
      { id: "product-transparency", navLabel: "QR summaries", title: "From the package to the product summary.", text: "A QR-linked page gives customers and business partners access to selected product information. Your team decides what to disclose: that might include the amino acid profile, selected metals results or an explanation of the evaluation. The full report remains separate from the public summary. A page reached through a QR code is accessible to anyone with its link.", links: [{ href: "/#transparency", label: "Try the packaging QR demonstration" }, { href: "/products/partner-protein-example", label: "View the example product summary" }] },
      { id: "publication", navLabel: "Publishing", title: "Agree the story before publishing.", text: "Identify the product and the findings being shared, use an approved explanation of the recognition and review the final packaging and digital content together. Our Partner Protein example demonstrates the experience with fictional data; it is not a listing of an awarded client product." },
    ],
  },
  testing: {
    title: "Testing & results", eyebrow: "Finished-product knowledge", heading: ["Know your protein.", "Understand your results."],
    intro: "Explore the laboratory work, reporting and results discussion behind PPP’s evaluation, from the first conversation to the findings your team can use.",
    cta: { interest: "testing", heading: ["Bring your questions.", "Define the work together."], description: "Discuss your products, testing priorities and the reporting depth that fits your goals." },
    sections: [
      { id: "how-it-works", navLabel: "The process", title: "How the work comes together.", text: "Begin with your products, existing information and what your team wants to learn. Agree laboratory testing, sample arrangements, reporting, timing and pricing before work begins. PPP then reviews the laboratory findings and discusses the evaluation and useful next steps with your team." },
      { id: "report-deliverables", navLabel: "Your report", title: "What your results discussion can cover.", text: "Your results include laboratory findings, PPP’s interpretation, an explanation of the product’s evaluation and a discussion of the findings. The exploratory call establishes the scope; the results discussion can identify additional recommendations, comparisons or consulting worth exploring." },
      { id: "reporting-basis", navLabel: "Reading results", title: "Read the quantities on the right basis.", text: "A protein quantity and an amino acid profile answer different questions. The report should make clear whether quantities refer to product weight, a serving or a gram of protein. That context matters when comparing products with different serving sizes or protein concentrations. Our website examples label their basis explicitly." },
      { id: "laboratory-preparations", navLabel: "Lab methods", title: "Three preparations for a fuller profile.", text: "Different amino acids require different laboratory preparations. Acid hydrolysis supports measurement of most amino acids; alkaline hydrolysis is used for tryptophan; and performic oxidation supports measurement of cystine and methionine. The laboratory report identifies the methods, combined amino acid reporting where applicable and reporting limits." },
      { id: "metals", navLabel: "Metals", title: "Optional metals testing.", text: "A separate panel can measure lead, cadmium, mercury and arsenic. Results need a clearly stated quantity basis and interpretation in the context of product use and serving size. A result below a reporting limit does not mean zero. Metals testing is agreed as part of the project scope." },
      { id: "testing-scope", navLabel: "Testing scope", title: "What the testing covers.", text: "Amino acid profiling measures composition in the submitted samples. It does not by itself establish digestion, muscle protein synthesis, overall product safety or the accuracy of the full nutrition label. PPP’s profile evaluation and optional additional testing each have their own scope." },
      { id: "next-steps", navLabel: "Next steps", title: "Use the findings to decide what comes next.", text: "The results can inform a seal discussion or identify questions for further work. Consulting can explore profile adjustments, raw-material cost opportunities, relevant product comparisons and future development priorities.", links: [{ href: "/opportunities", label: "Explore consulting & formulation" }, { href: "/seal", label: "Understand the PPP seal" }] },
    ],
  },
  opportunities: {
    title: "Consulting & formulation", eyebrow: "Explore what comes next", heading: ["Put your findings", "to work."],
    intro: "Explore how your results could inform amino acid profile improvements, ingredient decisions, relevant comparisons and future product development.",
    cta: { interest: "formulation", heading: ["What could your", "results make possible?"], description: "Discuss the questions worth exploring for your products and agree a focused consulting scope." },
    sections: [
      { id: "profile-improvement", navLabel: "Profile improvement", title: "Amino acid profile improvement.", text: "Review the measured profile and investigate adjustments that could bring it closer to PPP’s complementary amino acid target. The options depend on the existing formulation, ingredient choices and the goals and constraints your team identifies." },
      { id: "cost-opportunities", navLabel: "Cost opportunities", title: "Raw-material cost opportunities.", text: "Assess ingredient combinations, current specifications and cost inputs alongside protein-profile goals. The analysis can help identify whether alternative formulations are worth pursuing. The potential for savings becomes clearer after the results and relevant formulation information are available; it is not a fixed outcome for every product." },
      { id: "comparisons", navLabel: "Comparisons", title: "Relevant product comparisons.", text: "Use appropriate available comparison data to explore how your product’s profile relates to relevant alternatives. The quantity basis, testing scope and source of comparison information need to be clear so different products are compared meaningfully." },
      { id: "development", navLabel: "Development", title: "Future product development.", text: "Turn the findings into priorities for reformulation or new product concepts. Agree which questions to investigate, what a useful recommendation would include and how any proposed changes would be assessed before implementation." },
      {
        id: "srt", navLabel: "SRT identification", title: "How we find your protein’s perfect partner.", legacyAnchor: "ppp-a06",
        paragraphs: [
          "Your lab results tell you how much of each amino acid your product contains. In a formulation consultation, PPP uses those results to explore what a change to your recipe could accomplish. We rank the amino acids from most to least abundant and identify the final five. Together, they form the slope regression tail, or SRT.",
          "When those five amounts drop off sharply, our patented method can model which amino acids to add, and in what amounts, to bring them closer together. That modeled complement is what we call your protein’s perfect partner.",
        ],
        links: [{ href: "https://patents.google.com/patent/US12217833B1/en", label: "View the U.S. patent" }],
      },
      { id: "project-scope", navLabel: "Project scope", title: "Define the project around the decision.", text: "Bring the results and the formulation, ingredient specifications, cost information and development priorities relevant to your question. Agree the required inputs, comparison basis, deliverables and follow-up work together. Detailed formulation and commercial information can be discussed through an agreed private follow-up.", links: [{ href: "/contact?interest=formulation", label: "Discuss a consulting project" }] },
    ],
  },
  about: {
    title: "About PPP", eyebrow: "Perfect Protein Partners", heading: ["A closer understanding.", "A clearer direction."],
    intro: "PPP helps protein-focused businesses connect measured amino acid findings with product evaluation and informed business decisions.",
    cta: { interest: "general", heading: ["Tell us about", "your products."], description: "Start a conversation about your team, your questions and what you want to learn." },
    sections: [
      {
        id: "our-story", navLabel: "Our story", title: "Why we started Perfect Protein Partners.", legacyAnchor: "ppp-a08",
        paragraphs: [
          "If two products each list 20 grams of protein per serving, what can a brand tell customers beyond that number? That question led us to look at the amino acids each protein source contributes and how those sources can complement one another in a finished product.",
          "Years of reviewing amino acid profiles helped us develop a consistent standard for the products that earn the PPP seal. We help brands understand where their products stand and explain those findings to customers and business partners.",
        ],
      },
      { id: "approach", navLabel: "Our approach", title: "Measurement and interpretation each have a role.", text: "Independent laboratory work provides the measurements. PPP reviews those findings under its evaluation approach and discusses their meaning with your team. Keeping those roles clear helps explain what was measured, how it was interpreted and which questions remain for further work.", links: [{ href: "/testing", label: "Learn about testing & results" }] },
      {
        id: "people", navLabel: "Meet Andy", title: "Meet Andy Triana", subtitle: "Founder and inventor", legacyAnchor: "ppp-a09",
        text: "Andrew “Andy” Triana has spent more than a decade working across exercise science, sports nutrition, and nutraceutical project management. A Certified Performance and Sport Scientist, he coached strength athletes through The Performance Vibe and taught athletes how to apply nutrition around training. Today, he leads Perfect Protein Partners, where he brings that experience to the review of finished products and works directly with brands to interpret their results.",
      },
      { id: "company", navLabel: "The company", title: "The company.", text: "Perfect Protein Partners is owned and operated by The Performance Vibe LLC." },
    ],
  },
};
