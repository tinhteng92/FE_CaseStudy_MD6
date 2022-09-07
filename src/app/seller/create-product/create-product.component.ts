import { Component, OnInit } from '@angular/core';
import {finalize, Observable} from "rxjs";
import {LoginService} from "../../service/login/login.service";
import {Router} from "@angular/router";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  title = "cloudsSorage";
  fb: string = "https://icon-library.com/images/user-icon-jpg/user-icon-jpg-24.jpg";
  downloadURL: Observable<string> | undefined;
  // constructor( ) {}

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
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

  check: boolean = false;

  constructor(private loginService: LoginService, private router: Router,private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
  }

  createProductForm = new FormGroup({
    name: new FormControl("", Validators.required),
    productCategory: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    quantityStorage: new FormControl("", [Validators.required, Validators.pattern("([1-9]|[1-9][0-9]|[1-9][0-9][0-9])")]),
    avatar: new FormControl(""),
    description: new FormControl("", Validators.required),
  })

  createProduct(){
    if (this.createProductForm.valid){
      this.createProductForm.get("avatar")?.setValue(this.fb);
      this.loginService.registerCustomer(this.createProductForm.value).subscribe((data) => {
        console.log("data");
        console.log(data);
        this.router.navigate(["/seller"]);
      })
    } else {
      alert("Please checkout form!");
      this.router.navigate(["/seller/create-product"]);
    }
  }
}
