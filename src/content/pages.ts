// Interior page content — real copy from the scraped content reference (§5, §7)
// Each page: kicker, title, meta, hero image, body blocks, sidebar links.
export interface ContentBlock {
  heading?: string;
  body: string;
  bullets?: string[];
}

export interface InteriorPage {
  slug: string;
  title: string;
  kicker: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  blocks: ContentBlock[];
  sidebarLinks?: { label: string; href: string }[];
}

const aboutSidebar = (active: string) =>
  [
    { label: "Why The Orbis School", href: "/about/why-orbis" },
    { label: "Director's Message", href: "/about/directors-message" },
    { label: "Awards & Recognitions", href: "/about/awards" },
    { label: "Knowledge Partners", href: "/about/knowledge-partners" },
    { label: "School Facilities", href: "/about/facilities" },
    { label: "Core Practices", href: "/about/core-practices" },
    { label: "Orbis Alumni", href: "/about/alumni" },
    { label: "Testimonials", href: "/about/testimonials" },
  ].filter((l) => l.href !== active);

const academicsSidebar = (active: string) =>
  [
    { label: "CBSE Academics", href: "/academics/cbse" },
    { label: "Pedagogy", href: "/academics/pedagogy" },
    { label: "Preschool", href: "/academics/preschool" },
    { label: "Lower Primary", href: "/academics/lower-primary" },
    { label: "Upper Primary", href: "/academics/upper-primary" },
    { label: "Secondary", href: "/academics/secondary" },
    { label: "Senior Secondary", href: "/academics/senior-secondary" },
  ].filter((l) => l.href !== active);

const admissionsSidebar = (active: string) =>
  [
    { label: "Admission Process", href: "/admissions/process" },
    { label: "Admission Enquiry", href: "/admissions/enquiry" },
    { label: "Fee Structure", href: "/admissions/fee-structure" },
    { label: "International Students", href: "/admissions/international" },
  ].filter((l) => l.href !== active);

const lifeSidebar = (active: string) =>
  [
    { label: "Events & Calendar", href: "/life/events" },
    { label: "Gallery", href: "/life/gallery" },
    { label: "School Transport", href: "/life/transport" },
    { label: "School Song", href: "/life/school-song" },
    { label: "Outdoor Activities", href: "/life/outdoor-activities" },
    { label: "Progress & Promotion", href: "/life/progress-promotion" },
    { label: "Discipline", href: "/life/discipline" },
    { label: "Student Diary Rules", href: "/life/diary-rules" },
    { label: "Monthly Newsletter", href: "/life/newsletter" },
  ].filter((l) => l.href !== active);

const coSidebar = (active: string) =>
  [
    { label: "Greater Education Programme", href: "/co-scholastic/greater-education-programme" },
    { label: "Student Social Responsibility", href: "/co-scholastic/ssr" },
    { label: "Literary Activities", href: "/co-scholastic/literary-activities" },
    { label: "Leadership", href: "/co-scholastic/leadership" },
    { label: "OrbiEventum", href: "/co-scholastic/orbieventum" },
    { label: "NCC", href: "/co-scholastic/ncc" },
  ].filter((l) => l.href !== active);

const contactSidebar = (active: string) =>
  [
    { label: "Contact Us", href: "/contact" },
    { label: "Careers", href: "/contact/careers" },
    { label: "Vendors", href: "/contact/vendors" },
    { label: "Franchise", href: "/contact/franchise" },
  ].filter((l) => l.href !== active);

const heroAbout = "/images/about-orbis.webp";
const heroAcademics = "/images/campus-keshav-nagar.webp";
const heroLife = "/images/campus-mundhwa.webp";
const heroCo = "/images/campus-gahunje.webp";
const heroAdm = "/images/hero-1.jpg";

