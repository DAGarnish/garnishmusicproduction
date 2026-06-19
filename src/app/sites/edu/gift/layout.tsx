import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gift Certificate - Garnish Music Production School, Worldwide",
  description: "For Gift Certificates, just let us know the name of the lucky recipient, the value you wish to put on the certificate, the email address of the recipient, and your message. We’ll do the rest!",
  openGraph: {
    title: "Gift Certificate - Garnish Music Production School, Worldwide",
    description: "For Gift Certificates, just let us know the name of the lucky recipient, the value you wish to put on the certificate, the email address of the recipient, and your message. We’ll do the rest!",
    images: [
      {
        url: "https://edu.garnishmusicproduction.com/wp-content/uploads/sites/8/2022/12/Mike_Denta-1.png",
      },
    ],
  },
};

export default function GiftCertificateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
