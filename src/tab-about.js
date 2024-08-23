import foodSrc from "../img/food.png";
const tab_about = () => {
    rightPart.innerText = '';
    const foodImg = document.createElement('img');
    const description = document.createElement('p');
    const description2 = document.createElement('p');
    foodImg.src = foodSrc;
    description.innerText ="The founder of Crab's Restaurant, Chef Han was once a traveler, braving all  kinds of hardships in search of a land warmed by the sun."
    description2.innerText ="Every dish is meticulously prepared by Chef Han, and every customer is treated like family at Crab’s Restaurant."
    rightPart.append(foodImg);
    rightPart.append(description);
    rightPart.append(description2);
};

export {tab_about};