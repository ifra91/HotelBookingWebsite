/* function for fetching form data from detail.html activation */
window.addEventListener('load', () => {

    const params = (new URL(document.location).searchParams);
    const name = params.get('name');
    const number = params.get('number');
    const fromDate = params.get('from');
    const toDate = params.get('toDate');
    const totalSum = params.get('total');

    const adult = params.get('number');
    var startDate = moment(fromDate, "YYYY-MM-DD");
    var endDate = moment(toDate, "YYYY-MM-DD");
    var result = endDate.diff(startDate, 'days');




    document.getElementById('CustomerName').innerHTML = name;
    document.getElementById('bookingNumber').innerHTML = number;
    document.getElementById('Date1').innerHTML = fromDate;
    document.getElementById('Date2').innerHTML = toDate;
    document.getElementById('totalAmount').innerHTML = totalSum;
    document.getElementById('adult').innerText = adult;
    document.getElementById('numDays').innerText = result;




})




/* function for PAYNOW activation */
document.onload = function() {
    check();
    getPayDetails();
    GetDays();
}

function check() {
    // stored data from the register-form
    var storedName = localStorage.getItem('exampleInputEmail1');
    var storedPw = localStorage.getItem('exampleInputPassword1');
    debugger;
    // entered data from the login-form
    // var userName = document.getElementById('exampleInputEmail1');
    // var userPw = document.getElementById('exampleInputPassword1');

    // check if stored data from register-form is equal to data from login form
    if (storedName && storedPw) {
        alert('You are logged in.');
        document.getElementById("myButton").disabled = `false`;
    } else {
        // alert('ERROR');
        document.getElementById("myButton").disabled = `true`;
    }

}