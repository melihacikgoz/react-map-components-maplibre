"use strict";(self.webpackChunk_mapcomponents_react_maplibre=self.webpackChunk_mapcomponents_react_maplibre||[]).push([[9356],{98924:(e,t,r)=>{r.r(t),r.d(t,{ExampleConfig:()=>b,__namedExportsOrder:()=>f,default:()=>y});var o=r(11504),n=r(22560),i=r(72576),a=r(17988),s=r(49376),c=r(77324);const p=r.p+"static/media/marker.2f07dbae.png";var m=r(17624);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){var o,n,i,a;o=e,n=t,i=r[t],a=function(e,t){if("object"!=u(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=u(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n),(n="symbol"==u(a)?a:String(a))in o?Object.defineProperty(o,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[n]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const y={title:"hooks/useAddImage",component:n.c,argTypes:{},decorators:a.c};var b=function(e){var t=(0,i.c)({mapId:void 0});return(0,n.c)({imageId:"wgLogo",imagePath:p}),(0,o.useEffect)((function(){var e;null===(e=t.map)||void 0===e||e.flyTo({center:[10.251805123900311,51.11826171422632],zoom:5})}),[t.map]),(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(s.c,d({layout:{"icon-image":"wgLogo","icon-size":{property:"Mitarbeitende",stops:[[3,.02],[26,.15]]},"icon-anchor":"bottom"}},e))})}.bind({});b.parameters={},b.args={geojson:c,type:"symbol"},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"(props: MlGeoJsonLayerProps) => {\n  const mapHook = useMap({\n    mapId: undefined\n  });\n  useAddImage({\n    imageId: 'wgLogo',\n    imagePath: wg_marker\n  });\n  useEffect(() => {\n    mapHook.map?.flyTo({\n      center: [10.251805123900311, 51.11826171422632],\n      zoom: 5\n    });\n  }, [mapHook.map]);\n  return <>\n            <MlGeoJsonLayer layout={{\n      'icon-image': 'wgLogo',\n      'icon-size': ({\n        property: 'Mitarbeitende',\n        stops: [[3, 0.02], [26, 0.15]]\n      } as DataDrivenPropertyValueSpecification<number>),\n      'icon-anchor': 'bottom'\n    }} {...props} />\n        </>;\n}",...b.parameters?.docs?.source}}};const f=["ExampleConfig"]},17988:(e,t,r)=>{r.d(t,{c:()=>p});var o=r(11504),n=r(77288),i=r(24732),a=(r(47634),r(54656)),s=r(76508),c=r(17624);const p=[function(e,t){var r,p=(0,o.useMemo)((function(){var e;return(0,s.c)(null==t||null===(e=t.globals)||void 0===e?void 0:e.theme)}),[null==t||null===(r=t.globals)||void 0===r?void 0:r.theme]);return(0,c.jsx)("div",{className:"fullscreen_map",children:(0,c.jsx)(n.y4,{children:(0,c.jsxs)(a.c,{theme:p,children:[(0,c.jsx)(e,{}),(0,c.jsx)(i.c,{options:{zoom:3,style:"https://wms.wheregroup.com/tileserver/style/osm-bright.json",center:[4.5424,39.44518]},mapId:"map_1"})]})})})}]},77324:e=>{e.exports=JSON.parse('{"type":"FeatureCollection","features":[{"id":"1","type":"Feature","properties":{"Standort":"Bonn","Mitarbeitende":26},"geometry":{"coordinates":[7.085121767634178,50.738628929850876],"type":"Point"}},{"id":"2","type":"Feature","properties":{"Standort":"Freiburg","Mitarbeitende":10},"geometry":{"coordinates":[7.842759788570362,47.98905444717667],"type":"Point"}},{"id":"3","type":"Feature","properties":{"Standort":"Berlin","Mitarbeitende":13},"geometry":{"coordinates":[13.330420447460796,52.492768290796676],"type":"Point"}},{"id":"4","type":"Feature","properties":{"Standort":"Hamburg","Mitarbeitende":3},"geometry":{"coordinates":[10.041789021808029,53.5511363175323],"type":"Point"}}]}')}}]);