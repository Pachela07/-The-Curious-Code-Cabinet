class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  // GETTERS

  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }

  // METHODS

  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} at the ${this._level} level`
    );
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const randomNumber = Math.floor(substituteTeachers.length * Math.random());
    return substituteTeachers[randomNumber];
  }

  // SETTERS
  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === "number") {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log(`Invalid input: ${numberOfStudents} must be set to a Number`);
    }
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  // GETTERS
  get sportsTeams() {
    return this._sportsTeams;
  }
}

// INSTANCES OF PRIMARY AND HIGH SCHOOL

const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);
// Calling method
lorraineHansbury.quickFacts();

School.pickSubstituteTeacher([
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli",
]);

// HIGHSCHOOL INSTANCES

const alSmith = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);

console.log(alSmith);
