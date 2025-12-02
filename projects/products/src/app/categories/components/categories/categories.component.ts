import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Categories } from './../../../../../../common/src/lib/interfaces/categories';

import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  constructor(private catrgoriesService: CategoriesService) { }
  categoriesData: Categories[]=[]

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.catrgoriesService.GetCategories().subscribe({
      next: (res) => {
        console.log(res);
        this.categoriesData = res.data;
      },
      error: (err) => { console.log(err);
      },
    })
  }
}
