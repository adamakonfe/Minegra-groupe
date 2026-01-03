interface PageBannerProps {
  title: string;
  subtitle?: string;
}

const PageBanner = ({ title, subtitle }: PageBannerProps) => {
  return (
    <div className="bg-muted py-12 text-center">
      <div className="container-wau">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="gold-line" />
          <span className="text-primary uppercase tracking-widest text-sm font-semibold">
            {subtitle || "WAU Drilling"}
          </span>
          <div className="gold-line" />
        </div>
        <h1 className="section-title">{title}</h1>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="w-12 h-1 bg-primary" />
          <div className="w-12 h-1 bg-border" />
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
