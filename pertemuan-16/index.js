const num = [1, 2, 3];
setTimeout(numbers => {
    console.log(numbers)
}, 2000, numbers)


const getId = new Promise((resolve, reject) => {
    const numbers = [1, 2, 3];
    setTimeout(() => {
        //If Success
        resolve(numbers)
        //Else
        // reject('Error');
    }, 2000)
});

async function getNameByIdAW() {
    const id = await getId;
    const name = await getNameById(id);
    console.log(name);
}