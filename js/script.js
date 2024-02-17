function addContacts(imge, cName, user_msg) {

    let contacts = document.querySelector(".contacts");

    // creeating chats cards based on function arguments
    let card = document.createElement('div');
    card.className = "card";

    // creating divs for contact names and dp and time
    let prfle_div = document.createElement('div');
    prfle_div.className = "prfle"
    let chat_time = document.createElement('div');
    let msg = document.createElement('div')
    msg.className = "msg";

    // setting img tag
    let img = document.createElement('img');
    img.setAttribute('src', imge)
    prfle_div.appendChild(img);

    // setting contact name
    let cnme = document.createElement('p');
    cnme.innerText = cName;

    // creating message span
    let span = document.createElement('span');
    span.innerText = user_msg

    msg.appendChild(cnme);
    msg.appendChild(span)
    prfle_div.appendChild(msg);

    // setting time status
    let tme = document.createElement('p');
    tme.className = "time"
    tme.innerText = "11:05pm"
    chat_time.appendChild(tme);

    // appending all items to chat card
    card.appendChild(prfle_div)

    // card.appendChild(cntct_name)
    card.appendChild(chat_time)

    // appending chat card to contacts 
    contacts.appendChild(card)
}

// dp image paths
let ash = "https://pps.whatsapp.net/v/t61.24694-24/369643970_1095933554771642_4865357037290191923_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdStx05d5YniDIACUa6KA6AjzvuQFTCvz2sx8nnpurNNBw&oe=65D6243A&_nc_sid=e6ed6c&_nc_cat=107"

let divya = "https://pps.whatsapp.net/v/t61.24694-24/424242885_941345000892789_8521114900128729342_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRnxpzX-7tvIKr88DV1t5ZFYBbFx9GC7atyIly_fErGLQ&oe=65D6269D&_nc_sid=e6ed6c&_nc_cat=100"

let prady = "https://pps.whatsapp.net/v/t61.24694-24/385532658_286296600944876_7938271536281083145_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRh2TWcd6aQZJUuQ2wDANrSHZU3EXgPSBAyzyhQEMV0fA&oe=65D62DD0&_nc_sid=e6ed6c&_nc_cat=104"

let sagar = "https://pps.whatsapp.net/v/t61.24694-24/394760156_850901363704374_7421970511629847395_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRm_7jxnswpM_TCuI7Z2TQTFVSvMiUlZJiCOors8iEKfw&oe=65D63808&_nc_sid=e6ed6c&_nc_cat=110"

let rash = "https://media-tir3-2.cdn.whatsapp.net/v/t61.24694-24/424835778_1117550133031842_4984313474043267157_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSTrAf3x1kxPENP5TG-vjISN_Kp3mTWDVJvZPhKXwcGtQ&oe=65D624E7&_nc_sid=e6ed6c&_nc_cat=108"

let daksh = "https://pps.whatsapp.net/v/t61.24694-24/415022014_1402656423795372_3977323329595005132_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQJEGmZWXm9HH1cU_lSeBKV8Vb2opTUmmhXUsh6--fB-Q&oe=65D61C1B&_nc_sid=e6ed6c&_nc_cat=111"

let aman = "https://media-tir3-2.cdn.whatsapp.net/v/t61.24694-24/187265781_3412829182277549_2937587465946533830_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRR51geDyR70y-J1sqdtUaj1_y9m3tCboFR_5SYbauuwA&oe=65D622BE&_nc_sid=e6ed6c&_nc_cat=109"

let tushar = "https://media-tir3-2.cdn.whatsapp.net/v/t61.24694-24/369646799_1619671348557890_8305179705407535206_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQEUVRTGitQZIWyFmLQeDqH27S3f-okxOUTOa12H_fq7g&oe=65D6443C&_nc_sid=e6ed6c&_nc_cat=104"

let me = "https://media-tir3-2.cdn.whatsapp.net/v/t61.24694-24/377562086_849404839809624_8249353368711110532_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQ09jvxE113GwN4getfQ1fKofG9bVipJFhHpy1JrbdQxg&oe=65D62AE3&_nc_sid=e6ed6c&_nc_cat=109"

