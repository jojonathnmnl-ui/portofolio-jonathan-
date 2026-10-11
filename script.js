/* =====================================================
   script.js — dibagi menjadi modul-modul kecil.
   Edit bagian KONFIGURASI & DATA untuk mengganti isi.
   ===================================================== */

/* ===== KONFIGURASI: ganti dengan akun asli kamu ===== */
const EMAIL = 'azariajonathanmanuela@gmail.com';
const GH = 'https://github.com/jojonathnmnl-ui';
const LINKS = {
  instagram: 'https://www.instagram.com/jonathanmnlla?srtk=M3NpZmdiOW10M2Nq&utm_source=qr',
  linkedin: 'https://www.linkedin.com/in/azaria-jonathan-manuela-9a9779378?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  github: GH,
  email: 'mailto:' + EMAIL,
  whatsapp: 'https://wa.me/'
};

/* ===== DATA: ubah sesuai kemampuan & proyek kamu ===== */
const SKILLS = [['HTML', 90], ['CSS', 85], ['JavaScript', 75], ['PHP', 65], ['MySQL', 70], ['Python', 65], ['C++', 60], ['Git', 65], ['VS Code', 90], ['XAMPP', 80]];
// g = warna gradasi preview. Untuk gambar asli, ganti isi .pv dengan <img src="assets/images/xxx.jpg" loading="lazy">
const PROJECTS = [
  { t: 'Website Portfolio', img: 'assets/images/projects/portfolio.svg', d: 'Portfolio pribadi bergaya dark futuristic dengan animasi GSAP dan smooth scroll.', s: ['HTML', 'CSS', 'GSAP'], g: ['#00E5FF', '#8B5CF6'] },
  { t: 'Website Rekomendasi Laptop', img: 'assets/images/projects/laptop.svg', d: 'Website afiliasi yang membantu mahasiswa teknik memilih laptop sesuai kebutuhan dan budget.', s: ['HTML', 'CSS', 'JavaScript'], g: ['#8B5CF6', '#ec4899'] },
  { t: 'Mini Project OOP', img: 'assets/images/projects/oop.svg', d: 'Desain program kasus sehari-hari dengan inheritance, polymorphism, dan decorator.', s: ['Python', 'OOP'], g: ['#00FF88', '#00E5FF'] },
  { t: 'Database SQL', img: 'assets/images/projects/database.svg', d: 'Perancangan database relasional lengkap dengan ERD, query, dan relasi antar tabel.', s: ['MySQL', 'SQL', 'ERD'], g: ['#f59e0b', '#ef4444'] },
  { t: 'Website Company Profile', img: 'assets/images/projects/company.svg', d: 'Website profil usaha yang responsif dengan navigasi dan halaman informatif.', s: ['HTML', 'CSS', 'JavaScript'], g: ['#3b82f6', '#8B5CF6'] }
];
const CERTS = [
  ['PKL: PT Telkom Akses Jepara', 'Praktik Kerja Lapangan · 6 Jan – 29 Apr 2025', 'assets/images/certs/pkl-telkom.jpg'],
  ['Electrical Campus Observation 2025', 'Peserta · HMP Teknik Elektro UNNES · 5, 6, 7 & 20 Sep 2025', 'assets/images/certs/elco.jpg'],
  ['Pelatihan Manajemen Kepemimpinan Teknik Elektro', 'Peserta · HMP Teknik Elektro UNNES · 4–5 Okt 2025', 'assets/images/certs/pmkte.jpg']
];
// Tambah rincian nilai PMKTE: ['Rincian Nilai PMKTE', 'Total nilai 71', 'assets/images/certs/pmkte-nilai.jpg']
const ROLES = ['Software Engineer', 'Web Developer', 'UI/UX Enthusiast'];

