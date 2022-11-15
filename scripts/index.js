
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
		this.gram = parseToFloat(this.gram);
		this.cup = parseToFloat(this.cups);
		this.ml = this.cup*240;
		
	}
	
}


function ingredientsConversTool(ingredient, unit1, unit2, quantity ){
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

const volumeUnits = [litreToMl, liquidOzToMl, mlToMl, pintToMl, tbsToMl, tspToMl,quartToML, gallonToML,cupToMl ]
const weightUnits = [grToGr,kgToGr,lbToGr,ozToGr]

let amount = parseToFloat(quantity)

const  ingredients = []

ingredients.push(new Ingredient("00 Flour", "116" ,"1.000")) ;
ingredients.push(new Ingredient("Agave syrup", "84" ,"0.250" )) ;
ingredients.push(new Ingredient("All-Purpose Flour", "120" ,"1.000" )) ;
ingredients.push(new Ingredient("Almond Flour", "96" ,"1.000" )) ;
ingredients.push(new Ingredient("Almond meal", "84" ,"1.000" )) ;
ingredients.push(new Ingredient("Almond paste (packed)", "259" ,"1.000" )) ;
ingredients.push(new Ingredient("Almonds (sliced)", "43" ,"0.500" )) ;
ingredients.push(new Ingredient("Almonds (slivered)", "57" ,"0.500" )) ;
ingredients.push(new Ingredient("Almonds, whole (unblanched)", "142" ,"1.000" )) ;
ingredients.push(new Ingredient("Amaranth flour", "103" ,"1.000" )) ;
ingredients.push(new Ingredient("Apple juice concentrate", "70" ,"0.250" )) ;
ingredients.push(new Ingredient("Apples (dried, diced)", "85" ,"1.000" )) ;
ingredients.push(new Ingredient("Apples (peeled, sliced)", "113" ,"1.000" )) ;
ingredients.push(new Ingredient("Applesauce", "255" ,"1.000" )) ;
ingredients.push(new Ingredient("Apricots (dried, diced)", "64" ,"0.500" )) ;
ingredients.push(new Ingredient("Artisan Bread Flour", "120" ,"1.000" )) ;
ingredients.push(new Ingredient("Artisan Bread Topping", "43" ,"0.250" )) ;
ingredients.push(new Ingredient("Baker's Cinnamon Filling", "152" ,"1.000" )) ;
ingredients.push(new Ingredient("Baker's Fruit Blend", "128" ,"1.000" )) ;
ingredients.push(new Ingredient("Baker's Special Sugar (superfine sugar, castor sugar)", "190" ,"1.000" )) ;
ingredients.push(new Ingredient("Baking powder", "4" ,"0.021" )) ;
ingredients.push(new Ingredient("Baking soda", "3" ,"0.010" )) ;
ingredients.push(new Ingredient("Baking Sugar Alternative", "170" ,"1.000" )) ;
ingredients.push(new Ingredient("Bananas (mashed)", "227" ,"1.000" )) ;
ingredients.push(new Ingredient("Barley (cooked)", "215" ,"1.000" )) ;
ingredients.push(new Ingredient("Barley (pearled)", "213" ,"1.000" )) ;
ingredients.push(new Ingredient("Barley flakes", "46" ,"0.500" )) ;
ingredients.push(new Ingredient("Barley flour", "85" ,"1.000" )) ;
ingredients.push(new Ingredient("Barley malt syrup", "42" ,"0.121" )) ;
ingredients.push(new Ingredient("Basil pesto", "28" ,"0.121" )) ;
ingredients.push(new Ingredient("Bell peppers (fresh)", "142" ,"1.000" )) ;
ingredients.push(new Ingredient("Berries (frozen)", "142" ,"1.000" )) ;
ingredients.push(new Ingredient("Better Cheddar Cheese Powder", "57" ,"0.500" )) ;
ingredients.push(new Ingredient("Blueberries (dried)", "156" ,"1.000" )) ;
ingredients.push(new Ingredient("Blueberries (fresh or frozen)", "140 to 170" ,"1.000" )) ;
ingredients.push(new Ingredient("Blueberry juice", "241" ,"1.000" )) ;
ingredients.push(new Ingredient("Boiled cider", "85" ,"0.250" )) ;
ingredients.push(new Ingredient("Bran cereal", "60" ,"1.000" )) ;
ingredients.push(new Ingredient("Bread crumbs (dried)", "28" ,"0.250" )) ;
ingredients.push(new Ingredient("Bread crumbs (fresh)", "21" ,"0.250" )) ;
ingredients.push(new Ingredient("Bread crumbs (Japanese Panko)", "50" ,"1.000" )) ;
ingredients.push(new Ingredient("Bread Flour", "120" ,"1.000" )) ;
ingredients.push(new Ingredient("Brown rice (cooked)", "170" ,"1.000" )) ;
ingredients.push(new Ingredient("Brown rice flour", "128" ,"1.000" )) ;
ingredients.push(new Ingredient("Brown sugar (dark or light, packed)", "213" ,"1.000" )) ;
ingredients.push(new Ingredient("Buckwheat (whole)", "170" ,"1.000" )) ;
ingredients.push(new Ingredient("Buckwheat Flour", "120" ,"1.000" )) ;
ingredients.push(new Ingredient("Bulgur", "152" ,"1.000" )) ;
ingredients.push(new Ingredient("Butter", "113" ,"0.483" )) ;
ingredients.push(new Ingredient("Buttermilk", "227" ,"1.000" )) ;
ingredients.push(new Ingredient("Buttermilk powder", "18" ,"0.121" )) ;
ingredients.push(new Ingredient("Cacao nibs", "120" ,"1.000" )) ;
ingredients.push(new Ingredient("Cake Enhancer", "14" ,"0.121" )) ;
ingredients.push(new Ingredient("Candied peel", "85" ,"0.500" )) ;
ingredients.push(new Ingredient("Caramel", "142" ,"0.500" )) ;
ingredients.push(new Ingredient("Caramel bits (chopped Heath or toffee)", "156" ,"1.000" )) ;
ingredients.push(new Ingredient("Caraway seeds", "18" ,"0.121" )) ;
ingredients.push(new Ingredient("Carrots (cooked and puréed)", "128" ,"0.500" )) ;
ingredients.push(new Ingredient("Carrots (diced)", "142" ,"1.000" )) ;
ingredients.push(new Ingredient("Carrots (grated)", "99" ,"1.000" )) ;
ingredients.push(new Ingredient("Cashews (chopped)", "113" ,"1.000" )) ;
ingredients.push(new Ingredient("Cashews (whole)", "113" ,"1.000" )) ;
ingredients.push(new Ingredient("Celery (diced)", "142" ,"1.000" )) ;
ingredients.push(new Ingredient("Cheese (Feta)", "57" ,"0.500" )) ;
ingredients.push(new Ingredient("Cheese (grated cheddar, jack, mozzarella, or Swiss)", "113" ,"1.000" )) ;
ingredients.push(new Ingredient("Cheese (grated Parmesan)", "50" ,"0.500" )) ;
ingredients.push(new Ingredient("Cheese (Ricotta)", "227" ,"1.000" )) ;
ingredients.push(new Ingredient("Cherries (candied)", "50" ,"0.250" )) ;
ingredients.push(new Ingredient("Cherries (dried)", "71" ,"0.500" )) ;
ingredients.push(new Ingredient("Cherries (fresh, pitted, chopped)", "80" ,"0.500" )) ;
ingredients.push(new Ingredient("Cherries (frozen)", "113" ,"1.000" )) ;
ingredients.push(new Ingredient("Cherry Concentrate", "42" ,"0.121" )) ;
ingredients.push(new Ingredient("Chickpea flour", "85" ,"1.000" )) ;
ingredients.push(new Ingredient("Chives (fresh)", "21" ,"0.500" )) ;
ingredients.push(new Ingredient("Chocolate (chopped)", "170" ,"1.000" )) ;
ingredients.push(new Ingredient("Chocolate Chips", "170" ,"1.000" )) ;
ingredients.push(new Ingredient("Chocolate Chunks", "170" ,"1.000" )) ;
ingredients.push(new Ingredient("Cinnamon Sweet Bits", "140" ,"1.000" )) ;
ingredients.push(new Ingredient("Cinnamon-Sugar", "50" ,"0.250" )) ;
ingredients.push(new Ingredient("Cocoa (unsweetened)", "42" ,"0.500" )) ;
ingredients.push(new Ingredient("Coconut (sweetened, shredded)", "85" ,"1.000" )) ;
ingredients.push(new Ingredient("Coconut (toasted)", "85" ,"1.000" )) ;
ingredients.push(new Ingredient("Coconut (unsweetened, desiccated)", "85" ,"1.000" )) ;
ingredients.push(new Ingredient("Coconut (unsweetened, large flakes)", "60" ,"1.000" )) ;
ingredients.push(new Ingredient("Coconut (unsweetened, shredded)", "53" ,"1.000" )) ;
ingredients.push(new Ingredient("Coconut cream (unsweetened)", "284" ,"1.000" )) ;
ingredients.push(new Ingredient("Coconut Flour", "128" ,"1.000" )) ;
ingredients.push(new Ingredient("Coconut milk; canned, well shaken", "241" ,"1.000" )) ;
ingredients.push(new Ingredient("Coconut milk (evaporated)", "242" ,"1.000" )) ;
ingredients.push(new Ingredient("Coconut Milk Powder", "57" ,"0.500" )) ;
ingredients.push(new Ingredient("Coconut oil", "113" ,"0.500" )) ;
ingredients.push(new Ingredient("Coconut sugar", "77" ,"0.500" )) ;
ingredients.push(new Ingredient("Confectioners' sugar (unsifted)", "227" ,"2.000" )) ;
ingredients.push(new Ingredient("Cookie crumbs", "85" ,"1.000" )) ;
ingredients.push(new Ingredient("Corn (fresh or frozen)", "38" ,"0.250" )) ;
ingredients.push(new Ingredient("Corn (popped)", "21" ,"4.000" )) ;
ingredients.push(new Ingredient("Corn syrup", "312" ,"1.000" )) ;
ingredients.push(new Ingredient("Cornmeal (whole)", "138" ,"1.000" )) ;
ingredients.push(new Ingredient("Cornmeal (yellow, Quaker)", "156" ,"1.000" )) ;
ingredients.push(new Ingredient("Cornstarch", "28" ,"0.250" )) ;
ingredients.push(new Ingredient("Cracked wheat", "149" ,"1.000" )) ;
ingredients.push(new Ingredient("Cranberries (dried)", "57" ,"0.500" )) ;
ingredients.push(new Ingredient("Cranberries (fresh or frozen)", "99" ,"1.000" )) ;
ingredients.push(new Ingredient("Cream (heavy cream, light cream, or half & half)", "227" ,"1.000" )) ;
ingredients.push(new Ingredient("Cream cheese", "227" ,"1.000" )) ;
ingredients.push(new Ingredient("Cream of coconut", "142" ,"0.500" )) ;
ingredients.push(new Ingredient("Crème fraiche", "124" ,"0.500" )) ;
ingredients.push(new Ingredient("Crystallized ginger", "92" ,"0.500" )) ;
ingredients.push(new Ingredient("Currants", "142" ,"1.000" )) ;
ingredients.push(new Ingredient("Dates (chopped)", "149" ,"1.000" )) ;
ingredients.push(new Ingredient("Demerara sugar", "220" ,"1.000" )) ;
ingredients.push(new Ingredient("Dried Blueberry Powder", "28" ,"0.250" )) ;
ingredients.push(new Ingredient("Dried milk (Baker's Special Dry Milk)", "28" ,"0.250" )) ;
ingredients.push(new Ingredient("Dried nonfat milk (powdered)", "28" ,"0.250" )) ;
ingredients.push(new Ingredient("Dried potato flakes (instant mashed potatoes)", "43" ,"0.500" )) ;
ingredients.push(new Ingredient("Dried whole milk (powdered)", "50" ,"0.500" )) ;
ingredients.push(new Ingredient("Durum Flour", "124" ,"1.000" )) ;
ingredients.push(new Ingredient("Easy Roll Dough Improver", "18" ,"0.121" )) ;
ingredients.push(new Ingredient("Egg (fresh)", "50" ,"0.210" )) ;
ingredients.push(new Ingredient("Egg white (fresh)", "35" ,"0.120" )) ;
ingredients.push(new Ingredient("Egg whites (dried)", "11" ,"0.121" )) ;
ingredients.push(new Ingredient("Egg yolk (fresh)", "14" ,"0.080" )) ;
ingredients.push(new Ingredient("Espresso Powder", "7" ,"0.060" )) ;
ingredients.push(new Ingredient("Everything Bagel Topping", "35" ,"0.250" )) ;
ingredients.push(new Ingredient("Figs (dried, chopped)", "149" ,"1.000" )) ;
ingredients.push(new Ingredient("First Clear Flour", "106" ,"1.000" )) ;
ingredients.push(new Ingredient("Flax meal", "50" ,"0.500" )) ;
ingredients.push(new Ingredient("Flaxseed", "35" ,"0.250" )) ;
ingredients.push(new Ingredient("French-Style Flour", "120" ,"1.000" )) ;
ingredients.push(new Ingredient("Fruitcake Fruit Blend", "120" ,"1.000" )) ;
ingredients.push(new Ingredient("Garlic (cloves, in skin for roasting)", "113" ,"0.480" )) ;
ingredients.push(new Ingredient("Garlic (minced)", "28" ,"0.121" )) ;
ingredients.push(new Ingredient("Garlic (peeled and sliced)", "149" ,"1.000" )) ;
ingredients.push(new Ingredient("Ghee", "44" ,"0.250" )) ;
ingredients.push(new Ingredient("Ginger (fresh, sliced)", "57" ,"0.250" )) ;
ingredients.push(new Ingredient("Gluten-Free '00' Pizza Flour", "100" ,"1.000" )) ;
ingredients.push(new Ingredient("Gluten-Free All-Purpose Baking Mix", "120" ,"1.000" )) ;
ingredients.push(new Ingredient("Gluten-Free All-Purpose Flour", "156" ,"1.000" )) ;
ingredients.push(new Ingredient("Gluten-Free Measure for Measure Flour", "120" ,"1.000" )) ;
ingredients.push(new Ingredient("Gluten-Free sourdough starter", "227 to 241" ,"1.000" )) ;
ingredients.push(new Ingredient("Glutinous rice flour", "120" ,"1.000" )) ;
ingredients.push(new Ingredient("Graham cracker crumbs (boxed)", "99" ,"1.000" )) ;
ingredients.push(new Ingredient("Graham crackers (crushed)", "142" ,"1.000" )) ;
ingredients.push(new Ingredient("Granola", "113" ,"1.000" )) ;
ingredients.push(new Ingredient("Grape Nuts", "57" ,"0.500" )) ;
ingredients.push(new Ingredient("Harvest Grains Blend", "74" ,"0.500" )) ;
ingredients.push(new Ingredient("Hazelnut flour", "89" ,"1.000" )) ;
ingredients.push(new Ingredient("Hazelnut Praline Paste", "156" ,"0.500" )) ;
ingredients.push(new Ingredient("Hazelnut spread", "160" ,"0.500" )) ;
ingredients.push(new Ingredient("Hazelnuts (whole)", "142" ,"1.000" )) ;
ingredients.push(new Ingredient("Hi-Maize Natural Fiber", "32" ,"0.250" )) ;
ingredients.push(new Ingredient("High-Gluten Flour", "120" ,"1.000" )) ;
ingredients.push(new Ingredient("Honey", "21" ,"0.060" )) ;
ingredients.push(new Ingredient("Instant ClearJel", "11" ,"0.060" )) ;
ingredients.push(new Ingredient("Irish-Style Flour", "110" ,"1.000" )) ;
ingredients.push(new Ingredient("Italian-Style Flour", "106" ,"1.000" )) ;
ingredients.push(new Ingredient("Jam or preserves", "85" ,"0.250" )) ;
ingredients.push(new Ingredient("Jammy Bits", "184" ,"1.000" )) ;
ingredients.push(new Ingredient("Keto Wheat Flour", "120" ,"1.000" )) ;
ingredients.push(new Ingredient("Keto Wheat Pizza Crust Mix", "110" ,"1.000" )) ;
ingredients.push(new Ingredient("Key Lime Juice", "227" ,"1.000" )) ;
ingredients.push(new Ingredient("Lard", "113" ,"0.500" )) ;
ingredients.push(new Ingredient("Leeks (diced)", "92" ,"1.000" )) ;
ingredients.push(new Ingredient("Lemon juice", "14" ,"0.060" )) ;
ingredients.push(new Ingredient("Lemon Juice Powder", "18" ,"0.121" )) ;
ingredients.push(new Ingredient("Lime Juice Powder", "18" ,"0.121" )) ;
ingredients.push(new Ingredient("Macadamia nuts (whole)", "149" ,"1.000" )) ;
ingredients.push(new Ingredient("Malt syrup", "43" ,"0.121" )) ;
ingredients.push(new Ingredient("Malted Milk Powder", "35" ,"0.250" )) ;
ingredients.push(new Ingredient("Malted Wheat Flakes", "64" ,"0.500" )) ;
ingredients.push(new Ingredient("Maple sugar", "78" ,"0.500" )) ;
ingredients.push(new Ingredient("Maple syrup", "156" ,"0.500" )) ;
ingredients.push(new Ingredient("Marshmallow spread, homemade", "72" ,"1.000" )) ;
ingredients.push(new Ingredient("Marshmallow spread, store-bought", "123" ,"1.000" )) ;
ingredients.push(new Ingredient("Marshmallow Fluff®", "128" ,"1.000" )) ;
ingredients.push(new Ingredient("Marshmallows (mini)", "43" ,"1.000" )) ;
ingredients.push(new Ingredient("Marzipan", "290" ,"1.000" )) ;
ingredients.push(new Ingredient("Masa Harina", "93" ,"1.000" )) ;
ingredients.push(new Ingredient("Mascarpone cheese", "227" ,"1.000" )) ;
ingredients.push(new Ingredient("Mashed potatoes", "213" ,"1.000" )) ;
ingredients.push(new Ingredient("Mashed sweet potatoes", "240" ,"1.000" )) ;
ingredients.push(new Ingredient("Mayonnaise", "113" ,"0.500" )) ;
ingredients.push(new Ingredient("Medium Rye Flour", "106" ,"1.000" )) ;
ingredients.push(new Ingredient("Meringue powder", "43" ,"0.250" )) ;
ingredients.push(new Ingredient("Milk (evaporated)", "113" ,"0.500" )) ;
ingredients.push(new Ingredient("Milk (fresh)", "227" ,"1.000" )) ;
ingredients.push(new Ingredient("Millet (whole)", "103" ,"0.500" )) ;
ingredients.push(new Ingredient("Mini chocolate chips", "177" ,"1.000" )) ;
ingredients.push(new Ingredient("Molasses", "85" ,"0.250" )) ;
ingredients.push(new Ingredient("Mushrooms (sliced)", "78" ,"1.000" )) ;
ingredients.push(new Ingredient("Non-Diastatic Malt Powder", "18" ,"0.121" )) ;
ingredients.push(new Ingredient("Oat bran", "53" ,"0.500" )) ;
ingredients.push(new Ingredient("Oat flour", "92" ,"1.000" )) ;
ingredients.push(new Ingredient("Oats (old-fashioned or quick-cooking)", "89" ,"1.000" )) ;
ingredients.push(new Ingredient("Oats (prepared)", "147" ,"1.000" )) ;
ingredients.push(new Ingredient("Olive oil", "50" ,"0.250" )) ;
ingredients.push(new Ingredient("Olives (sliced)", "142" ,"1.000" )) ;
ingredients.push(new Ingredient("Onions (fresh, diced)", "142" ,"1.000" )) ;
ingredients.push(new Ingredient("Paleo Baking Flour", "104" ,"1.000" )) ;
ingredients.push(new Ingredient("Palm shortening", "45" ,"0.250" )) ;
ingredients.push(new Ingredient("Passion fruit purée", "60" ,"0.333" )) ;
ingredients.push(new Ingredient("Pasta Flour Blend", "145" ,"1.000" )) ;
ingredients.push(new Ingredient("Pastry Flour", "106" ,"1.000" )) ;
ingredients.push(new Ingredient("Pastry Flour Blend", "113" ,"1.000" )) ;
ingredients.push(new Ingredient("Peaches (peeled and diced)", "170" ,"1.000" )) ;
ingredients.push(new Ingredient("Peanut butter", "135" ,"0.500" )) ;
ingredients.push(new Ingredient("Peanuts (whole, shelled)", "142" ,"1.000" )) ;
ingredients.push(new Ingredient("Pears (peeled and diced)", "163" ,"1.000" )) ;
ingredients.push(new Ingredient("Pecan Meal", "80" ,"1.000" )) ;
ingredients.push(new Ingredient("Pecans (diced)", "57" ,"0.500" )) ;
ingredients.push(new Ingredient("Pie Filling Enhancer", "46" ,"0.250" )) ;
ingredients.push(new Ingredient("Pine nuts", "71" ,"0.500" )) ;
ingredients.push(new Ingredient("Pineapple (crushed, drained)", "256" ,"1.000" )) ;
ingredients.push(new Ingredient("Pineapple (dried)", "71" ,"0.500" )) ;
ingredients.push(new Ingredient("Pineapple (fresh or canned, diced)", "170" ,"1.000" )) ;
ingredients.push(new Ingredient("Pistachio nuts (shelled)", "60" ,"0.500" )) ;
ingredients.push(new Ingredient("Pistachio Paste", "78" ,"0.250" )) ;
ingredients.push(new Ingredient("Pizza Dough Flavor", "12" ,"0.121" )) ;
ingredients.push(new Ingredient("Pizza Flour Blend", "124" ,"1.000" )) ;
ingredients.push(new Ingredient("Pizza sauce", "57" ,"0.250" )) ;
ingredients.push(new Ingredient("Pizza Seasoning", "10" ,"0.121" )) ;
ingredients.push(new Ingredient("Polenta (coarse ground cornmeal)", "163" ,"1.000" )) ;
ingredients.push(new Ingredient("Poppy seeds", "18" ,"0.121" )) ;
ingredients.push(new Ingredient("Potato Flour", "46" ,"0.250" )) ;
ingredients.push(new Ingredient("Potato starch", "152" ,"1.000" )) ;
ingredients.push(new Ingredient("Pumpernickel Flour", "106" ,"1.000" )) ;
ingredients.push(new Ingredient("Pumpkin purée", "227" ,"1.000" )) ;
ingredients.push(new Ingredient("Quinoa (cooked)", "184" ,"1.000" )) ;
ingredients.push(new Ingredient("Quinoa (whole)", "177" ,"1.000" )) ;
ingredients.push(new Ingredient("Quinoa flour", "110" ,"1.000" )) ;
ingredients.push(new Ingredient("Raisins (loose)", "149" ,"1.000" )) ;
ingredients.push(new Ingredient("Raisins (packed)", "85" ,"0.500" )) ;
ingredients.push(new Ingredient("Raspberries (fresh)", "120" ,"1.000" )) ;
ingredients.push(new Ingredient("Rhubarb", "120" ,"1.000" )) ;
ingredients.push(new Ingredient("Rice (long grain, dry)", "99" ,"0.500" )) ;
ingredients.push(new Ingredient("Rice flour (white)", "142" ,"1.000" )) ;
ingredients.push(new Ingredient("Rice Krispies", "28" ,"1.000" )) ;
ingredients.push(new Ingredient("Rye Bread Improver", "14" ,"0.121" )) ;
ingredients.push(new Ingredient("Rye Chops", "120" ,"1.000" )) ;
ingredients.push(new Ingredient("Rye flakes", "124" ,"1.000" )) ;
ingredients.push(new Ingredient("Rye Flour Blend", "106" ,"1.000" )) ;
ingredients.push(new Ingredient("Salt (Kosher, Diamond Crystal)", "8" ,"0.060" )) ;
ingredients.push(new Ingredient("Salt (Kosher, Morton's)", "16" ,"0.060" )) ;
ingredients.push(new Ingredient("Salt (table)", "18" ,"0.060" )) ;
ingredients.push(new Ingredient("Scallions (sliced)", "64" ,"1.000" )) ;
ingredients.push(new Ingredient("Self-Rising Flour", "113" ,"1.000" )) ;
ingredients.push(new Ingredient("Semolina Flour", "163" ,"1.000" )) ;
ingredients.push(new Ingredient("Sesame seeds", "71" ,"0.500" )) ;
ingredients.push(new Ingredient("Snow White Non-Melting Topping Sugar", "57" ,"0.500" )) ;
ingredients.push(new Ingredient("Sorghum flour", "138" ,"1.000" )) ;
ingredients.push(new Ingredient("Sour cream", "227" ,"1.000" )) ;
ingredients.push(new Ingredient("Sourdough starter", "227 to 241" ,"1.000" )) ;
ingredients.push(new Ingredient("Soy flour", "35" ,"0.250" )) ;
ingredients.push(new Ingredient("Sparkling Sugar", "57" ,"0.250" )) ;
ingredients.push(new Ingredient("Spelt Flour", "99" ,"1.000" )) ;
ingredients.push(new Ingredient("Sprouted Wheat Flour", "113" ,"1.000" )) ;
ingredients.push(new Ingredient("Steel cut oats", "70" ,"0.500" )) ;
ingredients.push(new Ingredient("Sticky Bun Sugar", "99" ,"1.000" )) ;
ingredients.push(new Ingredient("Strawberries (fresh sliced)", "167" ,"1.000" )) ;
ingredients.push(new Ingredient("Sugar (granulated white)", "198" ,"1.000" )) ;
ingredients.push(new Ingredient("Sugar substitute (Splenda)", "25" ,"1.000" )) ;
ingredients.push(new Ingredient("Sundried tomatoes (dry pack)", "170" ,"1.000" )) ;
ingredients.push(new Ingredient("Sunflower seeds", "35" ,"0.250" )) ;
ingredients.push(new Ingredient("Super 10 Blend", "106" ,"1.000" )) ;
ingredients.push(new Ingredient("Sweet Ground Chocolate and Cocoa Blend", "28" ,"0.250" )) ;
ingredients.push(new Ingredient("Sweetened condensed coconut milk", "288" ,"1.000" )) ;
ingredients.push(new Ingredient("Sweetened condensed milk", "78" ,"0.250" )) ;
ingredients.push(new Ingredient("Tahini paste", "128" ,"0.500" )) ;
ingredients.push(new Ingredient("Tapioca starch or flour", "113" ,"1.000" )) ;
ingredients.push(new Ingredient("Tapioca (quick cooking)", "21" ,"0.121" )) ;
ingredients.push(new Ingredient("Teff flour", "135" ,"1.000" )) ;
ingredients.push(new Ingredient("The Works Bread Topping", "35" ,"0.250" )) ;
ingredients.push(new Ingredient("Toasted Almond Flour", "96" ,"1.000" )) ;
ingredients.push(new Ingredient("Toffee chunks", "156" ,"1.000" )) ;
ingredients.push(new Ingredient("Tomato paste", "29" ,"0.121" )) ;
ingredients.push(new Ingredient("Tropical Fruit Blend", "128 to 142" ,"1.000" )) ;
ingredients.push(new Ingredient("Turbinado sugar (raw)", "180" ,"1.000" )) ;
ingredients.push(new Ingredient("Unbleached Cake Flour", "120" ,"1.000" )) ;
ingredients.push(new Ingredient("Vanilla Extract", "14" ,"0.060" )) ;
ingredients.push(new Ingredient("Vegetable oil", "198" ,"1.000" )) ;
ingredients.push(new Ingredient("Vegetable shortening", "46" ,"0.250" )) ;
ingredients.push(new Ingredient("Vital Wheat Gluten", "18" ,"0.121" )) ;
ingredients.push(new Ingredient("Walnuts (chopped)", "113" ,"1.000" )) ;
ingredients.push(new Ingredient("Walnuts (whole)", "64" ,"0.500" )) ;
ingredients.push(new Ingredient("Water", "227" ,"1.000" )) ;
ingredients.push(new Ingredient("Wheat berries (red)", "184" ,"1.000" )) ;
ingredients.push(new Ingredient("Wheat bran", "32" ,"0.500" )) ;
ingredients.push(new Ingredient("Wheat germ", "28" ,"0.250" )) ;
ingredients.push(new Ingredient("White Chocolate Chips", "170" ,"1.000" )) ;
ingredients.push(new Ingredient("White Rye Flour", "106" ,"1.000" )) ;
ingredients.push(new Ingredient("White Whole Wheat Flour", "113" ,"1.000" )) ;
ingredients.push(new Ingredient("Whole Grain Flour Blend", "113" ,"1.000" )) ;
ingredients.push(new Ingredient("Whole Wheat Flour (Premium 100%)", "113" ,"1.000" )) ;
ingredients.push(new Ingredient("Whole Wheat Pastry Flour / Graham Flour", "96" ,"1.000" )) ;
ingredients.push(new Ingredient("Yeast (instant)", "6" ,"0.042" )) ;
ingredients.push(new Ingredient("Yeast (instant)", "7" ,"0.050" )) ;
ingredients.push(new Ingredient("Yeast (instant)", "9" ,"0.060" )) ;
ingredients.push(new Ingredient("Yogurt", "227" ,"1.000" )) ;
ingredients.push(new Ingredient("Zucchini (shredded)", "121 to 150" ,"1.000" )) ;

const answers = ingredients.filter((el) => el.name.includes(ingredient));

const volumeConversions = () => {
	let firstUnit = volumeUnits.find((el) => el[1]=== unit1)
	let secondUnit = volumeUnits.find((el) => el[1]=== unit2)
	answers.forEach((answer) =>{
		let result = amount*firstUnit[0]/secondUnit[0]
		console.log(`${amount} of ${answer.name} is ${result}\n`)
	}) 	
}

const weightConversions = () => {
	let firstUnit = weightUnits.find((el) => el[1]=== unit1)
	let secondUnit = weightUnits.find((el) => el[1]=== unit2)
	answers.forEach((answer) =>{
		let result = amount*firstUnit[0]/secondUnit[0]
		console.log(`${amount} of ${answer.name} is ${result}\n`)
	}) 
	
}

const weightToVolume = () => {
	let firstUnit = weightUnits.find((el) => el[1]=== unit1)
	let secondUnit = volumeUnits.find((el) => el[1]=== unit2)

	answers.forEach((answer) =>{
		let result = amount* answer.cup *240*firstUnit[0]/answer.gram *secondUnit[0]
		console.log(`${amount} of ${answer.name} is ${result} \n`)
	})
}

const volumeToWeight = () => {
	let firstUnit = volumeUnits.find((el) => el[1]=== unit1)
	let secondUnit = weightUnits.find((el) => el[1]=== unit2)
	
	answers.forEach((answer) =>{
		let result = amount* answer.gram * firstUnit[0]/answer.cup *240 * secondUnit[0]
		console.log(`${amount} of ${answer.name} is ${result} \n`)
	})

	if (volumeUnits.some((el) => el[1] === unit1) && volumeUnits.some((el) => el[1] === unit2)){
		volumeConversions()
	}
	else if (weightUnits.some((el) => el[1] === unit1) && weightUnits.some((el) => el[1] === unit2)){
		weightConversions()
	}
	else if ( weightUnits.some((el) => el[1] === unit1) && volumeUnits.some((el) => el[1] === unit2)){
		weightToVolume()
	}
	else if(volumeUnits.some((el) => el[1] === unit1) && weightUnits.some((el) => el[1] === unit2)){
		volumeToWeight()
	}
	else{
		alert("you need to enter valid values, you are welcome to try again")
	}
}
}