let rightImage = document.getElementById("img-1");
let middleImage = document.getElementById("img-2");
let leftImage = document.getElementById("img-3");

let rightCard = document.getElementById("card-1");
let middleCard = document.getElementById("card-2");
let leftCard = document.getElementById("card-3");


const rightCardClickedHandler = (e) => {
  
  leftImage.removeEventListener("click", leftCardClickedHandler);
  rightImage.removeEventListener("click", rightCardClickedHandler);
  
  rightCard.className = "card middleCard";
  
  rightCard.children.item(0).className = "header";
  rightCard.children.item(1).className = "description";
  
  middleCard.className = "card hiddenCard leftCard";
  
  middleCard.children.item(0).className = "hiddenHeader";
  middleCard.children.item(1).className = "hiddenDescription";
  
  leftCard.className = "card hiddenCard rightCard";
  
  leftCard.children.item(0).className = "hiddenHeader";
  leftCard.children.item(1).className = "hiddenDescription";
  
  const tmp = rightCard;
  rightCard = leftCard;
  leftCard = middleCard;
  middleCard = tmp;

  const tmp1 = rightImage;
  rightImage = leftImage;
  leftImage = middleImage;
  middleImage = tmp1;
  
  leftImage.addEventListener("click", leftCardClickedHandler);
  rightImage.addEventListener("click", rightCardClickedHandler);
};


const leftCardClickedHandler = (e) => {

  leftImage.removeEventListener("click", leftCardClickedHandler);
  rightImage.removeEventListener("click", rightCardClickedHandler);
  
  rightCard.className = "card hiddenCard leftCard";
  
  rightCard.children.item(0).className = "hiddenHeader";
  rightCard.children.item(1).className = "hiddenDescription";
  
  middleCard.className = "card hiddenCard rightCard";
  
  middleCard.children.item(0).className = "hiddenHeader";
  middleCard.children.item(1).className = "hiddenDescription";
  
  leftCard.className = "card middleCard";
  
  leftCard.children.item(0).className = "header";
  leftCard.children.item(1).className = "description";
  
  const tmp = leftCard;
  leftCard = rightCard;
  rightCard = middleCard;
  middleCard = tmp;
  
  const tmp1 = leftImage;
  leftImage = rightImage;
  rightImage = middleImage;
  middleImage = tmp1;
  
  leftImage.addEventListener("click", leftCardClickedHandler);
  rightImage.addEventListener("click", rightCardClickedHandler);
};

rightImage.addEventListener("click", rightCardClickedHandler);
leftImage.addEventListener("click", leftCardClickedHandler);
