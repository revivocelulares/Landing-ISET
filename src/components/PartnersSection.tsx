import React from 'react';

const PartnersSection: React.FC = () => {
  const partners = [
    "LogoIpsum", "LogoIpsum", "LogoIpsum", "LogoIpsum", "LogoIpsum",
    "LogoIpsum", "IPSUM", "LogoIpsum", "LogoIpsum", "LOGO"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            We collaborate with <span className="text-azure-400">200+ leading</span>
          </h2>
          <h3 className="text-2xl font-bold text-gray-900">
            universities and companies
          </h3>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              <span className="text-lg font-semibold text-gray-600">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;