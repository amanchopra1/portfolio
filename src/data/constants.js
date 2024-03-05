export const Bio = {
  name: "Aman Chopra",
  roles: [
    "Influencer",
    "AI Engineer",
    "UI/UX Designer",
    "Programmer",
    "Project Manager",
    "Innovator",
    "Servant Leader",
    "Visonary Educator",
    "Digital Marketor",
    "Content Writer",
    "Musician",
    "Public Speaker",
    "Vocalist"
  ],
  description:
    "You cannot be great at the start, but you have to start to be great",
  github: "https://github.com/amanchopra1",
  // resume:
  //   "https://drive.google.com/file/d/1Sc4hiOcHBivwJxfgfjrGsKS0rOGfc6IF/view?usp=sharing",
  linkedin: "http://linkedin.com/in/amanchopra9",
  
  insta: "https://www.instagram.com/amanchopra__/",
  
};

export const skills = [
  {
    title: 'Kirtan Session',
    description: 'Immerse yourself in the divine melodies of a Kirtan Session. Invite me for an enchanting experience that transcends boundaries and uplifts the soul.',
    cta: 'Contact Me',
    link: 'https://wa.me/+919467308619'
  },
  {
    title: 'Speech/Lecture',
    description: " Let's create an engaging and authentic exchange of ideas. Invite me for a public seminar/speech/lecture.",
    cta: 'Contact Me',
  },
  {
    title: 'Online Event',
    description: 'Thinking of hosting an online event? Invite me to share thoughts and insights in a way that suits your audience. We can keep it easygoing, ensuring a comfortable and enriching experience for everyone involved.',
    cta: 'Contact Me',
  },

];


// ... (your existing imports remain the same)

// New component for YouTube playlist embedding
const YouTubePlaylist = ({ playlistUrl }) => (
  <iframe
    width="560"
    height="315"
    src={playlistUrl}
    title="YouTube Playlist"
    frameBorder="0"
    allowFullScreen
  ></iframe>
);

export const experiences = [
  {
    company: "Bhagavad Gita Systematic Course Chapter by Chapter",
    role: "Bhagavad Gita Course ",
    date: "",
    desc: [
      "Systematic Bhagavad Gita Course",
    ],
    youtubePlaylist: "https://www.youtube.com/watch?v=dCjHT8pReBA&list=PL12Kuhw8gekSheyjzCBWjY3DmZAahPSE3&ab_channel=AmanChopra",
  },
  {
    company: "Visit Uttarakhand",
    role: "Project Manager Intern",
    date: "March 2023 - May 2023",
    desc: [
      "Successfully recruited and collaborated with a high-performing team for smooth operations.",
      "Managed end-to-end project execution for the travel booking website, visituttrakhand.in.",
      "Utilized agile methodologies for Full Stack website development using Node.js, Tailwind CSS.",
    ],
    youtubePlaylist: "https://www.youtube.com/watch?v=rAJm79SXKH8&list=PL12Kuhw8gekTOeDLYexqlZFe51TbBtD6f&ab_channel=AmanChopra",
  },
  {
    company: "MyCaptain",
    role: "Campus Ambassador",
    date: "Feb 2021 - March 2021",
    desc: [
      "Developed business development, marketing, and sales expertise.",
      "Executed initiatives to drive positive growth and foster collaboration.",
      "Established and nurtured relationships with stakeholders.",
    ],
    youtubePlaylist: "https://www.youtube.com/watch?v=tf1Hfa8S6jQ&list=PL12Kuhw8gekTZqTE_or1NTrxhCZcrfJKL&ab_channel=AmanChopra",
  },
];


export const projects = [
  {
    title: "Sakha - Your friend Philosopher Guide",
    description: "Development of a conversational Chatbot which provides to be a friend who listens and gives solutions to one's problems related to mental health, lifestyle, and goals of life concerning the ultimate guide Bhagavad Gita",
    date: "August 2022 - Current",
    category: "machine learning",
    image: "https://i.ibb.co/85Rrh5g/Screenshot-2024-02-16-at-7-03-52-PM.png",
    tags: [
      "Chatbot",
      "Gita-inspired",
      "Empathetic AI",
      "Flask",
      "Front-end Development",
      "Back-end Development",
      "OpenAI FineTuning GPT-3",
      "Instagram Marketing",
      "Dataset Curation",
      "Project Management",
    ],
    webapp: "https://info.sakha.chat",
    github: "https://github.com/Sakha-chat",
  },
  {
    title: "Gita Remedies",
    description: "Organized Scriptural data and created a web page addressing life's problems with Bhagavad Gita Solutions.",
    date: "June 2022 - July 2022",
    image:"https://i.ibb.co/v3QV8YQ/gitaremedies.png",
    tags: [
      "Scriptural Data",
      "Bhagavad Gita Solutions",
      "Web Page",
      "Life Problems",
      "Spiritual",
      "Philosophy",
      "Self-help",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    category: "web app",
    github: "https://github.com/Sakha-chat/gitaremedies",
    webapp: "https://gita.sakha.chat",
  },
  {
    title: "Learn Gita Live Gita Course Website",
    description: "Full Stack E-Learning Website using Django, Python, HTML, CSS, and JavaScript.",
    date: "Sept 2022 - Nov 2022",
    image:"https://i.ibb.co/1TcTCPN/livegit.png",
    tags: [
      "Django",
      "Python",
      "Full Stack",
      "E-Learning",
      "HTML",
      "CSS",
      "JavaScript",
      "Course Information",
      "Enrollment",
      "Web Development",
      "Back-end Development",
      "Front-end Development",
    ],
    category: "web app",
    webapp: "bio.site/lglg",
    github: "https://github.com/amanchopra1/django-live-gita",
  },
  {
    title: "Agrozyme Plus E-commerce Store",
    description: "Launched a fully operational BioStimulant Organic Fertilizer an E-commerce store using Bootstrap, HTML, CSS, JS and Razorpay.",
    date: "March 2022 - May 2022",
    image: "https://i.ibb.co/gdvDmX5/agrozyme.png",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Razorpay Integration",
      "Responsive Design",
      "Product Showcase",
      "Customer Support Integration (WhatsApp)",
      "Form Integration (Google Form)",
    ],
    category: "web app",
    github: "https://github.com/amanchopra1/agrozyme",
    webapp: "https://agrozymeplus.com",
  },
];


