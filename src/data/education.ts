import type { EducationItem } from '../types';

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "btech-cse-ai",
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science & Engineering – Artificial Intelligence",
    period: "2024 – 2027",
    status: "Currently Pursuing (Expected May 2027)",
    isProminent: true,
    summary: "Comprehensive undergraduate engineering program with specialized curriculum in Artificial Intelligence, Deep Learning, Machine Learning architectures, and advanced computing paradigms.",
    coursework: [
      "Artificial Intelligence & Expert Systems",
      "Machine Learning & Neural Networks",
      "Data Structures & Algorithm Design",
      "Python for AI & Scientific Computing",
      "Database Management Systems & SQL",
      "Software Engineering & Object-Oriented Architecture",
      "Natural Language Processing & Computer Vision Foundations"
    ]
  },
  {
    id: "diploma-ai",
    degree: "Diploma",
    branch: "Computer Applications & Artificial Intelligence",
    period: "2020 – 2023",
    institution: "IST's Women's Engineering College",
    location: "Rajahmundry, Andhra Pradesh",
    grade: "76% Distinction",
    isProminent: false,
    summary: "Focused technical diploma providing rigorous grounding in computer applications, programming fundamentals, web technologies, and introductory artificial intelligence methodologies.",
    coursework: [
      "Computer Applications & Architecture",
      "Fundamentals of Artificial Intelligence",
      "C & Python Programming",
      "Web Technologies (HTML, CSS, JavaScript)",
      "Operating Systems & Networking Basics"
    ]
  },
  {
    id: "secondary-school",
    degree: "Secondary School Certificate (Class X)",
    branch: "General Sciences & Mathematics",
    period: "Completed 2020",
    institution: "Alpha English Medium School",
    location: "Kanigiri, Andhra Pradesh",
    grade: "10 GPA (596 / 600 Marks)",
    isProminent: false,
    summary: "Graduated with outstanding academic honors achieving a perfect 10 GPA score, establishing strong analytical, mathematical, and scientific fundamentals.",
    coursework: [
      "Mathematics & Analytical Problem Solving",
      "Physical & Biological Sciences",
      "Computer Studies Basics",
      "English Communication"
    ]
  }
];
