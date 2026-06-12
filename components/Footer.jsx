export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-12 bg-cream border-t border-border">
      <div className="max-w-5xl mx-auto">
        {/* Brand + secondary details */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-8">
          <div>
            <div className="font-heading text-sm text-ink mb-1">
              Perfect Protein Partners
            </div>
            <div className="font-sans text-xs text-faint">
              Ingredient sourcing for brands that get protein right
            </div>
          </div>
          <div className="flex flex-col gap-1 font-sans text-xs text-faint sm:text-right">
            <span>Owned and operated by The Performance Vibe LLC</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-border">
          <p className="font-sans text-xs text-faint">
            &copy; {new Date().getFullYear()} Perfect Protein Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
