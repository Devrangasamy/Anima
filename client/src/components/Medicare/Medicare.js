import React from 'react'

import Footers from '../Footer/Footers'
import Navbar from '../Navbar/Navbar'
import medicare from "../../Assets/medicare.jpg";
import products from "../../Assets/products.jpg";
import petstore from "../../Assets/petstore.jpg";
import { Link } from "react-router-dom";
import "./medi.css"

function Medicare() {
  return (
    <div>
        <Navbar></Navbar>
        <div>
            <div > 
            <img src='https://images.unsplash.com/photo-1537727365640-d9b9cbeeac34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='image'className='puppyimage' ></img>
            </div>
            <div className='medi-care-head'>
            <h1 >Medi-Care</h1>
            </div>
            <h1 className='services-care'>Services</h1>
            <div className='p-5 m-5'> 
            <h1 className='detailsmedi'>Medi-Care Details</h1>
            <ul className='unordere'>
              <li className='liste'>Medi-care for pets, also known as pet insurance or wellness programs, has become increasingly popular among pet owners in recent years.</li>
              <li className='liste'>As with humans, medical care for pets can be expensive, and pet insurance can help to manage the cost of unexpected veterinary bills.</li>
            </ul>
            <h1 className='detailsmedi'>Benefits</h1>   
            <ul className='unordere'>
              <li className='liste'>
            One of the main reasons why pet insurance is important is that it can help to cover the cost of unexpected veterinary bills. Just like humans, pets can develop illnesses or injuries that require medical treatment, and these bills can add up quickly.</li>
              <li className='liste'> Pet insurance can help to manage the cost of these bills, which can be especially important for pet owners who may not have the financial means to pay for expensive medical care out of pocket.</li>
              <li className='liste'>In addition to covering unexpected veterinary bills, pet insurance can also provide coverage for routine preventive care, such as vaccinations and annual exams.</li>
              <li className='liste'>This can help pet owners to stay on top of their pets' health and catch any potential health issues early on, which can save money and potentially even save a pet's life.</li>
              <li className='liste'>Another benefit of pet insurance is that it can provide peace of mind to pet owners. Knowing that their pet is covered in the event of an unexpected illness or injury can help to alleviate the stress and anxiety that can come with caring for a sick or injured pet.</li>
            </ul>
            <h1 className='detailsmedi'>Others</h1>
            <ul className='unordere'>
              <li className='liste'>
              Wellness programs offered by veterinary clinics can also provide important preventive care for pets. These programs may cover routine services such as annual exams, dental cleanings, and vaccinations, which can help to keep pets healthy and catch any potential health issues early on. </li>
              <li className='liste'> Some wellness programs may also offer discounts on other services, such as diagnostic tests or surgeries.</li>
              <li className='liste'>However, it is important for pet owners to carefully review the terms and conditions of any pet insurance plan or wellness program before enrolling their pets.</li>
              <li className='liste'> Some plans may have exclusions or limitations on coverage for pre-existing conditions, certain treatments, or certain breeds of pets.</li>
              <li className='liste'>Pet owners should also ensure that the plan covers the specific needs of their pet.</li>
            </ul>
            <h1 className='detailsmedi'>Conclusion</h1>
            <ul className='unordere'>
              <li className='liste'>
              In conclusion, medi-care for pets is an important part of responsible pet ownership. Pet insurance and wellness programs can help to manage the cost of medical care, provide important preventive care, and provide peace of mind to pet owners. Pet owners should carefully review the terms and conditions of any plan before enrolling their pets, and should ensure that the plan covers the specific needs of their pet.</li>
            </ul>
        </div>
        </div>
            <div className="d-flex gap-5 mt-5 pb-3 m-5">
          <div className="col">
            <img
              src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1lZGklMjBjYXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="medicare"
              className="rounded allservice-img"
            ></img>
            <div className="text-center pt-4 para-all">
              <h3 className='text-center p-2'>vaccination Details</h3>
              <p>
              Vaccinating pets helps protect them from diseases and illnesses, and the specific vaccination schedule and types of vaccines needed vary depending on the species, age, and lifestyle of the pet.
              </p>
              <Link to="/medicare" className="btn btn-primary">Read more</Link>
            </div>
          </div>
          <div className="col">
            <img
              src="https://media.istockphoto.com/id/1470806648/photo/puppy-at-the-vets.jpg?b=1&s=170667a&w=0&k=20&c=hX3Vg3-bwowWF6CegIWV6vn7Qk_f-C7wlV7ho8UFfU0="
              alt="medicare"
              className="rounded allservice-img"
            ></img>
            <div className="text-center pt-4 para-all">
            <h3 className='text-center p-2'>Pet Doctors Details</h3>
              <p>
              A veterinarian, also known as a vet, is a trained medical professional who specializes in the health and well-being of animals, and is the primary doctor for pets.
              </p>
              <Link to="/doctor" className="btn btn-primary">Read more</Link>
            </div>
          </div>
          <div className="col">
            <img
              src="https://images.unsplash.com/photo-1553688738-a278b9f063e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGV0JTIwY2xpbmljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="medicare"
              className="rounded allservice-img"
            ></img>
            <div className="text-center pt-4 para-all">
            <h3 className='text-center p-2'>Pet clinic Details</h3>
              <p>
              Pet clinics are medical facilities that specialize in providing veterinary care and treatment to animals, including routine checkups, vaccinations, surgeries, and emergency care. 
              </p>
              <button className="btn btn-primary">Read more</button>
            </div>
          </div>
        </div>
        <Footers></Footers>
    </div>
  )
}

export default Medicare