import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/Product";
import {ActivatedRoute, Router} from "@angular/router";
import {SellerService} from "../../service/seller/seller.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../service/login/login.service";
import {finalize, Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {ProductCategory} from "../../model/ProductCategory";
import {ProductCategoryService} from "../../service/product-category/product-category.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  id: any;
  product!: Product;

  constructor(private route: ActivatedRoute, private sellerService: SellerService
              , private router: Router, private loginService: LoginService, private storage: AngularFireStorage
              , private productCategoryService: ProductCategoryService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.sellerService.getProduct(this.id).subscribe((data) => {
        this.product = data;
        this.fb=data.img;
        console.log(data);
      })
    })
    this.getCategory()
  }
  productCategories: ProductCategory[] = [];
  getCategory() {
    this.productCategoryService.getCategory().subscribe(data => {
      this.productCategories = data;
    })
  }

  cancel(){
    this.router.navigate(["/seller"]);
  }
  title = "cloudsSorage";
  fb: string = "https://icon-library.com/images/user-icon-jpg/user-icon-jpg-24.jpg";
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
              this.product.image = url;
              this.fb=url;
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

  editProductForm = new FormGroup({
    name: new FormControl("", Validators.required),
    productCategory: new FormControl(true),
    price: new FormControl(this.product?.price, Validators.required),
    quantityStorage: new FormControl("", [Validators.required, Validators.pattern("([1-9]|[1-9][0-9]|[1-9][0-9][0-9])")]),
    image: new FormControl(""),
    description: new FormControl("", Validators.required),
  })


  editProduct() {
    let userID = this.loginService.getUserToken().id;
    this.editProductForm.get("image")?.setValue(this.fb);
    let productToCreate = this.editProductForm.value;
    console.log("product to create: ", productToCreate)
    if (this.editProductForm.valid) {
      this.sellerService.createProduct(productToCreate, userID).subscribe((data) => {
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
