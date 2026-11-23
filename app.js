// Leaf-only AI collaboration diagram, matching the portfolio palette.
(()=>{const style=document.createElement("style");style.id="leaf-ai-workflow-style";style.textContent=".hero-art.leaf-diagram-only{height:auto!important;min-height:0!important;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;align-self:center}.leaf-diagram-only:before,.leaf-diagram-only .art-orbit,.leaf-diagram-only .art-spark,.leaf-diagram-only .project-roman{display:none}.leaf-diagram-only .hero-character.companion{position:relative!important;inset:auto!important;transform:none!important;width:150px!important;height:150px!important;max-height:none!important;max-width:100%!important;object-fit:contain}.leaf-mini-diagram{margin:0;width:100%;max-width:330px;pointer-events:none}.leaf-mini-diagram svg{display:block;width:100%;height:auto;overflow:visible;font-family:inherit}@media(min-width:1650px){.leaf-mini-diagram{max-width:390px}.leaf-diagram-only .hero-character.companion{width:180px!important;height:180px!important}}@media(max-width:1100px) and (min-width:781px){.leaf-mini-diagram{width:125%;max-width:300px}.leaf-diagram-only .hero-character.companion{width:120px!important;height:120px!important}}@media(max-width:780px){.hero-art.leaf-diagram-only{height:auto!important;padding:15px 0 0}.leaf-mini-diagram{width:100%;max-width:320px}.leaf-diagram-only .hero-character.companion{width:130px!important;height:130px!important}}\n.leaf-horizontal-flow{margin:6px 0 0;width:100%;max-width:460px;color:#eee5d8}.leaf-horizontal-flow figcaption{text-align:center;font-size:13px;color:#dfc59a;font-weight:600;margin-bottom:12px;letter-spacing:-.02em}.leaf-horizontal-flow ol{list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px}.leaf-horizontal-flow li{position:relative;min-height:72px;border:1px solid #dfc59a55;background:#dfc59a07;border-radius:4px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;padding:8px 2px;text-align:center}.leaf-horizontal-flow li:not(:last-child):after{content:\"→\";position:absolute;right:-12px;top:50%;transform:translateY(-50%);font-size:16px;color:#dfc59a}.leaf-horizontal-flow li>span{font-size:12px;font-weight:700;color:#dfc59a;line-height:1.2}.leaf-horizontal-flow strong{font-size:12px;line-height:1.45;letter-spacing:-.04em;font-weight:500;word-break:keep-all}.hero-art.leaf-diagram-only{gap:18px}.leaf-diagram-only .hero-character.companion{width:200px!important;height:200px!important}@media(min-width:1650px){.leaf-horizontal-flow strong{font-size:14px}.leaf-horizontal-flow li{min-height:82px}.leaf-diagram-only .hero-character.companion{width:250px!important;height:250px!important}}@media(min-width:781px) and (max-width:1100px){.leaf-horizontal-flow ol{gap:8px}.leaf-horizontal-flow strong{font-size:10px}.leaf-horizontal-flow li{min-height:63px}.leaf-horizontal-flow li:not(:last-child):after{right:-9px;font-size:13px}.leaf-diagram-only .hero-character.companion{width:160px!important;height:160px!important}}@media(max-width:780px){.leaf-horizontal-flow{max-width:390px}.leaf-diagram-only .hero-character.companion{width:160px!important;height:160px!important}.hero-art.leaf-diagram-only{padding-bottom:10px;gap:12px}.leaf-horizontal-flow strong{font-size:12px}}";document.head.append(style);const leaf=projects.find(p=>p.id==="leaf");if(leaf){leaf.structureLabel="AI 작업";leaf.structure="이전 작업 동기화 → 기획·작업 정리 → 개발 → MD 인수인계";}})();
const list=document.querySelector('#project-list');
const display=document.querySelector('#project-display');
const detailDialog=document.querySelector('#detail-dialog');
const profileDialog=document.querySelector('#profile-dialog');
const number=i=>String(i+1).padStart(2,'0');
const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let selected=0;
let detailTrigger=null;
list.innerHTML=projects.map((p,i)=>`<button class="project-card" data-index="${i}" aria-pressed="false" aria-controls="project-display"><span class="card-image" aria-hidden="true"><img src="assets/${p.image}" alt="" loading="${i<3?'eager':'lazy'}"></span><span class="card-label"><b>${number(i)}</b> / ${escapeHTML(p.type)}</span><span class="card-title">${escapeHTML(p.shortTitle)}</span><span class="card-subtitle">${escapeHTML(p.subtitle)}</span><span class="card-check" aria-hidden="true">✦</span></button>`).join('');
function selectProject(index,{scroll=false}={}){
  selected=(index+projects.length)%projects.length;
  const p=projects[selected];
  list.querySelectorAll('.project-card').forEach((card,i)=>{card.classList.toggle('active',i===selected);card.setAttribute('aria-pressed',String(i===selected));});
  document.querySelector('#current-number').textContent=number(selected);
  const stageBackground=document.querySelector('#stage-background');
  stageBackground.dataset.project=p.id;
  stageBackground.style.backgroundImage=p.character===p.background?'none':`url("assets/${p.background}")`;
  display.innerHTML=`<div class="hero-art ${p.id==='leaf'?'leaf-diagram-only':''}" ${p.id==='leaf'?'':'aria-hidden="true"'}><span class="project-roman">${p.roman}</span><div class="art-orbit"></div><span class="art-spark">✧</span>${p.character?`<img class="hero-character ${p.characterClass||''}" src="assets/${p.character}" alt="">${p.id==='halloween'?`<img class="small-ghost" src="assets/portfolio-20261027/baby-ghost.webp" alt="">`:''}`:''}${p.id==='leaf'?"<figure class=\"leaf-horizontal-flow\" role=\"img\" aria-label=\"AI 협업 프로세스: 기획 작업, 작업 정리, 에이전트 동기화, 개발 착수, MD 인수인계\"><figcaption>AI 협업 프로세스</figcaption><ol><li><span>01</span><strong>기획<br>작업</strong></li><li><span>02</span><strong>작업<br>정리</strong></li><li><span>03</span><strong>에이전트<br>동기화</strong></li><li><span>04</span><strong>개발<br>착수</strong></li><li><span>05</span><strong>MD<br>인수인계</strong></li></ol></figure>":''}</div><div class="project-info"><p class="project-type">PROJECT ${number(selected)} — ${escapeHTML(p.type)}</p><div class="project-source">${escapeHTML(p.source)}</div><h2 id="project-title" tabindex="-1">${escapeHTML(p.title).replace(/\n/g,'<br>')}</h2><p class="project-subtitle">${escapeHTML(p.subtitle)}</p><p class="project-hook">${escapeHTML(p.hook).replace(/\n/g,'<br>')}</p><p class="project-description">${escapeHTML(p.description)}</p><div class="info-row"><strong>기획 범위</strong><span>${escapeHTML(p.scope)}</span></div><div class="info-row"><strong>${escapeHTML(p.structureLabel ?? "설계 흐름")}</strong><span>${escapeHTML(p.structure)}</span></div><div class="project-tags">${p.tags.map(t=>`<span>${escapeHTML(t)}</span>`).join('')}</div><div class="project-actions"><div class="resource-links" aria-label="프로젝트 관련 링크">${p.links.map(link=>link.url?`<a class="resource-link" href="${escapeHTML(link.url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(link.label)} (새 탭)"><span>${escapeHTML(link.label)}</span><span aria-hidden="true">↗</span></a>`:`<button class="resource-link" disabled><span>${escapeHTML(link.label)}</span><span class="resource-pending">준비 중</span></button>`).join('')}</div><button class="detail-button" id="open-detail"><span>PPT 포트폴리오 페이지 보기</span><span aria-hidden="true">↗</span></button></div><p class="preview-note">포트폴리오 이미지 ${p.pages.length}장</p></div>`;
  document.querySelector('#open-detail').addEventListener('click',openDetail);
  document.title=`${p.shortTitle} · 게임 기획자 김단아`;
  window.PortfolioLayout?.refresh();
  window.dispatchEvent(new CustomEvent('pf-project-change',{detail:{id:p.id}}));
  if(scroll)list.querySelector(`[data-index="${selected}"]`).scrollIntoView({block:'nearest',inline:'nearest',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
}
list.addEventListener('click',e=>{const b=e.target.closest('[data-index]');if(b)selectProject(Number(b.dataset.index));});
list.addEventListener('keydown',e=>{
  const card=e.target.closest('[data-index]');if(!card)return;
  let next;
  if(e.key==='ArrowDown'||e.key==='ArrowRight')next=selected+1;
  if(e.key==='ArrowUp'||e.key==='ArrowLeft')next=selected-1;
  if(e.key==='Home')next=0;
  if(e.key==='End')next=projects.length-1;
  if(next===undefined)return;
  e.preventDefault();selectProject(next,{scroll:true});list.querySelector(`[data-index="${selected}"]`).focus({preventScroll:true});
});
document.querySelector('#previous-project').addEventListener('click',()=>selectProject(selected-1,{scroll:true}));
document.querySelector('#next-project').addEventListener('click',()=>selectProject(selected+1,{scroll:true}));
function openDetail(e){
  const p=projects[selected];detailTrigger=e.currentTarget;
  document.querySelector('#dialog-title').textContent=p.shortTitle;
  document.querySelector('#gallery-summary').textContent=`포트폴리오 ${p.pages[0].number}–${p.pages.at(-1).number}페이지 · ${p.pages.length}장`;
  document.querySelector('#detail-content').innerHTML=p.pages.map((page,i)=>`<figure class="gallery-page"><figcaption><span>${number(i)} / ${number(p.pages.length-1)}</span><span>${escapeHTML(page.title)}</span><span>P.${page.number}</span></figcaption><div class="gallery-page-viewport"><img src="${escapeHTML(page.image)}" alt="${escapeHTML(p.shortTitle)} — ${escapeHTML(page.title)}, 포트폴리오 ${page.number}페이지" width="1920" height="1080" draggable="false" loading="${i===0?'eager':'lazy'}" decoding="async"></div></figure>`).join('');
  detailDialog.showModal();detailDialog.scrollTop=0;document.querySelector('#close-detail').focus();
}

// Drag anywhere in the gallery to scroll; touch keeps native pan and pinch.
const galleryContent=document.querySelector('#detail-content');
let galleryDrag=null;
function finishGalleryDrag(){
  const drag=galleryDrag;galleryDrag=null;
  detailDialog.classList.remove('is-dragging');
  if(drag&&galleryContent.hasPointerCapture(drag.id))galleryContent.releasePointerCapture(drag.id);
}
galleryContent.addEventListener('pointerdown',e=>{
  if(e.pointerType!=='mouse'||e.button!==0||!e.isPrimary||e.target.closest('a,button,input,select,textarea'))return;
  const viewport=e.target.closest('.gallery-page-viewport');
  galleryDrag={id:e.pointerId,x:e.clientX,y:e.clientY,top:detailDialog.scrollTop,left:viewport?.scrollLeft||0,viewport,moved:false};
  galleryContent.setPointerCapture(e.pointerId);
});
galleryContent.addEventListener('pointermove',e=>{
  const drag=galleryDrag;if(!drag||e.pointerId!==drag.id)return;
  const dx=e.clientX-drag.x,dy=e.clientY-drag.y;
  if(!drag.moved&&Math.hypot(dx,dy)<5)return;
  drag.moved=true;detailDialog.classList.add('is-dragging');e.preventDefault();
  detailDialog.scrollTop=drag.top-dy;
  if(drag.viewport)drag.viewport.scrollLeft=drag.left-dx;
});
for(const event of ['pointerup','pointercancel','lostpointercapture'])galleryContent.addEventListener(event,finishGalleryDrag);
galleryContent.addEventListener('dragstart',e=>e.preventDefault());
detailDialog.addEventListener('close',finishGalleryDrag);
window.addEventListener('blur',finishGalleryDrag);


document.querySelector('#close-detail').addEventListener('click',()=>detailDialog.close());
detailDialog.addEventListener('close',()=>detailTrigger?.focus({preventScroll:true}));
document.querySelector('#open-profile').addEventListener('click',()=>{profileDialog.showModal();document.querySelector('#close-profile').focus();});
document.querySelector('#close-profile').addEventListener('click',()=>profileDialog.close());
profileDialog.addEventListener('close',()=>document.querySelector('#open-profile').focus({preventScroll:true}));
for(const dialog of [detailDialog,profileDialog])dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();});
selectProject(0);

