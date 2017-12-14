TweenLite.defaultEase = Power1.easeOut

const dom = {	
	star1: document.getElementById('star-1_1_'),
	star2: document.getElementById('star-2_1_'),	
}

function star(a=2, b=8){
	const tl = new TimelineMax();
	tl.set("#stars", {opacity:1})
	tl.fromTo(dom.star1, a, {drawSVG:"0%"}, {drawSVG:"100%", ease: Power2.easeInOut});	
	tl.fromTo(dom.star2, b, {drawSVG:"0%"}, {drawSVG:"100%", ease: Power2.easeInOut}, 0);	
	// tl.fromTo(dom.star3, 1, {drawSVG:"0%"}, {drawSVG:"100%", ease: Power2.easeInOut});	
	TweenMax.to(dom.star1, .5, {opacity:.6, yoyo:true, repeat:99})
	TweenMax.to([dom.star2], .4, {opacity:.7, yoyo:true, repeat:99, delay:.133322})
	return tl
}


function glitter() {
	const tl = new TimelineMax();
	
	
	TweenMax.to('#glitter-1', .3, {opacity:0, yoyo:true, repeat:99, ease:Power1.easeInOut})
	TweenMax.to('#glitter-2', .31, {opacity:0, yoyo:true, repeatDelay:.2, repeat:99, ease:Power2.easeInOut})
	TweenMax.to('#glitter-3', .38, {opacity:0, yoyo:true, repeat:99, ease:Power1.easeInOut})
	TweenMax.to('#glitter-4', .4, {opacity:0, yoyo:true, repeatDelay:.4, repeat:99, ease:Power4.easeInOut})
	TweenMax.to('#glitter-5', .3, {opacity:0, yoyo:true, repeat:99, ease:Power2.easeInOut})
}

function Twinkle() {
	
	const tl = new TimelineMax({repeat:10})
	tl.from('#twinkle-1', .42, {opacity:0, yoyo:true, repeat:3, repeatDelay:.1}, 0)
	tl.from('#twinkle-2', .62, {opacity:0, yoyo:true, repeat:3, repeatDelay:0.7}, 1.7)
	tl.from('#twinkle-3', .32, {opacity:0, yoyo:true, repeat:3, repeatDelay:0.3}, 0.8)
	tl.from('#twinkle-4', .2, {opacity:0, yoyo:true, repeat:3, repeatDelay:.1}, 1.1)
	tl.from('#twinkle-5', .52, {opacity:0, yoyo:true, repeat:3, repeatDelay:0.2}, 0.7)
	tl.from('#twinkle-6', .2, {opacity:0, yoyo:true, repeat:3, repeatDelay:0.3}, 0.4)

}

let legalTween = null

document.getElementById('legal-btn').addEventListener('mouseover', ()=>{
	TweenMax.set('#legal', {opacity:1})
	legalTween = TweenMax.fromTo('#legal p', window.stars.legal.time, {y:window.stars.legal.start}, {y:window.stars.legal.end, ease:Linear.easeNone})	
	// legalTween = TweenMax.fromTo('#legal p', 40, {y:190}, {y:-890})	
})

document.getElementById('legal-btn').addEventListener('mouseout', ()=>{
	TweenMax.set('#legal', {opacity:0})
	legalTween.kill()
})

export {Twinkle, dom, star, glitter}