export const PAGES: InteriorPage[] = [
  // ─── ABOUT ───────────────────────────────────────────────
  {
    slug: "about/why-orbis",
    title: "Why The Orbis School",
    kicker: "About Us",
    metaTitle: "Why The Orbis School | Best CBSE School in Pune",
    metaDescription:
      "Top schools in Pune have always attracted students from all over the country and abroad. Discover why The Orbis Schools are the preferred choice of parents seeking admission to good schools in Pune.",
    heroImage: heroAbout,
    sidebarLinks: aboutSidebar("/about/why-orbis"),
    blocks: [
      {
        heading: "Overview",
        body: "Top schools in Pune have always attracted students from all over the country and abroad, and in such an environment The Orbis Schools are the preferred choice of parents seeking admission to good schools in Pune. The school's name, Orbis, which comes from orb, is a metaphor for the world — a world of limitless possibilities that every child deserves to explore.",
      },
      {
        heading: "Vision",
        body: "We envision a movement that celebrates learning, a system that will empower generations of self-motivated achievers, questing in their chosen fields of endeavour — be it humanities, commerce or sciences. As the world becomes increasingly flat, and cycles of change grow ever shorter, good schools must acquire the ability to keep up. Tomorrow's winners need to be able to bring the change rather than merely react to it.",
      },
      {
        heading: "Mission",
        body: "To create an environment where tradition harmonises with modernity, where the emphasis is laid on igniting the young minds, where the joy of understanding, creative thinking and problem-solving will establish skills for life.",
      },
      {
        heading: "Celebrate Learning",
        body: "At Orbis, learning is a process designed to turn work into play. Children get limitless opportunities to explore and experiment, get involved in fests and concerts, and discover that education is a celebration, not a chore.",
      },
      {
        heading: "Our Ideas on Education",
        body: "The curriculum is ever evolving and has a progressive outlook with intellectual rigour. The extra-curricular activities are varied, enriching and exciting. We are guided by the motto: Learners today, Leaders tomorrow!",
      },
    ],
  },
  {
    slug: "about/directors-message",
    title: "Director's Message",
    kicker: "About Us",
    metaTitle: "Director's Message | The Orbis School Pune",
    metaDescription: "A message from the Director of The Orbis Schools on our vision of celebrating learning and empowering young minds.",
    heroImage: heroAbout,
    sidebarLinks: aboutSidebar("/about/directors-message"),
    blocks: [
      {
        heading: "A Warm Welcome",
        body: "Welcome to The Orbis Schools — a Wissen Education Foundation (formally Orbis Education Society) initiative, and a Religious Minority Institute. 'Orbis', which comes from orb, is a metaphor for the world: the world of ideas, of curiosity, of compassion and of courage that we invite every child to step into.",
      },
      {
        heading: "Our Promise",
        body: "We promise an education that balances the intellectual rigour of the CBSE curriculum with the joy of discovery — where tradition harmonises with modernity, and where every child is known, challenged and cherished.",
      },
      {
        heading: "The Orbis Community",
        body: "A school is only as good as its people. We are proud of our passionate and caring teachers, supportive parents, and a vibrant community of learners who make Orbis a home away from home.",
      },
    ],
  },
  {
    slug: "about/awards",
    title: "Awards & Recognitions",
    kicker: "About Us",
    metaTitle: "Awards & Recognitions | The Orbis School Pune",
    metaDescription: "The Orbis School's awards and recognitions for academic excellence, sports and holistic education in Pune.",
    heroImage: heroAbout,
    sidebarLinks: aboutSidebar("/about/awards"),
    blocks: [
      {
        heading: "A Legacy of Excellence",
        body: "Over the years, The Orbis Schools have been consistently recognised for academic results, sports achievements and innovative teaching practices. Our students have brought home laurels in Olympiads, inter-school competitions, and national-level sports events.",
      },
      {
        heading: "Recent Highlights",
        body: "Our students have excelled in the International Mathematics Olympiad (IMO) and other academic olympiads, winning Gold and Silver medals. Our sports teams — cricket, football, archery, skating, basketball, table tennis and gymnastics — regularly feature in inter-school tournaments across Pune.",
        bullets: [
          "Gold Medal, IMO — students from Grade 4",
          "Top CBSE results in Class 10 & 12 year after year",
          "Recognition for NCC and social responsibility programmes",
          "Featured in 'Orbis in the News' for academic and co-curricular achievements",
        ],
      },
    ],
  },
  {
    slug: "about/knowledge-partners",
    title: "Knowledge Partners",
    kicker: "About Us",
    metaTitle: "Knowledge Partners | The Orbis School Pune",
    metaDescription: "The institutions and organisations The Orbis School partners with to enrich learning beyond the classroom.",
    heroImage: heroAbout,
    sidebarLinks: aboutSidebar("/about/knowledge-partners"),
    blocks: [
      {
        heading: "Learning Beyond the Classroom",
        body: "We believe the best education is a connected one. The Orbis Schools collaborate with knowledge partners across academia, technology and the arts to bring real-world expertise into our classrooms and our students into real-world contexts.",
      },
      {
        heading: "How We Partner",
        body: "Our partnerships take many forms: visiting faculty and workshops, olympiad and competitive-exam coaching, robotics and AI curriculum support, cultural and literary festivals, and community service initiatives.",
      },
    ],
  },
  {
    slug: "about/facilities",
    title: "School Facilities",
    kicker: "About Us",
    metaTitle: "School Facilities | The Orbis School Pune",
    metaDescription: "Modern infrastructure at The Orbis School: sports grounds, advanced laboratories, AI & Robotics lab, digital classrooms and more.",
    heroImage: heroAbout,
    sidebarLinks: aboutSidebar("/about/facilities"),
    blocks: [
      {
        heading: "Infrastructure That Inspires",
        body: "Our campuses combine modern infrastructure with safe, green, child-friendly spaces. Spacious, well-ventilated classrooms are equipped for digital learning, and every corner of the campus is designed to spark curiosity.",
      },
      {
        heading: "Sports & Play",
        body: "A playing field, basketball court, and indoor play areas for sports like football, cricket, archery, basketball, table tennis, chess, skating, gymnastics, and more.",
      },
      {
        heading: "Advanced Laboratories",
        body: "Well-equipped Science and Math Labs, an eco-friendly Computer Lab, and a state-of-the-art Robotics Lab, Language Lab and Artificial Intelligence Lab give students hands-on access to the tools of tomorrow.",
      },
    ],
  },
  {
    slug: "about/core-practices",
    title: "Core Practices",
    kicker: "About Us",
    metaTitle: "Core Practices | The Orbis School Pune",
    metaDescription: "The teaching and learning practices that define the Orbis approach: experiential learning, values education and personalised attention.",
    heroImage: heroAbout,
    sidebarLinks: aboutSidebar("/about/core-practices"),
    blocks: [
      {
        heading: "Experiential Learning",
        body: "At Orbis, enjoy experiential learning! Concepts are introduced through doing, experimenting and reflecting — not just listening. Project-based assignments, field trips and hands-on labs make abstract ideas tangible.",
      },
      {
        heading: "Values & Discipline",
        body: "Character education is woven through everyday school life. Students learn responsibility, empathy and integrity through the Student Social Responsibility programme, discipline policies and daily assemblies.",
      },
      {
        heading: "Personalised Attention",
        body: "Small class sizes and a strong teacher-student relationship mean every child is known by name, and every learner's pace is respected.",
      },
    ],
  },
  {
    slug: "about/alumni",
    title: "Orbis Alumni",
    kicker: "About Us",
    metaTitle: "Orbis Alumni Network | The Orbis School Pune",
    metaDescription: "The growing network of Orbis alumni — from Class 12 graduates to leaders in universities and careers across the world.",
    heroImage: heroAbout,
    sidebarLinks: aboutSidebar("/about/alumni"),
    blocks: [
      {
        heading: "Learners Today, Leaders Tomorrow",
        body: "Our alumni are living proof of the Orbis motto. They carry the school's values into leading universities, professions and communities across India and the world.",
      },
      {
        heading: "Stay Connected",
        body: "We host alumni reunions, mentorship programmes and an active network that keeps former Orbisites connected to each other and to the school. If you are an Orbis alum, we would love to hear from you.",
      },
    ],
  },
  {
    slug: "about/testimonials",
    title: "Testimonials",
    kicker: "About Us",
    metaTitle: "Parent Testimonials | The Orbis School Pune",
    metaDescription: "What parents say about The Orbis Schools — real voices from our community on learning, growth and care.",
    heroImage: heroAbout,
    sidebarLinks: aboutSidebar("/about/testimonials"),
    blocks: [
      {
        heading: "Voices From Our Community",
        body: "Nothing describes a school better than the words of its parents. Here is what our community says about life at Orbis.",
      },
    ],
  },

  // ─── ADMISSIONS ──────────────────────────────────────────
  {
    slug: "admissions/process",
    title: "Admission Process",
    kicker: "Admissions",
    metaTitle: "CBSE School Admission Process in Pune | The Orbis School",
    metaDescription:
      "Admissions for 2027-28 at The Orbis Schools, Pune are open. A simple five-step admission process from enquiry to confirmation.",
    heroImage: heroAdm,
    sidebarLinks: admissionsSidebar("/admissions/process"),
    blocks: [
      {
        heading: "Admissions Open 2026–27",
        body: "CBSE School Admission for 2026-2027 in Pune is open at The Orbis Schools. Looking to join our CBSE schools in Pune? Fill out our Admission Enquiry form — our school admission team will assist you at every step.",
      },
      {
        heading: "The Five-Step Journey",
        body: "Our admission process is designed to be simple, transparent and personal.",
        bullets: [
          "Fill the Admission Enquiry form on our website",
          "An Admission Counsellor contacts you and facilitates a campus visit & counselling session",
          "Meet our teachers, tour the campus and understand the transport department's routes",
          "Submit the required documents and complete the registration",
          "Receive confirmation and welcome your child to the Orbis family",
        ],
      },
    ],
  },
  {
    slug: "admissions/enquiry",
    title: "Admission Enquiry",
    kicker: "Admissions",
    metaTitle: "Admission Enquiry Form | The Orbis School Pune",
    metaDescription: "Fill the admission enquiry form to join The Orbis Schools — best CBSE schools in Pune at Keshav Nagar, Mundhwa and Gahunje.",
    heroImage: heroAdm,
    sidebarLinks: admissionsSidebar("/admissions/enquiry"),
    blocks: [
      {
        heading: "Start Your Child's Journey",
        body: "Looking to join our CBSE schools in Pune? Fill out our Admission Enquiry form and our school admission team will assist you with campus visits, counselling and the admission process.",
      },
    ],
  },
  {
    slug: "admissions/fee-structure",
    title: "Fee Structure",
    kicker: "Admissions",
    metaTitle: "Fee Structure | The Orbis School Pune CBSE",
    metaDescription: "Transparent, accessible fee structure at The Orbis Schools Pune — tuition fees, payment options and fee policies.",
    heroImage: heroAdm,
    sidebarLinks: admissionsSidebar("/admissions/fee-structure"),
    blocks: [
      {
        heading: "Committed to Accessibility",
        body: "The Orbis Schools are committed to making education accessible and affordable. Our fee structure is transparent, with no hidden charges, and payment options are designed for parent convenience.",
      },
      {
        heading: "What's Included",
        body: "Tuition, access to all academic programmes, library, laboratories, sports facilities and co-scholastic activities are covered under a clearly communicated fee structure. Online payment options are available.",
        bullets: [
          "Transparent tuition fees with online payment options",
          "Clear fee policies — deadlines, refunds and late fees documented",
          "Dedicated support for fee FAQs",
          "Please contact the campus admission office for the current year's detailed fee schedule",
        ],
      },
    ],
  },
  {
    slug: "admissions/international",
    title: "International Students",
    kicker: "Admissions",
    metaTitle: "Admission for International Students | The Orbis School Pune",
    metaDescription: "The Orbis Schools welcome international students to our CBSE campuses in Pune — a supportive pathway into Indian education.",
    heroImage: heroAdm,
    sidebarLinks: admissionsSidebar("/admissions/international"),
    blocks: [
      {
        heading: "Welcome to India, Welcome to Orbis",
        body: "International students are warmly welcomed at The Orbis Schools. Our structured CBSE curriculum, English-medium instruction and strong pastoral care make the transition to education in India smooth and rewarding.",
      },
      {
        heading: "Support for New Families",
        body: "Our admission team assists with documentation, school visits and settling in. For international students, we provide additional orientation and language support to ensure every child thrives from day one.",
      },
    ],
  },

  // ─── ACADEMICS ───────────────────────────────────────────
  {
    slug: "academics/cbse",
    title: "CBSE Academics",
    kicker: "Academics",
    metaTitle: "CBSE Academics Curriculum | The Orbis School Pune",
    metaDescription:
      "CBSE Academics at The Orbis School — the premier platform for academic excellence and holistic education under the Central Board of Secondary Education.",
    heroImage: heroAcademics,
    sidebarLinks: academicsSidebar("/academics/cbse"),
    blocks: [
      {
        heading: "Excellence Under the CBSE Framework",
        body: "CBSE Academics is the premier platform for academic excellence and holistic education under the Central Board of Secondary Education (CBSE). Our curriculum is grounded in the CBSE framework while leaving room for innovation and joy.",
      },
      {
        heading: "Curriculum Excellence",
        body: "Grounded in the CBSE framework, our curriculum balances conceptual depth with skill-building, from preschool through Class 12, across Science, Commerce and Humanities streams.",
      },
      {
        heading: "Pedagogical Innovation",
        body: "Experiential learning and project-based assignments sit alongside digital resources and interactive classrooms, ensuring every lesson connects to the real world.",
      },
    ],
  },
  {
    slug: "academics/pedagogy",
    title: "Pedagogy",
    kicker: "Academics",
    metaTitle: "Pedagogy & Teaching Methods | The Orbis School Pune",
    metaDescription: "How Orbis teaches: experiential learning, inquiry-based methods and the joy of understanding at every grade.",
    heroImage: heroAcademics,
    sidebarLinks: academicsSidebar("/academics/pedagogy"),
    blocks: [
      {
        heading: "The Orbis Way of Teaching",
        body: "Our pedagogy turns work into play and questions into quests. We blend the rigour of the CBSE curriculum with inquiry-based, experiential methods that make children active owners of their learning.",
      },
      {
        heading: "Key Principles",
        body: "Concept-first learning, collaborative projects, technology-enhanced classrooms, and continuous (not just terminal) assessment. Every lesson plan is designed to ignite the young mind.",
      },
    ],
  },
  {
    slug: "academics/preschool",
    title: "Preschool (Pre-primary)",
    kicker: "Academics",
    metaTitle: "CBSE Preschool in Pune | The Orbis School Pre-primary",
    metaDescription: "The best CBSE preschool in Pune — play-based pre-primary education at The Orbis Schools with a smooth bridge to formal schooling.",
    heroImage: heroAcademics,
    sidebarLinks: academicsSidebar("/academics/preschool"),
    blocks: [
      {
        heading: "Where Learning Begins with Wonder",
        body: "Our Pre-primary programme (ages 2–5) is a joyful introduction to school. Play-based learning, storytelling, music, art and outdoor time build the foundations of language, numeracy and social-emotional skills.",
      },
      {
        heading: "A Seamless Bridge",
        body: "Because Orbis runs Preschool through Class 12, our little ones transition to formal schooling in the same nurturing environment — no jarring change of campus or culture.",
      },
    ],
  },
  {
    slug: "academics/lower-primary",
    title: "Lower Primary (Classes 1–5)",
    kicker: "Academics",
    metaTitle: "Lower Primary Classes 1st to 5th | The Orbis School Pune",
    metaDescription: "Lower Primary at The Orbis School (Classes 1–5): strong foundations in literacy, numeracy and curiosity.",
    heroImage: heroAcademics,
    sidebarLinks: academicsSidebar("/academics/lower-primary"),
    blocks: [
      {
        heading: "Building Strong Foundations",
        body: "In Classes 1–5 we cement the fundamentals — reading fluency, mathematical thinking and expressive communication — while keeping curiosity alive through projects, performances and hands-on science.",
      },
      {
        heading: "Beyond the Textbooks",
        body: "Public speaking, olympiad exposure, sports and the arts are part of the weekly rhythm, so every child discovers strengths beyond the classroom.",
      },
    ],
  },
  {
    slug: "academics/upper-primary",
    title: "Upper Primary (Classes 6–8)",
    kicker: "Academics",
    metaTitle: "Upper Primary Classes 6th to 8th | The Orbis School Pune",
    metaDescription: "Upper Primary at The Orbis School (Classes 6–8): deepening concepts, critical thinking and independence.",
    heroImage: heroAcademics,
    sidebarLinks: academicsSidebar("/academics/upper-primary"),
    blocks: [
      {
        heading: "Deepening the Thinker",
        body: "Classes 6–8 are the years of intellectual awakening. Students move from learning to read to reading to learn, engaging with abstract concepts in Science and Math, and taking on independent projects.",
      },
      {
        heading: "Confidence in Every Arena",
        body: "Debates, the Robotics Lab, inter-school competitions and leadership roles in house activities prepare students for the demands of secondary school.",
      },
    ],
  },
  {
    slug: "academics/secondary",
    title: "Secondary (Classes 9–10)",
    kicker: "Academics",
    metaTitle: "Secondary Classes 9th to 10th | The Orbis School Pune",
    metaDescription: "Secondary education at The Orbis School (Classes 9–10): rigorous CBSE preparation with mentoring and balance.",
    heroImage: heroAcademics,
    sidebarLinks: academicsSidebar("/academics/secondary"),
    blocks: [
      {
        heading: "Rigour with Mentorship",
        body: "In Classes 9–10, students encounter the full rigour of the CBSE curriculum. Our teachers provide structured mentoring, regular assessments and personal attention so that board preparation never feels like a lonely climb.",
      },
      {
        heading: "Balanced Excellence",
        body: "Sports, NCC, co-scholastic activities and wellness programmes continue alongside academics — because a healthy, happy student performs best.",
      },
    ],
  },
  {
    slug: "academics/senior-secondary",
    title: "Senior Secondary (Classes 11–12)",
    kicker: "Academics",
    metaTitle: "Senior Secondary Classes 11th to 12th | The Orbis School Pune",
    metaDescription: "Senior Secondary at The Orbis School (Classes 11–12): Science, Commerce and Humanities streams with future-ready skills.",
    heroImage: heroAcademics,
    sidebarLinks: academicsSidebar("/academics/senior-secondary"),
    blocks: [
      {
        heading: "Choosing Tomorrow's Path",
        body: "Classes 11–12 offer the three CBSE streams — Science, Commerce and Humanities — with expert faculty, laboratory access and career guidance that helps students make confident, informed choices.",
      },
      {
        heading: "Future-Ready Graduates",
        body: "Beyond boards, we develop the skills that universities and employers seek: research, communication, leadership and digital literacy — the Orbis edge for life beyond school.",
      },
    ],
  },

  // ─── CO-SCHOLASTIC ───────────────────────────────────────
  {
    slug: "co-scholastic/greater-education-programme",
    title: "Greater Education Programme",
    kicker: "Co-Scholastic",
    metaTitle: "Greater Education Programme | The Orbis School Pune",
    metaDescription: "The Greater Education Programme at Orbis develops leadership, character and social responsibility alongside academics.",
    heroImage: heroCo,
    sidebarLinks: coSidebar("/co-scholastic/greater-education-programme"),
    blocks: [
      {
        heading: "Education for the Whole Child",
        body: "The Greater Education Programme (GEP) is our umbrella for everything that grows the child beyond the syllabus — leadership, values, service, creativity and physical well-being.",
      },
      {
        heading: "What GEP Includes",
        body: "Leadership labs, community service, public speaking, environmental stewardship and wellness education — woven into the school week, not bolted on as an afterthought.",
      },
    ],
  },
  {
    slug: "co-scholastic/ssr",
    title: "Student Social Responsibility",
    kicker: "Co-Scholastic",
    metaTitle: "Student Social Responsibility (SSR) | The Orbis School Pune",
    metaDescription: "SSR at The Orbis School: students giving back through community service, environment drives and empathy in action.",
    heroImage: heroCo,
    sidebarLinks: coSidebar("/co-scholastic/ssr"),
    blocks: [
      {
        heading: "Empathy in Action",
        body: "The Student Social Responsibility (SSR) programme turns compassion into practice. Students lead drives for underprivileged communities, environmental campaigns, and initiatives that make a measurable difference.",
      },
      {
        heading: "Leaders Who Serve",
        body: "Every Orbis student is encouraged to take ownership of a cause. The result: graduates who understand that leadership begins with service.",
      },
    ],
  },
  {
    slug: "co-scholastic/literary-activities",
    title: "Literary Activities",
    kicker: "Co-Scholastic",
    metaTitle: "Literary Activities | The Orbis School Pune",
    metaDescription: "Debates, elocution, creative writing and OrbiLoqui — literary life at The Orbis School Pune.",
    heroImage: heroCo,
    sidebarLinks: coSidebar("/co-scholastic/literary-activities"),
    blocks: [
      {
        heading: "A School of Words",
        body: "From elocution to creative writing, from debating to declamation, our literary activities give every voice a stage. The annual OrbiLoqui festival celebrates the spoken and written word across grades.",
      },
      {
        heading: "Why It Matters",
        body: "Strong communication is the first skill of leadership. Our literary calendar ensures students practise it regularly, confidently and joyfully.",
      },
    ],
  },
  {
    slug: "co-scholastic/leadership",
    title: "Leadership",
    kicker: "Co-Scholastic",
    metaTitle: "Leadership Programmes | The Orbis School Pune",
    metaDescription: "Leadership development at Orbis: house captains, student councils, and programmes that build responsible leaders.",
    heroImage: heroCo,
    sidebarLinks: coSidebar("/co-scholastic/leadership"),
    blocks: [
      {
        heading: "Leading by Learning",
        body: "Student councils, house systems and class leadership roles give students real responsibility from an early age — organising events, representing peers and driving school initiatives.",
      },
      {
        heading: "The Responsible Leadership Ethos",
        body: "At Orbis, leadership is taught as service. Our students learn to listen, delegate, decide and take accountability — the quiet skills of responsible leadership.",
      },
    ],
  },
  {
    slug: "co-scholastic/orbieventum",
    title: "OrbiEventum",
    kicker: "Co-Scholastic",
    metaTitle: "OrbiEventum | The Orbis School Pune",
    metaDescription: "OrbiEventum — the annual festival of cultural shows, literary competitions, sports meets and exhibitions at Orbis.",
    heroImage: heroCo,
    sidebarLinks: coSidebar("/co-scholastic/orbieventum"),
    blocks: [
      {
        heading: "Celebrate Learning",
        body: "OrbiEventum is our annual celebration of everything Orbis — cultural shows, literary competitions, sports meets, and science and art exhibitions, all on one vibrant stage.",
      },
      {
        heading: "Every Child Performs",
        body: "Whether on the sports field, the cultural stage or the exhibition floor, every student participates and every achievement is celebrated. It is learning at its most joyful.",
      },
    ],
  },
  {
    slug: "co-scholastic/ncc",
    title: "NCC",
    kicker: "Co-Scholastic",
    metaTitle: "NCC at The Orbis School | Empowering Youth",
    metaDescription: "The NCC unit at The Orbis School — discipline, patriotism and leadership for empowering youth.",
    heroImage: heroCo,
    sidebarLinks: coSidebar("/co-scholastic/ncc"),
    blocks: [
      {
        heading: "NCC Empowering Youth",
        body: "Our NCC unit instils discipline, patriotism and leadership through drills, camps and community service. Cadets learn teamwork, fitness and the spirit of service to the nation.",
      },
      {
        heading: "Beyond the Parade Ground",
        body: "NCC at Orbis is a leadership laboratory — cadets organise events, represent the school at rallies and camps, and carry its values into every part of school life.",
      },
    ],
  },

  // ─── LIFE AT ORBIS ───────────────────────────────────────
  {
    slug: "life/events",
    title: "Events & Annual Calendar",
    kicker: "Life at Orbis",
    metaTitle: "Events & Annual Calendar | The Orbis School Pune",
    metaDescription: "The Orbis School events calendar — holidays, celebrations, festivals and activities across the academic year.",
    heroImage: heroLife,
    sidebarLinks: lifeSidebar("/life/events"),
    blocks: [
      {
        heading: "A Year of Celebrations",
        body: "Life at Orbis is a calendar of celebrations — national days, festivals, sports meets, cultural festivals and academic events keep the campus vibrant all year round.",
      },
      {
        heading: "Upcoming Dates",
        body: "Check back regularly for the latest circulars. Highlights this month include Independence Day, Founders' Day and OrbiLoqui.",
        bullets: [
          "28th Aug — Rakshabandhan (Holiday)",
          "26th Aug — Milad-un-Nabi / Id-E-Milad (Holiday)",
          "25th Aug — Founders' Day",
          "15th Aug — Independence Day",
          "4th Aug — OrbiLoqui, Grades 11 & 12",
        ],
      },
    ],
  },
  {
    slug: "life/gallery",
    title: "Gallery",
    kicker: "Life at Orbis",
    metaTitle: "Gallery | The Orbis School Pune",
    metaDescription: "Photo gallery of campus life at The Orbis Schools — classrooms, sports, festivals and celebrations.",
    heroImage: heroLife,
    sidebarLinks: lifeSidebar("/life/gallery"),
    blocks: [
      {
        heading: "Moments That Matter",
        body: "A glimpse of everyday life at Orbis — from the excitement of sports day to the quiet focus of the lab, from cultural festivals to classroom discoveries.",
      },
    ],
  },
  {
    slug: "life/transport",
    title: "School Transport",
    kicker: "Life at Orbis",
    metaTitle: "School Transport | The Orbis School Pune",
    metaDescription: "Safe, reliable school transport at The Orbis Schools — GPS-tracked buses covering Pune's neighbourhoods.",
    heroImage: heroLife,
    sidebarLinks: lifeSidebar("/life/transport"),
    blocks: [
      {
        heading: "Safe Journeys, Every Day",
        body: "Our transport department runs a fleet of GPS-tracked, staff-supervised buses covering routes across Pune. Route planning is coordinated with admissions so that every family has a practical option.",
      },
      {
        heading: "Safety First",
        body: "Trained attendants on every bus, speed governance, regular vehicle audits and live tracking give parents complete peace of mind.",
      },
    ],
  },
  {
    slug: "life/school-song",
    title: "School Song",
    kicker: "Life at Orbis",
    metaTitle: "School Song | The Orbis School Pune",
    metaDescription: "The Orbis School song — an anthem of learning, aspiration and the Orbis spirit.",
    heroImage: heroLife,
    sidebarLinks: lifeSidebar("/life/school-song"),
    blocks: [
      {
        heading: "An Anthem of Aspiration",
        body: "Our school song captures the Orbis spirit — the joy of learning, the pride of belonging, and the promise of 'Learners today, Leaders tomorrow'. It is sung at assemblies, ceremonies and every celebration of the Orbis family.",
      },
    ],
  },
  {
    slug: "life/outdoor-activities",
    title: "Outdoor Activities",
    kicker: "Life at Orbis",
    metaTitle: "Outdoor Activities | The Orbis School Pune",
    metaDescription: "Sports and outdoor activities at The Orbis School — cricket, football, archery, skating, gymnastics and more.",
    heroImage: heroLife,
    sidebarLinks: lifeSidebar("/life/outdoor-activities"),
    blocks: [
      {
        heading: "Sportsmanship is Learning",
        body: "At Orbis, sportsmanship is learning. Our students train in cricket, football, archery, basketball, table tennis, chess, skating, gymnastics and throwball on proper grounds and courts.",
      },
      {
        heading: "More Than Winning",
        body: "Physical education at Orbis builds fitness, teamwork, resilience and fair play — values that serve students long after the final whistle.",
      },
    ],
  },
  {
    slug: "life/progress-promotion",
    title: "Progress & Promotion",
    kicker: "Life at Orbis",
    metaTitle: "Progress & Promotion Policy | The Orbis School Pune",
    metaDescription: "How The Orbis School tracks student progress and manages promotion across grades — transparent and encouraging.",
    heroImage: heroLife,
    sidebarLinks: lifeSidebar("/life/progress-promotion"),
    blocks: [
      {
        heading: "Continuous, Caring Assessment",
        body: "Progress at Orbis is measured continuously — not just by exams. Observations, projects, class participation and formal assessments together paint an honest picture of each child's growth.",
      },
      {
        heading: "Promotion With Support",
        body: "Promotion decisions follow CBSE norms and are always made in the child's best interest, with parent-teacher conversations and support plans where needed.",
      },
    ],
  },
  {
    slug: "life/discipline",
    title: "Discipline",
    kicker: "Life at Orbis",
    metaTitle: "Discipline & Values | The Orbis School Pune",
    metaDescription: "The Orbis approach to discipline — positive, consistent and rooted in values and mutual respect.",
    heroImage: heroLife,
    sidebarLinks: lifeSidebar("/life/discipline"),
    blocks: [
      {
        heading: "Discipline as a Value, Not a Punishment",
        body: "At Orbis, discipline is taught through example, clear expectations and consistent routines. We aim for self-discipline — children who understand why, not just what.",
      },
      {
        heading: "A Respectful Community",
        body: "Our code of conduct is simple and shared: respect yourself, respect others, respect the environment. Staff model it, assemblies reinforce it, and parents partner in it.",
      },
    ],
  },
  {
    slug: "life/diary-rules",
    title: "Student Diary Rules",
    kicker: "Life at Orbis",
    metaTitle: "Student Diary Rules | The Orbis School Pune",
    metaDescription: "The Orbis student diary — the daily link between school and home, and the rules that keep communication clear.",
    heroImage: heroLife,
    sidebarLinks: lifeSidebar("/life/diary-rules"),
    blocks: [
      {
        heading: "The Diary: School ↔ Home",
        body: "The student diary is the daily bridge between school and home. It carries notices, homework, achievements and messages — and parents are encouraged to check and sign it regularly.",
      },
      {
        heading: "Keeping It Useful",
        body: "Students are expected to keep the diary neat, updated and with them daily. Teachers and parents use it for two-way notes, ensuring nothing important gets lost between campus and home.",
      },
    ],
  },
  {
    slug: "life/newsletter",
    title: "Monthly Newsletter",
    kicker: "Life at Orbis",
    metaTitle: "Monthly Newsletter | The Orbis School Pune",
    metaDescription: "The Orbis monthly newsletter — highlights of learning, achievements and community news from our campuses.",
    heroImage: heroLife,
    sidebarLinks: lifeSidebar("/life/newsletter"),
    blocks: [
      {
        heading: "The Month, In Brief",
        body: "Our monthly newsletter brings parents and friends of Orbis the highlights of each month — classroom stories, student achievements, events and reminders — straight to your inbox.",
      },
      {
        heading: "Subscribe",
        body: "Join the newsletter from the footer of this page to receive the Orbis monthly digest.",
      },
    ],
  },

  // ─── CONTACT ─────────────────────────────────────────────
  {
    slug: "contact",
    title: "Contact Us",
    kicker: "Contact",
    metaTitle: "Contact Us | The Orbis School Pune",
    metaDescription: "Contact The Orbis Schools in Pune — Keshav Nagar, Mundhwa and Gahunje campuses, phone numbers, emails and maps.",
    heroImage: heroAdm,
    sidebarLinks: contactSidebar("/contact"),
    blocks: [
      {
        heading: "We'd Love to Hear From You",
        body: "Whether you're exploring admission, planning a campus visit or have a question, our team is ready to help. Reach out to the campus nearest you.",
      },
    ],
  },
  {
    slug: "contact/careers",
    title: "Careers at Orbis",
    kicker: "Contact",
    metaTitle: "Careers at The Orbis School Pune | Teaching Jobs",
    metaDescription: "Join The Orbis Schools — teaching and staff careers at one of Pune's leading CBSE school groups.",
    heroImage: heroAdm,
    sidebarLinks: contactSidebar("/contact/careers"),
    blocks: [
      {
        heading: "Grow With Us",
        body: "The Orbis Schools are always looking for passionate educators and professionals who believe in celebrating learning. If you share our mission, we would love to meet you.",
      },
      {
        heading: "How to Apply",
        body: "Send your updated CV and a short note about why you'd like to join Orbis using the form on this page, or to the campus email address. Our HR team reviews applications on a rolling basis.",
      },
    ],
  },
  {
    slug: "contact/vendors",
    title: "Vendors",
    kicker: "Contact",
    metaTitle: "Vendors | The Orbis School Pune",
    metaDescription: "Vendor registration and partnerships with The Orbis Schools — transport, catering, infrastructure and services.",
    heroImage: heroAdm,
    sidebarLinks: contactSidebar("/contact/vendors"),
    blocks: [
      {
        heading: "Partner With Orbis",
        body: "We work with trusted vendors for transport, catering, infrastructure, technology and services. If you can serve a growing school community with quality and integrity, we'd like to hear from you.",
      },
    ],
  },
  {
    slug: "contact/franchise",
    title: "Franchise",
    kicker: "Contact",
    metaTitle: "Franchise Opportunities | The Orbis School Pune",
    metaDescription: "Explore Orbis School franchise opportunities — bring the Orbis model of education to your city.",
    heroImage: heroAdm,
    sidebarLinks: contactSidebar("/contact/franchise"),
    blocks: [
      {
        heading: "Bring Orbis to Your City",
        body: "The Orbis model — a Wissen Education Foundation initiative — combines a proven CBSE framework with a distinctive philosophy of celebrating learning. We are exploring partnerships with like-minded educators.",
      },
      {
        heading: "Get in Touch",
        body: "If you are interested in the Orbis franchise model, use the form on this page and our team will connect with you.",
      },
    ],
  },

  // ─── RESOURCES ───────────────────────────────────────────
  {
    slug: "resources/faqs",
    title: "Frequently Asked Questions",
    kicker: "Resources",
    metaTitle: "FAQs | The Orbis School Pune CBSE",
    metaDescription: "Answers to common questions about admission, fees, transport and academics at The Orbis Schools Pune.",
    heroImage: heroAcademics,
    blocks: [
      {
        heading: "Admission & Fees",
        body: "The most common questions parents ask us about joining Orbis.",
        bullets: [
          "Admissions for 2026–27 are open at all three campuses.",
          "The process begins with the online Admission Enquiry form; a counsellor contacts you within 2 working days.",
          "Fee details are shared transparently at the counselling session; online payment options are available.",
          "Transport routes are discussed during admission so every family can plan travel from day one.",
        ],
      },
      {
        heading: "Academics & Daily Life",
        body: "Questions about how learning works at Orbis.",
        bullets: [
          "We follow the CBSE curriculum from Preschool through Class 12.",
          "Class sizes are kept small to allow personalised attention.",
          "Labs — Science, Math, AI & Robotics, Language, Computer — and sports facilities are available across campuses.",
          "The student diary and parent portal keep families informed of daily progress.",
        ],
      },
    ],
  },
];

export function getPage(slug: string): InteriorPage | undefined {
  return PAGES.find((p) => p.slug === slug);
}
