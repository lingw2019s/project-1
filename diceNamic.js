
//add h1: Roll Number
h1 = document.createElement('h1');
text = document.createTextNode('Roll Number');
h1.appendChild(text);
document.querySelector('div').appendChild(h1);

//Add Two dice images
//Pick a random dice number out of [1...6]
let ranNum = () => Math.floor(Math.random() * 6 ) + 1;

let die1 = ranNum();
let die2 = ranNum();
console.log(die1, die2);

//add first dice image
img1=document.createElement("img");
img1.src = `images/die${die1}.gif`;
document.querySelector('div').appendChild(img1);

img2=document.createElement("img");
img2.src = `images/die${die2}.gif`;
document.querySelector('div').appendChild(img2);

//add input label and input box
p = document.createElement('p')
textEnter = document.createTextNode("Enter target number: ")
p.appendChild(textEnter);
//p.innerHTML +="<br>"
document.querySelector('div').appendChild(p);
targetNum = document.createElement('input');
targetNum.type = 'text';
p.appendChild(targetNum)

//p.innerHTML +="<br>"


function rollTarget(){
  let target = Number(document.getElementsByTagName('input')[0].value);
  //validate the input number:
  if ((target <2 || target >12) ||isNaN(target)){
    alert("invalid target number!");
  }
  else {
    let rollCount = 0;
    let d1 = 0;
    let d2 = 0;
    document.querySelectorAll('div')[2].innerHTML = '';
    do{
      d1 = ranNum()
      d2 = ranNum()
      console.log(d1, d2)
      let dieImg1 = document.createElement("img");
      let dieImg2 = document.createElement("img");
      dieImg1.src = `images/die${d1}.gif`;
      dieImg2.src = `images/die${d2}.gif`;
      document.querySelectorAll('div')[2].innerHTML += '<br>'
      document.querySelectorAll('div')[2].appendChild(dieImg1)
      document.querySelectorAll('div')[2].appendChild(dieImg2)
      rollCount++;
      console.log("the roll count is ", rollCount)
    } while(d1 + d2 != target);
  document.querySelectorAll('div')[1].innerHTML = "\n You hit your number in " + rollCount + " " + ((rollCount == 1) ? 'roll' : 'rolls' ) + "!";
  };
};


//add click button and event listener
btn = document.createElement("BUTTON")
btn.innerHTML = "Roll 'em!"
document.querySelectorAll('div')[0].appendChild(btn)
document.querySelector('BUTTON').addEventListener("click", rollTarget)
