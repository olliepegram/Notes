let restraunt = {
  name: 'Robertos',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
  seatParty: function (partySize) {
    this.guestCount += partySize;
  },
  removeParty: function(partySize) {
     this.guestCount -= partySize;
  }
}

restraunt.seatParty(72);
console.log(restraunt.checkAvailability(4));
restraunt.removeParty(5);
console.log(restraunt.checkAvailability(4));


