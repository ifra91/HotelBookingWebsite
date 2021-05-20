headerTemplate(false);
footerTemplate();
// loginTemplate();
check();

function clearLogin() {
    localStorage.clear();
    headerTemplate(false);
    check();
}

function loginTemplate() {
    var name = document.getElementById('exampleInputEmail1').value;
    var pw = document.getElementById('exampleInputPassword1').value;
    clearLogin();
    if (name == '' || pw == '') {
        alert('ERROR');
    } else {
        localStorage.setItem('exampleInputEmail1', name);
        localStorage.setItem('exampleInputPassword1', pw);
    }
    check();
}

function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('exampleInputEmail1');
    var storedPw = localStorage.getItem('exampleInputPassword1');

    // entered data from the login-form
    // var userName = document.getElementById('exampleInputEmail1');
    // var userPw = document.getElementById('exampleInputPassword1');

    // check if stored data from register-form is equal to data from login form
    if (storedName && storedPw) {
        // alert('You are loged in.');
        // document.getElementById("loginout").innerText = "LOGOUT";
        headerTemplate(true);
    } else {
        // alert('ERROR');
        headerTemplate(false);
    }
}

function addZindex() {
    let span = document.querySelectorAll(".container");
    for (var i = 0; i < span.length; i++) {
        span[i].classList.add("z-ind");
    }
}
$('#exampleModal').on('hidden.bs.modal', function(e) {
    // do something...
    removeZindex();
})

function removeZindex() {
    let span = document.querySelectorAll(".container");
    for (var i = 0; i < span.length; i++) {
        span[i].classList.remove("z-ind");
    }
}

function headerTemplate(loggedIn) {
    let headertemplate = `<a href = "index.html"><img class="logo" src="assests/images/logo.png" alt="logo" />` +
        `<button type="button" id = "myBtn" onclick="clearLogin()" class="btn btn-light login">Logout</button>`;
    if (!loggedIn) {
        // alert("Successfully Logged In");
        let dynamicLogOut = `<img class="logo" src="assests/images/logo.png" alt="logo" />` +
            `<button type="button" onclick="addZindex()" id='loginout' class="btn btn-light login" data-toggle="modal" data-target="#exampleModal">Login</button>`;
        headertemplate = dynamicLogOut +
            `<div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Please Login</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                        </div>

                        <div class="modal-body">

                            <form id = "modalForm">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Username</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter Username">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                                </div>
                            </form>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" style="margin-left: auto;margin-right: auto;"  onclick="loginTemplate()" data-dismiss="modal">Login</button>
                        </div>
                    </div>
                </div>
// </div>`;
    }
    if (document.getElementById('header')) {
        document.getElementById('header').innerHTML = headertemplate;
    }
}




function footerTemplate() {
    let footertemplate = `<span><button type="button" class="btn btn-info" data-toggle="modal" data-target="#contactModal">
    Contact Us
  </button></span> ` +

        `<div class="modal fade" id="contactModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"> 
            <div class="modal-dialog" role="document"> 
                <div class="modal-content"> 
                    <div class="modal-header"> 
                        <h5 class="modal-title" id="exampleModalLabel">Get In Touch</h5> 
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"> 
            <span aria-hidden="true">&times;</span> 
          </button> 
                    </div> 

                    <div class="modal-body"> 
                        <p>Thank You for reaching out!!!</p> 
                        <p>Please enter your email we will get back to you</p> 

                        <form action="index.html" m ethod="get"> 
                            <input type="email" required placeholder="Enter your email"> 
                        </form> 
                    </div> 
                    <div class="modal-footer"> 
                        <button type="button" class="btn btn-primary">Submit</button> 
                    </div> 
                </div> 
            </div> 
        </div> ` +

        `<span style="font-size: small;">© 2020 ROOM SEARCH PVT. LTD</span> ` +

        `<span style="margin-right: 30px;">
            <a href="https://www.facebook.com" target="_blank"><img class="socialLogo" src="assests/images/facebook.png" alt="facebooklogo"></a> 
            <a href="https://www.instagram.com" target="_blank"><img class="socialLogo" src="assests/images/instagram.png" alt="instagramlogo"></a> 
            <a href="https://www.twitter.com" target="_blank"><img class="socialLogo" src="assests/images/twitter.png" alt="twitterlogo"></a> 
        </span> `;
    if (document.getElementById('footer')) {
        document.getElementById('footer').innerHTML = footertemplate;
    }



}