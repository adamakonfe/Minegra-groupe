import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumb?: BreadcrumbItem[];
}

const PageBanner = ({ title, subtitle, breadcrumb }: PageBannerProps) => {
  return (
    <div className="bg-muted py-12 text-center">
      <div className="container-main">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="gold-line" />
          <span className="text-primary uppercase tracking-widest text-sm font-semibold">
            {subtitle || "MINEGRA GROUP"}
          </span>
          <div className="gold-line" />
        </div>
        <h1 className="section-title">{title}</h1>
        {breadcrumb && (
          <nav className="flex items-center justify-center gap-2 mt-6 text-sm">
            {breadcrumb.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                {index > 0 && <span className="text-muted-foreground">/</span>}
                {item.href ? (
                  <Link to={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-foreground font-medium">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="w-12 h-1 bg-primary" />
          <div className="w-12 h-1 bg-border" />
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
