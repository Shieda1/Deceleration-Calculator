// https://calculator.swiftutors.com/deceleration-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const decelerationRadio = document.getElementById('decelerationRadio');
const initialVelocityRadio = document.getElementById('initialVelocityRadio');
const finalVelocityRadio = document.getElementById('finalVelocityRadio');
const timeRadio = document.getElementById('timeRadio');

let deceleration;
let initialVelocity = v1;
let finalVelocity = v2;
let time = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

decelerationRadio.addEventListener('click', function() {
  variable1.textContent = 'Initial Velocity (m/s)';
  variable2.textContent = 'Final Velocity (m/s)';
  variable3.textContent = 'Time (s)';
  initialVelocity = v1;
  finalVelocity = v2;
  time = v3;
  result.textContent = '';
});

initialVelocityRadio.addEventListener('click', function() {
  variable1.textContent = 'Deceleration (m/s²)';
  variable2.textContent = 'Final Velocity (m/s)';
  variable3.textContent = 'Time (s)';
  deceleration = v1;
  finalVelocity = v2;
  time = v3;
  result.textContent = '';
});

finalVelocityRadio.addEventListener('click', function() {
  variable1.textContent = 'Deceleration (m/s²)';
  variable2.textContent = 'Initial Velocity (m/s)';
  variable3.textContent = 'Time (s)';
  deceleration = v1;
  initialVelocity = v2;
  time = v3;
  result.textContent = '';
});

timeRadio.addEventListener('click', function() {
  variable1.textContent = 'Deceleration (m/s²)';
  variable2.textContent = 'Initial Velocity (m/s)';
  variable3.textContent = 'Final Velocity (m/s)';
  deceleration = v1;
  initialVelocity = v2;
  finalVelocity = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(decelerationRadio.checked)
    result.textContent = `Deceleration = ${computeDeceleration().toFixed(2)} m/s²`;

  else if(initialVelocityRadio.checked)
    result.textContent = `Initial Velocity = ${computeInitialVelocity().toFixed(2)} m/s`;

  else if(finalVelocityRadio.checked)
    result.textContent = `Final Velocity = ${computeFinalVelocity().toFixed(2)} m/s`;

  else if(timeRadio.checked)
    result.textContent = `Time = ${computeTime().toFixed(2)} s`;
})

// calculation

function computeDeceleration() {
  return (Number(finalVelocity.value) - Number(initialVelocity.value)) / Number(time.value);
}

function computeInitialVelocity() {
  return Number(finalVelocity.value) - (Number(deceleration.value) * Number(time.value));
}

function computeFinalVelocity() {
  return (Number(deceleration.value) * Number(time.value)) + Number(initialVelocity.value);
}

function computeTime() {
  return (Number(finalVelocity.value) - Number(initialVelocity.value)) / Number(deceleration.value);
}