import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import Product from './Product';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const {products,search, showSearch}= useContext(ShopContext);
   const [showFilter, setShowFilter]=useState(false);
   const [filterProducts, setFilterproducts] =useState([]);
   const [category,setCategory]=useState([]);
   const [SubCategory,setSubCategory]=useState([]);
   const[sortType,setSortType]=useState('relevant');
 
//category
   const toggleCategory = (e) => {
      
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item => item !==e.target.value))     
    }else{
      setCategory(prev=>[...prev,e.target.value])
    }
   }
// subcategory
   const toggleSubCategory=(e)=>{
    // console.log(toggleSubCategory)
    if(SubCategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item => item !==e.target.value));
    }else(
      setSubCategory(prev=>[...prev,e.target.value])
    )
   }
    
  //  useEffect(()=>{
  //   setFilterproducts(products);
  //  },[]);


   const applyFilter= ()=>{
    let productsCopy  = products.slice();

    if(showSearch && search){
      productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length>0){
      productsCopy=productsCopy.filter(item=> category.includes(item.category));
    }
    if(SubCategory.length>0){
    productsCopy=productsCopy.filter(item=> SubCategory.includes(item.SubCategory));
    }

    setFilterproducts(productsCopy)
   }

        //For sorting 
   const sortProduct =()=>{

     let filterProductscopy=filterProducts.slice();
     switch(sortType){
      case 'low-high':
        setFilterproducts(filterProductscopy.sort((a,b)=>(a.price-b.price)));
        break;
      case 'high-low':
        setFilterproducts(filterProductscopy.sort((a,b)=>(b.price-a.price)))
        break;

       default:
        applyFilter();
        break;
      }

   }

   useEffect(()=>{
      applyFilter();
   },[category,SubCategory,search,showSearch]) 
 
   //For Sorting

   useEffect(()=>{
    sortProduct();
   },[sortType])
   
//category
  //  useEffect(()=>{
  //      console.log(category); 
  //  },[category])

   //subcategory
  //  useEffect(()=>{
  //   console.log(SubCategory)
  //  },[SubCategory])

  return (
    <div className='flex fex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
        {/* filter option */}
        <div className='min-w-60'>
          <p  onClick={()=>{setShowFilter(!showFilter)}} className='my-2 text-xl items-center cursor-pointer gap-2'>
            FILTERS
            <img  className={`h-3 sm:hidden ${showFilter? 'rotate-90': ''}`} src={assets.dropdown_icon}/>
          </p>
          {/* CATEGORY FILTER */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '': 'hidden'} sm:block `}>
             <p className='mb-3 text-sm font-medium'>Categories</p>
             <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
             <p className='flex gap-2'>
                <input  className='w-3' type='checkbox' value={'Men'} onClick={toggleCategory}/>
                Men
              </p><p className='flex gap-2'>
                <input  className='w-3' type='checkbox' value={'Women'}onClick={toggleCategory}/>
                Women
              </p><p className='flex gap-2'>
                <input  className='w-3' type='checkbox' value={'kids'}onClick={toggleCategory}/>
                Kids
              </p>
             </div>
          </div>
          {/* Sub category Filter */}
          <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '': 'hidden'} sm:block `}>
             <p className='mb-3 text-sm font-medium'>TYPE </p>
             <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
             <p className='flex gap-2'>
                <input  className='w-3' type='checkbox' value={'topwear'} onClick={toggleSubCategory}/>
                Topwear
              </p><p className='flex gap-2'>
                <input  className='w-3' type='checkbox' value={'bottomwear'} onClick={toggleSubCategory}/>
                Bottomwear
              </p><p className='flex gap-2'>
                <input  className='w-3' type='checkbox' value={'winterwear'} onClick={toggleSubCategory}/>
                Winterwear
              </p>
             </div>
          </div>
        </div>
        {/* rigth side  */}
          <div className='flex-1'>
            <div className='flex justify-between text-base sm:text 2xl:mb-4'>
              <Title text1={'ALL'} text2={'COLLECTIONS'}/>
              {/* PRODUCT SORT */}
              <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
              <option value="relevant ">Sort by Relevant</option>
              <option value="low-high">Sort by low-high</option>
              <option value="high-low">Sort by high-low</option>
              </select>
            </div>
            {/* Map product */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6'>
              {filterProducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
              ))}
            </div>
             
          </div>

    </div>
  )
}

export default Collection