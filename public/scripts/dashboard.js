onSuccess = (response) => {
  console.log('success!');

  response.data.forEach((subscriber) => {
    const template = `
    <tr>
    <td>${subscriber.firstName}</td>
    <td>${subscriber.lastName}</td>
    <td>${subscriber.email}</td>
    <td>${subscriber.interests}</td>
    </tr>
    `;
    $('#dashboard').append(template);
  })
};

onError = () => {
  console.log('err');
}

$.ajax({
  method: "GET",
  url: "http://localhost:3000/api/v1/subscribers",
  success: onSuccess,
  error: onError
})