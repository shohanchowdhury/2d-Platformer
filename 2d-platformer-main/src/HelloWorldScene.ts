import Phaser from 'phaser'

export default class HelloWorldScene extends Phaser.Scene {
	constructor() {
		super('hello-world')
	}


	preload() {
		this.load.setBaseURL('https://labs.phaser.io')

		this.load.image('sky', 'assets/skies/space3.png')
		this.load.image('logo', 'assets/sprites/phaser3-logo.png')
		this.load.image('red', 'assets/particles/red.png')
	}

	create() {
		this.add.image(400, 300, 'sky')

		const particles = this.add.particles(0, 0, 'red',{
			x: 400,
			y: 300,
			speed: 100,
			lifespan: 2000,
			blendMode: 'ADD'
		})

		particles.accelerationY = 200
		const logo = this.physics.add.image(400, 100, 'logo')

		logo.setVelocity(100, 200)
		logo.setBounce(1, 1)
		logo.setCollideWorldBounds(true)

		particles.startFollow(logo)
	}
}
