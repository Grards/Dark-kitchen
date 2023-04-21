
function filter(category){
    let selected_dish = []; 
    menu.forEach(element => {
        const filter_dish = menu.filter(menu => menu.category === category);
        selected_dish.push(filter_dish);
    })
    // let vegan = category.includes('vegan') ;
    // if (vegan == true){
    //     // .style.display = 'block';
    // } else {
    //     // .style.display = 'none';
    // }
    return selected_dish;
}

console.log(filter('vegan')); 
console.log(filter('comfortfood'));
console.log(filter('traditionalfood')); 


// console.log(test("vegan"));
// let table = test("comfortfood");

// table.forEach( (e)=> {
//     e.forEach((i)=>{
//         console.log(i.name)
//         console.log(i.price)
//     })
// })


