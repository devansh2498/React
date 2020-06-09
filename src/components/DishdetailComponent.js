import React from 'react'
import {CardTitle,CardText,CardImg,CardBody,Card,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderComments({comment}){
        if(comment!=null){
                return (
                    <ul className="list-unstyled">
                        <li className="mb-1">{comment.comment}</li>
                        <li>
                            {"--"} {comment.author}{","}
                            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                        </li>
                    </ul>
                    );
            }
        else{
            return (
                <div></div>
            );
        }
}
    
 const DishDetail=(props)=>{
    

    const comm=props.comments.map((comment)=>{
        return (
            <div key={comment.id} >
                <RenderComments comment={comment}/>
            </div>
        );
    });
    

    if(props.dish != null){
        return (
            <div className="container">
                <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr/>
                </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={props.dish.image} alt={props.dish.name}></CardImg>                            
                            <CardBody>
                                <CardTitle>{props.dish.name}</CardTitle>
                                <CardText>{props.dish.description}</CardText>
                            </CardBody>
                        </Card>  
                    </div>                      
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                            {comm}
                        </div>
                </div>
            </div>          
        );    
    }
    else{
        return (
            <div></div>
        );
    }
    
 }
       
 

export default DishDetail;
