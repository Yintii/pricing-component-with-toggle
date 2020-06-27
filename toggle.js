const boggle = document.getElementById("boggle");
const monthPrices = document.getElementsByClassName("monthPrice");
const annualPrices = document.getElementsByClassName("annualPrice");

function togglePrices(){
    for(let i = 0; i < 3; i++)
        if(monthPrices[i].classList.contains("hidden")){
            monthPrices[i].classList.remove("hidden");
            annualPrices[i].classList.add("hidden");
            boggle.classList.remove("untoggled");
            boggle.classList.add("toggled");
        }else{
            annualPrices[i].classList.remove("hidden");
            monthPrices[i].classList.add("hidden");
            boggle.classList.remove("toggled");
            boggle.classList.add("untoggled");
        }
}