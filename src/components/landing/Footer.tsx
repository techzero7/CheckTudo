import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold">SafetyBR79</h2>
            <p className="text-gray-400">Transformando inspeções e auditorias.</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <a
              href="#"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Fale Conosco
            </a>
          </div>
        </div>
        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Sobre Nós</h3>
            <ul>
              <li><a href="#sobre" className="text-gray-400 hover:text-white">Quem Somos</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-white">Contato</a></li>
              <li><a href="#carreiras" className="text-gray-400 hover:text-white">Carreiras</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Produtos</h3>
            <ul>
              <li><a href="#inspecoes" className="text-gray-400 hover:text-white">Inspeções</a></li>
              <li><a href="#auditorias" className="text-gray-400 hover:text-white">Auditorias</a></li>
              <li><a href="#checklist" className="text-gray-400 hover:text-white">Checklists</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Suporte</h3>
            <ul>
              <li><a href="#faq" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="#documentacao" className="text-gray-400 hover:text-white">Documentação</a></li>
              <li><a href="#politicas" className="text-gray-400 hover:text-white">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} SafetyBR79. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
