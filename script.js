let val = '', percent = '', elementPizza = '', elementToppings = '';

document.querySelectorAll(".slider").forEach((currentValue, index, arr)=> {

    rangeSliderProgress(arr[index], val, percent);

    arr[index].oninput = function(){
        
        rangeSliderProgress(this, val, percent);
        
        elementPizza = document.querySelector(".pizza ." + this.dataset.pizzalayer);
        
        let img = elementPizza.querySelector("img");

        let imgArray = img.src.split("/");

        let imgNumber = imgArray[imgArray.length - 1].split(".")[0];

        img.src = img.src.replace(imgNumber,this.value);


        elementToppings = document.querySelector("." + this.dataset.pizzalayer + "-toppings");

        elementToppings.querySelector(".total").innerText = this.value;
    }
});

function rangeSliderProgress(thisClass, val, percent){

    val = (thisClass.value - thisClass.getAttribute("min")) / (thisClass.getAttribute("max") - thisClass.getAttribute("min"));
    percent = val * 100;
    
    thisClass.style.cssText = "background-image: -webkit-gradient(linear, left top, right top, " +
                            "color-stop(" + percent + "%, #df7164), " +
                            "color-stop(" + percent + "%, #f5D0CC)); " + 
                            
                            "background-image: -moz-linear-gradient(left center, #df7164 0% " + percent + "%, #F5D0CC " + percent + "%, #F5D0CC 100%)";
}

document.querySelectorAll(".checkbox").forEach((currentValue, index, arr) => {

    arr[index].onchange = function(){

        elementPizza = document.querySelector(".pizza ." + this.value);
        elementToppings = document.querySelector("." + this.value + "-toppings");

        if(this.checked){
          
            elementPizza.classList.remove("hide");

            try{
                elementToppings.classList.remove("hide");
            }catch(e){}
          
        }else{
            elementPizza.classList.add("hide");
            try{
                elementToppings.classList.add("hide");
            }catch(e){}
        }

    }

});

