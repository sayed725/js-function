
function evenSizedString(str){
    const size = str.length;
    if(size %2 ===0){
        console.log('even size number');
        return true;
    }
    else{
        console.log('odd size number');
        return false;
    }


}

// const str = evenSizedString('Dhaka');
// console.log(str);

function doubleOrTripple(number , doDouble){
    if(doDouble===true){
        const result = number*2;
        return result;
    }
    else{
        const result = number*3;
        return result;
    }
}
// console.log(doubleOrTripple(10,true));
// console.log(doubleOrTripple(10,false));

function numberOfElements(number){
    const len = number.length;
    console.log(len);
    return len;
}
// console.log(numberOfElements([12,34,43,56,64,54,3,4,3,3]));
numberOfElements([12,34,43,56,64,54,3,4,3,3]);