// Keep layout previews on the portfolio now that the start screen is removed.
window.PortfolioPreview={
  selectProject:index=>selectProject(index),
  showScene(){
    window.scrollTo({top:0,behavior:'instant'});
    window.dispatchEvent(new CustomEvent('pf-scene-change',{detail:{scene:'projects'}}));
  }
};



(() => {
  const tablist = document.querySelector('.portfolio-view-tabs');
  const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
  const dialog = document.querySelector('#portfolio-art-dialog');
  const fullImage = dialog.querySelector('img');
  let selectedWork;

  function selectTab(activeTab) {
    tabs.forEach((tab) => {
      const selected = tab === activeTab;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      document.getElementById(tab.getAttribute('aria-controls')).hidden = !selected;
    });
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', (event) => {
      let next;
      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowRight':
          next = tabs[(index + 1) % tabs.length];
          break;
        case 'Home':
          next = tabs[0];
          break;
        case 'End':
          next = tabs[tabs.length - 1];
          break;
        default:
          return;
      }
      event.preventDefault();
      selectTab(next);
      next.focus();
    });
  });
  document.querySelector('a.skip').addEventListener('click', () => selectTab(tabs[0]));

  document.querySelectorAll('.portfolio-art-item').forEach((work) => {
    work.addEventListener('click', () => {
      selectedWork = work;
      const thumbnail = work.querySelector('img');
      const title = work.querySelector('span').firstChild.textContent.trim();
      dialog.classList.toggle('art-dialog-tall', work.dataset.tall === 'true');
      dialog.scrollTop = 0;
      fullImage.style.setProperty('--art-mask', work.style.getPropertyValue('--art-mask'));
      fullImage.src = work.dataset.full || thumbnail.currentSrc || thumbnail.src;
      fullImage.alt = title;
      dialog.querySelector('h2').textContent = title;
      dialog.showModal();
    });
  });
  dialog.querySelector('button').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => selectedWork?.focus({ preventScroll: true }));
})();
