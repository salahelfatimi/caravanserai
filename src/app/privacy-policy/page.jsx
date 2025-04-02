
export const metadata = {
  title: "Caravan Serai | Politique de Confidentialité",
  description:"Découvrez comment Caravan Serai gère vos données personnelles et respecte votre vie privée sur ce site.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Caravan Serai | Politique de Confidentialité",
    description:"Découvrez comment Caravan Serai gère vos données personnelles et respecte votre vie privée sur ce site.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/privacy-policy`,
    robots: {
      index: true,
      follow: true,
    },
    siteName: "Caravan Serai | Politique de Confidentialité",
    images: [
      {
        url: `/opengraph-image.jpg`,
        secureUrl: `/opengraph-image.jpg`,
        width: 1200,
        height: 675,
        alt: `Caravan Serai`,
      },
    ],
    type: "website",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="   ">
      <div className="pt-20 bg-primary"></div>
      <div className="container">
        <div
          className={` p-6 text-black lg:text-base text-xs md:text-sm text-justify container`}
        >
          <h2 className="text-4xl font-bold mb-6 text-center text-primary">
            Privacy Policy
          </h2>

          <p className="mb-4">
            At <span className="font-semibold text-primary">Caravan Serai</span>, we place great importance on protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal data when you use our website.
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-4 text-primary">
            1. Data Collected
          </h3>
          <p className="mb-4">
            We collect the following information when you visit our website or use our services:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>IP address and browsing data.</li>
            <li>Contact information, if you fill out a form.</li>
            <li>Cookies and similar technologies.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-6 mb-4 text-primary">
            2. Use of Data
          </h3>
          <p className="mb-4">
            Your data is used to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Improve your user experience.</li>
            <li>Provide services tailored to your needs.</li>
            <li>Analyze the performance of our website.</li>
            <li>Send communications, with your consent.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-6 mb-4 text-primary">
            3. Cookies
          </h3>
          <p className="mb-4">
            Our website uses cookies to enhance your experience. You can manage your cookie preferences through your browser or the banner displayed during your first visit.
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-4 text-primary">
            4. Data Sharing
          </h3>
          <p className="mb-4">
            Your data may be shared with third-party partners for:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Analyzing website usage (Google Analytics).</li>
            <li>Displaying advertisements tailored to your interests.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-6 mb-4 text-primary">
            5. Your Rights
          </h3>
          <p className="mb-4">
            In accordance with GDPR, you have the right to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Access your personal data.</li>
            <li>Request their modification or deletion.</li>
            <li>Withdraw your consent at any time.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-6 mb-4 text-primary">
            6. Data Security
          </h3>
          <p className="mb-4">
            We implement technical and organizational measures to protect your personal data against unauthorized access, loss, or disclosure.
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-4 text-primary">
            7. Contact
          </h3>
          <p className="mb-4">
            For any questions regarding this policy or to exercise your rights, please contact us:
          </p>
          <p className="mb-4">
            <span className="font-semibold text-primary">Email:</span>{" "}
            <a
              href="mailto:receptioncaravanserai@gmail.com"
              className="text-blue-600 hover:underline"
            >
              receptioncaravanserai@gmail.com
            </a>
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-4 text-primary">
            8. Policy Changes
          </h3>
          <p className="mb-4">
            We reserve the right to modify this Privacy Policy at any time. Any changes will be published on this page with an updated date.
          </p>
        </div>
      </div>
    </main>
  );
}
