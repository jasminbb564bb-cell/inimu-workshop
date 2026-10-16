// Mobile (portrait phones) — phrase line breaks for the Scene 03 / 04 copy.
// The HTML text is never edited: breaks are added only while the phone layout applies, and the
// original text node is restored otherwise, so the PC page renders exactly as before.
(()=>{
  const mq=window.matchMedia('(orientation:portrait) and (max-width:600px)');
  const BREAKS=[
    ['.body--03 p','inimuでは、'],
    ['.body--03 p','日本の素材や風土に宿る'],
    ['.body--03 p','自分の記憶や感情と'],
    ['.body--03 p','その人だけの一本へと'],
    ['.body--03 p','浅草の一角で、香りと記憶が'],
    ['.notes p','初心者の方でも、'],
  ];
  const targets=BREAKS.map(([selector,head])=>{
    const el=[...document.querySelectorAll(selector)].find((p)=>p.textContent.startsWith(head));
    return el&&{el,head,text:el.textContent};
  }).filter(Boolean);
  const apply=()=>{
    for(const {el,head,text} of targets){
      if(mq.matches)el.replaceChildren(head,document.createElement('br'),text.slice(head.length));
      else el.textContent=text;
    }
  };
  if(mq.matches)apply();
  mq.addEventListener('change',apply);
})();
