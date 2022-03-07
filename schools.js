class School {
  constructor(name, numberOfStudents, level) {
    this._name = name
    this._numberOfStudents = numberOfStudents
    this._level = level
  }

  get name() {
    return this._name
  }
  get numberOfStudents() {
    return this._numberOfStudents
  }
  get level() {
    return this._level
  }

  set numberOfStudents(num) {
    if (typeof num === "number") {
      this._numberOfStudents = num
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    }
  }

  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
  }
  static pickSubstituteTeacher(substituteTeachers) {
    const index = Math.floor(Math.random() * (substituteTeachers.length - 1))
    console.log(`The new substitute teacher is ${substituteTeachers[index]}`)
  }
}

class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, numberOfStudents, 'primary')
    this._pickupPolicy = pickupPolicy
  }

  get pickupPolicy() {
    return this._pickupPolicy
  }
}

class Middle extends School {
  constructor(name, numberOfStudents) {
    super(name, numberOfStudents, 'middle')
  }
}

class High extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, numberOfStudents, 'high')
    this._sportsTeams = sportsTeams
  }

  get sportsTeams() {
    return this._sportsTeams
  }
}

// Test your code
const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
lorraineHansbury.quickFacts()
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])

const alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
console.log(alSmith.sportsTeams)
