const input = document.querySelectorAll("input");
const label = document.querySelectorAll("label small");
const output = document.querySelectorAll("main div span");
const error = document.querySelectorAll('.emptyerror')
const dayValue = document.querySelector(".day");
const monthValue = document.querySelector(".month");
const yearValue = document.querySelector(".year");
const button = document.querySelector(".button");
const day= document.querySelector('.spanday')
const month1 = document.querySelector('.spanmonth')
const year = document.querySelector('.spanyear')

const todayDate = new Date()
let todayday = todayDate.getDate()
let todayMonth = todayDate.getMonth() + 1
let todayYear = todayDate.getFullYear()
const month = [31,28,31,30,31,30,31,31,30,31,30,31]

button.addEventListener('click',()=>{

    let y = todayYear - Number(yearValue.value)
    let m = todayMonth - Number(monthValue.value)
    let d = todayday - Number(dayValue.value)
   
    if(d<0){
     m = m - 1
     d = d + month[Number(monthValue.value) - 1]
    }
    if(m<0){
     y = y -1
     m = m + 12
    }
    day.textContent = d
    month1.textContent = m
    year.textContent = y
    input.forEach(item=>item.style.border = '1.5px solid hsl(0, 0%, 86%)')
    label.forEach(item=>item.style.color = "hsl(0, 1%, 44%)")
  


 // validating input age
 if(!monthValue.value){
  error[1].textContent = 'This field is required'
  input[1].style.border = '1.5px solid red'
  label[1].style.color = "red"
  output.forEach(item=>item.innerText = "- -")
 }
 else if(monthValue.value > 12 || monthValue.value < 1){
  error[1].textContent ='Must be a valid month'
  input.forEach(item=>item.style.border = '1.5px solid red')
  label.forEach(item=>item.style.color = "red")
  output.forEach(item=>item.innerText = "- -")
 }
else{
  error[1].textContent = ''
  input[1].style.border = '1.5px solid hsl(0, 0%, 86%)'
  label[1].style.color = "hsl(0, 1%, 44%)"
}
 if(!dayValue.value){
  error[0].textContent ='This field is required'
  input[0].style.border = '1.5px solid red'
  label[0].style.color = "red"
  output.forEach(item=>item.innerText = "- -")
 }
 else if(dayValue.value > month[monthValue.value - 1] || dayValue.value < 1){
  error[0].textContent ='Must be a valid date'
  input.forEach(item=>item.style.border = '1.5px solid red')
  label.forEach(item=>item.style.color = "red")
  output.forEach(item=>item.innerText = "- -")
 }
 else{
  error[0].textContent = ''
  input[0].style.border = '1.5px solid hsl(0, 0%, 86%)'
  label[0].style.color = "hsl(0, 1%, 44%)"
}
 if(!yearValue.value){
  error[2].textContent ='This field is required'
  input[2].style.border = '1.5px solid red'
  label[2].style.color = "red"
  output.forEach(item=>item.innerText = "- -")
 }
 else if(yearValue.value > todayYear || new Date(yearValue.value,monthValue.value-1,dayValue.value)>todayDate){
  error[2].textContent ='Must be in the past'
  input.forEach(item=>item.style.border = '1.5px solid red')
  label.forEach(item=>item.style.color = "red")
  output.forEach(item=>item.innerText = "- -")
 }
 else{
  error[2].textContent = ''
  input[2].style.border = '1.5px solid hsl(0, 0%, 86%)'
  label[2].style.color = "hsl(0, 1%, 44%)"
}
})
output.forEach(item=>console.log(item.innerText))


