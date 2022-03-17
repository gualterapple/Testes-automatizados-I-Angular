import { UniqueIdService } from './../../unique-id.service';
import { Component, Output, EventEmitter, Input } from "@angular/core";

import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls:['like-widget.component.scss']
})
export class LikeWidgetComponent{
  @Output() public liked = new EventEmitter<void>();
  @Input() public likes = 0;
  @Input() public id = null;
  public fonts = { faThumbsUp };

  constructor(private uniqueServiceId: UniqueIdService){}

  ngOnInit(): void {
    if(!this.id){
      this.id = this.uniqueServiceId.generateUniqueIdWithPrefix('like-widget');
    }
  }
}
