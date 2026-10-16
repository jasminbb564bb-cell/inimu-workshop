// Mobile (portrait phones) — Scene 01: hold the left-shifted framing while the sign is shown, then glide back to centre
// while the noren cloth fills the screen (≈3.5–4.6s), so the passage through the noren stays centred.
(()=>{
  const mq=window.matchMedia('(orientation:portrait) and (max-width:600px)');
  const video=document.querySelector('#scene01');
  const layer=document.querySelector('.scene--01');
  const PAN_FROM=.12,PAN_TO=.5,START=3.5,END=4.6;
  const ease=(x)=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2;
  const apply=(time)=>{
    const x=Math.min(1,Math.max(0,(time-START)/(END-START)));
    layer.style.setProperty('--pan',(PAN_FROM+(PAN_TO-PAN_FROM)*ease(x)).toFixed(4));
    return time<END;
  };
  if(!mq.matches)return;
  if('requestVideoFrameCallback' in HTMLVideoElement.prototype){
    const onFrame=(now,meta)=>{if(apply(meta.mediaTime))video.requestVideoFrameCallback(onFrame);};
    video.requestVideoFrameCallback(onFrame);
  }else{
    const loop=()=>{if(apply(video.currentTime))requestAnimationFrame(loop);};
    requestAnimationFrame(loop);
  }
})();
