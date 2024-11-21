import React from 'react';
import { useParams } from 'react-router-dom';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';

export function FormView() {
  const { formId } = useParams();

  const surveyJson = {
    elements: [
      {
        name: "FirstPage",
        elements: [
          {
            type: "text",
            name: "name",
            title: "Your name:",
            isRequired: true
          },
          {
            type: "text",
            name: "email",
            title: "Your email:",
            isRequired: true,
            validators: [{ type: "email" }]
          },
          {
            type: "comment",
            name: "feedback",
            title: "Your feedback:",
            isRequired: true
          }
        ]
      }
    ]
  };

  const survey = new Model(surveyJson);
  
  survey.onComplete.add((sender) => {
    console.log(sender.data);
    // Here you would typically send the data to your backend
  });

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Form #{formId}</h2>
      <Survey model={survey} />
    </div>
  );
}