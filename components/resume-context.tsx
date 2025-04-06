"use client"

import { createContext, useContext, type ReactNode } from "react"

// Define the resume data structure
export type Experience = {
  title: string
  company: string
  period: string
  description: string[]
}

export type Project = {
  title: string
  technologies: string
  date: string
  description: string[]
}
export type Publication = {
  title: string
  technologies: string
  date: string
  status: string
}

export type Education = {
  institution: string
  degree: string
  gpa: string
  graduation: string
}

export type Certification = {
  title: string
  issuer: string
}

export type Language = {
  name: string
  proficiency: string
}

export type Activity = {
  title: string
  description: string
}

// Resume data based on the provided resume
const resumeData = {
  personal: {
    name: "Harsh Raj A",
    title: "Data Scientist",
    location: "Vellore, Tamilnadu, India",
    phone: "+91-9304155460",
    email: "eyeharshraj@gmail.com",
    linkedin: "www.linkedin.com/in/a-harshraj",
    github: "https://github.com/1iamharshraj",
    kaggle: "https://www.kaggle.com/harshraj1111",
  },
  skills: {
    languages: ["Kotlin", "Java", "Python", "C/C++", "SQL (PL-SQL, MySQL)", "JavaScript", "HTML", "XML", "CSS"],
    frameworks: ["Node.js", "Flask", "Django", "Bootstrap", "React"],
    devops: ["Git", "Docker", "Postman", "kubernetes(basic)"],
    cloud: ["Linux (Configuring and Managing)"],
    specialization: [
      "Machine learning",
      "Deep Learning",
      "Large Language Models",
      "Natural Language Processing",
      "Image Processing",
    ],
    libraries: [
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "Keras",
      "Pandas",
      "NumPy",
      "OpenCV",
      "Hugging Face Transformers",
      "NLTK",
      "spaCy",
    ],
  },
  experience: [
    {
      title: "Android & Web Developer",
      company: "Self Employed",
      period: "August 2022 – Present",
      description: [
        "Engineered an Android application for a barber shop, focusing on financial management and billing.",
        "Executed features to streamline employee scheduling, aiming to reduce administrative time by 25% and improve staff productivity.",
        "Improved the booking system to aim for a 30% reduction in wait times, resulting in improved customer satisfaction and retention.",
        "Collaborated with a local taxi service to develop a web application, aiming to streamline the booking process and increase daily trips by 10%.",
      ],
    },
    {
      title: "AI And QI Research Intern",
      company: "Quick IsCool",
      period: "MAY 2024 – JULY 2024",
      description: [
        "Completed a 6-week internship program focused on Information Intelligence, Quantum Intelligence, and Biological Intelligence.",
        "Acquired theoretical knowledge and practical skills to tackle real-world challenges in Information Technology and Artificial Intelligence.",
        "Demonstrated proficiency in applying academic and technical skills to solve engineering and tech development problems in field of Artificial intelligence.",
        "Completed coding challenges (beginner and intermediate levels) in Information Technology and Intelligence domains, showcasing ability to translate skills into practical solutions.",
        "Mastered foundational R and D skills, highlighting potential to excel in a career focused on innovation within the IT and AI landscape.",
      ],
    },
    {
      title: "Machine Learning Intern",
      company: "Orinson Technologies",
      period: "SEPT 2024 – OCT 2024",
      description: [
        "Worked extensively with text and image data, applying Machine Learning and AI techniques to real-world problems.",
        "Developed and implemented models using TensorFlow, showcasing expertise in deep learning frameworks.",
        "Utilized Python libraries such as NumPy and pandas for efficient data preprocessing and analysis.",
        "Gained hands-on experience in building, training, and optimizing machine learning models.",
        "Enhanced problem-solving skills by working on practical AI applications and data-driven projects.",
      ],
    },
    {
      title: "Samsung PRISM Project",
      company: "Collaborator",
      period: "March 2024 – Present",
      description: [
        "Contributed to a collaborative project between Samsung and college, focusing on solving real-world problems through innovative approaches.",
        "Specialized in domain adaptation, applying machine learning techniques to enhance model performance across different domains.",
        "Developed practical solutions to complex problems, demonstrating proficiency in both theoretical and applied aspects of domain adaptation.",
        "Collaborated with a diverse team of peers, enhancing teamwork and communication skills while tackling engineering and tech development challenges.",
        "Showcased ability to translate academic knowledge into practical solutions, contributing to the advancement of the project goals.",
      ],
    },
  ],
  education: [
    {
      institution: "Vellore Institute of Technology, Vellore",
      degree: "M.Tech (Integrated), Computer Science (Data Science specialization)",
      gpa: "8.72/10 (3.48/4)",
      graduation: "March 2027",
    },
  ],
  projects: [
    {
      title: "Leo Call Taxi Website",
      technologies: "Django, HTML, CSS, SQL",
      date: "March 2024",
      description: [
        "Designed and developed an interactive website for a local cab company using Django to convert 80 to 100% customers to online mode.",
        "Incorporated a user-friendly booking system, aimed at a 40% increase in online bookings within the first month of launch",
        "Optimized website performance and responsiveness, leading to a 20% reduction in bounce rate.",
      ],
    },
    {
      title: "GeoLocator Application",
      technologies: "Python, Kotlin, XML, Android Studio",
      date: "March 2023",
      description: [
        "Engineered a geotagging-based application, pioneering its creation for research purposes and contributing expertise to both front-end and back-end development.",
        "Enhanced location accuracy by 25% compared to existing solutions through algorithm optimization.",
        "Revolutionized the operational workflow by transitioning from a manual system to a digital platform, reducing work time by approximately 75%, thereby substantially boosting operational efficiency.",
      ],
    },
    {
      title: "E-tutor AI Website",
      technologies: "Django, Google Colab, Gemini API, TensorFlow, Python",
      date: "March 2024 – Present",
      description: [
        "Leading the development of E-Tutor, a website leveraging deepfake technology to enhance teacher efficiency in generating educational content from PowerPoint presentations, resulting in a 50% time saving.",
        "Utilizing Large Language Models (LLMs) for doubt-solving, contributing to a 10% increase in efficiency.",
        "Implementing an AI-driven recommendation system to personalize learning experiences for students, leading to an increase in user engagement.",
      ],
    },
    {
      title: "Brain Tumor Detection",
      technologies: "TensorFlow, Google Colab, Jupyter Notebook",
      date: "March 2024",
      description: [
        "Developed a brain tumor detection model using TensorFlow, leveraging Variational Autoencoder (VAE) within a Generative Adversarial Network (GAN) framework to process MRI and CT images, effectively expanding the dataset.",
        "Implemented VAE for Reversible GAN to convert MRI and CT images, scaling the dataset from 3600 discrete images to 7400 paired images, resulting in a 200% increase in data diversity.",
        "Achieved a 2 to 3% enhancement across all evaluation metrics, including sensitivity, specificity, and accuracy, subsequent to the augmentation of the dataset with 3600 additional images.",
      ],
    },
  ],
  publications: [
    {
      title:
        "Analyzing the Impact of Unexpected Climate Changes: A Machine Learning Method for Improved Crop Prediction",
      technologies: "TensorFlow, Google Colab, Jupyter Notebook",
      date: "NOV 2024",
      status:
        "Accepted at International Conference of Progressive Computational Intelligence, Information Technology, and Networking (COM-IT-CON 2024).",
    },
    {
      title: "UV-CyGAN: High Score Bi-Direction Biomedical Image Translation",
      technologies: "TensorFlow, Google Colab, Jupyter Notebook",
      date: "NOV 2024",
      status: "Under Publication",
    },
    {
      title: "The Role of Machine Learning and Deep Learning in Drug Discovery",
      technologies: "TensorFlow, Google Colab, Jupyter Notebook",
      date: "NOV 2024",
      status: "Under Publication",
    },
    {
      title: "TileSwap-SSG: A Novel Approach to Domain Adaptation",
      technologies: "TensorFlow, Google Colab, Jupyter Notebook",
      date: "NOV 2024",
      status: "Under Publication",
    },
    {
      title: "Meta-Heuristic Based Bug Detection",
      technologies: "TensorFlow, Google Colab, Jupyter Notebook",
      date: "NOV 2024",
      status: "Under Publication",
    },
    {
      title: "BlNet PSS: A Method for Protein Secondary Structure Prediction Using Bi-Directional LSTM Networks",
      technologies: "TensorFlow, Google Colab, Jupyter Notebook",
      date: "NOV 2024",
      status: "Under Publication",
    },
  ],
  certifications: [
    { title: "Advanced Learning Algorithm", issuer: "DeepLearning.AI" },
    { title: "Supervised Machine Learning: Regression and Classification", issuer: "DeepLearning.AI" },
    { title: "SQL (Basic)", issuer: "HackerRank" },
    { title: "Machine Learning Specialization", issuer: "DeepLearning.AI" },
    { title: "Unsupervised Machine Learning", issuer: "DeepLearning.AI" },
    { title: "Full-Stack Development", issuer: "30daycoding" },
    { title: "Problem solving (Basic)", issuer: "HackerRank" },
  ],
  languages: [
    { name: "Spanish", proficiency: "Basic proficiency" },
    { name: "Hindi", proficiency: "Native speaker" },
    { name: "Tamil", proficiency: "Native speaker" },
    { name: "English", proficiency: "Professional proficiency" },
  ],
  activities: [
    { title: "Smart India Hackathon", description: "Qualified Internal Hackathon among 200+ teams" },
    { title: "HackBattle (IEEE-CS)", description: "Finalist were placed in top 7" },
    { title: "Karate", description: "Black Belt" },
    { title: "Guitarist", description: "self taught" },
  ],
}

// Define the context type
type ResumeContextType = {
  personal: typeof resumeData.personal
  skills: typeof resumeData.skills
  experience: Experience[]
  education: Education[]
  projects: Project[]
  publications: Publication[]
  certifications: Certification[]
  languages: Language[]
  activities: Activity[]
}

// Create the context
const ResumeContext = createContext<ResumeContextType | undefined>(undefined)

// Provider component
export function ResumeProvider({ children }: { children: ReactNode }) {
  return <ResumeContext.Provider value={resumeData}>{children}</ResumeContext.Provider>
}

// Custom hook to use the resume context
export function useResume() {
  const context = useContext(ResumeContext)
  if (context === undefined) {
    throw new Error("useResume must be used within a ResumeProvider")
  }
  return context
}

