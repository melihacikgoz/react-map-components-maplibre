"use strict";(self.webpackChunk_mapcomponents_react_maplibre=self.webpackChunk_mapcomponents_react_maplibre||[]).push([[1041],{40971:(e,o,r)=>{r.r(o),r.d(o,{ExampleConfig:()=>p,__namedExportsOrder:()=>l,default:()=>s}),r(96540);var a=r(12682),t=r(77477),n=r(74848);const s={title:"MapComponents/MlGeojsonLayerWithSource",component:a.A,argTypes:{},decorators:t.A};var i=function(){return(0,n.jsx)(a.A,{})};i.displayName="Template";var p=i.bind({});p.args={mapId:"map_1"},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"() => <MlGeojsonLayerWithSource />",...p.parameters?.docs?.source}}};const l=["ExampleConfig"]},12682:(e,o,r)=>{r.d(o,{A:()=>l});var a=r(96540),t=r(40554),n=r(64365),s=r(90175),i=r(74848),p=function(e){var o=(0,t.A)({mapId:e.mapId,waitForLayer:e.insertBeforeLayer}),r=(0,a.useRef)(!1),p="geojson-source-island";return(0,s.A)({mapId:e.mapId,sourceId:p,source:{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[7.678070068359375,53.77276133960687],[7.665367126464845,53.76190478322587],[7.66794204711914,53.75439486837337],[7.682018280029297,53.75104541932613],[7.683563232421874,53.752567929273795],[7.6895713806152335,53.75784553654847],[7.694721221923828,53.765253366367],[7.697296142578124,53.76555776977467],[7.696952819824219,53.76190478322587],[7.702102661132812,53.7634268995759],[7.74038314819336,53.760179651329416],[7.7458763122558585,53.7626151110553],[7.76956558227539,53.76413720165758],[7.796001434326172,53.77002209954434],[7.801666259765624,53.77113810781356],[7.801666259765624,53.77235553754314],[7.806129455566406,53.77306568858016],[7.815742492675781,53.775703287246394],[7.819690704345703,53.77752921999979],[7.81951904296875,53.77955794100295],[7.8172874450683585,53.78026797018521],[7.785530090332031,53.780166538180396],[7.756175994873047,53.78067369575275],[7.754802703857421,53.7819922767562],[7.7398681640625,53.78189084891923],[7.725791931152345,53.78168799250984],[7.71686553955078,53.77986224069494],[7.709827423095702,53.78087655706549],[7.695751190185547,53.78036940194483],[7.687854766845703,53.778340720169446],[7.678070068359375,53.77276133960687]]]}}}}),(0,n.A)({mapId:e.mapId,layerId:"Spiekeroog-area",options:{id:"layer1",source:p,type:"fill",paint:{"fill-color":"green","fill-opacity":.5}}}),(0,n.A)({mapId:e.mapId,layerId:"Spiekeroog-points",options:{id:"Spiekeroog-points",source:p,type:"circle",paint:{"circle-radius":4,"circle-color":"green"}}}),(0,a.useEffect)((function(){o.map&&!r.current&&(r.current=!0,o.map.map.setCenter([7.7388381958,53.7732685866]),o.map.map.setZoom(11))}),[o.map,e.mapId]),(0,i.jsx)(i.Fragment,{})};p.defaultProps={mapId:"map_1"};const l=p;try{p.displayName="MlGeojsonLayerWithSource",p.__docgenInfo={description:"MlGeojsonLayerWithSource",displayName:"MlGeojsonLayerWithSource",props:{mapId:{defaultValue:{value:"map_1"},description:"Id of the target MapLibre instance in mapContext",name:"mapId",required:!1,type:{name:"string | undefined"}},insertBeforeLayer:{defaultValue:null,description:'Id of an existing layer in the mapLibre instance to help specify the layer order\nThis layer will be visually beneath the layer with the "insertBeforeLayer" id.',name:"insertBeforeLayer",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MlGeojsonLayerWithSource/MlGeojsonLayerWithSource.tsx#MlGeojsonLayerWithSource"]={docgenInfo:p.__docgenInfo,name:"MlGeojsonLayerWithSource",path:"src/components/MlGeojsonLayerWithSource/MlGeojsonLayerWithSource.tsx#MlGeojsonLayerWithSource"})}catch(e){}},77477:(e,o,r)=>{r.d(o,{A:()=>c});var a=r(96540),t=r(95532),n=r(32348),s=(r(18582),r(68704)),i=r(65793),p=r(30901),l=r(74848);const c=[function(e,o){var r,c=(0,a.useMemo)((function(){var e;return(0,p.A)(null==o||null===(e=o.globals)||void 0===e?void 0:e.theme)}),[null==o||null===(r=o.globals)||void 0===r?void 0:r.theme]);return(0,l.jsx)("div",{className:"fullscreen_map",children:(0,l.jsx)(t.mO,{children:(0,l.jsxs)(i.A,{theme:c,children:[(0,l.jsx)(e,{}),(0,l.jsx)(n.A,{options:{zoom:14.5,style:"https://wms.wheregroup.com/tileserver/style/osm-bright.json",center:[7.0851268,50.73884]},mapId:"map_1"}),(0,l.jsx)(s.A,{showZoomButtons:!1,mapId:"map_1"})]})})})}]}}]);