//welcome
//Register
//Login
//Thankyou

console.log("welcome")

const Register=(apple)=>{
    setTimeout(()=>{
        console.log("Please Register!")
        apple()
    },2000)
}

const   Login=()=>{
    setTimeout(()=>{
        console.log("Please login!")
    },4000)
}

const Thankyou=()=>{
    setTimeout(()=>{
        console.log("Thank you")
    },5000)
}

Register(function(){
    console.log("I love apples")
})
Login()
Thankyou()