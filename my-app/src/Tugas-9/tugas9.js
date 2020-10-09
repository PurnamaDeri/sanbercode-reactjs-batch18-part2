import React from 'react'

class UserForm extends React.Component{
    render(){
        return (
            <p className="border" style = {{border: "1px solid",width: "50%", margin: "0 auto",}}>
            <h1 className="judul">Form Pembelian Buah</h1>
            <form action="#">
            <label className="labelform" for="fname">Nama Pelanggan</label>
              <input type="text" id="fname" name="firstname" placeholder="Nama Pelanggan..."></input>
              
            <div class="row">
            <div class="col-25">
              <label className="judul2" for="lname">Daftar Item</label>
            </div>
        
            <div class="col-75">
                <input type="checkbox"></input>
                <span class="checkmark"></span>
                <label class="container-checkbox">Semangka</label>
                <br></br>
        
                <input type="checkbox"></input>
                <span class="checkmark"></span>
                <label class="container-checkbox">Jeruk</label>
                <br></br>
        
                <input type="checkbox"></input>
                <span class="checkmark"></span>
                <label class="container-checkbox">Nanas</label>
                <br></br>
            
                <input type="checkbox"></input>
                <span class="checkmark"></span>
                <label class="container-checkbox">Salak</label>
                <br></br>
                
                <input type="checkbox"></input>
                <span class="checkmark"></span>
                <label class="container-checkbox">Anggur</label>
                <br></br>
                </div>
                </div>
                <br></br>
                </form>
                <button class="button">Kirim</button>
            </p>
          );
    }
}

export default UserForm