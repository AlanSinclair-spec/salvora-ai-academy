import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <div className="salvora-container py-24 text-center">
        <h1 className="text-6xl md:text-8xl font-black text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Página no encontrada
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Button variant="hero" asChild>
          <Link to="/">
            <Home className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
