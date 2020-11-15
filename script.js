     
function apagar() {
    $('body').addClass('theme')
    $('button.toggle i').removeClass('fa-moon').addClass('fa-sun')
    $('button.toggle span').text('Acenda as luzes')
}
function acender(){
    $('body').removeClass('theme')
    $('button.toggle i').removeClass('fa-sun').addClass('fa-moon')
    $('button.toggle span').text('Apague as luzes')
}
$('button.toggle').click(function(){  
    localStorage.theme == 'ligth' ? localStorage.setItem('theme', 'dark') & apagar() : localStorage.setItem('theme', 'ligth') & acender()
})

$(window).ready(function() {
    localStorage.theme == 'ligth' ? acender() : apagar()
});
