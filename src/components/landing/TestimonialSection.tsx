import React from 'react';

interface Testimonial {
  name: string;
  company: string;
  feedback: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "João Silva",
    company: "Empresa X",
    feedback:
      "Desde que adotamos o sistema, nossas auditorias são 3x mais rápidas e muito mais confiáveis!",
    avatar: "https://via.placeholder.com/100", // Substitua pela URL do avatar.
  },
  {
    name: "Maria Oliveira",
    company: "Comércio Y",
    feedback:
      "Reduzimos os custos em 40% com a digitalização de processos e geração automática de relatórios.",
    avatar: "https://via.placeholder.com/100",
  },
  {
    name: "Carlos Souza",
    company: "Indústria Z",
    feedback:
      "A possibilidade de trabalhar offline é essencial para nossas inspeções em áreas remotas.",
    avatar: "https://via.placeholder.com/100",
  },
];

export const TestimonialSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          O que nossos clientes estão dizendo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center"
            >
              <img
                src={testimonial.avatar}
                alt={`${testimonial.name} avatar`}
                className="w-24 h-24 rounded-full mb-4"
              />
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
              <h4 className="text-lg font-semibold text-gray-800 mt-4">
                {testimonial.name}
              </h4>
              <span className="text-sm text-gray-500">{testimonial.company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
