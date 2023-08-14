document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const monthYear = document.getElementById("monthYear");
  const datesContainer = document.querySelector(".dates");

  let currentDate = new Date();

  function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const monthYearString = new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric"
    }).format(currentDate);

    monthYearLabel.textContent = monthYearString;
    monthYear.textContent = monthYearString;

    datesContainer.innerHTML = "";

    for (let i = 0; i < firstDay; i++) {
      const emptyDate = document.createElement("div");
      datesContainer.appendChild(emptyDate);
    }

    for (let i = 1; i <= lastDate; i++) {
      const date = document.createElement("div");
      date.textContent = i;
      date.addEventListener("click", selectDate);

      if (currentDate.getDate() === i) {
        date.classList.add("selected");
      }

      datesContainer.appendChild(date);
    }
  }

  function selectDate(event) {
    const selectedDate = event.target;
    const selectedDates = document.querySelectorAll(".selected");

    selectedDates.forEach(date => {
      date.classList.remove("selected");
    });

    selectedDate.classList.add("selected");

    const selectedDateLabel = document.getElementById("selectedDateLabel");
    selectedDateLabel.textContent = selectedDate.textContent;
  }

  prevBtn.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });

  nextBtn.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });

  renderCalendar();
});


//Guest selector

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");
const fcount = document.getElementById("fcount");
const fccount = document.getElementById("fccount");
const slacount = document.getElementById("slacount");
const slccount = document.getElementById("slccount");
const infantcount = document.getElementById("infantcount");
const ffcount = document.querySelector(".ffcount");
const ffccount = document.querySelector(".ffccount");
const sslacount = document.querySelector(".sslacount");
const sslccount = document.querySelector(".sslccount");
const payble = document.getElementById("payble");


let a = 1;
let b = 10;
let c = 5;
let d = 4;
let e = 2;

//adding event listner
plus.addEventListener("click", () => {
  a++;
  b += 10;
  console.log(a);
  num.innerText = a;
  fcount.innerText = a;
  ffcount.innerText = "$" + b;
  calculateTotalPrice();

})

minus.addEventListener("click", () => {
  if (a > 1) {
    a--;
    b -= 10;
    console.log(a);
    num.innerText = a;
    fcount.innerText = a;
    ffcount.innerText = "$" + b;
    calculateTotalPrice();
  }
})

const plus2 = document.querySelector(".plusa");
const minus2 = document.querySelector(".minusa");
const num2 = document.querySelector(".numa");


let aa = 1;


plus2.addEventListener("click", () => {
  aa++;
  c += 5;
  console.log(aa);
  num2.innerText = aa;
  fccount.innerText = aa;
  ffccount.innerHTML = "$" + c;
  calculateTotalPrice();
})

minus2.addEventListener("click", () => {
  if (aa > 1) {
    aa--;
    c -= 5;
    console.log(aa);
    num2.innerText = aa;
    fcount.innerText = aa;
    ffccount.innerHTML = "$" + c;
    calculateTotalPrice();
  }
})


const plus3 = document.querySelector(".plusb");
const minus3 = document.querySelector(".minusb");
const num3 = document.querySelector(".numb");


let aaa = 1;


plus3.addEventListener("click", () => {
  aaa++;
  d += 4;
  console.log(aaa);
  num3.innerText = aaa;
  slacount.innerText = aaa;
  sslacount.innerHTML = "$" + d;
  calculateTotalPrice();
})

minus3.addEventListener("click", () => {
  if (aaa > 1) {
    aaa--;
    d -= 4;
    console.log(aaa);
    num3.innerText = aaa;
    slacount.innerText = aaa;
    sslacount.innerHTML = "$" + d;
    calculateTotalPrice();
  }
})


const plus4 = document.querySelector(".plusc");
const minus4 = document.querySelector(".minusc");
const num4 = document.querySelector(".numc");


let aaaa = 1;

