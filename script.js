// add time to top of page
var currentDay = $('#currentDay')
currentDay.text(moment().format('dddd, MMMM Do YYYY'))
console.log('hello')

// change text input color based on hour of day
var timeField = $('.time-input')
timeField.each(function () {
    var timeData = $(this).data('time')
    var hour = moment().hours()
    if (timeData < hour) {
        $(this).addClass('past')
    } else if (timeData === hour) {
        $(this).addClass('present')
    } else {
        $(this).addClass('future')
    }
}) 

// input field

var saveBtns = $('.saveBtn') 
saveBtns.each(function() {
    $(this).click(function(){
        var plan = $(this).parent().children('.time-input').val()
        console.log(plan);
        var planTime = $(this).parent().children('.time-input').data('time')
        localStorage.setItem(planTime, plan)
    })
})

timeField.each(function () {
    var timeData = $(this).data('time')
    var stored = localStorage.getItem(timeData)
    $(this).val(stored)
})