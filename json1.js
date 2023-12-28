 
 const person = {
    "firstname": "virat",
    "lastname": "Kohli",
    "dob": "27/05/1989"
  };

  
  $(document).ready(function() {
    $('#firstname').text(`First Name: ${person.firstname}`);
    $('#lastname').text(`Last Name: ${person.lastname}`);
    $('#dob').text(`Date of Birth: ${person.dob}`);
  });