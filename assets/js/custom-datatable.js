$(document).ready(function () {
  
  oTable = $('#badgeMaster').DataTable({
    //bFilter: true,  
    "ordering": false,
    "dom": 'tipl',
    "oLanguage": {
      "oPaginate": {
        "sNext": "<i class='aLeft'></i>",
        "sPrevious": "<i class='aRight'></i>"
      }
    },
    language: {
      sLengthMenu: "_MENU_"
    },
    drawCallback: function () {
      $('[data-toggle="popover"]').popover();
    }
  });
    oTable = $('#example').DataTable({
      //bFilter: true,  
      "ordering": false,
      "dom": 'tipl',
      "oLanguage": {
        "oPaginate": {
          "sNext": "<i class='aLeft'></i>",
          "sPrevious": "<i class='aRight'></i>"
        }
      },
      language: {
        sLengthMenu: "_MENU_"
      },
      drawCallback: function () {
        $('[data-toggle="popover"]').popover();
      }
    });
    oTable = $('#example1').DataTable({
      //bFilter: true,  
      "ordering": false,
      "dom": 'tipl',
      "oLanguage": {
        "oPaginate": {
          "sNext": "<i class='aLeft'></i>",
          "sPrevious": "<i class='aRight'></i>"
        }
      },
      language: {
        sLengthMenu: "_MENU_"
      },
      drawCallback: function () {
        $('[data-toggle="popover"]').popover();
      }
    });
  
  
    oTable2 = $('#example2').DataTable({
      //bFilter: true,  
      "ordering": false,
      "dom": 'tipl',
      "oLanguage": {
        "oPaginate": {
          "sNext": "<i class='aLeft'></i>",
          "sPrevious": "<i class='aRight'></i>"
        },
      },
      scrollX: true,
      fixedColumns: {
        leftColumns: 1,
        rightColumns: 1
      },
      language: {
        sLengthMenu: "_MENU_"
      },
      drawCallback: function () {
        $('[data-toggle="popover"]').popover();
      }
    });
  
  
    oTable3 = $('#example3').DataTable({
      //bFilter: true,  
      "ordering": false,
      container: 'body',
      "dom": 'tipl',
      "oLanguage": {
        "oPaginate": {
          "sNext": "<i class='aLeft'></i>",
          "sPrevious": "<i class='aRight'></i>"
        },
      },
      scrollX: true,
      fixedColumns: {
        leftColumns: 1,
        rightColumns: 1
      },
      language: {
        sLengthMenu: "_MENU_"
      },
      drawCallback: function () {
        $('[data-toggle="popover"]').popover();
      }
  
    });
  
  
    // $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    //     if (e.target.hash == '#code') {
    //         oTable2.columns.adjust().draw();
    //         oTable3.columns.adjust().draw()
    //     }
    // })
  
  
  });
  
  
  $(document).ready(function () {
              $('[data-bs-toggle="popover"]').popover({
                  placement: 'bottom'
              });
          });
          // Tooltip
          // var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
          // var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          //     return new bootstrap.Tooltip(tooltipTriggerEl)
          // })
  
          // $(document).ready(function () { 
          // 	var lastIdx = null; 
          // 	var table = $('#example2').DataTable(); 
          // 	$('#example2 tbody').on('mouseover', 'td', function () { 
          // 		var colIdx = table.cell(this).index().column; if (colIdx !== lastIdx) { 
          // 			$(table.cells().nodes()).removeClass('highlight'); 
          // 			$(table.column(colIdx).nodes()).addClass('highlight'); 
          // 		} }).on('mouseleave', function () { 
          // 			$(table.cells().nodes()).removeClass('highlight'); 
          // 		}); 
          // 	});
           $(document).on({
              mouseenter: function () {
              trIndex = $(this).index()+1;
                  $("#example3_wrapper table.dataTable").each(function(index) {
                      $(this).find("tr:eq("+trIndex+")").each(function(index) {
                      $(this).find("td").addClass("hover-blue");
                  });
              });
              },
              mouseleave: function () {
              trIndex = $(this).index()+1;
                  $("#example3_wrapper table.dataTable").each(function(index) {
                      $(this).find("tr:eq("+trIndex+")").each(function(index) {
                      $(this).find("td").removeClass("hover-blue");
                  });
              });
              }
          }, "#example3_wrapper tr");
  
          $(document).on({
              mouseenter: function () {
              trIndex = $(this).index()+1;
                  $("#example2_wrapper table.dataTable").each(function(index) {
                      $(this).find("tr:eq("+trIndex+")").each(function(index) {
                      $(this).find("td").addClass("hover-grey");
                  });
              });
              },
              mouseleave: function () {
              trIndex = $(this).index()+1;
                  $("#example2_wrapper table.dataTable").each(function(index) {
                      $(this).find("tr:eq("+trIndex+")").each(function(index) {
                      $(this).find("td").removeClass("hover-grey");
                  });
              });
              }
          }, "#example2_wrapper tr");
      
  
  