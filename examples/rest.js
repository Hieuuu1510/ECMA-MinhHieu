function total(...number) {
    let sum = 0;
    for(let i = 0; i < number.length; i++) {
        sum += number[i];
    }
    console.log(sum);
}
total(1,2,3,4,5,6);