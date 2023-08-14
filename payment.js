
document.querySelector('.card-number-input').oninput = () =>{
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
}

document.querySelector('.card-holder-input').oninput = () =>{
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () =>{
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () =>{
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}



function saveLabels() {

    localStorage.setItem('card-number-input', document.getElementById('card-number-input').value);
    localStorage.setItem('card-holder-input', document.getElementById('card-holder-input').value);
    localStorage.setItem('month-input', document.getElementById('month-input').value);
    localStorage.setItem('year-input', document.getElementById('year-input').value);
    localStorage.setItem('cvv-input', document.getElementById('cvv-input').value);
  
              
  }
  
  // Attach this function to the button click event or any suitable event
  
  document.querySelector('.btn7').addEventListener('click',saveLabels);
  
  