plus4.addEventListener("click", () => {
  aaaa++;
  e += 2;
  console.log(aaaa);
  num4.innerText = aaaa;
  slccount.innerText = aaaa;
  sslccount.innerHTML = "$" + e;
  calculateTotalPrice();
})

minus4.addEventListener("click", () => {
  if (aaaa > 1) {
    aaaa--;
    e += 2;
    console.log(aaaa);
    num4.innerText = aaaa;
    slccount.innerText = aaaa;
    sslccount.innerHTML = "$" + e;
    calculateTotalPrice();
  }
})


const plus5 = document.querySelector(".plusd");
const minus5 = document.querySelector(".minusd");
const num5 = document.querySelector(".numd");


let aaaaa = 1;


plus5.addEventListener("click", () => {
  aaaaa++;
  console.log(aaaaa);
  num5.innerText = aaaaa;
  infantcount.innerText = aaaaa;
})

minus5.addEventListener("click", () => {
  if (aaaaa > 1) {
    aaaaa--;
    console.log(aaaaa);
    num5.innerText = aaaaa;
    infantcount.innerText = aaaaa;
  }
})

function calculateTotalPrice() {
  const ffcountValue = parseFloat(ffcount.textContent.substring(1));
  const ffccountValue = parseFloat(ffccount.textContent.substring(1));
  const sslacountValue = parseFloat(sslacount.textContent.substring(1));
  const sslccountValue = parseFloat(sslccount.textContent.substring(1));

  const total = ffcountValue + ffccountValue + sslacountValue + sslccountValue;
  payble.textContent = "$" + total.toFixed(2);
}

calculateTotalPrice();


//duration

const timeout = document.getElementById("timeout");

const timeSlots = [
  "07:00 AM - 08.00 AM",
  "08:00 AM - 09.00 AM",
  "09:00 AM - 10.00 AM",
  "10:00 AM - 11.00 AM",
  "11:00 AM - 12.00 PM peak",
  "12:00 PM - 01.00 PM",
  "01:00 PM - 02.00 PM",
  "02:00 PM - 03.00 PM",
  "03:00 PM - 04.00 PM",
  "04.00 PM - 05.00 PM",
  "05.00 PM - 06.00 PM peak",
];

const timeSlotsDropdown = document.getElementById("timeSlots");


timeSlots.forEach(slot => {
  const option = document.createElement("option");
  option.text = slot;
  timeSlotsDropdown.add(option);

});


timeSlotsDropdown.addEventListener("change", function () {
  const selectedOption = timeSlotsDropdown.options[timeSlotsDropdown.selectedIndex].text;
  selectedTimeLabel.textContent = selectedOption;
});


// Function to save labels to local storage
function saveLabels() {

  localStorage.setItem('selectedDateLabel', document.getElementById('selectedDateLabel').innerText);
  localStorage.setItem('monthYearLabel', document.getElementById('monthYearLabel').innerText);
  localStorage.setItem('selectedTimeLabel', document.getElementById('selectedTimeLabel').innerText);



  localStorage.setItem('fcount', document.getElementById('fcount').innerText);
  localStorage.setItem('ffcount', document.getElementById('value1').innerText);

  
  localStorage.setItem('fccount', document.getElementById('fccount').innerText);
  localStorage.setItem('ffccount', document.getElementById('value2').innerText);

  
  localStorage.setItem('slacount', document.getElementById('slacount').innerText);
  localStorage.setItem('sslacount', document.getElementById('value3').innerText);

  localStorage.setItem('slccount', document.getElementById('slccount').innerText);
  localStorage.setItem('sslccount', document.getElementById('value4').innerText);


  localStorage.setItem('infantcount', document.getElementById('infantcount').innerText);
  localStorage.setItem('payble', document.getElementById('payble').innerText);


  

            
}

// Attach this function to the button click event or any suitable event

document.querySelector('.btn7').addEventListener('click',saveLabels);



