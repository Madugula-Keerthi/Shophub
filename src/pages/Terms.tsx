import React from 'react';
import { FileText, ShieldCheck, AlertCircle, HelpCircle } from 'lucide-react';

export const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-xl text-gray-600">Last updated: March 15, 2024</p>
      </div>

      <div className="space-y-8">
        <section>
          <div className="flex items-center space-x-2 mb-4">
            <FileText className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900">Agreement to Terms</h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600">
              By accessing or using ShopHub's services, you agree to be bound by these Terms of Service. 
              If you disagree with any part of the terms, you may not access our services.
            </p>
          </div>
        </section>

        <section>
          <div className="flex items-center space-x-2 mb-4">
            <ShieldCheck className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900">User Responsibilities</h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Provide accurate account information</li>
              <li>Maintain the security of your account</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not engage in any fraudulent activities</li>
              <li>Not interfere with the proper working of the service</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="flex items-center space-x-2 mb-4">
            <AlertCircle className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900">Limitations of Liability</h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">
              ShopHub shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Use or inability to use our services</li>
              <li>Any unauthorized access to your data</li>
              <li>Statements or conduct of any third party</li>
              <li>Any other matter relating to the service</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="flex items-center space-x-2 mb-4">
            <HelpCircle className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900">Changes to Terms</h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, 
              we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes 
              a material change will be determined at our sole discretion.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};