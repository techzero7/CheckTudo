import React from "react";

export const DemoSection: React.FC = () => {
  return (
    <section className="bg-blue-50 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Experimente Agora
        </h2>
        <p className="text-gray-600 mb-8">
          Veja como nossa solução pode transformar suas inspeções e auditorias.
          Clique abaixo para testar uma demonstração interativa.
        </p>
        <div className="flex justify-center">
          <iframe
            title="Demo Interativa"
            src="https://surveyjs.io/create-survey"
            className="w-full md:w-3/4 h-96 border rounded-lg shadow-lg"
          ></iframe>
        </div>
        <button className="mt-8 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Acessar Demonstração Completa
        </button>
      </div>
    </section>
  );
};
