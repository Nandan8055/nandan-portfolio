const linkedinCertificates = [
  "CertificateOfCompletion_Building Rapport with Customers-page-00001.jpg",
  "CertificateOfCompletion_Business Etiquette Phone Email and Text 2015-page-00001.jpg",
  "CertificateOfCompletion_Business Etiquette Phone Email and Text-page-00001.jpg",
  "CertificateOfCompletion_Communicating about Culturally Sensitive Issues 2022-page-00001.jpg",
  "CertificateOfCompletion_Communication Foundations with Audio Descriptions-page-00001.jpg",
  "CertificateOfCompletion_Conflict Resolution For Beginners-page-00001.jpg",
  "CertificateOfCompletion_Creating Positive Conversations with Challenging Customers-page-00001.jpg",
  "CertificateOfCompletion_Customer Service Call Control Strategies-page-00001.jpg",
  "CertificateOfCompletion_Customer Service Foundations-page-00001.jpg",
  "CertificateOfCompletion_Customer Service Handling Abusive Customers-page-00001.jpg",
  "CertificateOfCompletion_Customer Service Managing Customer Expectations-page-00001.jpg",
  "CertificateOfCompletion_Customer Service ProblemSolving and Troubleshooting-page-00001.jpg",
  "CertificateOfCompletion_Customer Service Serving Internal Customers-page-00001.jpg",
  "CertificateOfCompletion_Customer Service Working in a Customer Contact Center-page-00001.jpg",
  "CertificateOfCompletion_DeEscalating Conversations for Customer Service-page-00001.jpg",
  "CertificateOfCompletion_Delivering Bad News to a Customer-page-00001.jpg",
  "CertificateOfCompletion_Develop a Service Orientation-page-00001.jpg",
  "CertificateOfCompletion_Developing a Service Mindset-page-00001.jpg",
  "CertificateOfCompletion_Empathy for Customer Service Professionals-page-00001.jpg",
  "CertificateOfCompletion_Grammar Foundations-page-00001.jpg",
  "CertificateOfCompletion_Grammar Girls Quick and Dirty Tips for Better Writing-page-00001.jpg",
  "CertificateOfCompletion_IT Service Desk Customer Service Fundamentals-page-00001.jpg",
  "CertificateOfCompletion_IT Service Desk Management Fundamentals-page-00001.jpg",
  "CertificateOfCompletion_Job Skills Learning the Basics-page-00001.jpg",
  "CertificateOfCompletion_Listening to Customers-page-00001.jpg",
  "CertificateOfCompletion_Multinational Communication in the Workplace-page-00001.jpg",
  "CertificateOfCompletion_PhoneBased Customer Service-page-00001.jpg",
  "CertificateOfCompletion_Sales Strategies and Approaches in a New World of Selling-page-00001.jpg",
  "CertificateOfCompletion_Serving Customers in a Continuously Changing World-page-00001.jpg",
  "CertificateOfCompletion_Soft Skills for Sales Professionals-page-00001.jpg",
  "CertificateOfCompletion_Speaking Confidently and Effectively-page-00001.jpg",
  "CertificateOfCompletion_The Secrets to Success at Work-page-00001.jpg",
  "CertificateOfCompletion_Working with Difficult People 2017-page-00001.jpg",
  "CertificateOfCompletion_Working with Upset Customers-page-00001.jpg",
  "CertificateOfCompletion_Writing Customer Service Emails-page-00001.jpg",
  "CertificateOfCompletion_Writing Emails for NonNative English Speakers-page-00001.jpg"
].map((fileName) => ({
  image: `Linkedin Learning/${fileName}`,
  label: fileName
    .replace("CertificateOfCompletion_", "")
    .replace("-page-00001.jpg", "")
    .replace("ProblemSolving", "Problem-Solving")
    .replace("DeEscalating", "De-Escalating")
    .replace("PhoneBased", "Phone-Based")
    .replace("NonNative", "Non-Native")
}));

