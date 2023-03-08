import axios from 'axios'
import { useState } from 'react';
import '../App.css';
import Modal from 'react-modal'

export default function ListaTurma({ id, alunos, turno, professor}) {

    const deleteturma = () => {
        axios.delete(`http://localhost:3000/turma/${id}`);
        setTimeout(() => {
            window.location.reload(1)
            Swal.fire(
                'Deletado!',
                'Cadastro de turma deletado.',
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
    }).then((dltturma) => {
        if (dltturma.isConfirmed) {
            deleteturma();
        }
    })

    const [edAlunos, setEdAlunos] = useState(alunos);
    const [edTurno, setEdTurno] = useState(turno);
    const [edProfessor, setEdProfessor] = useState(professor);
    const [edId, setEdId] = useState(id);

    const editarturma = () => {
        axios.put(`http://localhost:3000/turma/${id}`, {
            "id": edId,
            "alunos": edAlunos,
            "turno": edTurno,
            "professor": edProfessor
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
                <h2 className='titulo'>Turma #{id}</h2>
                <ul className='styleMap'>
                    <li><strong>Quantidade de Alunos: </strong>{alunos} </li>
                    <li><strong>Turno: </strong>{turno}</li>
                    <li><strong>Professor: </strong>{professor}</li>
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
                            <h1>Turma {id}</h1>
                            <form className='formEditar' onSubmit={editarturma}>
                                <label>Id: <input type="text" name='id' value={id} disabled onChange={e => setEdId(e.target.value)}/></label>
                                <label htmlFor="">Quantidade de Alunos: <input type="text" name='alunos' required value={edAlunos} onChange={e => setEdAlunos(e.target.value)} /></label>
                                <label htmlFor="">Turno: <input type="text" name='turno' required value={edTurno} onChange={e => setEdTurno(e.target.value)} /></label>
                                <label htmlFor="">Professor: <input type="text" name="professor" required value={edProfessor} onChange={e => setEdProfessor(e.target.value)} /></label>
                                <input className='btn-salvar'  type="submit" value="Salvar" />
                            </form>
                        </Modal>
                    </div>

                    <button className='btn remover' onClick={btnDelete}>Excluir</button>
                </div>
            </div>
        </div>
    )
}