'use strict';

const Thing = require('./thing');
const Fleet = require('./fleet');

const fleet = new Fleet();

class FleetOfThings {
    static main(fleet) {
        let thing1 = new Thing("Get milk");
        let thing2 = new Thing("Remove the obstacles");
        let thing3 = new Thing("Stand up");
        let thing4 = new Thing("Eat lunch");
        thing3.complete();
        thing4.complete();
        fleet.add(thing1);
        fleet.add(thing2);
        fleet.add(thing3);
        fleet.add(thing4);
    }

    static print(things) {
        things.forEach(thing => {
            if (thing.getCompleted()) {
                console.log(`[x] ${thing.getName()}`);
            } else {
                console.log(`[ ] ${thing.getName()}`);
            }
        })
    }
}

FleetOfThings.main(fleet);
FleetOfThings.print(fleet.getThings());
