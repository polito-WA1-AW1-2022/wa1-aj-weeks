'use strict';

let user_input = "";

if (user_input==="") {
    user_input = "default"
}

console.log(user_input)

user_input = user_input || "default"