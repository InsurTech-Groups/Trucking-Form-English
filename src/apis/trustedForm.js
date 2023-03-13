export const trustedForm = () => {

  
  (function() {
  var tf = document.createElement('script');
  tf.type = 'text/javascript'; tf.async = true;
  tf.src = ("https:" === document.location.protocol ? 'https' : 'http') + "://api.trustedform.com/trustedform.js?field=trusted_form_url&ping_field=trusted_form_url&invert_field_sensitivity=true&l=" + new Date().getTime() + Math.random();
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(tf, s);
  })();
    
    
  };