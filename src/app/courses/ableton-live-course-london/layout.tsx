import { Metadata } from "next";

export const metadata: Metadata = {
  title: "World-class Ableton Live Training | Lessons in London School",
  description: "Learn Ableton at the world's boutique music production school, where aspiring & established music-makers network, create, & collaborate doing what they love."
};

export default function AbletonLiveCourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
