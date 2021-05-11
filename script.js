document.getElementById('submit').addEventListener('click', Activate)

let urage = 0
let urday = 'Noday'

function Activate () {
  urage = document.getElementById('userage').value
  urday = document.getElementById('userday').value

  urage = parseInt(urage)

  if ((urday === 'Saturday' || urday === 'Sunday') && (urage >= 0 && urage <= 100)) {
    document.getElementById('output').innerHTML = ' It is time to relax'
  } else if ((urday === 'Monday' || urday === 'Tuesday' || urday === 'Wensday' || urday === 'Thursday' || urday === 'Friday') && (urage >= 1 && urage <= 18)) {
    document.getElementById('output').innerHTML = ' It is time for school'
  } else {
    document.getElementById('output').innerHTML = ' It is time for work'
  }
}
