import { MapPin, Building, Users, Facebook } from 'lucide-react';

export default function Projects() {
  const projectTypes = [
    {
      icon: MapPin,
      title: 'Rural Communities',
      description: 'Bringing clean water to remote villages'
    },
    {
      icon: Users,
      title: 'Civil Servants',
      description: 'Supporting housing schemes and residential areas'
    },
    {
      icon: Building,
      title: 'Institutions & Development Partners',
      description: 'Large-scale projects for organizations and agencies'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Work</h2>
          <p className="text-xl text-gray-600">
            We have successfully completed borehole and water system projects across The Gambia
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {projectTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 text-center hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 leading-relaxed">{type.description}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-10 text-white text-center shadow-2xl">
          <Facebook className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">See Our Latest Projects</h3>
          <p className="text-lg text-blue-50 mb-6 leading-relaxed">
            Project photos and updates are regularly shared on our official Facebook page. Follow us to see our recent work and community impact.
          </p>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Visit Our Facebook Page
          </a>
        </div>
      </div>
    </section>
  );
}
