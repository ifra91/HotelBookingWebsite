function TDate() {

    var GivenDate = document.getElementById("myForm").elements[3].value;
    var CurrentDate = document.getElementById("myForm").elements[2].value;


    if (GivenDate < CurrentDate) {
        alert('Given date is lesser than the current date.');
    }
}

function TDate2() {

    var GivenDate = document.getElementById("myForm").elements[2].value;
    var CurrentDate = new Date();
    GivenDate = new Date(GivenDate);

    if (GivenDate < CurrentDate) {
        alert('Given date is lesser than the current date.');
    }
}

function GetDays() {
    var dropdt = new Date(document.getElementById("myForm").elements[2].value);
    var pickdt = new Date(document.getElementById("myForm").elements[3].value);


    return parseInt((pickdt - dropdt) / (24 * 3600 * 1000));
}

function cal() {

    var numCustomer = document.getElementById("myForm").elements[0].value;
    if (document.getElementById("myForm").elements[3].value) {
        document.getElementById("myForm").elements[4].value = (GetDays() * 1000) + ((numCustomer) * 1000);
    }
}