const modalContent = {
  cint: {
    kicker: "05/2025 - Present",
    title: "Cint",
    role: "Tech Analyst",
    points: [
      "Lead technical investigations across an internal SaaS platform by analyzing survey configurations, data flows, and platform behavior to identify and resolve complex client-reported issues.",
      "Perform API debugging and validation using Bruno to inspect requests, responses, and integrations, ensuring accurate data exchange and correct platform functionality.",
      "Conduct root cause analysis using OpenSearch and Grafana by reviewing logs, metrics, and system performance to detect anomalies and systemic issues.",
      "Utilize Databricks with SQL to perform large-scale data extraction, validation, and analysis, delivering clear data insights and analytical reports to clients and internal stakeholders.",
      "Raise, document, and manage high-quality bug reports and Jira tickets with clear reproduction steps, impact assessment, and severity classification.",
      "Collaborate closely with product, engineering, and operations teams to drive issue resolution, platform improvements, and long-term stability.",
      "Actively engage in client meetings to explain technical findings, provide actionable solutions, and guide clients on best practices for survey setup and platform usage.",
      "Handle complex support tickets and real-time client chats via Salesforce, maintaining high service standards while managing multiple cases simultaneously.",
      "Contribute to internal knowledge sharing by documenting recurring issues, investigative workflows, and resolution patterns to improve operational efficiency."
    ],
    relatedTitle: "Cint recognitions",
    related: [
      {
        id: "certificate-excellence",
        label: "Certificate of Excellence",
        image: "Certificates and Award/Certificate of Excellence.png"
      },
      {
        id: "cint-we-say",
        label: "We do what we say",
        image: "Certificates and Award/We do what we say.png"
      }
    ]
  },
  chargepoint: {
    kicker: "04/2024 - 04/2025",
    title: "ChargePoint",
    role: "Associate Technical Support Engineer",
    points: [
      "Technical Support & Issue Resolution: Resolve client inquiries by leveraging JIRA for case management, AI platforms for diagnostics, and generating detailed reports to drive efficient issue resolution and system stability.",
      "Build and maintain Salesforce-involved agentic AI for chatbots to enhance customer support automation.",
      "Client Relationship Management: Foster strong relationships using Salesforce for tracking interactions and Excel to analyze case trends, identifying recurring issues and proactively enhancing client satisfaction.",
      "Product Implementation & Troubleshooting: Provide expert product support and troubleshoot complex technical issues, using AI tools for research and delivering clear, business-focused solutions.",
      "Client Management & Communication (U.S. Clients): Manage outbound calls and prioritize voicemails, providing clear and professional technical solutions. Leverage strong business communication skills to enhance client satisfaction and collaborate with teams to improve service delivery."
    ]
  },
  elevator: {
    kicker: "07/2023 - 03/2024",
    title: "TK Elevator",
    role: "Graduate Engineer Trainee",
    points: [
      "Client Support & Operations Coordination: Assisted in managing client relationships, ensuring smooth communication and support during project execution, and contributing to the successful installation of systems by coordinating operations and resources.",
      "Project Management Assistance: Supported project management activities, including scheduling, tracking project milestones, and ensuring timely installation of systems, while working closely with senior engineers to ensure quality and efficiency.",
      "Technical Support & Reporting: Assisted with troubleshooting technical issues and used MS Excel for basic data analysis, while tracking project progress and client interactions in Salesforce."
    ]
  },
  "certificate-excellence": {
    kicker: "Cint Award",
    title: "Certificate of Excellence",
    role: "Recognition",
    image: "Certificates and Award/Certificate of Excellence.png",
    points: [
      "Recognition received at Cint for excellence and contribution."
    ]
  },
  "cint-we-say": {
    kicker: "Cint Award",
    title: "We do what we say",
    role: "Recognition",
    image: "Certificates and Award/We do what we say.png",
    points: [
      "Award recognizing ownership, reliability, and follow-through."
    ]
  },
  "google-sheets": {
    kicker: "Certificate",
    title: "Data Analysis in Google Sheets",
    role: "Data analysis certification",
    image: "Certificates and Award/Data Analysis in Google Sheets_page-0001.jpg",
    points: [
      "Built practical spreadsheet analysis skills for cleaning, organizing, and validating data before drawing conclusions.",
      "Learned to use formulas, filters, sorting, pivot-style summaries, and structured tables to identify patterns in datasets.",
      "Improved confidence in turning raw data into readable insights, which connects directly to reporting, client investigations, and data accuracy checks.",
      "Useful skills gained: data cleaning, spreadsheet formulas, data validation, summary reporting, trend analysis, and business-ready presentation of findings."
    ]
  },
  "ai-certificate": {
    kicker: "Certificate",
    title: "Understanding Artificial Intelligence",
    role: "AI fundamentals certification",
    image: "Certificates and Award/Understanding Artificial Intelligence_page-0001.jpg",
    points: [
      "Strengthened my understanding of core AI concepts, including how AI systems learn from data and support decision-making.",
      "Explored the difference between traditional automation, machine learning, and generative AI, with attention to real-world business use cases.",
      "Learned how to think about AI responsibly, including accuracy, bias, limitations, and the need for human review.",
      "Useful skills gained: AI fundamentals, machine learning awareness, responsible AI thinking, business use-case evaluation, and better communication around AI capabilities."
    ]
  },
  "prompt-engineering": {
    kicker: "Certificate",
    title: "Understanding Prompt Engineering",
    role: "Prompt engineering certification",
    image: "Certificates and Award/Understanding Prompt Engineering_page-0001.jpg",
    points: [
      "Learned how to write clearer prompts that guide AI tools toward accurate, structured, and useful outputs.",
      "Practiced breaking complex requests into context, task, constraints, and expected format so AI responses are easier to verify and reuse.",
      "Developed a stronger sense for when to refine prompts, ask follow-up questions, and validate AI-generated answers instead of trusting them blindly.",
      "Useful skills gained: prompt structuring, AI-assisted troubleshooting, output validation, iterative refinement, and using AI tools more effectively in support and analysis workflows."
    ]
  },
  "skills-technical": {
    kicker: "Skills",
    title: "Technical Analysis & Operations",
    role: "Skill category",
    points: [
      "SaaS Platform Operations & Support",
      "API Debugging & Testing (Bruno)",
      "Root Cause Analysis & Incident Investigation",
      "Monitoring & Observability (Grafana, OpenSearch)",
      "Bug Tracking & Issue Management (Jira)",
      "System Troubleshooting & Platform Support",
      "Data Validation & Quality Assurance"
    ]
  },
  "skills-data": {
    kicker: "Skills",
    title: "Data & Analytics",
    role: "Skill category",
    points: [
      "Databricks & SQL",
      "Data Extraction, Validation & Analysis",
      "Data Analysis & Reporting",
      "Salesforce Reporting & Dashboards",
      "Google Sheets & Microsoft Excel",
      "Data Quality Analysis",
      "Analytical Problem Solving"
    ]
  },
  "skills-product": {
    kicker: "Skills",
    title: "Product & Project Management",
    role: "Skill category",
    points: [
      "Requirements Gathering & Analysis",
      "Business Process Analysis",
      "Product Planning & Feature Prioritization",
      "Survey Workflow Design",
      "Stakeholder Communication",
      "Project Coordination",
      "Agile Methodologies",
      "Salesforce Testing(UAT)",
      "Jira Project Management",
      "Documentation & Knowledge Management",
      "Process Improvement"
    ]
  },
  "skills-accessibility": {
    kicker: "Skills",
    title: "Accessibility & Product Design",
    role: "Skill category",
    points: [
      "Accessibility-First Design",
      "Voice User Interface (VUI) Design",
      "Speech-to-Text (STT) Integration",
      "Text-to-Speech (TTS) Integration",
      "User Experience (UX) Design",
      "Survey Platform Development",
      "Survey Logic & Configuration",
      "Dashboard Design & Administration",
      "Authentication & Access Control"
    ]
  },
  "skills-ai": {
    kicker: "Skills",
    title: "AI & Emerging Technologies",
    role: "Skill category",
    points: [
      "Conversational AI Concepts",
      "Prompt Engineering",
      "Designed, Developed, and Deployed AI Chatbot Solutions using Cloud AI Agent Frameworks",
      "Developed and Integrated Gemini Gems-Powered Slack Bots for Workflow Automation and Team Collaboration",
      "AI Product Strategy & Use Case Design",
      "Conversational Experience Design",
      "Large Language Model (LLM) Applications",
      "RAG (Retrieval-Augmented Generation) Implementation",
      "Vector Databases for AI",
      "AI-Assisted Survey Workflows",
      "Voice-First Product Design",
      "Human-Centered AI Design",
      "AI Requirements Analysis & Feature Planning"
    ]
  },
  "skills-client": {
    kicker: "Skills",
    title: "Client Success & Collaboration",
    role: "Skill category",
    points: [
      "Client Support & Cases,tickets, chats Management (Salesforce)",
      "Customer Satisfaction (CSAT) Excellence",
      "Service Level Agreement (SLA) Management",
      "Client Success & Service Excellence",
      "Technical Issue Investigation",
      "Cross-Functional Collaboration",
      "Client Communication & Solution Delivery",
      "Incident Resolution",
      "Customer Success & Service Excellence"
    ]
  },
  "linkedin-learning": {
    kicker: "Certificate Collection",
    title: "LinkedIn Learning",
    role: `${linkedinCertificates.length} certificates`,
    image: "Linkedin Learning/linkedin-learning-logo-png_seeklogo-412128.png",
    points: [
      "A broad learning collection focused on customer service, communication, service desk fundamentals, workplace professionalism, conflict handling, and writing skills.",
      "These courses support the people-facing side of technical support: explaining issues clearly, de-escalating conversations, listening well, and communicating with customers across phone, chat, and email.",
      "Click any certificate below to view it full-size."
    ],
    galleryTitle: "LinkedIn Learning certificates",
    gallery: linkedinCertificates
  },
  voxsurvey: {
    kicker: "",
    title: "VoxSurvey Labs",
    role: "Voice-first survey platform",
    link: "https://vox-survey.vercel.app/homepage.html",
    linkLabel: "Open VoxSurvey Labs",
    points: [
      "VoxSurvey Labs is a voice-first survey platform designed to make digital surveys more accessible and user-friendly, particularly for visually impaired users.",
      "The project explores how speech-to-text and text-to-speech technologies can improve survey participation by enabling users to interact with surveys through natural voice interactions rather than traditional form-based interfaces.",
      "Key Features: Voice-enabled survey participation using Speech-to-Text (STT) and Text-to-Speech (TTS).",
      "Accessibility-focused user experience designed for visually impaired users.",
      "Dynamic survey builder for creating and managing surveys.",
      "Real-time survey administration and response tracking.",
      "Survey management dashboard for monitoring survey activity.",
      "Structured survey workflows and configurable survey logic.",
      "User authentication and role-based access management.",
      "Responsive interface with dark and light theme support.",
      "Focus on improving inclusivity and accessibility in digital data collection.",
      "The project demonstrates skills in requirements analysis, product thinking, accessibility-focused design, workflow planning, problem-solving, stakeholder-oriented thinking, data management, and end-to-end product development."
    ]
  },
  "covid-sql": {
    kicker: "SQL Project",
    title: "Covid-19 SQL Data Exploration",
    role: "Data Analyst / SQL Developer",
    link: "https://github.com/Nandan8055/Portfolio-Project/blob/04e4f4eb189829f928d2d166683ba48a5ad8b86f/Nashville%20Housing%20%20Data%20Cleaning.sql",
    linkLabel: "View SQL Script on GitHub",
    points: [
      "Analyzed global COVID-19 datasets using SQL Server to uncover trends in infection rates, mortality rates, and vaccination progress.",
      "Applied data cleaning, exploratory data analysis (EDA), data transformation, joins, aggregate functions, window functions, Common Table Expressions (CTEs), temporary tables, and views to generate meaningful insights and support reporting.",
      "Demonstrated strong SQL skills in querying, data manipulation, trend analysis, and preparing datasets for visualization and decision-making."
    ]
  },
  "nashville-housing": {
    kicker: "SQL Project",
    title: "Nashville Housing Data Cleaning Overview",
    role: "Data Analyst / SQL Developer",
    link: "https://github.com/Nandan8055/Portfolio-Project/blob/04e4f4eb189829f928d2d166683ba48a5ad8b86f/Nashville%20Housing%20%20Data%20Cleaning.sql",
    linkLabel: "View SQL Script on GitHub",
    points: [
      "Cleaned and transformed a Nashville housing dataset using SQL Server to improve data quality and prepare it for analysis. Performed data standardization, handled missing values through self-joins, split and normalized address fields, converted categorical values for consistency, identified duplicate records using CTEs and window functions, and removed unnecessary columns.",
      "The project demonstrated strong skills in data cleaning, data transformation, data quality management, SQL querying, joins, string manipulation, CTEs, window functions, and database optimization techniques.",
      "Skills Used: SQL Server, Data Cleaning, Data Transformation, Data Quality Management, Data Standardization, Self Joins, String Functions, CTEs, Window Functions, Duplicate Removal, Data Normalization, Database Optimization, SQL Querying."
    ]
  },
  nikithanayana: {
    kicker: "Portfolio Project",
    title: "NikithaNayana",
    role: "Personal Portfolio Website",
    link: "https://nikithanayana.vercel.app/",
    linkLabel: "View Project",
    points: [
      "A clean and minimal personal portfolio website showcasing professional skills, projects, and achievements.",
      "Responsive design optimized for seamless viewing across mobile, tablet, and desktop viewports.",
      "Minimalist & elegant UI focusing on readable typography, clear hierarchy, and smooth interactions.",
      "Built with high accessibility standards to ensure an inclusive user experience for all visitors."
    ]
  },
  "book-atomic-habits": {
    kicker: "Favorite Read",
    title: "Atomic Habits",
    role: "by James Clear",
    image: "Books/Atomic Habits.jpg",
    points: [
      "A practical guide to building good habits and breaking bad ones.",
      "Emphasizes the power of 1% improvements and systems over goals.",
      "Great for understanding human behavior and personal productivity."
    ]
  },
  "book-7-habits": {
    kicker: "Favorite Read",
    title: "7 Habits of Highly Effective People",
    role: "by Stephen R. Covey",
    image: "Books/7 effective habits of highly effective people.jpg",
    points: [
      "Focuses on timeless principles of fairness, integrity, honesty, and human dignity.",
      "Teaches a proactive approach to personal and professional effectiveness.",
      "A fundamental read for personal growth and leadership."
    ]
  },
  "book-3-mistakes": {
    kicker: "Favorite Read",
    title: "The 3 Mistakes of My Life",
    role: "by Chetan Bhagat",
    image: "Books/The 3 Mistakes Of My Life.jpg",
    points: [
      "A story about business, cricket, and religion intertwining in the lives of three friends.",
      "Highlights the importance of resilience and learning from failures.",
      "An engaging narrative about ambition and friendship."
    ]
  },
  "book-brief-history": {
    kicker: "Favorite Read",
    title: "A Brief History of Time",
    role: "by Stephen Hawking",
    image: "Books/a brief history of time book.jpg",
    points: [
      "Explores profound questions about the universe, space, and time.",
      "Simplifies complex cosmological concepts for a broader audience.",
      "A fascinating read that shifts perspectives on existence and reality."
    ]
  },
  "book-compound-effect": {
    kicker: "Favorite Read",
    title: "The Compound Effect",
    role: "by Darren Hardy",
    image: "Books/compound effect.jpg",
    points: [
      "Demonstrates how small, consistent actions lead to massive results over time.",
      "A highly practical framework for taking charge of your life and goals.",
      "Reinforces the discipline of consistency in personal and professional habits."
    ]
  },
  "book-how-to-talk": {
    kicker: "Favorite Read",
    title: "How to Talk to Anyone",
    role: "by Leil Lowndes",
    image: "Books/how to talk to anyone.jpg",
    points: [
      "Provides actionable techniques for successful communication in any situation.",
      "Helps improve networking skills and build strong relationships quickly.",
      "Very useful for client-facing roles and cross-functional collaboration."
    ]
  },
  "book-rich-dad": {
    kicker: "Favorite Read",
    title: "Rich Dad Poor Dad",
    role: "by Robert T. Kiyosaki",
    image: "Books/rich dad poor dad.jpg",
    points: [
      "A foundational book on financial literacy and building wealth.",
      "Contrasts different mindsets toward money, investing, and assets.",
      "Encourages thinking like an investor rather than just an employee."
    ]
  },
  "book-subtle-art": {
    kicker: "Favorite Read",
    title: "The Subtle Art of Not Giving a F*ck",
    role: "by Mark Manson",
    image: "Books/the subtle art of not giving a fck.jpg",
    points: [
      "A counterintuitive approach to living a good life by choosing what truly matters.",
      "Focuses on accepting limitations and embracing realistic expectations.",
      "A refreshing take on mental toughness and prioritizing personal values."
    ]
  }
};

