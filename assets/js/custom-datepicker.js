$(function () {
    moment.updateLocale('en', {
      weekdaysMin: ["S", "M", "T", "W", "T", "F", "S"]
    });
    $('#single').daterangepicker({
      "showDropdowns": true,
      singleDatePicker: true,
      "autoApply": true,
      locale: {
        format: 'DD-MMM-YY',
        direction: 'single-picker'
      },
      autoclose: true,
    });
    $('#single').val('');
    $('#single').attr("placeholder","Select");
    
    $('#single2').daterangepicker({
      "showDropdowns": true,
      singleDatePicker: true,
      "autoApply": true,
      locale: {
        format: 'DD-MMM-YY',
        direction: 'single-picker'
      },
      autoclose: true,
    });
  
    $('#single2').val('');
    $('#single2').attr("placeholder","Select");

    $('#singleTime').daterangepicker({
      singleDatePicker: true,
      "showDropdowns": true,
      "timePicker": true,
      "autoApply": true,
      locale: {
        format: 'ddd, DD-MMM-YY hh:mm A',
        direction: 'single-picker'
      },
      autoclose: true,
      "applyClass": "btn-primary",
      "cancelClass": "btn-secondary"
    });
  
    $('#range').daterangepicker({
      locale: {
        separator: " To ",
        format: 'DD-MMM-YY',
        direction: 'range-picker'
      },
      drops: 'up',
      opens:'left',
      "applyClass": "btn-primary",
      "cancelClass": "btn-secondary"
    });
  
  
  
    $('.timePicker a').click(function () {
      var updateTime = $(this).text();
      $(this).parents('.timePicker').find('input').val(updateTime);
              $(".timePicker a.active").removeClass("active"); 
              $(this).addClass('active');
    })
  
  
  });
      $(function() {
  $('input[name="datetimes"]').daterangepicker({
  timePicker: true,
          // timePicker24Hour: true,
          timePickerIncrement: 1,
          // timePickerSeconds: true,
          locale: {
              // format: 'ddd, DD-MMM-YY hh:mm A',
              format: 'hh:mm A',
              separator: ' To ',
          }
      }).on('show.daterangepicker', function (ev, picker) {
          picker.container.find(".calendar-table").hide();
      });
  });