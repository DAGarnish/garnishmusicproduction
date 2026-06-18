import { Metadata } from "next";

export const metadata: Metadata = {
  title: "World-class Ableton Electronic Music Production Program | London",
  description: "Learn at the world's boutique Ableton Electronic Music Production Program, where aspiring & established music-makers network, create, & collaborate doing what they love."
};

export default function AbletonProducerProgramLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
