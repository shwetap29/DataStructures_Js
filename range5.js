//Take a range from 0 – 100, find the digits that are repeated twice like 33, 77 store them in an array.

let array =[];
for (i=1; i<100; i++ ){
        if (i%11 == 0 ){
            array.push(i);
        }
    }
console.log(array);