import { Drill, Wrench, Sun, Pipette } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Drill,
      title: 'Borehole Drilling',
      description: 'Professional drilling services using appropriate equipment and techniques to ensure reliable water supply.'
    },
    {
      icon: Wrench,
      title: 'Borehole Rehabilitation',
      description: 'Restoration and improvement of existing boreholes to extend lifespan and efficiency.'
    },
    {
      icon: Sun,
      title: 'Solar-Powered Water Systems',
      description: 'Installation of solar pumping systems for sustainable and cost-effective water supply.'
    },
    {
      icon: Pipette,
      title: 'Piping & Water Tank Installation',
      description: 'Complete water distribution systems including storage tanks and piping.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600">
            Comprehensive water solutions tailored to meet the needs of communities and institutions across The Gambia
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto mt-16 bg-white rounded-2xl p-10 shadow-xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
          <p className="text-lg text-gray-600 mb-6">
            We work closely with our clients to design and implement water systems that meet specific requirements and budgets.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
