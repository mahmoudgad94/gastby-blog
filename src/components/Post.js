import React from "react"
import { Link } from 'gatsby'
import {Card,CardTitle,CardText,CardSubtitle,CardBody,Badge} from 'reactstrap'
import Img from 'gatsby-image'
import {slugify} from '../util/utilityFunction'

const Post = ({ title,author,path,date,body,fluid,tags}) => {

    return (<Card>
        <Link to={path}>
            <Img className="card-image-top" fluid={fluid}></Img>
        </Link>
        <CardBody>
            <CardTitle>
               <Link to={path}>{title}</Link>
            </CardTitle>
            <CardSubtitle>
                <span className="text-info">{date}</span> by{' '} 
                <span className="text-info">{author}</span>
            </CardSubtitle>
            <CardText>{body}</CardText>
            <ul className="post-tags">
                {tags.map(tag=> (
                    <li>
                        <Link to={`/tag/${slugify(tag)}`}><Badge color="dark" className="text-uppercase">{tag}</Badge></Link>
                    </li>
                ))}
            </ul>
            <Badge>

            </Badge>
            <Link to={path} className="btn btn-outline-primary float-right">Read more</Link>
        </CardBody>
    </Card>)
}

export default Post