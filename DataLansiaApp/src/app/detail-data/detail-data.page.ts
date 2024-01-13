import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CapacitorHttp } from '@capacitor/core';

@Component({
  selector: 'app-detail-data',
  templateUrl: './detail-data.page.html',
  styleUrls: ['./detail-data.page.scss'],
})
export class DetailDataPage implements OnInit {
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
    this.detail(this.id_Lansia);
  }

  async detail(id_lansia:string){
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

}
