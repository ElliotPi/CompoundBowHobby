$(document).ready(function () {
    $('#calculateBtn').click(function () {
        var hours = parseFloat($('#hours').val());

        if (!isNaN(hours) && hours > 0)
        {
            var hourlyRate = parseFloat($('#hourlyRate').val().replace('$', ''));
            var total = hours * hourlyRate;

            $('#total').val('$' + total.toFixed(2));
        }
        else
        {
            alert('Please enter a valid number of hours.');
        }
    });
});
