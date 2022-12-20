//app.js created by Lucas, Lai Sing Lau | 301198475 @ 20220601

$(document).ready(function () {

    //mobile menu control
    $('#mMenu').on('click', function () {
        $('header').toggleClass('active');
        $(this).find('svg').toggleClass('fa-bars');
        $(this).find('svg').toggleClass('fa-xmark');
    });

    //bootstrapForm submission
    let forms = document.querySelectorAll('.bootstrapForm')
    Array.prototype.slice.call(forms).forEach(function (form) {
            form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    } else {
                        let object = new FormData(form);
                        let result = JSON.stringify(Object.fromEntries(object.entries()));
                        let data = JSON.parse(result);
                        console.log(data)
                        console.log(data.subject)
                        
                        window.location.href = 'mailto:llau34@my.centennialcollege.ca?body=' + result + '&subject=' + data.subject + '&cc=' + data.email;
                }
            form.classList.add('was-validated')}, false)
            
        })
});