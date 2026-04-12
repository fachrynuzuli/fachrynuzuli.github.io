import{aT as he,aU as We,aV as me,aW as ke,aX as ye,aY as At,aZ as Ne,aO as Et,aP as It,g as Pe,s as ze,q as Ve,p as Re,a as He,b as Be,_ as c,c as dt,d as xt,a_ as Ge,a$ as Xe,b0 as je,e as qe,K as Ue,b1 as j,l as ot,b2 as ne,b3 as ie,b4 as Ze,b5 as Ke,b6 as Qe,b7 as Je,b8 as tn,b9 as en,ba as nn,bb as se,bc as re,bd as ae,be as oe,bf as ce,k as sn,j as rn,z as an,u as on}from"./index-DWXLX-DV.js";const cn=Math.PI/180,ln=180/Math.PI,St=18,ge=.96422,pe=1,ve=.82521,be=4/29,ft=6/29,xe=3*ft*ft,un=ft*ft*ft;function Te(t){if(t instanceof et)return new et(t.l,t.a,t.b,t.opacity);if(t instanceof it)return we(t);t instanceof he||(t=We(t));var n=Ot(t.r),i=Ot(t.g),s=Ot(t.b),a=Yt((.2225045*n+.7168786*i+.0606169*s)/pe),f,d;return n===i&&i===s?f=d=a:(f=Yt((.4360747*n+.3850649*i+.1430804*s)/ge),d=Yt((.0139322*n+.0971045*i+.7141733*s)/ve)),new et(116*a-16,500*(f-a),200*(a-d),t.opacity)}function dn(t,n,i,s){return arguments.length===1?Te(t):new et(t,n,i,s??1)}function et(t,n,i,s){this.l=+t,this.a=+n,this.b=+i,this.opacity=+s}me(et,dn,ke(ye,{brighter(t){return new et(this.l+St*(t??1),this.a,this.b,this.opacity)},darker(t){return new et(this.l-St*(t??1),this.a,this.b,this.opacity)},rgb(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,i=isNaN(this.b)?t:t-this.b/200;return n=ge*Lt(n),t=pe*Lt(t),i=ve*Lt(i),new he(Ft(3.1338561*n-1.6168667*t-.4906146*i),Ft(-.9787684*n+1.9161415*t+.033454*i),Ft(.0719453*n-.2289914*t+1.4052427*i),this.opacity)}}));function Yt(t){return t>un?Math.pow(t,1/3):t/xe+be}function Lt(t){return t>ft?t*t*t:xe*(t-be)}function Ft(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Ot(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function fn(t){if(t instanceof it)return new it(t.h,t.c,t.l,t.opacity);if(t instanceof et||(t=Te(t)),t.a===0&&t.b===0)return new it(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var n=Math.atan2(t.b,t.a)*ln;return new it(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function Pt(t,n,i,s){return arguments.length===1?fn(t):new it(t,n,i,s??1)}function it(t,n,i,s){this.h=+t,this.c=+n,this.l=+i,this.opacity=+s}function we(t){if(isNaN(t.h))return new et(t.l,0,0,t.opacity);var n=t.h*cn;return new et(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}me(it,Pt,ke(ye,{brighter(t){return new it(this.h,this.c,this.l+St*(t??1),this.opacity)},darker(t){return new it(this.h,this.c,this.l-St*(t??1),this.opacity)},rgb(){return we(this).rgb()}}));function hn(t){return function(n,i){var s=t((n=Pt(n)).h,(i=Pt(i)).h),a=At(n.c,i.c),f=At(n.l,i.l),d=At(n.opacity,i.opacity);return function(x){return n.h=s(x),n.c=a(x),n.l=f(x),n.opacity=d(x),n+""}}}const mn=hn(Ne);function kn(t){return t}var wt=1,Wt=2,zt=3,Tt=4,le=1e-6;function yn(t){return"translate("+t+",0)"}function gn(t){return"translate(0,"+t+")"}function pn(t){return n=>+t(n)}function vn(t,n){return n=Math.max(0,t.bandwidth()-n*2)/2,t.round()&&(n=Math.round(n)),i=>+t(i)+n}function bn(){return!this.__axis}function _e(t,n){var i=[],s=null,a=null,f=6,d=6,x=3,E=typeof window<"u"&&window.devicePixelRatio>1?0:.5,A=t===wt||t===Tt?-1:1,T=t===Tt||t===Wt?"x":"y",F=t===wt||t===zt?yn:gn;function C(D){var V=s??(n.ticks?n.ticks.apply(n,i):n.domain()),I=a??(n.tickFormat?n.tickFormat.apply(n,i):kn),S=Math.max(f,0)+x,M=n.range(),W=+M[0]+E,L=+M[M.length-1]+E,R=(n.bandwidth?vn:pn)(n.copy(),E),H=D.selection?D.selection():D,$=H.selectAll(".domain").data([null]),p=H.selectAll(".tick").data(V,n).order(),h=p.exit(),u=p.enter().append("g").attr("class","tick"),b=p.select("line"),v=p.select("text");$=$.merge($.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),p=p.merge(u),b=b.merge(u.append("line").attr("stroke","currentColor").attr(T+"2",A*f)),v=v.merge(u.append("text").attr("fill","currentColor").attr(T,A*S).attr("dy",t===wt?"0em":t===zt?"0.71em":"0.32em")),D!==H&&($=$.transition(D),p=p.transition(D),b=b.transition(D),v=v.transition(D),h=h.transition(D).attr("opacity",le).attr("transform",function(k){return isFinite(k=R(k))?F(k+E):this.getAttribute("transform")}),u.attr("opacity",le).attr("transform",function(k){var m=this.parentNode.__axis;return F((m&&isFinite(m=m(k))?m:R(k))+E)})),h.remove(),$.attr("d",t===Tt||t===Wt?d?"M"+A*d+","+W+"H"+E+"V"+L+"H"+A*d:"M"+E+","+W+"V"+L:d?"M"+W+","+A*d+"V"+E+"H"+L+"V"+A*d:"M"+W+","+E+"H"+L),p.attr("opacity",1).attr("transform",function(k){return F(R(k)+E)}),b.attr(T+"2",A*f),v.attr(T,A*S).text(I),H.filter(bn).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===Wt?"start":t===Tt?"end":"middle"),H.each(function(){this.__axis=R})}return C.scale=function(D){return arguments.length?(n=D,C):n},C.ticks=function(){return i=Array.from(arguments),C},C.tickArguments=function(D){return arguments.length?(i=D==null?[]:Array.from(D),C):i.slice()},C.tickValues=function(D){return arguments.length?(s=D==null?null:Array.from(D),C):s&&s.slice()},C.tickFormat=function(D){return arguments.length?(a=D,C):a},C.tickSize=function(D){return arguments.length?(f=d=+D,C):f},C.tickSizeInner=function(D){return arguments.length?(f=+D,C):f},C.tickSizeOuter=function(D){return arguments.length?(d=+D,C):d},C.tickPadding=function(D){return arguments.length?(x=+D,C):x},C.offset=function(D){return arguments.length?(E=+D,C):E},C}function xn(t){return _e(wt,t)}function Tn(t){return _e(zt,t)}var De={exports:{}};(function(t,n){(function(i,s){t.exports=s()})(Et,function(){var i="day";return function(s,a,f){var d=function(A){return A.add(4-A.isoWeekday(),i)},x=a.prototype;x.isoWeekYear=function(){return d(this).year()},x.isoWeek=function(A){if(!this.$utils().u(A))return this.add(7*(A-this.isoWeek()),i);var T,F,C,D,V=d(this),I=(T=this.isoWeekYear(),F=this.$u,C=(F?f.utc:f)().year(T).startOf("year"),D=4-C.isoWeekday(),C.isoWeekday()>4&&(D+=7),C.add(D,i));return V.diff(I,"week")+1},x.isoWeekday=function(A){return this.$utils().u(A)?this.day()||7:this.day(this.day()%7?A:A-7)};var E=x.startOf;x.startOf=function(A,T){var F=this.$utils(),C=!!F.u(T)||T;return F.p(A)==="isoweek"?C?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):E.bind(this)(A,T)}}})})(De);var wn=De.exports;const _n=It(wn);var Se={exports:{}};(function(t,n){(function(i,s){t.exports=s()})(Et,function(){var i={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},s=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,f=/\d\d/,d=/\d\d?/,x=/\d*[^-_:/,()\s\d]+/,E={},A=function(S){return(S=+S)+(S>68?1900:2e3)},T=function(S){return function(M){this[S]=+M}},F=[/[+-]\d\d:?(\d\d)?|Z/,function(S){(this.zone||(this.zone={})).offset=function(M){if(!M||M==="Z")return 0;var W=M.match(/([+-]|\d\d)/g),L=60*W[1]+(+W[2]||0);return L===0?0:W[0]==="+"?-L:L}(S)}],C=function(S){var M=E[S];return M&&(M.indexOf?M:M.s.concat(M.f))},D=function(S,M){var W,L=E.meridiem;if(L){for(var R=1;R<=24;R+=1)if(S.indexOf(L(R,0,M))>-1){W=R>12;break}}else W=S===(M?"pm":"PM");return W},V={A:[x,function(S){this.afternoon=D(S,!1)}],a:[x,function(S){this.afternoon=D(S,!0)}],Q:[a,function(S){this.month=3*(S-1)+1}],S:[a,function(S){this.milliseconds=100*+S}],SS:[f,function(S){this.milliseconds=10*+S}],SSS:[/\d{3}/,function(S){this.milliseconds=+S}],s:[d,T("seconds")],ss:[d,T("seconds")],m:[d,T("minutes")],mm:[d,T("minutes")],H:[d,T("hours")],h:[d,T("hours")],HH:[d,T("hours")],hh:[d,T("hours")],D:[d,T("day")],DD:[f,T("day")],Do:[x,function(S){var M=E.ordinal,W=S.match(/\d+/);if(this.day=W[0],M)for(var L=1;L<=31;L+=1)M(L).replace(/\[|\]/g,"")===S&&(this.day=L)}],w:[d,T("week")],ww:[f,T("week")],M:[d,T("month")],MM:[f,T("month")],MMM:[x,function(S){var M=C("months"),W=(C("monthsShort")||M.map(function(L){return L.slice(0,3)})).indexOf(S)+1;if(W<1)throw new Error;this.month=W%12||W}],MMMM:[x,function(S){var M=C("months").indexOf(S)+1;if(M<1)throw new Error;this.month=M%12||M}],Y:[/[+-]?\d+/,T("year")],YY:[f,function(S){this.year=A(S)}],YYYY:[/\d{4}/,T("year")],Z:F,ZZ:F};function I(S){var M,W;M=S,W=E&&E.formats;for(var L=(S=M.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(b,v,k){var m=k&&k.toUpperCase();return v||W[k]||i[k]||W[m].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(o,l,y){return l||y.slice(1)})})).match(s),R=L.length,H=0;H<R;H+=1){var $=L[H],p=V[$],h=p&&p[0],u=p&&p[1];L[H]=u?{regex:h,parser:u}:$.replace(/^\[|\]$/g,"")}return function(b){for(var v={},k=0,m=0;k<R;k+=1){var o=L[k];if(typeof o=="string")m+=o.length;else{var l=o.regex,y=o.parser,g=b.slice(m),w=l.exec(g)[0];y.call(v,w),b=b.replace(w,"")}}return function(r){var z=r.afternoon;if(z!==void 0){var e=r.hours;z?e<12&&(r.hours+=12):e===12&&(r.hours=0),delete r.afternoon}}(v),v}}return function(S,M,W){W.p.customParseFormat=!0,S&&S.parseTwoDigitYear&&(A=S.parseTwoDigitYear);var L=M.prototype,R=L.parse;L.parse=function(H){var $=H.date,p=H.utc,h=H.args;this.$u=p;var u=h[1];if(typeof u=="string"){var b=h[2]===!0,v=h[3]===!0,k=b||v,m=h[2];v&&(m=h[2]),E=this.$locale(),!b&&m&&(E=W.Ls[m]),this.$d=function(g,w,r,z){try{if(["x","X"].indexOf(w)>-1)return new Date((w==="X"?1e3:1)*g);var e=I(w)(g),_=e.year,P=e.month,N=e.day,O=e.hours,X=e.minutes,Y=e.seconds,K=e.milliseconds,st=e.zone,lt=e.week,kt=new Date,yt=N||(_||P?1:kt.getDate()),ut=_||kt.getFullYear(),B=0;_&&!P||(B=P>0?P-1:kt.getMonth());var Z,q=O||0,at=X||0,Q=Y||0,rt=K||0;return st?new Date(Date.UTC(ut,B,yt,q,at,Q,rt+60*st.offset*1e3)):r?new Date(Date.UTC(ut,B,yt,q,at,Q,rt)):(Z=new Date(ut,B,yt,q,at,Q,rt),lt&&(Z=z(Z).week(lt).toDate()),Z)}catch{return new Date("")}}($,u,p,W),this.init(),m&&m!==!0&&(this.$L=this.locale(m).$L),k&&$!=this.format(u)&&(this.$d=new Date("")),E={}}else if(u instanceof Array)for(var o=u.length,l=1;l<=o;l+=1){h[1]=u[l-1];var y=W.apply(this,h);if(y.isValid()){this.$d=y.$d,this.$L=y.$L,this.init();break}l===o&&(this.$d=new Date(""))}else R.call(this,H)}}})})(Se);var Dn=Se.exports;const Sn=It(Dn);var Ce={exports:{}};(function(t,n){(function(i,s){t.exports=s()})(Et,function(){return function(i,s){var a=s.prototype,f=a.format;a.format=function(d){var x=this,E=this.$locale();if(!this.isValid())return f.bind(this)(d);var A=this.$utils(),T=(d||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(F){switch(F){case"Q":return Math.ceil((x.$M+1)/3);case"Do":return E.ordinal(x.$D);case"gggg":return x.weekYear();case"GGGG":return x.isoWeekYear();case"wo":return E.ordinal(x.week(),"W");case"w":case"ww":return A.s(x.week(),F==="w"?1:2,"0");case"W":case"WW":return A.s(x.isoWeek(),F==="W"?1:2,"0");case"k":case"kk":return A.s(String(x.$H===0?24:x.$H),F==="k"?1:2,"0");case"X":return Math.floor(x.$d.getTime()/1e3);case"x":return x.$d.getTime();case"z":return"["+x.offsetName()+"]";case"zzz":return"["+x.offsetName("long")+"]";default:return F}});return f.bind(this)(T)}}})})(Ce);var Cn=Ce.exports;const Mn=It(Cn);var Me={exports:{}};(function(t,n){(function(i,s){t.exports=s()})(Et,function(){var i,s,a=1e3,f=6e4,d=36e5,x=864e5,E=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,A=31536e6,T=2628e6,F=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,C={years:A,months:T,days:x,hours:d,minutes:f,seconds:a,milliseconds:1,weeks:6048e5},D=function($){return $ instanceof R},V=function($,p,h){return new R($,h,p.$l)},I=function($){return s.p($)+"s"},S=function($){return $<0},M=function($){return S($)?Math.ceil($):Math.floor($)},W=function($){return Math.abs($)},L=function($,p){return $?S($)?{negative:!0,format:""+W($)+p}:{negative:!1,format:""+$+p}:{negative:!1,format:""}},R=function(){function $(h,u,b){var v=this;if(this.$d={},this.$l=b,h===void 0&&(this.$ms=0,this.parseFromMilliseconds()),u)return V(h*C[I(u)],this);if(typeof h=="number")return this.$ms=h,this.parseFromMilliseconds(),this;if(typeof h=="object")return Object.keys(h).forEach(function(o){v.$d[I(o)]=h[o]}),this.calMilliseconds(),this;if(typeof h=="string"){var k=h.match(F);if(k){var m=k.slice(2).map(function(o){return o!=null?Number(o):0});return this.$d.years=m[0],this.$d.months=m[1],this.$d.weeks=m[2],this.$d.days=m[3],this.$d.hours=m[4],this.$d.minutes=m[5],this.$d.seconds=m[6],this.calMilliseconds(),this}}return this}var p=$.prototype;return p.calMilliseconds=function(){var h=this;this.$ms=Object.keys(this.$d).reduce(function(u,b){return u+(h.$d[b]||0)*C[b]},0)},p.parseFromMilliseconds=function(){var h=this.$ms;this.$d.years=M(h/A),h%=A,this.$d.months=M(h/T),h%=T,this.$d.days=M(h/x),h%=x,this.$d.hours=M(h/d),h%=d,this.$d.minutes=M(h/f),h%=f,this.$d.seconds=M(h/a),h%=a,this.$d.milliseconds=h},p.toISOString=function(){var h=L(this.$d.years,"Y"),u=L(this.$d.months,"M"),b=+this.$d.days||0;this.$d.weeks&&(b+=7*this.$d.weeks);var v=L(b,"D"),k=L(this.$d.hours,"H"),m=L(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3,o=Math.round(1e3*o)/1e3);var l=L(o,"S"),y=h.negative||u.negative||v.negative||k.negative||m.negative||l.negative,g=k.format||m.format||l.format?"T":"",w=(y?"-":"")+"P"+h.format+u.format+v.format+g+k.format+m.format+l.format;return w==="P"||w==="-P"?"P0D":w},p.toJSON=function(){return this.toISOString()},p.format=function(h){var u=h||"YYYY-MM-DDTHH:mm:ss",b={Y:this.$d.years,YY:s.s(this.$d.years,2,"0"),YYYY:s.s(this.$d.years,4,"0"),M:this.$d.months,MM:s.s(this.$d.months,2,"0"),D:this.$d.days,DD:s.s(this.$d.days,2,"0"),H:this.$d.hours,HH:s.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:s.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:s.s(this.$d.seconds,2,"0"),SSS:s.s(this.$d.milliseconds,3,"0")};return u.replace(E,function(v,k){return k||String(b[v])})},p.as=function(h){return this.$ms/C[I(h)]},p.get=function(h){var u=this.$ms,b=I(h);return b==="milliseconds"?u%=1e3:u=b==="weeks"?M(u/C[b]):this.$d[b],u||0},p.add=function(h,u,b){var v;return v=u?h*C[I(u)]:D(h)?h.$ms:V(h,this).$ms,V(this.$ms+v*(b?-1:1),this)},p.subtract=function(h,u){return this.add(h,u,!0)},p.locale=function(h){var u=this.clone();return u.$l=h,u},p.clone=function(){return V(this.$ms,this)},p.humanize=function(h){return i().add(this.$ms,"ms").locale(this.$l).fromNow(!h)},p.valueOf=function(){return this.asMilliseconds()},p.milliseconds=function(){return this.get("milliseconds")},p.asMilliseconds=function(){return this.as("milliseconds")},p.seconds=function(){return this.get("seconds")},p.asSeconds=function(){return this.as("seconds")},p.minutes=function(){return this.get("minutes")},p.asMinutes=function(){return this.as("minutes")},p.hours=function(){return this.get("hours")},p.asHours=function(){return this.as("hours")},p.days=function(){return this.get("days")},p.asDays=function(){return this.as("days")},p.weeks=function(){return this.get("weeks")},p.asWeeks=function(){return this.as("weeks")},p.months=function(){return this.get("months")},p.asMonths=function(){return this.as("months")},p.years=function(){return this.get("years")},p.asYears=function(){return this.as("years")},$}(),H=function($,p,h){return $.add(p.years()*h,"y").add(p.months()*h,"M").add(p.days()*h,"d").add(p.hours()*h,"h").add(p.minutes()*h,"m").add(p.seconds()*h,"s").add(p.milliseconds()*h,"ms")};return function($,p,h){i=h,s=h().$utils(),h.duration=function(v,k){var m=h.locale();return V(v,{$l:m},k)},h.isDuration=D;var u=p.prototype.add,b=p.prototype.subtract;p.prototype.add=function(v,k){return D(v)?H(this,v,1):u.bind(this)(v,k)},p.prototype.subtract=function(v,k){return D(v)?H(this,v,-1):b.bind(this)(v,k)}}})})(Me);var En=Me.exports;const In=It(En);var Vt=function(){var t=c(function(m,o,l,y){for(l=l||{},y=m.length;y--;l[m[y]]=o);return l},"o"),n=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],i=[1,26],s=[1,27],a=[1,28],f=[1,29],d=[1,30],x=[1,31],E=[1,32],A=[1,33],T=[1,34],F=[1,9],C=[1,10],D=[1,11],V=[1,12],I=[1,13],S=[1,14],M=[1,15],W=[1,16],L=[1,19],R=[1,20],H=[1,21],$=[1,22],p=[1,23],h=[1,25],u=[1,35],b={trace:c(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:c(function(o,l,y,g,w,r,z){var e=r.length-1;switch(w){case 1:return r[e-1];case 2:this.$=[];break;case 3:r[e-1].push(r[e]),this.$=r[e-1];break;case 4:case 5:this.$=r[e];break;case 6:case 7:this.$=[];break;case 8:g.setWeekday("monday");break;case 9:g.setWeekday("tuesday");break;case 10:g.setWeekday("wednesday");break;case 11:g.setWeekday("thursday");break;case 12:g.setWeekday("friday");break;case 13:g.setWeekday("saturday");break;case 14:g.setWeekday("sunday");break;case 15:g.setWeekend("friday");break;case 16:g.setWeekend("saturday");break;case 17:g.setDateFormat(r[e].substr(11)),this.$=r[e].substr(11);break;case 18:g.enableInclusiveEndDates(),this.$=r[e].substr(18);break;case 19:g.TopAxis(),this.$=r[e].substr(8);break;case 20:g.setAxisFormat(r[e].substr(11)),this.$=r[e].substr(11);break;case 21:g.setTickInterval(r[e].substr(13)),this.$=r[e].substr(13);break;case 22:g.setExcludes(r[e].substr(9)),this.$=r[e].substr(9);break;case 23:g.setIncludes(r[e].substr(9)),this.$=r[e].substr(9);break;case 24:g.setTodayMarker(r[e].substr(12)),this.$=r[e].substr(12);break;case 27:g.setDiagramTitle(r[e].substr(6)),this.$=r[e].substr(6);break;case 28:this.$=r[e].trim(),g.setAccTitle(this.$);break;case 29:case 30:this.$=r[e].trim(),g.setAccDescription(this.$);break;case 31:g.addSection(r[e].substr(8)),this.$=r[e].substr(8);break;case 33:g.addTask(r[e-1],r[e]),this.$="task";break;case 34:this.$=r[e-1],g.setClickEvent(r[e-1],r[e],null);break;case 35:this.$=r[e-2],g.setClickEvent(r[e-2],r[e-1],r[e]);break;case 36:this.$=r[e-2],g.setClickEvent(r[e-2],r[e-1],null),g.setLink(r[e-2],r[e]);break;case 37:this.$=r[e-3],g.setClickEvent(r[e-3],r[e-2],r[e-1]),g.setLink(r[e-3],r[e]);break;case 38:this.$=r[e-2],g.setClickEvent(r[e-2],r[e],null),g.setLink(r[e-2],r[e-1]);break;case 39:this.$=r[e-3],g.setClickEvent(r[e-3],r[e-1],r[e]),g.setLink(r[e-3],r[e-2]);break;case 40:this.$=r[e-1],g.setLink(r[e-1],r[e]);break;case 41:case 47:this.$=r[e-1]+" "+r[e];break;case 42:case 43:case 45:this.$=r[e-2]+" "+r[e-1]+" "+r[e];break;case 44:case 46:this.$=r[e-3]+" "+r[e-2]+" "+r[e-1]+" "+r[e];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(n,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:i,13:s,14:a,15:f,16:d,17:x,18:E,19:18,20:A,21:T,22:F,23:C,24:D,25:V,26:I,27:S,28:M,29:W,30:L,31:R,33:H,35:$,36:p,37:24,38:h,40:u},t(n,[2,7],{1:[2,1]}),t(n,[2,3]),{9:36,11:17,12:i,13:s,14:a,15:f,16:d,17:x,18:E,19:18,20:A,21:T,22:F,23:C,24:D,25:V,26:I,27:S,28:M,29:W,30:L,31:R,33:H,35:$,36:p,37:24,38:h,40:u},t(n,[2,5]),t(n,[2,6]),t(n,[2,17]),t(n,[2,18]),t(n,[2,19]),t(n,[2,20]),t(n,[2,21]),t(n,[2,22]),t(n,[2,23]),t(n,[2,24]),t(n,[2,25]),t(n,[2,26]),t(n,[2,27]),{32:[1,37]},{34:[1,38]},t(n,[2,30]),t(n,[2,31]),t(n,[2,32]),{39:[1,39]},t(n,[2,8]),t(n,[2,9]),t(n,[2,10]),t(n,[2,11]),t(n,[2,12]),t(n,[2,13]),t(n,[2,14]),t(n,[2,15]),t(n,[2,16]),{41:[1,40],43:[1,41]},t(n,[2,4]),t(n,[2,28]),t(n,[2,29]),t(n,[2,33]),t(n,[2,34],{42:[1,42],43:[1,43]}),t(n,[2,40],{41:[1,44]}),t(n,[2,35],{43:[1,45]}),t(n,[2,36]),t(n,[2,38],{42:[1,46]}),t(n,[2,37]),t(n,[2,39])],defaultActions:{},parseError:c(function(o,l){if(l.recoverable)this.trace(o);else{var y=new Error(o);throw y.hash=l,y}},"parseError"),parse:c(function(o){var l=this,y=[0],g=[],w=[null],r=[],z=this.table,e="",_=0,P=0,N=2,O=1,X=r.slice.call(arguments,1),Y=Object.create(this.lexer),K={yy:{}};for(var st in this.yy)Object.prototype.hasOwnProperty.call(this.yy,st)&&(K.yy[st]=this.yy[st]);Y.setInput(o,K.yy),K.yy.lexer=Y,K.yy.parser=this,typeof Y.yylloc>"u"&&(Y.yylloc={});var lt=Y.yylloc;r.push(lt);var kt=Y.options&&Y.options.ranges;typeof K.yy.parseError=="function"?this.parseError=K.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function yt(U){y.length=y.length-2*U,w.length=w.length-U,r.length=r.length-U}c(yt,"popStack");function ut(){var U;return U=g.pop()||Y.lex()||O,typeof U!="number"&&(U instanceof Array&&(g=U,U=g.pop()),U=l.symbols_[U]||U),U}c(ut,"lex");for(var B,Z,q,at,Q={},rt,J,ee,bt;;){if(Z=y[y.length-1],this.defaultActions[Z]?q=this.defaultActions[Z]:((B===null||typeof B>"u")&&(B=ut()),q=z[Z]&&z[Z][B]),typeof q>"u"||!q.length||!q[0]){var $t="";bt=[];for(rt in z[Z])this.terminals_[rt]&&rt>N&&bt.push("'"+this.terminals_[rt]+"'");Y.showPosition?$t="Parse error on line "+(_+1)+`:
`+Y.showPosition()+`
Expecting `+bt.join(", ")+", got '"+(this.terminals_[B]||B)+"'":$t="Parse error on line "+(_+1)+": Unexpected "+(B==O?"end of input":"'"+(this.terminals_[B]||B)+"'"),this.parseError($t,{text:Y.match,token:this.terminals_[B]||B,line:Y.yylineno,loc:lt,expected:bt})}if(q[0]instanceof Array&&q.length>1)throw new Error("Parse Error: multiple actions possible at state: "+Z+", token: "+B);switch(q[0]){case 1:y.push(B),w.push(Y.yytext),r.push(Y.yylloc),y.push(q[1]),B=null,P=Y.yyleng,e=Y.yytext,_=Y.yylineno,lt=Y.yylloc;break;case 2:if(J=this.productions_[q[1]][1],Q.$=w[w.length-J],Q._$={first_line:r[r.length-(J||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(J||1)].first_column,last_column:r[r.length-1].last_column},kt&&(Q._$.range=[r[r.length-(J||1)].range[0],r[r.length-1].range[1]]),at=this.performAction.apply(Q,[e,P,_,K.yy,q[1],w,r].concat(X)),typeof at<"u")return at;J&&(y=y.slice(0,-1*J*2),w=w.slice(0,-1*J),r=r.slice(0,-1*J)),y.push(this.productions_[q[1]][0]),w.push(Q.$),r.push(Q._$),ee=z[y[y.length-2]][y[y.length-1]],y.push(ee);break;case 3:return!0}}return!0},"parse")},v=function(){var m={EOF:1,parseError:c(function(l,y){if(this.yy.parser)this.yy.parser.parseError(l,y);else throw new Error(l)},"parseError"),setInput:c(function(o,l){return this.yy=l||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:c(function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var l=o.match(/(?:\r\n?|\n).*/g);return l?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},"input"),unput:c(function(o){var l=o.length,y=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-l),this.offset-=l;var g=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),y.length-1&&(this.yylineno-=y.length-1);var w=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:y?(y.length===g.length?this.yylloc.first_column:0)+g[g.length-y.length].length-y[0].length:this.yylloc.first_column-l},this.options.ranges&&(this.yylloc.range=[w[0],w[0]+this.yyleng-l]),this.yyleng=this.yytext.length,this},"unput"),more:c(function(){return this._more=!0,this},"more"),reject:c(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:c(function(o){this.unput(this.match.slice(o))},"less"),pastInput:c(function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:c(function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:c(function(){var o=this.pastInput(),l=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+l+"^"},"showPosition"),test_match:c(function(o,l){var y,g,w;if(this.options.backtrack_lexer&&(w={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(w.yylloc.range=this.yylloc.range.slice(0))),g=o[0].match(/(?:\r\n?|\n).*/g),g&&(this.yylineno+=g.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:g?g[g.length-1].length-g[g.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],y=this.performAction.call(this,this.yy,this,l,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),y)return y;if(this._backtrack){for(var r in w)this[r]=w[r];return!1}return!1},"test_match"),next:c(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,l,y,g;this._more||(this.yytext="",this.match="");for(var w=this._currentRules(),r=0;r<w.length;r++)if(y=this._input.match(this.rules[w[r]]),y&&(!l||y[0].length>l[0].length)){if(l=y,g=r,this.options.backtrack_lexer){if(o=this.test_match(y,w[r]),o!==!1)return o;if(this._backtrack){l=!1;continue}else return!1}else if(!this.options.flex)break}return l?(o=this.test_match(l,w[g]),o!==!1?o:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:c(function(){var l=this.next();return l||this.lex()},"lex"),begin:c(function(l){this.conditionStack.push(l)},"begin"),popState:c(function(){var l=this.conditionStack.length-1;return l>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:c(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:c(function(l){return l=this.conditionStack.length-1-Math.abs(l||0),l>=0?this.conditionStack[l]:"INITIAL"},"topState"),pushState:c(function(l){this.begin(l)},"pushState"),stateStackSize:c(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:c(function(l,y,g,w){switch(g){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return m}();b.lexer=v;function k(){this.yy={}}return c(k,"Parser"),k.prototype=b,b.Parser=k,new k}();Vt.parser=Vt;var $n=Vt;j.extend(_n);j.extend(Sn);j.extend(Mn);var ue={friday:5,saturday:6},tt="",Gt="",Xt=void 0,jt="",gt=[],pt=[],qt=new Map,Ut=[],Ct=[],mt="",Zt="",Ee=["active","done","crit","milestone","vert"],Kt=[],vt=!1,Qt=!1,Jt="sunday",Mt="saturday",Rt=0,An=c(function(){Ut=[],Ct=[],mt="",Kt=[],_t=0,Bt=void 0,Dt=void 0,G=[],tt="",Gt="",Zt="",Xt=void 0,jt="",gt=[],pt=[],vt=!1,Qt=!1,Rt=0,qt=new Map,an(),Jt="sunday",Mt="saturday"},"clear"),Yn=c(function(t){Gt=t},"setAxisFormat"),Ln=c(function(){return Gt},"getAxisFormat"),Fn=c(function(t){Xt=t},"setTickInterval"),On=c(function(){return Xt},"getTickInterval"),Wn=c(function(t){jt=t},"setTodayMarker"),Nn=c(function(){return jt},"getTodayMarker"),Pn=c(function(t){tt=t},"setDateFormat"),zn=c(function(){vt=!0},"enableInclusiveEndDates"),Vn=c(function(){return vt},"endDatesAreInclusive"),Rn=c(function(){Qt=!0},"enableTopAxis"),Hn=c(function(){return Qt},"topAxisEnabled"),Bn=c(function(t){Zt=t},"setDisplayMode"),Gn=c(function(){return Zt},"getDisplayMode"),Xn=c(function(){return tt},"getDateFormat"),jn=c(function(t){gt=t.toLowerCase().split(/[\s,]+/)},"setIncludes"),qn=c(function(){return gt},"getIncludes"),Un=c(function(t){pt=t.toLowerCase().split(/[\s,]+/)},"setExcludes"),Zn=c(function(){return pt},"getExcludes"),Kn=c(function(){return qt},"getLinks"),Qn=c(function(t){mt=t,Ut.push(t)},"addSection"),Jn=c(function(){return Ut},"getSections"),ti=c(function(){let t=de();const n=10;let i=0;for(;!t&&i<n;)t=de(),i++;return Ct=G,Ct},"getTasks"),Ie=c(function(t,n,i,s){const a=t.format(n.trim()),f=t.format("YYYY-MM-DD");return s.includes(a)||s.includes(f)?!1:i.includes("weekends")&&(t.isoWeekday()===ue[Mt]||t.isoWeekday()===ue[Mt]+1)||i.includes(t.format("dddd").toLowerCase())?!0:i.includes(a)||i.includes(f)},"isInvalidDate"),ei=c(function(t){Jt=t},"setWeekday"),ni=c(function(){return Jt},"getWeekday"),ii=c(function(t){Mt=t},"setWeekend"),$e=c(function(t,n,i,s){if(!i.length||t.manualEndTime)return;let a;t.startTime instanceof Date?a=j(t.startTime):a=j(t.startTime,n,!0),a=a.add(1,"d");let f;t.endTime instanceof Date?f=j(t.endTime):f=j(t.endTime,n,!0);const[d,x]=si(a,f,n,i,s);t.endTime=d.toDate(),t.renderEndTime=x},"checkTaskDates"),si=c(function(t,n,i,s,a){let f=!1,d=null;for(;t<=n;)f||(d=n.toDate()),f=Ie(t,i,s,a),f&&(n=n.add(1,"d")),t=t.add(1,"d");return[n,d]},"fixTaskDates"),Ht=c(function(t,n,i){if(i=i.trim(),c(x=>{const E=x.trim();return E==="x"||E==="X"},"isTimestampFormat")(n)&&/^\d+$/.test(i))return new Date(Number(i));const f=/^after\s+(?<ids>[\d\w- ]+)/.exec(i);if(f!==null){let x=null;for(const A of f.groups.ids.split(" ")){let T=ct(A);T!==void 0&&(!x||T.endTime>x.endTime)&&(x=T)}if(x)return x.endTime;const E=new Date;return E.setHours(0,0,0,0),E}let d=j(i,n.trim(),!0);if(d.isValid())return d.toDate();{ot.debug("Invalid date:"+i),ot.debug("With date format:"+n.trim());const x=new Date(i);if(x===void 0||isNaN(x.getTime())||x.getFullYear()<-1e4||x.getFullYear()>1e4)throw new Error("Invalid date:"+i);return x}},"getStartDate"),Ae=c(function(t){const n=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return n!==null?[Number.parseFloat(n[1]),n[2]]:[NaN,"ms"]},"parseDuration"),Ye=c(function(t,n,i,s=!1){i=i.trim();const f=/^until\s+(?<ids>[\d\w- ]+)/.exec(i);if(f!==null){let T=null;for(const C of f.groups.ids.split(" ")){let D=ct(C);D!==void 0&&(!T||D.startTime<T.startTime)&&(T=D)}if(T)return T.startTime;const F=new Date;return F.setHours(0,0,0,0),F}let d=j(i,n.trim(),!0);if(d.isValid())return s&&(d=d.add(1,"d")),d.toDate();let x=j(t);const[E,A]=Ae(i);if(!Number.isNaN(E)){const T=x.add(E,A);T.isValid()&&(x=T)}return x.toDate()},"getEndDate"),_t=0,ht=c(function(t){return t===void 0?(_t=_t+1,"task"+_t):t},"parseId"),ri=c(function(t,n){let i;n.substr(0,1)===":"?i=n.substr(1,n.length):i=n;const s=i.split(","),a={};te(s,a,Ee);for(let d=0;d<s.length;d++)s[d]=s[d].trim();let f="";switch(s.length){case 1:a.id=ht(),a.startTime=t.endTime,f=s[0];break;case 2:a.id=ht(),a.startTime=Ht(void 0,tt,s[0]),f=s[1];break;case 3:a.id=ht(s[0]),a.startTime=Ht(void 0,tt,s[1]),f=s[2];break}return f&&(a.endTime=Ye(a.startTime,tt,f,vt),a.manualEndTime=j(f,"YYYY-MM-DD",!0).isValid(),$e(a,tt,pt,gt)),a},"compileData"),ai=c(function(t,n){let i;n.substr(0,1)===":"?i=n.substr(1,n.length):i=n;const s=i.split(","),a={};te(s,a,Ee);for(let f=0;f<s.length;f++)s[f]=s[f].trim();switch(s.length){case 1:a.id=ht(),a.startTime={type:"prevTaskEnd",id:t},a.endTime={data:s[0]};break;case 2:a.id=ht(),a.startTime={type:"getStartDate",startData:s[0]},a.endTime={data:s[1]};break;case 3:a.id=ht(s[0]),a.startTime={type:"getStartDate",startData:s[1]},a.endTime={data:s[2]};break}return a},"parseData"),Bt,Dt,G=[],Le={},oi=c(function(t,n){const i={section:mt,type:mt,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:n},task:t,classes:[]},s=ai(Dt,n);i.raw.startTime=s.startTime,i.raw.endTime=s.endTime,i.id=s.id,i.prevTaskId=Dt,i.active=s.active,i.done=s.done,i.crit=s.crit,i.milestone=s.milestone,i.vert=s.vert,i.order=Rt,Rt++;const a=G.push(i);Dt=i.id,Le[i.id]=a-1},"addTask"),ct=c(function(t){const n=Le[t];return G[n]},"findTaskById"),ci=c(function(t,n){const i={section:mt,type:mt,description:t,task:t,classes:[]},s=ri(Bt,n);i.startTime=s.startTime,i.endTime=s.endTime,i.id=s.id,i.active=s.active,i.done=s.done,i.crit=s.crit,i.milestone=s.milestone,i.vert=s.vert,Bt=i,Ct.push(i)},"addTaskOrg"),de=c(function(){const t=c(function(i){const s=G[i];let a="";switch(G[i].raw.startTime.type){case"prevTaskEnd":{const f=ct(s.prevTaskId);s.startTime=f.endTime;break}case"getStartDate":a=Ht(void 0,tt,G[i].raw.startTime.startData),a&&(G[i].startTime=a);break}return G[i].startTime&&(G[i].endTime=Ye(G[i].startTime,tt,G[i].raw.endTime.data,vt),G[i].endTime&&(G[i].processed=!0,G[i].manualEndTime=j(G[i].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),$e(G[i],tt,pt,gt))),G[i].processed},"compileTask");let n=!0;for(const[i,s]of G.entries())t(i),n=n&&s.processed;return n},"compileTasks"),li=c(function(t,n){let i=n;dt().securityLevel!=="loose"&&(i=rn(n)),t.split(",").forEach(function(s){ct(s)!==void 0&&(Oe(s,()=>{window.open(i,"_self")}),qt.set(s,i))}),Fe(t,"clickable")},"setLink"),Fe=c(function(t,n){t.split(",").forEach(function(i){let s=ct(i);s!==void 0&&s.classes.push(n)})},"setClass"),ui=c(function(t,n,i){if(dt().securityLevel!=="loose"||n===void 0)return;let s=[];if(typeof i=="string"){s=i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let f=0;f<s.length;f++){let d=s[f].trim();d.startsWith('"')&&d.endsWith('"')&&(d=d.substr(1,d.length-2)),s[f]=d}}s.length===0&&s.push(t),ct(t)!==void 0&&Oe(t,()=>{on.runFunc(n,...s)})},"setClickFun"),Oe=c(function(t,n){Kt.push(function(){const i=document.querySelector(`[id="${t}"]`);i!==null&&i.addEventListener("click",function(){n()})},function(){const i=document.querySelector(`[id="${t}-text"]`);i!==null&&i.addEventListener("click",function(){n()})})},"pushFun"),di=c(function(t,n,i){t.split(",").forEach(function(s){ui(s,n,i)}),Fe(t,"clickable")},"setClickEvent"),fi=c(function(t){Kt.forEach(function(n){n(t)})},"bindFunctions"),hi={getConfig:c(()=>dt().gantt,"getConfig"),clear:An,setDateFormat:Pn,getDateFormat:Xn,enableInclusiveEndDates:zn,endDatesAreInclusive:Vn,enableTopAxis:Rn,topAxisEnabled:Hn,setAxisFormat:Yn,getAxisFormat:Ln,setTickInterval:Fn,getTickInterval:On,setTodayMarker:Wn,getTodayMarker:Nn,setAccTitle:Be,getAccTitle:He,setDiagramTitle:Re,getDiagramTitle:Ve,setDisplayMode:Bn,getDisplayMode:Gn,setAccDescription:ze,getAccDescription:Pe,addSection:Qn,getSections:Jn,getTasks:ti,addTask:oi,findTaskById:ct,addTaskOrg:ci,setIncludes:jn,getIncludes:qn,setExcludes:Un,getExcludes:Zn,setClickEvent:di,setLink:li,getLinks:Kn,bindFunctions:fi,parseDuration:Ae,isInvalidDate:Ie,setWeekday:ei,getWeekday:ni,setWeekend:ii};function te(t,n,i){let s=!0;for(;s;)s=!1,i.forEach(function(a){const f="^\\s*"+a+"\\s*$",d=new RegExp(f);t[0].match(d)&&(n[a]=!0,t.shift(1),s=!0)})}c(te,"getTaskTags");j.extend(In);var mi=c(function(){ot.debug("Something is calling, setConf, remove the call")},"setConf"),fe={monday:nn,tuesday:en,wednesday:tn,thursday:Je,friday:Qe,saturday:Ke,sunday:Ze},ki=c((t,n)=>{let i=[...t].map(()=>-1/0),s=[...t].sort((f,d)=>f.startTime-d.startTime||f.order-d.order),a=0;for(const f of s)for(let d=0;d<i.length;d++)if(f.startTime>=i[d]){i[d]=f.endTime,f.order=d+n,d>a&&(a=d);break}return a},"getMaxIntersections"),nt,Nt=1e4,yi=c(function(t,n,i,s){const a=dt().gantt,f=dt().securityLevel;let d;f==="sandbox"&&(d=xt("#i"+n));const x=f==="sandbox"?xt(d.nodes()[0].contentDocument.body):xt("body"),E=f==="sandbox"?d.nodes()[0].contentDocument:document,A=E.getElementById(n);nt=A.parentElement.offsetWidth,nt===void 0&&(nt=1200),a.useWidth!==void 0&&(nt=a.useWidth);const T=s.db.getTasks();let F=[];for(const u of T)F.push(u.type);F=h(F);const C={};let D=2*a.topPadding;if(s.db.getDisplayMode()==="compact"||a.displayMode==="compact"){const u={};for(const v of T)u[v.section]===void 0?u[v.section]=[v]:u[v.section].push(v);let b=0;for(const v of Object.keys(u)){const k=ki(u[v],b)+1;b+=k,D+=k*(a.barHeight+a.barGap),C[v]=k}}else{D+=T.length*(a.barHeight+a.barGap);for(const u of F)C[u]=T.filter(b=>b.type===u).length}A.setAttribute("viewBox","0 0 "+nt+" "+D);const V=x.select(`[id="${n}"]`),I=Ge().domain([Xe(T,function(u){return u.startTime}),je(T,function(u){return u.endTime})]).rangeRound([0,nt-a.leftPadding-a.rightPadding]);function S(u,b){const v=u.startTime,k=b.startTime;let m=0;return v>k?m=1:v<k&&(m=-1),m}c(S,"taskCompare"),T.sort(S),M(T,nt,D),qe(V,D,nt,a.useMaxWidth),V.append("text").text(s.db.getDiagramTitle()).attr("x",nt/2).attr("y",a.titleTopMargin).attr("class","titleText");function M(u,b,v){const k=a.barHeight,m=k+a.barGap,o=a.topPadding,l=a.leftPadding,y=Ue().domain([0,F.length]).range(["#00B9FA","#F95002"]).interpolate(mn);L(m,o,l,b,v,u,s.db.getExcludes(),s.db.getIncludes()),H(l,o,b,v),W(u,m,o,l,k,y,b),$(m,o),p(l,o,b,v)}c(M,"makeGantt");function W(u,b,v,k,m,o,l){u.sort((e,_)=>e.vert===_.vert?0:e.vert?1:-1);const g=[...new Set(u.map(e=>e.order))].map(e=>u.find(_=>_.order===e));V.append("g").selectAll("rect").data(g).enter().append("rect").attr("x",0).attr("y",function(e,_){return _=e.order,_*b+v-2}).attr("width",function(){return l-a.rightPadding/2}).attr("height",b).attr("class",function(e){for(const[_,P]of F.entries())if(e.type===P)return"section section"+_%a.numberSectionStyles;return"section section0"}).enter();const w=V.append("g").selectAll("rect").data(u).enter(),r=s.db.getLinks();if(w.append("rect").attr("id",function(e){return e.id}).attr("rx",3).attr("ry",3).attr("x",function(e){return e.milestone?I(e.startTime)+k+.5*(I(e.endTime)-I(e.startTime))-.5*m:I(e.startTime)+k}).attr("y",function(e,_){return _=e.order,e.vert?a.gridLineStartPadding:_*b+v}).attr("width",function(e){return e.milestone?m:e.vert?.08*m:I(e.renderEndTime||e.endTime)-I(e.startTime)}).attr("height",function(e){return e.vert?T.length*(a.barHeight+a.barGap)+a.barHeight*2:m}).attr("transform-origin",function(e,_){return _=e.order,(I(e.startTime)+k+.5*(I(e.endTime)-I(e.startTime))).toString()+"px "+(_*b+v+.5*m).toString()+"px"}).attr("class",function(e){const _="task";let P="";e.classes.length>0&&(P=e.classes.join(" "));let N=0;for(const[X,Y]of F.entries())e.type===Y&&(N=X%a.numberSectionStyles);let O="";return e.active?e.crit?O+=" activeCrit":O=" active":e.done?e.crit?O=" doneCrit":O=" done":e.crit&&(O+=" crit"),O.length===0&&(O=" task"),e.milestone&&(O=" milestone "+O),e.vert&&(O=" vert "+O),O+=N,O+=" "+P,_+O}),w.append("text").attr("id",function(e){return e.id+"-text"}).text(function(e){return e.task}).attr("font-size",a.fontSize).attr("x",function(e){let _=I(e.startTime),P=I(e.renderEndTime||e.endTime);if(e.milestone&&(_+=.5*(I(e.endTime)-I(e.startTime))-.5*m,P=_+m),e.vert)return I(e.startTime)+k;const N=this.getBBox().width;return N>P-_?P+N+1.5*a.leftPadding>l?_+k-5:P+k+5:(P-_)/2+_+k}).attr("y",function(e,_){return e.vert?a.gridLineStartPadding+T.length*(a.barHeight+a.barGap)+60:(_=e.order,_*b+a.barHeight/2+(a.fontSize/2-2)+v)}).attr("text-height",m).attr("class",function(e){const _=I(e.startTime);let P=I(e.endTime);e.milestone&&(P=_+m);const N=this.getBBox().width;let O="";e.classes.length>0&&(O=e.classes.join(" "));let X=0;for(const[K,st]of F.entries())e.type===st&&(X=K%a.numberSectionStyles);let Y="";return e.active&&(e.crit?Y="activeCritText"+X:Y="activeText"+X),e.done?e.crit?Y=Y+" doneCritText"+X:Y=Y+" doneText"+X:e.crit&&(Y=Y+" critText"+X),e.milestone&&(Y+=" milestoneText"),e.vert&&(Y+=" vertText"),N>P-_?P+N+1.5*a.leftPadding>l?O+" taskTextOutsideLeft taskTextOutside"+X+" "+Y:O+" taskTextOutsideRight taskTextOutside"+X+" "+Y+" width-"+N:O+" taskText taskText"+X+" "+Y+" width-"+N}),dt().securityLevel==="sandbox"){let e;e=xt("#i"+n);const _=e.nodes()[0].contentDocument;w.filter(function(P){return r.has(P.id)}).each(function(P){var N=_.querySelector("#"+P.id),O=_.querySelector("#"+P.id+"-text");const X=N.parentNode;var Y=_.createElement("a");Y.setAttribute("xlink:href",r.get(P.id)),Y.setAttribute("target","_top"),X.appendChild(Y),Y.appendChild(N),Y.appendChild(O)})}}c(W,"drawRects");function L(u,b,v,k,m,o,l,y){if(l.length===0&&y.length===0)return;let g,w;for(const{startTime:N,endTime:O}of o)(g===void 0||N<g)&&(g=N),(w===void 0||O>w)&&(w=O);if(!g||!w)return;if(j(w).diff(j(g),"year")>5){ot.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const r=s.db.getDateFormat(),z=[];let e=null,_=j(g);for(;_.valueOf()<=w;)s.db.isInvalidDate(_,r,l,y)?e?e.end=_:e={start:_,end:_}:e&&(z.push(e),e=null),_=_.add(1,"d");V.append("g").selectAll("rect").data(z).enter().append("rect").attr("id",N=>"exclude-"+N.start.format("YYYY-MM-DD")).attr("x",N=>I(N.start.startOf("day"))+v).attr("y",a.gridLineStartPadding).attr("width",N=>I(N.end.endOf("day"))-I(N.start.startOf("day"))).attr("height",m-b-a.gridLineStartPadding).attr("transform-origin",function(N,O){return(I(N.start)+v+.5*(I(N.end)-I(N.start))).toString()+"px "+(O*u+.5*m).toString()+"px"}).attr("class","exclude-range")}c(L,"drawExcludeDays");function R(u,b,v,k){if(v<=0||u>b)return 1/0;const m=b-u,o=j.duration({[k??"day"]:v}).asMilliseconds();return o<=0?1/0:Math.ceil(m/o)}c(R,"getEstimatedTickCount");function H(u,b,v,k){const m=s.db.getDateFormat(),o=s.db.getAxisFormat();let l;o?l=o:m==="D"?l="%d":l=a.axisFormat??"%Y-%m-%d";let y=Tn(I).tickSize(-k+b+a.gridLineStartPadding).tickFormat(ne(l));const w=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(s.db.getTickInterval()||a.tickInterval);if(w!==null){const r=parseInt(w[1],10);if(isNaN(r)||r<=0)ot.warn(`Invalid tick interval value: "${w[1]}". Skipping custom tick interval.`);else{const z=w[2],e=s.db.getWeekday()||a.weekday,_=I.domain(),P=_[0],N=_[1],O=R(P,N,r,z);if(O>Nt)ot.warn(`The tick interval "${r}${z}" would generate ${O} ticks, which exceeds the maximum allowed (${Nt}). This may indicate an invalid date or time range. Skipping custom tick interval.`);else switch(z){case"millisecond":y.ticks(ce.every(r));break;case"second":y.ticks(oe.every(r));break;case"minute":y.ticks(ae.every(r));break;case"hour":y.ticks(re.every(r));break;case"day":y.ticks(se.every(r));break;case"week":y.ticks(fe[e].every(r));break;case"month":y.ticks(ie.every(r));break}}}if(V.append("g").attr("class","grid").attr("transform","translate("+u+", "+(k-50)+")").call(y).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),s.db.topAxisEnabled()||a.topAxis){let r=xn(I).tickSize(-k+b+a.gridLineStartPadding).tickFormat(ne(l));if(w!==null){const z=parseInt(w[1],10);if(isNaN(z)||z<=0)ot.warn(`Invalid tick interval value: "${w[1]}". Skipping custom tick interval.`);else{const e=w[2],_=s.db.getWeekday()||a.weekday,P=I.domain(),N=P[0],O=P[1];if(R(N,O,z,e)<=Nt)switch(e){case"millisecond":r.ticks(ce.every(z));break;case"second":r.ticks(oe.every(z));break;case"minute":r.ticks(ae.every(z));break;case"hour":r.ticks(re.every(z));break;case"day":r.ticks(se.every(z));break;case"week":r.ticks(fe[_].every(z));break;case"month":r.ticks(ie.every(z));break}}}V.append("g").attr("class","grid").attr("transform","translate("+u+", "+b+")").call(r).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}c(H,"makeGrid");function $(u,b){let v=0;const k=Object.keys(C).map(m=>[m,C[m]]);V.append("g").selectAll("text").data(k).enter().append(function(m){const o=m[0].split(sn.lineBreakRegex),l=-(o.length-1)/2,y=E.createElementNS("http://www.w3.org/2000/svg","text");y.setAttribute("dy",l+"em");for(const[g,w]of o.entries()){const r=E.createElementNS("http://www.w3.org/2000/svg","tspan");r.setAttribute("alignment-baseline","central"),r.setAttribute("x","10"),g>0&&r.setAttribute("dy","1em"),r.textContent=w,y.appendChild(r)}return y}).attr("x",10).attr("y",function(m,o){if(o>0)for(let l=0;l<o;l++)return v+=k[o-1][1],m[1]*u/2+v*u+b;else return m[1]*u/2+b}).attr("font-size",a.sectionFontSize).attr("class",function(m){for(const[o,l]of F.entries())if(m[0]===l)return"sectionTitle sectionTitle"+o%a.numberSectionStyles;return"sectionTitle"})}c($,"vertLabels");function p(u,b,v,k){const m=s.db.getTodayMarker();if(m==="off")return;const o=V.append("g").attr("class","today"),l=new Date,y=o.append("line");y.attr("x1",I(l)+u).attr("x2",I(l)+u).attr("y1",a.titleTopMargin).attr("y2",k-a.titleTopMargin).attr("class","today"),m!==""&&y.attr("style",m.replace(/,/g,";"))}c(p,"drawToday");function h(u){const b={},v=[];for(let k=0,m=u.length;k<m;++k)Object.prototype.hasOwnProperty.call(b,u[k])||(b[u[k]]=!0,v.push(u[k]));return v}c(h,"checkUnique")},"draw"),gi={setConf:mi,draw:yi},pi=c(t=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done task text displayed outside the bar sits against the diagram background,
     not against the done-task bar, so it must use the outside/contrast color. */
  .doneText0.taskTextOutsideLeft,
  .doneText0.taskTextOutsideRight,
  .doneText1.taskTextOutsideLeft,
  .doneText1.taskTextOutsideRight,
  .doneText2.taskTextOutsideLeft,
  .doneText2.taskTextOutsideRight,
  .doneText3.taskTextOutsideLeft,
  .doneText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done-crit task text outside the bar — same reasoning as doneText above. */
  .doneCritText0.taskTextOutsideLeft,
  .doneCritText0.taskTextOutsideRight,
  .doneCritText1.taskTextOutsideLeft,
  .doneCritText1.taskTextOutsideRight,
  .doneCritText2.taskTextOutsideLeft,
  .doneCritText2.taskTextOutsideRight,
  .doneCritText3.taskTextOutsideLeft,
  .doneCritText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: ${t.fontFamily};
  }
`,"getStyles"),vi=pi,xi={parser:$n,db:hi,renderer:gi,styles:vi};export{xi as diagram};
