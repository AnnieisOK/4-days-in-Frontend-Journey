import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';


const routes: Routes = [
  { path: 'articles', component: ArticlesListComponent },
  { path: 'articles/:id', component: ArticleDetailComponent },
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
