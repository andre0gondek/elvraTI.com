document.addEventListener("DOMContentLoaded", () => {
  const toggleThemeCheckbox = document.getElementById('toggle-theme');

  // seleciona as logos do header e do footer
  const headerLogo = document.querySelector('.topo .logo');
  const footerLogo = document.querySelector('.footer .logo');

  // função para aplicar tema
  const aplicarTema = (tema) => {
    if (tema === 'light') {
      document.body.classList.add('light-mode');
      if (headerLogo) headerLogo.src = '/imagens/logo-clara.png';
      if (footerLogo) footerLogo.src = '/imagens/logo-clara.png';
      toggleThemeCheckbox.checked = true;
    } else {
      document.body.classList.remove('light-mode');
      if (headerLogo) headerLogo.src = '/imagens/logo-escura.png';
      if (footerLogo) footerLogo.src = '/imagens/logo-escura.png';
      toggleThemeCheckbox.checked = false;
    }
    localStorage.setItem('theme', tema);
  };

  // aplicar o tema salvo no localStorage
  const savedTheme = localStorage.getItem('theme') || 'dark';
  aplicarTema(savedTheme);

  // alternancia de tema ao clicar no interruptor
  if (toggleThemeCheckbox) {
    toggleThemeCheckbox.addEventListener('change', () => {
      const novoTema = toggleThemeCheckbox.checked ? 'light' : 'dark';
      aplicarTema(novoTema);
    });
  }
});
