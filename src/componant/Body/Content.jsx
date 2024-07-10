import React, { useState, useEffect } from 'react';
import { Image } from 'antd';
import axios from 'axios';
import "./hover-img.css"; // Import your custom CSS if needed

function Content() {
    const [visible, setVisible] = useState(false);
    const [images, setImages] = useState([]);

    const urlDB = "http://localhost:3000/New";

    async function getData() {
        try {
            const response = await axios.get(urlDB);
            return response.data;
        } catch (error) {
            console.error("Error fetching data:", error);
            return [];
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData();
                setImages(data);
            } catch (error) {
                console.error("Error setting images:", error);
                setImages([]);
            }
        };

        fetchData();
    }, [urlDB]);

    return (
        <div style={{ textAlign: 'center', paddingTop: '10px'}}>
            <div style={{display: "flex", flexWrap: "wrap", padding: "10px", justifyContent: "center", margin:"20px"}}>
                {images.map((image, index) => (
                    <div className='test' style={{ padding: "7px" }} key={index}>
                        <Image
                            width={304}
                            height={176}
                            src={image.imagePreviewUrl}
                            onClick={() => setVisible(true)}
                        />
                        <p style={{ width: '304px' }}>{image.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Content;