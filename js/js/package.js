//adding comma saperator for trek price
$(document).ready(function () {
var main_value = document.getElementById("mainprice").innerHTML;
document.getElementById("mainprice").innerHTML = main_value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
document.getElementById("header_price").innerHTML = main_value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
document.getElementById("bottom_price").innerHTML = main_value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

$(document).ready(function () {
  $("#corona_rate").on("click", function (event) {
    $("#mainprice_without_addOn").html("<?php echo $Trek_Cost ?>");
    $("#gst_msg").html("per person +5% GST");
    document.getElementById("mainprice_without_addOn").innerHTML = main_value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  });
});


$(function () {
  $("#T_One").change(function () {
    if ($(this).is(":checked")) {
      $("#T_two").prop("checked", true);
    } else {
      $("#T_two").prop("checked", false);
    }
  });
  $("#R_One").change(function () {
    if ($(this).is(":checked")) {
      $("#R_two").prop("checked", true);
    } else {
      $("#R_two").prop("checked", false);
    }
  });
  $("#B_One").change(function () {
    if ($(this).is(":checked")) {
      $("#B_two").prop("checked", true);
    } else {
      $("#B_two").prop("checked", false);
    }
  });
  $("#Z_One").change(function () {
    if ($(this).is(":checked")) {
      $("#Z_two").prop("checked", true);
    } else {
      $("#Z_two").prop("checked", false);
    }
  });
});
//add on cal

function addonscalculator() {
  var transportAddOn = document.getElementById("T_One");
  var rentalAddOn = document.getElementById("R_One");
  var BackAddOn = document.getElementById("B_One");
  var Zipline = document.getElementById("Z_One");

  if (transportAddOn.checked == true) {
    var transport_value = document.getElementById("T_One").value.replace(/[a-zA-Z/()]/g, "");
  } else {
    var transport_value = 0;
  }

  if (rentalAddOn.checked == true) {
    var rental_value = document.getElementById("R_One").value.replace(/[a-zA-Z/()]/g, "");
  } else {
    var rental_value = 0;
  }

  if (BackAddOn.checked == true) {
    var Back_value = document.getElementById("B_One").value.replace(/[a-zA-Z/()]/g, "");
  } else {
    var Back_value = 0;
  }

  if (Zipline.checked == true) {
    var Zipline_value = document.getElementById("Z_One").value.replace(/[a-zA-Z/()]/g, "");
  } else {
    var Zipline_value = 0;
  }

  var main_value = document.getElementById("mainprice_without_addOn").value;
  main_value = main_value.replace(/[a-zA-Z/()]/g, "");
  var p =parseFloat(main_value) + parseFloat(transport_value) + parseFloat(rental_value) + parseFloat(Back_value) + parseFloat(Zipline_value);
  document.getElementById("addOnResult").value = p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("mainprice").innerHTML = document.getElementById("addOnResult").value;
  
}

//SweetAlert2 for package
$(document).ready(function () {
  $("#package_lead_form,#package_lead_form1").on("submit", function (event) {
    event.preventDefault();
    var leadName = $("#leadInputName").val();
    var leadContact = $("#leadInputContact").val();
    $("#package_lead_form .package-btn,#package_lead_form1  .package-btn").html('wait...')
   
    $.ajax({
      url: "Package-Submission.php",
      method: "POST",
      data: new FormData(this),
      contentType: false,
      processData: false,
      success: function (data) {

        $("#package_lead_form .package-btn,#package_lead_form1 .package-btn").html('Send Me')
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        });

        if (leadName != "" && leadContact != "") {
          Toast.fire({
            icon: "success",
            title: data,
          });
        } else {
          Toast.fire({
            icon: "error",
            title: "Please fill your detail first!",
          });
        }
      },
    });
    $("#package_lead_form #leadInputName ,#package_lead_form1 #leadInputName").val("");
    $("#package_lead_form #leadInputContact ,#package_lead_form1 #leadInputContact").val("");
  });
});
//SweetAlert2 for package end


jQuery.event.special.touchstart = {
  setup: function (_, ns, handle) {
    if (ns.includes("noPreventDefault")) {
      this.addEventListener("touchstart", handle, { passive: false });
    } else {
      this.addEventListener("touchstart", handle, { passive: true });
    }
  },
};
jQuery.event.special.touchmove = {
  setup: function (_, ns, handle) {
    if (ns.includes("noPreventDefault")) {
      this.addEventListener("touchmove", handle, { passive: false });
    } else {
      this.addEventListener("touchmove", handle, { passive: true });
    }
  },
};


