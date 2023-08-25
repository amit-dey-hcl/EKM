// var emp = [{
//   "e_name": 'Saket Kumar',
//   "e_id": '51448564',
//   "e_position": 'Project Manager',
//   "e_band": 'E3',
//   "e_du": 'HCLISD US DEL- NORAM2B-NORAM 2B-B1',
//   "e_loc": 'Noida',
//   },
//   {
//   "e_name": 'Bobin Kumar',
//   "e_id": '52448564',
//   "e_position": 'Project Manager',
//   "e_band": 'E3',
//   "e_du": 'HCLISD US DEL- NORAM2B-NORAM 2B-B1',
//   "e_loc": 'Noida',
//   },
//   {
//   "e_name": 'Amarnath Kumar',
//   "e_id": '53448564',
//   "e_position": 'Project Manager',
//   "e_band": 'E3',
//   "e_du": 'HCLISD US DEL- NORAM2B-NORAM 2B-B1',
//   "e_loc": 'Noida',
//   },
//   {
//   "e_name": 'Sanjeev Goel',
//   "e_id": '54448564',
//   "e_position": 'Project Manager',
//   "e_band": 'E3',
//   "e_du": 'HCLISD US DEL- NORAM2B-NORAM 2B-B1',
//   "e_loc": 'Noida',
//   }, {
//   "e_name": 'Supriya Kumari',
//   "e_id": '55448564',
//   "e_position": 'Project Manager',
//   "e_band": 'E3',
//   "e_du": 'HCLISD US DEL- NORAM2B-NORAM 2B-B1',
//   "e_loc": 'Noida',
//   }, {
//   "e_name": 'DEEPAK GUPTA',
//   "e_id": '56448564',
//   "e_position": 'Project Manager',
//   "e_band": 'E3',
//   "e_du": 'HCLISD US DEL- NORAM2B-NORAM 2B-B1',
//   "e_loc": 'Noida',
//   }, {
//   "e_name": 'Anupama Gupta',
//   "e_id": '57448564',
//   "e_position": 'Project Manager',
//   "e_band": 'E3',
//   "e_du": 'HCLISD US DEL- NORAM2B-NORAM 2B-B1',
//   "e_loc": 'Noida',
//   }
//   ]
  
//   var source = [{
//   "e_name": "Anupama Gupta",
//   "e_id": "51448564"
//   }, {
//   "e_name": "DEEPAK GUPTA",
//   "e_id": "51448564"
//   }]
  
  
//   var suggestions = new Bloodhound({
//   local: emp,
//   queryTokenizer: Bloodhound.tokenizers.whitespace,
//   datumTokenizer: Bloodhound.tokenizers.obj.whitespace('e_name'),
//   identify: function (obj) {
//   return obj.e_id
//   }
//   })
  
//   var field = $('.typeahead')
//   field.typeahead({
//   hint: true,
//   highlight: true,
//   minLength: 1
//   }, {
//   name: 'e_id',
//   highlight: true,
//   displayKey: function (item) {
//   return item.e_name + ' (' + item.e_id + ')'
//   },
//   source: suggestions.ttAdapter(),
//   templates: {
//   suggestion: function (data) {
//   return `
//   <div class="row autoEmprow"> 
//       <div class="img">
//           <img src="${data.e_img}" alt="" />
//       </div>
//       <div class="text">
//           <div class="col-8">
//               <span class="auto_Ellipses auto_dark"> 
//                   ${data.e_name}  
//               </span>
//           </div>  
//           <div class="col-4 text-right auto_dark"> 
//               ${data.e_id}
//           </div>  
//           <div class="col-8">  
              
//               ${data.e_position}
//           </div> 
//           <div class="col-4 text-right"> 
//           ${data.e_band}
//           </div> 
//           <div class="col-8">  
              
//               ${data.e_du}
//           </div> 
//           <div class="col-4 text-right"> 
//               ${data.e_loc}
//           </div> 
//       </div>
//   </div>
//   `;
//   }
//   }
//   })


// $("#tile-1 .nav-tabs a").click(function() {
//   var position = $(this).parent().position();
//   var width = $(this).parent().width();
//     $("#tile-1 .slider").css({"left":+ position.left,"width":width});
// });
// var actWidth = $("#tile-1 .nav-tabs").find(".active").parent("li").width();
// var actPosition = $("#tile-1 .nav-tabs .active").position();
// $("#tile-1 .slider").css({"left":+ actPosition.left,"width": actWidth});


 
  $(document).ready(function () {
    $(".nameCellElli").on( "mouseenter", function() {
    var $this = $(this);
    if (this.offsetWidth < this.scrollWidth && !$this.attr('title')) {
      $this.tooltip({
        title: $this.text(),
        placement: "top",
        container:'body',
      });
      $this.tooltip('show');
    }
    });
  });


