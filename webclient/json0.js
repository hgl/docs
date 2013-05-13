(function(){var e={exports:{}},i=e.exports;i._bootstrapTransform=function(e,i,n,r){var t,l;return t=function(e,n,r,t){return i(r,e,n,"left"),i(t,n,e,"right")},e.transformX=e.transformX=l=function(e,i){var o,p,d,f,s,a,u,c,h,v,g,m,y,w,O,b,k,E,x;for(n(e),n(i),s=[],v=0,w=i.length;w>v;v++){for(h=i[v],f=[],o=0;e.length>o;){if(a=[],t(e[o],h,f,a),o++,1!==a.length){if(0===a.length){for(E=e.slice(o),g=0,O=E.length;O>g;g++)p=E[g],r(f,p);h=null;break}for(x=l(e.slice(o),a),d=x[0],c=x[1],m=0,b=d.length;b>m;m++)p=d[m],r(f,p);for(y=0,k=c.length;k>y;y++)u=c[y],r(s,u);h=null;break}h=a[0]}null!=h&&r(s,h),e=f}return[e,s]},e.transform=e.transform=function(e,n,r){if("left"!==r&&"right"!==r)throw Error("type must be 'left' or 'right'");return 0===n.length?e:1===e.length&&1===n.length?i([],e[0],n[0],r):"left"===r?l(e,n)[0]:l(n,e)[1]}};var n,r,t,l,o,p,d,f;p={name:"text-old",uri:"http://sharejs.org/types/textv0",create:function(){return""}},o=function(e,i,n){return e.slice(0,i)+n+e.slice(i)},r=function(e){var i,n;if("number"!=typeof e.p)throw Error("component missing position field");if(n=typeof e.i,i=typeof e.d,!("string"===n^"string"===i))throw Error("component needs an i or d field");if(!(e.p>=0))throw Error("position cannot be negative")},t=function(e){var i,n,t;for(n=0,t=e.length;t>n;n++)i=e[n],r(i);return!0},p.apply=function(e,i){var n,r,l,p;for(t(i),l=0,p=i.length;p>l;l++)if(n=i[l],null!=n.i)e=o(e,n.p,n.i);else{if(r=e.slice(n.p,n.p+n.d.length),n.d!==r)throw Error("Delete component '"+n.d+"' does not match deleted text '"+r+"'");e=e.slice(0,n.p)+e.slice(n.p+n.d.length)}return e},p._append=n=function(e,i){var n,r,t;if(""!==i.i&&""!==i.d)return 0===e.length?e.push(i):(n=e[e.length-1],null!=n.i&&null!=i.i&&n.p<=(r=i.p)&&n.p+n.i.length>=r?e[e.length-1]={i:o(n.i,i.p-n.p,i.i),p:n.p}:null!=n.d&&null!=i.d&&i.p<=(t=n.p)&&i.p+i.d.length>=t?e[e.length-1]={d:o(i.d,n.p-i.p,n.d),p:i.p}:e.push(i))},p.compose=function(e,i){var r,l,o,p;for(t(e),t(i),l=e.slice(),o=0,p=i.length;p>o;o++)r=i[o],n(l,r);return l},p.compress=function(e){return p.compose([],e)},p.normalize=function(e){var i,r,t,l,o;for(r=[],(null!=e.i||null!=e.p)&&(e=[e]),t=0,l=e.length;l>t;t++)i=e[t],null==(o=i.p)&&(i.p=0),n(r,i);return r},f=function(e,i,n){return null!=i.i?e>i.p||i.p===e&&n?e+i.i.length:e:i.p>=e?e:i.p+i.d.length>=e?i.p:e-i.d.length},p.transformCursor=function(e,i,n){var r,t,l,o;for(t="right"===n,l=0,o=i.length;o>l;l++)r=i[l],e=f(e,r,t);return e},p._tc=d=function(e,i,r,l){var o,p,d,s,a,u;if(t([i]),t([r]),null!=i.i)n(e,{i:i.i,p:f(i.p,r,"right"===l)});else if(null!=r.i)u=i.d,i.p<r.p&&(n(e,{d:u.slice(0,r.p-i.p),p:i.p}),u=u.slice(r.p-i.p)),""!==u&&n(e,{d:u,p:i.p+r.i.length});else if(i.p>=r.p+r.d.length)n(e,{d:i.d,p:i.p-r.d.length});else if(i.p+i.d.length<=r.p)n(e,i);else{if(s={d:"",p:i.p},i.p<r.p&&(s.d=i.d.slice(0,r.p-i.p)),i.p+i.d.length>r.p+r.d.length&&(s.d+=i.d.slice(r.p+r.d.length-i.p)),d=Math.max(i.p,r.p),p=Math.min(i.p+i.d.length,r.p+r.d.length),o=i.d.slice(d-i.p,p-i.p),a=r.d.slice(d-r.p,p-r.p),o!==a)throw Error("Delete ops delete different text in the same region of the document");""!==s.d&&(s.p=f(s.p,r),n(e,s))}return e},l=function(e){return null!=e.i?{d:e.i,p:e.p}:{i:e.d,p:e.p}},p.invert=function(e){var i,n,r,t,o;for(t=e.slice().reverse(),o=[],n=0,r=t.length;r>n;n++)i=t[n],o.push(l(i));return o},"undefined"==typeof require?i._bootstrapTransform(p,p.transformComponent,p.checkValidOp,p.append):require("./helpers")._bootstrapTransform(p,p.transformComponent,p.checkValidOp,p.append),e.exports=p;var s=function(e){return"[object Array]"==Object.prototype.toString.call(e)},a=function(e){return JSON.parse(JSON.stringify(e))},p="undefined"!=typeof require?require("./text-old"):window.ottypes.text,u={name:"json0",uri:"http://sharejs.org/types/JSONv0"};u.create=function(e){return void 0===e?null:e},u.invertComponent=function(e){var i={p:e.p};return void 0!==e.si&&(i.sd=e.si),void 0!==e.sd&&(i.si=e.sd),void 0!==e.oi&&(i.od=e.oi),void 0!==e.od&&(i.oi=e.od),void 0!==e.li&&(i.ld=e.li),void 0!==e.ld&&(i.li=e.ld),void 0!==e.na&&(i.na=-e.na),void 0!==e.lm&&(i.lm=e.p[e.p.length-1],i.p=e.p.slice(0,e.p.length-1).concat([e.lm])),i},u.invert=function(e){for(var i=e.slice().reverse(),n=[],r=0;i.length>r;r++)n.push(u.invertComponent(i[r]));return n},u.checkValidOp=function(e){for(var i=0;e.length>i;i++)if(!s(e[i].p))throw Error("Missing path")},u.checkList=function(e){if(!s(e))throw Error("Referenced element not a list")},u.checkObj=function(e){if(e.constructor!==Object)throw Error("Referenced element not an object (it was "+JSON.stringify(e)+")")},u.apply=function(e,i){u.checkValidOp(i),i=a(i);for(var n={data:e},r=0;i.length>r;r++){for(var t=i[r],l=null,o=null,p=n,d="data",f=0;t.p.length>f;f++){var s=t.p[f];if(l=p,o=d,p=p[d],d=s,null==l)throw Error("Path invalid")}if(void 0!==t.na){if("number"!=typeof p[d])throw Error("Referenced element not a number");p[d]+=t.na}else if(void 0!==t.si){if("string"!=typeof p)throw Error("Referenced element not a string (it was "+JSON.stringify(p)+")");l[o]=p.slice(0,d)+t.si+p.slice(d)}else if(void 0!==t.sd){if("string"!=typeof p)throw Error("Referenced element not a string");if(p.slice(d,d+t.sd.length)!==t.sd)throw Error("Deleted string does not match");l[o]=p.slice(0,d)+p.slice(d+t.sd.length)}else if(void 0!==t.li&&void 0!==t.ld)u.checkList(p),p[d]=t.li;else if(void 0!==t.li)u.checkList(p),p.splice(d,0,t.li);else if(void 0!==t.ld)u.checkList(p),p.splice(d,1);else if(void 0!==t.lm){if(u.checkList(p),t.lm!=d){var c=p[d];p.splice(d,1),p.splice(t.lm,0,c)}}else if(void 0!==t.oi)u.checkObj(p),p[d]=t.oi;else{if(void 0===t.od)throw Error("invalid / missing instruction in op");u.checkObj(p),delete p[d]}}return n.data},u.incrementalApply=function(e,i,n){for(var r=0;i.length>r;r++){var t=[i[r]];e=u.apply(e,t),n(t,e)}return e},u.pathMatches=function(e,i,n){if(e.length!=i.length)return!1;for(var r=0;e.length>r;r++)if(e[r]!==i[r]&&(!n||r!==e.length-1))return!1;return!0};var c=function(e){var i={p:e.p[e.p.length-1]};return null!=e.si?i.i=e.si:i.d=e.sd,i};u.append=function(e,i){i=a(i);var n;if(0!=e.length&&u.pathMatches(i.p,(n=e[e.length-1]).p))null!=n.na&&null!=i.na?e[e.length-1]={p:n.p,na:n.na+i.na}:void 0!==n.li&&void 0===i.li&&i.ld===n.li?void 0!==n.ld?delete n.li:e.pop():void 0!==n.od&&void 0===n.oi&&void 0!==i.oi&&void 0===i.od?n.oi=i.oi:void 0!==i.lm&&i.p[i.p.length-1]===i.lm||e.push(i);else if(0!=e.length&&u.pathMatches(i.p,n.p,!0))if(null==i.si&&null==i.sd||null==n.si&&null==n.sd)e.push(i);else{var r=[c(n)];if(p._append(r,c(i)),1!==r.length)e.push(i);else{var t=r[0];n.p[n.p.length-1]=t.p,null!=t.i?n.si=t.i:n.sd=t.d}}else e.push(i)},u.compose=function(e,i){u.checkValidOp(e),u.checkValidOp(i);for(var n=a(e),r=0;i.length>r;r++)u.append(n,i[r]);return n},u.normalize=function(e){var i=[];e=s(e)?e:[e];for(var n=0;e.length>n;n++){var r=e[n];null==r.p&&(r.p=[]),u.append(i,r)}return i},u.canOpAffectOp=function(e,i){if(0===e.length)return!0;if(0===i.length)return!1;i=i.slice(0,i.length-1),e=e.slice(0,e.length-1);for(var n=0;e.length>n;n++){var r=e[n];if(n>=i.length||r!=i[n])return!1}return!0},u.transformComponent=function(e,i,n,r){i=a(i),void 0!==i.na&&i.p.push(0),void 0!==n.na&&n.p.push(0);var t;u.canOpAffectOp(n.p,i.p)&&(t=n.p.length-1);var l;u.canOpAffectOp(i.p,n.p)&&(l=i.p.length-1);var o=i.p.length,d=n.p.length;if(void 0!==i.na&&i.p.pop(),void 0!==n.na&&n.p.pop(),n.na){if(null!=l&&d>=o&&n.p[l]==i.p[l])if(void 0!==i.ld){var f=a(n);f.p=f.p.slice(o),i.ld=u.apply(a(i.ld),[f])}else if(void 0!==i.od){var f=a(n);f.p=f.p.slice(o),i.od=u.apply(a(i.od),[f])}return u.append(e,i),e}if(null!=l&&d>o&&i.p[l]==n.p[l])if(void 0!==i.ld){var f=a(n);f.p=f.p.slice(o),i.ld=u.apply(a(i.ld),[f])}else if(void 0!==i.od){var f=a(n);f.p=f.p.slice(o),i.od=u.apply(a(i.od),[f])}if(null!=t){var s=o==d;if(void 0!==n.na);else if(void 0!==n.si||void 0!==n.sd){if(void 0!==i.si||void 0!==i.sd){if(!s)throw Error("must be a string?");var h=c(i),v=c(n),g=[];p._tc(g,h,v,r);for(var m=0;g.length>m;m++){var y=g[m],w={p:i.p.slice(0,t)};w.p.push(y.p),null!=y.i&&(w.si=y.i),null!=y.d&&(w.sd=y.d),u.append(e,w)}return e}}else if(void 0!==n.li&&void 0!==n.ld){if(n.p[t]===i.p[t]){if(!s)return e;if(void 0!==i.ld){if(void 0===i.li||"left"!==r)return e;i.ld=a(n.li)}}}else if(void 0!==n.li)void 0!==i.li&&void 0===i.ld&&s&&i.p[t]===n.p[t]?"right"===r&&i.p[t]++:n.p[t]<=i.p[t]&&i.p[t]++,void 0!==i.lm&&s&&n.p[t]<=i.lm&&i.lm++;else if(void 0!==n.ld){if(void 0!==i.lm&&s){if(n.p[t]===i.p[t])return e;var O=n.p[t],b=i.p[t],k=i.lm;(k>O||O===k&&k>b)&&i.lm--}if(n.p[t]<i.p[t])i.p[t]--;else if(n.p[t]===i.p[t]){if(o>d)return e;if(void 0!==i.ld){if(void 0===i.li)return e;delete i.ld}}}else if(void 0!==n.lm)if(void 0!==i.lm&&o===d){var b=i.p[t],k=i.lm,E=n.p[t],x=n.lm;if(E!==x)if(b===E){if("left"!==r)return e;i.p[t]=x,b===k&&(i.lm=x)}else b>E&&i.p[t]--,b>x?i.p[t]++:b===x&&E>x&&(i.p[t]++,b===k&&i.lm++),k>E?i.lm--:k===E&&k>b&&i.lm--,k>x?i.lm++:k===x&&(x>E&&k>b||E>x&&b>k?"right"===r&&i.lm++:k>b?i.lm++:k===E&&i.lm--)}else if(void 0!==i.li&&void 0===i.ld&&s){var b=n.p[t],k=n.lm;O=i.p[t],O>b&&i.p[t]--,O>k&&i.p[t]++}else{var b=n.p[t],k=n.lm;O=i.p[t],O===b?i.p[t]=k:(O>b&&i.p[t]--,O>k?i.p[t]++:O===k&&b>k&&i.p[t]++)}else if(void 0!==n.oi&&void 0!==n.od){if(i.p[t]===n.p[t]){if(void 0===i.oi||!s)return e;if("right"===r)return e;i.od=n.oi}}else if(void 0!==n.oi){if(void 0!==i.oi&&i.p[t]===n.p[t]){if("left"!==r)return e;u.append(e,{p:i.p,od:n.oi})}}else if(void 0!==n.od&&i.p[t]==n.p[t]){if(!s)return e;if(void 0===i.oi)return e;delete i.od}}return u.append(e,i),e},"undefined"!=typeof require?require("./helpers")._bootstrapTransform(u,u.transformComponent,u.checkValidOp,u.append):i._bootstrapTransform(u,u.transformComponent,u.checkValidOp,u.append),e.exports=u;var h=window.ottypes=window.ottypes||{},v=e.exports;h[v.name]=v,v.uri&&(h[v.uri]=v)})();