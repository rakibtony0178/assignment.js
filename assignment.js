

// Kilometer To Meter Function
function kilometerToMeter(kilometer){
    if(isNaN(kilometer)){
        return "Input is not a number";
    }else if(kilometer < 0){
        return "Value cannot be negative";
    }else{
        return parseFloat(kilometer*1000);
    }
}
// console.log(kilometerToMeter("12.12"));





// Shopping Budget Calculator Function
function budgetCalculator(watchCounter, phoneCounter, laptopCounter){

    if(isNaN(watchCounter) || isNaN(phoneCounter) || isNaN(laptopCounter)){
        return "Input can only be number";
    }else if(parseInt(watchCounter)!=watchCounter || parseInt(phoneCounter)!=phoneCounter || parseInt(laptopCounter)!=laptopCounter){
        return "Input cannot be float";
    }else if(watchCounter<0 || phoneCounter<0 || laptopCounter<0){
        return "Value cannot be negative";
    }else{
        return parseInt(watchCounter*50 + phoneCounter*100 + laptopCounter*500);
    }
}
// console.log(budgetCalculator("1", "1", "1"));







// Hotel Cost Calculator Function
function hotelCost(dayCounter){
    if(isNaN(dayCounter) || parseInt(dayCounter)!=dayCounter){
        return "Input must be an integer";
    }else if(dayCounter < 0){
        return "Input must be non-negative";
    }else if(dayCounter == 0){
        return "Must stay a day to get your bill";
    }else {
        
        if(dayCounter<=10){
            return (dayCounter * 100);
        }else if(dayCounter<=20){
            return (((dayCounter-10) * 80) + 1000);
        }else{
            return (((dayCounter-20) * 50) + 1800);
        }

    }
}
// console.log(hotelCost("100"));





// Friends Max Length Name Finder Function
function megaFriend(nameArray){

    if(Array.isArray(nameArray)){
        var lengthOfNameArray = nameArray.length;
        var maxLength = 0;
        var indexFound = 0;
        for(var x = 0; x < lengthOfNameArray; x++){
            if((typeof nameArray[x])!="string"){
                return "All values of array are not string";
            }else{
                if(maxLength < nameArray[x].length){
                    maxLength = nameArray[x].length;
                    indexFound = x;
                }
            }
        }

        return nameArray[indexFound];
    }else{
        return "Input is not an array";
    }
}
// console.log(megaFriend(["Tony", "Muzahid", "Sun"]));
