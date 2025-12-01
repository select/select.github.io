const n=a=>{let t=0;for(let s=0;s<a.length;s++)t=a.charCodeAt(s)+((t<<5)-t);const h=Math.abs(t)%360,o=65+Math.abs(t)%20,e=45+Math.abs(t)%15;return`hsl(${h}, ${o}%, ${e}%)`};export{n as g};
