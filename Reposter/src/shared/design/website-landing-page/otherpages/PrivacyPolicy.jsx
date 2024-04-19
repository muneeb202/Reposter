import React from 'react';
import './privacy.css';

export default function PrivacyPolicy() {
  return (
    <div className="centainerr">
      <h1 className='h11'><i className="fas fa-shield-alt"></i> Privacy Policy</h1>
      <p >Thank you for visiting Reposter.ai. This Privacy Policy describes how we collect, use, and disclose your information when you use our website.</p>
      <h2 className='h12'><i className="fas fa-info-circle"></i> Information We Collect</h2>
      <p className='pp'>We may collect personal information such as your name, email address, and contact information when you register on our website or fill out a form. We also collect non-personal information such as your browser type, IP address, and browsing behavior.</p>
      <h2 className='h12'><i className="fas fa-cogs"></i> How We Use Your Information</h2>
      <p className='pp'>We may use the information we collect to provide, maintain, and improve our services, communicate with you, and personalize your experience. We may also use your information for marketing purposes, such as sending promotional emails.</p>
      <h2 className='h12'><i className="fas fa-share-alt"></i> Information Sharing</h2>
      <p className='pp'>We may share your information with third-party service providers who help us operate our website or provide services on our behalf. We may also share your information in response to legal requests or to protect our rights and property.</p>
      <h2 className='h12'><i className="fas fa-lock"></i> Security</h2>
      <p className='pp'>We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
      <h2 className='h12'><i className="fas fa-exclamation-triangle"></i> Changes to This Policy</h2>
      <p className='pp'>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the revised policy will take effect immediately upon posting.</p>
      <p className="important">If you have any questions or concerns about our Privacy Policy, please contact us at <span className="contact-email">privacy@reposter.ai</span>.</p>
    </div>
  );
}
