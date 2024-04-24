// Your code here 
class PartyPlanner {
	constructor(guestList = []) {
		this.guestList = guestList;
	}
	addToGuestList = (name) => {
		this.guestList.push(name);
	}
	
	throwParty = () => {
		// console.log(this.guestList);
		if (this.guestList.length === 0) return 'Gotta add people to the guest list';
		let welcomeList = 'Welcome to the party ';
		welcomeList += this.guestList.join(' and ');
		return welcomeList;
	}
}

const party2 = new PartyPlanner();
console.log(party2.throwParty()); // prints "Gotta add people to the guest list"

party2.addToGuestList("Lucy");
console.log(party2.throwParty()); // prints "Welcome to the party Lucy"
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
