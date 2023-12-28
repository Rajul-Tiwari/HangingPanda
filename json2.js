$(document).ready(function() {
    const persons = [
      {
        "firstname": "Virat",
        "lastname": "Rohit",
        "dob": "01/01/1885"
      },
      {
        "firstname": "Rohit",
        "lastname": "Sharma",
        "dob": "15/07/1984"
      },
      {
        "firstname": "SuryaKumar",
        "lastname": "yadav",
        "dob": "26/09/1990"
      }
    
    ];
  
    const tableBody = $('#personsTable tbody');
    persons.forEach(person => {
      const row = `<tr>
                    <td>${person.firstname}</td>
                    <td>${person.lastname}</td>
                    <td>${person.dob}</td>
                  </tr>`;
      tableBody.append(row);
    });
  });
  