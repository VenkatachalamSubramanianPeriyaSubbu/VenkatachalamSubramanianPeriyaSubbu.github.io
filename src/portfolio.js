/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Venkatachalam Subramanian",
  title: "Hi all, I'm Venkatachalam",
  subTitle: emoji(
    "A passionate Data Scientist 🚀 skilled in statistical modeling, deep learning, Python, SQL, and cloud platforms with experience in building end-to-end ML solutions that extract insights, optimize processes, and support strategic decisions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1u6xhe5NxaUs2mSFHQepuICSY6mmq9u28/view?usp=sharing", // Your updated resume link
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/VenkatachalamSubramanianPeriyaSubbu",
  linkedin: "https://www.linkedin.com/in/venkatachalam-subramanian-periya-subbu/",
  gmail: "venkatachalam.sps@gmail.com",
  medium: "https://medium.com/@venkatachalam.sps",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DATA SCIENTIST WHO LOVES TO EXPLORE AI/ML AND BUILD INTELLIGENT SOLUTIONS",
  skills: [
    emoji(
      "⚡ Build end-to-end ML solutions for statistical modeling and deep learning applications"
    ),
    emoji("⚡ Develop computer vision and NLP pipelines using PyTorch, TensorFlow, and Hugging Face"),
    emoji(
      "⚡ Deploy scalable data solutions on cloud platforms like AWS and GCP with Docker & Kubernetes"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "google-cloud",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "tableau",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of San Francisco",
      logo: require("./assets/images/usfLogo.png"),
      subHeader: "Master of Science in Data Science",
      duration: "July 2024 - June 2025",
      desc: "Specializing in Machine Learning, Deep Learning, and Statistical Modeling",
      descBullets: [
        "Advanced coursework in Neural Networks and Computer Vision",
        "Focus on end-to-end ML pipeline development and deployment"
      ]
    },
    {
      schoolName: "CHRIST University",
      logo: require("./assets/images/christLogo.png"),
      subHeader: "Bachelor of Science in Economics, Mathematics, Statistics",
      duration: "August 2021 - June 2024",
      desc: "Strong foundation in statistical analysis and mathematical modeling",
      descBullets: [
        "Comprehensive study of statistical methods and economic modeling",
        "Mathematical foundations for advanced data science applications"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning/AI", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Engineering",
      progressPercentage: "85%"
    },
    {
      Stack: "Cloud Platforms",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Scientist Intern – Office of Chief Scientist",
      company: "Environmental Defense Fund",
      companylogo: require("./assets/images/edfLogo.png"),
      date: "October 2024 – June 2025",
      desc: "Building ML solutions for environmental data analysis and scientific document processing.",
      descBullets: [
        "Built Python ETL pipeline processing 100+ scientific documents, reducing processing time by 90%",
        "Built a sequential NLP agent pipeline with LLaMA to classify papers at 92% accuracy, reducing review time by 85%",
        "Fine-tuned VGG16 CNN in PyTorch for methane graph classification, reaching 92% accuracy on 4,000+ images",
        "Developed computer vision pipeline using YOLO, K-Means, DBSCAN & ChartOCR, digitizing emissions data with 93% precision and 94% recall"
      ]
    },
    {
      role: "Data Scientist Researcher",
      company: "Indian Institute of Management, Bangalore",
      companylogo: require("./assets/images/iimbLogo.png"),
      date: "May 2023 – June 2023",
      desc: "Research on GenAI and Large Language Models, benchmarking foundational models and analyzing industry trends.",
      descBullets: [
        "Reviewed 50+ papers on GenAI and LLMs, summarizing architectures, theory, and applications",
        "Benchmarked foundational models (GPT, BERT, PaLM), comparing performance and use cases",
        "Analyzed emerging GenAI trends across 10+ industries to identify opportunities and guide R&D strategy"
      ]
    },
    {
      role: "Data Scientist Consultant – Academic Capstone",
      company: "IIT Madras, BS in Data Science and Applications",
      companylogo: require("./assets/images/iitMadrasLogo.png"),
      date: "May 2023 – Aug 2023",
      desc: "Academic capstone project consulting for organic retailer, implementing customer segmentation and predictive modeling.",
      descBullets: [
        "Consulted for an organic retailer; analyzed 15 months of sales to identify 6 key revenue-driving categories",
        "Built K-Means and DBSCAN models on RFM data to segment 1,600 customers, transitioning 15% of churn-prone cohort to average-value segment",
        "Trained Random Forest and XGBoost models to predict order value and customer lifetime, improving targeting",
        "Analyzed sales by channel; found online orders (4%) drove 8% revenue and 56% higher AOV, guiding digital strategy"
      ]
    },
    {
      role: "Data Analyst Intern – Search Marketing",
      company: "Global Media Insight",
      companylogo: require("./assets/images/gmiLogo.png"),
      date: "June 2022",
      desc: "Search marketing analytics, GA4 migration, and dashboard development.",
      descBullets: [
        "Migrated 50+ GB of analytics data from 10+ client sites from Universal Analytics to GA4, improving KPI tracking",
        "Created SQL queries in BigQuery to analyze GA4 data and map user journeys across funnel stages",
        "Used Tableau to apply custom URL grouping, improving behavioral segmentation and reporting",
        "Designed Tableau dashboards and Sankey charts to visualize KPIs including bounce rates and conversion paths"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "MAJOR DATA SCIENCE PROJECTS AND ML SOLUTIONS I'VE BUILT",
  projects: [
    {
      image: require("./assets/images/chessVisionLogo.png"),
      projectName: "Chess Vision Model",
      projectDesc: "Hackathon-winning Chess Vision model with Attention and SE blocks, trained on 350K Grand Master games achieving 5× speedup vs. Stockfish.",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/VenkatachalamSubramanianPeriyaSubbu/Chess-Vision-Hackathon"
        },
        {
          name: "Read Blog",
          url: "https://words.strongcompute.com/p/maybe-attention-is-all-you-actually?utm_source=post-email-title&publication_id=3069270&post_id=152843053&utm_campaign=email-post-title&isFreemail=true&r=4binv6&triedRedirect=true"
        }
      ]
    },
    {
      image: require("./assets/images/jobRecLogo.png"),
      projectName: "Job Recommendation System",
      projectDesc: "End-to-end job recommendation system using GCP Composer, Apache Airflow, MongoDB, Spark SQL, PySpark, and BERT for automated data retrieval, preprocessing, and job matching with neural networks.",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/VenkatachalamSubramanianPeriyaSubbu/Job-Recommendation-System"
        }
      ]
    },
    {
      image: require("./assets/images/speechDiarizationLogo.png"),
      projectName: "Speech Diarization",
      projectDesc: "EEND-TA model using Transformer Attractors for speaker diarization achieving 0.1314 BCE loss on VoxConverse dataset.",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/VenkatachalamSubramanianPeriyaSubbu/Speech_Diarization"
        },
        {
          name: "Read Blog",
          url: "https://medium.com/@venkatachalam.sps/will-you-shut-up-man-b94690fc9049"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Certifications, Awards and Cool Data Science Achievements!",

  achievementsCards: [
    {
      title: "AWS AI Practitioner",
      subtitle: "Certified in AWS AI/ML services and best practices for deploying AI solutions on cloud infrastructure.",
      image: require("./assets/images/awsLogo.png"),
      imageAlt: "AWS AI Practitioner Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://your-aws-certification-link" // Update with actual certification link
        }
      ]
    },
    {
      title: "Google Data Analytics Certificate",
      subtitle: "Comprehensive certification covering data analysis, visualization, and statistical analysis using industry tools.",
      image: require("./assets/images/googleAnalyticsLogo.png"),
      imageAlt: "Google Data Analytics Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://your-google-certification-link" // Update with actual certification link
        }
      ]
    },
    {
      title: "Data Science Lab - WorldQuant University",
      subtitle: "Advanced data science training program focusing on quantitative analysis and financial modeling.",
      image: require("./assets/images/worldQuantLogo.png"),
      imageAlt: "WorldQuant University Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://your-worldquant-certification-link" // Update with actual certification link
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "With a passion for Data Science and AI, I love to write and share insights about machine learning and analytics.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://words.strongcompute.com/p/maybe-attention-is-all-you-actually?utm_source=post-email-title&publication_id=3069270&post_id=152843053&utm_campaign=email-post-title&isFreemail=true&r=4binv6&triedRedirect=true",
      title: "Building a Chess Vision Model with Deep Learning",
      description: "How I built a hackathon-winning chess position recognition model using attention mechanisms and achieved 5× speedup over traditional methods."
    },
    {
      url: "https://medium.com/@venkatachalam.sps/will-you-shut-up-man-b94690fc9049",
      title: "Advanced Speaker Diarization with Transformer Attractors",
      description: "Deep dive into EEND-TA architecture for speaker diarization and achieving state-of-the-art results on VoxConverse dataset."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY DATA SCIENCE KNOWLEDGE AND EXPERIENCES 📊"),

  talks: [
    {
      title: "Machine Learning in Environmental Science",
      subtitle: "Data Science Meetup San Francisco 2024",
      slides_url: "https://bit.ly/your-slides", // Replace with your slides
      event_url: "https://www.meetup.com/your-event/" // Replace with event link
    }
  ],
  display: false // Set true to show this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (415) 513-9684",
  email_address: "venkatachalam.sps@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "your-twitter-handle", //Replace with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};