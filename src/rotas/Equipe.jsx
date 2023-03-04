import React from 'react'
import imagemSara from '../../view/Sara.jpg'
import imagemVi from '../../view/Vitória.jpg'
import imagemDi from '../../view/diego.jpg'
import imagemA from '../../view/antonio.jpg'



const Equipe = () => {
  return (
    <div className=''>
      <div className='main'>
        <h2 className='tituloEquipe'>Nossa Equipe</h2>
        <div className='geral'>
          <div class="card">
            <img src={imagemSara} alt=""/>
            <div class="info">
              <h3>Sara Ayram </h3>
              <p>
                Gestora de conhecimento
              </p>
    
            </div>
          </div>

          <div class="card">
            <img src={imagemVi} alt=""/>
            <div class="info">
              <h3>Vitória</h3>
              <p>
                Gestora de conhecimento
              </p>
    
            </div>
          </div>
          <div class="card">
            <img src={imagemA} alt=""/>
            <div class="info">
              <h3>Antonio</h3>
              <p>
                Gestora de conhecimento
              </p>
    
            </div>
          </div>
          <div class="card">
            <img src={imagemDi} alt=""/>
            <div class="info">
              <h3>Diego</h3>
              <p>
                Gestora de conhecimento
              </p>
    
            </div>
          </div>
          <div class="card">
            <img src={imagemVi} alt=""/>
            <div class="info">
              <h3>Lucas</h3>
              <p>
                Gestora de conhecimento
              </p>
    
            </div>
          </div>
          
          
        </div>
        
        
        
      </div>
      {/* <footer>
        
      </footer> */}

      
    </div>
  )
}

export default Equipe