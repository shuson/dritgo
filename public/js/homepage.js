$(function(){
	//date picker
    $('#dateFrom').datetimepicker();
    $('#dateTo').datetimepicker();
    $("#dateFrom").on("dp.change", function (e) {
        $('#dateTo').data("DateTimePicker").minDate(e.date);
    });
    $("#dateTo").on("dp.change", function (e) {
        $('#dateFrom').data("DateTimePicker").maxDate(e.date);
    });

    //search submit
    $("#find").click(function(){
        var result = ($("#inputDateFrom").val() && $("#inputDateTo").val()) || false;
        if(!result){
            $("#dateFrom").addClass("requiredErr");
            $("#dateTo").addClass("requiredErr");
        }else{
            $("#dateFrom").removeClass("requiredErr");
            $("#dateTo").removeClass("requiredErr");
        }
        
        return result;
    });
})