// src/app/components/category-list/category-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  imports : [CommonModule, RouterModule]
})
export class CategoryListComponent implements OnInit {
  categories: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllCategories().subscribe(data => {
      this.categories = data;
    });
  }
}