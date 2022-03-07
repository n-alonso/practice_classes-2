# School Catalogue

Let’s put your knowledge of classes to the test by creating a digital school catalog for the New York City Department of Education. The Department of Education wants the catalog to hold quick reference material for each school in the city.

We need to create classes for primary and high schools. Because these classes share properties and methods, each will inherit from a parent `School` class. Our parent and three child classes have the following properties, getters, setters, and methods:

__School__
* __Properties__: `name` (string), `level` (one of three strings: `'primary'`, `'middle'`, or `'high'`), and `numberOfStudents` (number)
* __Getters__: all properties have getters
* __Setters__: the `numberOfStudents` property has a setter
* __Methods__: `.quickFacts()` and `.pickSubstituteTeacher()` (this is a static method)

__Primary__
* Includes everything in the School class, plus one additional property
* __Properties__: `pickupPolicy` (string)

__Middle__
* Does not include any additional properties or methods

__High__
* Includes everything in the School class, plus one additional property
* __Properties__: `sportsTeams` (array of strings)