/* Ikon sosial (gaya garis, 24x24) */
const ICONS = {
  instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.4a4 4 0 1 1-7.9 1.2 4 4 0 0 1 7.9-1.2zM17.5 6.5h.01"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>',
  github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.3 6.4-1.5 6.4-7a5.4 5.4 0 0 0-1.5-3.8 5 5 0 0 0-.1-3.8s-1.2-.3-3.9 1.5a13.4 13.4 0 0 0-7 0C6.3 1.8 5.1 2.1 5.1 2.1a5 5 0 0 0-.1 3.8A5.4 5.4 0 0 0 3.5 9.7c0 5.4 3.3 6.6 6.4 7a3.4 3.4 0 0 0-.9 2.6V22"/>',
  email: '<path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 6l-10 7L2 6"/>',
  whatsapp: '<path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.6A8.4 8.4 0 1 1 21 11.5z"/>'
};

/* Helper pemilih elemen */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

/* ===== Modul: bangun konten dari data ===== */
const Build = () => {
  $('#skill-list').innerHTML = SKILLS.map(([n, v]) =>
    `<article class="card glass reveal"><h3>${n}<em>${v}%</em></h3><div class="lvl"><i data-w="${v}"></i></div></article>`).join('');
  $('#work').innerHTML = PROJECTS.map((p, i) =>
    `<article class="pc glass reveal"><div class="pv" style="background:linear-gradient(135deg,${p.g[0]},${p.g[1]})"><span>0${i + 1}</span><img src="${p.img}" alt="Pratinjau ${p.t}" loading="lazy" onerror="this.remove()"></div>
     <div class="pb"><h3>${p.t}</h3><p>${p.d}</p><div class="tags">${p.s.map(x => `<span>${x}</span>`).join('')}</div>
     <a class="btn ghost" href="${GH}" target="_blank" rel="noopener">GitHub</a><a class="btn primary" href="${GH}" target="_blank" rel="noopener">Live Demo</a></div></article>`).join('');
  $('#cert-list').innerHTML = CERTS.map(([t, d, im]) =>
    `<div class="swiper-slide"><div class="cert glass"><div class="ci"><img src="${im}" alt="Sertifikat ${t}" loading="lazy"></div><div class="cap"><small>Sertifikat</small><h3>${t}</h3><p>${d}</p></div></div></div>`).join('');
  $$('[data-soc]').forEach(b => b.innerHTML = Object.keys(ICONS).map(k =>
    `<a href="${LINKS[k]}" target="_blank" rel="noopener" aria-label="${k}"><svg viewBox="0 0 24 24">${ICONS[k]}</svg></a>`).join(''));
  // Pecah nama jadi huruf untuk character animation
  $$('.name .line').forEach(l => l.innerHTML = [...l.textContent].map(c => `<span class="ch">${c}</span>`).join(''));
  // Pecah judul jadi kata untuk text reveal
  $$('.split').forEach(el => el.innerHTML = el.textContent.trim().split(' ').map(w => `<span class="w"><i>${w}</i></span>`).join(' '));
};

/* ===== Modul: partikel latar (canvas 2D, ringan) ===== */
const Particles = () => {
  const c = $('#bg'), x = c.getContext('2d'), m = { x: -999, y: -999 };
  let w, h, P = [];
  const resize = () => {
    w = c.width = innerWidth; h = c.height = innerHeight;
    P = Array.from({ length: Math.min(90, w / 16 | 0) }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4 }));
  };
  addEventListener('resize', resize);
  addEventListener('pointermove', e => { m.x = e.clientX; m.y = e.clientY; });
  const loop = () => {
    x.clearRect(0, 0, w, h);
    for (const p of P) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      const dx = p.x - m.x, dy = p.y - m.y, d = Math.hypot(dx, dy) || 1;
      if (d < 120) { p.x += dx / d * 1.5; p.y += dy / d * 1.5; } // partikel menghindari kursor
      x.fillStyle = 'rgba(0,229,255,.7)'; x.beginPath(); x.arc(p.x, p.y, 1.4, 0, 6.3); x.fill();
    }
    for (let i = 0; i < P.length; i++) for (let j = i + 1; j < P.length; j++) {
      const d = Math.hypot(P[i].x - P[j].x, P[i].y - P[j].y);
      if (d < 130) { x.strokeStyle = `rgba(139,92,246,${.25 * (1 - d / 130)})`; x.beginPath(); x.moveTo(P[i].x, P[i].y); x.lineTo(P[j].x, P[j].y); x.stroke(); }
    }
    requestAnimationFrame(loop);
  };
  resize(); loop();
};

