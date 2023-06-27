//your JS code here. If required.
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    
    function renderImages() {
      const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
      const repeatedImageIndex = Math.floor(Math.random() * 5);
      const repeatedImageClass = 'img' + (repeatedImageIndex + 1);
      
      shuffle(images);
      
      const imageContainer = document.getElementById('imageContainer');
      imageContainer.innerHTML = '';
      
      images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        img.className = index === repeatedImageIndex ? repeatedImageClass : 'img' + (index + 1);
        imageContainer.appendChild(img);
      });
    }
    
    function resetState() {
      const resetButton = document.getElementById('reset');
      const verifyButton = document.getElementById('verify');
      const para = document.getElementById('para');
      
      resetButton.style.display = 'none';
      verifyButton.style.display = 'none';
      para.innerHTML = '';
      
      renderImages();
    }
    
    function handleClick(event) {
      const target = event.target;
      const resetButton = document.getElementById('reset');
      
      if (target.tagName !== 'IMG' || target === resetButton) {
        return;
      }
      
      const selectedTiles = document.getElementsByClassName('selected');
      
      if (selectedTiles.length === 0) {
        target.classList.add('selected');
        resetButton.style.display = 'block';
      } else if (selectedTiles.length === 1) {
        if (selectedTiles[0] === target) {
          return;
        }
        
        target.classList.add('selected');
        const verifyButton = document.getElementById('verify');
        verifyButton.style.display = 'block';
      }
    }
    
    function verifySelection() {
      const selectedTiles = document.getElementsByClassName('selected');
      const para = document.getElementById('para');
      
      if (selectedTiles.length !== 2) {
        return;
      }
      
      const firstTileClass = selectedTiles[0].className;
      const secondTileClass = selectedTiles[1].className;
      
      if (firstTileClass === secondTileClass) {
        para.innerHTML = 'You are a human. Congratulations!';
      } else {
        para.innerHTML = 'We can\'t verify you as a human. You selected the non-identical tiles.';
      }
      
      const verifyButton = document.getElementById('verify');
      verifyButton.style.display = 'none';
    }
    
    document.addEventListener('DOMContentLoaded', () => {
      renderImages();
      document.getElementById('reset').addEventListener('click', resetState);
      document.getElementById('verify').addEventListener('click', verifySelection);
      document.getElementById
