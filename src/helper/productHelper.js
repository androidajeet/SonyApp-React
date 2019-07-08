export const getAllProduct = (json, products = []) => {
    if (json.hasOwnProperty("children")) {
        json.children.forEach(element => {
            this.getAllProduct(element, products);
        });
    } else {
        products.push(json);
    }
    return products;
}

export const getExpiredProducts = (allProducts) => {

    console.log(allProducts);
    let expired = allProducts.filter(function (va) {
        return checkProductValadity(va.orderedDate, va.warrantyPeriod.charAt(0)) <= 0;
        // return va.name == "FE 135mm F1.8 GM"
    });
    console.log("expired====>", expired)
    return expired;

}

export const getExpiringSoonProducts = (allProducts) => {
    console.log(allProducts);
    let expiresoon = allProducts.filter(function (va) {
        var dif = checkProductValadity(va.orderedDate, va.warrantyPeriod.charAt(0));

        //return dif<120;
        return (dif > 0) && (dif < 120);
        // return va.name == "FE 135mm F1.8 GM"
    });
    console.log("expiring soon====>", expiresoon)
    return expiresoon;
}























export const checkProductValadity = (dop, wp) => {
    console.log("currentDate", getCurrentdate());

    var d = dop.toDate("dd/MM/yyyy", "/");
    var dww = addYearToCurrentDate(d, parseInt(wp)).toDate("dd/MM/yyyy", "/");

    console.log(d.getFullYear());
    console.log(dww.getFullYear());
    var days = daysBetween(getCurrentdate().toDate("dd/MM/yyyy", "/"), dww);
    console.log(days);
    return days;

}


function getCurrentdate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    today = dd + '/' + mm + '/' + yyyy;
    return today;
}

function addYearToCurrentDate(d, years) {
    //var today = new Date();
    var dd = d.getDate();
    var mm = d.getMonth() + 1; //January is 0!

    var yyyy = d.getFullYear();
    var yearBefore = yyyy + years;
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var today = dd + '/' + mm + '/' + yearBefore;
    return today;
}

function daysBetween(date1, date2) {
    //Get 1 day in milliseconds
    var one_day = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;

    // Convert back to days and return
    return Math.round(difference_ms / one_day);



}


String.prototype.toDate = function (format) {
    var normalized = this.replace(/[^a-zA-Z0-9]/g, '-');
    var normalizedFormat = format.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-');
    var formatItems = normalizedFormat.split('-');
    var dateItems = normalized.split('-');

    var monthIndex = formatItems.indexOf("mm");
    var dayIndex = formatItems.indexOf("dd");
    var yearIndex = formatItems.indexOf("yyyy");
    var hourIndex = formatItems.indexOf("hh");
    var minutesIndex = formatItems.indexOf("ii");
    var secondsIndex = formatItems.indexOf("ss");

    var today = new Date();

    var year = yearIndex > -1 ? dateItems[yearIndex] : today.getFullYear();
    var month = monthIndex > -1 ? dateItems[monthIndex] - 1 : today.getMonth() - 1;
    var day = dayIndex > -1 ? dateItems[dayIndex] : today.getDate();

    var hour = hourIndex > -1 ? dateItems[hourIndex] : today.getHours();
    var minute = minutesIndex > -1 ? dateItems[minutesIndex] : today.getMinutes();
    var second = secondsIndex > -1 ? dateItems[secondsIndex] : today.getSeconds();

    return new Date(year, month, day, hour, minute, second);
};


