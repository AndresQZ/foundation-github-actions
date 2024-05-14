
export function frequencyCounterWithMap (array) {
    const fcMap = new Map();
    let counter = 0;

    for (let i= 0; i < array.length ; i++) {
        fcMap.set(array[i], (fcMap.get(array[i]) || 0) + 1)
    }

   fcMap.forEach(value => {
    if (value > 1) counter++
   })

   console.log(`counter :${counter}`);
}