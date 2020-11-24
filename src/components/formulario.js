import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {connect}  from 'react-redux'
import {addEvento} from '../store/actions'


const mapStateToProps = state => {
    return{
        eventos: state.eventos,
        idEvento: state.idEventos
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addEvento : evento => dispatch(addEvento(evento))
    }
}


class Formulario extends React.Component{



    constructor(){
        super()
        console.log('Constuctor')

        this.idEvento = React.createRef()
        this.categoriaEvento = React.createRef()
        this.nombreEvento = React.createRef()
        this.fechaEvento = React.createRef()

        this.agregarEvento = this.agregarEvento.bind(this)
    }

    agregarEvento(event) {
        console.log('Disparo el AGREGAR EVENTO' + event)
        this.props.addEvento({
            id: this.idEvento.current.value,
            categoria: this.categoriaEvento.current.value,
            nombre: this.nombreEvento.current.value,
            fecha: this.fechaEvento.current.value

        })
    }

    render(){

        return(
        <div class="container"> 
       
            {/* <Form>
            <Form.Group controlId={this.idEvento} ref={this.idEvento}>
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" placeholder="Ingresar ID">

                </Form.Control>

            </Form.Group>

            <Form.Group controlId={this.categoriaEvento} ref={this.categoriaEvento}>
            <Form.Label>Categoria Anuncio</Form.Label>
            <Form.Control as="select" placeholder="¿Qué tipo de anuncio querés dejar?">
                    <option>Una opción</option>
                    <option>Otra opción</option>
                </Form.Control>

            </Form.Group>

            <Form.Group controlId={this.nombreEvento} ref={this.nombreEvento}>
            <Form.Label>Descripción</Form.Label>
            <Form.Control type="text" placeholder="Colocá acá una descripción" />

            </Form.Group>

            <Form.Group controlId="fecha" ref={this.fechaEvento}>
            <Form.Label>Fecha</Form.Label>
            <Form.Control type="date" placeholder="¿Cuándo va a ocurrir el evento?"/>

            </Form.Group>
            

            <Button variant="primary" id="agregarEvento"  onClick={this.agregarEvento}>
            Guardar
            </Button>
            </Form> */}


            <h3>Agregar Evento</h3>

            <label for="id">ID</label>
            <input   type="text" ref={this.idEvento} value={this.props.idEvento} /> <br/>
            <label for="descripcion">Descripción</label>
            <input type="text" id="descripcion" ref={this.nombreEvento} /> <br/>
            <label for="categoria">Categoria</label>
            <select id="categoria" ref={this.categoriaEvento}><option value="1">Reunión Escolar</option><option value="2">Visita Médico</option></select>
            <br/>
            <label for="fecha">Fecha Evento</label>
            <input type="date" id="fecha" ref ={this.fechaEvento} /> <br/>
            <button id="agregarEvento" onClick={this.agregarEvento}>Agregar Evento</button>
        </div>
        
        )


        
    }

}

const form = connect(mapStateToProps, mapDispatchToProps)(Formulario)


export default form