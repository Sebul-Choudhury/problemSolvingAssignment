
function feetToMile(ft) {
    if (ft < 1) {
        console.log("Feet must be a positive number");
        return;
    }
    return ft * 0.00018939;
}



function woodCalculator(chair, table, bed) {

    if(chair<1){
        console.log('Number of chair must be a postive value');
        return;
    }
    if(table<1){
        console.log('Number of table must be a postive value');
        return;
    }
    if(bed<1){
        console.log('Number of bed must be a postive value');
        return;
    }
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}

function tinyFriend(names) {
    var smallestNameLength = names[0].length;
    var smallestName = names[0];

    for (var i = 1; i < names.length; i++) {

        if (names[i].length > 0) {
            if (names[i].length < smallestNameLength) {

                smallestNameLength = names[i].length;
                smallestName = names[i];

            }

        }
    }
    return smallestName;
}



function brickCalculator(floor) {
    var total = 0;
    var count = 0;
    if (floor < 1) {
        console.log("Floor Must Be Greater Than Zero");
        return;
    }
    while (floor > 0) {
        count = count + 1;
        if (count < 11) {
            total = total + (15 * 1000);
        }
        else if (count > 10 && count < 21) {
            total = total + (12 * 1000);
        }
        else {
            total = total + (10 * 1000);
        }

        floor--;
    }
    return total;
}

