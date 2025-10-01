import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: "umar-khalid-case",
    title: "Umar Khalid Case: A Legal Analysis",
    description: "An in-depth analysis of the legal proceedings and implications in the Umar Khalid case under UAPA.",
    date: "January 2025",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=500&fit=crop",
    category: "Criminal Law"
  },
  {
    id: "consumer-rights-india",
    title: "Understanding Consumer Rights in India",
    description: "A comprehensive guide to consumer protection laws and your rights as a consumer in India.",
    date: "January 2025",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    category: "Consumer Law"
  },
  {
    id: "property-disputes-resolution",
    title: "Resolving Property Disputes: A Legal Framework",
    description: "Navigate through property disputes with expert legal insights and resolution strategies.",
    date: "January 2025",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
    category: "Property Law"
  },
  {
    id: "divorce-proceedings-india",
    title: "Divorce Proceedings in India: What You Need to Know",
    description: "A detailed overview of divorce laws, procedures, and your legal rights in India.",
    date: "December 2024",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop",
    category: "Family Law"
  },
  {
    id: "trademark-protection",
    title: "Trademark Protection and Registration Process",
    description: "Essential guide to protecting your brand through trademark registration and enforcement.",
    date: "December 2024",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop",
    category: "Intellectual Property"
  },
  {
    id: "employment-rights",
    title: "Employment Rights and Labour Laws in India",
    description: "Understanding your rights as an employee and navigating workplace legal issues.",
    date: "December 2024",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=500&fit=crop",
    category: "Labour Law"
  }
];

const BlogList = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              Legal Insights & Analysis
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed with expert legal commentary, case analyses, and updates on Indian law.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <time>{post.date}</time>
                    <span className="ml-auto text-primary font-semibold">{post.category}</span>
                  </div>
                  <CardTitle className="text-2xl font-serif">{post.title}</CardTitle>
                  <CardDescription className="text-base">{post.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    onClick={() => navigate(`/blog/${post.id}`)}
                    variant="ghost"
                    className="w-full group"
                  >
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogList;
