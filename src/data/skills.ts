export interface Skill {
  num: string;
  domain: string;
  essence: string;
  desc: string;
  tools: string[];
  delay: string;
}

export const skills: Skill[] = [
  {
    num: "01",
    domain: "Interest in Visual Media",
    essence:
      "Exploring how layouts, graphic forms, and moving sequences behave.",
    desc: "I am driven by a curiosity about how visual ideas come to life. My focus is on studying the rhythm of digital spaces—whether it takes the form of graphic design, video, or experimental layouts—and exploring how shape and motion connect to tell a story.",
    tools: [
      "Visual Form",
      "Video & Sequence",
      "Layout Dynamics",
      "Digital Graphics",
    ],
    delay: "100",
  },
  {
    num: "02",
    domain: "Exploration of Digital Systems",
    essence:
      "Investigating terminal configurations and what moves behind the screen.",
    desc: "I'm not interested in just running software; I want to understand the systems moving underneath. This curiosity pushes me to learn terminal configurations, experiment with basic code strings, and navigate local workflows to see how technology actually functions.",
    tools: [
      "System Navigation",
      "Terminal Logic",
      "Basic Code Strings",
      "Workflow Setup",
    ],
    delay: "200",
  },
  {
    num: "03",
    domain: "Observation of Digital Layouts",
    essence:
      "Studying how information is organized and structures are presented.",
    desc: "An entry point into looking at digital platforms as intentional spaces. Instead of focusing on technical rules, I prefer studying how information is naturally layered, how digital architectures feel to a user, and how media can be organized to serve a purpose.",
    tools: [
      "Information Flow",
      "Digital Media Logic",
      "Structure Design",
      "Platform Architecture",
    ],
    delay: "300",
  },
  {
    num: "04",
    domain: "Curiosity in Philosophical Concepts",
    essence:
      "Asking the 'why' behind structures and looking at social frameworks.",
    desc: "I don't look at things as isolated facts; I am drawn to understanding the 'why' behind them. My interest in philosophy and social critique is not academic, but rather a personal lens to break down, analyze, and question how the world around us is structured.",
    tools: [
      "Critical Thinking",
      "Existential Inquiry",
      "Structural Analysis",
      "Conceptual Lens",
    ],
    delay: "400",
  },
  {
    num: "05",
    domain: "Approach to Problem Solving",
    essence:
      "Deconstructing system friction and tracking errors to their root cause.",
    desc: "Whenever a system breaks or an error appears, my immediate instinct is to look past the surface and trace it back to its root cause. I treat friction—whether in code, interfaces, or systems—as a puzzle that requires a pragmatic, deliberate solution.",
    tools: [
      "Root Cause Analysis",
      "Pragmatic Logic",
      "System Debugging",
      "Tactical Execution",
    ],
    delay: "500",
  },
  {
    num: "06",
    domain: "Practice of Independent Learning",
    essence:
      "Navigating new fields autonomously through continuous trial and error.",
    desc: "Long before entering formal education, my baseline has always been independent learning. I navigate documentation, deconstruct video tutorials, and embrace the iterative cycle of failure and correction as the most authentic way to build true capability.",
    tools: [
      "Independent Learning",
      "Iterative Experiment",
      "Self-Documentation",
      "Resource Navigation",
    ],
    delay: "600",
  },
];
