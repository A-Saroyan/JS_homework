let obj = {
            firstName : "Stephen",
            lastName : "Curry",
            age : 37,
            introduce : function () {  return  `Hi, I'm ${this.firstName} ${this.lastName} and I'm ${this.age} years old.`;}
          }

console.log(obj.introduce());          