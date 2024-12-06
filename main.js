// Project data





const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with shopping cart and payment integration.",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Task Manager",
      description: "A productivity app for managing daily tasks and projects.",
      tags: ["JavaScript", "HTML", "CSS"]
    },
    {
      title: "Weather App",
      description: "Real-time weather forecasting application using weather API.",
      tags: ["API", "JavaScript", "CSS"]
    }
  ];
  




  // Theme toggling




  const themeToggle = document.getElementById('themeToggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  function setTheme(isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
  }
  




  // Initialize theme





  setTheme(prefersDarkScheme.matches);
  
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    setTheme(!isDark);
  });
  





  // Render projects




  const projectsGrid = document.getElementById('projectsGrid');
  
  function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="skills">
        ${project.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
      </div>
    `;
    
    return card;
  }
  
  projects.forEach(project => {
    projectsGrid.appendChild(createProjectCard(project));
  });
  




  // Form handling





  const contactForm = document.getElementById('contactForm');
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };





    
    // Here you would typically send the form data to a server





    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });
  




//   Smooth scrolling for navigation links



  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  




  // Navbar scroll effect




  let lastScroll = 0;
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      navbar.style.boxShadow = 'none';
    } else {
      navbar.style.boxShadow = 'var(--shadow)';
    }
    
    lastScroll = currentScroll;
  });