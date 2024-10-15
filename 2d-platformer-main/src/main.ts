import Phaser from 'phaser'

import HelloWorldScene from './HelloWorldScene'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { x: 0 ,y: 200 },
		},
	},
	scene: [HelloWorldScene],
}
console.log(Phaser.VERSION);


export default new Phaser.Game(config)
