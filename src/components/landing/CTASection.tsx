import React from "react";

export const CTASection: React.FC = () => {
  return (
    <section className="bg-blue-600 py-12">
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Pronto para transformar suas inspeções?
        </h2>
        <p className="text-lg mb-6">
          Digitalize seus processos e aumente a eficiência da sua equipe agora
          mesmo. Entre em contato e descubra como podemos ajudar sua empresa.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contato"
            className="bg-white text-blue-600 py-3 px-6 rounded-lg font-bold hover:bg-gray-200 transition"
          >
            Entre em Contato
          </a>
          <a
            href="#demo"
            className="bg-blue-500 border border-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Solicitar Demonstração
          </a>
        </div>
      </div>
    </section>
  );
};
