// JavaScript Document

function admissionSendMail(){
         
		 var name = $('#name').val();
		 var email = $('#email').val();
		 var position = $('#position').val();
		 var mobile =  $('#mobile').val();
		 var medium =  $('#medium').val();

		 if(name == ''){
		     alert('Please Enter Your Name');
			 $('#name').focus();
			 return;
		 }
		
		 if(mobile == '' || mobile.length < 10){
			 alert('Please Enter Your Contact Number');
			  $('#message').focus();
			 return;
		 }
		  if(email == ''){
			 alert('Please Enter Email');
			  $('#email').focus();
			 return;
		 } if(medium == ''){
			 alert('Please Select Medium You Spotted us');
			  $('#medium').focus();
			 return;
		 }
//    if(position == ''){
//        alert('Please Enter Email');
//        $('#position').focus();
//        return;
//    }
		 //add needed fields
		 
		 var details = {"name":name,"email":email,"medium":medium,"mobile":mobile,"position":position};
		 details = JSON.stringify(details);
		
		var URL = "/admissionMail.php";
		//ajax call for mail function
		$.ajax({
				url: URL,
				type: 'post',
				data: 'details='+details,
				success: function (data) {
				   alert('We Will Contact You Soon');
					//console.log()
					$('#name').val('');
		            $('#email').val('');
	                $('#medium').val('');
		            $('#mobile').val('');
		            $('#position').val('');
				},
				error: function (data) {
				   alert('Please Try Again');
				}
	
		});

}