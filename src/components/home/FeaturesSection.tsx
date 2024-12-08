import React from 'react';
import { Award, Droplet, ThermometerSun, Truck, HeartHandshake, Clock } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Hand-picked, high-grade guppies from champion bloodlines'
    },
    {
      icon: Droplet,
      title: 'Water Quality',
      description: 'Maintained in pristine conditions with regular testing'
    },
    {
      icon: ThermometerSun,
      title: 'Temperature Control',
      description: 'Climate-controlled breeding facilities'
    },
    {
      icon: Truck,
      title: 'Safe Shipping',
      description: 'Specialized packaging for safe transportation'
    },
    {
      icon: HeartHandshake,
      title: 'Expert Support',
      description: '24/7 assistance for fish care guidance'
    },
    {
      icon: Clock,
      title: 'Regular Updates',
      description: 'Weekly new arrivals and stock updates'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose HM Guppy Farm?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="ml-4 text-xl font-semibold">{title}</h3>
              </div>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}