addContacts(me, "+916360329431 (You)", "lorem")
addContacts(ash, "~Ashwini💫", "hi madam 😉")
addContacts(divya, "Divya_shree👻", "Good morning 😀")
addContacts(sagar, "Sagar", "bro kya kar rahah hai 😊")
addContacts(prady, "Pradyumna", "bhai gumne chale")
addContacts(tushar, "Tushar", "hello")
addContacts(rash, "Rashitha", "oye gandu kya haal hai 😏")
addContacts(daksh, "Dakshith")
addContacts(divya, "Divya_shree👻")
addContacts(aman, "Aman", "good night")
addContacts(tushar, "Tushar", "hi")
addContacts(sagar, "Darshan", "lorem ipsum dollar sit lorem lorem.....")
addContacts(prady, "Pradyumna", "lorem ipsum dollar sit lorem lorem.....")
addContacts(daksh, "Dakshith", "hi")
addContacts(ash, "~Ashwini💫", "lorem ipsum dollar sit lorem lorem.....")

let card = document.querySelectorAll(".card");
let openChat = document.querySelector(".open_chat")
let pfCard = document.querySelector(".profile_card")

let previousCard = null;

card.forEach((card, index) => {
    card.addEventListener("click", () => {
        // Remove background color from the previously clicked card
        if (previousCard !== null) {
            previousCard.style.backgroundColor = ""; // Reset to default
        }
        openChat.classList.add("block")

        // Add background color to the clicked card
        card.style.backgroundColor = "#202c33";

        // Set the current card as the previously clicked card
        previousCard = card;
    });
});

document.addEventListener("keydown", function (event) {
    // Check if the pressed key is the "Escape" key
    if (event.key === "Escape") {
        openChat.classList.remove("block")
    }
});

let inp = document.querySelector(".msg_box");
let send = document.querySelector(".sendbtn")
let mic = document.querySelector(".microphone")

inp.addEventListener("input", () => {
    if (inp.value !== "") {
        mic.style.display = "none";
        send.style.display = "block"
    }
    else {
        mic.style.display = "block";
        send.style.display = "none"
    }
})

// function for capturing current time
function CR() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    // Determine whether it's AM or PM
    const period = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    // 0 should be converted to 12 for 12-hour format
    hours = hours % 12 || 12;

    // Add leading zeros if hours, minutes, or seconds are less than 10
    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;
    console.log(formattedTime);

    return formattedTime;
}

// functions for sending message
let chats_box = document.querySelector(".chats_box");

