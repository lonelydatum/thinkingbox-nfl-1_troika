function start(t1=1.5, t2=2.5) {
	const tl = new TimelineMax()
	tl.from('.t1', .3, {opacity:0})
	tl.to('.t1', .3, {opacity:0}, `+=${t1}`)
	tl.from('.t2', .3, {opacity:0})
	tl.to('.t2', .3, {opacity:0}, `+=${t2}`)
	tl.from('.t3', .3, {opacity:0})
}

export default start