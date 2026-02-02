import { useState } from 'react';
import { Play } from 'lucide-react';

interface BannerCardProps {
  title: string;
  url: string;
  size: string;
  brand: string;
  index: number;
}

export const BannerCard = ({ title, url, size, brand, index }: BannerCardProps) => {
  // const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <div 
        className="card-showcase glow-effect group"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-display font-bold text-gradient tracking-wide">{brand}</h3>
            <span className="text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-full font-medium">{size}</span>
          </div>
          
          <div className="banner-preview mb-4 group-hover:border-primary/30 border border-transparent transition-colors">
            <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
              <a
              href={url}
              rel="noopener noreferrer"
              target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                <Play className="w-4 h-4" />
                Preview
              </a>
            </div>
          </div>
          
          {/* <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Open in new tab
            <ExternalLink className="w-4 h-4" />
          </a> */}
        </div>
      </div>

      {/* Preview Modal */}
     
    </>
  );
};
