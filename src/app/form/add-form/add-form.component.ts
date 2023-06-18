import { Component, OnInit, SecurityContext} from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageProduct } from 'src/classes/imageProduct';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent {
  
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  preview = '';
  submitted = false;

  imageInfos?: Observable<any>;
  imageUri: string = ''
  constructor(private domSanitizer: DomSanitizer) { }

  model = new ImageProduct(0, '', 0, '' ,'','','');
  currency = ['AUD', 'USD', 'GBP', 'JPY'];

  onSubmit() { this.submitted = true; }

  updateImageHolder(uri: string){
    let imageLink = this.sanatizeString(uri);
    console.log(imageLink);
    imageLink != null ? this.imageUri = imageLink : this.imageUri = '';
  }

  sanatizeString(uri: string){
    let sanatisedString = this.domSanitizer.sanitize(SecurityContext.HTML, uri);
    return sanatisedString;
  }

  adjustPrice(cost: string): string {
    if(this.model)
    {
      console.log("Adjust call, adjusting: " + cost);
      var v = parseFloat(cost);
      cost = v.toFixed(2);
      console.log("Adjusted: " + cost);
      this.model.price = parseFloat(cost);
    }

    return cost;
  }

  selectFile(event: any): void {
    this.message = '';
    this.preview = '';
    this.progress = 0;
    this.selectedFiles = event.target.files;
  
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
  
      if (file) {
        this.preview = '';
        this.currentFile = file;
  
        const reader = new FileReader();
  
        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.preview = e.target.result;
        };
  
        reader.readAsDataURL(this.currentFile);
      }
    }
  }
}
