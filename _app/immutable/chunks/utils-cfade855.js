function s(a,t,...e){return t.reduce((o,r,c)=>{var n;return`${o}${r.replace(a,'<span class="type:ss1">$&</span>')}${(n=e[c])!=null?n:""}`},"")}const i=s.bind(null,/e|o|r|s*/gim),u=s.bind(null,/a|n|g*/gim),h=()=>"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;export{i as a,u as c,h as i};