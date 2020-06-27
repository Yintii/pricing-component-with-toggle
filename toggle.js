const boggle = document.getElementById("boggle");
const monthPrices = document.getElementsByClassName("monthPrice");
const annualPrices = document.getElementsByClassName("annualPrice");


function togglePrices(){
    for(let i = 0; i < 3; i++)
    //if months price is hidden
        if(monthPrices[i].classList.contains("hidden")){

            //fade out current annual price
            annualPrices[i].classList.remove("fadeIn")
            annualPrices[i].classList.add("fadeOut");
            
            //set it to hidden
            annualPrices[i].classList.add("hidden");

            //remove the hidden class from months price
            monthPrices[i].classList.remove("hidden");

            //make it fade in
            monthPrices[i].classList.remove("fadeOut");
            monthPrices[i].classList.add("fadeIn");

            //toggle the boggle
            boggle.classList.remove("untoggled");
            boggle.classList.add("toggled");

        }else{
            //when that's not the case, it's already toggled, so:
            
            //fade out the month pricing
            monthPrices[i].classList.remove("fadeIn");
            monthPrices[i].classList.add("fadeOut");

            //set it to hide
            monthPrices[i].classList.add("hidden");

            //remove annunal hidden class
            annualPrices[i].classList.remove("hidden");

            //remove the fade in class when we fade out
            annualPrices[i].classList.add("fadeIn");
            annualPrices[i].classList.remove("fadeOut");


            boggle.classList.remove("toggled");
            boggle.classList.add("untoggled");
        }
}