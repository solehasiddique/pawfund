'use client';

import { Heart, CreditCard, DollarSign, Shield } from 'lucide-react';
import { useState } from 'react';

const predefinedAmounts = [10, 25, 50, 100, 250, 500];

const impactData = [
  { amount: 10, impact: 'Feeds one dog for a week' },
  { amount: 25, impact: 'Provides basic medical checkup' },
  { amount: 50, impact: 'Vaccinations for one dog' },
  { amount: 100, impact: 'Emergency medical treatment' },
  { amount: 250, impact: 'Shelter for one dog for a month' },
  { amount: 500, impact: 'Surgery and full recovery care' },
];

export default function DonationPage() {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const getImpact = (amount: number) => {
    const impact = impactData.find((item) => item.amount === amount);
    return impact ? impact.impact : 'Makes a difference in a dog\'s life';
  };

  const currentAmount = customAmount ? parseFloat(customAmount) : selectedAmount;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-rose-500 text-white py-16">
        <div className="px-6 mx-auto max-w-7xl">
          <h1 className="text-5xl mb-4">Make a Donation</h1>
          <p className="text-xl opacity-90">
            Every contribution helps save and improve the lives of stray dogs
          </p>
        </div>
      </div>

      <div className="px-6 py-12 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              {/* Donation Type */}
              <div className="mb-8">
                <label className="text-lg text-gray-900 mb-4 block">Donation Type</label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setDonationType('one-time')}
                    className={`flex-1 py-3 rounded-lg border-2 transition-colors ${
                      donationType === 'one-time'
                        ? 'border-orange-500 bg-orange-50 text-orange-500'
                        : 'border-gray-300 text-gray-700 hover:border-orange-300'
                    }`}
                  >
                    One-time
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`flex-1 py-3 rounded-lg border-2 transition-colors ${
                      donationType === 'monthly'
                        ? 'border-orange-500 bg-orange-50 text-orange-500'
                        : 'border-gray-300 text-gray-700 hover:border-orange-300'
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <label className="text-lg text-gray-900 mb-4 block">Select Amount</label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`py-4 rounded-lg border-2 transition-colors ${
                        selectedAmount === amount && !customAmount
                          ? 'border-orange-500 bg-orange-50 text-orange-500'
                          : 'border-gray-300 text-gray-700 hover:border-orange-300'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(0);
                    }}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Personal Information */}
              <div className="mb-8">
                <h3 className="text-lg text-gray-900 mb-4">Personal Information</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Payment Information */}
              <div className="mb-8">
                <h3 className="text-lg text-gray-900 mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Payment Information
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={formData.expiry}
                      onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full py-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" />
                Donate ${currentAmount.toLocaleString()}{donationType === 'monthly' && '/month'}
              </button>

              <p className="text-sm text-gray-500 text-center mt-4 flex items-center justify-center gap-1">
                <Shield className="w-4 h-4" />
                Your payment is secure and encrypted
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Impact Summary */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl text-gray-900 mb-4">Your Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount:</span>
                  <span className="text-gray-900">${currentAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Frequency:</span>
                  <span className="text-gray-900 capitalize">{donationType}</span>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">This donation will:</p>
                  <p className="text-orange-500">{getImpact(selectedAmount)}</p>
                </div>
              </div>
            </div>

            {/* Tax Deductible */}
            <div className="bg-orange-50 rounded-2xl p-6">
              <h3 className="text-lg text-gray-900 mb-2">Tax Deductible</h3>
              <p className="text-gray-600 text-sm">
                PawFund is a registered non-profit. Your donation is tax-deductible to the extent allowed by law.
              </p>
            </div>

            {/* Other Ways to Help */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg text-gray-900 mb-4">Other Ways to Help</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Heart className="w-4 h-4 text-orange-500 mt-0.5" />
                  <span>Adopt a rescued dog</span>
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="w-4 h-4 text-orange-500 mt-0.5" />
                  <span>Volunteer at local shelters</span>
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="w-4 h-4 text-orange-500 mt-0.5" />
                  <span>Share our campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="w-4 h-4 text-orange-500 mt-0.5" />
                  <span>Start your own fundraiser</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