function sendMessage(messg) {
    let msgCrad = document.createElement('div');
    msgCrad.classList.add('msgCard');

    let msgContent = document.createElement('span');
    let msgTime = document.createElement('span');
    let msgAck = document.createElement('span'); /* this is pending  */
    let stats = document.createElement('span');
    stats.classList.add('stats');
    msgAck.classList.add('msgAck');
    msgTime.classList.add('msgTime')

    msgContent.innerText = messg
    msgTime.innerText = CR();
    msgAck.innerHTML = `<svg viewBox="0 0 16 11" height="11" width="16" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>msg-dblcheck</title><path d="M11.0714 0.652832C10.991 0.585124 10.8894 0.55127 10.7667 0.55127C10.6186 0.55127 10.4916 0.610514 10.3858 0.729004L4.19688 8.36523L1.79112 6.09277C1.7488 6.04622 1.69802 6.01025 1.63877 5.98486C1.57953 5.95947 1.51817 5.94678 1.45469 5.94678C1.32351 5.94678 1.20925 5.99544 1.11192 6.09277L0.800883 6.40381C0.707784 6.49268 0.661235 6.60482 0.661235 6.74023C0.661235 6.87565 0.707784 6.98991 0.800883 7.08301L3.79698 10.0791C3.94509 10.2145 4.11224 10.2822 4.29844 10.2822C4.40424 10.2822 4.5058 10.259 4.60313 10.2124C4.70046 10.1659 4.78086 10.1003 4.84434 10.0156L11.4903 1.59863C11.5623 1.5013 11.5982 1.40186 11.5982 1.30029C11.5982 1.14372 11.5348 1.01888 11.4078 0.925781L11.0714 0.652832ZM8.6212 8.32715C8.43077 8.20866 8.2488 8.09017 8.0753 7.97168C7.99489 7.89128 7.8891 7.85107 7.75791 7.85107C7.6098 7.85107 7.4892 7.90397 7.3961 8.00977L7.10411 8.33984C7.01947 8.43717 6.97715 8.54508 6.97715 8.66357C6.97715 8.79476 7.0237 8.90902 7.1168 9.00635L8.1959 10.0791C8.33132 10.2145 8.49636 10.2822 8.69102 10.2822C8.79681 10.2822 8.89838 10.259 8.99571 10.2124C9.09304 10.1659 9.17556 10.1003 9.24327 10.0156L15.8639 1.62402C15.9358 1.53939 15.9718 1.43994 15.9718 1.32568C15.9718 1.1818 15.9125 1.05697 15.794 0.951172L15.4386 0.678223C15.3582 0.610514 15.2587 0.57666 15.1402 0.57666C14.9964 0.57666 14.8715 0.635905 14.7657 0.754395L8.6212 8.32715Z" fill="currentColor"></path></svg>`

    stats.appendChild(msgTime)
    stats.appendChild(msgAck)

    msgCrad.appendChild(msgContent);
    msgContent.appendChild(stats);
    chats_box.appendChild(msgCrad);

    setTimeout(() => {
        msgAck.style.color = "#4eb8e2"
    }, 1000);

}


send.addEventListener("click", () => {
    let messg = inp.value;
    if (messg !== "") {
        sendMessage(messg)
        respondToMessage(messg)
        inp.value = ""
        mic.style.display = "block";
        send.style.display = "none"
    }
})

document.addEventListener("keydown", function (event) {
    // Check if the pressed key is the "Enter" key
    if (event.key === "Enter") {
        let messg = inp.value;
        if (messg !== "") {
            sendMessage(messg)
            respondToMessage(messg)
            inp.value = ""
            mic.style.display = "block";
            send.style.display = "none"
        }
    }
});

// chatbot
let reply = document.querySelector('.reply');
function appendMessage(response) {

    let msgCrad = document.createElement('div');
    msgCrad.classList.add('msgCard');

    let msgContent = document.createElement('span');
    let msgTime = document.createElement('span');
    let msgAck = document.createElement('span'); /* this is pending  */
    let stats = document.createElement('span');
    stats.classList.add('stats');
    msgAck.classList.add('msgAck');
    msgTime.classList.add('msgTime');

    msgContent.innerText = response
    msgTime.innerText = CR();

    stats.appendChild(msgTime)

    msgCrad.appendChild(msgContent);
    msgContent.appendChild(stats);
    // msgTime.appendChild(msgAck)

    reply.appendChild(msgCrad);
}

function respondToMessage(messg) {
    let response;

    if (messg.includes('kya kar rahi ho')) {
        response = "kuch nahi bas so rahi thi.";
    } else if (messg.includes('oyee')) {
        response = "kya hai"
    } else if (messg.includes('kya haal hai')) {
        response = "masth"
    } else if (messg.includes('i wanna say something')) {
        response = "ha tell whats that"
    } else if (messg.includes('how are you')) {
        response = "I'm fine, what about you";
    } else if (messg.includes('i love you')) {
        response = 'i love you too'
    } else if (messg.includes('had lunch')) {
        response = "Not yet";
    } else if (messg.includes('ooo') || messg.includes('ok') || messg.includes('achcha') || messg.includes('iam good') || messg.includes('sachchi')) {
        response = "ha"
    } else if (messg.includes('good morning')) {
        response = "very good morning"
    } else if (messg.includes('hi') || messg.includes('hello')) {
        response = "Hello!";
    } else {
        response = "I'm sorry, I didn't understand that.";
    }

    setTimeout(() => {
        appendMessage(response);
    }, 2000);

}
