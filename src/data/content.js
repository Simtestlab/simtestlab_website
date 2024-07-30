const content = {
  header: {      
    brand: "Simtestlab",
    navItems: [
      { href: "#hero", label: "Home" },
      { href: "#services", label: "Services" },
      { href: "#employees", label: "Employees" },
      { href: "#about", label: "About" },
      { href: "#contact", label: "Contact" },
    ],
    logoSrc: "/images/logo.png"
  },
  hero: {
    videoSrc: "/video/background.mp4",
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
        title: "Testing Automation",
        text: "Automate your functional testing processes to improve accuracy and efficiency."
      }
    ],
    buttons: [
      { href: "#about", label: "Learn More" },
      { href: "#contact", label: "Contact Us" },
    ],
  },
  about: {
    title: "OUR SERVICES",
    tabs: [
      { id: "it-services", label: "MODEL BASED DEVELOPMENT" },
      { id: "business-services", label: "BATTERY MANAGEMENT SYSTEM" },
      { id: "product-information", label: "TESTING AUTOMATION" },
    ],
    services: {
      "it-services": [
        {
          imgSrc: "/images/models/board.jpg",
          title: "Model in Loop",
          text: "Validates the model by testing its behavior and functionality without any physical hardware or software implementation.",
        },
        {
          imgSrc: "/images/models/software.jpg",
          title: "Software in Loop",
          text: "Evaluates the correctness of the generated code by executing it within a simulation model.",
        },
        {
          imgSrc: "/images/models/testing.jpg",
          title: "Hardware in Loop",
          text: "Integrates the actual hardware components with the control software in a real-time simulation environment.",
        },
        {
          imgSrc: "/images/models/process.jpg",
          title: "Process in Loop",
          text: "Innovative testing methods for modern development.",
        },
      ],
      "business-services": [
        {
          imgSrc: "/images/models/monitoring.jpg",
          title: "Monitoring",
          text: "Comprehensive testing solutions for battery cells, including performance, safety, and reliability tests.",
        },
        {
          imgSrc: "/images/models/battery.jpg",
          title: "Management",
          text: "Advanced testing services for battery packs to ensure optimal performance and longevity.",
        },
        {
          imgSrc: "/images/models/security.jpg",
          title: "Protection",
          text: "Advanced testing services for battery packs to ensure optimal performance and longevity.",
        },
        {
          imgSrc: "/images/models/connections.jpg",
          title: "Communication",
          text: "Advanced testing services for battery packs to ensure optimal performance and longevity.",
        },
        {
          imgSrc: "/images/models/prognostics.jpg",
          title: "Prognostics",
          text: "Advanced testing services for battery packs to ensure optimal performance and longevity.",
        },
      ],
      "product-information": [
        {
          imgSrc: "/images/models/function.jpg",
          title: "Automated Functional Testing",
          text: "Automate your functional testing processes to improve accuracy and efficiency.",
        },
        {
          imgSrc: "/images/models/analysis.jpg",
          title: "Requirement Specification and Analysis",
          text: "Integrate automated testing into your CI pipeline for faster and more reliable releases.",
        },
        {
          imgSrc: "/images/models/modeling.jpg",
          title: "Modeling and Simulation",
          text: "Integrate automated testing into your CI pipeline for faster and more reliable releases.",
        },
        {
          imgSrc: "/images/models/scripting.jpg",
          title: "Test Case and Script Development",
          text: "Integrate automated testing into your CI pipeline for faster and more reliable releases.",
        },
        {
          imgSrc: "/images/models/environment.jpg",
          title: "Test Environment Setup",
          text: "Integrate automated testing into your CI pipeline for faster and more reliable releases.",
        },
      ],
    },
  },
  employees: {
    title: "Our Employees",
    members: [
      {
        imgSrc: "/images/Agilan.png",
        name: "Agilan Arulchelvam",
        job: "Machine Learning Engineer",
        description: "A dynamic Data Analyst proficient in SQL, Python, and Data Visualization. ",
        full_description: "A dynamic Data Analyst proficient in SQL, Python, and Data Visualization. I've leveraged my expertise in Machine Learning across diverse projects, delivering actionable insights.",
        github: "https://github.com/AgilanArulchelvam",
      },
      {
        imgSrc: "/images/Nallasivam.png",
        name: "Nallasivam Selvaraj",
        description: "Experienced Software Engineer with expertise in Python, C++ and software develoment, specializing in application development and user interface design.",
        full_description: "Experienced Software Engineer with expertise in Python, C++ and software develoment, specializing in application development and user interface design. Skilled in DevOps practices and cloud for efficient software delivery. Passionate about creating scalable, reliable solutions and staying updated with emerging technologies.",
        job: "Software Engineer",
        github: "https://github.com/nallasivamselvaraj",
      },
      {
        imgSrc: "/images/Vinay.png",
        name: "Vinay Kumar S Lokare",
        description: "Embedded Software Engineer with expertise in UART, SPI, CAN, and I2C protocols, specializing in developing and optimizing software for microcontrollers.",
        full_description: "As an Embedded Software Engineer, I design and optimize software for embedded systems, focusing on microcontrollers and real-time operating systems. I ensure seamless hardware-software integration to deliver high-performance, reliable, and scalable solutions.",
        job: "Embedded Engineer",
        github: "https://github.com/vinaykumarsl2000",
      },
      {
        imgSrc: "/images/Akilasekar.png",
        name: "Akilasekar Kalirajan",
        job: "Model Based Developer",
        github: "https://github.com/akil7700",
      },
      {
        imgSrc: "/images/Maari.png",
        name: "Maarimuthu Rajagopal",
        description: "Embedded Software Engineer with expertise in UART, SPI, CAN, and I2C protocols, specializing in developing and optimizing software for microcontrollers.",
        job: "Embedded Engineer",
        github: "https://github.com/crmaarimuthu",
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
    address: "SWEDEN (HQ) - Sprintergången 7",
    email: "ramesh@simtestlab.se",
    phone: "+46 (0) 73 9768 263",
    copyright: "Copyright 2022. All Rights Reserved.",
    companyLinks: [
      { href: "#hero", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#employees", label: "Employees" },
      { href: "#services", label: "Services" },
    ],
    socialLinks: [
      { href: "https://www.linkedin.com/company/simtestlab", icon: "fab fa-linkedin-in" },
      // { href: "https://www.facebook.com/", icon: "fab fa-facebook-f" },
      //{ href: "https://x.com/", icon: "fab fa-twitter" },
      //{ href: "https://www.instagram.com/", icon: "fab fa-instagram" },
    ],
  },
};

export default content;
