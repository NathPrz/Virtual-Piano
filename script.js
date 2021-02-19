document.addEventListener("keydown",function (keydown){
    if (keydown.code == "KeyA"){
        let audio = new Audio("son/A.mp3");
        audio.play();
    }else if (keydown.code == "KeyW") {
        let audio = new Audio("son/W.mp3");
        audio.play();
    }else if (keydown.code == "KeyS"){
            let audio = new Audio("son/S.mp3");
            audio.play();
    }else if (keydown.code == "KeyE"){
        let audio = new Audio("son/E.mp3");
        audio.play();
    }else if (keydown.code == "KeyD"){
        let audio = new Audio("son/D.mp3");
        audio.play();
    }else if (keydown.code == "KeyF"){
        let audio = new Audio("son/F.mp3");
        audio.play();
    }else if (keydown.code == "KeyT"){
        let audio = new Audio("son/T.mp3");
        audio.play();
    }else if (keydown.code == "KeyG"){
        let audio = new Audio("son/G.mp3");
        audio.play();
    }else if (keydown.code == "KeyY"){
        let audio = new Audio("son/Y.mp3");
        audio.play();
    }else if (keydown.code == "KeyH"){
        let audio = new Audio("son/H.mp3");
        audio.play();
    }else if (keydown.code == "KeyU"){
        let audio = new Audio("son/U.mp3");
        audio.play();
    }else if (keydown.code == "KeyJ"){
        let audio = new Audio("son/J.mp3");
        audio.play();
    }else {
        alert("Unassigned Key");
    }
});

