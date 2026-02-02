export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Mahesh Bhatt Developer Showcase Logo" 
              className="h-12 brightness-0 invert opacity-70"
            />
          </div>
          
          <p className="text-sm text-muted-foreground">
            Thanks for visiting! Made with ❤️ by Mahesh Bhatt. 
          </p>
        </div>
      </div>
    </footer>
  );
};
