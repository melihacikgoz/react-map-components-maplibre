"use strict";(self.webpackChunk_mapcomponents_react_maplibre=self.webpackChunk_mapcomponents_react_maplibre||[]).push([[350],{25018:(t,e,n)=>{n.r(e),n.d(e,{Overlay:()=>d,__namedExportsOrder:()=>y,catalogueDemo:()=>f,default:()=>m});var r=n(67294),o=n(58725),a=n(18434),i=n(54553),l=n(98396);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===c(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const m={title:"MapComponents/MlScaleReference",component:o.Z,argTypes:{url:{},layer:{}},decorators:i.Z};var f=function(t){return r.createElement(a.Z,{unmovableButtons:r.createElement(o.Z,t)})}.bind({});f.args={};var d=function(t){var e=(0,l.Z)((function(t){return t.breakpoints.down("md")}));return r.createElement("div",{style:{position:"absolute",zIndex:1e3,bottom:e?"38px":"8px",left:"10px"}},r.createElement(o.Z,t))}.bind({});d.args={},f.parameters=s({storySource:{source:"(props: MlScaleReferenceProps ) => {\n\treturn <TopToolbar unmovableButtons={<MlScaleReference {...props} />} />;\n}"}},f.parameters),d.parameters=s({storySource:{source:'(props: MlScaleReferenceProps ) => {\n\tconst mediaIsMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down(\'md\'));\n\n\treturn (\n\t\t<div\n\t\t\tstyle={{\n\t\t\t\tposition: "absolute",\n\t\t\t\tzIndex: 1000,\n\t\t\t\tbottom: mediaIsMobile ? "38px": "8px",\n\t\t\t\tleft: "10px",\n\t\t\t}}\n\t\t>\n\t\t\t<MlScaleReference {...props} />\n\t\t</div>\n\t);\n}'}},d.parameters);var y=["catalogueDemo","Overlay"]},460:(t,e,n)=>{n.r(e),n.d(e,{ExampleConfig:()=>Z,__namedExportsOrder:()=>C,default:()=>P});var r=n(67294),o=n(46871),a=n(54553),i=n(90686),l=n(31072),c=n(17781),u=n(70576),s=n(6867),p=n(22961),m=n(72450),f=n(59334),d=n(87455),y=n(52124),v=n(42440),b=n(76956),S=n(72642),g=n(33382),h=n(18037),O=n(32141),w=n(18434);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===E(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function x(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return I(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const P={title:"MapComponents/MlShareMapState",component:o.Z,argTypes:{},decorators:a.Z};var Z=function(){var t,e=[d,y],n=x((0,r.useState)(!0),2),a=n[0],E=n[1],j=(0,l.Z)({mapId:"map_1"}),M=(0,i.Z)({mapId:"map_1",watch:{viewport:!1,layers:!0,sources:!1},filter:{includeBaseLayers:!1}}),I=x((0,r.useState)(!0),2),P=I[0],Z=I[1];return r.createElement(r.Fragment,null,r.createElement(w.Z,{buttons:r.createElement(S.Z,{variant:P?"contained":"outlined",onClick:function(){return Z(!P)},sx:{marginRight:{xs:"0px",sm:"10px"}}},"Share Map State")}),r.createElement(o.Z,{active:a}),e.map((function(t,e){return r.createElement(b.Z,{layerId:"GeoJson_"+e,type:"line",geojson:t,key:"GeoJson_"+e})})),r.createElement(c.Z,{open:P,setOpen:Z,name:"Share Map State"},r.createElement(g.Z,{size:"small",selected:a,value:a,onChange:function(){E(!a)}},a?r.createElement(h.Z,null):r.createElement(O.Z,null),a?"active":"inactive"),r.createElement(v.Z,{dense:!0,key:"layers"},null===(t=M.layers)||void 0===t?void 0:t.map((function(t){return r.createElement(u.ZP,{key:null==t?void 0:t.id,secondaryAction:r.createElement(s.Z,{edge:"end","aria-label":"toggle visibility",onClick:function(){if(null!=t&&t.id){var e,n,r,o,a,i,l,c=null===(e=j.map)||void 0===e||null===(n=e.getLayer)||void 0===n||null===(r=n.call(e,null==t?void 0:t.id))||void 0===r?void 0:r.getLayoutProperty("visibility");null===(o=j.map)||void 0===o||null===(a=o.getLayer)||void 0===a||null===(i=a.call(o,null==t?void 0:t.id))||void 0===i||i.setLayoutProperty("visibility","none"===c?"visible":"none"),null===(l=j.map)||void 0===l||l.map.fire("zoom")}}},null!=t&&t.visible?r.createElement(p.Z,null):r.createElement(m.Z,null))},r.createElement(f.Z,{primary:null==t?void 0:t.id,secondary:""}))})))))}.bind({});Z.parameters={},Z.args={},Z.parameters=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){M(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({storySource:{source:"() => {\n\tconst geoJsonArray = [sample_geojson_1, sample_geojson_2];\n\tconst [watchState, setWatchState] = useState(true);\n\tconst mapHook = useMap({ mapId: 'map_1' });\n\tconst mapState = useMapState({\n\t\tmapId: 'map_1',\n\t\twatch: {\n\t\t\tviewport: false,\n\t\t\tlayers: true,\n\t\t\tsources: false,\n\t\t},\n\t\tfilter: {\n\t\t\tincludeBaseLayers: false,\n\t\t},\n\t});\n\tconst [openSidebar, setOpenSidebar] = useState(true);\n\n\treturn (\n\t\t<>\n\t\t\t<TopToolbar\n\t\t\t\tbuttons={\n\t\t\t\t\t<Button\n\t\t\t\t\t\tvariant={openSidebar ? 'contained' : 'outlined'}\n\t\t\t\t\t\tonClick={() => setOpenSidebar(!openSidebar)}\n\t\t\t\t\t\tsx={{ marginRight: { xs: '0px', sm: '10px' } }}\n\t\t\t\t\t>\n\t\t\t\t\t\tShare Map State\n\t\t\t\t\t</Button>\n\t\t\t\t}\n\t\t\t/>\n\t\t\t<MlShareMapState active={watchState} />\n\t\t\t{geoJsonArray.map((el, i) => (\n\t\t\t\t<MlGeoJsonLayer\n\t\t\t\t\tlayerId={'GeoJson_' + i}\n\t\t\t\t\ttype=\"line\"\n\t\t\t\t\tgeojson={el as unknown as Feature}\n\t\t\t\t\tkey={'GeoJson_' + i}\n\t\t\t\t/>\n\t\t\t))}\n\t\t\t<Sidebar open={openSidebar} setOpen={setOpenSidebar} name={'Share Map State'}>\n\t\t\t\t<ToggleButton\n\t\t\t\t\tsize=\"small\"\n\t\t\t\t\tselected={watchState}\n\t\t\t\t\tvalue={watchState}\n\t\t\t\t\tonChange={() => {\n\t\t\t\t\t\tsetWatchState(!watchState);\n\t\t\t\t\t}}\n\t\t\t\t>\n\t\t\t\t\t{watchState ? <CheckCircleOutlineIcon /> : <ErrorOutlineIcon />}\n\n\t\t\t\t\t{watchState ? 'active' : 'inactive'}\n\t\t\t\t</ToggleButton>\n\t\t\t\t<List dense key=\"layers\">\n\t\t\t\t\t{mapState.layers?.map((el) => (\n\t\t\t\t\t\t<ListItem\n\t\t\t\t\t\t\tkey={el?.id}\n\t\t\t\t\t\t\tsecondaryAction={\n\t\t\t\t\t\t\t\t<IconButton\n\t\t\t\t\t\t\t\t\tedge=\"end\"\n\t\t\t\t\t\t\t\t\taria-label=\"toggle visibility\"\n\t\t\t\t\t\t\t\t\tonClick={() => {\n\t\t\t\t\t\t\t\t\t\tif (el?.id) {\n\t\t\t\t\t\t\t\t\t\t\tconst currentVisibility = mapHook.map\n\t\t\t\t\t\t\t\t\t\t\t\t?.getLayer?.(el?.id)\n\t\t\t\t\t\t\t\t\t\t\t\t?.getLayoutProperty('visibility');\n\t\t\t\t\t\t\t\t\t\t\tmapHook.map\n\t\t\t\t\t\t\t\t\t\t\t\t?.getLayer?.(el?.id)\n\t\t\t\t\t\t\t\t\t\t\t\t?.setLayoutProperty(\n\t\t\t\t\t\t\t\t\t\t\t\t\t'visibility',\n\t\t\t\t\t\t\t\t\t\t\t\t\tcurrentVisibility === 'none' ? 'visible' : 'none'\n\t\t\t\t\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t\t\t\t\tmapHook.map?.map.fire('zoom');\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t{el?.visible ? <VisibilityIcon /> : <VisibilityOffIcon />}\n\t\t\t\t\t\t\t\t</IconButton>\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<ListItemText primary={el?.id} secondary={''} />\n\t\t\t\t\t\t</ListItem>\n\t\t\t\t\t))}\n\t\t\t\t</List>\n\t\t\t</Sidebar>\n\t\t</>\n\t);\n}"}},Z.parameters);var C=["ExampleConfig"]},30808:(t,e,n)=>{n.r(e),n.d(e,{ExampleConfig:()=>d,__namedExportsOrder:()=>y,default:()=>f});var r=n(67294),o=n(51834),a=n(54553),i=n(17781),l=n(18434),c=n(72642);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const f={title:"MapComponents/MlSketchTool",component:o.Z,argTypes:{},decorators:a.Z};var d=function(){var t,e,n=(t=(0,r.useState)(!0),e=2,function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=n[0],u=n[1];return r.createElement(r.Fragment,null,r.createElement(l.Z,{buttons:r.createElement(r.Fragment,null,r.createElement(c.Z,{variant:a?"contained":"outlined",onClick:function(){return u(!a)},sx:{marginRight:{xs:"0px",sm:"10px"}}},"Sketch Tool"))}),r.createElement(i.Z,{open:a,setOpen:u,name:"Sketch Tool"},r.createElement(o.Z,null)))}.bind({});d.parameters={},d.args={},d.parameters=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({storySource:{source:"() => {\n\tconst [openSidebar, setOpenSidebar] = useState(true);\n\treturn (\n\t\t<>\n\t\t\t<TopToolbar\n\t\t\t\tbuttons={\n\t\t\t\t\t<>\n\t\t\t\t\t\t<Button\n\t\t\t\t\t\t\tvariant={openSidebar ? 'contained' : 'outlined'}\n\t\t\t\t\t\t\tonClick={() => setOpenSidebar(!openSidebar)}\n\t\t\t\t\t\t\tsx={{ marginRight: { xs: '0px', sm: '10px' } }}\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tSketch Tool\n\t\t\t\t\t\t</Button>\n\t\t\t\t\t</>\n\t\t\t\t}\n\t\t\t/>\n\t\t\t<Sidebar\n\t\t\t\topen={openSidebar}\n\t\t\t\tsetOpen={setOpenSidebar}\n\t\t\t\tname={'Sketch Tool'}\n\t\t\t>\n\t\t\t\t<MlSketchTool />\n\t\t\t</Sidebar>\n\t\t</>\n\t);\n}"}},d.parameters);var y=["ExampleConfig"]},58725:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(67294),o=n(31072);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var l=function(t){var e=(0,r.useRef)(0),n=(0,o.Z)({mapId:t.mapId,waitForLayer:t.insertBeforeLayer}),i=a((0,r.useState)(0),2),l=i[0],c=i[1],u=a((0,r.useState)(""),2),s=u[0],p=u[1],m=(0,r.useCallback)((function(){var r,o;if(n.map&&(null===(r=n.map)||void 0===r?void 0:r.map.getZoom())!==e.current){e.current=null===(o=n.map)||void 0===o?void 0:o.map.getZoom();var a=t.maxWidth||100,i=n.map.map._container.clientHeight/2,l=n.map.map.unproject([0,i]),c=n.map.map.unproject([a,i]),u=l.distanceTo(c);if("imperial"===t.unit){var s=3.2808*u;s>5280?f(a,s/5280,n.map.map._getUIString("ScaleControl.Miles")):f(a,s,n.map.map._getUIString("ScaleControl.Feet"))}else"nautical"===t.unit?f(a,u/1852,n.map.map._getUIString("ScaleControl.NauticalMiles")):u>=1e3?f(a,u/1e3,n.map.map._getUIString("ScaleControl.Kilometers")):f(a,u,n.map.map._getUIString("ScaleControl.Meters"))}}),[n.map,t.unit,t.maxWidth]);(0,r.useEffect)((function(){if(n.map){var t=m;return n.map.on("move",t,n.componentId),m(),function(){var e;null===(e=n.map)||void 0===e||e.map.off("move",t)}}}),[n.map,m]);var f=function(t,e,n){var r=d(e);c(t*(r/e)),p(r+"&nbsp;"+n)},d=function(t){var e=Math.pow(10,"".concat(Math.floor(t)).length-1),n=t/e;return e*(n>=10?10:n>=5?5:n>=3?3:n>=2?2:n>=1?1:function(t){var e=Math.pow(10,Math.ceil(-Math.log(t)/Math.LN10));return Math.round(t*e)/e}(n))};return r.createElement(r.Fragment,null,r.createElement("div",{style:{backgroundColor:"hsla(0,0%,100%,.75)",fontSize:"10px",border:"2px solid #333",borderTop:"#333",padding:"0 5px",color:"#333",boxSizing:"border-box",width:l+"px",fontFamily:"sans-serif"},dangerouslySetInnerHTML:{__html:s}}))};const c=l;try{l.displayName="MlScaleReference",l.__docgenInfo={description:"",displayName:"MlScaleReference",props:{mapId:{defaultValue:null,description:"",name:"mapId",required:!1,type:{name:"string | undefined"}},insertBeforeLayer:{defaultValue:null,description:"",name:"insertBeforeLayer",required:!1,type:{name:"string | undefined"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number | undefined"}},unit:{defaultValue:null,description:"",name:"unit",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MlScaleReference/MlScaleReference.tsx#MlScaleReference"]={docgenInfo:l.__docgenInfo,name:"MlScaleReference",path:"src/components/MlScaleReference/MlScaleReference.tsx#MlScaleReference"})}catch(t){}},46871:(t,e,n)=>{n.d(e,{Z:()=>b});var r=n(67294),o=n(45697),a=n.n(o),i=n(74736),l=n(28721),c=n(90686);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var d=function(){var t=Object.fromEntries(new URLSearchParams(window.location.search));return t.layers=JSON.parse(null!=t&&t.layers?t.layers:"[]"),t},y=d(),v=function(t){var e,n,o=(0,r.useContext)(i.Z),a=(0,r.useRef)(!1),u=(0,r.useRef)(),s=(e=(0,r.useState)(void 0),n=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(e,n)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=s[0],v=s[1],b=(0,r.useRef)({}),S=(0,r.useRef)((t.idPrefix?t.idPrefix:"MlShareMapState-")+(0,l.Z)()),g=(0,c.Z)({watch:{viewport:!1,layers:!0,sources:!1},filter:{includeBaseLayers:!1}}),h=(0,r.useRef)(!1),O=(0,r.useRef)(),w=(0,r.useRef)({viewport:{center:!1,bearing:!1,pitch:!1,zoom:!1},layers:p({},b)}),E=(0,r.useRef)({}),j=(0,r.useCallback)((function(){if(t.active){var e=[];for(var n in g.layers){var r,o,a;e.push({id:null===(r=g.layers[n])||void 0===r?void 0:r.id,type:null===(o=g.layers[n])||void 0===o?void 0:o.type,visible:null===(a=g.layers[n])||void 0===a?void 0:a.visible})}M();var i=new URLSearchParams(p(p(p({},d()),E.current),{},{layers:JSON.stringify(e)}));JSON.parse(Object.fromEntries(i).layers).forEach((function(t){b.current[t.id]=!1}));var l=new URLSearchParams(window.location.search);i.toString()!==l.toString()&&window.history.pushState(p({},E.current),document.title,"?"+i.toString())}}),[g.layers,t.active]);(0,r.useEffect)((function(){var t=S.current;return E.current=d(),function(){u.current&&(u.current.cleanup(t),u.current=void 0),a.current=!1}}),[]),(0,r.useEffect)((function(){u.current&&j()}),[j]),(0,r.useEffect)((function(){if(u.current){var t=j;return u.current.on("moveend",t,S.current),function(){var e;null===(e=u.current)||void 0===e||e.map.off("moveend",t)}}}),[j,m]),(0,r.useEffect)((function(){var e;null!=o&&null!==(e=o.mapExists)&&void 0!==e&&e.call(o,t.mapId)&&!a.current&&(a.current=!0,u.current=o.getMap(t.mapId),v(u.current),E.current.lat&&E.current.lng&&x())}),[o.mapIds,o,t.mapId,t.active]),(0,r.useEffect)((function(){var t;if(null!=g&&null!==(t=g.layers)&&void 0!==t&&t.length){var e;for(var n in void 0===O.current&&(O.current=void 0,null==y||null===(e=y.layers)||void 0===e||e.forEach((function(t){var e;null!==(e=O.current)&&void 0!==e&&e[t.id]&&(O.current[t.id]=!1)}))),O.current){var r=!0;if(!1===O.current[n]&&(r=!1),r)return}y.layers&&y.layers.forEach((function(t){var e,n,r,o;null!==(e=u.current)&&void 0!==e&&e.map.getLayer(t.id)&&!1===(null===(n=O.current)||void 0===n?void 0:n[t.id])&&(O.current[t.id]=!0,null===(r=u.current.map)||void 0===r||null===(o=r.getLayer(t.id))||void 0===o||o.setLayoutProperty("visibility",t.visible?"visible":"none"))}))}}),[g.layers,t.mapId,t.active]),(0,r.useEffect)((function(){m&&g.layers&&(t.active||m.cleanup(S.current))}),[t.active,m,g.layers]);var M=function(){var t,e,n,r,o;E.current.lat=null===(t=u.current)||void 0===t?void 0:t.map.getCenter().lat,E.current.lng=null===(e=u.current)||void 0===e?void 0:e.map.getCenter().lng,E.current.zoom=null===(n=u.current)||void 0===n?void 0:n.map.getZoom(),E.current.bearing=null===(r=u.current)||void 0===r?void 0:r.map.getBearing(),E.current.pitch=null===(o=u.current)||void 0===o?void 0:o.map.getPitch()},x=function(){var t,e,n,r;w.current.viewport.center||(w.current.viewport.center=!0,E.current.lng&&E.current.lat&&(null===(t=u.current)||void 0===t||t.map.setCenter([E.current.lng,E.current.lat])),E.current.zoom&&(null===(e=u.current)||void 0===e||e.map.setZoom(E.current.zoom)),E.current.bearing&&(null===(n=u.current)||void 0===n||n.map.setBearing(E.current.bearing)),E.current.pitch&&(null===(r=u.current)||void 0===r||r.map.setPitch(E.current.pitch)));h.current=!0};return window.onpopstate=function(t){var e;t.state&&t.state.lng&&t.state.lat&&t.state.zoom&&(null===(e=u.current)||void 0===e||e.map.easeTo({zoom:t.state.zoom,center:[t.state.lng,t.state.lat]}))},r.createElement(r.Fragment,null)};v.defaultProps={mapId:void 0},v.propTypes={mapId:a().string};const b=v;try{v.displayName="MlShareMapState",v.__docgenInfo={description:"",displayName:"MlShareMapState",props:{mapId:{defaultValue:{value:"undefined"},description:"",name:"mapId",required:!1,type:{name:"string | undefined"}},idPrefix:{defaultValue:null,description:"",name:"idPrefix",required:!1,type:{name:"string | undefined"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MlShareMapState/MlShareMapState.tsx#MlShareMapState"]={docgenInfo:v.__docgenInfo,name:"MlShareMapState",path:"src/components/MlShareMapState/MlShareMapState.tsx#MlShareMapState"})}catch(t){}},51834:(t,e,n)=>{n.d(e,{Z:()=>_});var r=n(67294),o=n(7726),a=n(18377),i=n(93482),l=n(42440),c=n(77957),u=n(76956),s=n(31072),p=n(41733),m=n(30062),f=n(8044),d=n(6912),y=n(44598),v=n(47320),b=n(72642),S=n(2658),g=n(87205),h=n(48141);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function w(t){return function(t){if(Array.isArray(t))return P(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||I(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?E(Object(n),!0).forEach((function(e){M(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function M(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===O(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function x(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(t,e)||I(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(t,e){if(t){if("string"==typeof t)return P(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(t,e):void 0}}function P(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Z=[{name:"Point",mode:"draw_point",icon:r.createElement(g.Z,null)},{name:"LineString",mode:"draw_line_string",icon:r.createElement(h.Z,null)},{name:"Polygon",mode:"draw_polygon",icon:r.createElement(o.Z,null)}],C=function(t){var e,n,o=(0,s.Z)({mapId:t.mapId,waitForLayer:t.insertBeforeLayer}),g=x((0,r.useState)(),2),h=g[0],O=g[1],E=x((0,r.useState)({activeGeometryIndex:void 0,selectedGeoJson:void 0,geometries:[],drawMode:void 0}),2),M=E[0],I=E[1],P=j({},t.buttonStyleOverride),C=function(){return r.createElement(r.Fragment,null,Z.map((function(t){var e=function(e){return M.drawMode===t.mode?e.palette.primary.main:e.palette.navigation.navColor};return r.createElement(r.Fragment,null,r.createElement(d.Z,{title:t.name},r.createElement(b.Z,{sx:j({color:function(e){return M.drawMode!==t.mode?e.palette.primary.main:e.palette.navigation.navColor},backgroundColor:e,"&:hover":{backgroundColor:e}},P),onClick:function(){return e=t.mode,void I((function(t){return{drawMode:t.drawMode!==e?e:void 0,geometries:t.geometries,activeGeometryIndex:void 0,selectedGeoJson:void 0}}));var e}},t.icon)))})))};return r.createElement(r.Fragment,null,r.createElement(a.Z,{sx:{zIndex:104}},r.createElement(f.Z,null,r.createElement(C,null))),M.drawMode&&r.createElement(i.Z,{mode:M.drawMode,geojson:M.selectedGeoJson,onChange:function(t){null!=t&&t[0]&&I((function(e){var n=w(M.geometries);if(void 0===e.activeGeometryIndex){var r=t[0];r.properties.id=r.id,e.activeGeometryIndex=n.length,n.push(r)}else n[e.activeGeometryIndex]=t[0];return j(j({},e),{},{geometries:n})}))},onFinish:function(){I((function(t){return j(j({},t),{},{drawMode:void 0,activeGeometryIndex:void 0,selectedGeoJson:void 0})}))}}),r.createElement(l.Z,{sx:{zIndex:105}},M.geometries.map((function(e){return r.createElement(r.Fragment,null,r.createElement(a.Z,{key:e.id,sx:{display:"flex",flexDirection:"column"}},r.createElement("br",null),r.createElement(a.Z,{flexDirection:"row",sx:{"&:hover":{backgroundColor:"rgb(177, 177, 177, 0.2)"}},onMouseOver:function(){O(e)},onMouseLeave:function(){O(void 0)}},r.createElement(y.Z,{listItemSx:P,configurable:!0,layerComponent:r.createElement(u.Z,{mapId:t.mapId,geojson:e,layerId:String(e.id)}),type:"layer",name:String(e.id),description:e.geometry.type}),r.createElement(a.Z,{sx:{padding:"3px 30px"}},r.createElement(f.Z,{size:"small"},r.createElement(b.Z,{onClick:function(){var t;null==o||null===(t=o.map)||void 0===t||t.map.setCenter("Point"===e.geometry.type?e.geometry.coordinates:m.MqI(e).geometry.coordinates)}},r.createElement(v.Z,null)),r.createElement(b.Z,{sx:P,onClick:function(){I((function(t){return j(j({},t),{},{selectedGeoJson:e,activeGeometryIndex:t.geometries.indexOf(e),drawMode:"simple_select"})}))}},r.createElement(c.Z,null)),r.createElement(b.Z,{sx:P,onClick:function(){var t;t=e,I((function(e){var n=w(e.geometries);return n.splice(n.indexOf(t),1),j(j({},e),{},{geometries:n,activeGeometryIndex:e.activeGeometryIndex?e.activeGeometryIndex-1:void 0})})),O(void 0)}},r.createElement(p.Z,null)))))))})),h&&r.createElement(u.Z,{mapId:t.mapId,geojson:{type:"FeatureCollection",features:[h]},type:"line",layerId:"highlightBorder",paint:{"line-color":"#dd9900","line-opacity":.4,"line-width":10}})),"simple_select"===M.drawMode&&r.createElement(S.Z,{sx:{fontSize:"0.6em"}},"Edit ",null===(e=M.selectedGeoJson)||void 0===e||null===(n=e.geometry)||void 0===n?void 0:n.type))};C.defaultProps={mapId:void 0,buttonStyleOverride:{}};const _=C;try{C.displayName="MlSketchTool",C.__docgenInfo={description:"Component template",displayName:"MlSketchTool",props:{mapId:{defaultValue:{value:"undefined"},description:"Id of the target MapLibre instance in mapContext",name:"mapId",required:!1,type:{name:"string | undefined"}},insertBeforeLayer:{defaultValue:null,description:'Id of an existing layer in the mapLibre instance to help specify the layer order\nThis layer will be visually beneath the layer with the "insertBeforeLayer" id.',name:"insertBeforeLayer",required:!1,type:{name:"string | undefined"}},buttonStyleOverride:{defaultValue:{value:"{}"},description:"Style attribute for the button-style\nhttps://mui.com/system/getting-started/the-sx-prop/",name:"buttonStyleOverride",required:!1,type:{name:"SxProps<{}> | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MlSketchTool/MlSketchTool.tsx#MlSketchTool"]={docgenInfo:C.__docgenInfo,name:"MlSketchTool",path:"src/components/MlSketchTool/MlSketchTool.tsx#MlSketchTool"})}catch(t){}}}]);