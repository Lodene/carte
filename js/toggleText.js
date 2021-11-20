var status = "less";

function toggleText(nbr)
{
    var text1 = "Here is some text that I want added to the HTML file";
    var text2 = "Here is some text that I want added to the HTML fil";
    var text3 = "Here is some text that I want added to the HTML fi";
    var text4 = "Here is some text that I want added to the HTML f";

    if (status == "less") {
    	switch (nbr){
    		case 1:
    			document.getElementById("textArea1").innerHTML=text1;
                document.getElementById("textArea2").innerHTML="";
                document.getElementById("textArea3").innerHTML="";
                document.getElementById("textArea4").innerHTML="";
        		document.getElementById("toggleButton1").innerText = "En combien de temps vais-je recevoir ma carte ? ";
        		break;
        	case 2:
                document.getElementById("textArea1").innerHTML="";
        		document.getElementById("textArea2").innerHTML=text2;
                document.getElementById("textArea3").innerHTML="";
                document.getElementById("textArea4").innerHTML="";
        		document.getElementById("toggleButton2").innerText = "Combien coûte la carte ... ?";
        		break;
        	case 3:
                document.getElementById("textArea1").innerHTML="";
                document.getElementById("textArea2").innerHTML="";
        		document.getElementById("textArea3").innerHTML=text3;
                document.getElementById("textArea4").innerHTML="";
        		document.getElementById("toggleButton3").innerText = "Comment ça marche ?";
        		break;
        	case 4:
                document.getElementById("textArea1").innerHTML="";
                document.getElementById("textArea2").innerHTML="";
                document.getElementById("textArea3").innerHTML="";
        		document.getElementById("textArea4").innerHTML=text4;
        		document.getElementById("toggleButton4").innerText = "Quel est l'age limite pour profiter des avantages de la carte ?";
        		break;
    	}
        
        status = "more";
    } else if (status == "more") {
        switch (nbr){
    		case 1:
    			document.getElementById("textArea1").innerHTML="";
        		document.getElementById("toggleButton1").innerText = "En combien de temps vais-je recevoir ma carte ?";
        		break;
        	case 2:
        		document.getElementById("textArea2").innerHTML="";
        		document.getElementById("toggleButton2").innerText = "Combien coûte la carte ... ?";
        		break;
        	case 3:
        		document.getElementById("textArea3").innerHTML="";
        		document.getElementById("toggleButton3").innerText = "Comment ça marche ?";
        		break;
        	case 4:
        		document.getElementById("textArea4").innerHTML="";
        		document.getElementById("toggleButton4").innerText = "Quel est l'age limite pour profiter des avantages de la carte ?";
        		break;
    	}
        status = "less"
    }
}