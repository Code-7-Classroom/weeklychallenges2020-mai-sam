// 1. Create a Person constructor that has three properties: name, job, and age.

function Person(name, job, age) {
  Programmer.call(this, name, job, age);
  this.name = name;
  this.job = job;
  this.age = age;

  // 2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
  this.exercise = function () {
    console.log(this.name + " Have you been working out? Looking good!");
  };
}

// 3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a    back-end developer".
this.fetchJob = function () {
  console.log(this.name + " is a " + this.job);
};

/*
4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' 
property that is passed in and a busy property that is NOT passed in and is set to true by default.
5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 
'acceptNewTask' method that updates the busy property on that programmer to be true.
6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is 
not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if 
the programmer is not busy.
7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the 
programmer knows.
*/

function Programmer(language, busy) {
  this.language = language;
  this.busy = busy;

  this.learnLangauge = function () {
    this.language = ["GO", "CSS", " and React"];
    console.log(
      `${this.name} has been learning these langauges: ${this.language} .`
    );
  };

  this.listLanguage = function () {
    this.language = ["C++", "Ruby", " and Java"];
    console.log(
      `${this.name} currently knows these languages: ${this.language}`
    );
  };
}

this.completeTask = function () {
  this.busy = false;

  if (this.busy == false) {
    console.log(`${this.name} is currently accepting new tasks!`);
  } else {
    return this.name + "is currently not accepting new tasks!";
  }
};

this.offerNewTask = function () {
  this.busy = false;
  if (this.busy === false) {
    console.log(`${this.name} is looking forward to new responsibilties!`);
  } else {
    console.log(`${this.name} is currently not accepting new tasks`);
  }
};


this.learnLanguage = function() {
    this.language = ["GO", "CSS", " and React"];
    console.log(`${this.name} is currently learning these languages! ${this.language}`);
}
this.listLanguage = function() {
    this.language = ["C++", "Ruby", " and Java"];
    console.log(`${this.name} currently these languages ${this.language}`);
}


// 8. Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers?
Person.prototype = Object.create(Programmer.prototype);
Person.prototype.constructor === Programmer;

var Peter = new Person(' Peter Parker ', ' Spider-Man, Photographer, High-Schooler ', 18);
var Tony = new Person(' Tony Stark ', 'Ironman, Billionare, Playboy, Philanthropist', 36);

Peter.exercise();
Tony.exercise();
Peter.profession();
Tony.profession();
Peter.completeTask();
Tony.completeTask();
