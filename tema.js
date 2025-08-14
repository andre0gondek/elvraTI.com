document.addEventListener("DOMContentLoaded", () => {
  const toggleThemeCheckbox = document.getElementById('toggle-theme');
  const logos = document.querySelectorAll('.logo'); // pega todas as logos

  // Atualiza todas as logos com base no tema
  const atualizarLogos = (tema) => {
    const logoSrc = tema === 'light'
      ? '/imagens/logo-clara.png'
      : '/imagens/logo-escura.png';
    logos.forEach(logo => logo.src = logoSrc);
  };

  // Aplica o tema (light ou dark)
  const aplicarTema = (tema) => {
    if (tema === 'light') {
      document.body.classList.add('light-mode');
      if (toggleThemeCheckbox) toggleThemeCheckbox.checked = true;
    } else {
      document.body.classList.remove('light-mode');
      if (toggleThemeCheckbox) toggleThemeCheckbox.checked = false;
    }
    atualizarLogos(tema);
    localStorage.setItem('theme', tema);
  };

  // Recupera tema salvo ou define dark por padrão
  const savedTheme = localStorage.getItem('theme') || 'dark';
  aplicarTema(savedTheme);

  // Listener para alternar tema pelo switch
  if (toggleThemeCheckbox) {
    toggleThemeCheckbox.addEventListener('change', () => {
      const novoTema = toggleThemeCheckbox.checked ? 'light' : 'dark';
      aplicarTema(novoTema);
    });
  }
});
