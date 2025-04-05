// let btn=document.querySelector("#btn")
// let content=document.querySelector("#content")
// let voice=document.querySelector("#voice")

// function speak(text){
//     let text_speak=new SpeechSynthesisUtterance(text)
//     text_speak.rate=1
//     text_speak.pitch=1
//     text_speak.volume=1
//     text_speak.lang="hi-GB"
//     window.speechSynthesis.speak(text_speak)
// }

// function wishMe(){
//     let day=new Date()
//     let hours=day.getHours()
//     if(hours>=0 && hours<12){
//         speak("Good Morning Sir")
//     }
//     else if(hours>=12 && hours <16){
//         speak("Good afternoon Sir")
//     }else{
//         speak("Good Evening Sir")
//     }
// }
// window.addEventListener('load',()=>{
//     wishMe()
// })
// let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
// let recognition =new speechRecognition()
// recognition.onresult=(event)=>{
//     let currentIndex=event.resultIndex
//     let transcript=event.results[currentIndex][0].transcript
//     content.innerText=transcript
//    takeCommand(transcript.toLowerCase())
// }

// btn.addEventListener("click",()=>{
//     recognition.start()
//     voice.style.display="block"
//     btn.style.display="none"
// })
// function takeCommand(message){
//    voice.style.display="none"
//     btn.style.display="flex"
//     if(message.includes("hello")||message.includes("hey")){
//         speak("hello sir,what can i help you?")
//     }
//     else if(message.includes("who are you")){
//         speak("i am virtual assistant ,created by Ayush Sir")
//     }else if(message.includes("open youtube")){
//         speak("opening youtube...")
//         window.open("https://youtube.com/","_blank")
//     }
//     else if(message.includes("open google")){
//         speak("opening google...")
//         window.open("https://google.com/","_blank")
//     }
//     else if(message.includes("open facebook")){
//         speak("opening facebook...")
//         window.open("https://facebook.com/","_blank")
//     }
//     else if(message.includes("open instagram")){
//         speak("opening instagram...")
//         window.open("https://instagram.com/","_blank")
//     }
//     else if(message.includes("open calculator")){
//         speak("opening calculator..")
//         window.open("calculator://")
//     }
//     else if(message.includes("open whatsapp")){
//         speak("opening whatsapp..")
//         window.open("whatsapp://")
//     }
//     else if(message.includes("time")){
//       let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
//       speak(time)
//     }
//     else if(message.includes("date")){
//         let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
//         speak(date)
//       }
//     else{
//         let finalText="this is what i found on internet regarding" + message.replace("shipra","") || message.replace("shifra","")
//         speak(finalText)
//         window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`,"_blank")
//     }
// }


let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
  let speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US"; // Better compatibility
  speech.rate = 1;
  speech.pitch = 1;
  speech.volume = 1;
  window.speechSynthesis.speak(speech);
}

function wishMe() {
  let hour = new Date().getHours();
  if (hour < 12) speak("Good Morning, how can I help you?");
  else if (hour < 18) speak("Good Afternoon, ready to assist you.");
  else speak("Good Evening, what would you like to do?");
}

window.addEventListener("load", wishMe);

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

recognition.onresult = function (event) {
  let transcript = event.results[event.resultIndex][0].transcript;
  content.innerText = transcript;
  takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
  recognition.start();
  voice.style.display = "block";
  btn.style.display = "none";
});

function takeCommand(msg) {
  voice.style.display = "none";
  btn.style.display = "flex";

  if (msg.includes("hello") || msg.includes("hey")) {
    speak("Hello! How can I help you?");
  } else if (msg.includes("who are you")) {
    speak("I'm Nyano, your virtual assistant created by Dnyanesh.");
  } else if (msg.includes("open youtube")) {
    speak("Opening YouTube...");
    window.open("https://youtube.com", "_blank");
  } else if (msg.includes("open google")) {
    speak("Opening Google...");
    window.open("https://google.com", "_blank");
  } else if (msg.includes("open facebook")) {
    speak("Opening Facebook...");
    window.open("https://facebook.com", "_blank");
  } else if (msg.includes("open instagram")) {
    speak("Opening Instagram...");
    window.open("https://instagram.com", "_blank");
  } else if (msg.includes("time")) {
    let time = new Date().toLocaleTimeString();
    speak(`Current time is ${time}`);
  } else if (msg.includes("date")) {
    let date = new Date().toDateString();
    speak(`Today is ${date}`);
  } else if (msg.includes("your creator") || msg.includes("made you")) {
    speak("I was created by Dnyanesh Pandurang Sontakke, a skilled developer.");
  } else {
    speak(`Here is what I found on the internet about ${msg}`);
    window.open(`https://www.google.com/search?q=${msg}`, "_blank");
  }
}
