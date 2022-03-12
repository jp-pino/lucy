(function ($) {
    $(function () {
     /** Generate slider if has below class .apct-slider-layout */
     $('.apct-slider-layout').each(function(){
          var slide_speed = $(this).attr('data-slide-speed');
          
          var slide_control = $(this).attr('data-slide-controls');
            slide_control = (slide_control=='true')?true:false;
          
          var slide_pager = $(this).attr('data-slide-pager');
            slide_pager = (slide_pager=='true')?true:false;
          
          var slide_auto = $(this).attr('data-slide-auto');
          slide_auto = (slide_auto=='true')?true:false;
           
          var slide_pause_duration = $(this).attr('data-pause-duration');
             
              $(this).bxSlider ({
                    pager: slide_pager,
                    controls: slide_control,
                    auto:slide_auto,
                    pause:slide_pause_duration,
                    speed: slide_speed,	
                    infiniteLoop: true,
                    adaptiveHeight: true,
                    nextSelector: $(this).closest('.apct-testim-wrapper').find('.apct-slider-next'),
                    prevSelector: $(this).closest('.apct-testim-wrapper').find('.apct-slider-prev'),
                    prevText: '<i class="fa fa-chevron-left "></i>', //data_prev_slide_control
                    nextText: '<i class="fa fa-chevron-right "></i>' //data_next_slide_control
              	 })
    });
    
    /** Read More Excerpt Control **/
    $('.apct-testim-content').hide();
    $('a.apct-read-more').click(function () {
         $(this).parent('.apct-testim-excerpt').slideUp(400);
         $(this).closest('.apct-testimonial-content').find('.apct-testim-content').slideDown(400);
         $(this).parents().find('.bx-viewport').css('height','100%');
         return false;
     });
    /** Read less Excerpt Control **/
    $('a.apct-read-less').click(function () {
         $(this).parent('.apct-testim-content').slideUp(400);
         $(this).closest('.apct-testimonial-content').find('.apct-testim-excerpt').slideDown(400);;
         return false;
     });

     /** Implementing Pretty photo on Backend Testimonial Listing*/
     $("a[rel^='prettyPhoto']").prettyPhoto({
        social_tools:false,
        deeplinking:false,
        allow_resize:false,
        allow_expand:true
        });
              
     /** Target .container, .wrapper, .post, etc. for inline fitvid */
     $(".inline").fitVids();          
      
     /** JS to implement rate effect for submission form */
     var rating_value;     
     $('.rate-btn').hover(function(){
        $('.rate-btn').removeClass('rate-btn-hover');
            var therate = $(this).attr('id');
            for (var i = therate; i >= 0; i--) {
                $('.rate-btn-'+i).addClass('rate-btn-hover');
            };
     });
                        
    /** Rating Feature in Frondend form */
    $('.rate-btn').click(function(){    
            var therate = $(this).attr('id');
            var dataRate = 'rate='+therate; 
            $('.rate-btn').removeClass('rate-btn-active');
            for (var i = therate; i >= 0; i--) {
                $('.rate-btn-'+i).addClass('rate-btn-active');
            rating_value = therate;
            $('#apct-rating-val').val(rating_value);
            };
     });
     
     /** JS to show input field content for social icon is submission form */
     $('#apct-social-link-submission').children('.apct-submission-social-link').click(function(){
        var val= $(this).attr('id');
        $('.toggled-field').hide();
        $(this).parent().find('#'+val+'-toggled-field').show();
     });
     
     /** Media check for Social Icon In Front end Form */
     $(".input-social-media-check").change(function() {
          var social_media_check  = $("input[name=input_social_media_check]").attr('checked')?'1':'0';
          if(social_media_check == '1'){
            $('.apct-social-media').show();                
          } else{
           $('.apct-social-media').hide();   
          }
        });
    
     /** Testimonial Review Submission Form Validation */
     $('.apct-review-submission-button').click(function(e){
        var error_flag = 0;       
        var error_info = $('.apct-form-required').attr('error-field-data');        
        $('.apct-submission-form-wrapper input[type="text"], .apct-submission-form-wrapper input[type="file"], .apct-submission-form-wrapper input[type="email"]').each(function () {               
            var field_val = $.trim($(this).val());
                if ($(this).hasClass('apct_required') && field_val == '')
                { 
                     error_flag = 1;
                     $(this).closest('.apct-form-field').find('.apct-form-required').html(error_info);
                }

            });
            
        if($('#apct_input_field_description').hasClass('apct_required') && $('#apct_input_field_description').val() == '')
        {
                 error_flag = 1;
                 $('#apct_input_field_description').closest('.apct-form-field').find('.apct-form-required').html(error_info); 
        }               
        
        if($('#apct-rating-val').hasClass('apct_required') && $('#apct-rating-val').val() == '')
        {
                 error_flag = 1;
                 $('#apct-rating-val').closest('.apct-form-field').find('.apct-form-required').html(error_info); 
        }
        if(error_flag == 1){
        return false; 
        }else if(error_flag == 0){
                return true;
         }        
        e.preventDefault();     
    }); 
    
    /** Error Field Check and Remove on form Input */
    $('#apct_input_field_username').keyup(function () {
            $(this).closest('.apct-form-field').find('.apct-form-required').html('');
        });
    $('#apct_input_field_email').keyup(function () {
            $(this).closest('.apct-form-field').find('.apct-form-required').html('');
        });
    $('#apct_input_field_company_name').keyup(function () {
            $(this).closest('.apct-form-field').find('.apct-form-required').html('');
        });
    $('#apct_input_field_company_url').keyup(function () {
            $(this).closest('.apct-form-field').find('.apct-form-required').html('');
        });
    $('#apct_input_field_designation').keyup(function () {
            $(this).closest('.apct-form-field').find('.apct-form-required').html('');
        });
    $('.apct-submission-form-wrapper input[type="file"]').change(function () {
        $(this).closest('.apct-form-field').find('.apct-form-required').html('');
    });
    $('#apct_input_field_description').change(function () {
            $(this).closest('.apct-form-field').find('.apct-form-required').html('');
        });
    $('#rate-ex2-cnt').click(function () {
            $(this).closest('.apct-form-field').find('.apct-form-required').html('');
        });                                                  
  
  });
}(jQuery));