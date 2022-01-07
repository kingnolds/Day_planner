// add time to top of page
var currentDay = $('#currentDay')
currentDay.text(moment().format('MMMM Do YYYY, h:mm:ss a'))
console.log('hello')

// change text input color based on hour of day
var timeField = $('.time-input')
timeField.each(function () {
    var timeData = $(this).data('time')
    var hour = 12 //moment().hours()
    if (timeData < hour) {
        $(this).addClass('past')
    } else if (timeData === hour) {
        $(this).addClass('present')
    } else {
        $(this).addClass('future')
    }
}) 

// input field

var saveBtns = $('.btn') 
saveBtns.each(function() {
    $(this).click(function(event){
        var plan = $(this).parent().siblings('.time-input').val()
        var planTime = $(this).parent().siblings('.time-input').data('time')
        localStorage.setItem(planTime, plan)
    })
})
