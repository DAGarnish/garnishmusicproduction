import { Metadata } from "next";

export const metadata: Metadata = {
  title: "360° International Garnish Music Academy - Garnish Music Production School, Worldwide",
  description: "360° International Garnish Music Academy:- 12 weeks in Barcelona, 12 weeks in London, and 12 weeks in New York!"
};

export default function InternationalAcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
