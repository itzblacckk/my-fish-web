import React from 'react';
import { Award, Shield, Truck } from 'lucide-react';

export default function FeaturedSection() {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Hand-picked, healthy guppy fish from expert breeders'
    },
    {
      icon: Truck,
      title: 'Safe Delivery',
      description: 'Specialized packaging for stress-free transportation'
    },
    {
      icon: Shield,
      title: 'Health Guarantee',
      description: '7-day health guarantee on all purchases'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center"
            >
              <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}