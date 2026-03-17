let userHeight = document.querySelector(".height");
let userWeight = document.querySelector(".weight");
const count = document.querySelector(".count");
let output = document.querySelector(".output");

count.onclick = function () {
    let height = userHeight.value / 100;
    let weight = userWeight.value;
    let Num = weight/(height*height)
    let resault = Num.toFixed(1);
    
   console.log(resault)
    if (resault > 24) {
        output.innerHTML=`<p>您的BMI為${resault} 要減肥囉～</p>`
        console.log('你太胖了 要減肥')
        userWeight.value="";
        userHeight.value="";
    }
    else if ((resault <= 24)&&(resault>=18.5)) {
        console.log('你身材不錯喔，要保持')
        output.innerHTML=`<p>您的BMI為${resault} 身材保持得不錯喔～</p>`
        userWeight.value="";
        userHeight.value="";
    }

    else {
        console.log('太瘦了，要多吃點喔')
        output.innerHTML=`<p>您的BMI為${resault} 需要多吃一點喔!!</p>`
        userWeight.value="";
        userHeight.value="";
    }
    


}






