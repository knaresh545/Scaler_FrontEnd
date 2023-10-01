const groot = {
  name: "Groot",
  age: 999,
  planet: {
    name: "Groot",
    solarSystem: {
      name: "Groot",
    },
  },
  sayHi: function () {
    console.log("I am Groot");
  },
};

//groot.sayHi();
//console.log(groot.name);
console.log(groot.planet.solarSystem.name);
