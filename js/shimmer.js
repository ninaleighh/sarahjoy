/* shimmer.js — ambient gold particle canvas */
(function () {
  const canvas = document.getElementById('shimmer-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles;

  const COLORS = [
    'rgba(201,146,42,',
    'rgba(232,184,75,',
    'rgba(245,230,200,',
    'rgba(123,45,139,',
    'rgba(26,95,122,',
  ];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function randomBetween(a, b) {
    return a + Math.random() * (b - a);
  }

  function makeParticle() {
    return {
      x:     randomBetween(0, W),
      y:     randomBetween(0, H),
      size:  randomBetween(0.8, 2.2),
      speed: randomBetween(0.15, 0.55),
      drift: randomBetween(-0.15, 0.15),
      alpha: randomBetween(0.1, 0.7),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      twinkle: randomBetween(0.005, 0.02),
      twinkleDir: Math.random() > 0.5 ? 1 : -1,
    };
  }

  function initParticles() {
    const count = Math.floor((W * H) / 9000);
    particles = Array.from({ length: count }, makeParticle);
  }

  function step() {
    ctx.clearRect(0, 0, W, H);

    for (const p of particles) {
      // drift upward
      p.y -= p.speed;
      p.x += p.drift;

      // twinkle
      p.alpha += p.twinkle * p.twinkleDir;
      if (p.alpha >= 0.75 || p.alpha <= 0.05) p.twinkleDir *= -1;

      // wrap
      if (p.y < -5)  { p.y = H + 5; p.x = randomBetween(0, W); }
      if (p.x < -5)  p.x = W + 5;
      if (p.x > W + 5) p.x = -5;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha.toFixed(2) + ')';
      ctx.fill();
    }

    requestAnimationFrame(step);
  }

  window.addEventListener('resize', () => { resize(); initParticles(); });
  resize();
  initParticles();
  step();
})();
