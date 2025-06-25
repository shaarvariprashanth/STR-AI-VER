import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 h-5xl">
      <HoverEffect items={projects} />
    </div>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export const projects = [
  {

    title: "Striver's DSA Sheet",
    description:
      "Boost your DSA skills with our handy cheat sheets",
    link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
  },
  {
    title: "Striver's CP Sheet",
    description:
      "Level up your coding with Practice Resources",
    link: "https://takeuforward.org/interview-experience/strivers-cp-sheet/",
  },
  {
    title: "Interview Experience",
    description:
      "Learn from others' Experiences to Ace Interviews",
    link: "https://takeuforward.org/interview/",
  }
];
