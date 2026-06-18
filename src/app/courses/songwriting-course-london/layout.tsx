import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hit Songwriting Course in London & Online - Serious Songwriting Training",
  description: "The only songwriting course in London & Online. with a No 1 hit songwriting tutor. Writing a song is easy, but writing a great song isn't."
};

export default function SongwritingCourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
