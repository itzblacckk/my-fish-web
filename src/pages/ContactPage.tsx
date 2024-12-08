import React from 'react';
import { ContactFormComponent } from '../components/contact/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: '123 Aquarium Street, Mumbai, Maharashtra'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 1234567890'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@hmguppyfarm.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Sat: 9:00 AM - 6:00 PM'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Contact Us</h1>
          <p className="text-gray-600 mb-8">Get in touch with us for any inquiries about our guppy fish.</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                {contactInfo.map(({ icon: Icon, title, content }) => (
                  <div key={title} className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{title}</h3>
                      <p className="text-gray-600">{content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
                <ContactFormComponent />
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-blue-600" />
                Our Location
              </h2>
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.1511457218363!2d73.0856881!3d19.1687784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf0058e765cd%3A0x66998a2fd057dce1!2sHM%20Guppy%20farm!5e0!3m2!1sen!2sin!4v1733308982406!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}