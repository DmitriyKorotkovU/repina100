// /* в этот файл добавляет скрипты*/
// const mapId = document.querySelector('#ymaps');

// function init() {

//   if (mapId.length > 0) {
//     const map = new ymaps.Map('ymap', {
//       center: [55.702769, 37.651681],
//       zoom: window.innerWidth < 768 ? 16 : 16.6,
//       controls: ['fullscreenControl', 'zoomControl', 'trafficControl'],
//       behaviors: ['drag', 'dblClickZoom', 'multiTouch']
//     });
//     window.addEventListener('resize', function () {
//       map.setZoom(window.innerWidth < 768 ? 16 : 16.6);
//     })
//   }
// }
// ymaps.ready(init);

document.addEventListener('DOMContentLoaded', () => {

  const ymaps = window.ymaps;
  ymaps.ready(() => {
    const myMap = new ymaps.Map('map', {
        center: [56.121501, 47.230813],
        zoom: 14,
        controls: []
      }),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
        iconLayout: 'default#image',
        iconImageHref: 'images/map-pin.png',
        iconImageSize: [57, 53],
        iconImageOffset: [-26, -42]
      });

    myMap.geoObjects.add(myPlacemark);
  });

});
