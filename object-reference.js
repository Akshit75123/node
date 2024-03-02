//video-15 (module.exports vs exports)

const obj1 = {
  name: "Bruce Wayne",
};

// const obj2 = obj1; //when we assign the obj2 as obj1 then obj1 and obj2 point at the same location in memory.
// obj2.name = "Clark Kent"; // this will modify both the objects.

//in order to fix this problem
let obj2=obj1
obj2 = {
    name:"Clark Kent"
}

console.log(obj1);
