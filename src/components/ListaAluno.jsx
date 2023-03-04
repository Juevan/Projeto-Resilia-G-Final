import axios from 'axios'
import { useState } from 'react';
import '../App.css';
import Modal from 'react-modal'

export default function ListaAlunos({ id, nome, turma, media, telefone}) {

    const deletealuno = () => {
        axios.delete(`http://localhost:3000/aluno/${id}`);
        setTimeout(() => {
            window.location.reload(1)
        }, 450);
    }

    const [edNome, setEdNome] = useState(nome);
    const [edTurma, setEdTurma] = useState(turma);
    const [edMedia, setEdMedia] = useState(media);
    const [edTelefone, setEdTelefone] = useState(telefone);
    const [edId, setEdId] = useState(id);

    const editaraluno = () => {
        axios.put(`http://localhost:3000/aluno/${id}`, {
            "id": edId,
            "nome": edNome,
            "turma": edTurma,
            "media": edMedia,
            "telefone": edTelefone,
        });
        setTimeout(() => {
            window.location.reload(1)
        }, 450)
    }

    const [modalEditar, setModalEditar] = useState(false);
    function modalEditarOpen() {
        setModalEditar(true);
    }
    function modalEditarClosed() {
        setModalEditar(false);
    }

    return (
        <div>
            <div className='cardMap'>
                <h2 className='titulo'>#{id} {nome}</h2>
                <ul className='styleMap'>
                    <li><strong>Turma: </strong>{turma} </li>
                    <li><strong>Média: </strong>{media}</li>
                    <li><strong>Telefone: </strong>{telefone}</li>
                </ul>
                <div>
                    <div>
                        <button className='btn btnEditar' onClick={modalEditarOpen}>Editar</button>
                        <Modal
                            isOpen={modalEditar}
                            onRequestClose={modalEditarClosed}
                            contentLabel="Example Modal"
                            overlayClassName="modal-overlay"
                            className="modal-content"
                        >
                            <h1>Editar {nome}</h1>
                            <form className='formEditar' onSubmit={editaraluno}>
                                <label>Id: <input type="text" name='id' value={id} disabled onChange={e => setEdId(e.target.value)}/></label>
                                <label htmlFor="">Aluno: <input type="text" name='nome' required value={edNome} onChange={e => setEdNome(e.target.value)} /></label>
                                <label htmlFor="">Turma: <input type="text" name='turma' required value={edTurma} onChange={e => setEdTurma(e.target.value)} /></label>
                                <label htmlFor="">Média: <input type="text" name="media" required value={edMedia} onChange={e => setEdMedia(e.target.value)} /></label>
                                <label htmlFor="">Telefone: <input type="text" name='telefone' required value={edTelefone} onChange={e => setEdTelefone(e.target.value)} /></label>
                                <input className='btn-salvar'  type="submit" value="Salvar" />
                            </form>
                        </Modal>
                    </div>

                    <button className='btn remover' onClick={deletealuno}>Excluir</button>
                </div>
            </div>
        </div>
    )
}