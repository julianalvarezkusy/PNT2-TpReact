import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'

class Formulario extends React.Component{



    constructor(){
        super()
        console.log('Constuctor')

        this.state = {
            mailDefault : "algo@algo.com",
            title: 'empieza'

        }

        this.textoToListGruop = this.textoToListGruop.bind(this)
    }

    textoToListGruop(args){

        this.setState({
            title : args.target.value
        })
    }

    render(){

        let form =  
        <div> 
            <ListGroup horizontal>
                <ListGroup.Item variant= "primary">{this.state.title}</ListGroup.Item> 
            </ListGroup>         
            <Form>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Escribí algo</Form.Label>
            <Form.Control type="text" placeholder="Un texto va acá" defaultValue={this.state.mailDefault} onChange={this.textoToListGruop} />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>
            
            <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
            Submit
            </Button>
            </Form>
        </div>
        
        return form


        
    }

}


export default Formulario