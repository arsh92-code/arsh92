function allowOnce() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function(stream) {
        alert('Microphone access allowed for this time.');
        // Use the stream for your needs and stop after one use
        stream.getTracks().forEach(track => track.stop());  // Stops the microphone after use
        closePopup();
    })
    .catch(function(err) {
        alert('Microphone access denied or not available.');
    });
}

function allowAlways() {
    alert('This feature is limited to allow one-time access only.');
}

function neverAllow() {
    alert('Microphone access denied.');
    closePopup();
}

function closePopup() {
    document.getElementById('permission-popup').style.display = 'none';
}

let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
 window.addEventListener('load',()=>{
     wishMe()
 })
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
})
function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir,what can i help you?")
    }
    else if(message.includes("who created you")){
        speak("i am virtual assistant ,created by Arsh Sir")
    }else if(message.includes("i love u")){
            speak("i love you 2 ")
    }else if(message.includes("khana hua")){
                speak("haa khaliya aur tum khaye ki nhi ")
    }else if(message.includes("how r u")){
        speak("i am good and you ")
}
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/",)
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("open wikipedia")){
        speak("opening wikipedia...")
        window.open("https://www.wikipedia.org/","_blank")
    }
    
    else if(message.includes("open email")){
        speak("opening email...")
        window.open("https://mail.google.com/mail/u/0/#inbox","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://")
    } 
    else if(message.includes("open laptop")){
        speak("opening laptop website...");
        window.open("https://www.laptopstore.com/", "_blank");
    }
    else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("shipra","") || message.replace("shifra","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`,"_blank")
    }
}
 