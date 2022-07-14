
const feeling = ['relaxed', 'chill', 'stressed', 'overwhelmed', 'ecstatic', 'numb', 'joyous', 'comfortable', 'anxious', 'impatient', 'like everyone is out to get you', 'existential dread', 'just fine', 'super hyped', 'thrilled'];

const modifier = ['a lot of ', 'less ', 'more ', 'massive amounts of ', 'an extreme lack of '];

const thing = ['money', 'love', 'friendship', 'passion', 'respect', 'surprises', 'injuries', 'health', 'prosperity', 'resolve', 'energy', 'water', 'food'];

const happens = ['a giant bird', 'an old friend', 'your next lover', 'a job opportunity', 'an enemy', 'imminent danger', 'catacalismic disaster', 'a sense of invincibility', 'a supernatural event', 'a paranormal event', 'your wildest desires', 'a crazy party'];
//random options above
//function logs random index of options array... one for each array

function rWord(words) {
    let randIndex = Math.floor(Math.random() * words.length);
    return words[randIndex];
}

function randMessage() {
writeMessage = document.write('<p style="padding: 2em 2em; color: darkblue; text-align: center; font-family: cursive; font-size: 1.4em; margin: 0 auto;">Hello Human, today you may feel ' + rWord(feeling) + '. You should expect ' + rWord(modifier) + rWord(thing) + ' and you might even happen upon ' + rWord(happens) + '. Come back tomorrow morning for another prediction about your day.</p>')
return writeMessage;
}

let button = document.getElementById('button')
button.addEventListener('click', event => {
    randMessage();
});
