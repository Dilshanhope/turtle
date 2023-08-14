// Function to load labels from local storage and display in the table
function loadLabels() {
   
    
        document.getElementById("selectedDateLabel").innerText = localStorage.getItem("selectedDateLabel");
        document.getElementById("monthYearLabel").innerText = localStorage.getItem("monthYearLabel");
        document.getElementById("selectedTimeLabel").innerText = localStorage.getItem("selectedTimeLabel");

        document.getElementById("newname").innerText = localStorage.getItem("fullName");

        document.getElementById("newnumber").innerText = localStorage.getItem("mobileNumber");

        document.getElementById("newemail").innerText = localStorage.getItem("email");

        



        document.getElementById("newname").innerText = localStorage.getItem("fullName");

        document.getElementById("newnumber").innerText = localStorage.getItem("mobileNumber");

        document.getElementById("newemail").innerText = localStorage.getItem("email");




        document.getElementById("fcount").innerText = localStorage.getItem("fcount");
        document.getElementById("valueone").innerText = localStorage.getItem("ffcount");

        document.getElementById("fccount").innerText = localStorage.getItem("fccount");
        document.getElementById("valuetwo").innerText = localStorage.getItem("ffccount");


        document.getElementById("slacount").innerText = localStorage.getItem("slacount");
        document.getElementById("valuethree").innerText = localStorage.getItem("sslacount");
        
        document.getElementById("slccount").innerText = localStorage.getItem("slccount");
        document.getElementById("valuefour").innerText = localStorage.getItem("sslccount");


        document.getElementById("infantcount").innerText = localStorage.getItem("infantcount");
        document.getElementById("payble").innerText = localStorage.getItem("payble");


    
}



// Load saved labels when the page loads
window.addEventListener('DOMContentLoaded', loadLabels);



