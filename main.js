leftmusic = ""
rightmusic = ""

function preload() {
 leftmusic = loadSound("frozen.mp3")
 rightmusic = loadSound("unstoppable.mp3")
}

function setup() {
	canvas =  createCanvas(600, 500)
	canvas.center()

    video = createCapture(VIDEO)
    video.hide()
}

function draw() {
    image(video,0,0,600,500)
}
