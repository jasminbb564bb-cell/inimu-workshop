const scene01=document.querySelector('#scene01');
const scene01Layer=document.querySelector('.scene--01');
const scene03Layer=document.querySelector('.scene--03');
const scene04Layer=document.querySelector('.scene--04');
const blackout=document.querySelector('.transition-black');

const transitionTo=(nextLayer,previousLayer)=>{
  blackout.classList.add('is-visible');
  window.setTimeout(()=>{
    previousLayer.classList.remove('is-visible');
    previousLayer.setAttribute('aria-hidden','true');
    nextLayer.classList.add('is-visible');
    nextLayer.setAttribute('aria-hidden','false');
    blackout.classList.remove('is-visible');
  },500);
};

const startScene03=()=>transitionTo(scene03Layer,scene01Layer);
const startScene04=()=>transitionTo(scene04Layer,scene03Layer);

scene01.addEventListener('ended',startScene03);
scene01.addEventListener('error',startScene03);
scene03Layer.querySelector('img').addEventListener('animationend',startScene04);

// Future insertion points:
// Scene 01 -> Scene 02 (noren passage) -> Scene 03
// Scene 03 -> shoji opening -> Scene 04
