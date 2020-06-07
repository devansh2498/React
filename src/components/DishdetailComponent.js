import React from 'react'
import {CardTitle,CardText,CardImg,CardBody,Card} from 'reactstrap';

   function RenderComments(props){
       const {comments} = props
        if(comments != null){
            return comments.map(comment => (
                <ul key={comment.id} className="list-unstyled">
                <li className="mb-1">{comment.comment}</li>
                <li>
                   {"--"} {comment.author}{","}
                   {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                </li>
                </ul>
            ));
        }
        else{
            return <div></div>
        }
    }
    
 const DishDetail=(props)=>{
    const { dish } =props;

        
    if(dish != null){
        return (
            <div className="container">
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name}></CardImg>                            
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>  
            </div>                      
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <RenderComments comments={dish.comments} />
            </div>
        </div>
    </div>
)
    }
    else{
        return (
            <div></div>
        );
    }
    
 }
       
 

export default DishDetail;
