// ---------------------- Global Vars ---------------------------------//
const $newSubscriber = $('#newSubscriber'); 
let subscriberInterests = [];
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("subuser");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];


// ----------- functions -------------- //
const handleSubmitForm = (event) => {
  event.preventDefault();
  
  const $inputs = $('input');
  $inputs.each(function (index, element) {
  if ($(element).name === 'name' || $(element).name === 'email') {
      $(element).addClass('is-invalid');
      $(element).parent().append(`
        <div class="invalid-feedback">
          ${$(element).attr('name')} is required.
        </div>
      `);
    }
  });

  validateInterests();
  formData();
  $('.empty').val('');
  $('.checkbox').prop('checked', false);
  subscriberInterests = [];
  
}

const onSuccess = () => {

    modal.style.display = "block";
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

const onError = () => {
  console.log('error!');
}



//------------------ user data ----------------------------//
const formData = () => {
  
    $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/api/v1/subscribers',
    data: 
    {
      "firstName": $('#first-name').val(),
      "lastName": $('#last-name').val(),
      "email": $('#user-email').val(),
      "interests": subscriberInterests,
    },
    success: onSuccess,
    error: onError,
  });
}

// ------------------- control checked boxes ------------------------//
const validateInterests = () => {
  if ($('#newsInterest').is(':checked')) {
    subscriberInterests.push($('#newsInterest').val());
  }
  if ($('#musicInterest').is(':checked')) {
    subscriberInterests.push($('#musicInterest').val());
  }
  if ($('#videoInterest').is(':checked')) {
    subscriberInterests.push($('#videoInterest').val());
  }
  if ($('#gifInterest').is(':checked')) {
    subscriberInterests.push($('#gifInterest').val());
  }
  console.log(subscriberInterests);
}

// ------------------------------------ popup ------------------------//
// Get the modal




// ------------------------ empty ---------------------------//
$('.empty').empty();


// ------------------------ event listener ---------------------------//
$('form').on('submit', handleSubmitForm); 