const modal = document.querySelector("#detail-modal");
const modalKicker = document.querySelector("#modal-kicker");
const modalTitle = document.querySelector("#modal-title");
const modalRole = document.querySelector("#modal-role");
const modalLink = document.querySelector("#modal-link");
const modalList = document.querySelector("#modal-list");
const modalImage = document.querySelector("#modal-image");
const modalRelated = document.querySelector("#modal-related");

function openCertificateImage(certificate) {
  modalImage.src = certificate.image;
  modalImage.alt = certificate.label;
  modalImage.hidden = false;
  modalKicker.textContent = "LinkedIn Learning Certificate";
  modalTitle.textContent = certificate.label;
  modalRole.textContent = "Certificate of Completion";
  modalLink.hidden = true;
  modalLink.removeAttribute("href");
  modalList.replaceChildren();
  modalRelated.hidden = true;
}

function openModal(contentId) {
  const content = modalContent[contentId];
  if (content.image) {
    modalImage.src = content.image;
    modalImage.alt = content.title;
    modalImage.hidden = false;
  } else {
    modalImage.removeAttribute("src");
    modalImage.alt = "";
    modalImage.hidden = true;
  }

  modalKicker.textContent = content.kicker;
  modalTitle.textContent = content.title;
  modalRole.textContent = content.role;
  if (content.link) {
    modalLink.href = content.link;
    modalLink.textContent = content.linkLabel || "Open link";
    modalLink.hidden = false;
  } else {
    modalLink.hidden = true;
    modalLink.removeAttribute("href");
  }
  modalList.replaceChildren(
    ...content.points.map((point) => {
      const item = document.createElement("li");
      item.textContent = point;
      return item;
    })
  );

  modalRelated.replaceChildren();
  if (content.related?.length || content.gallery?.length) {
    const heading = document.createElement("h3");
    heading.textContent = content.relatedTitle || content.galleryTitle || "Related";
    modalRelated.append(heading);

    const row = document.createElement("div");
    row.className = content.gallery?.length ? "related-row certificate-gallery" : "related-row";
    (content.related || content.gallery).forEach((relatedItem) => {
      const button = document.createElement("button");
      button.className = "related-card";
      button.type = "button";
      button.addEventListener("click", () => {
        if (relatedItem.id) {
          openModal(relatedItem.id);
        } else {
          openCertificateImage(relatedItem);
        }
      });

      const image = document.createElement("img");
      image.src = relatedItem.image;
      image.alt = relatedItem.label;

      const label = document.createElement("span");
      label.textContent = relatedItem.label;

      button.append(image, label);
      row.append(button);
    });
    modalRelated.append(row);
    modalRelated.hidden = false;
  } else {
    modalRelated.hidden = true;
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

document.querySelectorAll("[data-modal]").forEach((card) => {
  card.addEventListener("click", () => openModal(card.dataset.modal));
});

document.querySelectorAll("[data-close-modal]").forEach((closeControl) => {
  closeControl.addEventListener("click", () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }
});

// Contact form — submits to Vercel serverless function with Resend, falls back to mailto if local dev
function handleContactSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.elements["name"].value.trim();
  const email = form.elements["email"].value.trim();
  const phone = form.elements["phone"]?.value.trim() || "";
  const message = form.elements["message"].value.trim();

  const btn = document.getElementById("contact-submit-btn");
  const success = document.getElementById("contact-success");
  const successText = document.getElementById("contact-success-text");
  const errorEl = document.getElementById("contact-error");
  const errorText = document.getElementById("contact-error-text");

  // Reset display states
  if (success) success.hidden = true;
  if (errorEl) errorEl.hidden = true;

  // Clear previous highlights
  const fields = ["name", "email", "phone", "message"];
  fields.forEach(field => {
    const el = form.elements[field];
    if (el) el.classList.remove("is-invalid");
  });

  // Validate missing fields
  const missing = [];
  if (!name) {
    missing.push("Name");
    form.elements["name"].classList.add("is-invalid");
  }
  if (!email) {
    missing.push("Email");
    form.elements["email"].classList.add("is-invalid");
  }
  if (!phone) {
    missing.push("Phone");
    form.elements["phone"].classList.add("is-invalid");
  }
  if (!message) {
    missing.push("Message");
    form.elements["message"].classList.add("is-invalid");
  }

  if (missing.length > 0) {
    // Shake animation on form
    form.classList.remove("shake-animation");
    void form.offsetWidth; // Trigger reflow to restart animation
    form.classList.add("shake-animation");

    // Dynamic, professional error messages
    let msg = "";
    if (missing.length === 1) {
      if (missing[0] === "Name") msg = "Please enter your name so I know who is reaching out.";
      else if (missing[0] === "Email") msg = "An email address is required so I can reply back to you.";
      else if (missing[0] === "Phone") msg = "Please provide your phone number so we can easily connect.";
      else if (missing[0] === "Message") msg = "Please write a brief message explaining how I can help.";
    } else {
      msg = "Almost there! Please fill in all the highlighted fields to get in touch.";
    }

    if (errorEl && errorText) {
      errorText.textContent = msg;
      errorEl.hidden = false;
    }

    // Focus the first missing field
    const firstMissingField = form.elements[missing[0].toLowerCase()];
    if (firstMissingField) {
      firstMissingField.focus();
    }
    return;
  }

  btn.disabled = true;
  btn.textContent = "Sending...";

  // Attempt to call Vercel Serverless Function
  fetch("/api/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, phone, message }),
  })
    .then(async (response) => {
      if (response.ok) {
        if (successText) successText.textContent = "Thank you for your message! I'll get back to you shortly.";
        success.hidden = false;
        form.reset();
        setTimeout(() => {
          btn.disabled = false;
          btn.textContent = "Submit";
          success.hidden = true;
        }, 4000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Backend failed");
      }
    })
    .catch((error) => {
      // Fallback to mailto if serverless function is not available (e.g. running locally)
      console.warn("Serverless API failed/not available. Falling back to mailto client...", error);
      
      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}${phone ? `\nPhone: ${phone}` : ""}\n\n${message}`
      );
      window.location.href = `mailto:nandan.b.muralidhar@gmail.com?subject=${subject}&body=${body}`;

      btn.textContent = "Sent!";
      if (successText) successText.textContent = "Opening your default email client to finish sending...";
      success.hidden = false;
      setTimeout(() => {
        form.reset();
        btn.disabled = false;
        btn.textContent = "Submit";
        success.hidden = true;
      }, 4000);
    });
}

// Dynamic scrollspy for capsule navbar
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".top-nav-link");
  
  // Set Home as active initially
  const homeLink = Array.from(navLinks).find(link => link.getAttribute("href") === "#");
  if (homeLink) homeLink.classList.add("active");

  function updateActiveLink() {
    const scrollPosition = window.scrollY + window.innerHeight / 3;
    let activeLink = homeLink;

    navLinks.forEach(link => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#") && targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const elementTop = targetElement.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= elementTop) {
            activeLink = link;
          }
        }
      }
    });

    navLinks.forEach(link => {
      if (link.getAttribute("href").startsWith("#")) {
        link.classList.remove("active");
      }
    });
    
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  // ==========================================
  // FLOATING MUSIC PLAYER CONTROLLER SYSTEM
  // ==========================================
  const tracks = [
    { title: "Ezio's Family", src: "Music/ezios-family.track", cover: "Music/Assassin's Creed 2 Ezio's Family.jpg" },
    { title: "Gangsta's Paradise", src: "Music/gangstas-paradise.track", cover: "Music/Gangsta's Paradise.jpg" },
    { title: "Way Down We Go", src: "Music/way-down-we-go.track", cover: "Music/way down we go.jpg" }
  ];

  let currentTrackIndex = 0;
  let isPlaying = false;
  const audio = new Audio();

  // Elements
  const playerContainer = document.getElementById("music-player");
  const playBtn = document.getElementById("play-btn");
  const playIcon = document.getElementById("play-icon");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const musicTitle = document.getElementById("music-title");
  const musicCover = document.getElementById("music-cover");
  const progressBar = document.getElementById("music-progress-bar");
  const progressContainer = document.getElementById("music-progress-container");
  const currentTimeDisplay = document.getElementById("music-current-time");
  const durationDisplay = document.getElementById("music-duration");
  const volumeSlider = document.getElementById("volume-slider");
  const volumeToggleBtn = document.getElementById("volume-toggle-btn");
  const volumePanel = document.getElementById("music-volume-panel");
  const cardVisualizer = document.getElementById("card-visualizer");
  const closeBtn = document.getElementById("music-close-btn");

  // Load initial track
  function loadTrack(index) {
    currentTrackIndex = index;
    audio.src = tracks[index].src;
    musicTitle.textContent = tracks[index].title;
    musicCover.src = tracks[index].cover;
    musicCover.alt = `${tracks[index].title} Cover Art`;
    
    // Reset progress details on load
    progressBar.style.width = "0%";
    currentTimeDisplay.textContent = "0:00";
    durationDisplay.textContent = "0:00";
  }

  loadTrack(currentTrackIndex);

  // Auto-play on first click/touch interaction on the page
  const startAutoplay = () => {
    if (!isPlaying) {
      playTrack();
    }
    document.removeEventListener("click", startAutoplay);
    document.removeEventListener("touchstart", startAutoplay);
  };
  document.addEventListener("click", startAutoplay);
  document.addEventListener("touchstart", startAutoplay);

  // Play Track
  function playTrack() {
    isPlaying = true;
    audio.play().then(() => {
      playIcon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
      cardVisualizer.classList.add("playing");
    }).catch(err => {
      console.log("Autoplay blocked or playback error:", err);
      isPlaying = false;
    });
  }

  // Pause Track
  function pauseTrack() {
    isPlaying = false;
    audio.pause();
    playIcon.innerHTML = `<path d="M8 5v14l11-7z"/>`;
    cardVisualizer.classList.remove("playing");
  }

  // Play/Pause Action
  function togglePlay() {
    if (isPlaying) {
      pauseTrack();
    } else {
      playTrack();
    }
  }

  // Next Track
  function nextTrack() {
    let nextIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(nextIndex);
    if (isPlaying) {
      playTrack();
    }
  }

  // Prev Track
  function prevTrack() {
    let prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(prevIndex);
    if (isPlaying) {
      playTrack();
    }
  }

  // Format times helper
  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Update Progress & Time
  function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    if (isNaN(duration)) return;
    
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;

    currentTimeDisplay.textContent = formatTime(currentTime);
    durationDisplay.textContent = formatTime(duration);
  }

  // Set Progress on Seek
  function setProgress(e) {
    const rect = progressContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const duration = audio.duration;
    if (isNaN(duration)) return;
    
    audio.currentTime = (clickX / width) * duration;
  }

  // Prevent clicks on player card from closing volume panel
  document.getElementById("music-card").addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // Close volume panel when clicking anywhere else on page
  document.addEventListener("click", () => {
    volumePanel.hidden = true;
  });

  // Buttons event listeners
  playBtn.addEventListener("click", togglePlay);
  nextBtn.addEventListener("click", nextTrack);
  prevBtn.addEventListener("click", prevTrack);

  // Toggle Volume Panel
  volumeToggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    volumePanel.hidden = !volumePanel.hidden;
  });

  // Close music player
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    playerContainer.style.display = "none";
    pauseTrack();
  });

  // Audio events
  audio.addEventListener("timeupdate", updateProgress);
  audio.addEventListener("loadedmetadata", () => {
    durationDisplay.textContent = formatTime(audio.duration);
  });
  audio.addEventListener("ended", () => {
    let nextIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(nextIndex);
    playTrack();
  });

  // Progress Bar click handler
  progressContainer.addEventListener("click", setProgress);

  // Volume slider handler
  volumeSlider.addEventListener("input", (e) => {
    audio.volume = e.target.value;
    localStorage.setItem("portfolio-music-volume", e.target.value);
  });

  // Retrieve stored volume preference, fallback to 40% (0.4)
  const storedVolume = localStorage.getItem("portfolio-music-volume");
  if (storedVolume !== null) {
    audio.volume = parseFloat(storedVolume);
    volumeSlider.value = storedVolume;
  } else {
    audio.volume = 0.4;
    volumeSlider.value = 0.4;
  }

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink(); // Trigger on load
});
