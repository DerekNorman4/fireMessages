const database = firebase.database().ref();
database.on('child_added', displayMessageOnBoard);


const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here


/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username        = usernameElement.value;
    const message         = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    const userData = {
        NAME: username,
        MESSAGE: message,
    };


    database.push(userData);
    //Update database here

}

// Set database "child_added" event listener here
function displayMessageOnBoard(rowData) {
    const row = rowData.val();
    const messageBox = document.querySelector('.allMessages');
    const div = document.createElement('div');
    div.setAttribute('class', 'message');
    const text = document.createTextNode(`${row.NAME}: ${row.MESSAGE}`);
    div.style.fontWeight = "1000";
    div.appendChild(text);
    messageBox.appendChild(div);
}