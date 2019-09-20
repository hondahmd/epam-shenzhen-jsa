'use strict'

class Aircraft {
    constructor(type, maxAmmo, damage) {
        this.type = type;
        this.maxAmmo = maxAmmo;
        this.damage = damage;
        this.wholeDamage = 0;
        this.ammo = 0;
    }

    fight() {
        let damage = this.ammo * this.damage;
        this.wholeDamage = damage;
        this.ammo = 0;
        return damage;
    }

    refill(storedAmmo) {
        let emptyAmmo = this.maxAmmo - this.ammo;
        if (emptyAmmo >= storedAmmo) {
            this.ammo += storedAmmo;
            return 0;
        } else {
            this.ammo = this.maxAmmo;
            return storedAmmo - emptyAmmo;
        }
    }

    getType() {
        return this.type;
    }

    getStatus() {
        return `Type ${this.getType()}, Ammo: ${this.ammo}, Base Damage: ${this.damage}, All Damage: ${this.wholeDamage}`;
    }

    getPriority() {
        return this.type === 'F35' ? true : false;
    }
}

module.exports = Aircraft;