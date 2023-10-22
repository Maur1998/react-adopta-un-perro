import { Badge } from "react-bootstrap"

export const Tags = ({text, color}) => {
  return (
    <Badge bg={color} className="badge">{text}</Badge>
  )
}
