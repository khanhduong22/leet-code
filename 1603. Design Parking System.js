/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
class ParkingSystem {
  // constructor(big, medium, small) {
  //   this.availableBig = big
  //   this.availableMedium = medium
  //   this.availableSmall = small
  // }
  // /**
  //  * @param {number} carType
  //  * @return {boolean}
  //  */
  // addCar(carType) {
  //   const BIG = 1
  //   const MEDIUM = 2
  //   const SMALL = 3
  //   if (carType === BIG && this.availableBig) {
  //     this.availableBig--
  //     return true
  //   }
  //   if (carType === MEDIUM && this.availableMedium) {
  //     this.availableMedium--
  //     return true
  //   }
  //   if (carType === SMALL && this.availableSmall) {
  //     this.availableSmall--
  //     return true
  //   }
  //   return false
  // }

  // shorter version
  constructor(big, medium, small) {
    this.count = [, big, medium, small]
  }

  addCar(carType) {
    return this.count[carType]-- > 0
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
