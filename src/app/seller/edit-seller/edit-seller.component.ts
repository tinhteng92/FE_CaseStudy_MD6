import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SellerService} from "../../service/seller/seller.service";
import {LoginService} from "../../service/login/login.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {Seller} from "../../model/Seller";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {finalize, Observable} from "rxjs";

@Component({
  selector: 'app-edit-seller',
  templateUrl: './edit-seller.component.html',
  styleUrls: ['./edit-seller.component.css']
})
export class EditSellerComponent implements OnInit {
  id: any;
  seller!: Seller;
  editSellerForm: any;
  constructor(private route: ActivatedRoute, private sellerService: SellerService
    , private router: Router, private loginService: LoginService, private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.sellerService.getThisSeller(this.loginService.getUserToken().id).subscribe((data) => {
        this.seller = data;
        this.avatar = data.img;
        this.editSellerForm = new FormGroup({
          name: new FormControl(data.name, Validators.required),
          phoneNumber: new FormControl(data.phoneNumber,[Validators.required, Validators.pattern("^0[0-9]{9}$")]),
          avatar: new FormControl(data.avatar),
          imageBanner: new FormControl(data.imageBanner),
          address: new FormGroup(data.address, Validators.required),
          isAccept: new FormGroup(data.isAccept),
          isActive: new FormGroup(data.isActive),
        })
        console.log(data)
      })
    })
  }
  cancel(){
    this.router.navigate(["/seller"]);
  }

  title = "cloudsSorage";
  avatar!: string ;
  downloadURL: Observable<string> | undefined;
  onFileSelected(event: Event) {
    var n = Date.now();
    // @ts-ignore
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.seller.avatar = url;
              this.avatar=url;
            }
            console.log(this.avatar);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }
   editSeller(){
    let userID = this.loginService.getUserToken().id;
    this.editSellerForm.get("avatar")?.setValue(this.seller.avatar);
    this.editSellerForm.get("imageBanner")?.setValue(this.seller.imageBanner);
    let sellerToEdit = this.editSellerForm.value;
     console.log("seller to edit: ", sellerToEdit)
     if(this.editSellerForm.valid){
       this.sellerService.editSeller(sellerToEdit, userID).subscribe((data) =>{
         console.log("data", data);
         this.router.navigate(["/seller"]);
       })
     } else {
       alert("Please checkout form");
       this.router.navigate(["/seller"]);
     }
   }
}