// Update your education data to merchandise product data with images
export const merchandiseData = [
  {
    name: "Black Tension T-shirt",
    description: "Premium black t-shirt made from 100% cotton for a stylish and comfortable look.",
    price: "Rs. 549",
    image: "https://i.ibb.co/Bqtf6Gk/blacktension.jpg",
  },
  {
    name: "Butterfly T-shirt",
    description: "Stylish butterfly-themed t-shirt made from 100% cotton for a trendy and chic style.",
    price: "Rs. 549",
    image: "https://i.ibb.co/mGLC2jR/butterfly.jpg",
  },
  {
    name: "Butterfly Back T-shirt",
    description: "Unique butterfly back t-shirt made from 100% cotton for a distinctive and stylish appearance.",
    price: "Rs. 549",
    image: "https://i.ibb.co/WV7JLKP/butterflybackk.jpg",
  },
  {
    name: "White Butterfly T-shirt",
    description: "Elegant white butterfly-themed t-shirt made from 100% cotton for a graceful and fashionable look.",
    price: "Rs. 549",
    image: "https://i.ibb.co/ckNKWy1/butterflywhite.jpg",
  },
  {
    name: "Hari Black T-shirt",
    description: "Classic black t-shirt from the Hari collection, made from 100% cotton for a timeless and comfortable style.",
    price: "Rs. 549",
    image: "https://i.ibb.co/pvW68NV/hariblack.jpg",
  },
  {
    name: "Hari White T-shirt",
    description: "Chic white t-shirt from the Hari collection, made from 100% cotton for a stylish and comfortable look.",
    price: "Rs. 549",
    image: "https://i.ibb.co/h9WYZ6R/hariwhite.jpg",
  },
  {
    name: "Hood Back Clothes",
    description: "Trendy hood back clothes made from premium cotton for a stylish and cozy outfit.",
    price: "Rs. 549",
    image: "https://i.ibb.co/xqqtsSb/hoodback.jpg",
  },
  {
    name: "Hood Front Clothes",
    description: "Stylish hood front clothes made from premium cotton for a fashionable and comfortable attire.",
    price: "Rs. 549",
    image: "https://i.ibb.co/gdcnQpd/hoodfront.jpg",
  },
  {
    name: "Humaresath Black T-shirt",
    description: "Versatile black t-shirt from the Humaresath collection, made from 100% cotton for a comfortable and stylish look.",
    price: "Rs. 549",
    image: "https://i.ibb.co/QjQgzyY/humaresathblack.jpg",
  },
  {
    name: "Humaresath White T-shirt",
    description: "Timeless white t-shirt from the Humaresath collection, made from 100% cotton for a classic and comfortable style.",
    price: "Rs. 549",
    image: "https://i.ibb.co/Jq8cRk6/humaresathwhite.jpg",
  },
  {
    name: "No Tension Black T-shirt",
    description: "Sleek black t-shirt from the No Tension collection, made from 100% cotton for a modern and comfortable look.",
    price: "Rs. 549",
    image: "https://i.ibb.co/4P3rwcg/notensionblack.jpg",
  },
  {
    name: "No Tension White T-shirt",
    description: "Clean white t-shirt from the No Tension collection, made from 100% cotton for a minimalist and comfortable style.",
    price: "Rs. 549",
    image: "https://i.ibb.co/sVddVKX/notensionwhite.jpg",
  },
  {
    name: "Tension White T-shirt",
    description: "Minimalist white t-shirt from the Tension collection, made from 100% cotton for a simple and comfortable look.",
    price: "Rs. 549",
    image: "https://i.ibb.co/s5fDgFp/tensionwhite.jpg",
  },
  {
    name: "White Butterfly T-shirt",
    description: "Graceful white butterfly-themed t-shirt made from 100% cotton for an elegant and comfortable style.",
    price: "Rs. 549",
    image: "https://i.ibb.co/VL8RX28/whitebutterfly.jpg",
  },
];




export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
