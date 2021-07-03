import React, {Component} from 'react';
import DaftaeMakanan from '../Lib/DaftarMakanan';
import FormMakanan from '../Form/FormMakanan';
import DaftarMakanan from '../Lib/DaftarMakanan';


const listmakanan = [
    {
        NamaMakanan: "Nasi Padang",
        Harga: "20.000"
    },
    {
        NamaMakanan: "Sate",
        Harga: "20.000"
    },
    {
        NamaMakanan: "Soto",
        Harga: "10.000"
    },
    {
        NamaMakanan: "Uduk",
        Harga: "10.000"
    },
    {
        NamaMakanan: "Nasi Kuning",
        Harga: "15.000"
    },
    {
        NamaMakanan: "Ayam Geprek",
        Harga: "15.000"
    },
    {
        NamaMakanan: "Pecel Lele",
        Harga: "10.000"
    },
    {
        NamaMakanan: "Pecel",
        Harga: "10.000"
    },
    {
        NamaMakanan: "Mie Ayam",
        Harga: "10.000"
    },
];

class MenuMakanan extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         pesan: "",
    //         jumlah: 0,
    //         tampil: false
    //     }
    //     this.pilihPesanan = this.pilihPesanan.bind(this);
    //     this.nasipadang = this.nasipadang.bind(this);
    //     this.sate = this.sate.bind(this);
    //     this.soto = this.soto.bind(this);
    //     this.uduk = this.uduk.bind(this);
    //     this.kuning = this.kuning.bind(this);
    //     this.batal = this.batal.bind(this);
    // }

    // pilihPesanan(value, e) {
    //     this.setState({
    //         [value]: e.target.value,
    //         tampil: true 
    //     });
    // }
    // nasipadang(){
    //     this.setState({
    //         pesan: "Nasi Padang",
    //         jumlah: this.state.jumlah + 1,
    //         tampil: true
    //     });
    // }
    // sate(){
    //     this.setState({
    //         pesan: "Sate",
    //         jumlah: this.state.jumlah + 1,
    //         tampil: true
    //     });
    // }
    // soto(){
    //     this.setState({
    //         pesan: "Soto Ayam Lamongan",
    //         jumlah: this.state.jumlah + 1,
    //         tampil: true
    //     });
    // }
    // uduk(){
    //     this.setState({
    //         pesan: "Nasi Uduk",
    //         jumlah: this.state.jumlah + 1,
    //         tampil: true
    //     });
    // }
    // kuning(){
    //     this.setState({
    //         pesan: "Nasi Kuning",
    //         jumlah: this.state.jumlah + 1,
    //         tampil: true
    //     });
    // }
    // batal(){
    //     this.setState({
    //         pesan: "",
    //         jumlah: 0,
    //         tampil: false
    //     });
    // }

    render(){
        return (
            <div>
                <h3>Daftar Makanan Favourite </h3>
                <table>
                    <tbody>
                        <tr>
                            {
                                DaftarMakanan.map((data, index) => {
                                    return (
                                        <td key={index}>
                                            <img 
                                                src={data.img} 
                                                alt="Foto Makanan"
                                                width="150"
                                                height="100"
                                            />
                                            <center>
                                                <p>{data.NamaMakanan}</p>
                                                <p>Harga : Rp. {data.Harga}</p>
                                            </center>
                                        </td>
                                    );
                                })
                            }
                            
                        </tr>
                    </tbody>
                </table>
                <br />
                <h4>
                    List Makanan
                </h4>
                {listmakanan.map((data, index) => {
                    return (
                        <div key={index}>
                            <p>
                                {data.NamaMakanan} | Harga : Rp. {data.Harga}
                            </p>
                        </div>
                    );
                })}
                <FormMakanan />
            </div>
        );
    }
}

export default MenuMakanan;