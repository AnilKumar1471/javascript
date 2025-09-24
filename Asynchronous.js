//javascript is single-threaded
//Asynchronous programming provides a mechanism for managing long-running operations without
//-interrupting the flow of the program
//Asynchronous operations involve the use of callbacks,promises or async/await syntax

console.log("First code")
console.log("second code")

setTimeout(()=>{
    console.log("Third code")
},3000)

console.log("Fourth code")
console.log("Fifth code")