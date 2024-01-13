import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CapacitorHttp } from '@capacitor/core';

@Component({
  selector: 'app-tambah-data',
  templateUrl: './tambah-data.page.html',
  styleUrls: ['./tambah-data.page.scss'],
})
export class TambahDataPage implements OnInit {
  data_baru : {nama:'', tempat_lahir:'', tanggal_lahir:'', alamat:'', umur:'', status_:''};

  constructor(private router:Router) {
    this.data_baru = {nama:'', tempat_lahir:'', tanggal_lahir:'', alamat:'', umur:'', status_:''};
   }
  kembali(){
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

  async tambah_data(){
    try {
      const response = await CapacitorHttp.request({
        url: "http://192.168.117.120/lansia_api/tambah.php",
        method:'POST',
        data: this.data_baru,
        headers: {'Content-Type':'application/json'},
      });

      console.log('Data Berhasil Ditambahkan: ', response.data);
      this.router.navigate(['/home']);

    } catch (error){
      console.error('error',error);
    }
  }

}
