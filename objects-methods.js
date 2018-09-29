let restraunt = {
  name: 'Robertos',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
  seatParty: function (amount) {
    this.guestCount = this.guestCount + amount;
  },
  removeParty: function (amount) {
    this.guestCount = this.guestCount - amount;
  }
}

restraunt.seatParty(72);
console.log(restraunt.checkAvailability(4));
restraunt.removeParty(5);
console.log(restraunt.checkAvailability(4));
