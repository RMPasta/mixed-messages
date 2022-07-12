
const feeling = ['relaxed', 'chill', 'stressed', 'overwhelmed', 'ecstatic', 'numb', 'joyous', 'comfortable', 'anxious', 'impatient', 'like everyone is out to get you', 'existential dread'];

const modifier = ['a lot of ', 'less ', 'more ', 'massive amounts of ', 'an extreme lack of '];

const thing = ['money', 'love', 'frinedship', 'passion', 'respect', 'surprises', 'injuries', 'health', 'prosperity', 'resolve'];

const happens = ['a giant bird', 'an old friend', 'your next lover', 'a job opportunity', 'an enemy', 'imminent danger', 'catacalismic disaster', 'a sense of invincibility', 'a supernatural event', 'a paranormal happening', 'your wildest desires'];
//random options above
//function logs random index of options array... one for each array

//random feeling
function randFeeling() {
    let randIndex = Math.floor(Math.random() * feeling.length);
    return feeling[randIndex];
}


//random modifier
function randModifier() {
    let randIndex = Math.floor(Math.random() * modifier.length);
    return modifier[randIndex];
}


//random thing
function randThing() {
    let randIndex = Math.floor(Math.random() * thing.length);
    return thing[randIndex];
}


//random event
function randHappens() {
    let randIndex = Math.floor(Math.random() * happens.length);
    return happens[randIndex];
}


console.log('Hello Human, today you will feel ' + randFeeling() + '. You should expect ' + randModifier() + randThing() + ' and you might even run into ' + randHappens() + '. Come back tomorrow morning for another prediction about your day. :)')