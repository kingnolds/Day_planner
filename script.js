// Add current day to top of page
var currentDay = $('#currentDay')
currentDay.text(moment().format('dddd, MMMM Do YYYY'))


// Change text input color based on current hour of day
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

// Save Input to local storage on Save button Click

var saveBtns = $('.saveBtn') 
saveBtns.each(function() {
    $(this).click(function(){
        var plan = $(this).parent().children('.time-input').val()
        console.log(plan);
        var planTime = $(this).parent().children('.time-input').data('time')
        localStorage.setItem(planTime, plan)
    })
})

// Fill saved information from local storage
timeField.each(function () {
    var timeData = $(this).data('time')
    var stored = localStorage.getItem(timeData)
    $(this).val(stored)
})