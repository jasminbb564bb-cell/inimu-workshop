// Top choice preview: once Scene 04's dolly has settled, let SHOP / EXPERIENCE rise over the room.
// SKIP INTRO jumps straight to that settled Scene 04. Scene timing is untouched; this only listens,
// and on skip it fast-forwards Scene 04's own CSS animations/transitions to their end values.
(()=>{
  // The opening page has no shared header, so provide the same quiet language
  // control here without changing the intro timing or artwork.
  let stored = 'ja';
  try { stored = localStorage.getItem('inimuLang') || 'ja'; } catch (error) { /* storage unavailable */ }
  const selected = new URLSearchParams(location.search).get('lang') || stored;
  try { localStorage.setItem('inimuLang', selected); } catch (error) { /* storage unavailable */ }
  const control = document.createElement('nav');
  control.className = 'top-language-switch';
  control.style.cssText = 'position:fixed;top:58px;right:max(14px,env(safe-area-inset-right));z-index:100;display:block;visibility:visible;opacity:1;font:12px/1 Inter,system-ui,sans-serif;letter-spacing:.12em;color:rgba(255,255,255,.9);pointer-events:auto;';
  control.setAttribute('aria-label', 'Language');
  ['ja','en'].forEach((language,index)=>{
    if(index) control.append(' / ');
    const link=document.createElement('a');
    link.textContent=language.toUpperCase(); link.dataset.lang=language;
    const url=new URL(location.href); url.searchParams.set('lang',language); link.href=url.pathname+url.search;
    link.style.cssText='color:inherit;text-decoration:none;opacity:'+(language===selected?'1':'.55')+';';
    control.append(link);
  });
  document.body.append(control);
  if(selected==='en'){
    document.documentElement.lang='en';
    document.documentElement.classList.add('lang-en');
    document.title='inimu — Scent and memory in Asakusa';
    document.querySelector('.skip-intro')?.setAttribute('aria-label','Skip intro and choose a destination');
    document.querySelector('.choice')?.setAttribute('aria-label','Choose a destination');
    const text={
      'SKIP INTRO':'SKIP INTRO','香りの店':'A scent atelier','香りを纏う':'Wear the scent','記憶にふれる香り。':'Scent that touches memory.','香りを重ねる':'Layer the scent','香りを選び、重ね、整える。':'Choose, layer and refine.','inimuでは、香りをただ選ぶのではなく、':'At inimu, scent is more than a choice.','日本の素材や風土に宿る静かな気配に耳を澄ませ、':'Listen to Japan’s land and materials.','自分の記憶や感情と向き合いながら、':'Meet your memories and feelings.','その人だけの一本へと導いていきます。':'Find a scent that is yours.','浅草の一角で、香りと記憶がそっと重なる時間を。':'In Asakusa, scent and memory meet.','一、香りの印象を選ぶ':'01. Choose a mood','二、好みの素材を重ねる':'02. Layer materials','三、調香師とともに整える':'03. Refine with the perfumer','四、名をつけて完成。':'04. Name your scent.','所要時間は約六十分。':'About 60 minutes.','初心者の方でも、静かに香りと向き合えます':'A quiet scent experience for beginners.','買う':'SHOP','つくる':'MAKE','職業訓練校制作課題｜非公式ポートフォリオ':'Unofficial portfolio project'
    };
    const applyEnglish = (root=document) => {
      root.querySelectorAll?.('[data-en]').forEach((element) => { if (element.textContent !== element.dataset.en) element.textContent = element.dataset.en; });
      const walker=document.createTreeWalker(root.body || root,NodeFilter.SHOW_TEXT); const nodes=[]; let node;
      while(node=walker.nextNode())nodes.push(node);
      nodes.forEach(n=>{const key=n.nodeValue.trim();if(text[key])n.nodeValue=n.nodeValue.replace(key,text[key]);});
    };
    applyEnglish(document);
    new MutationObserver((records)=>{
      if(records.some((record)=>record.addedNodes.length)) applyEnglish(document);
    }).observe(document.body,{childList:true,subtree:true});
    document.querySelectorAll('.choice a').forEach(a=>{const u=new URL(a.href);u.searchParams.set('lang','en');a.href=u.pathname+u.search;});
  } else {
    document.documentElement.lang='ja';
    document.documentElement.classList.remove('lang-en');
    document.title='inimu — 浅草・記憶の調香';
    document.querySelector('.skip-intro')?.setAttribute('aria-label','イントロを飛ばして、行き先の選択へ');
    document.querySelector('.choice')?.setAttribute('aria-label','行き先を選ぶ');
  }
  const layer=document.querySelector('.scene--04');
  const img=layer?.querySelector('img');
  const nav=layer?.querySelector('.choice');
  if(!layer||!img||!nav)return;
  const video=document.querySelector('#scene01');
  const scene03=document.querySelector('.scene--03');
  const blackout=document.querySelector('.transition-black');
  const skip=document.querySelector('.skip-intro');
  const SETTLE_DELAY=600;      // after the 12s zoom ends
  const FALLBACK=12000+SETTLE_DELAY+300;
  let shown=false,skipped=false,timer=null;

  // Quietly retire SKIP INTRO: fade (CSS .is-hidden), then out of pointer, tap and keyboard reach
  const hideSkip=()=>{
    if(!skip||skip.classList.contains('is-hidden'))return;
    skip.classList.add('is-hidden');
    skip.setAttribute('tabindex','-1');
    skip.setAttribute('aria-hidden','true');
    if(document.activeElement===skip)skip.blur();
  };
  const show=()=>{
    if(shown)return;
    shown=true;
    nav.removeAttribute('inert');
    layer.classList.add('has-choice');
    nav.classList.add('is-shown');
    // Keep keyboard focus in the page when the skip control goes away
    if(skip&&document.activeElement===skip)nav.querySelector('a')?.focus({preventScroll:true});
    hideSkip();
  };
  img.addEventListener('animationend',(e)=>{if(e.animationName==='atelier-dolly')window.setTimeout(show,SETTLE_DELAY);});
  // Fallback (and reduced-motion, where the zoom never runs): start counting once Scene 04 is on screen.
  // Scene 04 reached by normal playback: SKIP INTRO has done its job (it stays usable through Scenes 01–03).
  new MutationObserver(()=>{
    if(!skipped&&layer.classList.contains('is-visible'))hideSkip();
  }).observe(layer,{attributes:true,attributeFilter:['class']});
  new MutationObserver(()=>{
    if(timer||!layer.classList.contains('is-visible'))return;
    const reduced=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    timer=window.setTimeout(show,reduced?2500:FALLBACK);
  }).observe(layer,{attributes:true,attributeFilter:['class']});

  if(!skip)return;
  // After a skip, the intro must not come back: undo any late scene change from prototype.js's pending timers.
  const holdFinalState=()=>{
    if(!skipped)return;
    if(scene03?.classList.contains('is-visible')){scene03.classList.remove('is-visible');scene03.setAttribute('aria-hidden','true');}
    if(blackout?.classList.contains('is-visible'))blackout.classList.remove('is-visible');
    if(!layer.classList.contains('is-visible')){layer.classList.add('is-visible');layer.setAttribute('aria-hidden','false');}
  };
  const guard=new MutationObserver(holdFinalState);
  video?.addEventListener('play',()=>{if(skipped)video.pause();});

  skip.addEventListener('click',()=>{
    if(skipped||shown)return;
    skipped=true;
    video?.pause();
    holdFinalState();
    [scene03,blackout,layer].forEach((el)=>el&&guard.observe(el,{attributes:true,attributeFilter:['class']}));
    // Let the browser create Scene 04's zoom + text/veil transitions, then jump each one to its end value
    void layer.offsetWidth;
    layer.querySelectorAll('*').forEach((el)=>getComputedStyle(el).opacity);
    layer.getAnimations({subtree:true}).forEach((a)=>{try{a.finish();}catch(_){}});
    show();
  });
})();
