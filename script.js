/* ============================================================
   KAIRÓS VEÍCULOS | script.js
   ============================================================ */

'use strict';

// ===== CONFIGURAÇÃO =====
// SUBSTITUA os dados abaixo pelos reais

const CONFIG = {
  whatsapp: '55XXXXXXXXXX',   // Ex: 5521999999999
  instagram: 'kairosveiculosrj'
};

// ===== CATÁLOGO DE VEÍCULOS =====
// Adicione, edite ou remova veículos aqui
// Tipos aceitos: 'nacional' | 'importado' | 'suv'

const VEICULOS = [
  {
    id: 1,
    nome: 'Honda Civic',
    versao: 'EXL 2.0 CVT',
    ano: '2022',
    km: '32.000 km',
    cambio: 'Automático',
    preco: 'R$ 142.900',
    tipo: 'nacional',
    img: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=640&q=80'
  },
  {
    id: 2,
    nome: 'Toyota Corolla',
    versao: 'XEi 2.0 Flex',
    ano: '2021',
    km: '45.000 km',
    cambio: 'Automático',
    preco: 'R$ 129.900',
    tipo: 'nacional',
    img: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=640&q=80'
  },
  {
    id: 3,
    nome: 'BMW 320i',
    versao: 'Sport GP 2.0 Turbo',
    ano: '2020',
    km: '58.000 km',
    cambio: 'Automático',
    preco: 'R$ 189.900',
    tipo: 'importado',
    img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=640&q=80'
  },
  {
    id: 4,
    nome: 'Mercedes C200',
    versao: 'Avantgarde 1.5 EQ Boost',
    ano: '2019',
    km: '72.000 km',
    cambio: 'Automático',
    preco: 'R$ 229.900',
    tipo: 'importado',
    img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=640&q=80'
  },
  {
    id: 5,
    nome: 'Jeep Compass',
    versao: 'Limited 2.0 TD 4x4',
    ano: '2022',
    km: '28.000 km',
    cambio: 'Automático',
    preco: 'R$ 159.900',
    tipo: 'suv',
    img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=640&q=80'
  },
  {
    id: 6,
    nome: 'Ford Mustang GT',
    versao: '5.0 V8 Premium',
    ano: '2021',
    km: '19.000 km',
    cambio: 'Manual',
    preco: 'R$ 319.900',
    tipo: 'importado',
    img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=640&q=80'
  },
  {
    id: 7,
    nome: 'VW T-Cross',
    versao: 'Highline 1.4 TSI',
    ano: '2022',
    km: '24.500 km',
    cambio: 'Automático',
    preco: 'R$ 118.900',
    tipo: 'suv',
    img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=640&q=80'
  },
  {
    id: 8,
    nome: 'Audi A3 Sedan',
    versao: '1.4 TFSI Flex',
    ano: '2020',
    km: '61.000 km',
    cambio: 'Automático',
    preco: 'R$ 169.900',
    tipo: 'importado',
    img: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=640&q=80'
  },
  {
    id: 9,
    nome: 'Chevrolet Onix Plus',
    versao: 'Premier 1.0 Turbo AT',
    ano: '2023',
    km: '12.000 km',
    cambio: 'Automático',
    preco: 'R$ 89.900',
    tipo: 'nacional',
    img: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=640&q=80'
  }
];

// ===== RENDER CATÁLOGO =====

function badgeClass(tipo) {
  return { nacional: 'nac', importado: 'imp', suv: 'suv' }[tipo] || 'nac';
}

function badgeLabel(tipo) {
  return { nacional: 'Nacional', importado: 'Importado', suv: 'SUV' }[tipo] || '';
}

function iconKm() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`;
}

function iconCambio() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`;
}

function buildCard(v, delay) {
  const wpp = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(
    `Olá Maurício! Tenho interesse no ${v.nome} ${v.versao} (${v.ano}). Vi no site de vocês.`
  )}`;

  return `
    <div class="v-card" style="animation-delay:${delay}s">
      <div class="v-card__thumb">
        <img src="${v.img}" alt="${v.nome} ${v.versao}" loading="lazy">
        <span class="v-badge ${badgeClass(v.tipo)}">${badgeLabel(v.tipo)}</span>
      </div>
      <div class="v-card__body">
        <div class="v-card__name">${v.nome}</div>
        <div class="v-card__version">${v.versao} &middot; ${v.ano}</div>
        <div class="v-card__specs">
          <span class="v-spec">${iconKm()} ${v.km}</span>
          <span class="v-spec">${iconCambio()} ${v.cambio}</span>
        </div>
        <div class="v-card__price">${v.preco}</div>
        <a href="${wpp}" class="v-card__btn" target="_blank" rel="noopener">Tenho Interesse</a>
      </div>
    </div>
  `;
}

function renderCatalogo(filter) {
  const grid = document.getElementById('catalogoGrid');
  if (!grid) return;

  const lista = filter === 'todos'
    ? VEICULOS
    : VEICULOS.filter(v => v.tipo === filter);

  grid.innerHTML = lista.map((v, i) => buildCard(v, i * 0.07)).join('');
}

// ===== FILTROS =====

let filtroAtivo = 'todos';

document.querySelectorAll('.f-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filtroAtivo = btn.dataset.filter;
    renderCatalogo(filtroAtivo);
  });
});

// ===== NAV: scroll + mobile =====

const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Fecha menu com ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navLinks.classList.contains('open')) {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// ===== REVEAL ANIMATION (Intersection Observer) =====

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== FORMULÁRIO =====

const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const nome = (form.querySelector('[name="nome"]')?.value || '').trim();
    const tel = (form.querySelector('[name="telefone"]')?.value || '').trim();
    const msg = (form.querySelector('[name="mensagem"]')?.value || '').trim();

    if (!nome || !tel) {
      shake(form);
      return;
    }

    const texto = `Olá Maurício! Me chamo ${nome}, meu WhatsApp é ${tel}. ${msg || 'Quero saber mais sobre os veículos.'}`;
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`, '_blank');

    form.reset();
  });
}

function shake(el) {
  el.style.animation = 'none';
  el.offsetHeight; // reflow
  el.style.animation = 'shake 0.4s ease';
}

// ===== SMOOTH SCROLL (complementar ao CSS) =====

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 72; // altura do nav
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ===== INIT =====

renderCatalogo('todos');

// CSS keyframe para shake (injetado via JS)
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%,100% { transform:translateX(0); }
    25%      { transform:translateX(-6px); }
    75%      { transform:translateX(6px); }
  }
`;
document.head.appendChild(style);
