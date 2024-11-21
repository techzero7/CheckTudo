import React from 'react';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Transforme Suas</span>
              <span className="block text-blue-200">Inspeções e Auditorias</span>
            </h1>
            <p className="mt-3 text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Simplifique processos, garanta conformidade e reduza custos com nossa solução personalizada para empresas e comércios.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-white hover:bg-gray-50 transition-colors duration-150 ease-in-out">
                Solicite uma Demonstração
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <img
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
                alt="Dashboard preview"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}