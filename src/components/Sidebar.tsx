import React from "react";

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen">
      <div className="p-4 text-center font-bold border-b border-gray-700">
        Menu
      </div>
      <ul className="space-y-2 p-4">
        <li>
          <a href="#home" className="block hover:bg-gray-700 p-2 rounded">
            Início
          </a>
        </li>
        <li>
          <a href="#features" className="block hover:bg-gray-700 p-2 rounded">
            Funcionalidades
          </a>
        </li>
        <li>
          <a href="#pricing" className="block hover:bg-gray-700 p-2 rounded">
            Preços
          </a>
        </li>
        <li>
          <a href="#contact" className="block hover:bg-gray-700 p-2 rounded">
            Contato
          </a>
        </li>
      </ul>
    </aside>
  );
};
