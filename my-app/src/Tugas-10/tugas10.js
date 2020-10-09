import React from 'react';

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
];

class DataTabel extends React.Component {
    render() {
        return <td>{this.props.nama}</td>;
    }
}

class Tugas10 extends React.Component {
    render() {
        return(
            <>
            <h1 style ={{"text-align" : "center", "Margin-top" : "1cm" }}>Tabel Harga Buah</h1>

                <table class = "TabelBuah">
                    <th  class = "tr1">Nama</th>
                    <th  class = "tr1">Harga</th>
                    <th  class = "tr1">Berat</th>
                {
            dataHargaBuah.map(
                item=> {
                    return(
                    <tr>
                        <DataTabel nama={item.nama}/>
                        <DataTabel nama={item.harga}/>
                        <DataTabel nama={(item.berat/1000) + " kg"}/>
                    </tr>
                )})
                }
        </table>
        </>
        )
    }
}

export default Tugas10;
