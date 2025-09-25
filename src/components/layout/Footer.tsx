export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground">
          &copy; {currentYear} Virtuous Law Partners. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};