$(document).ready(function(){     
  
  if (window.matchMedia("(min-width: 992px)").matches) {
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 1100) {
            $('.bottom-tab').hide();  
            $('#after_scroll_nav_bar').show();
            $('#main_nav_bar').hide();
  
        } else {
          $('.bottom-tab').show(); 
          $('#after_scroll_nav_bar').hide();
          $('#main_nav_bar').show();
        }
    });

    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 1000) {
            $('#have_any_quary_box').show();
        } else {
          $('#have_any_quary_box').hide();
        }
    });
  }

  if (window.matchMedia("(max-width: 991px)").matches) {
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 1500) {
            $('.bottom-tab').hide();  
            $('#after_scroll_nav_bar').show();
            $('#main_nav_bar').hide();
  
        } else {
          $('.bottom-tab').show(); 
          $('#after_scroll_nav_bar').hide();
          $('#main_nav_bar').show();
        }
    });
  }

});




$(document).ready(function() {
	//// Prevent closing from click inside dropdown
    $(document).on('click', '.dropdown-menu', function (e) {
      e.stopPropagation();
    });
    // make it as accordion for smaller screens
    if ($(window).width() < 992) {
	  	$('.dropdown-menu a').click(function(e){
	  		e.preventDefault();
	        if($(this).next('.submenu').length){
	        	$(this).next('.submenu').toggle();
	        }
	        $('.dropdown').on('hide.bs.dropdown', function () {
			   $(this).find('.submenu').hide();
			})
	  	});
	}
	
});


// copy price to diffrent location

    $(document).ready(function () {

        function onpricechange() {
            //Since you have JQuery, why aren't you using it?
            var mainprice = $('#mainprice').html();
            var header_price = $('#header_price');
            var bottom_price = $('#bottom_price');
            document.getElementById("header_price").innerHTML = mainprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            document.getElementById("bottom_price").innerHTML = mainprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        $('#mainprice').bind('DOMSubtreeModified', function(){
          console.log('changed');
          onpricechange();
        });
    });


// package tab instances
    $('.OVERVIEW-ITINERARY-tab').on('shown.bs.tab', function(event) {
      $(".top-tab .nav-link").removeClass('active');
      $(".bottom-tab .nav-link").removeClass('active');
      $(".OVERVIEW-ITINERARY-tab").addClass('active');
      $('html, body').animate({scrollTop: $(this.hash).offset().top - 200}, 1000);
    });
    $('.Things-To-Carry-tab').on('shown.bs.tab', function(event) {
      $(".top-tab .nav-link").removeClass('active');
      $(".bottom-tab .nav-link").removeClass('active');
      $(".Things-To-Carry-tab").addClass('active');
      $('html, body').animate({scrollTop: $(this.hash).offset().top - 200}, 1000);
    });
    $('.SAFETY-SECURITY-tab').on('shown.bs.tab', function(event) {
      $(".top-tab .nav-link").removeClass('active');
      $(".bottom-tab .nav-link").removeClass('active');
      $(".SAFETY-SECURITY-tab").addClass('active');
      $('html, body').animate({scrollTop: $(this.hash).offset().top - 200}, 1000);
    });
    $('.FITNESS-TIPS-tab').on('shown.bs.tab', function(event) {
      $(".top-tab .nav-link").removeClass('active');
      $(".bottom-tab .nav-link").removeClass('active');
      $(".FITNESS-TIPS-tab").addClass('active');
      $('html, body').animate({scrollTop: $(this.hash).offset().top - 200}, 1000);
    });
    $('.FEE-POLICY-tab').on('shown.bs.tab', function(event) {
      $(".top-tab .nav-link").removeClass('active');
      $(".bottom-tab .nav-link").removeClass('active');
      $(".FEE-POLICY-tab").addClass('active');
      $('html, body').animate({scrollTop: $(this.hash).offset().top - 200}, 1000);
    });
    $('.FAQ-tab').on('shown.bs.tab', function(event) {
      $(".top-tab .nav-link").removeClass('active');
      $(".bottom-tab .nav-link").removeClass('active');
      $(".FAQ-tab").addClass('active');
      $('html, body').animate({scrollTop: $(this.hash).offset().top - 200}, 1000);
     // var elmnt = document.getElementById("custom-content-below-tabContent");
      //elmnt.scrollIntoView();
      
    });

//see more button js for package tour and landing
    $('.see_more_btn').click(function(e) {
      e.stopPropagation();
      $('.inclusion_detail_big_cards .col-lg-4 .card').css('height', 'auto');
    });

    $(document).click(function() {
      $('.inclusion_detail_big_cards .col-lg-4 .card').animate({
        'height': '460PX'
      })
    })
    //see more button js for package tour and landing end


    $(document).click(function() {
     /*change the price according to the dropedown */
     $('#private_tour_dropdown').change(function() {
      $("#mainprice").html($('#private_tour_dropdown :selected').val());
      $("#mainprice_without_addOn").val($('#private_tour_dropdown :selected').val());
      $("#T_One,#R_One,#B_One,#Z_One").prop("checked", false);
      
      var s = $('#pack_detail_card .top-mark').html();
      var sNew = s.replace(/[a-zA-Z%/()]/g, "");
      var mainprice = $('#private_tour_dropdown :selected').val();
      var base_price = parseInt((mainprice/(100-sNew))*100);

      $('#base_price').html(base_price);
      
    });

  })
