import { Target, Heart, Award, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Reliability',
      description: 'Consistent delivery of high-quality water solutions'
    },
    {
      icon: Users,
      title: 'Professionalism',
      description: 'Expert team with proven technical expertise'
    },
    {
      icon: Heart,
      title: 'Community Impact',
      description: 'Transforming lives through access to clean water'
    },
    {
      icon: Target,
      title: 'Quality Workmanship',
      description: 'Durable solutions built to last'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Bati-Ngalun Company is a Gambian-owned contractor with proven experience in delivering reliable borehole and water supply solutions. Our work spans rural communities, civil servant housing schemes, and government-supported projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-12 text-white shadow-2xl">
          <div className="flex items-start gap-4 mb-4">
            <Target className="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed text-blue-50">
                To improve access to clean and sustainable water through professional, affordable, and durable solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
