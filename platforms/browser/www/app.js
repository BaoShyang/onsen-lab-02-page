function showAlert() {
  ons.notification.alert('This is a alert');
}

// function sayHello() {
//   showToast();
// }

// var showToast = function(){
//   ons.notification.toast('此讯息会自动消除', { timeout: 2000 });
// }

function showToast() {
  ons.notification.toast('Toast!', { timeout: 2000 });
}

function showConfirm() {
  ons.notification.confirm('请确认').then(function(input) {
    ons.notification.alert('You clicked:' + input);
  });
}

var showPrompt = function() {
  ons.notification.prompt('Prompt!').then(function(input) {
    var message = input ? 'Entered: ' + input : 'Entered nothing!';
    ons.notification.alert(message);
  });
};
