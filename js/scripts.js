/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    var navbarShrink = function () {
        let logo = document.getElementById("toplogo")
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')

        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});




function submitEmail() {
  sender = document.getElementById( 'email').value
  console.log('submitting email '+ sender)
  let form = new FormData();
  form.append('email',sender);
  //form.append("fsid","s4811675942585");
  u = 'https://meaningful-texting-aqtiusbaaq-uc.a.run.app/email_signup'
  u2 = 'https://harvesting.ninja/mdw_contact_form'
  u3='https://bitqueues.com/websitecontactform/submit.php'
  txt = fetch(u2, {
      method: 'POST',
      body: form
  })
      .then(function(response) {

          console.log('received clip')
          let el = document.getElementById('submitSuccessMessage')
          console.log(el.className)
          el.className='text-success'
          console.log(el.className)

          return response.text()
      } )
      .catch(function(error) {
        document.getElementById('submitErrorMessage').style.display='inline'

        console.log('error ' + String(error))
        }
      )
      console.log(txt)
}


function checkemail() {

  var emailText = document.getElementById('email').value
  var valid = ValidateEmail(emailText)
  var submitbtn = document.getElementById('submitButton')
  var email_label = document.getElementById('email_label')
  console.log(emailText)
  //var errortext = document.getElementById('invalidEmail')
  //var successtext = document.getElementById('validEmail')

  //var formNotice = document.getElementById('emailFormNotice')
  //console.log(emailText)
  if (!emailText) {
      //formNotice.style.display='inline'
      //errortext.style.display='none'
      //successtext.style.display='none'
      email_label.innerHTML='Please Enter Valid Email Address'
      submitbtn.innerHTML = 'Please Enter Valid Email to Submit'
      submitbtn.setAttribute('class','btn btn-primary')
      submitbtn.disabled = true
      return
  }
  else {
    //formNotice.style.display='none'
  }
  if (valid=== true) {
    //errortext.style.display='none'
    //successtext.style.display='inline'
    email_label.innerHTML='Valid!'
    submitbtn.setAttribute('class','btn btn-primary')
    submitbtn.disabled = false
    submitbtn.innerHTML = 'Submit'


  }
  else {

    //errortext.style.display='inline'
    //successtext.style.display='none'
    email_label.innerHTML='Invalid Email'
    submitbtn.innerHTML = 'Please Enter Valid Email to Submit'
    submitbtn.setAttribute('class','btn btn-primary')
    submitbtn.disabled = true

  }

}

function ValidateEmail(input) {
  console.log(input)
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.match(validRegex)) {
    return true;
  } else {
    //alert("Invalid email address!");

    return false;
  }

}
