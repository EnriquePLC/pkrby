var pJS=function(e,a){var t=document.querySelector("#"+e+" > .particles-js-canvas-el");this.pJS={canvas:{el:t,w:t.offsetWidth,h:t.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var m=this.pJS;a&&Object.deepExtend(m,a),m.tmp.obj={size_value:m.particles.size.value,size_anim_speed:m.particles.size.anim.speed,move_speed:m.particles.move.speed,line_linked_distance:m.particles.line_linked.distance,line_linked_width:m.particles.line_linked.width,mode_grab_distance:m.interactivity.modes.grab.distance,mode_bubble_distance:m.interactivity.modes.bubble.distance,mode_bubble_size:m.interactivity.modes.bubble.size,mode_repulse_distance:m.interactivity.modes.repulse.distance},m.fn.retinaInit=function(){m.retina_detect&&1<window.devicePixelRatio?(m.canvas.pxratio=window.devicePixelRatio,m.tmp.retina=!0):(m.canvas.pxratio=1,m.tmp.retina=!1),m.canvas.w=m.canvas.el.offsetWidth*m.canvas.pxratio,m.canvas.h=m.canvas.el.offsetHeight*m.canvas.pxratio,m.particles.size.value=m.tmp.obj.size_value*m.canvas.pxratio,m.particles.size.anim.speed=m.tmp.obj.size_anim_speed*m.canvas.pxratio,m.particles.move.speed=m.tmp.obj.move_speed*m.canvas.pxratio,m.particles.line_linked.distance=m.tmp.obj.line_linked_distance*m.canvas.pxratio,m.interactivity.modes.grab.distance=m.tmp.obj.mode_grab_distance*m.canvas.pxratio,m.interactivity.modes.bubble.distance=m.tmp.obj.mode_bubble_distance*m.canvas.pxratio,m.particles.line_linked.width=m.tmp.obj.line_linked_width*m.canvas.pxratio,m.interactivity.modes.bubble.size=m.tmp.obj.mode_bubble_size*m.canvas.pxratio,m.interactivity.modes.repulse.distance=m.tmp.obj.mode_repulse_distance*m.canvas.pxratio},m.fn.canvasInit=function(){m.canvas.ctx=m.canvas.el.getContext("2d")},m.fn.canvasSize=function(){m.canvas.el.width=m.canvas.w,m.canvas.el.height=m.canvas.h,m&&m.interactivity.events.resize&&window.addEventListener("resize",function(){m.canvas.w=m.canvas.el.offsetWidth,m.canvas.h=m.canvas.el.offsetHeight,m.tmp.retina&&(m.canvas.w*=m.canvas.pxratio,m.canvas.h*=m.canvas.pxratio),m.canvas.el.width=m.canvas.w,m.canvas.el.height=m.canvas.h,m.particles.move.enable||(m.fn.particlesEmpty(),m.fn.particlesCreate(),m.fn.particlesDraw(),m.fn.vendors.densityAutoParticles()),m.fn.vendors.densityAutoParticles()})},m.fn.canvasPaint=function(){m.canvas.ctx.fillRect(0,0,m.canvas.w,m.canvas.h)},m.fn.canvasClear=function(){m.canvas.ctx.clearRect(0,0,m.canvas.w,m.canvas.h)},m.fn.particle=function(e,a,t){if(this.radius=(m.particles.size.random?Math.random():1)*m.particles.size.value,m.particles.size.anim.enable&&(this.size_status=!1,this.vs=m.particles.size.anim.speed/100,m.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=t?t.x:Math.random()*m.canvas.w,this.y=t?t.y:Math.random()*m.canvas.h,this.x>m.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>m.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),m.particles.move.bounce&&m.fn.vendors.checkOverlap(this,t),this.color={},"object"==typeof e.value)if(e.value instanceof Array){var i=e.value[Math.floor(Math.random()*m.particles.color.value.length)];this.color.rgb=hexToRgb(i)}else null!=e.value.r&&null!=e.value.g&&null!=e.value.b&&(this.color.rgb={r:e.value.r,g:e.value.g,b:e.value.b}),null!=e.value.h&&null!=e.value.s&&null!=e.value.l&&(this.color.hsl={h:e.value.h,s:e.value.s,l:e.value.l});else"random"==e.value?this.color.rgb={r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:"string"==typeof e.value&&(this.color=e,this.color.rgb=hexToRgb(this.color.value));this.opacity=(m.particles.opacity.random?Math.random():1)*m.particles.opacity.value,m.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=m.particles.opacity.anim.speed/100,m.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var n={};switch(m.particles.move.direction){case"top":n={x:0,y:-1};break;case"top-right":n={x:.5,y:-.5};break;case"right":n={x:1,y:-0};break;case"bottom-right":n={x:.5,y:.5};break;case"bottom":n={x:0,y:1};break;case"bottom-left":n={x:-.5,y:1};break;case"left":n={x:-1,y:0};break;case"top-left":n={x:-.5,y:-.5};break;default:n={x:0,y:0}}m.particles.move.straight?(this.vx=n.x,this.vy=n.y,m.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=n.x+Math.random()-.5,this.vy=n.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var s=m.particles.shape.type;if("object"==typeof s){if(s instanceof Array){var r=s[Math.floor(Math.random()*s.length)];this.shape=r}}else this.shape=s;if("image"==this.shape){var c=m.particles.shape;this.img={src:c.image.src,ratio:c.image.width/c.image.height},this.img.ratio||(this.img.ratio=1),"svg"==m.tmp.img_type&&null!=m.tmp.source_svg&&(m.fn.vendors.createSvgImg(this),m.tmp.pushing&&(this.img.loaded=!1))}},m.fn.particle.prototype.draw=function(){var e=this;if(null!=e.radius_bubble)var a=e.radius_bubble;else a=e.radius;if(null!=e.opacity_bubble)var t=e.opacity_bubble;else t=e.opacity;if(e.color.rgb)var i="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+t+")";else i="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+t+")";switch(m.canvas.ctx.fillStyle=i,m.canvas.ctx.beginPath(),e.shape){case"circle":m.canvas.ctx.arc(e.x,e.y,a,0,2*Math.PI,!1);break;case"edge":m.canvas.ctx.rect(e.x-a,e.y-a,2*a,2*a);break;case"triangle":m.fn.vendors.drawShape(m.canvas.ctx,e.x-a,e.y+a/1.66,2*a,3,2);break;case"polygon":m.fn.vendors.drawShape(m.canvas.ctx,e.x-a/(m.particles.shape.polygon.nb_sides/3.5),e.y-a/.76,2.66*a/(m.particles.shape.polygon.nb_sides/3),m.particles.shape.polygon.nb_sides,1);break;case"star":m.fn.vendors.drawShape(m.canvas.ctx,e.x-2*a/(m.particles.shape.polygon.nb_sides/4),e.y-a/1.52,2*a*2.66/(m.particles.shape.polygon.nb_sides/3),m.particles.shape.polygon.nb_sides,2);break;case"image":;if("svg"==m.tmp.img_type)var n=e.img.obj;else n=m.tmp.img_obj;n&&m.canvas.ctx.drawImage(n,e.x-a,e.y-a,2*a,2*a/e.img.ratio)}m.canvas.ctx.closePath(),0<m.particles.shape.stroke.width&&(m.canvas.ctx.strokeStyle=m.particles.shape.stroke.color,m.canvas.ctx.lineWidth=m.particles.shape.stroke.width,m.canvas.ctx.stroke()),m.canvas.ctx.fill()},m.fn.particlesCreate=function(){for(var e=0;e<m.particles.number.value;e++)m.particles.array.push(new m.fn.particle(m.particles.color,m.particles.opacity.value))},m.fn.particlesUpdate=function(){for(var e=0;e<m.particles.array.length;e++){var a=m.particles.array[e];if(m.particles.move.enable){var t=m.particles.move.speed/2;a.x+=a.vx*t,a.y+=a.vy*t}if(m.particles.opacity.anim.enable&&(1==a.opacity_status?(a.opacity>=m.particles.opacity.value&&(a.opacity_status=!1),a.opacity+=a.vo):(a.opacity<=m.particles.opacity.anim.opacity_min&&(a.opacity_status=!0),a.opacity-=a.vo),a.opacity<0&&(a.opacity=0)),m.particles.size.anim.enable&&(1==a.size_status?(a.radius>=m.particles.size.value&&(a.size_status=!1),a.radius+=a.vs):(a.radius<=m.particles.size.anim.size_min&&(a.size_status=!0),a.radius-=a.vs),a.radius<0&&(a.radius=0)),"bounce"==m.particles.move.out_mode)var i={x_left:a.radius,x_right:m.canvas.w,y_top:a.radius,y_bottom:m.canvas.h};else i={x_left:-a.radius,x_right:m.canvas.w+a.radius,y_top:-a.radius,y_bottom:m.canvas.h+a.radius};switch(a.x-a.radius>m.canvas.w?(a.x=i.x_left,a.y=Math.random()*m.canvas.h):a.x+a.radius<0&&(a.x=i.x_right,a.y=Math.random()*m.canvas.h),a.y-a.radius>m.canvas.h?(a.y=i.y_top,a.x=Math.random()*m.canvas.w):a.y+a.radius<0&&(a.y=i.y_bottom,a.x=Math.random()*m.canvas.w),m.particles.move.out_mode){case"bounce":(a.x+a.radius>m.canvas.w||a.x-a.radius<0)&&(a.vx=-a.vx),(a.y+a.radius>m.canvas.h||a.y-a.radius<0)&&(a.vy=-a.vy)}if(isInArray("grab",m.interactivity.events.onhover.mode)&&m.fn.modes.grabParticle(a),(isInArray("bubble",m.interactivity.events.onhover.mode)||isInArray("bubble",m.interactivity.events.onclick.mode))&&m.fn.modes.bubbleParticle(a),(isInArray("repulse",m.interactivity.events.onhover.mode)||isInArray("repulse",m.interactivity.events.onclick.mode))&&m.fn.modes.repulseParticle(a),m.particles.line_linked.enable||m.particles.move.attract.enable)for(var n=e+1;n<m.particles.array.length;n++){var s=m.particles.array[n];m.particles.line_linked.enable&&m.fn.interact.linkParticles(a,s),m.particles.move.attract.enable&&m.fn.interact.attractParticles(a,s),m.particles.move.bounce&&m.fn.interact.bounceParticles(a,s)}}},m.fn.particlesDraw=function(){m.canvas.ctx.clearRect(0,0,m.canvas.w,m.canvas.h),m.fn.particlesUpdate();for(var e=0;e<m.particles.array.length;e++){m.particles.array[e].draw()}},m.fn.particlesEmpty=function(){m.particles.array=[]},m.fn.particlesRefresh=function(){cancelRequestAnimFrame(m.fn.checkAnimFrame),cancelRequestAnimFrame(m.fn.drawAnimFrame),m.tmp.source_svg=void 0,m.tmp.img_obj=void 0,m.tmp.count_svg=0,m.fn.particlesEmpty(),m.fn.canvasClear(),m.fn.vendors.start()},m.fn.interact.linkParticles=function(e,a){var t=e.x-a.x,i=e.y-a.y,n=Math.sqrt(t*t+i*i);if(n<=m.particles.line_linked.distance){var s=m.particles.line_linked.opacity-n/(1/m.particles.line_linked.opacity)/m.particles.line_linked.distance;if(0<s){var r=m.particles.line_linked.color_rgb_line;m.canvas.ctx.strokeStyle="rgba("+r.r+","+r.g+","+r.b+","+s+")",m.canvas.ctx.lineWidth=m.particles.line_linked.width,m.canvas.ctx.beginPath(),m.canvas.ctx.moveTo(e.x,e.y),m.canvas.ctx.lineTo(a.x,a.y),m.canvas.ctx.stroke(),m.canvas.ctx.closePath()}}},m.fn.interact.attractParticles=function(e,a){var t=e.x-a.x,i=e.y-a.y;if(Math.sqrt(t*t+i*i)<=m.particles.line_linked.distance){var n=t/(1e3*m.particles.move.attract.rotateX),s=i/(1e3*m.particles.move.attract.rotateY);e.vx-=n,e.vy-=s,a.vx+=n,a.vy+=s}},m.fn.interact.bounceParticles=function(e,a){var t=e.x-a.x,i=e.y-a.y;Math.sqrt(t*t+i*i)<=e.radius+a.radius&&(e.vx=-e.vx,e.vy=-e.vy,a.vx=-a.vx,a.vy=-a.vy)},m.fn.modes.pushParticles=function(e,a){m.tmp.pushing=!0;for(var t=0;t<e;t++)m.particles.array.push(new m.fn.particle(m.particles.color,m.particles.opacity.value,{x:a?a.pos_x:Math.random()*m.canvas.w,y:a?a.pos_y:Math.random()*m.canvas.h})),t==e-1&&(m.particles.move.enable||m.fn.particlesDraw(),m.tmp.pushing=!1)},m.fn.modes.removeParticles=function(e){m.particles.array.splice(0,e),m.particles.move.enable||m.fn.particlesDraw()},m.fn.modes.bubbleParticle=function(c){if(m.interactivity.events.onhover.enable&&isInArray("bubble",m.interactivity.events.onhover.mode)){var e=c.x-m.interactivity.mouse.pos_x,a=c.y-m.interactivity.mouse.pos_y,t=1-(o=Math.sqrt(e*e+a*a))/m.interactivity.modes.bubble.distance;function i(){c.opacity_bubble=c.opacity,c.radius_bubble=c.radius}if(o<=m.interactivity.modes.bubble.distance){if(0<=t&&"mousemove"==m.interactivity.status){if(m.interactivity.modes.bubble.size!=m.particles.size.value)if(m.interactivity.modes.bubble.size>m.particles.size.value){0<=(s=c.radius+m.interactivity.modes.bubble.size*t)&&(c.radius_bubble=s)}else{var n=c.radius-m.interactivity.modes.bubble.size,s=c.radius-n*t;c.radius_bubble=0<s?s:0}var r;if(m.interactivity.modes.bubble.opacity!=m.particles.opacity.value)if(m.interactivity.modes.bubble.opacity>m.particles.opacity.value)(r=m.interactivity.modes.bubble.opacity*t)>c.opacity&&r<=m.interactivity.modes.bubble.opacity&&(c.opacity_bubble=r);else(r=c.opacity-(m.particles.opacity.value-m.interactivity.modes.bubble.opacity)*t)<c.opacity&&r>=m.interactivity.modes.bubble.opacity&&(c.opacity_bubble=r)}}else i();"mouseleave"==m.interactivity.status&&i()}else if(m.interactivity.events.onclick.enable&&isInArray("bubble",m.interactivity.events.onclick.mode)){if(m.tmp.bubble_clicking){e=c.x-m.interactivity.mouse.click_pos_x,a=c.y-m.interactivity.mouse.click_pos_y;var o=Math.sqrt(e*e+a*a),l=((new Date).getTime()-m.interactivity.mouse.click_time)/1e3;l>m.interactivity.modes.bubble.duration&&(m.tmp.bubble_duration_end=!0),l>2*m.interactivity.modes.bubble.duration&&(m.tmp.bubble_clicking=!1,m.tmp.bubble_duration_end=!1)}function v(e,a,t,i,n){if(e!=a)if(m.tmp.bubble_duration_end)null!=t&&(r=e+(e-(i-l*(i-e)/m.interactivity.modes.bubble.duration)),"size"==n&&(c.radius_bubble=r),"opacity"==n&&(c.opacity_bubble=r));else if(o<=m.interactivity.modes.bubble.distance){if(null!=t)var s=t;else s=i;if(s!=e){var r=i-l*(i-e)/m.interactivity.modes.bubble.duration;"size"==n&&(c.radius_bubble=r),"opacity"==n&&(c.opacity_bubble=r)}}else"size"==n&&(c.radius_bubble=void 0),"opacity"==n&&(c.opacity_bubble=void 0)}m.tmp.bubble_clicking&&(v(m.interactivity.modes.bubble.size,m.particles.size.value,c.radius_bubble,c.radius,"size"),v(m.interactivity.modes.bubble.opacity,m.particles.opacity.value,c.opacity_bubble,c.opacity,"opacity"))}},m.fn.modes.repulseParticle=function(i){if(m.interactivity.events.onhover.enable&&isInArray("repulse",m.interactivity.events.onhover.mode)&&"mousemove"==m.interactivity.status){var e=i.x-m.interactivity.mouse.pos_x,a=i.y-m.interactivity.mouse.pos_y,t=Math.sqrt(e*e+a*a),n=e/t,s=a/t,r=clamp(1/(o=m.interactivity.modes.repulse.distance)*(-1*Math.pow(t/o,2)+1)*o*100,0,50),c={x:i.x+n*r,y:i.y+s*r};"bounce"==m.particles.move.out_mode?(0<c.x-i.radius&&c.x+i.radius<m.canvas.w&&(i.x=c.x),0<c.y-i.radius&&c.y+i.radius<m.canvas.h&&(i.y=c.y)):(i.x=c.x,i.y=c.y)}else if(m.interactivity.events.onclick.enable&&isInArray("repulse",m.interactivity.events.onclick.mode))if(m.tmp.repulse_finish||(m.tmp.repulse_count++,m.tmp.repulse_count==m.particles.array.length&&(m.tmp.repulse_finish=!0)),m.tmp.repulse_clicking){var o=Math.pow(m.interactivity.modes.repulse.distance/6,3),l=m.interactivity.mouse.click_pos_x-i.x,v=m.interactivity.mouse.click_pos_y-i.y,p=l*l+v*v,d=-o/p*1;p<=o&&function(){var e=Math.atan2(v,l);if(i.vx=d*Math.cos(e),i.vy=d*Math.sin(e),"bounce"==m.particles.move.out_mode){var a=i.x+i.vx,t=i.y+i.vy;(a+i.radius>m.canvas.w||a-i.radius<0)&&(i.vx=-i.vx),(t+i.radius>m.canvas.h||t-i.radius<0)&&(i.vy=-i.vy)}}()}else 0==m.tmp.repulse_clicking&&(i.vx=i.vx_i,i.vy=i.vy_i)},m.fn.modes.grabParticle=function(e){if(m.interactivity.events.onhover.enable&&"mousemove"==m.interactivity.status){var a=e.x-m.interactivity.mouse.pos_x,t=e.y-m.interactivity.mouse.pos_y,i=Math.sqrt(a*a+t*t);if(i<=m.interactivity.modes.grab.distance){var n=m.interactivity.modes.grab.line_linked.opacity-i/(1/m.interactivity.modes.grab.line_linked.opacity)/m.interactivity.modes.grab.distance;if(0<n){var s=m.particles.line_linked.color_rgb_line;m.canvas.ctx.strokeStyle="rgba("+s.r+","+s.g+","+s.b+","+n+")",m.canvas.ctx.lineWidth=m.particles.line_linked.width,m.canvas.ctx.beginPath(),m.canvas.ctx.moveTo(e.x,e.y),m.canvas.ctx.lineTo(m.interactivity.mouse.pos_x,m.interactivity.mouse.pos_y),m.canvas.ctx.stroke(),m.canvas.ctx.closePath()}}}},m.fn.vendors.eventsListeners=function(){"window"==m.interactivity.detect_on?m.interactivity.el=window:m.interactivity.el=m.canvas.el,(m.interactivity.events.onhover.enable||m.interactivity.events.onclick.enable)&&(m.interactivity.el.addEventListener("mousemove",function(e){if(m.interactivity.el==window)var a=e.clientX,t=e.clientY;else a=e.offsetX||e.clientX,t=e.offsetY||e.clientY;m.interactivity.mouse.pos_x=a,m.interactivity.mouse.pos_y=t,m.tmp.retina&&(m.interactivity.mouse.pos_x*=m.canvas.pxratio,m.interactivity.mouse.pos_y*=m.canvas.pxratio),m.interactivity.status="mousemove"}),m.interactivity.el.addEventListener("mouseleave",function(e){m.interactivity.mouse.pos_x=null,m.interactivity.mouse.pos_y=null,m.interactivity.status="mouseleave"})),m.interactivity.events.onclick.enable&&m.interactivity.el.addEventListener("click",function(){if(m.interactivity.mouse.click_pos_x=m.interactivity.mouse.pos_x,m.interactivity.mouse.click_pos_y=m.interactivity.mouse.pos_y,m.interactivity.mouse.click_time=(new Date).getTime(),m.interactivity.events.onclick.enable)switch(m.interactivity.events.onclick.mode){case"push":m.particles.move.enable||1==m.interactivity.modes.push.particles_nb?m.fn.modes.pushParticles(m.interactivity.modes.push.particles_nb,m.interactivity.mouse):1<m.interactivity.modes.push.particles_nb&&m.fn.modes.pushParticles(m.interactivity.modes.push.particles_nb);break;case"remove":m.fn.modes.removeParticles(m.interactivity.modes.remove.particles_nb);break;case"bubble":m.tmp.bubble_clicking=!0;break;case"repulse":m.tmp.repulse_clicking=!0,m.tmp.repulse_count=0,m.tmp.repulse_finish=!1,setTimeout(function(){m.tmp.repulse_clicking=!1},1e3*m.interactivity.modes.repulse.duration)}})},m.fn.vendors.densityAutoParticles=function(){if(m.particles.number.density.enable){var e=m.canvas.el.width*m.canvas.el.height/1e3;m.tmp.retina&&(e/=2*m.canvas.pxratio);var a=e*m.particles.number.value/m.particles.number.density.value_area,t=m.particles.array.length-a;t<0?m.fn.modes.pushParticles(Math.abs(t)):m.fn.modes.removeParticles(t)}},m.fn.vendors.checkOverlap=function(e,a){for(var t=0;t<m.particles.array.length;t++){var i=m.particles.array[t],n=e.x-i.x,s=e.y-i.y;Math.sqrt(n*n+s*s)<=e.radius+i.radius&&(e.x=a?a.x:Math.random()*m.canvas.w,e.y=a?a.y:Math.random()*m.canvas.h,m.fn.vendors.checkOverlap(e))}},m.fn.vendors.createSvgImg=function(s){var e=m.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi,function(e,a,t,i){if(s.color.rgb)var n="rgba("+s.color.rgb.r+","+s.color.rgb.g+","+s.color.rgb.b+","+s.opacity+")";else n="hsla("+s.color.hsl.h+","+s.color.hsl.s+"%,"+s.color.hsl.l+"%,"+s.opacity+")";return n}),a=new Blob([e],{type:"image/svg+xml;charset=utf-8"}),t=window.URL||window.webkitURL||window,i=t.createObjectURL(a),n=new Image;n.addEventListener("load",function(){s.img.obj=n,s.img.loaded=!0,t.revokeObjectURL(i),m.tmp.count_svg++}),n.src=i},m.fn.vendors.destroypJS=function(){cancelAnimationFrame(m.fn.drawAnimFrame),t.remove(),pJSDom=null},m.fn.vendors.drawShape=function(e,a,t,i,n,s){var r=n*s,c=n/s,o=180*(c-2)/c,l=Math.PI-Math.PI*o/180;e.save(),e.beginPath(),e.translate(a,t),e.moveTo(0,0);for(var v=0;v<r;v++)e.lineTo(i,0),e.translate(i,0),e.rotate(l);e.fill(),e.restore()},m.fn.vendors.exportImg=function(){window.open(m.canvas.el.toDataURL("image/png"),"_blank")},m.fn.vendors.loadImg=function(e){if(m.tmp.img_error=void 0,""!=m.particles.shape.image.src)if("svg"==e){var a=new XMLHttpRequest;a.open("GET",m.particles.shape.image.src),a.onreadystatechange=function(e){4==a.readyState&&(200==a.status?(m.tmp.source_svg=e.currentTarget.response,m.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),m.tmp.img_error=!0))},a.send()}else{var t=new Image;t.addEventListener("load",function(){m.tmp.img_obj=t,m.fn.vendors.checkBeforeDraw()}),t.src=m.particles.shape.image.src}else console.log("Error pJS - No image.src"),m.tmp.img_error=!0},m.fn.vendors.draw=function(){"image"==m.particles.shape.type?"svg"==m.tmp.img_type?m.tmp.count_svg>=m.particles.number.value?(m.fn.particlesDraw(),m.particles.move.enable?m.fn.drawAnimFrame=requestAnimFrame(m.fn.vendors.draw):cancelRequestAnimFrame(m.fn.drawAnimFrame)):m.tmp.img_error||(m.fn.drawAnimFrame=requestAnimFrame(m.fn.vendors.draw)):null!=m.tmp.img_obj?(m.fn.particlesDraw(),m.particles.move.enable?m.fn.drawAnimFrame=requestAnimFrame(m.fn.vendors.draw):cancelRequestAnimFrame(m.fn.drawAnimFrame)):m.tmp.img_error||(m.fn.drawAnimFrame=requestAnimFrame(m.fn.vendors.draw)):(m.fn.particlesDraw(),m.particles.move.enable?m.fn.drawAnimFrame=requestAnimFrame(m.fn.vendors.draw):cancelRequestAnimFrame(m.fn.drawAnimFrame))},m.fn.vendors.checkBeforeDraw=function(){"image"==m.particles.shape.type?"svg"==m.tmp.img_type&&null==m.tmp.source_svg?m.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(m.tmp.checkAnimFrame),m.tmp.img_error||(m.fn.vendors.init(),m.fn.vendors.draw())):(m.fn.vendors.init(),m.fn.vendors.draw())},m.fn.vendors.init=function(){m.fn.retinaInit(),m.fn.canvasInit(),m.fn.canvasSize(),m.fn.canvasPaint(),m.fn.particlesCreate(),m.fn.vendors.densityAutoParticles(),m.particles.line_linked.color_rgb_line=hexToRgb(m.particles.line_linked.color)},m.fn.vendors.start=function(){isInArray("image",m.particles.shape.type)?(m.tmp.img_type=m.particles.shape.image.src.substr(m.particles.shape.image.src.length-3),m.fn.vendors.loadImg(m.tmp.img_type)):m.fn.vendors.checkBeforeDraw()},m.fn.vendors.eventsListeners(),m.fn.vendors.start()};function hexToRgb(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,a,t,i){return a+a+t+t+i+i});var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null}function clamp(e,a,t){return Math.min(Math.max(e,a),t)}function isInArray(e,a){return-1<a.indexOf(e)}Object.deepExtend=function(e,a){for(var t in a)a[t]&&a[t].constructor&&a[t].constructor===Object?(e[t]=e[t]||{},arguments.callee(e[t],a[t])):e[t]=a[t];return e},window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},window.cancelRequestAnimFrame=window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout,window.pJSDom=[],window.particlesJS=function(e,a){"string"!=typeof e&&(a=e,e="particles-js"),e=e||"particles-js";var t=document.getElementById(e),i="particles-js-canvas-el",n=t.getElementsByClassName(i);if(n.length)for(;0<n.length;)t.removeChild(n[0]);var s=document.createElement("canvas");s.className=i,s.style.width="100%",s.style.height="100%",null!=document.getElementById(e).appendChild(s)&&pJSDom.push(new pJS(e,a))},window.particlesJS.load=function(t,e,i){var n=new XMLHttpRequest;n.open("GET",e),n.onreadystatechange=function(e){if(4==n.readyState)if(200==n.status){var a=JSON.parse(e.currentTarget.response);window.particlesJS(t,a),i&&i()}else console.log("Error pJS - XMLHttpRequest status: "+n.status),console.log("Error pJS - File config not found")},n.send()};!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=26)}({26:function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=function(e,t){var r=e.data("id"),o=e.data("particle_enable"),i=e.data("particle-mobile-disabled");if(!(void 0!==i&&i&&t(window).width()<=767||null==n(o)||null!=o&&0==o)){var a=e.data("preset_theme"),s=e.data("custom_style"),l=e.data("eael_ptheme_source");if("custom"!=l||""!=l){if(e.addClass("eael-particles-section"),window.isEditMode){var c,u={},d={};if(!window.elementor.hasOwnProperty("elements"))return!1;if(!(c=window.elementor.elements).models)return!1;t.each(c.models,(function(n,o){r==o.id?u=o.attributes.settings.attributes:o.id==e.closest(".elementor-top-section").data("id")&&t.each(o.attributes.elements.models,(function(e,n){t.each(n.attributes.elements.models,(function(e,t){u=t.attributes.settings.attributes}))}))})),d.switch=u.eael_particle_switch,d.themeSource=u.eael_particle_theme_from,"presets"==d.themeSource&&(d.selected_theme=localize.ParticleThemesData[u.eael_particle_preset_themes]),"custom"==d.themeSource&&""!==u.eael_particles_custom_style&&(d.selected_theme=u.eael_particles_custom_style),0!==d.length&&(d=d)}else{t(".eael-section-particles-"+r).each((function(){l=t(this).data("eael_ptheme_source"),themes="presets"==l?JSON.parse(localize.ParticleThemesData[a]):""!=s?s:void 0;var e=t(this).attr("id");null==e&&(t(this).attr("id","eael-section-particles-"+r),e=t(this).attr("id")),particlesJS(e,themes)}))}if(!window.isEditMode||!d)return!1;"yes"==d.switch?("presets"===d.themeSource||"custom"===d.themeSource&&""!==d.selected_theme)&&"undefined"!=typeof particlesJS&&t.isFunction(particlesJS)&&(e.attr("id","eael-section-particles-"+r),particlesJS("eael-section-particles-"+r,JSON.parse(d.selected_theme)),e.children("canvas.particles-js-canvas-el").css({position:"absolute",top:0})):e.removeClass("eael-particles-section")}}};jQuery(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/section",r),elementorFrontend.hooks.addAction("frontend/element_ready/container",r)}))}});