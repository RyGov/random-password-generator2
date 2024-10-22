const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const passwordLength = 15;



let passwordElement1 = document.getElementById("password-display1")
let passwordElement2 = document.getElementById("password-display2")


function genPassword() {
  let password1 = ""
  let password2 = ""
   for (let i = 0; i < passwordLength; i++) {
      let random1 = Math.floor(Math.random()* characters.length)
      let random2 = Math.floor(Math.random()* characters.length)
      password1 += characters[random1]
      password2 += characters[random2]
      passwordElement1.textContent = password1
      passwordElement2.textContent = password2
   }
}
  
