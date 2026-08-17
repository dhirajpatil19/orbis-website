// Blog posts — real titles/excerpts scraped from live site (§8)
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  cover: string;
  body: string[];
}

export const POSTS: BlogPost[] = [
  {
    slug: "questions-parents-should-ask-before-school-admission",
    title: "Questions Every Parent Should Ask Before School Admission in Pune (2026-27)",
    excerpt:
      "Choosing a school is one of the biggest decisions a parent makes. Here are the questions that separate the best CBSE schools in Pune from the rest.",
    tags: ["Parent", "School Admission in Pune"],
    date: "2026-07-20",
    cover: "/images/hero-1.jpg",
    body: [
      "Walk into any open house and every school sounds wonderful. The difference is in the details. Before you shortlist, ask about teacher-student ratios, how learning is personalised, and what a typical day actually looks like for your child's age group.",
      "Ask about the transition points — how does the school handle a child moving from preschool to formal schooling, or from primary to secondary? Ask about the transport fleet, safety protocols, and how the school communicates progress beyond the report card.",
      "Finally, talk to current parents. Their experience of daily life at the school — not just the brochure — will tell you whether the school's values match your family's expectations. At The Orbis School, our doors are open for campus visits and honest conversations with our admission counsellors.",
    ],
  },
  {
    slug: "public-speaking-skills-in-primary-school",
    title: "Why Public Speaking Skills Should Start in Primary School",
    excerpt:
      "Every child has a voice — the right environment helps it flourish. Here's how early oracy shapes confident, articulate learners.",
    tags: ["Public Speaking", "Primary School"],
    date: "2026-07-06",
    cover: "/images/hero-2.jpg",
    body: [
      "The ability to speak with clarity and confidence is not a talent you are born with — it is a skill, and like all skills, it is best built early. Primary school is the golden window: children at this age are naturally curious, unafraid of mistakes, and wonderfully expressive.",
      "At Orbis, every classroom is a stage. Show-and-tell, class assemblies, debates and literary festivals like OrbiLoqui give even our youngest learners a safe space to find their voice. Teachers coach structure, body language and empathy of listening — not just performance.",
      "The payoff is lifelong. Children who speak confidently ask better questions, participate more in class, and grow into the leaders our motto promises: 'Learners today, Leaders tomorrow.'",
    ],
  },
  {
    slug: "beyond-coding-7-future-skills",
    title: "Beyond Coding: 7 Future Skills Every Student Needs by 2030",
    excerpt:
      "Success in 2030 will depend on more than coding. Here are the seven future skills we embed in everyday learning at Orbis.",
    tags: ["Future Skills", "Beyond Coding"],
    date: "2026-06-18",
    cover: "/images/hero-3.jpg",
    body: [
      "Coding is the language of the machine, but the machine will not need us to speak it for long. The skills that will carry today's students through 2030 are deeply human: critical thinking, creativity, collaboration, communication, adaptability, empathy and ethical judgement.",
      "Our curriculum is designed around these. Project-based learning in our AI & Robotics Lab builds problem decomposition. The Greater Education Programme develops leadership and social responsibility. Interdisciplinary projects in the science, math and language labs train students to connect ideas across domains.",
      "Parents often ask what to add at home. Our advice: conversation. Ask 'why' and 'what if' at the dinner table, encourage hobbies that have no exam, and let children sit with boredom long enough to imagine. The future belongs to the curious.",
    ],
  },
  {
    slug: "preschool-vs-montessori",
    title: "Preschool vs Montessori: Which Is Better for Your Child?",
    excerpt:
      "Both approaches nurture young minds — but in different ways. A clear-eyed comparison for Pune parents making the preschool decision.",
    tags: ["Preschool", "Parent"],
    date: "2026-05-22",
    cover: "/images/about-orbis.webp",
    body: [
      "Montessori schools let children choose activities from a prepared environment, moving at their own pace with minimal adult direction. Play-based preschools, like Orbis's Pre-primary programme, blend structured routines with guided play, storytelling, music and outdoor time.",
      "Montessori shines for self-directed learners and builds concentration early. A balanced preschool programme, by contrast, adds explicit social-emotional coaching, group collaboration and a smoother bridge to formal CBSE schooling in Class 1.",
      "The honest answer: visit both, observe a session, and ask how each handles the transition to primary school. At Orbis, our Playgroup-to-Senior-Secondary continuum means the child you enrol at age 2 can complete Class 12 on the same campus, with pedagogy that evolves with every stage.",
    ],
  },
  {
    slug: "open-book-exams-cbse-2026",
    title: "How Open Book Exams Will Change Learning for CBSE Students in 2026",
    excerpt:
      "From memorisation to application — what the new CBSE assessment pattern means for students, and how schools should respond.",
    tags: ["CBSE Students"],
    date: "2026-05-04",
    cover: "/images/campus-keshav-nagar.webp",
    body: [
      "Open book examinations shift the question from 'what do you remember?' to 'what can you do with what you know?' This is not an easier exam — it is a harder skill. Students must locate information quickly, evaluate its relevance, and construct a coherent argument under time pressure.",
      "For students, the implications are immediate: notes become thinking tools, not souvenirs. Schools must teach information literacy, source evaluation and structured writing from the middle grades, not just in the exam year.",
      "At Orbis we have already moved our internal assessments in this direction — concept maps, case studies and application-based problems in Science, Math and the humanities — so that when the CBSE pattern evolves, our students are not surprised; they are prepared.",
    ],
  },
  {
    slug: "what-makes-a-future-ready-school",
    title: "What Makes a Future-Ready School in 2026?",
    excerpt:
      "A future-ready school is not the one with the most gadgets. It is the one that builds the mind, the character and the skill to adapt.",
    tags: ["PrePrimary Students", "Future-Ready School"],
    date: "2026-04-10",
    cover: "/images/campus-mundhwa.webp",
    body: [
      "Look past the robotics labs and smart boards. A school is future-ready when its students can think for themselves, collaborate across differences, and recover from failure with grace. Technology is the amplifier; the human core is the signal.",
      "We measure readiness in behaviour: a Grade 2 child explaining her science project to visitors; a Grade 10 debater researching both sides of a motion; a Senior Secondary student mentoring juniors in the Robotics Lab. That is the Orbis definition of readiness.",
      "For parents, the practical checklist is simple: ask how the school teaches adaptability, whether it celebrates questions or only answers, and whether character education is a timetable slot or a way of life.",
    ],
  },
  {
    slug: "best-age-to-join-preschool",
    title: "What Is the Best Age to Join Preschool?",
    excerpt:
      "Is 2 too early? Is 4 too late? A developmental guide to the preschool entry decision for Indian parents.",
    tags: ["Preschool", "PrePrimary"],
    date: "2026-03-14",
    cover: "/images/campus-gahunje.webp",
    body: [
      "Child-development research is remarkably consistent: the first five years are the most rapid period of brain development in a human life. Language, social skills and emotional regulation are all being wired at speed — which makes quality early education a high-leverage investment.",
      "Age 2–2.5 is a sweet spot for many families: children are ready for parallel play, separation is manageable, and trained facilitators can support language explosion with structured, play-based stimulation. Waiting until 4 is fine too — children catch up quickly — but the socialisation benefit of early group settings is real.",
      "The best age, ultimately, is when your child is developmentally ready and your family routine can support it. Visit the campus with your child, let them meet the teachers, and trust your instinct about the warmth of the environment.",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}
