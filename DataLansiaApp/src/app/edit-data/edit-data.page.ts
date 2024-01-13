import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CapacitorHttp } from '@capacitor/core';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.page.html',
  styleUrls: ['./edit-data.page.scss'],
})
export class EditDataPage implements OnInit {
  id_Lansia : string;
  data_lansia: {nama:'', tempat_lahir:'', tanggal_lahir:'', alamat:'', umur:'', status_:''};

  constructor(private router:Router, private route: ActivatedRoute) { 
    this.id_Lansia='';
    this.data_lansia = {nama:'', tempat_lahir:'', tanggal_lahir:'', alamat:'', umur:'', status_:''} ;
  }

  kembali(){
    this.router.navigate(['/home']);
  }
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id_Lansia = params['id'];
    });
    this.edit(this.id_Lansia);
  }

  async edit(id_lansia:string){
    try {
      const response = await CapacitorHttp.request({
        url: `http://192.168.117.120/lansia_api/detail.php?id_lansia=${id_lansia}`,
        method:'GET',
        headers: {'Content-Type':'application/json'},
      });  
      this.data_lansia = response.data[0];
    }
    catch (error){
      console.error('Error',error);
    }
  }

  async proses_edit(id_lansia:string){
    try {
      const response = await CapacitorHttp.request({
        url: `http://192.168.117.120/lansia_api/edit.php?id_lansia=${id_lansia}`,
        method:'POST',
        data: this.data_lansia,
        headers: {'Content-Type':'application/json'},
      });

      console.log('Data Berhasil Diedit: ', response.data);
      this.router.navigate(['/home']);

    } catch (error){
      console.error('error',error);
    }
  }

}
