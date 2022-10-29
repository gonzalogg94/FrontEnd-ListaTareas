import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = ({nombreTarea, borrarTarea}) => {
    return (
        <ListGroup.Item className="d-flex justify-content-between my-1">
            {nombreTarea}
            <Button variant='danger' onClick={()=> borrarTarea(nombreTarea) }>Borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;