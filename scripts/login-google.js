var googleUser = {};
var startApp = function() {
  gapi.load('auth2', function(){
    // Retrieve the singleton for the GoogleAuth library and set up the client.
    auth2 = gapi.auth2.init({
      client_id: '517909060330-3oqhp93750eroe629vqogd33r82kstu1.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin',
      fetch_basic_profile: true,
      prompt: 'consent', // Solicitar sempre o consentimento
    });
    attachSignin(document.getElementById('customBtn'));
  });
};

function attachSignin(element) {
  console.log(element.id);
  auth2.attachClickHandler(element, {},
    function(googleUser) {
      document.getElementById('name').innerText = "Signed in: " +
        googleUser.getBasicProfile().getName();
      var profile = googleUser.getBasicProfile();
      var userName = profile.getName();
      var userEmail = profile.getEmail();

      document.getElementById("email").value = userEmail;
    }, function(error) {
      alert(JSON.stringify(error, undefined, 2));
    });
};
