import { Component, OnInit } from '@angular/core';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
   title = 'Subir Archivos';

   ngOnInit() {
     this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
        this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
             console.log("ImageUpload:uploaded:", item, status, response);
             alert('Archivo cargado correctamente');
         };
     }
}
