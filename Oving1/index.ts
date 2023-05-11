const homeButton = document.getElementById('home-button');
const counterDisplay = document.getElementById(`counter`);

let counter = 1;

if (homeButton && counterDisplay){
    const homeButtonElement = homeButton as HTMLButtonElement;
    const counterDisplayEelement = counterDisplay as HTMLParagraphElement;
    
    
    homeButtonElement.addEventListener(`click` , () => {
        counter++
        counterDisplayEelement.textContent = counter.toString();
    })
}

const aboutButton = document.getElementById(`about-button`);
const hideDisplay = document.getElementById(`hide-me`);

if (aboutButton && hideDisplay){
    const aboutButtonElement = aboutButton as HTMLButtonElement;
    const hideDisplayElement = hideDisplay as HTMLParagraphElement;


    aboutButtonElement.addEventListener(`click`, () => {

        hideDisplayElement.hidden = !hideDisplayElement.hidden;
    })
}

const contactButton = document.getElementById(`contact-button`);
const item1 = document.getElementById(`item1`);
const item2 = document.getElementById(`item2`);
const item3 = document.getElementById(`item3`)

if (contactButton && item1 && item2 && item3){

    const contactButtonElement = contactButton as HTMLButtonElement;
    const item1Element = item1 as HTMLLIElement;
    const item2Element = item2 as HTMLLIElement;
    const item3Element = item3 as HTMLLIElement;
    
    contactButtonElement.addEventListener(`click`, () => {
        const array:Array<string> = randomArray(3, 2)
        item1Element.textContent = array[0];
        item2Element.textContent = array[1];
        item3Element.textContent = array[2];
    })
}

function randomArray(arraySize:number, stringLength: number){
    const randomArray:Array<string> = [];
    for(let i = 0; i < arraySize; i++){
        randomArray.push(getRandomString(stringLength));
    }
    return randomArray;
}


/**
 * Returns a randm string with a given length.
 * 
 * @param length the length of the string
 * @returns a random string
 */
function getRandomString(length: number){
    const characters = `HFJEBHDFASHDKJHUIOQWBX`
    let result = ``
    for (let i = 0; i <length; i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length -1))
    }

    return result;
}
