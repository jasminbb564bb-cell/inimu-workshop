// Top choice preview: once Scene 04's dolly has settled, let SHOP / EXPERIENCE rise over the room.
// SKIP INTRO jumps straight to that settled Scene 04. Scene timing is untouched; this only listens,
// and on skip it fast-forwards Scene 04's own CSS animations/transitions to their end values.
(()=>{
  // The opening page has no shared header, so provide the same quiet language
  // control here without changing the intro timing or artwork.
  const selected = new URLSearchParams(location.search).get('lang') || localStorage.getItem('inimuLang') || 'ja';
  localStorage.setItem('inimuLang', selected);
  const control = document.createElement('nav');
  control.className = 'top-language-switch';
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
    const text={
      'SKIP INTRO':'SKIP INTRO','香りの店':'A scent atelier','香りを纏う':'Wear the scent','記憶にふれる香り。':'Scent that touches memory.','香りを重ねる':'Layer the scent','香りを選び、重ね、整える。':'Choose, layer and refine your scent.','inimuでは、香りをただ選ぶのではなく、':'At inimu, scent is more than something you simply choose.','日本の素材や風土に宿る静かな気配に耳を澄ませ、':'Listen for the quiet presence held in Japan’s materials and landscapes,','自分の記憶や感情と向き合いながら、':'as you reflect on your own memories and feelings,','その人だけの一本へと導いていきます。':'until they guide you towards a scent of your own.','浅草の一角で、香りと記憶がそっと重なる時間を。':'In a quiet corner of Asakusa, scent and memory gently meet.','一、香りの印象を選ぶ':'01. Choose the impression','二、好みの素材を重ねる':'02. Layer the materials you like','三、調香師とともに整える':'03. Refine it with the perfumer','四、名をつけて完成。':'04. Name it and make it yours.','所要時間は約六十分。':'The experience takes about 60 minutes.','初心者の方でも、静かに香りと向き合えます':'Beginners are welcome to take their time with scent.','買う':'SHOP','つくる':'MAKE','職業訓練校制作課題｜非公式ポートフォリオ':'Unofficial portfolio project'
    };
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT); const nodes=[]; let node;
    while(node=walker.nextNode())nodes.push(node);
    nodes.forEach(n=>{const key=n.nodeValue.trim();if(text[key])n.nodeValue=n.nodeValue.replace(key,text[key]);});
    document.querySelectorAll('.choice a').forEach(a=>{const u=new URL(a.href);u.searchParams.set('lang','en');a.href=u.pathname+u.search;});
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
