
var num = 2;

Vue.component('my-menu',{
	template:'<div class="my-menu" :style="outer"><div class="back" :style="inner"><a :href="vhref">{{msg}}</a></div></div>',
	props:['msg','type','vhref'],
	data:function(){
		return {
			outer:'transform: rotate('+(this.type*(360/num)-(360/num)*1.618)+'deg)',
			inner:'transform: rotate('+-(this.type*(360/num)-(360/num)*1.618)+'deg)'
		}
	}
})

new Vue({
	el:'#select'
})

window.onload= function(){
	var content = document.getElementById('content');
	var maindh = document.getElementById('maindh');
	var god = document.getElementById('god');
	var black = document.getElementById('black');
	var white = document.getElementById('white');
	maindh.style.opacity =0;
	content.style.opacity = 1;
	black.style.left = '40vw';
	white.style.left = '24vw';
	god.style.opacity = 0;
	setTimeout(del_init,4000);
}

function del_init(){
	del();
	init();



}

function del(){
	var f = document.getElementsByTagName('body');
	f = f[0];
	var maindh = document.getElementById('maindh');
	var god = document.getElementById('god');
	f.removeChild(maindh);
	f.removeChild(god);
}
function init(){
	var f = document.getElementById('select');
	//!!!!!
	var c = f.children;
	let i=0;
	for(i=0;i<num;i++){
		let t = null;
		c[i].style.opacity = 1;
		c[i].style.transform = 'rotate('+(i*(360/num))+'deg)';
		t = c[i].children[0];
		t.style.transform = 'rotate('+(-i*(360/num))+'deg)';
	}
}
function test(t){
	num++;
	let f = document.getElementById('select');
	let c = document.createElement('div');
	let c1 = document.createElement('div');
	let c2 = document.createElement('a');
	let msg= typeof(t)=='undefined'?'test':t;
	c2.innerText = msg;
	c2.href='#';
	c1.appendChild(c2);
	c1.className = 'back';
	c1.style.transform = 'rotate('+-((360/num)*(num-1))+'deg)';
	c.appendChild(c1);
	c.className = 'my-menu';
	c.style.opacity = 1;
	c.style.transform = 'rotate('+((360/num)*(num-1))+'deg)';
	f.appendChild(c);
	init();
}
function test2(){
	num--;
	let f = document.getElementById('select');
	let c = f.children[num];
	f.removeChild(c);
	init();

}