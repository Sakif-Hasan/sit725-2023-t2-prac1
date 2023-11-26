const clickMe = () => {
    alert("You have clicked this button")
}

$(document).ready(function () {
    $('#clickMeButton').click(() => {
        clickMe()
    })
})