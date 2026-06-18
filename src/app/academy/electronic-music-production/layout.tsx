import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electronic Music Production Diploma | Garnish Music School",
  description: "World-class music production industry diploma program for serious learners, at the world's boutique music school in London, Miami, Nashville, NYC, and LA."
};

export default function ElectronicMusicProductionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
