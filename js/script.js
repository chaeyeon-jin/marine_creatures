document.querySelector(".enter").addEventListener('click', function() {
    var element = document.querySelector('.start');
    var opacity = 1;
    var timer = setInterval(function() {
        if (opacity <= 0) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = opacity;
        opacity -= 0.1; 
    }, 30); 
    
    setTimeout(function() {
        clearInterval(timer);
        element.style.display = 'none';
    }, 500);
});


document.querySelector(".sil1").addEventListener('click', function(){
    document.querySelector('.pop1').style.display = 'block';
});

document.querySelector(".pop1 .ex").addEventListener('click', function(){
    document.querySelector('.pop1').style.display = 'none';
});

document.querySelector(".sil2").addEventListener('click', function(){
    document.querySelector('.pop2').style.display = 'block';
});

document.querySelector(".pop2 .ex").addEventListener('click', function(){
    document.querySelector('.pop2').style.display = 'none';
});

document.querySelector(".sil3").addEventListener('click', function(){
    document.querySelector('.pop3').style.display = 'block';
});

document.querySelector(".pop3 .ex").addEventListener('click', function(){
    document.querySelector('.pop3').style.display = 'none';
});

document.querySelector(".sil4").addEventListener('click', function(){
    document.querySelector('.pop4').style.display = 'block';
});

document.querySelector(".pop4 .ex").addEventListener('click', function(){
    document.querySelector('.pop4').style.display = 'none';
});

document.querySelector(".sil5").addEventListener('click', function(){
    document.querySelector('.pop5').style.display = 'block';
});

document.querySelector(".pop5 .ex").addEventListener('click', function(){
    document.querySelector('.pop5').style.display = 'none';
});

document.querySelector(".sil6").addEventListener('click', function(){
    document.querySelector('.pop6').style.display = 'block';
});

document.querySelector(".pop6 .ex").addEventListener('click', function(){
    document.querySelector('.pop6').style.display = 'none';
});

document.querySelector(".sil7").addEventListener('click', function(){
    document.querySelector('.pop7').style.display = 'block';
});

document.querySelector(".pop7 .ex").addEventListener('click', function(){
    document.querySelector('.pop7').style.display = 'none';
});

document.querySelector(".sil8").addEventListener('click', function(){
    document.querySelector('.pop8').style.display = 'block';
});

document.querySelector(".pop8 .ex").addEventListener('click', function(){
    document.querySelector('.pop8').style.display = 'none';
});

document.querySelector(".sil9").addEventListener('click', function(){
    document.querySelector('.pop9').style.display = 'block';
});

document.querySelector(".pop9 .ex").addEventListener('click', function(){
    document.querySelector('.pop9').style.display = 'none';
});

document.querySelector(".sil10").addEventListener('click', function(){
    document.querySelector('.pop10').style.display = 'block';
});

document.querySelector(".pop10 .ex").addEventListener('click', function(){
    document.querySelector('.pop10').style.display = 'none';
});

document.querySelector(".sil11").addEventListener('click', function(){
    document.querySelector('.pop11').style.display = 'block';
});

document.querySelector(".pop11 .ex").addEventListener('click', function(){
    document.querySelector('.pop11').style.display = 'none';
});

document.querySelector(".sil12").addEventListener('click', function(){
    document.querySelector('.pop12').style.display = 'block';
});

document.querySelector(".pop12 .ex").addEventListener('click', function(){
    document.querySelector('.pop12').style.display = 'none';
});

document.querySelector(".sil13").addEventListener('click', function(){
    document.querySelector('.pop13').style.display = 'block';
});

document.querySelector(".pop13 .ex").addEventListener('click', function(){
    document.querySelector('.pop13').style.display = 'none';
});

document.querySelector(".sil14").addEventListener('click', function(){
    document.querySelector('.pop14').style.display = 'block';
});

document.querySelector(".pop14 .ex").addEventListener('click', function(){
    document.querySelector('.pop14').style.display = 'none';
});

document.querySelector(".sil15").addEventListener('click', function(){
    document.querySelector('.pop15').style.display = 'block';
});

document.querySelector(".pop15 .ex").addEventListener('click', function(){
    document.querySelector('.pop15').style.display = 'none';
});

document.querySelector(".sil16").addEventListener('click', function(){
    document.querySelector('.pop16').style.display = 'block';
});

document.querySelector(".pop16 .ex").addEventListener('click', function(){
    document.querySelector('.pop16').style.display = 'none';
});

document.querySelector(".sil17").addEventListener('click', function(){
    document.querySelector('.pop17').style.display = 'block';
});

document.querySelector(".pop17 .ex").addEventListener('click', function(){
    document.querySelector('.pop17').style.display = 'none';
});

document.querySelector(".sil18").addEventListener('click', function(){
    document.querySelector('.pop18').style.display = 'block';
});

document.querySelector(".pop18 .ex").addEventListener('click', function(){
    document.querySelector('.pop18').style.display = 'none';
});

