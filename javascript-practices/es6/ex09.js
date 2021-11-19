const food = [
    {no:1,name: 'Bread', quantity: 10},
    {no:2, name: 'Egg', quantity: 20},
    {no:3, name: 'Milk', quantity: 50}
];

const arr1=[];
food.forEach(function(food,index){
    arr1[index]={no: food.no, n: food.name, q: food.quantity};
});
console.log(arr1);

const arr2 = food.map(function(food){
    return { no: food.no, n: food.name, q: food.quantity };
});
console.log(arr2);