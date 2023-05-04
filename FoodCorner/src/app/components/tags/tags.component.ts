import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/app/shared/model/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags?: Tag[];
  constructor(api: FoodService) {
    api.getAllTags().subscribe((serverTag) => {
      this.tags = serverTag
    })
  }
}