document.querySelector(".sil19").addEventListener('click', function(){
    document.querySelector('.pop19').style.display = 'block';
});

document.querySelector(".pop19 .ex").addEventListener('click', function(){
    document.querySelector('.pop19').style.display = 'none';
});

document.querySelector(".sil20").addEventListener('click', function(){
    document.querySelector('.pop20').style.display = 'block';
});

document.querySelector(".pop20 .ex").addEventListener('click', function(){
    document.querySelector('.pop20').style.display = 'none';
});

document.querySelector(".sil21").addEventListener('click', function(){
    document.querySelector('.pop21').style.display = 'block';
});

document.querySelector(".pop21 .ex").addEventListener('click', function(){
    document.querySelector('.pop21').style.display = 'none';
});

document.querySelector(".sil22").addEventListener('click', function(){
    document.querySelector('.pop22').style.display = 'block';
});

document.querySelector(".pop22 .ex").addEventListener('click', function(){
    document.querySelector('.pop22').style.display = 'none';
});

document.querySelector(".sil23").addEventListener('click', function(){
    document.querySelector('.pop23').style.display = 'block';
});

document.querySelector(".pop23 .ex").addEventListener('click', function(){
    document.querySelector('.pop23').style.display = 'none';
});

document.querySelector(".sil24").addEventListener('click', function(){
    document.querySelector('.pop24').style.display = 'block';
});

document.querySelector(".pop24 .ex").addEventListener('click', function(){
    document.querySelector('.pop24').style.display = 'none';
});


function createRandomImage() {
    var image = new Image();
    image.classList.add("moving-image");
  
    var imagePath;
    var randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber === 0) {
      imagePath = "./SVG/bub1.svg";
      image.classList.add("bub1");
    } else {
      imagePath = "./SVG/bub2.svg";
      image.classList.add("bub2");
    }
    image.src = imagePath;
  
    var container = document.getElementById("image-container");
    container.appendChild(image);
  
    var x = Math.random() * (window.innerWidth - image.width);
    var y = document.querySelector('.start').style.display !== 'none' ? window.innerHeight - 200 : window.innerHeight;
  
  
    image.style.left = x + "px";
    image.style.top = y + "px";
  
    var duration = 15000; // 10초
    var targetX = Math.random() * window.innerWidth;
    var targetY = -image.height;
    var startTime = null;
  
    function moveImage(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsedTime = timestamp - startTime;
      var progress = Math.min(elapsedTime / duration, 1);
  
      var currentX = x + (targetX - x) * progress;
      var currentY = y + (targetY - y) * progress;
  
      image.style.left = currentX + "px";
      image.style.top = currentY + "px";
  
      if (progress < 1) {
        requestAnimationFrame(moveImage);
      } else {
        container.removeChild(image);
      }
    }
  
    image.addEventListener("mouseover", function () {
      container.removeChild(image);
    });
  
    requestAnimationFrame(moveImage);
  }
  
  setInterval(function () {
    createRandomImage();
  }, 1000);
  

  document.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.wrap');
    var cursor = document.createElement('img');
    cursor.src = './SVG/cursor1.svg'; // 사용할 커서 이미지 파일 경로
    cursor.classList.add('custom-cursor');
    container.appendChild(cursor);
  
    var mouseX = 0;
    var mouseY = 0;
    var isScrollbarClicked = false; // 스크롤바 클릭 여부를 나타내는 변수
  
    document.addEventListener('mousemove', function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
  
      if (!isScrollbarClicked) {
        updateCursor();
      }
    });
  
    document.addEventListener('mousedown', function(f) {
      mouseX = f.clientX;
      mouseY = f.clientY;
  
      cursor.style.width = '72px';
      cursor.style.height = '81px';
  
      updateCursor();
    });
  
    document.addEventListener('mouseup', function(g) {
      mouseX = g.clientX;
      mouseY = g.clientY;
  
      cursor.style.width = '80px';
      cursor.style.height = '90px';
  
      updateCursor();
    });
  
    window.addEventListener('scroll', function() {
      isScrollbarClicked = true;
      updateCursor();
    });
  
    window.addEventListener('resize', function() {
      updateCursor();
    });
  
    function updateCursor() {
      var scrollX = window.pageXOffset || document.documentElement.scrollLeft;
      var scrollY = window.pageYOffset || document.documentElement.scrollTop;
  
      cursor.style.left = mouseX - scrollX + 'px';
      cursor.style.top = mouseY - scrollY + 'px';
  
      // 스크롤바를 클릭한 상태에서는 스크롤 위치에 맞게 마우스 이미지를 업데이트합니다.
      if (isScrollbarClicked) {
        var containerRect = container.getBoundingClientRect();
        var containerScrollX = containerRect.left + scrollX;
        var containerScrollY = containerRect.top + scrollY;
  
        cursor.style.left = mouseX - containerScrollX + 'px';
        cursor.style.top = mouseY - containerScrollY + 'px';
      }
    }
  });
  


  

  