import axios from 'axios'
import { useState } from 'react';
import '../App.css';
import Modal from 'react-modal'

export default function ListaProfessor({ id, nome, matricula, telefone, endereco}) {

    const deleteprofessor = () => {
        axios.delete(`http://localhost:3000/professor/${id}`);
        setTimeout(() => {
            window.location.reload(1)
            Swal.fire(
                'Deletado!',
                'Cadastro de professor deletado.',
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
            deleteprofessor();
        }
    })

    const [edNome, setEdNome] = useState(nome);
    const [edMatricula, setEdMatricula] = useState(matricula);
    const [edTelefone, setEdTelefone] = useState(telefone);
    const [edEndereco, setEdEndereco] = useState(endereco);
    const [edId, setEdId] = useState(id);

    const editarprofessor = () => {
        axios.put(`http://localhost:3000/professor/${id}`, {
            "id": edId,
            "nome": edNome,
            "matricula": edMatricula,
            "telefone": edTelefone,
            "endereco": edEndereco
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
                    <li><strong>Matrícula: </strong>{matricula} </li>
                    <li><strong>Telefone: </strong>{telefone}</li>
                    <li><strong>Endereço: </strong>{endereco}</li>
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
                            <form className='formEditar' onSubmit={editarprofessor}>
                                <label>Id: <input type="text" name='id' value={id} disabled onChange={e => setEdId(e.target.value)}/></label>
                                <label htmlFor="">Professor: <input type="text" name='nome' required value={edNome} onChange={e => setEdNome(e.target.value)} /></label>
                                <label htmlFor="">Matrícula: <input type="text" name='modulos' required value={edMatricula} onChange={e => setEdMatricula(e.target.value)} /></label>
                                <label htmlFor="">Telefone: <input type="text" name="turmas" required value={edTelefone} onChange={e => setEdTelefone(e.target.value)} /></label>
                                <label htmlFor="">Endereço: <input type="text" name='cargaHoraria' required value={edEndereco} onChange={e => setEdEndereco(e.target.value)} /></label>
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