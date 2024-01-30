import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CKEditorModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ckeditor';
  ckeditorContent: string = '<p>Some html</p>';
  editorConfig: any = {
    language: 'es', // Set the language to Spanish
    // Other CKEditor configuration options
  };
  onChange(event: any) {
    console.log('1', this.ckeditorContent);
  }
  onEditorChange(event: any) {
    console.log('2', this.ckeditorContent);
  }
  onReady(event: any) {
    console.log('3', this.ckeditorContent);
  }
  onFocus(event: any) {
    console.log('4', this.ckeditorContent);
  }
  onBlur(event: any) {
    console.log(this.ckeditorContent);
  }
  onContentDom(event: any) {
    console.log(this.ckeditorContent);
  }
  onFileUploadRequest(event: any) {
    console.log(this.ckeditorContent);
  }
  onFileUploadResponse(event: any) {
    console.log(this.ckeditorContent);
  }
  onPaste(event: any) {
    console.log(this.ckeditorContent);
  }
  onDrop(event: any) {
    console.log(this.ckeditorContent);
  }
}
