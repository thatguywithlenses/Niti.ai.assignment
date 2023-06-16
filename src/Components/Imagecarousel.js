import React, {useState, useEffect} from 'react';
import Mycard from './Mycard.js';
import './Imagecarousel.css';
const Imagecarousel = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        //fetch data from the backend API endpoint
        fetchData();
    },[]);

    const fetchData = async() => {
        //Replace the below three lines with your actual API endpoint
        // const response = await fetch('https://example.com/api/data');
        // const jsonData = await response.json();
        // setData(jsonData);

        // Below is the Mock data for the demo
        const mockData = [
            {id:0,title:'0'},
            {id:1,title:'1'},
            {id:2,title:'2'},
            {id:3,title:'3'},
            {id:4,title:'4'},
            {id:5,title:'5'},
            {id:6,title:'6'},
            {id:7,title:'7'},
            {id:8,title:'8'},
            {id:9,title:'9'},
            {id:10,title:'10'},
            {id:11,title:'11'},
            {id:12,title:'12'},
            {id:13,title:'13'},
            {id:14,title:'14'},
            {id:15,title:'15'},
            {id:16,title:'16'},
            {id:17,title:'17'}
        ];
        setData(mockData);
    }

    //function to navigate to the previous cards
    const btnpressprev = () => {
        let box = document.querySelector(".product-container");
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width);
      };

    //function to navigate to the next cards
    const btnpressnext = () => {
        let box = document.querySelector(".product-container");
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width);
      };
    return (
        <div className="product-carousel">
            <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
            <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>


            <div className="product-container">
                {data.map(item =>(
                    <Mycard key={item.id} cardno={item.title}/>
                ))}
            </div>
        </div>
    )
}

export default Imagecarousel;