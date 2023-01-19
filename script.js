/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  arr.map((value) => {
    if (value.profession === "developer") {
      console.log(value)
    }
  })
}

function PrintDeveloperbyForEach() {
  let ans
  arr.forEach(element => {
    if (element.profession === "developer") {
      console.log(element)
    }
  })
}

function addData() {
  let arr1 = { id: 4, name: "susan", age: "20", profession: "intern" }
  arr.push(arr1)
  console.log("add data",arr)
}

function removeAdmin() {
  arr.map((value,index)=>{
    if(value.profession === "admin"){
      arr.splice(index)
      console.log(arr)
    }
  })
}

function concatenateArray() {
  let arr2 = [
    { id: 7, name: "rohan", age: "25", profession: "manager" },
    { id: 8, name: "hiren", age: "20", profession: "developer" },
    { id: 9, name: "jyoti", age: "22", profession: "clark" },
  ];
  let m = arr.concat(arr2)
  console.log(m)
}

// PrintDeveloperswithMap()
// PrintDeveloperbyForEach()
// addData()
// removeAdmin()
// concatenateArray()
