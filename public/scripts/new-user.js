const $newSubscriber = $('#newSubscriber'); 
const subscriberInterests = [];




const handleSubmitForm = (event) => {
  event.preventDefault();
 
  const $inputs = $('input');
  $inputs.each(function (index, element) {
  // This only requires Name & Email to have values
//  if ($(element).name === 'name' || $(element).name === 'email') {
//       $(element).addClass('is-invalid');
//       $(element).parent().append(`
//         <div class="invalid-feedback">
//           ${$(element).attr('name')} is required.
//         </div>
//       `);
//     }

    if ($('#newsInterest').is(':checked')) {
      subscriberInterests.push($('#newsInterest').val());
      console.log(subscriberInterests);
    }
    
  });
}

const onSuccess = () => {
  console.log('success!');
}

const onError = () => {
  console.log('error!');
}

$.ajax({
  type: 'POST',
  url: 'http://localhost:3000/api/v1/subsrcibers',
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



$('#newUser').on('submit', $newSubscriber); 





//foreach to loop through
//put all under submit function



