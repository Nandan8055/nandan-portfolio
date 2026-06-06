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
  "book-atomic-habits": {
    kicker: "Favorite Read",
    title: "Atomic Habits",
    role: "by James Clear",
    image: "Books/atomic-habits.jpg",
    points: [
      "A practical guide to building good habits and breaking bad ones.",
      "Emphasizes the power of 1% improvements and systems over goals.",
      "Great for understanding human behavior and personal productivity."
    ]
  },
  "book-design-things": {
    kicker: "Favorite Read",
    title: "The Design of Everyday Things",
    role: "by Don Norman",
    image: "Books/design-of-everyday-things.jpg",
    points: [
      "The 'bible' of user-centric design and cognitive psychology.",
      "Teaches how users interact with technology and the importance of affordances and signifiers.",
      "Directly applicable to product management and technical analysis."
    ]
  },
  "book-zero-to-one": {
    kicker: "Favorite Read",
    title: "Zero to One",
    role: "by Peter Thiel",
    image: "Books/zero-to-one.jpg",
    points: [
      "Explores how to build companies that create new things rather than copying existing ones.",
      "Focuses on vertical progress (0 to 1) vs horizontal progress (1 to n).",
      "Provides a unique perspective on innovation and market monopolies."
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
