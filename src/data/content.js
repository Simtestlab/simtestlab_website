const content = {
  header: {      
    brand: "Simtestlab",
    navItems: [
      { href: "#hero", label: "Home" },
      { href: "#services", label: "Services" },
      { href: "#employees", label: "Who We Are" },
      { href: "#about", label: "About" },
      { href: "#contact", label: "Contact" },
    ],
    logoSrc: "/images/logo.png"
  },
  hero: {
    imgSrc: "/images/car.jpg",
    slides: [
      {
        title: "Model Based Development",
        text: "Validates the model by testing its behavior and functionality without any physical hardware or software implementation."
      },
      {
        title: "Battery Management System",
        text: "Advanced testing services for battery packs to ensure optimal performance and longevity."
      },
      {
        title: "Test Automate Framework",
        text: "Automate your functional testing processes to improve accuracy and efficiency."
      }
    ],
    buttons: [
      { href: "#services", label: "Learn More" },
      { href: "#contact", label: "Contact Us" },
    ],
  },
  about: {
    title: "OUR SERVICES",
    services: [
      {
        category: "MODEL BASED DEVELOPMENT",
        imgSrc: "/images/models/modeling.jpg",
        items: [
          "Model in Loop",
          "Software in Loop",
          "Hardware in Loop",
          "Process in Loop"
        ]
      },
      {
        category: "BATTERY MANAGEMENT SYSTEM",
        imgSrc: "/images/models/battery.jpg",
        items: [
          "Monitoring",
          "Management",
          "Protection",
          "Communication",
          "Prognostics"
        ]
      },
      {
        category: "TEST AUTOMATE FRAMEWORK",
        imgSrc: "/images/models/analysis.jpg",
        items: [
          "Automated Functional Testing",
          "Requirement Specification and Analysis",
          "Modeling and Simulation",
          "Test Case and Script Development",
          "Test Environment Setup"
        ]
      },
      {
        category: "TESTING SOFTWARE SOLUTIONS",
        imgSrc: "/images/models/software.jpg",
        items: [
          "HIL Testing Software",
          "eSimulation Testing",
          "Remote-access Tool"
        ]
      }
    ]
  },
  employees: {
    title: "Who we are",
    members: [
      {
        imgSrc: "/images/Tiberiu.png",
        name: "Tiberiu Stanciu",
        description: "A renewable energy consultant assists clients in conducting investigations in order to better understand and direct the installation of renewable energy systems.",
        full_description: "A renewable energy consultant assists clients in conducting investigations in order to better understand and direct the installation of renewable energy systems. Their primary goal is to increase efficiency while lowering costs and reducing negative environmental impacts. Renewable energy consultants spend their days inspecting the energy sources used throughout a client facility. They then attempt to determine whether the facility can be powered by alternative energy sources such as solar and wind.",
        job: "Renewable Energy Specialist",
      },
      {
        imgSrc: "images/Faouzi.png",
        name: "Faouzi AL MOUTAMID",
        job: "Battery Management Specialist",
        description: "The Energy Specialist is primarily responsible for completing walk through energy efficiency assessments.",
        full_description: "The Energy Specialist is primarily responsible for completing walk through energy efficiency assessments, the installation of energy efficiency equipment and products, and for deepening customer awareness of and participation in rebate programs and the Utility's energy efficiency program.",
      },
      {
        imgSrc: "images/Fabio.png",
        name: "Fabio Delgado Cabrera",
        job: "Senior Data Engineer",
        description: "Senior Data Engineer is responsible for creating effective technological solutions for work with big data.",
        full_description: "Senior Data Engineer is responsible for creating effective technological solutions for work with big data. They are also responsible for managing a team of specialists in their field and related IT professions. In addition, their roles include quality control of the work performed.",
      },
      {
        imgSrc: "images/Yashar.png",
        name: "Yashar Mohammed",
        job: "Senior Lead Engineer Connectivity",
        full_description: "Lead Engineers manage engineering teams, oversee project development, ensure code quality, and collaborate with other departments to meet project goals.",
        description: "Lead Engineers manage engineering teams, oversee project development, ensure code quality, and collaborate with other departments to meet project goals.",
      },
      {
        imgSrc: "/images/Agilan.png",
        name: "Agilan Arulchelvam",
        job: "Machine Learning Engineer",
        description: "A dynamic Data Analyst proficient in SQL, Python, and Data Visualization.",
        full_description: "A dynamic Data Analyst proficient in SQL, Python, and Data Visualization. I've leveraged my expertise in Machine Learning across diverse projects, delivering actionable insights.",
      },
      {
        imgSrc: "/images/Nallasivam.png",
        name: "Nallasivam Selvaraj",
        description: "Experienced Software Engineer with expertise in Python, C++ and software development, specializing in application development and user interface design.",
        full_description: "Experienced Software Engineer with expertise in Python, C++ and software development, specializing in application development and user interface design. Skilled in DevOps practices and cloud for efficient software delivery. Passionate about creating scalable, reliable solutions and staying updated with emerging technologies.",
        job: "Software Engineer",
      },
      {
        imgSrc: "/images/Vinay.png",
        name: "Vinay Kumar S Lokare",
        description: "Embedded Software Engineer with expertise in UART, SPI, CAN, and I2C protocols, specializing in developing and optimizing software for microcontrollers.",
        full_description: "As an Embedded Software Engineer, I design and optimize software for embedded systems, focusing on microcontrollers and real-time operating systems. I ensure seamless hardware-software integration to deliver high-performance, reliable, and scalable solutions.",
        job: "Embedded Engineer",
      },
      {
        imgSrc: "/images/Akilasekar.png",
        name: "Akilasekar Kalirajan",
        job: "Model Based Developer",
      },
      {
        imgSrc: "/images/Maari.png",
        name: "Maarimuthu Rajagopal",
        description: "Embedded Software Engineer with expertise in UART, SPI, CAN, and I2C protocols, specializing in developing and optimizing software for microcontrollers.",
        job: "Embedded Engineer",
      },
    ],
  },

  services: {
    title: "Services",
    items: [
      {
        title: "Simulation Statistics",
        text: "We provide comprehensive statistical analysis for simulation tests, ensuring accuracy and reliability in every model-based development project.",
        imgSrc: "/images/image1.png",
      },
      {
        title: "Advanced Data Analysis",
        text: "Our advanced data analysis services help you make informed decisions by thoroughly analyzing simulation test data to optimize model performance.",
        imgSrc: "/images/image2.jpg",
      },
      {
        title: "Precision Testing",
        text: "Our precision testing services ensure that every model performs optimally under various conditions, providing you with dependable and consistent results.",
        imgSrc: "/images/image3.jpg",
      },
      {
        title: "Expert Simulation Team",
        text: "Our team of experts specializes in model-based development and testing, delivering high-quality simulation services to meet your specific needs.",
        imgSrc: "/images/image4.jpg",
      },
      {
        title: "Trained Simulation Professionals",
        text: "Our trained professionals are dedicated to providing top-notch simulation testing services, ensuring that your models are robust and reliable.",
        imgSrc: "/images/image5.jpg",
      },
    ],
  },
  contact: {
    main_branch : {
        name: "Simtestlab Sweden AB",
        org_num: "Org.nr: 559386-6055",
        address: "SWEDEN (HQ) - Sprintergången 7",
        email: "support@simtestlab.se",
        phone: "+46 (0) 73 9768 263",
        copyright: "Copyright 2022. All Rights Reserved.",
    },
    branch1 : {
      name: "iGraph Technologies Pvt Ltd",      
      address_line_1: "Masagoundenchettipalayam Coimbatore",
      address_line_2: "Tamil Nadu, India - 641 107",
      email: "support@simtestlab.se",
      phone: "+91 72005 12732",      
    },
    branch2 : {
        name: "iGraph Technologies Pvt Ltd",
        address_line_1: "Kolapalli, Cherangode, The Nilgiris",
        address_line_2: "Tamil Nadu, India - 643 253",
        email: "support@simtestlab.se",
        phone: "+91 72005 12732",        
    },

    socialLinks: [
      { href: "https://www.linkedin.com/company/simtestlab", icon: "fab fa-linkedin-in" },
    ],
  },
};

export default content;
