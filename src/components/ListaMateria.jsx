import axios from 'axios'
import { useState } from 'react';
import '../App.css';
import Modal from 'react-modal'

export default function ListaMaterias({ id, nome, cargaHoraria, tempos }) {

    const deletemateria = () => {
        axios.delete(`http://localhost:3000/materia/${id}`);
        setTimeout(() => {
            window.location.reload(1)
        }, 450);
    }

    const [edNome, setEdNome] = useState(nome);
    const [edCH, setEdCH] = useState(cargaHoraria);
    const [edTempos, setEdTempos] = useState(tempos);
    const [edId, setEdId] = useState(id);

    const editarmateria = () => {
        axios.put(`http://localhost:3000/materia/${id}`, {
            "id": edId,
            "nome": edNome,
            "cargaHoraria": edCH,
            "tempos": edTempos,
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
                    <li><strong>Carga Horária: </strong>{cargaHoraria}</li>
                    <li><strong>Tempos: </strong>{tempos}</li>
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
                            <form className='formEditar' onSubmit={editarmateria}>
                                <label>Id: <input type="text" name='id' value={id} disabled onChange={e => setEdId(e.target.value)}/></label>
                                <label htmlFor="">Materia: <input type="text" name='nome' required value={edNome} onChange={e => setEdNome(e.target.value)} /></label>
                                <label htmlFor="">Carga Horária: <input type="text" name='cargaHoraria' required value={edCH} onChange={e => setEdCH(e.target.value)} /></label>
                                <label htmlFor="">Tempos: <input type='text' name="tempos" required onChange={e => setEdTempos(e.target.value)} value={edTempos}/> </label>
                                <input className='btn-salvar'  type="submit" value="Salvar" />
                            </form>
                        </Modal>
                    </div>

                    <button className='btn remover' onClick={deletemateria}>Excluir</button>
                </div>
            </div>
        </div>
    )
}