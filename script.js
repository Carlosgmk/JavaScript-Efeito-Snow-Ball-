window.onload = function () {

    const sky = document.getElementById('sky')
    let tamanho = window.innerWidth
    let largura = window.innerHeight
    let mf = 100
    let flakes = []
    

    for(let i = 0; i < mf; i++) {
        let flake = document.createElement( 'div' )
        flake.className = 'flake'
        flake.style.left = Math.random() * tamanho + 'px'
        flake.style.top = Math.random() * largura + 'px'
        flake.style.width = (Math.random() * 7 + 2) + 'px'
        flake.style.height = (Math.random() * 7 + 2) + 'px'
        flakes.push(flake)
        sky.appendChild(flake)

    }
     

      const moveFlakes = () =>{
          for(let i = 0; i < mf; i++){
               let flake = flakes[i]
               
               let x = parseFloat(flake.style.left)
               let y = parseFloat(flake.style.top);


               x += (Math.random() - 0.3) * 2
               y += (Math.random() + 1.2) * 2

               if(x > tamanho || x < 0 || y > largura ) {
                  x = Math.random() * tamanho
                  y = 0
               }
               
               flake.style.left = x + 'px';
               flake.style.top = y + 'px';
            
          }  
          
      }   
          
          setInterval(moveFlakes, 25)
}