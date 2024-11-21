import React, { useState } from 'react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { QRCodeSVG } from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import 'survey-core/defaultV2.min.css';

export function FormBuilder() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });
  const [showQR, setShowQR] = useState(false);
  const [formUrl, setFormUrl] = useState('');
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const surveyJson = {
    elements: [
      {
        name: "FirstPage",
        elements: [
          {
            type: "text",
            name: "name",
            title: "Your name:",
            isRequired: true,
            placeholder: "John Doe"
          },
          {
            type: "text",
            name: "email",
            title: "Your email:",
            isRequired: true,
            placeholder: "john@example.com",
            validators: [{ type: "email" }]
          },
          {
            type: "comment",
            name: "feedback",
            title: "Please share your feedback:",
            isRequired: true,
            placeholder: "Your feedback helps us improve"
          },
          {
            type: "rating",
            name: "satisfaction",
            title: "How satisfied are you with our service?",
            rateMin: 0,
            rateMax: 10
          }
        ]
      }
    ],
    showQuestionNumbers: "off",
    completedHtml: "<h3>Thank you for your feedback!</h3>"
  };

  const handleSave = async () => {
    if (!formData.title || !formData.description) {
      alert('Please fill in all required fields');
      return;
    }

    const newFormId = 'form-' + Date.now();
    const url = `${window.location.origin}/forms/${newFormId}`;
    setFormUrl(url);
    setShowQR(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Create New Form</h2>
        <div className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Form Title</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter form title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Enter form description"
              rows={3}
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <Survey model={new Model(surveyJson)} />
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={() => navigate('/dashboard')}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
        >
          Save Form
        </button>
      </div>

      {showQR && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Form Created Successfully!</h3>
            <div className="flex justify-center mb-4">
              <QRCodeSVG value={formUrl} size={200} />
            </div>
            <p className="text-sm text-gray-600 mb-4 break-all">{formUrl}</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowQR(false)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => navigate('/dashboard')}
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}