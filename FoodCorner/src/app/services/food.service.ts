import { Injectable } from '@angular/core';
import { Food } from '../shared/model/Food';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from '../shared/model/Tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL } from '../shared/constants/url';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }
  // Lấy ra tất cả sản phẩm
  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_URL)
  }

  // Tìm kiếm món ăn
  getAllFoodBySearchTerm(searchTerm: string): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm)
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(FOODS_TAGS_URL)
  }

  getAllFoodsByTag(tag: string): Observable<Food[]> {
    return tag === 'All' ? this.getAll() : this.http.get<Food[]>(FOODS_BY_TAG_URL + tag)
  }

  //Chi tiết món ăn theo id
  getFoodById(foodId: string): Observable<Food> {
    return this.http.get<Food>(FOODS_BY_ID_URL + foodId)
  }
}
