'use strict';

let rl = require('readline-sync');
let Hangman = require('./Hangman.js');
let QuitGame = require('./QuitGame.js');

function menuOptions() {
    console.log();

    console.log(`Enter a number 0-2: `);
    console.log('0 = Quit Game');
    console.log('1 = Play game');
    console.log('2 = View high scores');

    let input = rl.question('What would you like to do? ');
    if (input === '1') {
        Hangman.start();
        return menuOptions();
    } else if (input === '2') {
        console.log('TODO: Implement high score list');
    } else if (input === '0') {
        let quit = QuitGame();
        if (quit === false) {
            menuOptions();
        } else {
            console.log(quit);
        }
    } else {
        console.log('Wrong input');
        menuOptions();
    }
}

module.exports = menuOptions;