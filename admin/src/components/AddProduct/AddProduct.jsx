//6:49
// export default AddProduct;
import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg';

const AddProduct = () => {
  // State to store the selected image
  const [image, setImage] = useState(false);
  const [productDetails,setProductDetails]=useState({
    name:"",
    image:"",
    category:"women",
    new_price:"",
    old_price:""

  })
   
  // Image handler to capture the uploaded image
  const imageHandler = (e) => {
    setImage(e.target.files[0]); // Setting the selected file
  };
  const changeHandler=(e)=>{
    setProductDetails({...productDetails,[e.target.name]:e.target.value})
  }

  const Add_Product=async ()=>{
    console.log(productDetails)
    let responseData;
    let product=productDetails;

    let formData=new FormData();
    formData.append('product',image);


  //sending at backend to multer
    await fetch('http://localhost:4000/upload',{
      method:'POST',
      headers:{
        Accept:'application/json',
      },
      body:formData,
    }).then((resp)=>resp.json()).then((data)=>{
      responseData=data
    })
    if(responseData.success){
      product.image=responseData.image_url;
      console.log(product);
    
  
      await fetch('http://localhost:4000/addProduct', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'  // Correct content type
        },
        body: JSON.stringify(product),
    })
    .then((resp) => resp.json())
    .then((data) => {
        data.success ? alert('Product added successfully!') : alert('Failed to add product');
    })
    .catch((error) => {
        console.error('Error:', error);  // Handle any network or fetch errors
    });
    



    }
  }





  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder="Type here" />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input value={productDetails.old_price} type="text" onChange={changeHandler} name="old_price" placeholder="Type Here" />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder="Type Here" />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Categories</p>
        <select  value={productDetails.category} onChange={changeHandler} name="category" className="add-product-selector">
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kids</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            className="addproduct-thumbnail-img"
            alt="Product"
          />
        </label>
        <input
          type="file"
          name="image"
          id="file-input"
          onChange={imageHandler}
        />
      </div>
      <button onClick={()=>{Add_Product()}} className="addproductbtn">Add</button>
    </div>
  );
};

export default AddProduct;







