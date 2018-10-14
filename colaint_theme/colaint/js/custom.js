$(document).ready(function(){

	$(window).scroll(function(){
		
		if(window.pageYOffset> 200){
			$('#sticky').show();
		}else{
			$('#sticky').hide();
		}
	});
	
	$('.meet-btn').each(function(){
		$(this).bind('click',function(e){
			  var target = "#" + this.getAttribute('data-target');
				$('html, body').animate({
					scrollTop: ($(target).offset().top) -50
				}, 2000);
		});
	
	});
	
	
		$('#discover').bind('click',function(e){
			  var target = "#" + this.getAttribute('data-target');
				$('html, body').animate({
					scrollTop: ($(target).offset().top) -50
				}, 2000);
		});
	

	
	 $('.tagline').addClass('slideDown');
	
	
	//forms
	
	$('#resume_file').change(function(){
		var uploadFileType = $('#resume_file').val();
		var ext = uploadFileType.split('.').pop();
		if(ext=="pdf" || ext=="docx" || ext=="doc"){
			if($('.modal-body').find('h2').length > 0){
				$('.modal-body').find('h2').remove();
			}
			if(this.files[0].size > 8388608 ){
				$('.modal-body').find('.row:first-child').before('<h2 class="upload-error">Sorry,File size is bigger than 8mb</h2>');
				$('#resume_file').val("");
			}
		}else{
			if($('.modal-body').find('h2').length > 0){
				$('.modal-body').find('h2').remove();
			}
			$('.modal-body').find('.row:first-child').before('<h2 class="upload-error">Sorry,only doc, docx and pdf files are allowed to upload</h2>');
			$('#resume_file').val("");
		}
	});
	
	
	$('#request-form').submit(function(e){
		e.preventDefault();
		var formData = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: 'wp-content/themes/colaint/request.php',
            data: formData,
			dataType:'text',
			beforeSend: function(){
				$('.meet-btn-main').val('Sending...');
				$('.meet-btn-main').attr('disabled','disabled');
				if($('#request-success').length > 0){
					$('#request-success').remove();
				};
			},
            success: function(response) { 
               $('.meet').find('p').after('<h2 id="request-success">Request submited successfully</h2>');
			   $('#request-form')[0].reset();
            },
            error: function(xhr, status, error){
                console.log(xhr); 
            },
			complete:function(){
				$('.meet-btn-main').val('Send Request');
				$('.meet-btn-main').removeAttr('disabled');
			}
        });
	});	
	
	
	$('#career-form-page').submit(function(e){
		e.preventDefault();
			
		var m_data = new FormData();   
		m_data.append( 'first_names', $('#fname').val());
		m_data.append( 'last_names', $('#lname').val());
		m_data.append( 'career_email', $('#resume_email').val());
		m_data.append( 'file_attach', $('input[type=file]')[0].files[0]);
			
		 $.ajax({
			type: 'POST',
			url: 'wp-content/themes/colaint/career.php',
			data: m_data,
			dataType:'json',
			processData: false,
			contentType: false,
			beforeSend: function(){
				$('#career_submit').val('Sending...');
				$('#career_submit').attr('disabled','disabled');
				if($('.modal-body').find('h2').length > 0){
					$('.modal-body').find('h2').remove();
				};
			},
			success: function(response) { 
			   $('.modal-body').find('.row:first-child').before('<h2>Resume submitted successfully.</h2>');
			   $('#career-form-page')[0].reset();
			   $('#career_submit').val('Submit Resume');
			   $('#career_submit').removeAttr('disabled','disabled');
			},
			error: function(xhr, status, error){
				$('#career_submit').removeAttr('disabled','disabled');
				$('.modal-body').after('<h2>Error</h2>');
				$('#career_submit').val('Submit Resume');
				console.log(error);
			}
		});
	});
	
});