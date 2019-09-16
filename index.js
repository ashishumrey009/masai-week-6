$(document).ready(function(){
    var avl = document.getElementById('avail');
    avl.value="50";
  var  movieArr=[];
 class Movies{
     moviename;
     movieposter;
     movierating;
     constructor(name,poster,movierating){
         this.moviename=name;
         this.movieposter=poster;
         this.movierating=movierating;
     }

     
 }

 movieOne = new Movies("Dream Girl","https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dream-girl-et00089745-30-11-2018-04-32-07.jpg",2);
 movieTwo= new Movies("Sahoo","https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/saaho-et00056624-28-04-2017-06-11-10.jpg",3);
 movieThree= new Movies("Mission Mangal","https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/mission-mangal-et00089473-28-11-2018-05-17-55.jpg",4);
 movieFour= new Movies("Gang Leader","https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/gang-leader-et00097329-25-02-2019-02-24-23.jpg",4);
 moveiFive = new Movies("IT. Chapter-2","https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/chapter-2-et00077370-11-06-2018-12-09-47.jpg",3);
 movieSix= new Movies("Badshah Pehelwan","https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pailwaan-et00103372-22-05-2019-07-09-33.jpg",2);
movieArr.push(movieOne);
movieArr.push(movieTwo);
movieArr.push(movieThree);
movieArr.push(movieFour);
movieArr.push(moveiFive);
movieArr.push(movieSix);
console.log(movieArr);
for(var i=0;i<movieArr.length;i++){
    var mainDiv= document.createElement("div");
    mainDiv.setAttribute("class","col-lg-3 col-md-6 ml-5");
    var moviediv = document.createElement("div");
    moviediv.setAttribute("class","card mr-2 ml-2 mb-3");
    moviediv.setAttribute("width","20rem");
    var movieImg = document.createElement("img");
    movieImg.setAttribute("class","img-fluid mb-3");
    var movieBody = document.createElement("div");
    movieBody.setAttribute("class","card-body shadow");
    var movihead = document.createElement("h3");
    movihead.textContent=movieArr[i].moviename;
    movihead.setAttribute("id","mviName");
    var bookBtn= document.createElement("BUTTON");
    bookBtn.setAttribute("class","btn btn-primary");
    bookBtn.setAttribute("data-toogle","modal");
    bookBtn.setAttribute("data-target","#loginModal");
    bookBtn.setAttribute("id",movieArr[i].moviename);
    bookBtn.textContent="Book Now";
    movieBody.appendChild(movihead);
    movieBody.appendChild(bookBtn);
    movieImg.setAttribute("src",movieArr[i].movieposter);
    moviediv.appendChild(movieImg);
    moviediv.appendChild(movieBody);
    mainDiv.appendChild(moviediv);
    $('#movieItems').append(mainDiv);
}
$('button').click(function(){
    var a =$(this);
    $('#movieModal').modal('show');
   var b =document.getElementById('modMve');
   b.innerHTML=a[0].id+" " ;

})
$('#seats').change(function(){
console.log("changed seats")
var temp= $(this);
console.log()
calculateBill(temp[0].value);
})

function calculateBill(seats){
  var total = seats*250;
  console.log(total);
  var cost = document.getElementById('costCal');
  var avl = document.getElementById('avail');
  cost.innerHTML=total+" "+"rs";
  var rem = avl.value-seats; 
  console.log(rem)
  avl.value=rem;
}
$('#finalBook').click(function(){
    console.log("final Booking..!!")
})
})