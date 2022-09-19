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
  productCategories! : ProductCategory[];
  editProductForm: any;
  constructor(private route: ActivatedRoute, private sellerService: SellerService
              , private router: Router, private loginService: LoginService, private storage: AngularFireStorage
              , private productCategoryService: ProductCategoryService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.sellerService.getProduct(this.id).subscribe((data) => {
        this.product = data;
        this.fb=data.img;
        this.editProductForm= new FormGroup({
          name: new FormControl(data.name, Validators.required),
          sold: new  FormControl(data.sold),
          isDelete: new FormControl(data.isDelete),
          productCategory: new FormControl(data.productCategory),
          price: new FormControl(data.price, Validators.required),
          quantityStorage: new FormControl(data.quantityStorage, [Validators.required, Validators.pattern("([1-9]|[1-9][0-9]|[1-9][0-9][0-9])")]),
          image: new FormControl(data.img),
          description: new FormControl(data.description, Validators.required),
        })
        console.log(data);
      })
    })
    this.getCategory()
  }
  getCategory() {
    this.productCategoryService.getCategory().subscribe(data => {
      this.productCategories = data;
    })
  }

  cancel(){
    this.router.navigate(["/seller"]);
  }
  title = "cloudsSorage";
  fb!: string ;
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

  editProduct() {
    let userID = this.loginService.getUserToken().id;
    console.log(userID)
    this.editProductForm.get("image")?.setValue(this.product.image);
    let productToEdit = this.editProductForm.value;
    console.log("product to edit: ", productToEdit)
    if (this.editProductForm.valid) {
      this.sellerService.editProduct(productToEdit,this.id, userID).subscribe((data) => {
        console.log("data");
        console.log(data);
        alert("Complete Update Product");
        window.location.reload();
        this.router.navigate(["/seller"]);
      })
    } else {
      alert("Please checkout form!");
      this.router.navigate(["/seller"]);
    }
  }
}
