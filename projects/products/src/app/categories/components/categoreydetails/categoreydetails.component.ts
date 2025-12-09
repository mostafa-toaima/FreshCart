import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { Categories } from '../../../../../../common/src/lib/interfaces/categories';

import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categoreydetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categoreydetails.component.html',
  styleUrl: './categoreydetails.component.scss',
})
export class CategoreydetailsComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private categoriesService: CategoriesService,
    private _Router: Router
  ) {}

  catId: string | null = '';


  categoryDetails: Categories = {} as Categories;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.catId = params.get('id');
      },
    });

    this.getData();
  }

  getData(): void {
    this.categoriesService.GetCategoryDetails(this.catId).subscribe({
      next: (res) => {
        console.log(res);
        this.categoryDetails = res.data;
      },

      error: (err) => {
        console.log(err);
      },
    });
  }

  navigateToProducts(categoryId: any): void {
    this._Router.navigate(['/products'], { queryParams: { category: categoryId } });
  }
}
