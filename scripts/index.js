document.addEventListener("DOMContentLoaded",()=>{let e=window.ymaps;e.ready(()=>{let a=new e.Map("map",{center:[56.121501,47.230813],zoom:14,controls:[]}),n=new e.Placemark(a.getCenter(),{},{iconLayout:"default#image",iconImageHref:"images/map-pin.png",iconImageSize:[57,53],iconImageOffset:[-26,-42]});a.geoObjects.add(n)})});
