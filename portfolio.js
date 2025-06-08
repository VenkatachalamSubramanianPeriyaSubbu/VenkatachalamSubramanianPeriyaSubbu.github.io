import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, Menu, X, ChevronDown } from 'lucide-react';

// Configuration data (from your portfolio.js)
const config = {
  greeting: {
    username: "Venkatachalam Subramanian",
    title: "Hi all, I'm Venkatachalam",
    subTitle: "A passionate Data Scientist 🚀 skilled in statistical modeling, deep learning, Python, SQL, and cloud platforms with experience in building end-to-end ML solutions that extract insights, optimize processes, and support strategic decisions.",
    resumeLink: "https://drive.google.com/file/d/1u6xhe5NxaUs2mSFHQepuICSY6mmq9u28/view?usp=sharing"
  },
  socialMediaLinks: {
    github: "https://github.com/VenkatachalamSubramanianPeriyaSubbu",
    linkedin: "https://www.linkedin.com/in/venkatachalam-subramanian-periya-subbu/",
    gmail: "venkatachalam.sps@gmail.com",
    medium: "https://medium.com/@venkatachalam.sps"
  },
  skillsSection: {
    title: "What I do",
    subTitle: "DATA SCIENTIST WHO LOVES TO EXPLORE AI/ML AND BUILD INTELLIGENT SOLUTIONS",
    skills: [
      "⚡ Build end-to-end ML solutions for statistical modeling and deep learning applications",
      "⚡ Develop computer vision and NLP pipelines using PyTorch, TensorFlow, and Hugging Face",
      "⚡ Deploy scalable data solutions on cloud platforms like AWS and GCP with Docker & Kubernetes"
    ],
    softwareSkills: [
      { skillName: "Python", icon: "🐍" },
      { skillName: "SQL", icon: "🗄️" },
      { skillName: "R", icon: "📊" },
      { skillName: "AWS", icon: "☁️" },
      { skillName: "Google Cloud", icon: "🌐" },
      { skillName: "Docker", icon: "🐳" },
      { skillName: "Git", icon: "📝" },
      { skillName: "PyTorch", icon: "🔥" },
      { skillName: "TensorFlow", icon: "🧠" },
      { skillName: "MongoDB", icon: "🍃" },
      { skillName: "Tableau", icon: "📈" },
      { skillName: "Kubernetes", icon: "⚙️" }
    ]
  },
  educationInfo: {
    schools: [
      {
        schoolName: "University of San Francisco",
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
        subHeader: "Bachelor of Science in Economics, Mathematics, Statistics",
        duration: "August 2021 - June 2024",
        desc: "Strong foundation in statistical analysis and mathematical modeling",
        descBullets: [
          "Comprehensive study of statistical methods and economic modeling",
          "Mathematical foundations for advanced data science applications"
        ]
      }
    ]
  },
  workExperiences: {
    experience: [
      {
        role: "Data Scientist Intern – Office of Chief Scientist",
        company: "Environmental Defense Fund",
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
        date: "May 2023 – Aug 2023",
        desc: "Academic capstone project consulting for organic retailer, implementing customer segmentation and predictive modeling.",
        descBullets: [
          "Consulted for an organic retailer; analyzed 15 months of sales to identify 6 key revenue-driving categories",
          "Built K-Means and DBSCAN models on RFM data to segment 1,600 customers, transitioning 15% of churn-prone cohort to average-value segment",
          "Trained Random Forest and XGBoost models to predict order value and customer lifetime, improving targeting",
          "Analyzed sales by channel; found online orders (4%) drove 8% revenue and 56% higher AOV, guiding digital strategy"
        ]
      }
    ]
  },
  bigProjects: [
    {
      projectName: "Chess Vision Model",
      projectDesc: "Hackathon-winning Chess Vision model with Attention and SE blocks, trained on 350K Grand Master games achieving 5× speedup vs. Stockfish.",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/VenkatachalamSubramanianPeriyaSubbu/Chess-Vision-Hackathon"
        },
        {
          name: "Read Blog",
          url: "https://words.strongcompute.com/p/maybe-attention-is-all-you-actually"
        }
      ]
    },
    {
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
  contactInfo: {
    title: "Contact Me ☎️",
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+1 (415) 513-9684",
    email_address: "venkatachalam.sps@gmail.com"
  }
};

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'education', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-xl font-medium">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Venkatachalam
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Skills', 'Education', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors duration-200 ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'Skills', 'Education', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  {config.greeting.title}
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                  {config.greeting.subTitle}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href={config.greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  <Download className="mr-2" size={20} />
                  Resume
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  Contact Me
                </button>
              </div>

              <div className="flex space-x-6">
                <a href={config.socialMediaLinks.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
                  <Github size={24} />
                </a>
                <a href={config.socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href={`mailto:${config.socialMediaLinks.gmail}`} className="text-white hover:text-blue-200 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="text-8xl">🚀</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white" />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{config.skillsSection.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{config.skillsSection.subTitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {config.skillsSection.skills.map((skill, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                    ✓
                  </div>
                  <p className="text-gray-700 text-lg">{skill}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
              {config.skillsSection.softwareSkills.map((skill, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-200">
                  <div className="text-4xl mb-3">{skill.icon}</div>
                  <p className="text-sm font-medium text-gray-700">{skill.skillName}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-xl text-gray-600">My academic journey in data science and analytics</p>
          </div>

          <div className="space-y-8">
            {config.educationInfo.schools.map((school, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{school.schoolName}</h3>
                    <p className="text-xl text-blue-600 font-semibold">{school.subHeader}</p>
                  </div>
                  <div className="text-gray-600 font-medium mt-2 md:mt-0">{school.duration}</div>
                </div>
                <p className="text-gray-700 mb-4">{school.desc}</p>
                <ul className="space-y-2">
                  {school.descBullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <p className="text-xl text-gray-600">My professional journey in data science</p>
          </div>

          <div className="space-y-8">
            {config.workExperiences.experience.map((exp, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-xl text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-gray-600 font-medium mt-2 md:mt-0">{exp.date}</div>
                </div>
                <p className="text-gray-700 mb-4">{exp.desc}</p>
                <ul className="space-y-2">
                  {exp.descBullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
            <p className="text-xl text-gray-600">Major data science projects and ML solutions I've built</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {config.bigProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-6xl text-white">🔬</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.projectName}</h3>
                  <p className="text-gray-700 mb-6">{project.projectDesc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.footerLink.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink size={14} className="mr-1" />
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{config.contactInfo.title}</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">{config.contactInfo.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href={`mailto:${config.contactInfo.email_address}`} className="text-blue-200 hover:text-white transition-colors">
                    {config.contactInfo.email_address}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  📞
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href={`tel:${config.contactInfo.number}`} className="text-blue-200 hover:text-white transition-colors">
                    {config.contactInfo.number}
                  </a>
                </div>
              </div>

              <div className="flex space-x-6">
                <a href={config.socialMediaLinks.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
                  <Github size={32} />
                </a>
                <a href={config.socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
                  <Linkedin size={32} />
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                  ></textarea>
                </div>
                <button className="w-full px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Venkatachalam Subramanian. Built with React and Tailwind CSS.
            </p>
            <p className="text-gray-400 mt-2">
              Open for opportunities: <span className="text-green-400 font-semibold">Yes</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;