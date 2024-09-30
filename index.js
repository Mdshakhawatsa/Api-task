const express = require('express');
const app = express();
const port = 3001;
app.use(express.json());


const products = [
    {
        "_id": "1",
        "title": "Exploring the Mountains",
        "description": "My journey through the Rocky Mountains was amazing!",        
        "userName": "JohnDoe"
    },
    {
        "_id": "2",
        "title": "Delicious Pasta Recipe",
        "description": "Today, I tried a new pasta recipe, and it turned out great!",       
         "userName": "JaneSmith"
    },
    {
        "_id": "3",
        "title": "Mastering JavaScript Tips",
        "description": "Sharing some key tips and tricks for mastering JavaScript.",        
        "userName": "CodeMaster"
    },
    {
        "_id": "4",
        "title": "Grand Canyon Adventure",
        "description": "Pictures from my recent hike in the Grand Canyon.",
      "userName": "NatureLover"
    },
    {
        "_id": "5",
        "title": "Top 10 Books to Read This Year",
        "description": "A list of my favorite books this year!",
        "userName": "BookWorm"
    },
    {
        "_id": "6",
        "title": "Achieving Fitness Goals",
        "description": "Finally hit my target weight this month! Feeling proud.",
        "userName": "FitnessFanatic"
    },
    {
        "_id": "7",
        "title": "Dreaming of Japan",
        "description": "Next on my travel list: Japan!",
        "userName": "TravelAddict"
    },
    {
        "_id": "8",
        "title": "React Learning Journey",
        "description": "Started learning React. It’s challenging but rewarding!",
        "userName": "FrontEndDev"
    },
    {
        "_id": "9",
        "title": "Low Light Photography Tips",
        "description": "Sharing some of my best tips for shooting in low light.",
        "userName": "PhotoGuru"
    },
    {
        "_id": "10",
        "title": "Seasonal Gardening Success",
        "description": "My flowers are blooming beautifully this season!",
         "userName": "GreenThumb"
    }
]








// get request
app.get('/products', (req, res) => {
   console.log (req.body);
    // const obj = [{name:"iphone", quantaty:5,id:1},{name:"iphone", quantaty:5, id:2},{name:"iphone", quantaty:5,id:3}]
    res.status(200).json({
        message:"product retirvide successfully",
        success:true,
        data:products
    });
  });
// get single request
app.get("/product/:id", (req, res)=>{
    const obj = [{name:"iphone", quantaty:5,id:1},{name:"nokia", quantaty:5, id:2},{name:"Qphone", quantaty:5,id:3}]
    const data = obj.find(data => data.id === Number (req.params.id))
    res.status(200).json({
        message:"product retrive successfully",
        success:true,
        data:data
    }) ;              
});


//   post request
app.post('/products', (req, res) => {
    res.status(200).json({
        message:"product added successfully",
        success:true,
        data:{}
    });
  });


//   put
app.put("/products/:id", (req, res) => {
    const result = products.find((product) => product._id === req.params.id);

    result.title = req.body.title ?? result.title;
    res.status(200).json({
        message: "Product updated successfully",
        success: true,
        data: result
    });
});


// delete
app.delete("/products/:id", (req,res)=>{
    const deleteProductId = req.params.id;
    const deleteId = products.filter((data)=> data._id !== deleteProductId);
    res.status(200).json({
        message: "Product delete successfully",
        success: true,
        data: deleteId,
    });
})




// listen
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
 
})