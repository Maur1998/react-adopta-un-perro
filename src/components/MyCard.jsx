import {Card} from 'react-bootstrap';
import { Tags } from './Tags';

export const MyCard = ({url, name, desc, text, color}) => {
  return (
    <div className='mycard col-12 col-md-6 col-lg-3'>
        <Card className='card'>
            <Card.Img className='img' variant="top" src={url} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                  {desc}
              </Card.Text>
            </Card.Body>
            <Tags text={text} color={color} />
        </Card>
    </div>
  )
}
