import React from 'react';
import { Clock, Shield, Zap, CheckCircle, BarChart, Smartphone } from 'lucide-react';

const features = [
  {
    name: 'Eficiência Máxima',
    description: 'Reduza o tempo das inspeções com formulários dinâmicos e inteligentes.',
    icon: Clock,
  },
  {
    name: 'Confiabilidade Total',
    description: 'Relatórios precisos com dados em tempo real e geolocalização.',
    icon: Shield,
  },
  {
    name: 'Modo Offline',
    description: 'Continue trabalhando mesmo sem conexão com a internet.',
    icon: Smartphone,
  },
  {
    name: 'Economia Real',
    description: 'Elimine custos com papel e reduza o retrabalho significativamente.',
    icon: BarChart,
  },
  {
    name: 'Dados Seguros',
    description: 'Criptografia de ponta a ponta e conformidade com LGPD.',
    icon: CheckCircle,
  },
  {
    name: 'Alta Performance',
    description: 'Sistema otimizado para resposta rápida e eficiente.',
    icon: Zap,
  },
];

export function FeatureSection() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">
            Benefícios
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Uma solução completa para suas inspeções
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Empresas que adotam sistemas de inspeção digital reduzem o tempo gasto em auditorias em até 40%.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.name} className="relative">
                  <div className="relative">
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </div>
                  <div className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}