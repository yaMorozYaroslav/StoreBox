import React from 'react'
import emailjs from '@emailjs/browser'
import * as S from './mail-form.styled'

export const MailForm =({setOpen, cartItems})=> {
    const [source, setSource] = React.useState({user_name:'', user_email:'',
		                                        user_phone:'', delivery_method:'',
		                                        items:[]})
	const form = React.useRef()
	const handChange = (e) => setSource({...source, [e.target.name]: e.target.value})
	const pickUp = source.delivery_method === 'pick up'
	const postOffice = source.delivery_method === 'post office'
	console.log(pickUp)
	
	const sendEmail = e => {
		e.preventDefault()
		
		emailjs.sendForm(
		'service_wzlecr5', 'template_gf9ayyc', form.current, 'LTwbosNcCwgaQan9I')
		.then((result) => {
			console.log(result.text)
			}, (error) => {
				console.log(error.text)
				})
				e.target.reset()
		clearCart()
		localStorage.removeItem('cart')
		setOpen(false)
	}
	React.useEffect(()=>{
	  if(cartItems && source.items.length !== cartItems.length)
		     setSource({...source, items: cartItems})
		},[source, cartItems])
	return  <><S.Mailer ref={form}
	                    onSubmit={sendEmail}>
	  
	           <S.Input onChange={handChange} placeholder='Name' 
	                        name='user_name'  required/><br/>
	           <S.Input onChange={handChange} placeholder='Email' 
	                        name='user_email' required/><br/>
	           <S.Input onChange={handChange} placeholder='PhoneNumber' 
	                       name='user_phone' required /><br/>
	           <S.Select onChange={handChange} name='delivery_method' required>
	               <S.Option value='' hidden={source.delivery_method}>
	                                          Choose Delivery Method</S.Option>
	               <S.Option value='pick up'>Pick Up</S.Option>
	               <S.Option value='post office'>Post Office</S.Option>
	           </S.Select>
	           
	           {pickUp&&<S.Input placeholder='when will you come?'/>}
	           
	       <br />
	             <S.Button type='submit'>Place The Order</S.Button>
	             <S.Button type="button" onClick={()=>setOpen(false)}>CloseForm</S.Button>
	                 </S.Mailer></>                   
		                    }
