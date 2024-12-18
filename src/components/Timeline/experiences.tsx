/* eslint-disable react/jsx-key */
import React from 'react';

const experiences = [
  {
    organization: 'JPMorgan Chase & Co.',
    roles: [
      {
        role: 'Software Engineer',
        startDate: 'February 2025',
        endDate: 'Present',
        bullets: [
          'Work on the electronic fixed-income trading platform in the Commercial & Investment Bank.',
          'Develop features for credit-bond trading, leveraging technologies including Java, Spring Boot, and Jenkins.',
        ],
      },
    ],
  },
  {
    organization: 'PayPal',
    roles: [
      {
        role: 'Software Engineer Intern',
        startDate: 'May 2024',
        endDate: 'August 2024',
        bullets: [
          'Worked on the Credit Platform team to develop and maintain microservices that are leveraged across all consumer and business credit products.',
          'Successfully consolidated 3 components for the Credit Accounts v2 API, which enables retrieving and managing credit account information, obtaining credit line offers, onboarding account owners, and determining account closure eligibility.',
        ],
      },
      {
        role: 'Software Engineer Intern',
        startDate: 'June 2023',
        endDate: 'August 2023',
        bullets: [
          <span>
            Worked on the Credit User Experience team to develop full-stack web applications to
            acquire and service users for the{' '}
            <a
              href="https://www.paypal.com/us/digital-wallet/manage-money/paypal-cashback-mastercard"
              className="link-off-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              PayPal Cashback Mastercard
            </a>{' '}
            and{' '}
            <a
              href="https://www.paypal.com/us/digital-wallet/ways-to-pay/credit-services/paypal-credit"
              className="link-off-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              PayPal Credit
            </a>{' '}
            products.
          </span>,
          'Built Credit Admin, a tool for 200+ PayPal developers and stakeholders to triage and remediate production issues related to credit applications, credit accounts, and associated services, as well as perform administrative functions.',
        ],
      },
      {
        role: 'Software Engineer Intern',
        startDate: 'May 2022',
        endDate: 'August 2022',
        bullets: [
          <span>
            Revamped the testing tool for the Credit Application Experience, significantly improving
            data setup speed for developers testing the various user flows.
          </span>,
          "Developed the user interface and service calls for the Choose Your Credit Offers page (presents financing options to users in checkout), furthering the team's ongoing migration effort.",
        ],
      },
    ],
  },
];

export default experiences;
