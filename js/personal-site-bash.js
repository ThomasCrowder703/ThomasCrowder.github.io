"use strict";

(function(){
        var languages = document.getElementsByTagName("li");
        var headers = document.getElementsByTagName("h2");
        var paragraphs = document.getElementById("firstParagraph");
        var bigButton = document.getElementById("button");
        var wordStyle = function () {
            for(var i = 0; i < languages.length; i++){
                languages[i].style.color = "white"
            }

            for (var i = 0; i < headers.length; i++) {
                headers[i].style.color = "white";
            }
            paragraphs.style.color = "white";
            document.body.style.backgroundColor = "#181818";

            bigButton.style.color = "#01f7ff"
            bigButton.style.border= " solid #01f7ff"
        }

        document.getElementById("button1").addEventListener("click",wordStyle)




})();



