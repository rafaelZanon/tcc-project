import React from 'react';

const SourceQuestions = (props) => {

    const json = [
        { // fase 1
            question:'Traduza : * Hello * para o Inglês',
            resp: 'Olá',
            hasOptions: true,
            op1: "Olá",
            op2: "Tchau",
            op3: "Tudo bem?",
            op4: "Kitty",
            reqProgres:0
        } ,
        { // fase 2
            question:'Traduza: * Tudo bem? * para o Inglês',
            resp: 'Are you ok?',
            hasOptions: true,
            op1: "Im Fine",
            op2: "Are you ok?",
            op3: "Im Sad",
            op4: "Do you need a hug?",
            reqProgres:0

        },
        { // fase 3 
            question:'* Hello *,  Significa " Olá " em português',
            resp: 'True',
            hasOptions: true,
            op1:'True',
            op2:"False",
            reqProgres:0
        },
        { // fase 4 
            question:'Traduza: * Qual o seu nome? * para o Inglês',
            resp: 'Whats your name?',


            hasOptions: true,
            op1: "Whats your age?",
            op2: "How are you?",
            op3: "Are you married?",
            op4: "Whats your name?",
            reqProgres:10
        },
        { // fase 5
            question:'Traduza: * Qual a sua idade? * para o inglês',
            resp: 'Whats your age?',


            hasOptions: true,
            op1: "Whats your name?",
            op2: "How are you?",
            op3: "Im fine, and you?",
            op4: "Whats your age?",
            reqProgres:10
        }   ,
        { // fase 6
            question:'Complete a frase em Inglês: \n + A) ~ Hi, How are you? \n B) _______, Thanks. And you? ',
            resp: 'Im Fine',


            hasOptions: true,
            op1: "Im married",
            op2: "My name is",
            op3: "Im Fine",
            op4: "I have money",
            reqProgres:10
        }   ,
        { // fase 7
            question:'*I´m fine*, em Inglês significa:',
            resp: 'Estou bem',


            hasOptions: true,
            op1: "Estou mal",
            op2: "Meu nome é...",
            op3: "Estou bem",
            op4: "Obrigado",
            reqProgres:20
        }   ,
        {// 8 fase
            question:'*Casado*, em Inglês é:',
            resp: 'Married',


            hasOptions: true,
            op1: "Fine",
            op2: "Married",
            op3: "Thanks",
            op4: "Alone",
            reqProgres:20
        }   ,
        { // fase 9
            question:'* Família * em Inglês é:',
            resp: 'Family',


            hasOptions: true,
            op1: "Age",
            op2: "Fine",
            op3: "Family",
            op4: "Home",
            reqProgres:20
        }   ,
        { // fase 10
            question:'O que é * God * em Inglês:',
            resp: 'Deus',


            hasOptions: true,
            op1: "Deus",
            op2: "Mal",
            op3: "Bom",
            op4: "Bem",
            reqProgres:30
        }   ,
        { // fase 11 
            question:'* Estudo * em Inglês:',
            resp: 'Study',


            hasOptions: true,
            op1: "School",
            op2: "Study",
            op3: "Run",
            op4: "God",
            reqProgres:30
        }  ,
        { // fase 12
            question:'Escreva * Estou bem * em Inglês',
            resp: 'Im fine',

            hasOptions: false,
            reqProgres:30
        
        }   ,
        { // fase 13
            question:'Escreva * Idade * em Inglês',
            resp: 'Age',

            hasOptions: false,
            reqProgres:40
        }   ,   
        ,
        { // fase 14
            question:'Escreva * Família * em Inglês',
            resp: 'Family',

            hasOptions: false,
            reqProgres:40
        }   ,   
        { // fase 15
            question:'Complete a frase em Inglês: \n + A) How old are you? \n B) ___________, And you? ',
            resp: 'My age is 18,',


            hasOptions: true,
            op1: "My age is 18,",
            op2: "My Name is:",
            op3: "I will go to",
            op4: "Hello!",
            reqProgres:40
        }, 
        { // fase 16
            question:'O que significa * Computer * em Inglês?',
            resp: 'Computador',


            hasOptions: true,
            op1: "Video-game",
            op2: "Computador",
            op3: "Programação",
            op4: "Desenvolvedor",
            reqProgres:50
        }, 
        { // fase 17
            question:'O que significa * Monster * em Inglês?',
            resp: 'Monstro',


            hasOptions: true,
            op1: "Energético",
            op2: "Monstro",
            op3: "Pessoa",
            op4: "Feliz",
            reqProgres:50
        }, 
        { // fase 18
            question:'* Posso ir ao banheiro? *, Escreva em Inglês:',
            resp: 'Can I go to the bathroom?',


            hasOptions: false,
            reqProgres:50
        }, 
        { // fase 19
            question:'Como é * Banheiro * em Inglês:',
            resp: 'Bathroom',


            hasOptions: true,
            op1: "Room",
            op2: "Home",
            op3: "Bedroom",
            op4: "Bathroom",
            reqProgres:60
        }, 
        { // fase 20
            question:'O que é * Bathroom * em Inglês:',
            resp: 'Banheiro',


            hasOptions: true,
            op1: "Quarto",
            op2: "Casa",
            op3: "Banheiro",
            op4: "Cozinha",
            reqProgres:60
        }, 
        { // fase 21
            question:'* Café * em Inglês é ?',
            resp: 'Coffee',


            hasOptions: true,
            op1: "Tea",
            op2: "Coffee",
            op3: "Beer",
            op4: "Water",
            reqProgres:60
        }, 
        { // fase 22
            question:'* Eu quero beber um café * em Inglês é:',
            resp: 'I want to drink a coffee',


            hasOptions: true,
            op1: "I want to drink a beer",
            op2: "I want to drink some water",
            op3: "I want to drink a coffee",
            op4: "I want to drink some Wine",
            reqProgres:70
        }, 
        { // fase 23 
            question:'* Play video-game is my favorite hobbie * traduzindo pro português é:',
            resp: 'Jogar Video-game é meu hobbie favorito',


            hasOptions: true,
            op1: "Jogar futebol é meu hobbie favorito",
            op2: "Jogar cartas é meu hobbie favorito",
            op3: "Jogar Video-game é meu hobbie favorito",
            op4: "Tocar violão é meu hobbie favorito",
            reqProgres:70
        }, 
        { // fase 24
            question:'Escreva * Água * em Inglês :',
            resp: 'Water',

            hasOptions: false,
            reqProgres:70
        }, 
        { // fase 25
            question:'Escreva * Jogar * em Inglês:',
            resp: 'Play',

            hasOptions: false,
            reqProgres:80
        }, 
        { // fase 26
            question:'Escreva * beber * em Inglês:',
            resp: 'Drink',

            hasOptions: false,
            reqProgres:80
        }, 
        { // fase 27
            question:'Escreva * Inglês * em Inglês:',
            resp: 'English',

            hasOptions: false,
            reqProgres:80
        }, 
        { // fase 28
            question:'Escreva * Eu quero beber água * em Inglês:',
            resp: 'I want to drink some water',

            hasOptions: false,
            reqProgres:90
        }, 
        { // fase 29
            question:'Escreva * Brasil * em Inglês :',
            resp: 'Brazil',

            hasOptions: false,
            reqProgres:90
        }, 
        { // fase 30
            question:'* Eu estou em fome * em inglês é :',
            resp: 'Im hungry',

            hasOptions: true,
            op1: "Im hungry",
            op2: "Im thirst",
            op3: "Im tired",
            op4: "Im sleepy",
            reqProgres:90
        }, 
        { // fase 31
            question:'Escreva *Eu estou com fome* em inglês:',
            resp: 'I am Hungry',

            hasOptions: false,
            reqProgres:100
        }, 
    ]
    return(json[props])};

export default SourceQuestions