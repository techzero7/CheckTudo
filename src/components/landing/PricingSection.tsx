import React from 'react';

export const PricingSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Planos Simples e Acessíveis
        </h2>
        <p className="text-gray-600 mb-8">
          Escolha o plano ideal para sua empresa e comece a transformar suas inspeções e auditorias.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Plan Básico */}
          <div className="border rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Básico</h3>
            <p className="text-gray-600">Ideal para pequenas empresas.</p>
            <p className="text-4xl font-extrabold text-gray-800 mt-4 mb-6">
              R$49<span className="text-lg text-gray-600">/mês</span>
            </p>
            <ul className="text-gray-600 mb-6">
              <li>- Até 5 usuários</li>
              <li>- 10 formulários personalizados</li>
              <li>- Suporte via e-mail</li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Escolher Plano
            </button>
          </div>
          {/* Plan Profissional */}
          <div className="border rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Profissional</h3>
            <p className="text-gray-600">Para empresas em crescimento.</p>
            <p className="text-4xl font-extrabold text-gray-800 mt-4 mb-6">
              R$99<span className="text-lg text-gray-600">/mês</span>
            </p>
            <ul className="text-gray-600 mb-6">
              <li>- Até 20 usuários</li>
              <li>- Formulários ilimitados</li>
              <li>- Suporte prioritário</li>
              <li>- Relatórios avançados</li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Escolher Plano
            </button>
          </div>
          {/* Plan Empresarial */}
          <div className="border rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Empresarial</h3>
            <p className="text-gray-600">Soluções personalizadas.</p>
            <p className="text-4xl font-extrabold text-gray-800 mt-4 mb-6">
              Sob Consulta
            </p>
            <ul className="text-gray-600 mb-6">
              <li>- Usuários ilimitados</li>
              <li>- Integrações personalizadas</li>
              <li>- Treinamento dedicado</li>
              <li>- Suporte 24/7</li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
