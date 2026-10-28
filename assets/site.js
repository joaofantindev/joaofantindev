/* =========================================================
   Fantin Dev Sec — site.js
   Dados, utilitários e renderização
   ========================================================= */
(() => {
  'use strict';

  /* ===== CONFIG: preencha com seus dados reais ===== */
  const CONFIG = {
    whatsapp: '5514997085759',
    email: 'joaofantindev@gmail.com',
    github: 'https://github.com/joaofantindev',
    linkedin: 'https://www.linkedin.com/in/joao-pedro-70b08b318/'
  };
  const GH_USER = 'joaofantindev';
  const GH_URL = `https://github.com/${GH_USER}`;
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FINE_POINTER = window.matchMedia('(pointer: fine)').matches;

  /* ===== PROJETOS: fallback com os 10 repositórios mais recentes ===== */
  const PROJECTS = [
    {
      name: 'MultiScreenPascal',
      problem: 'Sistema de cadastro de produtos em Object Pascal, construído parte por parte.',
      tech: 'Object Pascal, Lazarus',
      role: 'Projeto em desenvolvimento, com telas e cadastro de produtos.',
      repo: GH_URL + '/MultiScreenPascal',
      live: '',
      mock: 'kanban',
      tags: ['desktop', 'cadastro', 'pascal']
    },
    {
      name: 'joaofantindev',
      problem: 'Repositório de perfil: apresentação, stack e links.',
      tech: 'Markdown, CSS',
      role: 'Página pessoal que reúne meus projetos e canais.',
      repo: GH_URL + '/joaofantindev',
      live: '',
      mock: 'code',
      tags: ['perfil', 'github']
    },
    {
      name: 'Git_ControleDeVersoes',
      problem: 'Estudos sobre Git e controle de versões na prática.',
      tech: 'Git, HTML',
      role: 'Anotações e exercícios de versionamento.',
      repo: GH_URL + '/Git_ControleDeVersoes',
      live: '',
      mock: 'git',
      tags: ['git', 'estudos']
    },
    {
      name: 'Formularios_com_Lazarus',
      problem: 'Formulários e painéis em Object Pascal com Lazarus.',
      tech: 'Object Pascal, Lazarus',
      role: 'Estudos de interface desktop com componentes nativos.',
      repo: GH_URL + '/Formularios_com_Lazarus',
      live: '',
      mock: 'kanban',
      tags: ['desktop', 'lazarus', 'ui']
    },
    {
      name: 'DelObjPascal',
      problem: 'Estudos de Delphi e Lazarus com Object Pascal.',
      tech: 'Object Pascal',
      role: 'Repositório pessoal de estudos.',
      repo: GH_URL + '/DelObjPascal',
      live: '',
      mock: 'code',
      tags: ['pascal', 'estudos']
    },
    {
      name: 'Estudos_Java',
      problem: 'Estudos completos em Java.',
      tech: 'Java',
      role: 'Repositório pessoal de estudos.',
      repo: GH_URL + '/Estudos_Java',
      live: '',
      mock: 'code',
      tags: ['java', 'estudos']
    },
    {
      name: 'SantoExpedito',
      problem: 'Sistema de gerenciamento para a casa de ração Santo Expedito.',
      tech: 'HTML, CSS, JavaScript',
      role: 'Projeto real de gestão, com dados sensíveis fora do repositório.',
      repo: GH_URL + '/SantoExpedito',
      live: '',
      mock: 'finance',
      tags: ['gestão', 'web']
    },
    {
      name: 'NailDesignProject',
      problem: 'Projeto voltado para profissionais de design de unhas.',
      tech: 'JavaScript, HTML, CSS',
      role: 'Projeto pessoal com foco em organização e atendimento.',
      repo: GH_URL + '/NailDesignProject',
      live: '',
      mock: 'kanban',
      tags: ['web app', 'design']
    },
    {
      name: 'Com_cpp_py',
      problem: 'Comunicação entre C++ e Python na prática.',
      tech: 'C++, Python',
      role: 'Experimento de integração entre as duas linguagens.',
      repo: GH_URL + '/Com_cpp_py',
      live: '',
      mock: 'code',
      tags: ['C++', 'Python', 'integração']
    },
    {
      name: 'Seco',
      problem: 'Firmware ZR1 escrito em C++.',
      tech: 'C++',
      role: 'Repositório pessoal de estudo em firmware.',
      repo: GH_URL + '/Seco',
      live: '',
      mock: 'code',
      tags: ['firmware', 'C++']
    }
  ];

  const SERVICES = [
    {
      icon: '<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',
      title: 'Desenvolvimento Web',
      desc: 'Aplicações web, APIs, sistemas e soluções com Ruby on Rails.',
      resolve: 'ideias e processos que ainda dependem de planilha ou trabalho manual.',
      tags: ['Rails', 'APIs', 'Web']
    },
    {
      icon: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
      title: 'Automação com Python',
      desc: 'Scripts, integração entre ferramentas e redução de tarefas repetitivas.',
      resolve: 'tempo perdido repetindo as mesmas tarefas todo dia.',
      tags: ['Python', 'Scripts', 'Integrações']
    },
    {
      icon: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
      title: 'SQL e Dados',
      desc: 'Consultas, estruturação relacional e manipulação de dados.',
      resolve: 'dados bagunçados ou difíceis de consultar.',
      tags: ['SQL', 'PostgreSQL', 'MySQL']
    },
    {
      icon: '<path d="M12 2l8 3v6c0 5-3.4 9.4-8 11-4.6-1.6-8-6-8-11V5z"/><path d="M9 12l2 2 4-4"/>',
      title: 'Infraestrutura e Segurança',
      desc: 'Redes, Linux, laboratórios, hardening, diagnóstico e estudos de segurança.',
      resolve: 'ambientes frágeis, mal configurados ou sem visibilidade.',
      tags: ['Linux', 'Redes', 'Hardening']
    }
  ];

  const STEPS = [
    ['Entender', 'Mapear o problema, o contexto e as restrições.'],
    ['Planejar', 'Definir escopo, prioridades e o caminho técnico.'],
    ['Desenvolver', 'Construir em entregas pequenas e verificáveis.'],
    ['Validar', 'Testar com uso real e ajustar o que for preciso.'],
    ['Melhorar', 'Documentar, monitorar e evoluir com segurança.']
  ];

  const STACK = [
    ['Desenvolvimento', ['Python', 'Ruby on Rails', 'JavaScript', 'Go', 'C / C++', 'Arduino']],
    ['Dados', ['SQL', 'PostgreSQL', 'MySQL']],
    ['Infraestrutura', ['Linux (Arch, Debian)', 'Bash', 'Docker', 'Kubernetes', 'Nginx', 'Git e GitHub']],
    ['Segurança', ['Kali Linux', 'Defesa Windows', 'Engenharia reversa (estudos)']]
  ];
  const EV = new Set(['JavaScript', 'C / C++', 'SQL', 'Defesa Windows', 'Engenharia reversa (estudos)']);

  const SOLUTIONS = [
    {
      icon: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 4 5.7 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.7-4-9s1.5-6.5 4-9z"/>',
      title: 'Site ou sistema na internet',
      desc: 'Aquela ideia ou negócio seu disponível de qualquer lugar, no celular ou no computador.'
    },
    {
      icon: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
      title: 'Programa para computador',
      desc: 'Um programa que roda direto na sua máquina, mesmo sem internet.'
    },
    {
      icon: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
      title: 'Aplicativo para celular',
      desc: 'Um app para seus clientes usarem de um jeito simples e prático.'
    },
    {
      icon: '<path d="M21 12a9 9 0 1 1-2.6-6.4M21 3v6h-6"/>',
      title: 'Tarefas no automático',
      desc: 'Aquela tarefa repetitiva que toma seu tempo passa a ser feita sozinha.'
    }
  ];

  const PLANS = [
    {
      name: 'Essencial',
      desc: 'Para começar sem gastar muito',
      mods: '1 a 2 módulos',
      price: 'a partir de R$ 800',
      hi: false,
      features: [
        'Uma página ou sistema simples pra tirar a ideia do papel',
        'Feito do seu jeito, com a sua cara',
        'Funciona bem no celular e no computador',
        'Um canal fácil pra seus clientes falarem com você',
        'Entrega rápida'
      ]
    },
    {
      name: 'Profissional',
      desc: 'Para quem quer crescer',
      mods: '3 a 5 módulos',
      price: 'a partir de R$ 2.000',
      hi: true,
      features: [
        'Área de login pra você e seus clientes',
        'Guarda e organiza suas informações com segurança',
        'Painel simples pra gerenciar tudo sozinho',
        'Tarefas do dia a dia feitas automaticamente',
        'Conecta com os programas que você já usa'
      ]
    },
    {
      name: 'Avançado',
      desc: 'O projeto completo',
      mods: '6+ módulos',
      price: 'sob consulta',
      hi: false,
      features: [
        'Site, programa de computador e/ou aplicativo',
        'Conversa com outros sistemas e serviços',
        'Relatórios e gráficos fáceis de entender',
        'Seus dados bem protegidos',
        'Suporte e melhorias contínuas'
      ]
    }
  ];

  /* Snapshot usado apenas se a API do GitHub não responder. */
  const FALLBACK_GH = {
    repos: 29,
    langs: [
      ['Python', 6], ['HTML', 6], ['JavaScript', 5], ['Outros', 4],
      ['C++', 3], ['C', 1], ['CSS', 1], ['Rust', 1], ['C#', 1], ['Go', 1]
    ],
    recent: [
      { name: 'SantoExpedito', lang: 'HTML', updated_at: '2026-10-19T14:10:42Z', url: GH_URL + '/SantoExpedito' },
      { name: 'NailDesignProject', lang: 'JavaScript', updated_at: '2026-10-18T17:36:53Z', url: GH_URL + '/NailDesignProject' },
      { name: 'joaofantindev', lang: 'HTML', updated_at: '2026-10-17T18:02:34Z', url: GH_URL + '/joaofantindev' },
      { name: 'Com_cpp_py', lang: 'C++', updated_at: '2026-10-16T02:15:26Z', url: GH_URL + '/Com_cpp_py' }
    ],
    snapshotAt: '2026-10-19T14:10:42Z',
    live: false
  };

  /* ===== utilitários ===== */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pad = (n) => String(n).padStart(2, '0');
  const icon = (paths, cls = 'ic') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

  let toastTimer;
  let refreshCarousel = () => {};
  function toast(message) {
    const el = $('#toast');
    if (!el) return;
    el.textContent = message;
    el.classList.add('on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('on'), 2200);
  }

  function timeAgo(dateString) {
    const then = new Date(dateString).getTime();
    if (!Number.isFinite(then)) return '';
    const diff = Math.max(0, Date.now() - then);
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'agora';
    if (mins < 60) return `há ${mins} min`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `há ${hours} h`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `há ${days} d`;
    const months = Math.floor(days / 30);
    return `há ${months} ${months === 1 ? 'mês' : 'meses'}`;
  }

  function animateCount(el, target, duration = 1300) {
    if (!el) return;
    el.dataset.count = String(target);
    if (REDUCED || !window.anime) { el.textContent = target; return; }
    const state = { value: 0 };
    window.anime.animate(state, {
      value: target,
      duration,
      ease: 'outExpo',
      onUpdate: () => {
        if (el.dataset.count !== String(target)) return;
        el.textContent = Math.round(state.value);
      },
      onComplete: () => {
        if (el.dataset.count === String(target)) el.textContent = target;
      }
    });
  }

  function whenVisible(el, callback, amount = 0.22) {
    if (!el) { callback(); return; }
    let done = false;
    const run = () => { if (done) return; done = true; callback(); };
    const Motion = window.Motion;
    if (Motion && typeof Motion.inView === 'function') {
      let stop;
      stop = Motion.inView(el, () => { run(); if (stop) stop(); }, { amount });
      return;
    }
    if (!('IntersectionObserver' in window)) { run(); return; }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) { run(); io.disconnect(); }
    }, { threshold: amount });
    io.observe(el);
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      toast('E-mail copiado');
    } catch (error) {
      const area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      try { document.execCommand('copy'); toast('E-mail copiado'); }
      catch (fallbackError) { toast('Não foi possível copiar'); }
      area.remove();
    }
  }

  /* ===== mocks dos projetos ===== */
  function browserChrome(label) {
    return `<div class="browser"><span class="browser-dots"><b></b><b></b><b></b></span><span>${esc(label)}</span></div>`;
  }

  function projectMock(type) {
    if (type === 'finance') {
      const heights = [34, 52, 43, 68, 49, 74, 58, 86, 64, 78, 92, 70];
      const bars = heights.map((h) => `<span style="--h:${h}%"></span>`).join('');
      return `<div class="project-media" aria-hidden="true">${browserChrome('findek.local')}
        <div class="mock mock-finance">
          <div class="mf-head"><span class="mf-kicker">saldo total</span><strong>R$ 12.480</strong><span class="mf-up">+8,2%</span></div>
          <div class="mf-chart">${bars}</div>
          <div class="mf-rows">
            <div><span class="mf-dot"></span><span class="mf-line"></span><b>R$ 3.200</b></div>
            <div><span class="mf-dot"></span><span class="mf-line"></span><b>R$ 1.840</b></div>
          </div>
        </div>
      </div>`;
    }
    if (type === 'terminal') {
      return `<div class="project-media" aria-hidden="true">${browserChrome('winctf.lab')}
        <div class="mock mock-term">
          <span class="mt-line"><span class="mt-p">PS C:\\&gt;</span> Get-WinEvent -LogName Security</span>
          <span class="mt-line ok">[+] 3 eventos críticos encontrados</span>
          <span class="mt-line dim">Event ID 4625 · logon failure</span>
          <span class="mt-line dim">Event ID 4672 · special privileges</span>
          <span class="mt-line ok">[+] relatório gerado</span>
          <span class="mt-line"><span class="mt-p">PS C:\\&gt;</span> <span class="mt-cursor"></span></span>
        </div>
      </div>`;
    }
    if (type === 'git') {
      return `<div class="project-media" aria-hidden="true">${browserChrome('git / controle de versões')}
        <div class="mock mock-term">
          <span class="mt-line"><span class="mt-p">$</span> git status</span>
          <span class="mt-line dim">On branch main · nothing to commit</span>
          <span class="mt-line"><span class="mt-p">$</span> git log --oneline -3</span>
          <span class="mt-line ok">a1b2c3d estudo: branches e merges</span>
          <span class="mt-line dim">9f8e7d6 exercícios de versionamento</span>
          <span class="mt-line dim">4c5d6e7 primeiro commit</span>
          <span class="mt-line"><span class="mt-p">$</span> <span class="mt-cursor"></span></span>
        </div>
      </div>`;
    }
    if (type === 'kanban') {
      return `<div class="project-media" aria-hidden="true">${browserChrome('studytrack.app')}
        <div class="mock mock-kanban">
          <div class="mk-col"><span class="mk-title">estudar</span><i></i><i></i><i></i></div>
          <div class="mk-col"><span class="mk-title">em curso</span><i class="y"></i><i></i></div>
          <div class="mk-col"><span class="mk-title">feito</span><i class="y"></i><i></i><i></i></div>
        </div>
      </div>`;
    }
    if (type === 'code') {
      return `<div class="project-media" aria-hidden="true">${browserChrome('basic_to_advanced.c')}
        <div class="mock mock-code">
          <span class="mc-line"><span class="mc-n">1</span><span class="mc-k">#include</span> <span class="mc-s">&lt;stdio.h&gt;</span></span>
          <span class="mc-line"><span class="mc-n">2</span><span class="mc-k">int</span> <span class="mc-f">main</span>(<span class="mc-k">void</span>) {</span>
          <span class="mc-line"><span class="mc-n">3</span>  <span class="mc-k">char</span> buffer[<span class="mc-s">64</span>];</span>
          <span class="mc-line"><span class="mc-n">4</span>  <span class="mc-f">puts</span>(<span class="mc-s">"build &amp; break"</span>);</span>
          <span class="mc-line"><span class="mc-n">5</span>  <span class="mc-k">return</span> <span class="mc-s">0</span>;</span>
          <span class="mc-line"><span class="mc-n">6</span>}</span>
          <span class="mc-line"><span class="mc-n">7</span><span class="mc-c">// próximo: engenharia reversa</span></span>
        </div>
      </div>`;
    }
    if (type === 'sql') {
      return `<div class="project-media" aria-hidden="true">${browserChrome('sql_study / casos')}
        <div class="mock mock-sql">
          <div class="ms-query"><span class="mc-k">SELECT</span> nome, total <span class="mc-k">FROM</span> pedidos <span class="mc-k">WHERE</span> total &gt; 100;</div>
          <div class="ms-table">
            <div class="ms-row ms-th"><span>nome</span><span>total</span></div>
            <div class="ms-row"><span>Ana</span><span>120</span></div>
            <div class="ms-row"><span>Bruno</span><span>340</span></div>
            <div class="ms-row"><span>Carla</span><span>87</span></div>
          </div>
        </div>
      </div>`;
    }
    return '';
  }

  /* ===== renderizações ===== */
  const SERVICE_TABS = ['Desenvolvimento Web', 'Automação', 'SQL e Dados', 'Infra e Segurança'];
  const SERVICE_BG = ['bg-forest', 'bg-teal', 'bg-moss', 'bg-desert'];
  const SERVICE_METRIC = ['Rails · APIs', 'Python · scripts', 'SQL · dados', 'Linux · defesa'];

  function renderServices() {
    const root = $('#servicesGrid');
    const tabsRoot = $('#servicesTabs');
    if (!root || !tabsRoot) return;

    tabsRoot.innerHTML = SERVICES.map((service, i) => `
      <button class="tab${i === 0 ? ' active' : ''}" id="serviceTab${i}" type="button" role="tab"
        aria-selected="${i === 0}" aria-controls="servicePanel${i}" tabindex="${i === 0 ? 0 : -1}">
        ${esc(SERVICE_TABS[i] || service.title)}
      </button>
    `).join('');

    root.innerHTML = SERVICES.map((service, i) => `
      <article class="service-card panel${i === 0 ? ' on' : ''}" id="servicePanel${i}" role="tabpanel"
        aria-labelledby="serviceTab${i}" data-spotlight style="--d:${i * 60}ms"${i === 0 ? '' : ' hidden'}>
        <div class="service-copy">
          <span class="metric-pill">${esc(SERVICE_METRIC[i] || 'serviço')}</span>
          <h3>${esc(service.title)}</h3>
          <p class="service-sub">${esc(service.desc)}</p>
          <p class="service-desc"><span>resolve</span> ${esc(service.resolve)}</p>
          <div class="tag-row">${service.tags.map((tag) => `<span class="chip">${esc(tag)}</span>`).join('')}</div>
          <a class="card-link" href="#contato">Conversar sobre isso ${icon('<path d="M5 12h14M13 6l6 6-6 6"/>')}</a>
        </div>
        <div class="service-visual ${SERVICE_BG[i] || 'bg-forest'}" aria-hidden="true">
          <div class="mini-window">
            <div class="mini-bar"><b></b><b></b><b></b><span>${esc(service.title)}</span></div>
            <div class="mini-body">
              <span class="mini-icon">${icon(service.icon)}</span>
              <span class="mini-line"></span>
              <span class="mini-line short"></span>
              <span class="mini-line mid"></span>
              <span class="mini-tag">${esc(service.tags[0])}</span>
            </div>
          </div>
        </div>
      </article>
    `).join('');

    const tabs = $$('.tab', tabsRoot);
    const activate = (index) => {
      tabs.forEach((tab, i) => {
        const on = i === index;
        tab.classList.toggle('active', on);
        tab.setAttribute('aria-selected', String(on));
        tab.tabIndex = on ? 0 : -1;
      });
      $$('.service-card', root).forEach((panel, i) => {
        const on = i === index;
        panel.classList.toggle('on', on);
        panel.hidden = !on;
      });
    };
    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => activate(i));
      tab.addEventListener('keydown', (event) => {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
        event.preventDefault();
        const next = (i + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
        activate(next);
        tabs[next].focus();
      });
    });
  }

  const MOCK_BY_REPO = {
    findek: 'finance',
    studytrack: 'kanban',
    windowscf: 'terminal',
    windowsctf: 'terminal',
    naildesignproject: 'kanban',
    santoexpedito: 'finance',
    sql_study: 'sql',
    multiscreenpascal: 'kanban',
    formularios_com_lazarus: 'kanban',
    delobjpascal: 'code',
    git_controledeversoes: 'git',
    estudos_java: 'code',
    com_cpp_py: 'code',
    seco: 'code',
    joaofantindev: 'code'
  };

  function mockForRepo(repo) {
    const byName = MOCK_BY_REPO[String(repo.name || '').toLowerCase()];
    if (byName) return byName;
    const lang = String(repo.language || '').toLowerCase();
    if (lang === 'sql') return 'sql';
    if (lang === 'python') return 'terminal';
    if (['javascript', 'typescript', 'html', 'css'].includes(lang)) return 'kanban';
    if (['c', 'c++', 'java', 'pascal', 'rust', 'go', 'c#'].includes(lang)) return 'code';
    return 'finance';
  }

  function projectFromRepo(repo) {
    const lang = repo.language || 'GitHub';
    const topics = Array.isArray(repo.topics) ? repo.topics : [];
    const tags = [lang, ...topics.slice(0, 2), 'público'].filter(Boolean).slice(0, 3);
    return {
      name: repo.name,
      problem: repo.description || 'Projeto público no meu GitHub.',
      tech: [lang, ...topics.slice(0, 1)].join(' · '),
      role: `Repositório público · atualizado ${timeAgo(repo.updated_at)}`,
      repo: repo.html_url,
      live: repo.homepage || '',
      mock: mockForRepo(repo),
      tags
    };
  }

  function renderProjects(projects = PROJECTS) {
    const car = $('#car');
    if (!car) return;
    car.innerHTML = projects.map((project, i) => `
      <div class="slide" role="group" aria-roledescription="slide" aria-label="${i + 1} de ${projects.length}">
        <article class="project-card">
          <div class="project-body">
            <span class="metric-pill">case ${pad(i + 1)}</span>
            <h3>${esc(project.name)}</h3>
            <p class="project-problem">${esc(project.problem)}</p>
            <dl class="project-meta">
              <div><dt>tecnologias</dt><dd>${esc(project.tech)}</dd></div>
              <div><dt>minha contribuição</dt><dd>${esc(project.role)}</dd></div>
            </dl>
            <div class="tag-row">${project.tags.map((tag) => `<span class="chip">${esc(tag)}</span>`).join('')}</div>
            <div class="project-links">
              ${project.repo ? `<a class="card-link" href="${esc(project.repo)}" target="_blank" rel="noopener noreferrer">Ver no GitHub ${icon('<path d="M7 17L17 7M8 7h9v9"/>')}</a>` : ''}
              ${project.live ? `<a class="card-link" href="${esc(project.live)}" target="_blank" rel="noopener noreferrer">Demo ${icon('<path d="M7 17L17 7M8 7h9v9"/>')}</a>` : '<span class="muted">demo em breve</span>'}
            </div>
          </div>
          <div class="project-visual">${projectMock(project.mock)}</div>
        </article>
      </div>
    `).join('');
    car.scrollLeft = 0;
    refreshCarousel();
  }

  function renderProcess() {
    const root = $('#processGrid');
    if (!root) return;
    const plus = icon('<path d="M12 5v14M5 12h14"/>');
    root.innerHTML = STEPS.map(([title, desc], i) => `
      <details class="process-item rv" style="--d:${i * 60}ms"${i === 0 ? ' open' : ''}>
        <summary>
          <span class="process-num">${pad(i + 1)}</span>
          <span class="process-title">${esc(title)}</span>
          <span class="process-toggle" aria-hidden="true">${plus}</span>
        </summary>
        <div class="process-body"><p>${esc(desc)}</p></div>
      </details>
    `).join('');
  }

  function renderStack() {
    const root = $('#stackGrid');
    if (!root) return;
    root.innerHTML = STACK.map(([name, items], i) => `
      <article class="stack-card rv" style="--d:${i * 70}ms">
        <div class="stack-head"><h3>${esc(name)}</h3><span class="stack-index">${pad(i + 1)}</span></div>
        <ul>${items.map((item) => `<li${EV.has(item) ? ' class="ev"' : ''}>${esc(item)}</li>`).join('')}</ul>
      </article>
    `).join('');

    const track = $('#tickerTrack');
    if (track) {
      const all = STACK.flatMap((entry) => entry[1]);
      track.innerHTML = all.map((item) => `<span class="ticker-item">${esc(item)}</span>`).join('')
        + all.map((item) => `<span class="ticker-item" aria-hidden="true">${esc(item)}</span>`).join('');
    }
  }

  function renderSolutions() {
    const root = $('#solutionsGrid');
    if (!root) return;
    root.innerHTML = SOLUTIONS.map((item, i) => `
      <article class="solution-card rv" data-spotlight style="--d:${i * 70}ms">
        <span class="icon-box">${icon(item.icon)}</span>
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.desc)}</p>
      </article>
    `).join('');
  }

  function renderPlans() {
    const root = $('#plansGrid');
    if (!root) return;
    const check = icon('<path d="M5 12l4 4L19 6"/>', 'check');
    root.innerHTML = PLANS.map((plan, i) => `
      <article class="plan${plan.hi ? ' hi' : ''} rv" data-spotlight style="--d:${i * 80}ms">
        ${plan.hi ? '<span class="plan-badge">mais escolhido</span>' : ''}
        <h3>${esc(plan.name)}</h3>
        <p class="plan-desc">${esc(plan.desc)}</p>
        <div class="plan-price">${esc(plan.price)}</div>
        <span class="plan-mods">${esc(plan.mods)}</span>
        <ul>${plan.features.map((feature) => `<li>${check}<span>${esc(feature)}</span></li>`).join('')}</ul>
        <a class="btn ${plan.hi ? 'btn-primary' : 'btn-outline'}" href="#contato"><span>Quero uma proposta</span></a>
      </article>
    `).join('');
  }

  function renderContact() {
    const actions = $('#contactActions');
    const list = $('#contactList');
    const note = $('#configNote');
    if (!actions || !list) return;

    const has = (value) => Boolean(value && String(value).trim());
    const waMessage = encodeURIComponent('Olá! Vi seu portfólio e quero conversar sobre um projeto.');
    const wa = has(CONFIG.whatsapp) ? `https://wa.me/${CONFIG.whatsapp}?text=${waMessage}` : '';
    const mail = has(CONFIG.email) ? `mailto:${CONFIG.email}?subject=${encodeURIComponent('Projeto / orçamento')}` : '';
    const channels = [
      { label: 'WhatsApp', href: wa, icon: '<path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.5-4.9A8.5 8.5 0 1 1 20.5 11.5z"/><path d="M8.5 9.5c.5 3 2 4.5 5 5l1.5-1.5 1.5 1.5c-1 1.5-2.5 2-4 1.5-2.5-1-4.5-3-5.5-5.5-.5-1.5 0-3 1.5-4l1.5 1.5z"/>', primary: true },
      { label: 'E-mail', href: mail, icon: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>' },
      { label: 'GitHub', href: CONFIG.github, icon: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9c0-1.1.4-2 1-2.6-3.3-.4-6.8-1.6-6.8-7.3 0-1.6.6-2.9 1.5-3.9-.1-.4-.7-1.9.1-3.9 0 0 1.2-.4 4 1.5a13.9 13.9 0 0 1 7.2 0c2.8-1.9 4-1.5 4-1.5.8 2 .2 3.5.1 3.9.9 1 1.5 2.3 1.5 3.9 0 5.7-3.5 6.9-6.8 7.3.6.6 1 1.5 1 2.6V21"/>' },
      { label: 'LinkedIn', href: CONFIG.linkedin, icon: '<path d="M4.5 9.5v9M4.5 5.5v.01M9.5 18.5v-5a2.5 2.5 0 0 1 5 0v5M9.5 9.5v9"/>' }
    ];

    actions.innerHTML = channels.map((channel) => {
      if (!has(channel.href)) return `<span class="btn btn-outline" aria-disabled="true"><span>${esc(channel.label)}</span></span>`;
      return `<a class="btn ${channel.primary ? 'btn-primary' : 'btn-outline'}" href="${esc(channel.href)}" ${channel.href.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}><span>${esc(channel.label)}</span>${channel.primary ? icon('<path d="M5 12h14M13 6l6 6-6 6"/>') : ''}</a>`;
    }).join('');

    if (has(CONFIG.email)) {
      const copy = document.createElement('button');
      copy.className = 'btn btn-outline';
      copy.type = 'button';
      copy.innerHTML = `<span>Copiar e-mail</span>${icon('<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>')}`;
      copy.addEventListener('click', () => copyText(CONFIG.email));
      actions.appendChild(copy);
    }

    list.innerHTML = channels.map((channel) => {
      const value = channel.label === 'E-mail' ? CONFIG.email : (channel.href || 'não configurado');
      const action = channel.label === 'E-mail'
        ? `<button type="button" data-copy="${esc(CONFIG.email)}">copiar</button>`
        : (channel.href ? `<a href="${esc(channel.href)}" ${channel.href.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>abrir</a>` : '<span>—</span>');
      return `<li class="contact-row">${icon(channel.icon)}<span>${esc(value)}</span>${action}</li>`;
    }).join('');

    list.addEventListener('click', (event) => {
      const button = event.target.closest('[data-copy]');
      if (button) copyText(button.dataset.copy);
    });

    if (note && !Object.values(CONFIG).every(has)) note.hidden = false;
  }

  /* ===== inicialização da interface ===== */
  function initTheme() {
    const root = document.documentElement;
    const button = $('#themeBtn');
    const meta = $('meta[name="theme-color"]');
    const sync = () => {
      const dark = root.dataset.theme === 'dark';
      if (button) {
        button.setAttribute('aria-pressed', String(dark));
        button.setAttribute('aria-label', dark ? 'Ativar tema claro' : 'Ativar tema escuro');
      }
      if (meta) meta.setAttribute('content', dark ? '#0b0f0c' : '#f2f4f2');
    };
    sync();
    if (!button) return;
    button.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('fantin-theme', next); } catch (error) { /* modo privado */ }
      sync();
    });
  }

  function initParallax() {
    if (REDUCED) return;
    const items = $$('[data-parallax]').map((el) => ({ el, factor: Number(el.dataset.parallax) || 0.05 }));
    if (!items.length) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      items.forEach(({ el, factor }) => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -160 || rect.top > vh + 160) return;
        const offset = Math.max(-28, Math.min(28, (rect.top + rect.height / 2 - vh / 2) * factor));
        el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    update();
  }

  function initYear() {
    const year = $('#year');
    if (year) year.textContent = new Date().getFullYear();
  }

  function initMenu() {
    const button = $('#menuBtn');
    const menu = $('#mobileMenu');
    const header = $('#header');
    if (!button || !menu) return;

    const close = () => {
      menu.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Abrir menu');
      document.body.classList.remove('menu-open');
    };
    const open = () => {
      menu.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('aria-label', 'Fechar menu');
      document.body.classList.add('menu-open');
    };

    button.addEventListener('click', () => {
      if (menu.classList.contains('open')) close(); else open();
    });
    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) close();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') close();
    });
    document.addEventListener('click', (event) => {
      if (!menu.classList.contains('open')) return;
      if (header && !header.contains(event.target)) close();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1080) close();
    });
  }

  function initHero() {
    if (REDUCED || !window.anime) {
      document.documentElement.classList.remove('js');
      return;
    }
    try {
      const anime = window.anime;
      anime.animate('.hero-title .word', {
        opacity: [0, 1],
        y: [22, 0],
        rotateX: [-40, 0]
      }, {
        duration: 900,
        delay: anime.stagger(45, { start: 160 }),
        ease: 'outExpo'
      });
      anime.animate('.hero-fade', {
        opacity: [0, 1],
        y: [14, 0]
      }, {
        duration: 800,
        delay: anime.stagger(90, { start: 480 }),
        ease: 'outExpo'
      });
      anime.animate('#heroMedia', {
        opacity: [0, 1],
        scale: [0.965, 1]
      }, {
        duration: 1000,
        delay: 620,
        ease: 'outExpo'
      });
    } catch (error) {
      document.documentElement.classList.remove('js');
    }
  }

  function initTerminal() {
    const terminal = $('#terminal');
    if (!terminal) return;
    const lines = [
      ['c', '$ rails generate scaffold Cliente nome:string'],
      ['m', '      create  app/models/cliente.rb'],
      ['c', '$ python automacao/relatorio.py --mes atual'],
      ['m', '[+] 128 linhas processadas, relatório gerado'],
      ['c', '$ psql -c "SELECT count(*) FROM pedidos;"'],
      ['m', ' count\n-------\n    42'],
      ['c', '$ sudo ufw status | head -n 3'],
      ['m', 'Status: active']
    ];

    const render = (count) => {
      terminal.innerHTML = lines.slice(0, count)
        .map(([cls, text]) => `<span class="tl ${cls}">${esc(text)}</span>`)
        .join('') + '<span class="tl"><span class="cursor"></span></span>';
      const nodes = terminal.querySelectorAll('.tl');
      const last = nodes[Math.max(0, count - 1)];
      if (last && window.anime && !REDUCED) {
        window.anime.animate(last, { opacity: [0, 1], x: [-6, 0] }, { duration: 260, ease: 'outQuad' });
      }
    };

    if (REDUCED) { render(lines.length); return; }
    let index = 1;
    render(index);
    const timer = setInterval(() => {
      index += 1;
      render(index);
      if (index >= lines.length) clearInterval(timer);
    }, 900);
  }

  function initReveals() {
    const items = $$('.rv');

    /* Após a revelação, remove .rv/.in para que as transições de hover e o
       transform controlado pelo Motion voltem a pertencer ao componente. */
    const reveal = (el) => {
      if (!el || el.classList.contains('in')) return;
      el.classList.add('in');
      if (!el.classList.contains('rv')) return;
      const raw = String(getComputedStyle(el).getPropertyValue('--d')).trim();
      let delayMs = 0;
      if (/ms$/.test(raw)) delayMs = parseFloat(raw) || 0;
      else if (/s$/.test(raw)) delayMs = (parseFloat(raw) || 0) * 1000;
      setTimeout(() => {
        el.classList.remove('rv', 'in');
        if (el.hasAttribute('data-tilt')) el.classList.add('tilt-ready');
      }, delayMs + 820);
    };

    if (!('IntersectionObserver' in window)) {
      items.forEach(reveal);
    } else {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          io.unobserve(entry.target);
        });
      }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
      items.forEach((el) => io.observe(el));
    }

    const timeline = $('#aboutTimeline');
    if (timeline) whenVisible(timeline, () => timeline.classList.add('in'), 0.2);
    const process = $('#processGrid');
    if (process) whenVisible(process, () => process.classList.add('in'), 0.2);
  }

  /* Luz que acompanha o cursor nos cards com data-spotlight */
  function initSpotlights() {
    if (!FINE_POINTER) return;
    $$('[data-spotlight]').forEach((el) => {
      el.addEventListener('pointermove', (event) => {
        if (event.pointerType !== 'mouse') return;
        const rect = el.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / Math.max(1, rect.width)) * 100;
        const y = ((event.clientY - rect.top) / Math.max(1, rect.height)) * 100;
        el.style.setProperty('--mx', `${x.toFixed(1)}%`);
        el.style.setProperty('--my', `${y.toFixed(1)}%`);
      }, { passive: true });
    });
  }

  function initIconDraw() {
    if (REDUCED || !window.anime) return;
    $$('.service-card').forEach((card) => {
      whenVisible(card, () => {
        const shapes = $$('.ic path, .ic ellipse', card);
        shapes.forEach((shape, i) => {
          if (typeof shape.getTotalLength !== 'function') return;
          const length = shape.getTotalLength();
          if (!length) return;
          shape.style.strokeDasharray = String(length);
          shape.style.strokeDashoffset = String(length);
          window.anime.animate(shape, { strokeDashoffset: [length, 0] }, {
            duration: 850,
            delay: 120 + i * 110,
            ease: 'inOutSine'
          });
        });
      }, 0.3);
    });
  }

  function initStats() {
    const strip = $('.stats-strip');
    if (strip) {
      whenVisible(strip, () => {
        $$('[data-stat]', strip).forEach((el, i) => {
          const target = Number(String(el.textContent).replace(/[^\d]/g, '')) || 0;
          setTimeout(() => animateCount(el, target), i * 90);
        });
      }, 0.35);
    }
    $$('.hero-quick [data-count]').forEach((el, i) => {
      const target = Number(el.dataset.count) || 0;
      setTimeout(() => animateCount(el, target), 900 + i * 130);
    });
  }

  function initCarousel() {
    const car = $('#car');
    const prev = $('#prevBtn');
    const next = $('#nextBtn');
    const count = $('#carCount');
    const bar = $('#carBar');
    if (!car || !prev || !next) return;

    let slides = $$('.slide', car);
    if (!slides.length) return;

    const gap = 24;
    const perView = () => 1;
    const step = () => (slides[0] ? slides[0].getBoundingClientRect().width + gap : car.clientWidth);

    const update = () => {
      const n = slides.length;
      if (!n) return;
      const v = perView();
      const index = Math.round(car.scrollLeft / step());
      const max = Math.max(0, car.scrollWidth - car.clientWidth - 2);
      if (count) count.textContent = `${pad(Math.min(index + 1, n))} / ${pad(n)}`;
      prev.disabled = car.scrollLeft <= 2;
      next.disabled = car.scrollLeft >= max;
      if (bar) {
        const width = Math.min(100, (v / n) * 100);
        const travel = 100 - width;
        bar.style.width = `${width}%`;
        bar.style.marginLeft = `${n > v ? (index / (n - v)) * travel : 0}%`;
      }
    };

    refreshCarousel = () => {
      slides = $$('.slide', car);
      car.scrollLeft = 0;
      update();
    };

    const go = (direction) => {
      car.scrollBy({ left: direction * step(), behavior: REDUCED ? 'auto' : 'smooth' });
    };

    let frame = 0;
    car.addEventListener('scroll', () => {
      if (frame) return;
      frame = requestAnimationFrame(() => { frame = 0; update(); });
    }, { passive: true });

    prev.addEventListener('click', () => go(-1));
    next.addEventListener('click', () => go(1));
    car.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') { event.preventDefault(); go(1); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); go(-1); }
    });

    let dragging = false;
    let startX = 0;
    let startLeft = 0;
    let moved = 0;
    car.addEventListener('pointerdown', (event) => {
      if (event.pointerType !== 'mouse') return;
      dragging = true;
      startX = event.clientX;
      startLeft = car.scrollLeft;
      moved = 0;
      car.classList.add('dragging');
      if (car.setPointerCapture) car.setPointerCapture(event.pointerId);
    });
    car.addEventListener('pointermove', (event) => {
      if (!dragging) return;
      const delta = event.clientX - startX;
      moved = Math.max(moved, Math.abs(delta));
      car.scrollLeft = startLeft - delta;
    });
    const endDrag = () => {
      if (!dragging) return;
      dragging = false;
      car.classList.remove('dragging');
      const target = Math.round(car.scrollLeft / step()) * step();
      car.scrollTo({ left: target, behavior: REDUCED ? 'auto' : 'smooth' });
    };
    car.addEventListener('pointerup', endDrag);
    car.addEventListener('pointercancel', endDrag);
    car.addEventListener('click', (event) => {
      if (moved > 6) { event.preventDefault(); event.stopPropagation(); }
    }, true);

    window.addEventListener('resize', update);
    if ('ResizeObserver' in window) new ResizeObserver(update).observe(car);
    update();
  }

  function initTicker() {
    const button = $('#pauseTicker');
    const ticker = $('#ticker');
    if (!button || !ticker) return;
    button.addEventListener('click', () => {
      const paused = ticker.classList.toggle('paused');
      button.setAttribute('aria-pressed', String(paused));
      const label = button.querySelector('span');
      if (label) label.textContent = paused ? 'Retomar ticker' : 'Pausar ticker';
    });
  }

  function initScrollUI() {
    const header = $('#header');
    const progress = $('#progress');
    const sectionIds = ['inicio', 'sobre', 'servicos', 'projetos', 'painel', 'stack', 'clientes', 'contato'];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const links = $$('.nav-links a');
    let frame = 0;

    const updateActiveNav = () => {
      if (!sections.length) return;
      const marker = window.scrollY + 130;
      let current = sections[0].id;
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) current = section.id;
      });
      links.forEach((link) => {
        const active = link.getAttribute('href') === `#${current}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (header) header.classList.toggle('scrolled', window.scrollY > 8);
        if (!window.Motion && progress) {
          const max = document.documentElement.scrollHeight - window.innerHeight;
          progress.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
        }
        updateActiveNav();
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateActiveNav);
    onScroll();
  }

  /* ===== GitHub: painel com dados reais ===== */
  const GH_CACHE = 'fantin-gh-v1';

  function readCache() {
    try {
      const raw = sessionStorage.getItem(GH_CACHE);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed || !parsed.data || Date.now() - parsed.t > 30 * 60 * 1000) return null;
      return parsed.data;
    } catch (error) { return null; }
  }

  function writeCache(data) {
    try { sessionStorage.setItem(GH_CACHE, JSON.stringify({ t: Date.now(), data })); }
    catch (error) { /* modo privado / file:// */ }
  }

  async function fetchGitHub(url, signal) {
    const response = await fetch(url, {
      signal,
      headers: { Accept: 'application/vnd.github+json' }
    });
    if (!response.ok) throw new Error(`GitHub ${response.status}`);
    return response.json();
  }

  const DONUT_COLORS = ['#255a41', '#3d8c66', '#78a890', '#b9cbb9', '#d7ddd2', '#a88c5c'];

  function renderDashboard(data) {
    const langs = Array.isArray(data.langs) ? data.langs : [];
    const total = Number(data.repos) || langs.reduce((sum, entry) => sum + entry[1], 0) || 1;
    const named = langs.filter(([name]) => name !== 'Outros');
    const outros = langs.filter(([name]) => name === 'Outros').reduce((sum, entry) => sum + entry[1], 0)
      + named.slice(6).reduce((sum, entry) => sum + entry[1], 0);
    const rows = named.slice(0, 6);
    if (outros > 0) rows.push(['Outros', outros]);
    const max = Math.max(...rows.map((entry) => entry[1]), 1);

    const bars = $('#langBars');
    if (bars) {
      bars.innerHTML = rows.map(([name, value]) => {
        const pct = Math.round((value / total) * 100);
        return `<div class="bar-row" title="${pct}% dos repositórios"><span class="bar-label">${esc(name)}</span><span class="bar-track"><span class="bar-fill" data-scale="${(value / max).toFixed(3)}"></span></span><span class="bar-value">${value}</span></div>`;
      }).join('');
      whenVisible(bars, () => {
        $$('.bar-fill', bars).forEach((fill, i) => {
          const scale = Number(fill.dataset.scale) || 0;
          if (window.anime && !REDUCED) {
            window.anime.animate(fill, { scaleX: [0, scale] }, { duration: 900, delay: i * 70, ease: 'outExpo' });
          } else {
            fill.style.transform = `scaleX(${scale})`;
          }
        });
      }, 0.2);
    }

    const langFoot = $('#langFoot');
    const langCount = langs.filter(([name]) => name !== 'Outros').length;
    if (langFoot) langFoot.textContent = `${total} repositórios · ${langCount} linguagens`;

    const donutSvg = $('#donutSvg');
    if (donutSvg) {
      const donutRows = named.slice(0, 5);
      const rest = named.slice(5).reduce((sum, entry) => sum + entry[1], 0)
        + langs.filter(([name]) => name === 'Outros').reduce((sum, entry) => sum + entry[1], 0);
      if (rest > 0) donutRows.push(['Outros', rest]);

      const radius = 64;
      const circumference = 2 * Math.PI * radius;
      let current = 0;
      let markup = `<circle class="donut-bg" cx="90" cy="90" r="${radius}"></circle>`;
      donutRows.forEach((entry, i) => {
        const [name, value] = entry;
        const length = (value / total) * circumference;
        const angle = (current / total) * 360;
        current += value;
        markup += `<circle class="donut-seg" cx="90" cy="90" r="${radius}" stroke="${DONUT_COLORS[i % DONUT_COLORS.length]}" stroke-dasharray="${length} ${circumference}" stroke-dashoffset="${length}" transform="rotate(${angle} 90 90)"><title>${esc(name)}: ${value}</title></circle>`;
      });
      donutSvg.innerHTML = markup;

      whenVisible(donutSvg, () => {
        $$('.donut-seg', donutSvg).forEach((segment, i) => {
          const offset = Number(segment.getAttribute('stroke-dashoffset')) || 0;
          if (window.anime && !REDUCED) {
            window.anime.animate(segment, { strokeDashoffset: [offset, 0] }, { duration: 1000, delay: i * 90, ease: 'outExpo' });
          } else {
            segment.setAttribute('stroke-dashoffset', '0');
          }
        });
      }, 0.2);

      const legend = $('#langLegend');
      if (legend) {
        legend.innerHTML = donutRows.map(([name, value], i) => `
          <li><i style="background:${DONUT_COLORS[i % DONUT_COLORS.length]}" aria-hidden="true"></i><span>${esc(name)}</span><b>${value}</b></li>
        `).join('');
      }

      const center = $('#donutTotal');
      if (center) {
        center.textContent = total;
        whenVisible(center, () => animateCount(center, total, 1100), 0.2);
      }
    }

    const recentRoot = $('#recentRepos');
    if (recentRoot) {
      const recent = Array.isArray(data.recent) ? data.recent : [];
      recentRoot.innerHTML = recent.map((repo) => `
        <a class="recent-item" href="${esc(repo.url)}" target="_blank" rel="noopener noreferrer">
          <span class="recent-icon" aria-hidden="true">${esc(String(repo.lang || '?').slice(0, 2).toUpperCase())}</span>
          <span class="recent-main"><b>${esc(repo.name)}</b><span>${esc(repo.lang || '—')} · ${esc(timeAgo(repo.updated_at))}</span></span>
          <span class="recent-arrow">${icon('<path d="M7 17L17 7M8 7h9v9"/>')}</span>
        </a>
      `).join('');
    }

    const badge = $('#ghStatus');
    if (badge) {
      badge.classList.toggle('snapshot', !data.live);
      badge.innerHTML = `<span class="dot"></span> ${data.live ? 'ao vivo' : 'snapshot'}`;
    }

    const sync = $('#syncTime');
    if (sync) {
      const stamp = data.fetchedAt ? new Date(data.fetchedAt) : new Date();
      sync.textContent = data.live
        ? `sincronizado às ${stamp.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`
        : `snapshot de ${stamp.toLocaleDateString('pt-BR')}`;
    }

    $$('[data-stat="repos"], [data-live="repos"]').forEach((el) => {
      el.textContent = total;
      if (el.dataset.count !== undefined) el.dataset.count = String(total);
    });
    $$('[data-stat="langs"]').forEach((el) => {
      el.textContent = langCount;
      el.dataset.count = String(langCount);
    });
  }

  function applyFeatured(data) {
    const featured = Array.isArray(data.featured) ? data.featured : [];
    if (!featured.length) return;
    renderProjects(featured);
    $$('[data-stat="projects"]').forEach((el) => { el.textContent = featured.length; });
  }

  async function loadGitHub() {
    const cached = readCache();
    if (cached) {
      renderDashboard(cached);
      applyFeatured(cached);
      return;
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 9000);
    try {
      const [user, repos] = await Promise.all([
        fetchGitHub(`https://api.github.com/users/${GH_USER}`, controller.signal),
        fetchGitHub(`https://api.github.com/users/${GH_USER}/repos?per_page=100&sort=updated`, controller.signal)
      ]);
      clearTimeout(timer);
      const list = Array.isArray(repos) ? repos : [];
      if (!list.length) throw new Error('Sem repositórios públicos');

      const counts = new Map();
      list.forEach((repo) => {
        const lang = repo.language || 'Outros';
        counts.set(lang, (counts.get(lang) || 0) + 1);
      });
      const langs = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
      const recent = [...list]
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        .slice(0, 4)
        .map((repo) => ({
          name: repo.name,
          lang: repo.language || '—',
          updated_at: repo.updated_at,
          url: repo.html_url
        }));
      const featured = [...list]
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        .slice(0, 10)
        .map(projectFromRepo);

      const data = {
        repos: Number(user.public_repos) || list.length,
        langs,
        recent,
        featured,
        live: true,
        fetchedAt: new Date().toISOString()
      };
      writeCache(data);
      renderDashboard(data);
      applyFeatured(data);
    } catch (error) {
      clearTimeout(timer);
      renderDashboard({ ...FALLBACK_GH, fetchedAt: FALLBACK_GH.snapshotAt || new Date().toISOString() });
    }
  }

  /* ===== Motion: scroll, ímã, tilt e luz do cursor ===== */
  async function loadMotion() {
    if (REDUCED) return;
    try {
      const Motion = await import('https://cdn.jsdelivr.net/npm/motion@14.4.0/+esm');
      window.Motion = Motion;
      enhanceWithMotion(Motion);
    } catch (error) {
      /* o site continua funcionando sem o Motion */
    }
  }

  function enhanceWithMotion(Motion) {
    const progress = $('#progress');
    if (typeof Motion.scroll === 'function') {
      Motion.scroll((value) => {
        if (!progress) return;
        const p = Math.max(0, Math.min(1, Number(value) || 0));
        progress.style.transform = `scaleX(${p})`;
      });
    }

    $$('[data-magnet]').forEach((element) => {
      element.addEventListener('pointermove', (event) => {
        if (event.pointerType !== 'mouse') return;
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - (rect.left + rect.width / 2)) * 0.16;
        const y = (event.clientY - (rect.top + rect.height / 2)) * 0.22;
        Motion.animate(element, { x, y }, { type: 'spring', stiffness: 320, damping: 26, mass: 0.5 });
      });
      element.addEventListener('pointerleave', () => {
        Motion.animate(element, { x: 0, y: 0 }, { type: 'spring', stiffness: 320, damping: 26, mass: 0.5 });
      });
    });

    $$('[data-tilt]').forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        if (event.pointerType !== 'mouse' || !card.classList.contains('tilt-ready')) return;
        const rect = card.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;
        Motion.animate(card, { rotateX: -py * 4, rotateY: px * 4, scale: 1.008 }, { type: 'spring', stiffness: 260, damping: 22 });
      });
      card.addEventListener('pointerleave', () => {
        Motion.animate(card, { rotateX: 0, rotateY: 0, scale: 1 }, { type: 'spring', stiffness: 260, damping: 22 });
      });
    });
  }

  /* ===== start ===== */
  setTimeout(() => {
    if (!window.__fantinReady) document.documentElement.classList.remove('js');
  }, 2500);

  try {
    renderServices();
    renderProjects();
    renderProcess();
    renderStack();
    renderSolutions();
    renderPlans();
    renderContact();
    initTheme();
    initYear();
    initMenu();
    initHero();
    initTerminal();
    initReveals();
    initIconDraw();
    initStats();
    initCarousel();
    initTicker();
    initParallax();
    initSpotlights();
    initScrollUI();
    loadGitHub();
    loadMotion();
    window.__fantinReady = true;
  } catch (error) {
    document.documentElement.classList.remove('js');
    console.error(error);
  }
})();
