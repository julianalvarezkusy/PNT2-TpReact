import {connect} from 'react-redux'
import React from 'react'
import {removeEvento} from '../store/actions'
import Table from 'react-bootstrap/Table'


const mapStateToProps = (state) =>{
    return{
        eventos: state.eventos,
        id: state.id
    }
}

const mapDispatchToProps = dispatch => {
    
    return{
        propRemoveEvento: evento => dispatch(removeEvento(evento))
    }
}



class Listado extends React.Component{
    constructor(){
        super()

        this.eliminarEvento = this.eliminarEvento.bind(this)
    }

    eliminarEvento(event){
        console.log('EVENT' + event)
        
        this.props.propRemoveEvento({id: event})
    }
 
    render(){
        return(
        <div>
            <h3>Listado de eventos</h3>

            

            <Table striped bordered hover variant="dark" size="sm">
                <thead>  
                    <tr> 
                        <th>ID</th>
                        <th>Evento</th>
                        <th>Categoria</th>
                        <th>Fecha</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                {
                    this.props.eventos.map(el=> (
                        <tr key={el.id}>
                            <td>{el.id}</td>
                            <td>{el.nombre}</td>
                            <td>{el.categoria}</td>
                            <td>{el.fecha}</td>
                            <td><button onClick={()=>this.eliminarEvento(el.id)}>Eliminar</button></td>
                        </tr>
                    ))
                }

            </Table>


        </div>
    

        )

    }
}

const list = connect(mapStateToProps, mapDispatchToProps)(Listado)

export default list