import {Component, OnInit} from '@angular/core';
import {Page} from "../../model/Page";
import {AdminService} from "../../service/admin/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ScriptService} from "../../script.service";
import {Seller} from "../../model/Seller";


@Component({
  selector: 'app-seller-management',
  templateUrl: './seller-management.component.html',
  styleUrls: ['./seller-management.component.css']
})
export class SellerManagementComponent implements OnInit {

  constructor(private script: ScriptService, private adminService: AdminService, private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  p: any;
  sellers: Seller[] = []



  ngOnInit(): void {
    // this.script.load('bundle').then(data => {
    // }).catch(error => console.log(error));
    this.adminService.showActiveSeller().subscribe((data) => {
      this.sellers = data
    })
  }

  showActiveSeller() {
    this.adminService.showActiveSeller().subscribe(data => {
      this.sellers = data
    })

  }

  counter(i: number) {
    return new Array(i);
  }

  deleteSeller(id: any) {
    this.adminService.deleteSeller(id).subscribe(data => {
      this.showActiveSeller();
      // this.router.navigate(['/admin']);
    }, e => console.log(e));
  }



  search(search: string) {
    this.adminService.showActiveSeller().subscribe(sellers => {

      let searchSeller: Seller[] = [];
      for (const seller of sellers) {
        if (seller.name?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          .replace(/đ/g, 'd').replace(/Đ/g, 'D').includes(search.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D'))) {
          searchSeller.push(seller)
        }
      }
      this.sellers = searchSeller;
    })
  }

  controlSeller(id: number) {
    this.adminService.controlSeller(id).subscribe(data => {
      this.showActiveSeller();
      // this.router.navigate(['/admin']);

    }, e => console.log(e));
  }

  nameUp(){
    this.adminService.filterSellerByNameUp().subscribe(data =>{
      this.sellers = data;
      console.log(data)
    }, e => console.log(e));
  }

  nameDown(){
    this.adminService.filterSellerByNameDown().subscribe(data =>{
      this.sellers = data;
      console.log(data)
    }, e => console.log(e));
  }

}
