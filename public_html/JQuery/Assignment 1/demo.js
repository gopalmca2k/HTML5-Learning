/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {
  $( "#slider" ).slider({
    min: 9,
    max: 42,
    value: 16
  });
  $( "#slider" ).on( "slidechange", function( event, ui ) {
    $('html').css('font-size', ui.value + 'px');
    $('.currentSize > code').html(ui.value + 'px');
    $('.flex_width').html((ui.value * 10) + 'px');
  });
});
