// Add any custom JavaScript code or functionality here

// Example: Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    for (let link of anchorLinks) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offsetTop = targetElement.offsetTop;
  
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      });
    }
  });  