import React from "react";

const TermsAndConditions = () => {
  return (
    <section className="px-6 pt-20 py-10 lg:px-60 text-gray-700 bg-[radial-gradient(circle_at_bottom,#FDE7E1_20%,#FFF9EC_30%,#FFFFFF_60%)]">
      <h1 className="text-center text-3xl lg:text-5xl font-bold lg:leading-20">
        <span className="text-red-500">Privacy Policy</span> And <span className="text-[#407BFF]">T&Cs</span>
      </h1>

      <article className="mt-10 space-y-6">
        <h2 className="text-2xl font-bold">1. Services Provided</h2>
        <p>Cloud Sparrow Technology provides digital solutions, including website development, mobile app development, and other related services. We may update or change the services offered at any time without prior notice.</p>

        <h2 className="text-2xl font-bold">2. User Responsibilities</h2>
        <ul className="list-disc pl-5">
          <li>You agree to use our services only for lawful purposes and in accordance with applicable laws.</li>
          <li>You agree not to engage in any activity that could harm our systems, networks, or services.</li>
          <li>You must provide accurate, current, and complete information when using our services.</li>
        </ul>

        <h2 className="text-2xl font-bold">3. Intellectual Property</h2>
        <p>All content, including text, images, logos, and software, provided on our website or services, is the property of Cloud Sparrow Technology or its licensors. You may not use, copy, or distribute any content without express permission.</p>

        <h2 className="text-2xl font-bold">4. Payment and Billing</h2>
        <ul className="list-disc pl-5">
          <li>Services provided may be subject to charges, as detailed in your agreement.</li>
          <li>You agree to pay all fees for services rendered. Payment terms will be outlined in your contract.</li>
        </ul>

        <h2 className="text-2xl font-bold">5. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, Cloud Sparrow Technology will not be liable for any indirect, incidental, or consequential damages arising out of the use of our services.</p>

        <h2 className="text-2xl font-bold">6. Termination</h2>
        <p>We may suspend or terminate your access to our services at any time if you violate these Terms and Conditions.</p>

        <h2 className="text-2xl font-bold">7. Changes to Terms</h2>
        <p>We reserve the right to modify or update these Terms and Conditions at any time. Any changes will be posted on this page, and the revised version will become effective immediately.</p>

        <h2 className="text-2xl font-bold">Contact Us</h2>
        <p>For any questions about our Terms and Conditions, please contact us at: <a href="mailto:info@cloudsparrowtechnology.com" className="text-[#407BFF] underline">info@cloudsparrowtechnology.com</a></p>
      </article>
    </section>
  );
};

export default TermsAndConditions;