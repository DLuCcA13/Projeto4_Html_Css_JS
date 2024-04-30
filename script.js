const MessageInput = document.getElementById("messageInput")

MessageInput.addEventListener("keydown", function (event) {
  if (event.key == "Enter") GetMessage();
});

function GetMessage(){
    document.getElementById("messageOutput").innerHTML = MessageInput.value;
    MessageInput.value = "";
}