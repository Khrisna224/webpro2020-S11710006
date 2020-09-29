const yearUntilRetirement = (year, firstName) =>{
    let age = 28;
    let retirement = 65 - age;
    if(retirement > 0){
        console.log(`${firstName} retired in ${retirement} years`);
    } else{
        console.log(`${firstName} is already retired.`)
    }
}