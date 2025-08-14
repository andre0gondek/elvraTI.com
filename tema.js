document.addEventListener("DOMContentLoaded", () => {
  const toggleThemeCheckbox = document.getElementById('toggle-theme');
  const headerLogo = document.querySelector('.topo .logo');
  const footerLogo = document.querySelector('.footer .logo');

  // Detecta profundidade da página e monta caminho correto para imagens
  const getBasePath = () => {
    const pathParts = window.location.pathname.split('/');
    pathParts.pop(); // remove o arquivo atual
    return pathParts.length > 1 ? '../'.repeat(pathParts.length - 1) : '';
  };
  const basePath = getBasePath();

  // Atualiza as logos de header e footer
  const atualizarLogos = (tema) => {
    const logoSrc = tema === 'light'
      ? `${basePath}imagens/logo-clara.png`
      : `${basePath}imagens/logo-escura.png`;

    if (headerLogo) headerLogo.src = logoSrc;
    if (footerLogo) footerLogo.src = logoSrc;
  };

  // Aplica tema (light ou dark)
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

  // Se houver switch, adiciona listener
  if (toggleThemeCheckbox) {
    toggleThemeCheckbox.addEventListener('change', () => {
      const novoTema = toggleThemeCheckbox.checked ? 'light' : 'dark';
      aplicarTema(novoTema);
    });
  }
});
  