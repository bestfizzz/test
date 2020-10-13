//1
var a1=[1,2,"a"]
var a2=[3,1,"b"]
listmaker=(a1,a2)=>{
    let list=[]
    console.log(a1,a2)
    for(i=0;i<a1.length;i++){
        if(!(a2.includes(a1[i],0))){
            list.push(a1[i])
        }    
    }
    for(i=0;i<a2.length;i++){
        if(!(a1.includes(a2[i],0))){
            list.push(a2[i])
    }}
    console.log(list);
}

listmaker(a1,a2)
//2
list2=[{name:"a",
    points:99,
    gd:45,
},{name:"c",
points:75,
gd:39,
},{name:"m",
points:60,
gd:29,
},{name:"l",
points:88,
gd:39,
},]
for(i=0;i<list2.length;i++){
    for(j=0;j<list2.length;j++){
        if(list2[i].gd<list2[j].gd){
            let temp = list2[i];
            list2[i] = list2[j];
            list2[j] = temp;;
    }
    
    }
}
j=0
for(i=list2.length;i>0;i--){
    j=j+1
    list2[i-1].positions=j
}
console.log(list2);
fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple')
    .then(response =>response.json())
    .then(data => {
        console.log(data);
        let x=0
        wrong=(x)=>{
            alert('wrong.')
            return x=x+1
        }
        document.getElementById('difficulty').innerText='difficulty: '+data.results[x].difficulty
        document.getElementById('category').innerText='category: ' + data.results[x].category
        document.getElementById('quiz').innerText=data.results[x].question
        document.getElementById('a').innerText=data.results[x].incorrect_answers[0]
        document.getElementById('d').addEventListener('click',()=>{
            alert('nice');
            x=x+1
        })
        document.getElementById('b').innerText=data.results[x].incorrect_answers[1]
        document.getElementById('c').innerText=data.results[x].incorrect_answers[2]
        document.getElementById('d').innerText=data.results[x].correct_answer
      ;
    }).catch(err => console.error(err))
