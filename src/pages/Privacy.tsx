import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-xl text-gray-600">Last updated: March 15, 2024</p>
      </div>

      <div className="space-y-8">
        <section>
          <div className="flex items-center space-x-2 mb-4">
            <Shield className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Name and contact information</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information</li>
              <li>Order history and preferences</li>
              <li>Communication history with our support team</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="flex items-center space-x-2 mb-4">
            <Lock className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900">How We Protect Your Data</h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">We implement various security measures to maintain the safety of your personal information:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>SSL encryption for all data transmission</li>
              <li>Secure payment processing</li>
              <li>Regular security audits</li>
              <li>Limited employee access to personal data</li>
              <li>Strict data retention policies</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="flex items-center space-x-2 mb-4">
            <Eye className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">You have the following rights regarding your personal data:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Right to access your personal data</li>
              <li>Right to correct inaccurate data</li>
              <li>Right to request deletion of your data</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="flex items-center space-x-2 mb-4">
            <FileText className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Email: privacy@shophub.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Tech Street, Digital City, DC 12345</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};