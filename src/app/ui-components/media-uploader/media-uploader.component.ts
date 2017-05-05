import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AzureMediaUrl } from '../../constants/app.constants';
import { MediaService } from './providers/media.service';
import { IMedia } from './media.interface';
import { moment, _ } from '../../vendor/third-party-libs';
// plugins
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar'; // horiz filmstrip scrolling
import { ToastrService, ToastrConfig, Toast } from 'ngx-toastr';

@Component({
  selector: 'app-media-uploader',
  templateUrl: './media-uploader.component.html',
  styleUrls: ['../../app.component.scss', './media-uploader.component.scss']
})
export class MediaUploaderComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('fileInput') mediaFileInput: ElementRef; // get access to template input for change evts
  @ViewChild('materialboxed') elMatBox: ElementRef; // image preview modal
  // pass in allowed media types
  @Input() filetypes: any|any[];

  public media: IMedia[];
  public leftControl: string = 'add';
  public rightControl: string = 'waiting';
  public perfectScrollbarConfig: PerfectScrollbarConfigInterface;
  // image preview modal -- via Materialize.css

  constructor(
    private _mediaService: MediaService,
    private _toastr: ToastrService,
    public toastrConfig: ToastrConfig
  ) {
    // config toastr
    this.toastrConfig.progressBar = true;
    this.toastrConfig.positionClass = 'toast-top-right';
    this.toastrConfig.extendedTimeOut = 10000;
    this.toastrConfig.toastClass = 'toast absolute';

  }

  ngOnInit() {
    // get media from Azure
    this._mediaService.getMedia()
      .subscribe(
        (media) => {
          this.media = media;
          // this._materializeMedia();
        },
        (error) => { console.log(error); }
      );
  }

  // onchanges for file inputs
  ngOnChanges() {

  }


  getFileLater() {
    console.log(this.mediaFileInput.nativeElement.files);
  }

  // function for grabbing media from HTMl, formatting, and pushing to the view
  selectMedia(event) {
    this.leftControl = 'add';
    this.rightControl = 'waiting';

    // grab FileList from HTML
    let selectedFiles = event.target.files;

    // check if type of file selected for each is contained in this.filetypes
    let allowedFileCollection: any[];

    // convert FileList to array
    allowedFileCollection = _.map(selectedFiles, (file) => file);

    // filter new array if file's type is in the this.filetype array
    allowedFileCollection = _.filter(allowedFileCollection, (file) => {
      let fileTail = file.type
        .slice(file.type.lastIndexOf('/') + 1, file.type.length)
        .toLowerCase();

      if ( _.some(this.filetypes, type => { return type === fileTail; }) ) {
        return file;
      }
    });

  }

  // decide whether view interactions happen here or from service
  uploadMedia() {
    this._mediaService.uploadFiles(this.media);
  }

  ngAfterViewInit() {

  }

  switchLeftControl(switchTo): void {
    this.leftControl = switchTo;
  }

  switchRightControl(switchTo): void {
    this._toastr.success('Herro worrd I am rearry rearry rearry', 'Rearry ronery...');
    this.rightControl = switchTo;
  }

  private _materializeMedia() {
    if (this.media) {
      $(this.elMatBox.nativeElement).materialbox();
    }
  }

}
