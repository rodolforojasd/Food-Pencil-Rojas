
let userName = 0
let userMail= 0
let userPassword= 0
let  userToken=0
let userAccess = false
  
const  registerUser = () => {
	debugger
	let registResponse = ""
	
	
	while (registResponse !== "yes" && registResponse !== "no"){
		registResponse = prompt("Do you want to register?: Yes/No")	
		registResponse = registResponse.toLowerCase()
		alert (`I'm sorry, can you repeat your answer`)
			
	}
	if (registResponse === "yes") {
	userName =prompt("Please select an user name")
  
	userMail = prompt("Please enter an email adress")
  
	userPassword = prompt("Please enter a password at least0 8 characters long")

	let userBirthdate = prompt("Please enter your birthdate: Exp 11/07/1976")

	userToken= true

	alert(`Welcome to the food nerds club ${userName}!`)

	} else{
 		alert("Maybe next time.")
  		userToken = false
 	} 
		
		
}
	
 


const userSignIn=()=>{
	let signIntent =0
	let userCheck=0
	let passwordCheck=0
	

	if(userToken= true){
		
		while (signIntent !== 1||2){
			signIntent= parseInt(prompt("Do you want to sign-in?: 1. Yes/ 2.No"))
			alert(`Sorry I did not catch that!`)
		}
		if (signIntent === 1){
			for (let i=0; i<10; i++){
				if(userName===userNameCheck || userMail===userCheck &&  userPassword===passwordCheck) break
				if(userName!==userNameCheck || userMail!==userCheck &&  userPassword!==passwordCheck){
					userCheck =prompt("Please enter your username, mail or full name")
					passwordCheck= prompt("Please enter your password")
					alert(`The password or user info is not correct, please try again.`)
					
				}
			}
			userAccess= true
			alert(`Thank you for signing-in ${userCheck}!`)
		}
	}
	else{
		alert(`Ok. Maybe later.`)
	}
				
}
	


const checkUserAccess = () =>{
while (accessGranted !== userAccess) {
	let accessGranted = 0
	if (userToken === true && userAccess===true){
	 accessGranted= userAccess
	}else if (userToken === true && userAccess === false){
		userSignIn()
	} else{
		registerUser()
	}

}
}





//comment

const postComment =() => {
checkUserAccess()
let userComment = prompt("Write your comment:?")

}


//rate recipe
const articleRating = ()=> {
checkUserAccess()  
let articleStars= parseInt(prompt("Please select a number of stars between 1-5"))
}




//shooping cart



registerUser()
/*
userSignIn()

postComment()

articleRating()
*/