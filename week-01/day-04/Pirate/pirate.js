'use strict';

class Pirate {
    constructor(wine = 0, asleep = false, dead = false) {
        this.wine = wine;
        this.asleep = asleep;
        this.dead = dead;
    }

    drinkSomeRum() {
        if (!this.dead) {
            this.wine++;
            if (this.wine > 4) {
                this.die();
            }
        }
    }

    howsItGoingMate() {
        this.drinkSomeRum();
        if (wine < 5) {
            console.log("Pour me anudder!");
        } else {
            console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
            sleep();
        }
    }

    getWine() {
        return this.wine;
    }

    getAsleep() {
        return this.asleep;
    }

    getDead() {
        return this.dead;
    }

    sleep() {
        this.asleep = true;
    }

    die() {
        this.dead = true;
        console.log("He's dead.");
    }

    checkDead() {
        return this.dead;
    }

    brawl(pirate) {
        if (pirate.checkDead()) {
            console.log("Wake up man, he's dead already!");
        } else {
            let rate = Math.randoom();
            if (rate < (1 / 3)) {
                this.die();
            } else if (rate > (2 / 3)) {
                this.sleep();
                pirate.sleep();
            } else {
                pirate.die();
            }
        }
    }

    partyRum() {
        for (let i = 0; i < Math.round(Math.random() * 2 + 1); i++) {
            this.drinkSomeRum();
        }
    }
}

module.exports = Pirate;