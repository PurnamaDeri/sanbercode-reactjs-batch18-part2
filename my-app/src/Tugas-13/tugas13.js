import React, {useState, useEffect} from "react";
import axios from 'axios';


const Tugas13 = () => {
const [daftarbuah, setdaftarbuah] =  useState(null);
const [input, setInput] = useState({name: "",price: "", weight: 0, id: null});


useEffect ( () => {
  if (daftarbuah === null){
  axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
  .then(res => {
    let dataBuah = res.data
    setdaftarbuah(
      dataBuah.map(el=> {

      return {
        id: el.id,
        name: el.name,
        price: el.price,
        weight: el.weight
      }
    }))
  })
}}, [daftarbuah])

const submitForm  = (event) =>{
      event.preventDefault()
  
      if (input.id === null){
        axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name: input.name, price: input.price.toString(), weight: input.weight})
        .then(res => {
          setdaftarbuah([...daftarbuah, {id: res.data.id, name: input.name, price: input.price.toString(), weight: input.weight}])
        })
      
      }else{
          axios.put(`http://backendexample.sanbercloud.com/api/fruits/${input.id}`, {name: input.name, price: input.price.toString(), weight: input.weight})
        .then(res => {
          let databuah = daftarbuah.map(el => {
            if (el.id === input.id){
              el.name = input.name;
              el.price = input.price.toString();
              el.weight = input.weight;
            }
            return el
        })
        setdaftarbuah(databuah);
        setInput({id: null, name: "", price: "", weight: 0})
  })
}
}

const handleDelete = (event) => {
  let idbuah = parseInt(event.target.value);
  axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idbuah}`)
  .then(res => {
    let newdaftarbuah = daftarbuah.filter (el => el.id !== idbuah)
    setdaftarbuah(newdaftarbuah)
  })
}

  const handleEdit = (event) => {
    let idbuah = parseInt(event.target.value)
    let databuah = daftarbuah.find(x => x.id === idbuah)
    setInput({ name: databuah.name,
               price: databuah.price,
               weight: databuah.weight,
               id: idbuah
    })
  }

  const ChangeInput = (event) => {
      let tipedata = event.target.name
      switch (tipedata){
        case "name": {setInput({...input, name: event.target.value}); break;}
        case "price": {setInput({...input, price: event.target.value});break;}
        case "weight": {setInput({...input, weight: event.target.value});break;}
        default: {break;}
        }
    }
  
      return(
        <div style={{margin: "0 auto", width: "100%"}}>
            <h1 style ={{"text-align" : "center", "Margin-top" : "1cm" }}>Tabel Harga Buah</h1>
            <table class = "TabelBuah">
            <thead>
                <tr>
                <th>Nama</th>
                <th>Harga</th>
                <th>Berat</th>
                <th>Aksi</th>
                </tr>
            </thead>
              <tbody>
                {
                    daftarbuah !== null && daftarbuah.map((item, index)=>{
                    var number = index+1; 
                    return(                    
                        <tr key={number}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.weight/1000} kg</td>
                        <td>
                            <div>
                            <button value = {item.id} onClick={handleEdit}>Edit</button>
                            <button value={item.id} onClick = {handleDelete}>Delete</button>
                            </div>
                        </td>
                        </tr>
                    )
                    })
                }
              </tbody>
            </table>
            <br/>

            <form class="formsubmit" onSubmit={submitForm }>
                <h3>Masukkan Data Berikut!</h3>
            <label>
                Nama Buah:
            </label>          
            <input type="text" name = "name" class="labelbuah" required onChange = {ChangeInput} value={input.name} />
            <br/>
            <label>
                Harga Buah:
            </label>          
            <input type="text" name = "price" class="labelbuah" required onChange = {ChangeInput} value={input.price} />
            <br/>
            <label>
                Berat Buah (g):
            </label>          
            <input type="number"  name = "weight" class="hargabuah"  required onChange={ChangeInput} value = {input.weight} />
            <br/>
            <br/>

            <button>Submit</button>
            </form>
        </div>
        )
}


export default Tugas13;
