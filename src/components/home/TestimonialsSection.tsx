import React from 'react';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Guppy Enthusiast',
      content: 'The quality of guppies from HM Farm is exceptional. Their Moscow Blues are simply stunning!',
      rating: 5
    },
    {
      name: 'Priya Patel',
      role: 'Aquarium Owner',
      content: 'Great customer service and healthy fish. They provide detailed care instructions which is very helpful.',
      rating: 5
    },
    {
      name: 'Amit Kumar',
      role: 'Fish Breeder',
      content: 'Best place for premium guppy varieties. Their breeding pairs have given excellent results.',
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}