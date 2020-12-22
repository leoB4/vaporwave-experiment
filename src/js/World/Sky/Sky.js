import { Object3D, Vector3 } from 'three'

export default class Sky {
  constructor(options) {
    // Options
    this.assets = options.assets
    this.scalar = options.scalar

    // Set up
    this.container = new Object3D()
    this.container.name = 'Sky'

    this.createSky()
  }
  createSky() {
    this.sky = new Sky()
    this.sky.setScalar(this.scalar)
    this.sky.

    this.container.add(this.sky)
  }
}
