export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-2xl font-display font-bold mb-6">Home Scout NZ</h2>
        <div className="flex justify-center gap-8 mb-8 text-sm opacity-80">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Sitemap</a>
        </div>
        <p className="text-sm opacity-50">
          &copy; {new Date().getFullYear()} Home Scout NZ. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
