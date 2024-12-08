import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    location: 'Mumbai',
    comment: 'Exceptional quality guppies! The Blue Moscow pair I received was stunning.',
    rating: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlRLdQrv-zU2-v_nU0hnlOoG8eD_2J7j5cuQ&s'
  },
  {
    name: 'Priya Patel',
    location: 'Delhi',
    comment: 'Great experience! The fish arrived healthy and the colors are amazing.',
    rating: 3,
    image: 'data:image/jpeg;base64,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'
  },
  {
    name: 'Amit Kumar',
    location: 'Bangalore',
    comment: 'Professional service and high-quality fish. Highly recommended!',
    rating: 5,
    image: 'data:image/png;base64,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'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}