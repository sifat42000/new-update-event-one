/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../constants';
import { Phone, MessageCircle, Facebook, Mail, MapPin, User } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24">
      <section className="py-20 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Have questions or ready to book? Reach out to us through any of the channels below.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Business Information</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <User size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Owner</p>
                    <p className="text-xl font-bold text-gray-900">{BUSINESS_INFO.owner}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Phone Numbers</p>
                    {BUSINESS_INFO.phones.map(phone => (
                      <p key={phone} className="text-xl font-bold text-gray-900">{phone}</p>
                    ))}
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Email Address</p>
                    <p className="text-xl font-bold text-gray-900">{BUSINESS_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Location</p>
                    <p className="text-xl font-bold text-gray-900">Chuadanga, Bangladesh</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <div className="grid grid-cols-1 gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phones[0]}`}
                  className="flex items-center justify-between p-6 bg-rose-600 text-white rounded-2xl hover:bg-rose-700 transition-all group"
                >
                  <div className="flex items-center space-x-4">
                    <Phone size={24} />
                    <span className="text-lg font-bold">Call Now</span>
                  </div>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                </a>

                <a
                  href={`https://wa.me/88${BUSINESS_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 bg-green-600 text-white rounded-2xl hover:bg-green-700 transition-all group"
                >
                  <div className="flex items-center space-x-4">
                    <MessageCircle size={24} />
                    <span className="text-lg font-bold">WhatsApp Chat</span>
                  </div>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                </a>

                <a
                  href={BUSINESS_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all group"
                >
                  <div className="flex items-center space-x-4">
                    <Facebook size={24} />
                    <span className="text-lg font-bold">Facebook Page</span>
                  </div>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                </a>
              </div>

              <div className="mt-12 p-6 bg-white rounded-2xl border border-gray-200">
                <p className="text-gray-600 text-center">
                  Our office is open from <strong>9:00 AM to 9:00 PM</strong> daily. Feel free to visit us or call anytime!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
