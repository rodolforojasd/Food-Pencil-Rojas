
class User {
	constructor(userId, userName, userMail, userFullName, userPassword, userAge, userRegistered, userSignedIn){
		this.userId = 0
		this.userName = userName;
		this.userMail = userMail;
		this.userfullName = userFullName;
		this.userPassword = userPassword;
		this.userAge = userAge.parseInt(userAge);
		this.userRegistered = false;
		this.userSignedIn= false;
	}
                                           

}


const users = []  
console.log(users)
const  registerUser = () => {
	debugger
	let registResponse = ""
	while (registResponse !== "yes" && registResponse !== "no"){
		registResponse = prompt("Do you want to register?: Yes/No")	
		registResponse = registResponse.toLowerCase()
		alert (`I'm sorry, can you repeat your answer`)
			
	}

	if (registResponse === "yes") {
	let userId = 0	
	if (users.lenght === 0){
		userId = 1 ;
	}else{
		userId = users.lenght + 1 ;
	}

	let userName = prompt("Please select an user name")

	let userFirstName = prompt("Please enter your First Name")
	let userLastName = prompt("Please enter your last name")

	let userFullName = userFirstName +" "+ userLastName;

  
	let userMail = prompt("Please enter an email adress")
  
	let userPassword = prompt("Please enter a password at least0 8 characters long")

	let userBirthdate = prompt("Please enter your birthdate: Exp 11/07/1976")

	let userRegistered= true

	let newUser = new User ({ userId: `${userId}`, userName:`${userName}`, userMail: `${userMail}`, userPassword:`${userPassword}`, userFullName:`${userFullName}` , userAge:`${userAge}`, userRegistered:`${userRegistered}`, userSignedIn: false});
	users.push(newUser)


	alert(`Welcome to the food nerds club ${userName}!`)

	} else{
 		alert("Maybe next time.")
  		userRegistered = false
 	} 
		
		
}
	
 


const signIn=()=>{
	let signIntent =0
	let userNameCheck=0
	let passwordCheck=0
	

	if(User.userRegistered= true){
		
		while (signIntent !== 1 && signIntent !== 2){
			signIntent= parseInt(prompt("Do you want to sign-in?: 1. Yes/ 2.No"))
			alert(`Sorry I did not catch that!`)
		}
		if (signIntent === 1){
			for (let i=0; i<10; i++){
				if(User.userName===userNameCheck || User.userMail===userNameCheck &&  User.userPassword===passwordCheck) break
				if(User.userName!==userNameCheck || User.userMail!==userNameCheck &&  User.userPassword!==passwordCheck){
					userCheck = prompt("Please enter your username or mail address ")
					passwordCheck = prompt("Please enter your password")
					alert(`The password or user info is not correct, please try again.`)
					
				}
			}
			for (const el of users){
				if(el.userName === userNameCheck || el.userMail === userNameCheck && el.userPassword === passwordCheck){
					el.userSignedIn = true
				}
			}
			alert(`Thank you for signing-in ${userNameCheck}!`)
		}
	}
	else{
		alert(`Ok. Maybe later.`)
	}
				
}
	


const checkUserAccess = () =>{
while (accessGranted !== User.userRegistered) {
	let accessGranted = 0
	if (User.userRegistered === true && User.userSignedIn===true){
	 accessGranted= userAccess
	}else if (User.userRegistered === true && User.userSignedIn === false){
		signIn()
	} else{
		registerUser()
	}

}
}






const postComment =() => {
checkUserAccess()
let userComment = prompt("Write your comment:?")
console.log(userComment)
}



const articleRating = (userRating)=> {
checkUserAccess() 
while(isNaN(userRating) && userRating > 5 && userRating < 1) {
	alert("Please enter a valid number")
	articleStars= parseInt(prompt("Please select a number of stars between 1-5"))
}
return articleStars

}








registerUser()

userSignIn()

postComment()

articleRating()



class Ingredient{
	constructor(name, gram, cup, ml){
		this.name = name.toLowerCase();
		this.gram = parseFloat(gram);
		this.cup = parseFloat(cup);
		this.ml= cup*240
		
	}
	
}

const  ingredients = []

