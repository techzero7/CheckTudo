import React from 'react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';

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
          validators: [
            {
              type: "email"
            }
          ]
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

export function FormBuilder() {
  const survey = new Model(surveyJson);
  
  survey.onComplete.add((sender) => {
    console.log(sender.data);
    // Here you would typically send the data to your backend
  });

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <Survey model={survey} />
    </div>
  );
}