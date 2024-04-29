function submitForm() {
  // Get form elements
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var characterName = document.getElementById("characterName").value;
  var hitPoints = document.getElementById("hitPoints").value;
  var characterClass = document.getElementById("characterClass").value;
  var characterRace = document.getElementById("characterRace").value;
  var armourClass = document.getElementById("armourClass").value;
  var initiative = document.getElementById("initiative").value;
  var speedAmount = document.getElementById("speedAmount").value;
  
  // Get selected cantrips
  var cantrips = [];
  var checkboxes = document.querySelectorAll('input[name="cantrips"]:checked');
  checkboxes.forEach(function(checkbox) {
    cantrips.push(checkbox.id);
  });

  // Construct character details HTML
  var characterDetailsHTML = `
    <h2>Character Details</h2>
    <p><strong>Username:</strong> ${username}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Password:</strong> ${password}</p>
    <p><strong>Character Name:</strong> ${characterName}</p>
    <p><strong>Hit Points:</strong> ${hitPoints}</p>
    <p><strong>Class:</strong> ${characterClass}</p>
    <p><strong>Race:</strong> ${characterRace}</p>
    <p><strong>Armour Class:</strong> ${armourClass}</p>
    <p><strong>Initiative:</strong> ${initiative}</p>
    <p><strong>Speed:</strong> ${speedAmount}</p>
    <p><strong>Cantrips:</strong> ${cantrips.join(', ')}</p>
  `;

  // Append character details HTML to characterDetails div
  console.log(characterDetailsHTML);
  document.getElementById("characterDetails").innerHTML = characterDetailsHTML;
}