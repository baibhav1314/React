import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
    }


    renderDish(dish) {
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

     renderComments(comments) {
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

    render() {
        const dish = this.props.selectedDish;
        var comments = null;
        if(dish != null){
            comments = dish.comments;
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(comments)}
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;