// image file uploader
var btnUpload = $("#upload_file"),
	btnOuter = $(".button_outer");
	btnUpload.on("change", function(e){
		var ext = btnUpload.val().split('.').pop().toLowerCase();
		if($.inArray(ext, ['gif','png','jpg','jpeg']) == -1) {
			$(".error_msg").text("Not an Image...");
		} else {
			$(".error_msg").text("");
			btnOuter.addClass("file_uploading");
			setTimeout(function(){
				// btnOuter.addClass("file_uploaded");
			},3000);
			var uploadedFile = URL.createObjectURL(e.target.files[0]);
			var fileName = $(this).val().split('\\').pop();
			setTimeout(function(){
				$("#uploaded_view").append('<strong>'+ fileName +'</strong><div class="upload-profile"><img src="'+uploadedFile+'" /></div>').addClass("show");
			},3500);
		}
	});
	$(".file_remove").on("click", function(e){
		$("#uploaded_view").removeClass("show");
		$("#uploaded_view").find("img").remove();
		$("#uploaded_view").find("strong").remove();
		btnOuter.removeClass("file_uploading");
		btnOuter.removeClass("file_uploaded");
	});


var tabs = document.getElementsByClassName('nav-item');
Array.prototype.forEach.call(tabs, function(tab) {
	tab.addEventListener('click', setActiveClass);
});

function setActiveClass(evt) {
	Array.prototype.forEach.call(tabs, function(tab) {
		tab.classList.remove('active');
	});
	
	evt.currentTarget.classList.add('active');
}



// ripple btn js here

$(document).ready(function(){
	$(document).on("mousedown", ".btn-ripple" , function(e){     
        var target = e.target;
        var rect = target.getBoundingClientRect();
        var ripple = target.querySelector('.ripple');
        $(ripple).remove();
        ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
        target.appendChild(ripple);
        var top = e.pageY - rect.top - ripple.offsetHeight / 2 -  document.body.scrollTop;
        var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
        ripple.style.top = top + 'px';
        ripple.style.left = left + 'px';
        return false;
    });
});

// dataTable tr hover js here 
$(document).on({
    mouseenter: function () {
    trIndex = $(this).index()+1;
    $("table.dataTable").each(function(index) {
    $(this).find("tr:eq("+trIndex+")").addClass("hover")
    });
    },
    mouseleave: function () {
    trIndex = $(this).index()+1;
    $("table.dataTable").each(function(index) {
    $(this).find("tr:eq("+trIndex+")").removeClass("hover")
    });
    }
}, ".dataTables_wrapper tr");

//\\\\\\ select dropdonw
$('.selectpicker').selectpicker({dropupAuto: false});

//\\\\\\\ custom input type file uploader
var $fileInput = $('.file-input');
var $droparea = $('.file-drop-area');

// highlight drag area
$fileInput.on('dragenter focus click', function() {
  $droparea.addClass('is-active');
});

// back to normal state
$fileInput.on('dragleave blur drop', function() {
  $droparea.removeClass('is-active');
});


// change inner text
$fileInput.on('change', function() {
  var filesCount = $(this)[0].files.length;
  var $textContainer = $(this).prev();

  if (filesCount === 1) {
    // if single file is selected, show file name
    var fileName = $(this).val().split('\\').pop();
    $textContainer.text(fileName);
  } else {
    // otherwise show number of files
    $textContainer.text(filesCount + ' files selected');
  }
});
//\\\\\\\ custom input type file uploader


// list group active li 
$("#activeList").on('click','li',function(){
  // remove classname 'active' from all li who already has classname 'active'
  $("#activeList li.active").removeClass("active"); 
  // adding classname 'active' to current click li 
  $(this).addClass("active"); 
});


// // password show onclick eye icon
// const togglePassword = document.querySelector("#togglePassword");
// const password = document.querySelector("#password");

// togglePassword.addEventListener("click", function () {
//     // toggle the type attribute
//     const type = password.getAttribute("type") === "password" ? "text" : "password";
//     password.setAttribute("type", type);
    
//     // toggle the icon
//     this.classList.toggle("bi-eye");
// });

// prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});

