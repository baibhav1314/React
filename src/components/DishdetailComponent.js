import React,{ Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem,Button, Modal, ModalBody,ModalHeader, Label, Col, Row  } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

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
                    <CommentForm />
                </div>
            );
         }
         else
            return(
                <div></div>
            );
     }

    const  DishDetail = (props) => {
    
        if(props.dish)
            return(   
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish}/>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.comments}/>
                        </div>
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }


    class CommentForm extends Component {

        constructor(props){
            super(props);

            this.state = {
                modal : false
            }
            this.toggleModal = this.toggleModal.bind(this);
        }

        toggleModal() {
            this.setState({modal : !this.state.modal})
        }
        handleSubmit(values) {
            console.log('Current State is: ' + JSON.stringify(values));
            alert('Current State is: ' + JSON.stringify(values));
        }

            render() {

                return(
                    <div>
                        <Button outline color="secondary" onClick={this.toggleModal} ><i class="fa fa-pencil" aria-hidden="true"></i> Submit Comment</Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                            <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="rating" md={12}>Rating</Label>
                                    <Col md={12}>
                                        <Control.select model=".rating" name="rating" className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor=".yourname" md={12}>Your Name</Label>
                                    <Col md={12}>
                                        <Control.text model=".author" name="author" id="yourname" className="form-control" 
                                        placeholder="Your Name"
                                        validators={{
                                            minLength: minLength(3),maxLength: maxLength(15)
                                        }}
                                        />
                                        <Errors 
                                            className="text-danger"
                                            model=".author"
                                            show="touched"
                                            messages={{
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor=".comment" md={12}>Comment</Label>
                                    <Col md={12}>
                                        <Control.textarea model=".comment" name="comment" id="comment" className="form-control" 
                                        rows="6"/>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={12}>
                                        <Button color="primary" type="submit">Submit</Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                            </ModalBody>
                        </Modal>
                    </div>
                );
            }

    }
export default DishDetail;