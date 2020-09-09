import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';

    function RenderDish({dish}) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
            
        else
            return(
                <div></div>
            );
     }

    function RenderComments({comments}) {
         if(comments != null){

            const comms = comments.map((comm) => {
                //format the date as "Sep 06, 2014"
                let date = new Intl.DateTimeFormat('en-US', {
                    year:'numeric',
                    month: 'short',
                    day: '2-digit'
                }).format(new Date(Date.parse(comm.date)))

                return (
                        <ul key={comm.id} className="list-unstyled">
                            <li className="comment">{comm.comment}</li>
                            <li className="author">-- {comm.author}, {date}</li>
                        </ul>          
                    );
                })
            return(
                <div>
                    <h4>
                        Comments
                    </h4>
                    <div>{comms}</div>
                </div>
            );
         }
         else
            return(
                <div></div>
            );
     }

    const  DishDetail = (props) => {
        const dish = props.selectedDish;
    
        if(props.selectedDish)
            return(   
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={dish}/>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={dish.comments}/>
                        </div>
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }


export default DishDetail;