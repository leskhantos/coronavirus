(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{221:function(t,e,n){var content=n(223);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("6759f5ab",content,!0,{sourceMap:!1})},222:function(t,e,n){"use strict";var o=n(221);n.n(o).a},223:function(t,e,n){(e=n(53)(!1)).push([t.i,".container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}",""]),t.exports=e},224:function(t,e,n){"use strict";n.r(e);n(52);var o=n(19),r={data:function(){return{chartOptions:{chart:{width:400,type:"pie",animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}},title:{text:"В мире",margin:5,style:{fontSize:"15px",fontWeight:"bold"}},dataLabels:{formatter:function(t,e){return e.w.config.series[e.seriesIndex]}},labels:["Выздоровевших","Заболевших","Умерших"],colors:["#00FF00","#FF0000","#000000"],responsive:[{breakpoint:480,options:{chart:{width:"100%"},legend:{position:"bottom"}}}],plotOptions:{pie:{donut:{labels:{show:!0,name:{},value:{},total:{show:!0,showAlways:!1,label:"Всего",fontSize:"15px",fontFamily:"Helvetica, Arial, sans-serif",fontWeight:700,color:"#373d3f",formatter:function(t){return t.globals.seriesTotals.reduce((function(a,b){return a+b}),0)}}}}}}},data:{},dataKZ:{},dataRU:{},chartOptionsKZ:{chart:{width:400,type:"pie",animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}},title:{text:"KZ",margin:5,style:{fontSize:"15px",fontWeight:"bold"}},dataLabels:{formatter:function(t,e){return e.w.config.series[e.seriesIndex]}},labels:["Выздоровевших","Заболевших","Умерших"],colors:["#00FF00","#FF0000","#000000"],responsive:[{breakpoint:480,options:{chart:{width:"100%"},legend:{position:"bottom"}}}],plotOptions:{pie:{donut:{labels:{show:!0,name:{},value:{},total:{show:!0,showAlways:!1,label:"Всего",fontSize:"15px",fontFamily:"Helvetica, Arial, sans-serif",fontWeight:700,color:"#373d3f",formatter:function(t){return t.globals.seriesTotals.reduce((function(a,b){return a+b}),0)}}}}}}},chartOptionsRU:{chart:{width:400,type:"pie",animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}},title:{text:"RUS",margin:5,style:{fontSize:"15px",fontWeight:"bold"}},dataLabels:{formatter:function(t,e){return e.w.config.series[e.seriesIndex]}},labels:["Выздоровевших","Заболевших","Умерших"],colors:["#00FF00","#FF0000","#000000"],responsive:[{breakpoint:480,options:{chart:{width:"100%"},legend:{position:"bottom"}}}],plotOptions:{pie:{donut:{labels:{show:!0,name:{},value:{},total:{show:!0,showAlways:!1,label:"Всего",fontSize:"15px",fontFamily:"Helvetica, Arial, sans-serif",fontWeight:700,color:"#373d3f",formatter:function(t){return t.globals.seriesTotals.reduce((function(a,b){return a+b}),0)}}}}}}}}},computed:{series:function(){return[this.data.recovered,this.data.active,this.data.deaths]},seriesKZ:function(){return[this.dataKZ.recovered,this.dataKZ.active,this.dataKZ.deaths]},seriesRU:function(){return[this.dataRU.recovered,this.dataRU.active,this.dataRU.deaths]}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://corona.lmao.ninja/v2/all");case 2:return t.data=e.sent,e.next=5,t.$axios.$get("https://corona.lmao.ninja/v2/countries/KZ");case 5:return t.dataKZ=e.sent,e.next=8,t.$axios.$get("https://corona.lmao.ninja/v2/countries/RUS");case 8:t.dataRU=e.sent;case 9:case"end":return e.stop()}}),e)})))()}},l=(n(222),n(48)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.$fetchState.pending?n("p",[t._v("Fetching data...")]):n("div",[n("div",{staticClass:"d-flex flex-column"},[n("h2",[t._v("\n        "+t._s(new Date(this.data.updated).toLocaleTimeString())+"\n      ")]),t._v(" "),n("h1",[t._v("\n        "+t._s(new Date(this.data.updated).toLocaleDateString())+"\n      ")]),t._v(" "),t.series?n("apexchart",{attrs:{type:"donut",width:"400",options:t.chartOptions,series:t.series}}):t._e(),t._v(" "),t.seriesKZ?n("apexchart",{attrs:{type:"donut",width:"400",options:t.chartOptionsKZ,series:t.seriesKZ}}):t._e(),t._v(" "),t.seriesRU?n("apexchart",{attrs:{type:"donut",width:"400",options:t.chartOptionsRU,series:t.seriesRU}}):t._e()],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);