// Mobile Menu Toggle
  const toggleBtn = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  if(toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isActive = navLinks.classList.contains('active');
      toggleBtn.innerHTML = isActive 
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    });
    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('active');
        toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
      });
    });
  }

  // Checkbox Toggle
  function chkToggle(el) { el.classList.toggle('checked'); }

  // File Upload
  function koFileUpload(input) {
    if (input.files && input.files[0]) {
      document.getElementById('koUploadText').innerHTML = '<svg style="width:14px;height:14px;margin-right:6px;vertical-align:-2px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>' + input.files[0].name;
      document.getElementById('koUpload').style.borderColor = 'var(--text)';
      document.getElementById('koUpload').style.background = 'rgba(255,255,255,0.05)';
    }
  }

  // Toast
  function showToast(msg) {
    const t = document.getElementById('koToast');
    document.getElementById('koToastMsg').textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3500);
  }

  // Form Submit
  const formElement = document.getElementById('koForm');
  formElement.addEventListener('submit', function(e) {
    e.preventDefault();
    const last  = document.getElementById('koLast').value.trim();
    const first = document.getElementById('koFirst').value.trim();
    const email = document.getElementById('koEmail').value.trim();
    const clinic= document.getElementById('koClinic').value.trim();
    if (!last || !first || !email || !clinic) {
      showToast('필수 항목을 모두 입력해 주세요.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('올바른 이메일 주소를 입력해 주세요.');
      return;
    }

    const submitBtn = formElement.querySelector('.btn-submit');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '전송 중... <svg style="animation: spin 1s linear infinite;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>';
    submitBtn.style.pointerEvents = 'none';

    const formData = new FormData(formElement);

    fetch('https://formspree.io/f/mrevkqbv', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        document.getElementById('koForm').style.display = 'none';
        document.getElementById('koSuccess').style.display = 'block';
        showToast('신청 완료 — 24시간 내 연락드리겠습니다!');
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            showToast(data["errors"].map(error => error["message"]).join(", "));
          } else {
            showToast("전송 중 오류가 발생했습니다. 다시 시도해주세요.");
          }
        })
      }
    }).catch(error => {
      showToast("전송 중 오류가 발생했습니다. 네트워크 상태를 확인해주세요.");
    }).finally(() => {
      submitBtn.innerHTML = originalBtnText;
      submitBtn.style.pointerEvents = 'auto';
    });
  });

  // Fade Up Observer
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) setTimeout(() => entry.target.classList.add('visible'), i * 70);
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const href = a.getAttribute('href');
      if (href === '#') return;
      const t = document.querySelector(href);
      if (t) t.scrollIntoView({ behavior:'smooth', block:'start' });
    });
  });

  // Scroll Spy Nav Active State
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    document.querySelectorAll(".nav-links a").forEach((a) => {
      a.classList.remove("active");
      if (a.getAttribute("href") === `#${current}`) {
        a.classList.add("active");
      }
    });
  });

  // FAQ Accordion Toggle
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      const isActive = faqItem.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
      if (!isActive) faqItem.classList.add('active');
    });
  });

  // Live Feed Simulation
  const liveCases = [
    { name: "정** 원장님 · #46 골드크라운", sub: "A-Type 골드 · 풀캐스트", badgeCls: "b-des", badgeHtml: "디자인 검토" },
    { name: "김** 원장님 · 상악 전치부 베니어", sub: "e.max 프레스 · 다크 쉐이드 커버", badgeCls: "b-qc", badgeHtml: "QC 검수" },
    { name: "송** 원장님 · 인레이 3개", sub: "e.max 인레이 · MOD", badgeCls: "b-ship", badgeHtml: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> 발송 완료` },
    { name: "오** 원장님 · 임플란트 3본 브릿지", sub: "PFZ · #34-36 폰틱", badgeCls: "b-mill", badgeHtml: "밀링 중" },
    { name: "강** 원장님 · 하악 풀아치", sub: "All-on-X · 지르코니아 12유닛", badgeCls: "b-des", badgeHtml: "디자인 검토" },
    { name: "이** 원장님 · #14 임플란트 크라운", sub: "멀티레이어 지르코니아 · 커스텀 어버트먼트", badgeCls: "b-mill", badgeHtml: "밀링 중" },
    { name: "박** 원장님 · 상악 전치부 브릿지", 고: "PFZ · 심미보철 (커스텀 쉐이드)", badgeCls: "b-qc", badgeHtml: "QC 검수" },
    { name: "최** 원장님 · 교합 스플린트", sub: "3D 프린팅 나이트가드", badgeCls: "b-des", badgeHtml: "디자인 검토" },
    { name: "한** 원장님 · 투명교정 장치", sub: "상하악 1세트 · Trista 소재", badgeCls: "b-ship", badgeHtml: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> 발송 완료` },
    { name: "윤** 원장님 · #37 지르코니아 크라운", sub: "통지르코니아 · 구치부", badgeCls: "b-mill", badgeHtml: "밀링 중" }
  ];

  let caseIndex = 0; // Use sequential indexing instead of random to ensure they are all distinct

  function simulateLiveFeed() {
    const list = document.querySelector('.case-list');
    if (!list) return;

    // Fix the height of the container to prevent parent resizing (wobble/jolt) during animations
    if (!list.style.height) {
      list.style.height = list.offsetHeight + 'px';
      list.style.overflow = 'hidden';
    }

    setInterval(() => {
      // Get the next case sequentially
      const nextCase = liveCases[caseIndex % liveCases.length];
      caseIndex++;
      
      const avatarChar = nextCase.name.charAt(0);

      const newRow = document.createElement('div');
      newRow.className = 'case-row new-item';
      newRow.innerHTML = `
        <div class="case-info">
          <div class="case-avatar">${avatarChar}</div>
          <div>
            <div class="case-name">${nextCase.name}</div>
            <div class="case-sub">${nextCase.sub || nextCase.고 || ""}</div>
          </div>
        </div>
        <span class="badge ${nextCase.badgeCls}">${nextCase.badgeHtml}</span>
      `;

      const rows = list.querySelectorAll('.case-row');
      if (rows.length >= 4) {
        const lastRow = rows[rows.length - 1];
        lastRow.classList.add('removing-item');
        setTimeout(() => {
          if (lastRow.parentNode) lastRow.parentNode.removeChild(lastRow);
        }, 450); 
      }

      list.insertBefore(newRow, list.firstChild);
      
      setTimeout(() => {
        newRow.classList.remove('new-item');
      }, 500);

    }, 3500);
  }
  
  setTimeout(simulateLiveFeed, 2000);