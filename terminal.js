const input = document.getElementById("command");
const output = document.getElementById("output");

input.addEventListener("keydown", function(e){

    if(e.key !== "Enter") return;

    const cmd = input.value.toLowerCase();

    output.innerHTML += "<br>> " + cmd;

    if(cmd==="help"){
        output.innerHTML += "<br>Commands: ai, city, space, energy, science";
    }

    else if(cmd==="ai"){
        location.href="ai.html";
    }

    else if(cmd==="city"){
        location.href="city.html";
    }

    else if(cmd==="space"){
        location.href="space.html";
    }

    else if(cmd==="energy"){
        location.href="energy.html";
    }

    else if(cmd==="science"){
        location.href="science.html";
    }

    else{
        output.innerHTML += "<br>Unknown command.";
    }

    input.value="";

});
