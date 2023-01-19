/** @format */

let output = document.getElementById("output")

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  output.innerHTML = ""
  arr.map((value) => {
    if (value.profession === "developer") {
      console.log(value)
      output.innerHTML += `<div>map<p>id = ${value.id}</p>
      <p>name = ${value.name}</p>
      <p>age = ${value.age}</p>
      <p>profession = ${value.profession}</p></div><hr>`
    }
  })
}

function PrintDeveloperbyForEach() {
  output.innerHTML = ""
  let ans
  arr.forEach(element => {
    if (element.profession === "developer") {
      console.log(element)
      output.innerHTML += `<div>foreach<p>id = ${element.id}</p>
      <p>name = ${element.name}</p>
      <p>age = ${element.age}</p>
      <p>profession = ${element.profession}</p></div><hr>`
    }
  })
}

function addData() {
  output.innerHTML = ""
  let arr1 = { id: 4, name: "susan", age: "20", profession: "intern" }
  arr.push(arr1)
  arr.map((value)=>{
    console.log("add data",value)
    output.innerHTML += `<div>add data<p>id = ${value.id}</p>
        <p>name = ${value.name}</p>
        <p>age = ${value.age}</p>
        <p>profession = ${value.profession}</p></div><hr>`
  })
}

function removeAdmin() {
  output.innerHTML = ""
  arr.map((value,index)=>{
    if(value.profession === "admin"){
      arr.splice(index)
      arr.map((value)=>{
        console.log(value)
        output.innerHTML += `<div>remove admin<p>id = ${value.id}</p>
            <p>name = ${value.name}</p>
            <p>age = ${value.age}</p>
            <p>profession = ${value.profession}</p></div><hr>`
      })
    }
  })
}

function concatenateArray() {
  output.innerHTML = ""
  let arr2 = [
    { id: 7, name: "rohan", age: "25", profession: "manager" },
    { id: 8, name: "hiren", age: "20", profession: "developer" },
    { id: 9, name: "jyoti", age: "22", profession: "clark" },
  ];
  let m = arr.concat(arr2)
  m.map((value)=>{
    console.log(value)
    output.innerHTML += `<div>Concat <p>id = ${value.id}</p>
        <p>name = ${value.name}</p>
        <p>age = ${value.age}</p>
        <p>profession = ${value.profession}</p></div><hr>`
  })
}

// PrintDeveloperswithMap()
// PrintDeveloperbyForEach()
// addData()
// removeAdmin()
// concatenateArray()