ingredients.push(new Ingredient("Coconut milk",241, 1.000)) ;
ingredients.push(new Ingredient("Dried milk",28, 0.250)) ;
ingredients.push(new Ingredient("Milk vaporated",113, 0.500)) ;
ingredients.push(new Ingredient("Milk",227, 1.000)) ;
ingredients.push(new Ingredient("Milk condensed",78, 0.250)) ;
ingredients.push(new Ingredient("Yogurt",227, 1.000)) ;
ingredients.push(new Ingredient("Baking powder",4, 0.021)) ;
ingredients.push(new Ingredient("Baking soda",3, 0.010)) ;
ingredients.push(new Ingredient("Butter",113, 0.483)) ;
ingredients.push(new Ingredient("Buttermilk",227, 1.000)) ;
ingredients.push(new Ingredient("Peanut butter",135, 0.500)) ;
ingredients.push(new Ingredient("Coconut oil",113, 0.500)) ;
ingredients.push(new Ingredient("Olive oil",50, 0.250)) ;
ingredients.push(new Ingredient("Vegetable oil",198, 1.000)) ;
ingredients.push(new Ingredient("All-Purpose Flour",120, 1.000)) ;
ingredients.push(new Ingredient("Almond Flour",96, 1.000)) ;
ingredients.push(new Ingredient("Soy flour",35, 0.250)) ;
ingredients.push(new Ingredient("Whole Grain Flour",113, 1.000)) ;
ingredients.push(new Ingredient("Water",227, 1.000)) ;
ingredients.push(new Ingredient("Egg",50, 0.210)) ;
ingredients.push(new Ingredient("Egg whites ",35, 0.121)) ;
ingredients.push(new Ingredient("Egg yolk",14, 0.080)) ;
ingredients.push(new Ingredient("Brown sugar",213, 1.000)) ;
ingredients.push(new Ingredient("Powdered Sugar",227, 2.000)) ;
ingredients.push(new Ingredient("Sugar",198, 1.000)) ;
ingredients.push(new Ingredient("Instant Yeast",6, 0.042)) ;
ingredients.push(new Ingredient("Heavy Cream",227, 1.000)) ;
ingredients.push(new Ingredient("Cream cheese",227, 1.000)) ;
ingredients.push(new Ingredient("Cream of coconut",142, 0.500)) ;
ingredients.push(new Ingredient("Sour cream",227, 1.000)) ;
ingredients.push(new Ingredient("Honey",21, 0.060)) ;

function ingredientsConversTool(){

	const litreToMl =[1000,"l"] ;
	const liquidOzToMl = [30, "liquid oz"];
	const mlToMl = [1, "ml"];
	const pintToMl=[480, "pint"] ;
	const tbsToMl= [14.8, "tbsp"];
	const tspToMl =[5, "tsp"] ;
	const quartToML = [946.353, "quart"];
	const gallonToML =[3785.41, "gallon"] ;
	const cupToMl = [240, "cup"];
	const grToGr = [1, "gr"];
	const kgToGr = [1000, "kg"];
	const lbToGr =[480, "lb"] ;
	const ozToGr = [30, "oz"];
	let firstUnit= 0
	let secondUnit=0

	const volumeUnits = [litreToMl, liquidOzToMl, mlToMl, pintToMl, tbsToMl, tspToMl,quartToML, gallonToML,cupToMl ]
	const weightUnits = [grToGr,kgToGr,lbToGr,ozToGr]
	const allUnits = volumeUnits.concat(weightUnits)
	const volumeLabels = volumeUnits.map(unit => unit[1])
	const weightLabels =  weightUnits.map(unit => unit[1])
	const unitLabels = volumeLabels.concat(weightLabels)
	const ingredientsList = ingredients.map(e =>  e.name)

	let ingredient ="text"
	let ingredientToConvert ="text"
	ingredient = prompt("Please enter the name of the  ingredient you want to convert")
	ingredientToConvert = ingredient.toLowerCase()
	while((ingredients.find((el) => el.name === ingredientToConvert)) === undefined){
		
		alert(`This is the list of ingredients we have available : ${ingredientsList }`)
		
		ingredient = prompt("Please enter the name of the ingredient you want to convert")
		ingredientToConvert = ingredient.toLowerCase()
	}

	let quantity = prompt("Please enter the amount you want to convert in numbers, you can use decimals (.)")

	while (isNaN(quantity)) {
		alert("I'm sorry. You need to enter a valid number")
		quantity = prompt("Please enter the amount you want to convert in numbers, you can use decimals (.)")
	}

	let amount = parseFloat(quantity)
	let unit1 = prompt (`Please enter the unit you want to convert from: ${unitLabels}`)
	let unit2 = prompt (`Please enter the unit you want to convert to: ${unitLabels}`)
	// el mismo problema de some puedes tratar de cambiarlo por find o includes
	while((unitLabels.find((unit)=> unit === unit1))===undefined || (unitLabels.find((unit)=> unit === unit2))=== undefined ){
		alert("Please enter valid mesurements to continue")
		unit1 = prompt (`Please enter the unit you want to convert from: ${unitLabels}`)
		unit2 = prompt (`Please enter the unit you want to convert to: ${unitLabels}`)
	}

	const answers = ingredients.filter((el) => el.name.includes(ingredient));

 	console.log (answers)
 	firstUnit = allUnits.find((el) => el[1] === unit1)
	secondUnit = allUnits.find((el) => el[1] === unit2)
	console.log(firstUnit)
	console.log(secondUnit[0])


	if (volumeUnits.some((el) => el[1] === unit1) && volumeUnits.some((el) => el[1] === unit2)||weightUnits.some((el) => el[1] === unit1) && weightUnits.some((el) => el[1] === unit2)){
		answers.forEach((answer) => {
			let result = amount*firstUnit[0]/secondUnit[0]
			alert(`${amount}${unit1} of ${answer.name} equals to ${result}${unit2}\n`)
		})}else if ( weightUnits.some((el) => el[1] === unit1) && volumeUnits.some((el) => el[1] === unit2)){
			answers.forEach((answer) =>{
				let result = amount* answer.ml*firstUnit[0]/answer.gram *secondUnit[0]
				alert(`${amount}${unit1} of ${answer.name} equals to ${result}${unit2} \n`)
			})}else{
				answers.forEach((answer) =>{
					let result = amount* answer.gram * firstUnit[0]/answer.ml * secondUnit[0]
					alert(`${amount}${unit1} of ${answer.name} equals to ${result} ${unit2} \n`)
				})}


}

ingredientsConversTool()
