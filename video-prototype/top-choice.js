// Top choice preview: once Scene 04's dolly has settled, let SHOP / EXPERIENCE rise over the room.
// SKIP INTRO jumps straight to that settled Scene 04. Scene timing is untouched; this only listens,
// and on skip it fast-forwards Scene 04's own CSS animations/transitions to their end values.
(()=>{
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
