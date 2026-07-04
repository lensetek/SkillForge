document.addEventListener('DOMContentLoaded', () => {
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const body = document.body;

  // Language state management
  const savedLang = localStorage.getItem('skillforge-lang') || 'en';
  setLanguage(savedLang);

  langToggleBtn.addEventListener('click', () => {
    const currentLang = body.classList.contains('lang-en') ? 'en' : 'id';
    const newLang = currentLang === 'en' ? 'id' : 'en';
    setLanguage(newLang);
  });

  function setLanguage(lang) {
    if (lang === 'id') {
      body.classList.remove('lang-en');
      body.classList.add('lang-id');
      document.title = "SkillForge | Workspace Kustomisasi Sub-Agent AI";
      localStorage.setItem('skillforge-lang', 'id');
    } else {
      body.classList.remove('lang-id');
      body.classList.add('lang-en');
      document.title = "SkillForge | The AI Sub-Agent Customization Workspace";
      localStorage.setItem('skillforge-lang', 'en');
    }
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for fixed navbar
          behavior: 'smooth'
        });
      }
    });
  });

  // Copy Prompt Button Logic
  const copyPromptBtn = document.getElementById('copy-prompt-btn');
  if (copyPromptBtn) {
    copyPromptBtn.addEventListener('click', () => {
      const currentLang = body.classList.contains('lang-en') ? 'en' : 'id';
      const promptText = document.querySelector(`.prompt-body pre span[lang="${currentLang}"]`).textContent;
      
      navigator.clipboard.writeText(promptText).then(() => {
        const originalText = copyPromptBtn.innerHTML;
        copyPromptBtn.innerHTML = currentLang === 'en' ? 'Copied!' : 'Tersalin!';
        setTimeout(() => {
          copyPromptBtn.innerHTML = originalText;
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    });
  }
});
