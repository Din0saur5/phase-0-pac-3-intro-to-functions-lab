toLowerCaseconsole.log()
function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();

}

function logShout(string){
    let stringShout = shout(string)
    console.log(`${stringShout}`)
}

function logWhisper(string){
    let stringWhisper = whisper(string)
    console.log(`${stringWhisper}`)

}

function sayHiToHeadphonedRoommate(string){
    if(string === "Let's have dinner together!"){        
        return "I would love to!"
    }
    if(string === string.toUpperCase()){      
        return "YES INDEED!"
    }
    if (string === string.toLowerCase()){
            return "I can't hear you!"
        }

    

}

