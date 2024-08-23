import foodSrc from "../img/food.png";
const tab_menu = () => {
    rightPart.innerText = '';
    const foodImg = document.createElement('img');
    const description = document.createElement('p');
    foodImg.src = foodSrc;
    description.innerText ="Breakfast: Sunny Breakfast Combo (Scrambled Eggs, Bacon, Toast, Soup)";
    rightPart.append(foodImg);
    rightPart.append(description);
};

export { tab_menu };