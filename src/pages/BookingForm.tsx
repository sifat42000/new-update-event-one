/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Send } from 'lucide-react';

export default function BookingForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { designImage, packageName, serviceName } = location.state || {};

  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation: redirect to thank you page
    navigate('/thank-you');
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center space-x-2 text-rose-600 hover:text-rose-700 mb-8 font-bold transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Gallery</span>
        </button>

        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* Left Side: Info */}
          <div className="p-10 bg-rose-600 text-white flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-4">Complete Your Booking</h1>
              <p className="text-rose-100 mb-8">
                Fill out the form to request a booking for this decoration design. We will contact you shortly to confirm the details.
              </p>
              
              {designImage && (
                <div className="rounded-2xl overflow-hidden border-2 border-white/20 shadow-lg">
                  <img src={designImage} alt="Selected Design" className="w-full aspect-video object-cover" />
                  <div className="p-4 bg-white/10 backdrop-blur-md">
                    <p className="font-bold">{packageName}</p>
                    <p className="text-xs text-rose-200">{serviceName}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 text-sm text-rose-200">
              <p>By clicking Purchase, you agree to our terms of service.</p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Enter your phone number"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-rose-600 text-white py-5 rounded-2xl font-bold text-lg shadow-lg shadow-rose-200 hover:bg-rose-700 transition-all flex items-center justify-center space-x-2"
              >
                <span>Purchase</span>
                <Send size={20} />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
