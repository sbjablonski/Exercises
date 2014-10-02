// Add the names of everyone at your table
var friends = ['Alex', 'Elyse', 'Mae', 'Sartaj'];

// Create your for loop here
// HINT: the string should look like '<li>' + friends[x] + "</li>" + ....
var createList = function(){

var list = "<ul>"

for(i=0; i < friends.length; i++) {
  list += '<li>' + friends[i] + "</li>"
}

list = list + '</ul>'
$("body").append(list);
};

var addFriend = function(newFriend){
  friends.push(newFriend);
};

// Use jQuery to select the body tag on the index and append the finish table string

$(".addfriend").click(function(){
  var newFriend = $("input").val();
  addFriend(newFriend)
  createList()
});