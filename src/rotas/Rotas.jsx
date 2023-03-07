import { Link } from "react-router-dom";
import Navbar from "../../view/components/Navbar";
import '../App.css';
import{IoMdContact } from "react-icons/io";
import {MdEmail} from "react-icons/md";
import {BsChatRightTextFill} from "react-icons/bs";
import {FaFacebookSquare} from "react-icons/fa";
import {FaInstagram } from "react-icons/fa";
import {FaTwitter}  from "react-icons/fa";
import {BsPencilSquare} from "react-icons/bs";
import imagem1 from "../../view/imagem1.jpg";
import imagem2 from "../../view/imagem2.jpg";
import imagem3 from "../../view/imagem3.jpg";
import imagem4 from "../../view/imagem4.jpg";
import imagem5 from "../../view/imagem5.jpg";

export default function Rotas() {

    return (
        <div>
            <div className='rotas'>
                <div className="carrossel">
                    <section class="galeria">
                        <div class="fotos">
                            <img src={imagem1} alt=""/>
                            <img src={imagem2} alt=""/>
                            <img src={imagem3} alt=""/>
                            <img src={imagem4} alt=""/>
                            <img src={imagem5} alt=""/>

                        </div>
                    </section>      
               
                </div>
                <div className="cards">
                <div class="envelope-cards">
                    <div class="row">
                        <div class="card2">
                            <div class="cardAzul">
                                <div class="corCard corCardAzul input-icone-form">
                                    {/* <div class="subtitulo"> + 10.000</div> */}
						                <div class="conteudoTextual">Mais de 10 mil alunos matriculados na Escola.</div>
					            </div>
					            <div class="color-block-bottom">
                                    <a href="#" class="btnInfo  btn1 btn-transparent-lblue">Informações</a>
					            </div>
				            </div>
			            </div>


                        <div class="card3">
                            <div class="cardVerde">
                                <div class="corCard corCardVerde input-icone-form">
                                    {/* <div class="subtitulo"> + 20</div> */}
						                <div class="conteudoTextual">Mais de 20  cursos, para você ingressar na área de tecnologia.</div>
					            </div>
					            <div class="color-block-bottom">
                                    <a href="#" class="btnInfo  btn1 btn-transparent-lblue">Informações</a>
					            </div>
				            </div>
			            </div>

                        <div class="card4">
                            <div class="cardRoxo">
                                <div class="corCard corCardRoxo input-icone-form">
                                    {/* <div class="subtitulo"> + 1.000</div> */}
						                <div class="conteudoTextual">Mais de 1 mil professores contratados.</div>
					            </div>
					            <div class="color-block-bottom">
                                    <a href="#" class="btnInfo  btn1 btn-transparent-lblue">Informações</a>
					            </div>
				            </div>
			            </div>
                    
                      

                        
			
		            </div>
               </div>

                </div>
                <div className="form">
                    
                    <div className="formulario">
                <div class="row input-container">
                    <h1 class="titulo_contato">Fale Conosco</h1>
                    
                    <form method="post" action="#">
                        <div class="style-form-input full">
                            <input className="input-form" type="text" name="nome" required />
                            <label> <IoMdContact /> Nome</label> 
                        </div>
                        
                        <div class="style-form-input">
                            <input className="input-form" type="text" name="email" required />
                            <label> <MdEmail />  E-mail</label> 
                        </div>
                        
                        <div class="style-form-input right">
                            <input className="input-form" type="text" name="assunto" required />
                            <label><BsPencilSquare/>  Assunto</label> 
                        </div>
                        
                        <div class="style-form-input full">
                            <textarea name="mensagem" required></textarea>
                            <label> <BsChatRightTextFill/>   Mensagem</label>
                        </div>
                        <div class="style-form-input full">
                            <input className="input-form" type="hidden" name="acao" value="enviar"/>
                            <button class="btn-submit">Enviar</button>
                        
                        </div>
                    </form>
                </div>
                    </div>
                </div>
                
                <footer class="main_footer containerFooter">
    
    <div class="conteudoFooter">
        <div class="colunafooter">
            
            <h3 class="tituloFooter"> Menu</h3>
            
            <ul>
            
              <li><a href="#" title="Página Inícial">Página Inícial</a></li>
              <li><a href="#" title="Sobre a Empresa">Sobre a Empresa</a></li>
              <li><a href="#" title="Galeria de Fotos">Galeria de Fotos</a></li>
              <li><a href="#" title="Fale Conosco">Fale Conosco</a></li>
            
            </ul>
        </div>  {/*-- Coluna Footer 1--*/}        
        <div class="colunafooter">
           
           <h3 class="tituloFooter"> Contato</h3>
           <p><i class="icon icon-mail"></i> contato@educamais.com.br</p>
           <p><i class="icon icon-phone"></i> 21 90000-0000</p>
           <p><i class="icon icon-whatsapp"></i> 21 90000-0000</p>
        </div>  {/*-- Coluna Footer 2--*/}
        <div class="colunafooter">
           
           <h3 class="tituloFooter"> Redes Sociais</h3>
            
           <a href="#" class="botao"><span> <FaFacebookSquare/> </span></a>            
           <a href="#" class="botao"><span> <FaInstagram /> </span></a>            
           <a href="#" class="botao"><span> <FaTwitter /> </span></a>                       
        </div>{/*-- Coluna Footer 3--*/}
        <div class="clear"></div>
    
    </div> 
    <div class="rodape_final">
        
        <p class="m-b-footer"> EducaMais ©2023, todos os direitos reservados.</p> 
        
    
    </div>
</footer>
        </div>
        </div>
        
    )
}