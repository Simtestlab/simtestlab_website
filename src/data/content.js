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
    imgSrc1: "/images/car.jpg",
    imgSrc2: "/images/battery.jpg",
    imgSrc3: "/images/testing.jpg",
    imgSrc4: "/images/data.jpg",
    imgSrc5: "/images/energy.jpg",
    //videoSrc: "/video/background.mp4",
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
      },
      {
        title: "Data Driven Development",
        text: "Empowering businesses with data-driven software solutions that evolve with your users' needs."
      },
      {
        title: "Energy Storage System Solutions",
        text: "Efficient and scalable energy storage solutions designed to optimize power usage, enhance grid stability, and support renewable energy integration."
      }
    ],
    buttons: [
      { href: "#services", label: "Learn More" },
      { href: "#contact", label: "Contact Us" },
    ],
  },
    about: {
    title: "OUR SERVICES",
    tabs: [
      { id: "it-services", label: "MODEL BASED DEVELOPMENT" },
      { id: "business-services", label: "BATTERY MANAGEMENT SYSTEM" },
      { id: "product-information", label: "TEST AUTOMATE FRAMEWORK" },
    ],
    services: {
      "it-services": [
        {
          imgSrc: "/images/models/board.jpg",
          title: "Model in Loop",
          text: "Validates the model by testing its behavior and functionality without any physical hardware or software implementation, ensuring design accuracy early in the development process.",
        },
        {
          imgSrc: "/images/models/software.jpg",
          title: "Software in Loop",
          text: "Evaluates the correctness of the generated code by executing it within a simulation model, facilitating seamless integration between software and system models.",
        },
        {
          imgSrc: "/images/models/testing.jpg",
          title: "Hardware in Loop",
          text: "Integrates actual hardware components with control software in a real-time simulation environment, allowing comprehensive testing of hardware-software interactions.",
        },
        {
          imgSrc: "/images/models/process.jpg",
          title: "Process in Loop",
          text: "Implements innovative testing methods to streamline modern development processes, enhancing efficiency and reducing time-to-market.",
        },
      ],
      "business-services": [
        {
          imgSrc: "/images/models/monitoring.jpg",
          title: "Monitoring",
          text: "Provides real-time monitoring solutions for battery systems, ensuring continuous performance tracking and immediate detection of anomalies.",
        },
        {
          imgSrc: "/images/models/battery.jpg",
          title: "Management",
          text: "Offers comprehensive battery management services, including state-of-charge estimation, thermal management, and lifecycle optimization to enhance battery longevity.",
        },
        {
          imgSrc: "/images/models/security.jpg",
          title: "Protection",
          text: "Implements advanced protection mechanisms to safeguard battery systems against overcharging, deep discharge, and thermal runaway, ensuring safety and reliability.",
        },
        {
          imgSrc: "/images/models/connections.jpg",
          title: "Communication",
          text: "Facilitates seamless communication between battery modules and management systems through robust protocols and interfaces, enabling efficient data exchange and control.",
        },
        {
          imgSrc: "/images/models/prognostics.jpg",
          title: "Prognostics",
          text: "Utilizes predictive analytics to forecast battery health and remaining useful life, allowing proactive maintenance and reducing unexpected downtimes.",
        },
      ],
      "product-information": [
        {
          imgSrc: "/images/models/function.jpg",
          title: "Automated Functional Testing",
          text: "Automates your functional testing processes to enhance accuracy, consistency, and efficiency, reducing manual effort and accelerating release cycles.",
        },
        {
          imgSrc: "/images/models/analysis.jpg",
          title: "Requirement Specification and Analysis",
          text: "Provides thorough requirement specification and analysis services to ensure that your testing framework aligns with your project goals and quality standards.",
        },
        {
          imgSrc: "/images/models/modeling.jpg",
          title: "Modeling and Simulation",
          text: "Develops detailed models and simulations to replicate real-world scenarios, enabling comprehensive testing and validation of your products before deployment.",
        },
        {
          imgSrc: "/images/models/scripting.jpg",
          title: "Test Case and Script Development",
          text: "Creates robust test cases and automated scripts tailored to your application needs, ensuring comprehensive coverage and repeatability in testing.",
        },
        {
          imgSrc: "/images/models/environment.jpg",
          title: "Test Environment Setup",
          text: "Sets up reliable and scalable test environments that mimic production settings, facilitating accurate and meaningful testing outcomes.",
        },
      ],
    },
  },
  employees: {
    title: "Who we are",
    members: [
      {
        imgSrc: "/images/RameshKumar.png",
        name: "Rameshkumar Rajarathanam",
        description: "Expert in developing Hardware-in-the-Loop (HIL) simulators, with extensive experience in C programming and MATLAB scripting.",
        full_description: "Expert in developing Hardware-in-the-Loop (HIL) simulators, with extensive experience in C programming and MATLAB scripting. Specialized in C, MATLAB, M-script, and Simulink modeling, with a strong ability to design, develop, and optimize real-time simulation environments for testing embedded systems. Proficient in integrating hardware and software components to create robust testing frameworks that enhance system validation and verification. Experienced in developing custom test automation scripts, analyzing simulation data, and collaborating with cross-functional teams to improve system performance and reliability.",
        job: "CEO | Software/Simulation Specialist",
      },
      {
        imgSrc: "/images/Tiberiu.png",
        name: "Tiberiu Stanciu",
        description: "A renewable energy consultant assists clients in conducting investigations in order to better understand and direct the installation of renewable energy systems.",
        full_description: "A renewable energy consultant assists clients in conducting investigations in order to better understand and direct the installation of renewable energy systems. Their primary goal is to increase efficiency while lowering costs and reducing negative environmental impacts  Renewable energy consultants spend their days inspecting the energy sources used throughout a client facility. They then attempt to determine whether the facility can be powered by alternative energy sources such as solar and wind",
        job: "Renewable Energy Specialist",
      },
      {
        imgSrc: "images/Faouzi.png",
        name: "Faouzi AL MOUTAMID",
        job: "Battery Management Specialist",
        description: "The Energy Specialist is primarily responsible for completing walk through energy efficiency assessments",
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
        imgSrc: "/images/Sajendraprasad.png",
        name: "Sajendra Prasad Chandran",
        description: "The Human Resources Specialist leads strategic initiatives in talent acquisition, employee engagement, and workforce development to foster a thriving organizational culture.",
        full_description: "The Human Resources Specialist plays a pivotal role in shaping the organization’s success by leading strategic initiatives in talent acquisition, employee engagement, and workforce development. This includes designing and implementing innovative hiring practices to attract top-tier talent, developing programs to enhance employee satisfaction and productivity, and creating comprehensive learning and development opportunities to support career growth. With a strong focus on fostering a positive and inclusive workplace culture, the Human Resources Specialist works closely with leadership to align HR strategies with organizational goals, ensuring a thriving, motivated, and high-performing workforce.",
        job: "Human Resource Manager",
      },
      {
        imgSrc: "/images/Rajavelu.png",
        name: "Rajavel Rajendiran",
        job: "Senior Software Engineer",
        description: "The Senior Software Engineer drives model-based development and testing for Battery Management Systems (BMS).",
        full_description: "The Senior Software Engineer drives model-based development and testing for Battery Management Systems (BMS), focusing on algorithm design, advanced testing environments, and automation. This role also involves developing Energy Storage System RIGs and automating Model-In-The-Loop (MIL) testing setups.",
      },
      {
        imgSrc: "/images/Nallasivam.png",
        name: "Nallasivam Selvaraj",
        description: "Experienced Software Engineer with expertise in DevOps, Python, C++ and software develoment, specializing in application development and user interface design.",
        full_description: "Experienced Software Engineer with expertise in DevOps, Python, C++ and software develoment, specializing in application development and user interface design. Skilled in DevOps practices and cloud for efficient software delivery. Passionate about creating scalable, reliable solutions and staying updated with emerging technologies.",
        job: "Software Engineer",
      },
      {
        imgSrc: "/images/Prabhakaran.png",
        name: "Prabhakaran Sundaralingam",
        description: "A seasoned Hardware Engineer with over 5 years of experience in electronics product development, focusing on the entire lifecycle from circuit design to design verification testing.",
        full_description: "A seasoned Hardware Engineer with over 5 years of experience in electronics product development, focusing on the entire lifecycle from circuit design to design verification testing. Specialized in embedded systems, PCB design, and component lifecycle management, with extensive expertise in microcontroller programming and various communication protocols like I2C, SPI, and UART.",
        job: "Hardware Engineer",
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
        job: "Senior Software Engineer",
        description: "Model-Based Developer, specializing in Battery Management Systems (BMS), MATLAB, software development.",
        full_description: "Model-Based Developer, specializing in Battery Management Systems (BMS), MATLAB, software development and validating software systems through formal models. Expertise create comprehensive test cases for seamless hardware and software integration, ensuring efficient and reliable system performance.",
      },
      {
        imgSrc: "/images/Maari.png",
        name: "Maarimuthu Rajagopal",
        job: "Embedded Firmware Engineer",
        description: "Experienced in developing and optimizing firmware for microcontrollers with expertise in UART, SPI, CAN, and I2C protocols.",
        full_description: "Experienced in developing and optimizing firmware for microcontrollers with expertise in UART, SPI, CAN, and I2C protocols. Skilled in using FreeRTOS for real-time applications and ROS for modular robotic solutions. Proficient in SOEM/SOES for EtherCAT-based automation and firmware development for Battery Management Systems (BMS). Adept at hardware-software integration, low-level debugging, and system optimization. Passionate about delivering reliable solutions for industrial automation, robotics, and IoT.",        
      },
      {
        imgSrc: "/images/Agilan.png",
        name: "Agilan Arulchelvam",
        job: "Machine Learning Engineer",
        description: "A dynamic Data Analyst proficient in SQL, Python, and Data Visualization. ",
        full_description: "A dynamic Data Analyst proficient in SQL, Python, and Data Visualization. I've leveraged my expertise in Machine Learning across diverse projects, delivering actionable insights.",
      },
      {
        imgSrc: "/images/Hari.png",
        name: "Hari Ramar",
        job: "Web Developer",
        description: "Specializes in building scalable and efficient web applications using a diverse technology stack, including React, Node.js, Express, PostgreSQL, Django, and Flask.",
        full_description: "Specializes in building scalable and efficient web applications using a diverse technology stack, including React, Node.js, Express, PostgreSQL, Django, and Flask. This role involves developing and maintaining both front-end and back-end components, ensuring seamless integration between user interfaces and server-side logic. The developer is responsible for designing responsive and dynamic web applications, implementing RESTful APIs, managing databases, and optimizing application performance. With expertise across the entire development lifecycle, they collaborate closely with cross-functional teams to deliver robust, secure, and user-friendly solutions that align with business objectives.",
      },
      {
        imgSrc: "/images/Muralidharan.png",
        name: "Murali Dharan",
        job: "Software Tester",
        description: "Drives quality assurance efforts by leveraging cutting-edge tools and methodologies, including Cucumber, to ensure the delivery of robust and reliable software solutions.",
        full_description: "The Software Tester drives quality assurance efforts by leveraging cutting-edge tools and methodologies, including Cucumber, to ensure the delivery of robust and reliable software solutions. This role involves designing and executing automated and manual test cases, developing behavior-driven testing frameworks, and collaborating closely with development teams to identify and resolve issues early in the software lifecycle. With a focus on maintaining high-quality standards, the Software Tester ensures seamless integration, functionality, and user experience, contributing to the overall success of the organization’s technology initiatives.",
      },
      {
        imgSrc: "/images/Saran.png",
        name: "Saran Muthumanickam",
        job: "Research Engineer",
        description: "Specializes in bioinformatics and genetics, driving innovation at the intersection of computational science and biology.",
        full_description: "Specializes in bioinformatics and genetics, driving innovation at the intersection of computational science and biology. This role involves developing and applying advanced algorithms, statistical models, and data analysis pipelines to uncover insights from genomic and transcriptomic data. By leveraging expertise in programming, machine learning, and biological systems, the Research Engineer contributes to projects such as genetic variant analysis, gene expression profiling, and biomarker discovery. Collaborating with multidisciplinary teams, they play a key role in advancing our understanding of complex biological processes, ultimately supporting breakthroughs in personalized medicine, biotechnology, and genomics research.",
      },
      {
        imgSrc: "/images/Divya.png",
        name: "Divya Rosy",
        job: "Front End Developer",
        description: "Specializes in React development, crafting dynamic and user-friendly web interfaces that deliver exceptional user experiences.",
        full_description: "Specializes in React development, crafting dynamic and user-friendly web interfaces that deliver exceptional user experiences. This role involves building and optimizing responsive components, implementing reusable code and libraries, and integrating APIs to ensure seamless functionality. By leveraging expertise in modern front-end technologies, such as JavaScript, React.js, and related tools, the developer collaborates closely with designers and back-end teams to create intuitive, visually appealing, and high-performing web applications. With a strong focus on user-centric design and performance, the Front-End Web Developer contributes to delivering impactful digital solutions that meet both user and business needs",
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
        vat_number: "VAT Number: SE559386605501",
        address: "SWEDEN (HQ) - Sprintergången 7",
        email: "support@simtestlab.se",
        phone: "+46 76 976 82 63",
        copyright: "Copyright 2022. All Rights Reserved.",
    },
    branch1 : {
      name: "iGraph Technologies Pvt Ltd",      
      address_line_1: "Masagoundenchettipalayam Coimbatore",
      address_line_2: "Tamil Nadu, India - 641 107",
      email: "support@simtestlab.se",
      phone: "+91 72005 12732",      
      gst_number: "GSTIN: 33AAHCI4078E1ZO",
      cin_number: "CIN: U26517TZ2023PTC029990"
    },
    branch2 : {
        name: "iGraph Technologies Pvt Ltd",
        address_line_1: "Kolapalli, Cherangode, The Nilgiris",
        address_line_2: "Tamil Nadu, India - 643 253",
        email: "support@simtestlab.se",
        phone: "+91 72005 12732"
    },

    socialLinks: [
      { href: "https://www.linkedin.com/company/simtestlab", icon: "fab fa-linkedin-in" },
      //{ href: "https://www.facebook.com/", icon: "fab fa-facebook-f" },
      //{ href: "https://x.com/", icon: "fab fa-twitter" },
      //{ href: "https://www.instagram.com/", icon: "fab fa-instagram" },
    ],
  },
};

export default content;
