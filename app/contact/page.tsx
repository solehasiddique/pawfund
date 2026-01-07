"use client";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-rose-500 text-white py-16">
        <div className="px-6 mx-auto max-w-7xl">
          <h1 className="text-5xl mb-4">Contact Us</h1>
          <p className="text-xl opacity-90">
            We're here to help. Reach out to us anytime!
          </p>
        </div>
      </div>

      <div className="px-6 py-12 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-3xl text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email</p>
                    <p className="text-gray-900">support@pawfund.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Phone</p>
                    <p className="text-gray-900">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Address</p>
                    <p className="text-gray-900">123 Pet Street<br />San Francisco, CA 94102</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Hours</p>
                    <p className="text-gray-900">Mon - Fri: 9am - 6pm<br />Sat - Sun: 10am - 4pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-orange-50 rounded-2xl p-6">
              <h3 className="text-xl text-gray-900 mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-orange-500" />
                Quick Help
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-900 mb-1">How do I start a campaign?</p>
                  <p className="text-sm text-gray-600">Visit our Campaigns page and click "Start a Campaign"</p>
                </div>
                <div>
                  <p className="text-sm text-gray-900 mb-1">Is my donation tax-deductible?</p>
                  <p className="text-sm text-gray-600">Yes! We're a registered 501(c)(3) nonprofit</p>
                </div>
                <div>
                  <p className="text-sm text-gray-900 mb-1">Can I volunteer?</p>
                  <p className="text-sm text-gray-600">Absolutely! Contact us to learn more about volunteer opportunities</p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg text-gray-900 mb-2">Response Time</h3>
              <p className="text-sm text-gray-600">
                We typically respond to all inquiries within 24 hours during business days.
                For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
