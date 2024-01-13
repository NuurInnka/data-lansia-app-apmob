import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Capacitor, CapacitorHttp } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data_lansia: any[];
  constructor(private router:Router) {
    this.data_lansia = [];
    this.ambil_data();
  }

  detail(id_lansia:string){
    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: id_lansia
      }
    };
    this.router.navigate(['/detail-data'], navigationExtras);
  }

  tambah(){
    this.router.navigate(['/tambah-data']);
  }

  async edit(id_lansia:string){
    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: id_lansia
      }
    };
  
    // Melakukan navigasi ke halaman '/edit-data' dengan menyertakan queryParams
    this.router.navigate(['/edit-data'], navigationExtras);
  }

  async ambil_data(){
    const options = {
      url : "http://192.168.117.120/lansia_api/tampil.php",
      Headers: {'content-Type': 'application/json'}
    };
    try{
      const response = await CapacitorHttp.request({
        ...options,
        method:'GET',
      });
      this.data_lansia = response.data;
    }
    catch (error){
      console.error('Error',error);
    }

  }
async hapus(id_lansia:string){
  try {
    const response = await CapacitorHttp.request({
      url: `http://192.168.117.120/lansia_api/hapus.php?id_lansia=${id_lansia}`,
      method:'GET',
      headers: {'Content-Type':'application/json'},
    });

    console.log('Data Berhasil Dihapus: ', response.data);
    location.reload();
    
  } catch (error){
    console.error('error',error);
  }
}  

}
