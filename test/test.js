//1
var a1=[1,2,"a"]
var a2=[1,3,"b"]
listmaker=(a1,a2)=>{
    let list=[]
    for(i=0;i<=a1.lenght;i++){
        if(!(a1[i] in a2)){
            list.push(a1[i])
        }    
    }
    for(i=0;i<=a1.lenght;i++){
        if(!(a2[i] in a1)){
            list.push(a2[i])
    }
    for(i=0;i<=a1.lenght;i++){
        if(list[i]===undefined){
            list.splice(i,1)
        }
    }
}
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
for(i=0;i<=a1.lenght;i++){
    if(list2[0].gd<list2[i].gd){
        l=list2[0]
        list2[0]=list2[i]
        list2[i]=l
    }
}
for(i=0;i<=a1.lenght;i++){
    list2[i].positions=i+1
}

fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple')
    .then(response => response.json())
    .then(data => console.log(data));