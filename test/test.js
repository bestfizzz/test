//1
var a1 = [1, 2, "a"]
var a2 = [3, 1, "b"]
listmaker = (a1, a2) => {
    let list = []
    console.log(a1, a2)
    for (i = 0; i < a1.length; i++) {
        if (!(a2.includes(a1[i], 0))) {
            list.push(a1[i])
        }
    }
    for (i = 0; i < a2.length; i++) {
        if (!(a1.includes(a2[i], 0))) {
            list.push(a2[i])
        }
    }
    console.log(list);
}
listmaker(a1, a2)
//2
list2 = [{
    name: "a",
    points: 99,
    gd: 45,
}, {
    name: "c",
    points: 75,
    gd: 39,
}, {
    name: "m",
    points: 60,
    gd: 29,
}, {
    name: "l",
    points: 88,
    gd: 39,
},]
alphabet = ["abcdefghijklmnopqrstuvwxyz"]
for (i = 0; i < list2.length; i++) {
    for (j = 0; j < list2.length; j++) {
        if (list2[i].points < list2[j].points) {
            let temp = list2[i];
            list2[i] = list2[j];
            list2[j] = temp;
        } else if (list2[i].points == list2[j].points) {
            if (list2[i].gd < list2[j].gd) {
                let temp = list2[i];
                list2[i] = list2[j];
                list2[j] = temp;
            }
            else if (list2[i].points == list2[j].points) {
                if (alphabet.indexOf(list2[i].name[0]) < alphabet.indexOf(list2[j].name[0])) {
                    let temp = list2[i];
                    list2[i] = list2[j];
                    list2[j] = temp;
                }
            }

        }
    }
}
j = 0
for (i = list2.length; i > 0; i--) {
    j = j + 1
    list2[i - 1].positions = j
}
console.log(list2);
fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let x = 0
        let currentscore = 0
        currentques(x, data,currentscore)
        document.getElementById('a').addEventListener('click', () => {
            if (checkCorrectAnwser(currentscore, x, 'a', data)) {
                currentscore = currentscore + 1
            }
            x = x + 1
            currentques(x, data, currentscore)
        })
        document.getElementById('b').addEventListener('click', () => {
            if (checkCorrectAnwser(currentscore, x, 'b', data)) {
                currentscore = currentscore + 1
            }
            x = x + 1
            currentques(x, data, currentscore)
        })
        document.getElementById('c').addEventListener('click', () => {
            if (checkCorrectAnwser(currentscore, x, 'c', data)) {
                currentscore = currentscore + 1
            }
            x = x + 1
            currentques(x, data, currentscore)
        })
        document.getElementById('d').addEventListener('click', () => {
            if (checkCorrectAnwser(currentscore, x, 'd', data)) {
                currentscore = currentscore + 1
            }
            x = x + 1
            currentques(x, data, currentscore)
        })
    })
shuffle = (x, data) => {
    answerlist = ['a', 'b', 'c', 'd']
    for (q = 0; q < 4; q++) {
        i = Math.floor(Math.random() * (answerlist.length - 1))
        if (q < 3) {
            document.getElementById(answerlist[i]).innerText = data.results[x].incorrect_answers[q]
            answerlist.splice(i, 1)
        } else {
            document.getElementById(answerlist[i]).innerText = data.results[x].correct_answer
        }
    }
}
checkCorrectAnwser = (currentscore, x, a, data) => {
    console.log(currentscore);
    console.log(document.getElementById(a).innerText);
    console.log(data.results[x].correct_answer)
    if (document.getElementById(a).innerText == data.results[x].correct_answer) {
        alert('correct')
        return true
    } else {
        return false
    }
}
currentques = (x, data, currentscore) => {
    if (x == data.results.length) {
        document.getElementById("main").innerHTML = `
        <div>score: ${currentscore}</div>
        <button id="play_again">play again</button>
        `
        document.getElementById('play_again').addEventListener('click', () => {
            document.getElementById("main").innerHTML = `
    <div id="category"></div>
    <div id="difficulty"></div>
    <div id="quiz"></div>
    <button id='a' name="a"></button>
    <button id='b' name="b"></button>
    <button id='c' name="c"></button>
    <button id='d' name="d"></button>
            `
            x = 0
            currentques(x, data, 0)
            document.getElementById('a').addEventListener('click', () => {
                if (checkCorrectAnwser(currentscore, x, 'a', data)) {
                    currentscore = currentscore + 1
                }
                x = x + 1
                currentques(x, data, currentscore)
            })
            document.getElementById('b').addEventListener('click', () => {
                if (checkCorrectAnwser(currentscore, x, 'b', data)) {
                    currentscore = currentscore + 1
                }
                x = x + 1
                currentques(x, data, currentscore)
            })
            document.getElementById('c').addEventListener('click', () => {
                if (checkCorrectAnwser(currentscore, x, 'c', data)) {
                    currentscore = currentscore + 1
                }
                x = x + 1
                currentques(x, data, currentscore)
            })
            document.getElementById('d').addEventListener('click', () => {
                if (checkCorrectAnwser(currentscore, x, 'd', data)) {
                    currentscore = currentscore + 1
                }
                x = x + 1
                currentques(x, data, currentscore)
            })
        })
    } else {
        document.getElementById('difficulty').innerText = 'difficulty: ' + data.results[x].difficulty
        document.getElementById('category').innerText = 'category: ' + data.results[x].category
        document.getElementById('quiz').innerText = x + 1 + "." + data.results[x].question
        shuffle(x, data)
    }
}