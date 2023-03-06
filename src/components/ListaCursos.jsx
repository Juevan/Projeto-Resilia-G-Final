import axios from 'axios'
import { useState } from 'react';
import '../App.css';
import Modal from 'react-modal'

export default function ListaCursos({ id, nome, modulos, turmas, cargaHoraria, descricao }) {

    const deletecurso = () => {
        axios.delete(`http://localhost:3000/curso/${id}`);
        setTimeout(() => {
            window.location.reload(1)
            Swal.fire(
                'Deletado!',
                'Cadastro de curso deletado.',
                'successo'
            )
        }, 1000);
    }

    const btnDelete = () => Swal.fire({
        title: 'Tem certeza?',
        text: "Você não poderá desfazer essa ação!",
        icon: 'Atenção',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, deletar!',
        cancelButtonText: 'Cancelar'
    }).then((dltaluno) => {
        if (dltaluno.isConfirmed) {
            deletecurso();
        }
    })

    const [edNome, setEdNome] = useState(nome);
    const [edModulos, setEdModulos] = useState(modulos);
    const [edTurmas, setEdTurmas] = useState(turmas);
    const [edCH, setEdCH] = useState(cargaHoraria);
    const [edDescricao, setEdDescricao] = useState(descricao);
    const [edId, setEdId] = useState(id);

    const editarCurso = () => {
        axios.put(`http://localhost:3000/curso/${id}`, {
            "id": edId,
            "nome": edNome,
            "modulos": edModulos,
            "qtdDeTurmas": edTurmas,
            "cargaHoraria": edCH,
            "descricao": edDescricao
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
                    <li><strong>Modulos: </strong>{modulos} </li>
                    <li><strong>Turmas: </strong>{turmas}</li>
                    <li><strong>Carga Horária: </strong>{cargaHoraria}</li>
                    <li><strong>Descrição: </strong>{descricao}</li>
                </ul>
                <div className='media'>
                    <div >
                        <button className='btn btnEditar' onClick={modalEditarOpen}>Editar</button>
                        <Modal
                            isOpen={modalEditar}
                            onRequestClose={modalEditarClosed}
                            contentLabel="Example Modal"
                            overlayClassName="modal-overlay"
                            className="modal-content"
                        >
                            <h1>Editar {nome}</h1>
                            <form className='formEditar' onSubmit={editarCurso}>
                                <label>Id: <input type="text" name='id' value={id} disabled onChange={e => setEdId(e.target.value)}/></label>
                                <label htmlFor="">Curso: <input type="text" name='nome' required value={edNome} onChange={e => setEdNome(e.target.value)} /></label>
                                <label htmlFor="">Modulos: <input type="text" name='modulos' required value={edModulos} onChange={e => setEdModulos(e.target.value)} /></label>
                                <label htmlFor="">Turmas: <input type="text" name="turmas" required value={edTurmas} onChange={e => setEdTurmas(e.target.value)} /></label>
                                <label htmlFor="">Carga Horária: <input type="text" name='cargaHoraria' required value={edCH} onChange={e => setEdCH(e.target.value)} /></label>
                                <label htmlFor="">Descrição: <textarea name="descricao" required onChange={e => setEdDescricao(e.target.value)}>{descricao}</textarea></label>
                                <input className='btn-salvar' type="submit" value="Salvar" />
                            </form>
                        </Modal>
                    </div>

                    <button className='btn remover' onClick={btnDelete}>Excluir</button>
                </div>
            </div>
        </div>
    )
}