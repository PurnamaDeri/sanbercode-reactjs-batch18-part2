import React from 'react'

class Tugas12 extends React.Component{

  constructor(props){
    super(props)
    this.state ={
     dataHargaBuah : [
        {name: "Semangka", price: 10000, weight: 1000},
        {name: "Anggur", price: 40000, weight: 500},
        {name: "Strawberry", price: 30000, weight: 400},
        {name: "Jeruk", price: 30000, weight: 1000},
        {name: "Mangga", price: 30000, weight: 500}
     ],
        InputNama: "",
        InputHarga: 0,
        InputBerat: 0,
        index: -1  
      }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(event){
    event.preventDefault()
    let name = this.state.InputNama
    let price = this.state.InputHarga
    let weight = this.state.InputBerat

    if (name.replace(/\s/g,'') !== "" && price.replace(/\s/g,'') !== ""){      
    
    let index = this.state.index
    let dataHargaBuah = this.state.dataHargaBuah

    if (index === -1){
      this.setState({dataHargaBuah: [...dataHargaBuah, {name, price, weight}]})
    }else{

      dataHargaBuah[index] = {name,price, weight}

      this.setState({
          dataHargaBuah, 
          InputBuah: "",
          InputHarga: 0,
          InputBerat: 0
        })
    }
  }
}

    handleChange (event){
        let Input = event.target.name
        switch (Input){
          case "name": {this.setState({InputNama: event.target.value});
            break
          }
          case "price": {this.setState({InputHarga: event.target.value});
            break
          }
          case "weight": {this.setState({InputBerat: event.target.value});
              break
          }
        default:
          {break;}
        }
    
    }
    
  handleEdit(event){
    let index = event.target.value
    let dataHargaBuah  = this.state.dataHargaBuah[index]
    this.setState({

    InputNama: dataHargaBuah.name,
    InputHarga: dataHargaBuah.price,
    InputBerat: dataHargaBuah.weight,
    index: index
    })
  }

    handleDelete = (event) =>{
        let index = event.target.value;
        this.state.dataHargaBuah.splice(index, 1)
        this.setState({dataHargaBuah: this.state.dataHargaBuah})
    }

    render(){
        return(
        <div style={{margin: "0 auto", width: "80%"}}>
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
                    this.state.dataHargaBuah.map((item, index)=>{
                    var number = index+1; 
                    return(                    
                        <tr key={number}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.weight/1000} kg</td>
                        <td>
                            <div style = {{textAlign:"center"}}>
                            <button  value={index} onClick={this.handleEdit}>Edit</button>
                            <button style={{marginLeft: "1em"}} value={index} onClick={this.handleDelete}>Delete</button>
                            </div>
                        </td>
                        </tr>
                    )
                    })
                }
            </tbody>
            </table>
            <br/>

            <form class="formsubmit" onSubmit={this.handleSubmit}>
                <h3>Masukkan Data Berikut!</h3>
            <label>
                Nama Buah:
            </label>          
            <input type="text" name = "name" class="labelbuah" required onChange={this.handleChange} value={this.state.InputNama} />
            <br/>

            <label>
                Harga Buah:
            </label>          
            <input type="number" name = "price" class="labelbuah" required onChange={this.handleChange} value={this.state.InputHarga} />
            <br/>

            <label>
                Berat(g):
            </label>          
            <input type="number"  name = "weight" class="hargabuah" required onChange={this.handleChange} value={this.state.InputBerat} />
            <br/>
            <br/>

            <input type="submit" value="Submit" style = {{marginLeft: "270px"}}/>
            </form>
        </div>
        )
    }
}

export default Tugas12;
