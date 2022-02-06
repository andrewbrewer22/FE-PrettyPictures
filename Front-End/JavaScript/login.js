var changeColor = true;

function randomColor() {
    if(changeColor)
    {
        var color = "red";

        x = Math.floor(Math.random() * 4);

        switch(x)
        {
            case 1: color = "blue"
            break;

            case 2: color = "green"
            break;

            case 3: color = "yellow"
            break;
        }
        document.getElementById("headerTag").style.color = color;

        
    }

    
}