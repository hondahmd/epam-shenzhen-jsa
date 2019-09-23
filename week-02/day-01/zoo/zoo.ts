import Bird from "./bird";
import Mammal from "./mammal";
import Reptile from "./reptile";

const reptile = new Reptile("Crocodile", 1, "meat", "sleep in caves", "swim and crawl");
const mammal = new Mammal("Koala", 10, "leaf", "sleep all day", "climb");
const bird = new Bird("Parrot", 5, "corn", "sleep on the tree", "fly");

console.log("How do you breed?");
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}`);
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}`);
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}`);
