!function(t){function o(o,n,i){d3.csv(o,function(o){var n=new Date(o[o.length-1].date),i=n.toISOString().substring(0,10).replace(/-/g,"/");$(".current").text(i),$(".number").text(o.length),e(o,u);var a=["台北市","新北市","桃園市","台中市","台南市","高雄市","基隆市","新竹市","嘉義市","新竹縣","苗栗縣","彰化縣","南投縣","雲林縣","嘉義縣","屏東縣","宜蘭縣","花蓮縣","台東縣","澎湖縣"],r=[],c={};o.forEach(function(t){c.hasOwnProperty(t.city)||(c[t.city]=0),c[t.city]+=1}),a.forEach(function(t){c.hasOwnProperty(t)||(c[t]=0)});for(var l in c)r.push({city:l,value:c[l]});r.sort(function(t,o){return o.value-t.value}),$(t).width()>1024?t.onscroll=function(){d||(d=!0,drawChart(r,function(t){return'病例數：<span style="color:red">'+t.value+"</span>"},!1))}:drawChart(r,function(t){return'病例數：<span style="color:red">'+t.value+"</span>"},!1)}),i&&d3.json(i,function(o,n){t.drawChart(n,showDefaultTip,!0)})}function n(){r=new L.Map("map");var t="pk.eyJ1IjoiYWJ6NTMzNzgiLCJhIjoiUkRleEgwVSJ9.rWFItANcHAZQ2U0ousK4cA",o="abz53378.0klc153h";L.tileLayer("https://api.tiles.mapbox.com/v4/"+o+"/{z}/{x}/{y}.png?access_token="+t,{attribution:'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a><a rel="license" href="http://creativecommons.org/licenses/by-nc/3.0/nl/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/3.0/nl/80x15.png" /></a>.',minZoom:6}).addTo(r),r.setView(new L.LatLng(23.6,120.9),7),l.addTo(r)}function e(t,o){s={},t.forEach(function(t){if(t.Longitude=parseFloat(t.Longitude),t.Latitude=parseFloat(t.Latitude),!(!t.Longitude||s[t.Longitude]&&s[t.Longitude][t.Latitude])){var n=L.circle([t.Latitude,t.Longitude],o.size,{fillColor:o.fillColor,color:o.color,opacity:o.opacity,clickable:!1}).addTo(r);c.push(n),s[t.Longitude]||(s[t.Longitude]={}),s[t.Longitude][t.Latitude]=!0}})}function i(){return this._div=L.DomUtil.create("div","map-info"),this._div.innerHTML="圖示：一週確診病例數",this._div}function a(){return this._div.innerHTML="",this._div}o("https://s3-ap-northeast-1.amazonaws.com/static.twstat.com/dengue105.csv",null,null,null,null);var r,c=[],l=L.control(),s={},u={size:100,color:"#F44336",fillColor:"#F44336",showBig:!0,opacity:1};l.onAdd=i,l.update=a,t.initData=o,n();var d=!1;$(".arrow").click(function(){$("html, body").animate({scrollTop:$("#info").position().top},"slow")})}(window);