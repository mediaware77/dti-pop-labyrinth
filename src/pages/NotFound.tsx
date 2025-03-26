
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <Layout className="flex items-center justify-center min-h-screen px-4">
      <div className="max-w-md w-full text-center space-y-6 animate-fade-up">
        <div className="space-y-2">
          <h1 className="text-7xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold">Página não encontrada</h2>
        </div>
        
        <p className="text-muted-foreground">
          A página que você está procurando não existe ou foi movida para outro endereço.
        </p>
        
        <div className="pt-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
