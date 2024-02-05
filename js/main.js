var allFilms = [];

var req = new XMLHttpRequest();
req.open('get' , 'https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
req.send();
req.addEventListener('readystatechange' , function(){
  if(req.readyState == 4 && req.status ==200){
    allFilms = JSON.parse( req.response ).results;
    displayAllFilms()
  }
});
const widthOfSideBar = $('.sideBar').outerWidth() ;
// console.log( $('.sideBar').outrWidth() );


  $('.designCloseAndOpenSideBar .icon2').click(function(){
    if( $('.sideBar').css('left') == '0px'){
      $('.sideBar').animate({left: -widthOfSideBar} , 500 )

      
    }
    else{
      $('.sideBar').animate({left: 0} , 500)
    }
  })




  function displayAllFilms(){
    var cartona = '';
    for(var i = 0 ; i < allFilms.length ; i++){
      cartona += `
      <div class="col-md-4 p-2 ">
            <div class="myDiv overflow-hidden position-relative">
              <div class="imgage">
                <img src="https://image.tmdb.org/t/p/w500/${allFilms[i].poster_path}" class="w-100" alt="">
              </div>

              <div class="myLayer  text-white position-absolute top-0 end-0 start-0 bottom-0">
                <h1 class="text-center my-2" >${allFilms[i].title}</h1>
                <p class="p-3" >${allFilms[i].overview}</p>
                <h5 class="p-3" >${allFilms[i].release_date}</h5>
                
                  <div class="rating ms-3 d-flex justify-content-center align-items-center">
                    <p>${allFilms[i].vote_average}</p>
                  </div>
                
              </div>
            </div>
          </div>
      `
    }
    document.querySelector('.tableDesin').innerHTML= cartona;
  }


  document.querySelector('input').addEventListener('keydown' , function(e){

    e.target

  })



  $(window).scroll(function(){
    if($(window).scrollTop() > 50){
      $('.iconToUp').fadeIn(1000).css('display' , 'flex')
    }

  })


