const express = require("express")
const app = express();
app.use(express.json());
const PORT = 3000
const products = [{
    id: 1,
    title: "A",
    price: 1500,
    quantity: 5
}]

app.get("/products", (req, res) => {
    if (products.length == 0) {
        res.status(404).json({
            msg: "You have no prodcuts in the array"
        })
    }
    res.json(products);

})

app.get("/product/:id", (req, res) => {
    const pid = req.params.id;
    const idx = products.findIndex(ind => ind.id == pid);
    if (idx == -1) {
        res.status(411).json({ message: "Product not found" })
    } else {
        res.status(200).json({ message: "Product found", data: products[idx] })
    }
})


app.post("/product", (req, res) => {
    const parsedBody = (req.body);
    const { title, price, quantity } = parsedBody;
    if (!title || !price || !quantity) {

        res.status(400).json({
            status: "failed",
            msg: "All fields are required"
        })
    }
    else {
        const newId = products.length ? products[products.length - 1].id + 1 : 1;
        const newProduct = { id: newId, title, price, quantity };
        products.push(newProduct)
        res.status(201).json({
            msg: "Created",
            newProduct
        })
    }

})

app.patch("/editproduct/:id", (req, res) =>{
    const pid = req.params.id;
    const {title, price , quantity } = req.body;
    const idx = products.findIndex(ind => ind.id == pid);
    if (!title || !price || !quantity) {
        res.status(400).json({
            status: "failed",
            msg: "All fields are required"
        })
    }
    else if (idx == -1) {
        res.status(411).json({ message: "Product not found" })
    } else {
        products[idx].title = title;
        products[idx].price = price;
        products[idx].quantity = quantity;
        res.status(200).json({status : "success", message: "Product updated succesfully"});
    }
})


app.delete("/deleteproduct/:id", (req, res) =>{
    const pid = req.params.id;
    const idx = products.findIndex(ind => ind.id == pid);
    if (idx == -1) {
        res.status(411).json({ message: "Product not found" })
    } else {
        products.splice(idx,1);
        res.status(200).json({status : "success", message: "Product deleted successfully succesfully"});
    }
})

app.listen(PORT, (err) => {
    try {
        console.log(`Server started at port:${PORT}`);
    } catch (err) {
        console.log("Server Error:", err.message)
    }
});