/* ===== Modul: smooth scroll (Lenis) terhubung ke ScrollTrigger ===== */
const Smooth = () => {
  const l = new Lenis({ lerp: .09 });
  l.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(t => l.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  return l;
};

/* ===== Modul: kursor custom, mouse glow, tombol magnetic ===== */
const Pointer = () => {
  const q = (t, p, d) => gsap.quickTo(t, p, { duration: d, ease: 'power3' });
  const cx = q('#cursor', 'x', .1), cy = q('#cursor', 'y', .1), gx = q('#glow', 'x', .8), gy = q('#glow', 'y', .8);
  addEventListener('pointermove', e => { $('#cursor').classList.add('on'); cx(e.clientX); cy(e.clientY); gx(e.clientX); gy(e.clientY); });
  document.addEventListener('pointerover', e => $('#cursor').classList.toggle('hover', !!e.target.closest('a,button,.ci img')));
  addEventListener('pointerdown', () => $('#cursor').classList.add('down'));
  addEventListener('pointerup', () => $('#cursor').classList.remove('down'));
  if (!matchMedia('(hover:hover)').matches) return;
  $$('.magnetic').forEach(el => {
    const mx = q(el, 'x', .4), my = q(el, 'y', .4);
    el.addEventListener('pointermove', e => { const r = el.getBoundingClientRect(); mx((e.clientX - r.left - r.width / 2) * .35); my((e.clientY - r.top - r.height / 2) * .35); });
    el.addEventListener('pointerleave', () => { mx(0); my(0); });
  });
};

/* ===== Modul: tilt 3D pada kartu proyek ===== */
const Tilt = () => $$('.pc').forEach(c => {
  gsap.set(c, { transformPerspective: 900 });
  const rx = gsap.quickTo(c, 'rotationX', { duration: .4 }), ry = gsap.quickTo(c, 'rotationY', { duration: .4 });
  c.addEventListener('pointermove', e => { const r = c.getBoundingClientRect(); ry(((e.clientX - r.left) / r.width - .5) * 14); rx(-((e.clientY - r.top) / r.height - .5) * 14); });
  c.addEventListener('pointerleave', () => { rx(0); ry(0); });
});

/* ===== Modul: animasi saat scroll ===== */
const Reveal = () => {
  gsap.to('#progress', { scaleX: 1, ease: 'none', scrollTrigger: { scrub: .3, start: 0, end: 'max' } });
  $$('.split').forEach(el => gsap.from($$('i', el), { yPercent: 110, duration: .9, stagger: .06, ease: 'power4.out', scrollTrigger: { trigger: el, start: 'top 88%' } }));
  $$('.reveal').forEach(el => gsap.from(el, { y: 60, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%' } }));
  $$('.lvl i').forEach(b => gsap.to(b, { width: b.dataset.w + '%', duration: 1.4, ease: 'power3.out', scrollTrigger: { trigger: b, start: 'top 95%' } }));
  $$('[data-count]').forEach(n => { const o = { v: 0 }; gsap.to(o, { v: +n.dataset.count, duration: 1.6, scrollTrigger: { trigger: n, start: 'top 95%' }, onUpdate: () => n.textContent = Math.round(o.v) }); });
  // Parallax
  gsap.to('#about .photo', { yPercent: -8, ease: 'none', scrollTrigger: { trigger: '#about', scrub: true } });
  gsap.to('.orb', { y: -160, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  gsap.to('.hero .name', { yPercent: -18, opacity: .2, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
};

/* ===== Modul: typing animation ===== */
const Typing = () => {
  const el = $('#typed'); let i = 0, j = 0, del = false;
  (function tick() {
    const w = ROLES[i]; el.textContent = w.slice(0, j);
    if (!del && j === w.length) { del = true; return setTimeout(tick, 1400); }
    if (del && j === 0) { del = false; i = (i + 1) % ROLES.length; }
    j += del ? -1 : 1;
    setTimeout(tick, del ? 40 : 90);
  })();
};

/* ===== Modul: page transition saat klik menu ===== */
const Nav = l => $$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  const id = a.getAttribute('href');
  if (id.length < 2 || !$(id)) return;
  e.preventDefault();
  gsap.timeline()
    .to('#curtain', { yPercent: -100, duration: .5, ease: 'power3.inOut' })
    .add(() => l.scrollTo(id, { immediate: true, force: true }))
    .to('#curtain', { yPercent: -200, duration: .5, ease: 'power3.inOut' })
    .set('#curtain', { yPercent: 0 });
}));

/* ===== Modul: slider sertifikat & form kontak ===== */
const Slider = () => new Swiper('.swiper', {
  slidesPerView: 1.15, spaceBetween: 20, grabCursor: true,
  pagination: { el: '.swiper-pagination', clickable: true },
  autoplay: { delay: 3500, disableOnInteraction: false },
  breakpoints: { 640: { slidesPerView: 2 }, 1000: { slidesPerView: 2 } }
});
const Form = () => $('#form').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target); // form membuka aplikasi email (tanpa backend)
  location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Pesan dari ' + f.get('nama'))}&body=${encodeURIComponent(f.get('pesan') + '\n\n' + f.get('email'))}`;
});

/* ===== Modul: lightbox, klik gambar sertifikat untuk memperbesar ===== */
const Lightbox = () => {
  const lb = $('#lb'), im = $('img', lb);
  const close = () => { lb.classList.remove('open'); lenis.start(); };
  document.addEventListener('click', e => {
    const t = e.target.closest('.ci img'); if (!t) return;
    im.src = t.src; im.alt = t.alt; lb.classList.add('open'); lenis.stop();
  });
  lb.addEventListener('click', close);
  addEventListener('keydown', e => e.key === 'Escape' && close());
};

/* ===== Modul: loading screen lalu animasi pembuka hero ===== */
const Loader = done => {
  const o = { v: 0 }, bar = $('#loader .bar i'), pct = $('#pct');
  gsap.from('#loader .logo', { scale: .6, opacity: 0, duration: .8, ease: 'back.out(2)' });
  gsap.to(o, {
    v: 100, duration: 2, ease: 'power2.inOut',
    onUpdate() { const v = Math.round(o.v); bar.style.width = v + '%'; pct.textContent = v + '%'; },
    onComplete() { gsap.to('#loader', { opacity: 0, duration: .7, onComplete() { $('#loader').remove(); done(); } }); }
  });
};
const Intro = () => {
  gsap.timeline({ defaults: { ease: 'power4.out' } })
    .from('.nav', { yPercent: -150, opacity: 0, duration: .9 })
    .from('.eyebrow', { y: 20, opacity: 0, duration: .8 }, '<.2')
    .from('.name .ch', { yPercent: 110, rotate: 6, opacity: 0, duration: 1.1, stagger: .04 }, '-=.5')
    .from('.typing,.lead,.cta,.scroll', { y: 30, opacity: 0, duration: .9, stagger: .12 }, '-=.6');
  Typing();
};

/* ===== Mulai ===== */
gsap.registerPlugin(ScrollTrigger);
Build(); Particles();
const lenis = Smooth(); lenis.stop(); // scroll dikunci selama loading
Pointer(); Tilt(); Reveal(); Nav(lenis); Slider(); Form(); Lightbox();
Loader(() => { lenis.start(); Intro(); });
addEventListener('load', () => ScrollTrigger.refresh());
