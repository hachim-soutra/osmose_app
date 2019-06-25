import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { ModalController, NavParams, IonSlide } from '@ionic/angular';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss'],
})
export class ZoomComponent implements OnInit {

  slideOpts = {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    slideTo : 5
    };
  @Input()value: object;
  @Input()position: number;
  @ViewChild('slides') slides;
  public media: any= [];
  public src: string;
  public index: number;
  public mediaType: string;
  mediaLoaded: boolean;

  constructor(
    private modal: ModalController,
    public navParams : NavParams
  ) {
    this.media =  this.navParams.get("value");
    this.index =  this.navParams.get("position");

    console.log('res : ', this.media + this.index);
   }

  ngOnInit() {
    setTimeout(() => {
      this.slides.slideTo(this.index, 500);
    }, 500);
  }

  async closeModal() {
    await this.modal.dismiss();
  }

  setMediaLoaded =() =>{
    setTimeout(()=>{
      this.mediaLoaded = true
    }, 200);
  }
 
  tapImg(event) {
    console.log('tap : ', event)
  }
}
