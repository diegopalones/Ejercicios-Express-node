const express = require('express')
const app = express()
app.use(express.json());



const productos = [
    {id: 1,
    nombre: 'Taza de Harry Potter',
    precio: 300},
    {id: 2,
    nombre: 'FIFA 22 PS5', 
    precio: 1000
    },
    {id: 3,
    nombre: 'Figura Goku Super Saiyan', 
    precio: 100 
    },
    {id: 4,
    nombre: 'Zelda Breath of the Wild', 
    precio: 200},
    {id: 5,
    nombre: 'Skin Valorant', 
    precio: 120},
    {id: 6,
    nombre: 'Taza de Star Wars', 
    precio: 220}
]

app.get('/', (req, res) => {
    res.send('Hola caracola')
  });
  
  app.get("/productos",(req,res)=> {
      res.send(productos)
  });

  app.post('/productos', (req, res) => {
    const newProduct = {
        id: productos.lenght+1,
        nombre: req.body.nombre,
        precio: req.body.precio,
    }
    if(!req.body.nombre || !req.body.precio){
        res.status(400).send({msg:"¡No has rellenado todos los campos!"})
    }
    else{
        productos.push(newProduct)
            
        res.status(201).send(productos);
    }
})

app.put('/id:id',(req,res)=>{
    const found = productos.some(producto => producto.id == req.params.id)
    productos.forEach(producto=>{
        if(producto.id == req.params.id){
            producto.nombre = req.body.nombre,
            producto.precio = req.body.precio
            res.send(producto)
                }
            })
        
            })   

app.delete("/id/:id", (req, res) => {
    const found = productos.some(producto => producto.id == req.params.id)
        if (found) {
            res.send(productos.filter(producto => producto.id != req.params.id))
            } else {
             res.status(404).send({ msg: `Producto con id ${req.params.id} no encontrado` })
                }
            })

            
app.get("/precio/:precio",(req,res)=>{
     const found = productos.some(producto => producto.precio == req.params.precio)
    if(found){
        res.send(productos.filter(producto => producto.precio == req.params.precio))
        }else{
    res.status(404).send({msg:`Producto con precio ${req.params.precio} no encontrado`})
        }
                })            


app.get("/precio", (req, res) => {
    res.send(productos.filter((producto) => producto.precio >= 50 && producto.precio <= 250))
     });
        
     
app.get("/id/:id", (req, res) => {
    res.send(productos.filter(producto => producto.id == req.params.id))
    });


app.get("/productos/:nombre", (req, res) => {
    res.send(productos.filter(producto => producto.nombre == req.params.nombre))
});
        

        
    
app.listen(3000, ()=> console.log('Servidor funcionando en el puerto 3000'))
    
    
                
                    
                    



