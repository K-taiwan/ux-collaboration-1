const $newSubscriber = $('#newSubscriber'); 
const subscriberInterests = [];



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
}

const onSuccess = () => {
  console.log('success!');

}

const onError = () => {
  console.log('error!');
}

 const formData = () => {
   console.log({
    "firstName": $('#first-name').val(),
    "lastName": $('#last-name').val(),
    "email": $('#email').val(),
    "interests": subscriberInterests,
  })
  $.ajax({
  method: 'POST',
  url: 'http://localhost:3000/api/v1/subscribers',
  data: 
  {
    "firstName": $('#first-name').val(),
    "lastName": $('#last-name').val(),
    "email": $('#email').val(),
    "interests": subscriberInterests,
  },
  success: onSuccess,
  error: onError,
})
}
console.log(formData());




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


$('form').on('submit', handleSubmitForm); 





//foreach to loop through
//put all under submit function



