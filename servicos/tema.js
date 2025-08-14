document.addEventListener("DOMContentLoaded", () => {
  const logos = document.querySelectorAll('.logo');

  // Atualiza todas as logos conforme o tema
  const atualizarLogos = (tema) => {
    const logoSrc = tema === 'light' ? '../imagens/logo-clara.png' : '../imagens/logo-escura.png';
    logos.forEach(logo => logo.src = logoSrc);
  };

  // Aplica tema
  const aplicarTema = (tema) => {
    document.body.classList.toggle('light-mode', tema === 'light');
    atualizarLogos(tema);
    localStorage.setItem('theme', tema);
  };

  // Aplica tema salvo ou dark por padrão
  aplicarTema(localStorage.getItem('theme') || 'dark');
});
