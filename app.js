var li = document.querySelectorAll('li');
li[0].style.backgroundColor = 'white';

li[0].onclick = function(){
  this.style.backgroundColor = 'white';
  li[1].style.backgroundColor = 'rgb(140,140,141)';
  li[2].style.backgroundColor = 'rgb(140,140,141)';
  document.getElementsByClassName('left')[0].style.backgroundImage = 'url("pics/mike-davidson.jpg")';
  document.getElementById('mike-davidson').style.display = 'block';
  document.getElementById('molly-nix').style.display = 'none';
  document.getElementById('andy-law').style.display = 'none';
}

li[1].onclick = function(){
  this.style.backgroundColor = 'white';
  li[0].style.backgroundColor = 'rgb(140,140,141)';
  li[2].style.backgroundColor = 'rgb(140,140,141)';
  document.getElementsByClassName('left')[0].style.backgroundImage = 'url("pics/molly-nix.jpg")';
  document.getElementById('mike-davidson').style.display = 'none';
  document.getElementById('molly-nix').style.display = 'block';
  document.getElementById('andy-law').style.display = 'none';
}

li[2].onclick = function(){
  this.style.backgroundColor = 'white';
  li[0].style.backgroundColor = 'rgb(140,140,141)';
  li[1].style.backgroundColor = 'rgb(140,140,141)';
  document.getElementsByClassName('left')[0].style.backgroundImage = 'url("pics/andy-law.jpg")';
  document.getElementById('mike-davidson').style.display = 'none';
  document.getElementById('molly-nix').style.display = 'none';
  document.getElementById('andy-law').style.display = 'block';
}
