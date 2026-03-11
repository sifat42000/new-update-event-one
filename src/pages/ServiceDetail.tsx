/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { Check, ArrowLeft } from 'lucide-react';
import ContactSection from '../components/ContactSection';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = SERVICES.find(s => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover blur-sm"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Link to="/services" className="inline-flex items-center space-x-2 text-rose-400 hover:text-rose-300 mb-8 transition-colors">
            <ArrowLeft size={20} />
            <span>Back to Services</span>
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Choose from our carefully curated packages designed to fit your style and budget.
          </motion.p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group"
              >
                <div className="p-8 flex-grow">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="inline-block px-4 py-1 bg-rose-50 text-rose-600 rounded-full text-sm font-bold">
                      {pkg.priceRange}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                    {pkg.description}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {['Professional Setup', 'Quality Materials', 'Custom Lighting', 'On-time Delivery'].map((feature) => (
                      <li key={feature} className="flex items-center space-x-3 text-sm text-gray-700">
                        <div className="bg-green-100 text-green-600 p-1 rounded-full">
                          <Check size={14} />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 pt-0">
                  <Link
                    to={`/service/${service.id}/package/${pkg.id}`}
                    className="block w-full text-center bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-rose-600 transition-colors group-hover:scale-[1.02] active:scale-95 duration-300"
                  >
                    View Designs
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
