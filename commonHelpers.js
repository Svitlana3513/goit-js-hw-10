import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as p,i as f}from"./assets/vendor-77e16229.js";let i,n;const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0]),i=e[0],n=i-new Date,n<1?(f.error({message:"Please choose a date in the future",position:"topCenter",color:"red"}),t.disabled=!0):(t.disabled=!1,a.disabled=!0,t.classList.add("btn-active"))}};function s(e){const d=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),u=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:l,minutes:u,seconds:m}}console.log(s(2e3));console.log(s(14e4));console.log(s(2414e4));p("#datetime-picker",h);const a=document.querySelector("#datetime-picker"),t=document.querySelector("button"),r=document.querySelectorAll(".value");t.disabled=!0;t.addEventListener("click",e=>{const c=setInterval(()=>{if(n=i-new Date,e.preventDefault(),a.disabled=!0,t.classList.remove("btn-active"),a.classList.add("input-disabled"),n<1){t.disabled=!0,a.disabled=!1,clearInterval(c);return}const o=s(n);r[0].innerText=o.days.toString().padStart(2,"0"),r[1].innerText=o.hours.toString().padStart(2,"0"),r[2].innerText=o.minutes.toString().padStart(2,"0"),r[3].innerText=o.seconds.toString().padStart(2,"0")},1e3)});
//# sourceMappingURL=commonHelpers.js.map
