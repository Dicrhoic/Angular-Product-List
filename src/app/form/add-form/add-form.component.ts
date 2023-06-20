import { Component, OnInit, SecurityContext, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageProduct } from 'src/classes/imageProduct';
import { DomSanitizer } from '@angular/platform-browser';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements AfterViewInit {
  @ViewChild('prodRes', {static: false}) htmlData!: ElementRef<HTMLDivElement>;
  @ViewChild('prodImg', {static: false}) htmlImg!: ElementRef<HTMLImageElement>;
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
 
  today: number = Date.now();

  ngAfterViewInit() {
    this.htmlData.nativeElement.focus();
  }

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
  openPDF() {
    let DATA: any = document.getElementById('prodRes');
    console.log(this.htmlData.nativeElement);
    let PDF = new jsPDF('p', 'mm', 'a4');
    PDF.html(this.htmlData.nativeElement, {
      callback(doc) {
        doc.output('pdfobjectnewwindow');
      },
      margin: [10, 10, 10, 10],
      autoPaging: 'text',
      x: 0,
      y: 0,
      width: 190,
      windowWidth: 675 
    });
    autoTable(PDF, {html: '#prodRes'});
    //PDF.output('pdfobjectnewwindow');
  }

  savePDF() {
    let DATA: any = document.getElementById('prodRes');
    let PDF = new jsPDF('p', 'mm', 'a4');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
     
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
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
