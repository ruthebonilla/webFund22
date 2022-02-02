var likecount = 3;
var likeh3 = document.querySelector("#likes");

function like() {
  likecount++;
  likeh3.innerText = likecount + " like(s)";
}
