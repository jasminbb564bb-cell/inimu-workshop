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
scene01.querySelector('source')?.addEventListener('error',startScene03);
scene03Layer.querySelector('img').addEventListener('animationend',startScene04);

// Scene 01 text: follows the camera dolly so it reads as lettering on the dark wall.
// Per-frame [scale, translateX %, translateY %] measured from scene-01-02-continuous.mp4 (24fps).
const SCENE01_TRACK=[[1,0,0],[1.00057,-0.038,-0.048],[1.00272,-0.145,-0.193],[1.00485,-0.261,-0.336],[1.00698,-0.371,-0.512],[1.00917,-0.484,-0.682],[1.01131,-0.598,-0.837],[1.01358,-0.72,-0.966],[1.01584,-0.845,-1.101],[1.01816,-0.978,-1.249],[1.02049,-1.105,-1.43],[1.02293,-1.238,-1.637],[1.02555,-1.366,-1.849],[1.02819,-1.491,-2.07],[1.03091,-1.622,-2.256],[1.0339,-1.763,-2.427],[1.03698,-1.919,-2.608],[1.04022,-2.081,-2.847],[1.04341,-2.249,-3.11],[1.04668,-2.418,-3.387],[1.05002,-2.585,-3.661],[1.05369,-2.764,-3.945],[1.05753,-2.95,-4.218],[1.06142,-3.146,-4.449],[1.06543,-3.356,-4.672],[1.06956,-3.569,-4.945],[1.07382,-3.778,-5.267],[1.07822,-3.99,-5.63],[1.08273,-4.199,-6.011],[1.08747,-4.417,-6.412],[1.09227,-4.653,-6.761],[1.09719,-4.905,-7.04],[1.10213,-5.159,-7.342],[1.10717,-5.394,-7.712],[1.11222,-5.627,-8.112],[1.11743,-5.876,-8.546],[1.12252,-6.109,-9.008],[1.1278,-6.352,-9.474],[1.1332,-6.62,-9.852],[1.13887,-6.897,-10.192],[1.14452,-7.175,-10.565],[1.15025,-7.446,-11.019],[1.15593,-7.701,-11.529],[1.16157,-7.954,-12.039],[1.16714,-8.199,-12.486],[1.17281,-8.451,-12.929],[1.17862,-8.712,-13.35],[1.18454,-8.981,-13.745],[1.19051,-9.256,-14.146],[1.19675,-9.534,-14.613],[1.203,-9.804,-15.123],[1.20928,-10.078,-15.638],[1.21559,-10.357,-16.117],[1.22199,-10.64,-16.61],[1.22867,-10.939,-17.101],[1.23544,-11.243,-17.568],[1.24209,-11.568,-18.024],[1.24864,-11.89,-18.51],[1.25519,-12.216,-18.959],[1.26179,-12.548,-19.411],[1.26825,-12.889,-19.829],[1.27511,-13.244,-20.253],[1.28208,-13.604,-20.666],[1.28935,-13.971,-21.102],[1.29656,-14.326,-21.559],[1.30407,-14.694,-22.063],[1.31149,-15.058,-22.568],[1.31923,-15.44,-23.099],[1.32706,-15.831,-23.635],[1.33511,-16.225,-24.183],[1.34348,-16.624,-24.756],[1.352,-17.029,-25.343],[1.36102,-17.452,-25.946],[1.37035,-17.888,-26.577],[1.38053,-18.358,-27.264],[1.39109,-18.846,-27.975],[1.40256,-19.369,-28.734],[1.41467,-19.918,-29.533],[1.42766,-20.506,-30.385],[1.44171,-21.131,-31.291],[1.45655,-21.791,-32.236],[1.47263,-22.528,-33.246],[1.48983,-23.318,-34.328],[1.50809,-24.169,-35.475],[1.52723,-25.074,-36.675],[1.54823,-26.068,-37.98],[1.57095,-27.157,-39.403],[1.59553,-28.332,-40.955],[1.62187,-29.602,-42.6],[1.65019,-30.99,-44.329],[1.6812,-32.505,-46.207],[1.71462,-34.169,-48.255],[1.75044,-35.934,-50.467],[1.78784,-37.777,-52.729],[1.82907,-39.766,-55.234],[1.87184,-41.94,-57.773]];
const FPS=24;
const FADE_IN=[0.2,1.4];
const FADE_OUT=[2.5,3.4];
const track=document.querySelector('#scene01Track');
const smooth=(a,b,t)=>{const x=Math.min(1,Math.max(0,(t-a)/(b-a)));return x*x*(3-2*x);};

const renderScene01Text=(time)=>{
  const f=Math.min(time*FPS,SCENE01_TRACK.length-1);
  const i=Math.floor(f),j=Math.min(i+1,SCENE01_TRACK.length-1),k=f-i;
  const [s,x,y]=SCENE01_TRACK[i].map((v,n)=>v+(SCENE01_TRACK[j][n]-v)*k);
  track.style.transform=`translate(${x}%,${y}%) scale(${s})`;
  track.style.opacity=smooth(FADE_IN[0],FADE_IN[1],time)*(1-smooth(FADE_OUT[0],FADE_OUT[1],time));
  return time<FADE_OUT[1];
};

// Pages without the typography layer (e.g. scene-01-02-preview.html) skip this.
if(track&&'requestVideoFrameCallback' in HTMLVideoElement.prototype){
  const onFrame=(now,meta)=>{if(renderScene01Text(meta.mediaTime))scene01.requestVideoFrameCallback(onFrame);};
  scene01.requestVideoFrameCallback(onFrame);
}else if(track){
  const loop=()=>{if(renderScene01Text(scene01.currentTime))requestAnimationFrame(loop);};
  requestAnimationFrame(loop);
}
