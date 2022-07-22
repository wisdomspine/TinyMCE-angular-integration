import { Component, OnInit } from '@angular/core';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, last } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  source: string = '';
  title = 'images-tinymce';
  tinymceinit: any = {};
  config: EditorComponent['init'] = {
    plugins: 'lists link image table code help wordcount',
    toolbar:
      'undo redo | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | link image',
    file_picker_types: 'image',
    image_advtab: false,
    image_description: false,
    image_dimensions: false,
    block_unsupported_drop: true,
    placeholder: 'Once upon a time...',
    content_css: 'writer',
    content_style: 'img{max-width:100%;height:auto;}',
    images_reuse_filename: true,
    paste_data_images: false,
    height: 'calc(100vh - 88px)',
    images_upload_handler: (blobInfo) => {
      const file = blobInfo.blob();
      const filePath = `${Date.now()}-${blobInfo.filename()}`;
      const ref = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);

      const promise = new Promise<string>((resolve, reject) => {
        task
          .snapshotChanges()
          .pipe(
            finalize(() =>
              ref
                .getDownloadURL()
                .pipe(last())
                .subscribe((url) => {
                  resolve(url);
                })
            )
          )
          .subscribe((_) => {
            // do nothing
          });
      });
      return promise;
    },
  };

  constructor(private storage: AngularFireStorage) {}

  ngOnInit() {
    this.tinymceinit;
  }
}
