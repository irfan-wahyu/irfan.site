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
    domain: "Visual Media",
    essence: "Making things look and move the way they should.",
    desc: "This is where I'm most comfortable. I've spent enough time working with motion, layout, and visual sequences to have developed my own sense of how things should look and move — what feels right, what doesn't, and why. It started as curiosity, became a habit, and now it's closer to instinct. Still refining, always will be, but I know my way around.",
    tools: ["Visual Form", "Motion & Sequence", "Layout", "Digital Graphics"],
    delay: "100",
  },
  {
    num: "02",
    domain: "Digital Systems",
    essence: "Curious about what runs underneath the surface.",
    desc: "I'm drawn to what runs underneath — terminals, configurations, how systems are structured beneath the interface. I'm still early in this territory and I won't pretend otherwise, but the pull is real. Every time I get a glimpse of how something actually works under the hood, I want to go deeper. That curiosity keeps bringing me back.",
    tools: ["System Navigation", "Terminal", "Workflow Setup", "Linux"],
    delay: "200",
  },
  {
    num: "03",
    domain: "Website & UI design",
    essence: "Thinking in structures, naturally.",
    desc: "I think in structures — how information is layered, how a digital space feels to move through, how hierarchy guides attention without announcing itself. This comes naturally to me, more than most things. Building this site from scratch is probably the clearest evidence of that: it's the kind of problem I genuinely enjoy sitting with.",
    tools: ["Information Structure", "Web Layout", "UI Logic", "Astro & HTML"],
    delay: "300",
  },
  {
    num: "04",
    domain: "Philosophy & Critical Thinking",
    essence: "Using ideas as lenses, not subjects to study.",
    desc: "Less academic, more personal. I use philosophical frameworks — existentialism, Freire, constructivism — not as subjects to study, but as lenses to question things I'd otherwise take for granted. It's not about having answers. It's about building better questions and being honest about what I don't yet understand.",
    tools: [
      "Critical Thinking",
      "Existentialism",
      "Structural Analysis",
      "Social Critique",
    ],
    delay: "400",
  },
  {
    num: "05",
    domain: "Problem Solving",
    essence: "When something breaks, I trace — not panic.",
    desc: "When something breaks, I don't panic — I trace. I've gotten decent at sitting with a problem long enough to find where it actually starts, not just where it shows up. Whether it's a broken build, a logical gap, or a system behaving unexpectedly, the approach is the same: slow down, isolate, understand.",
    tools: [
      "Root Cause Analysis",
      "Debugging",
      "Systematic Thinking",
      "Pragmatic Logic",
    ],
    delay: "500",
  },
  {
    num: "06",
    domain: "Independent Learning",
    essence: "Most of what I know, I figured out on my own.",
    desc: "Most of what I know, I figured out on my own — before any formal classroom told me to. Documentation, video tutorials pulled apart frame by frame, trial and error that sometimes stretched for hours. That's still my main classroom. Formal education gives structure; independent learning gives depth.",
    tools: [
      "Self-Study",
      "Trial & Error",
      "Documentation",
      "Iterative Learning",
    ],
    delay: "600",
  },
];
