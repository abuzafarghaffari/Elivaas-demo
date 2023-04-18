import {useRef} from 'react';
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modal.scss';


const MyModals =(props)=>{
    const { register, handleSubmit,formState: { errors } } = useForm();




const submitHandler =(data)=>{

const element = Object.assign(props.list,data)
//console.log(element);
    props.editHandler(element)
    props.handleClose()
}

    return (
        <>
         
          <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form onSubmit={handleSubmit(submitHandler)} >
                <div>
                    <label htmlFor="namr">Name:</label>
                    <input type ="text" name ="name" id="name" defaultValue={props.list.name} {...register("name",{required:true})}/>
                    {errors.name &&<p className='error'>This field is required</p>}
                </div>
         <div>
            <label htmlFor="email">Email:</label>
            <input type = "email" name = "email" id="email" defaultValue={props.list.email} {...register("email",{required:true})}/>
            {errors.email &&<p className='error'>This field is required</p>}
         </div>
        
        <div>
            <label htmlFor="phone">Phone:</label>
            <input type = "text" name = "phone" id="phone" defaultValue={props.list.phone} 
            {...register("phone",{required:true})}
            />
            {errors.phone &&<p className='error'>This field is required</p>}
        </div>
        <div>
            <label htmlFor="website">Website:</label>
            <input type = "text" name = "website" id="website" defaultValue={props.list.website}
            {...register("website",{required:true})}
            />
            {errors.website &&<p className='error'>This field is required</p>}
        </div>
        <Modal.Footer>
              <Button variant="secondary" onClick={props.handleClose}>
                Close
              </Button>
              <Button type="submit" variant="primary" >
                Save Changes
              </Button>
            </Modal.Footer>
      </form>

            </Modal.Body>
            
          </Modal>
        </>
      );
}

export default MyModals;