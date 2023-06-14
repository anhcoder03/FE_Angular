import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { INews } from 'src/app/interface/News';
import { NewsService } from 'src/app/services/news/news.service';
@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent {
  news: INews[] = [];
  data: any;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number | undefined = 0;

  constructor(
    private NewsService: NewsService,
    private ToastrService: ToastrService
  ) {}
  ngOnInit() {
    this.getAllNews();
  }
  getAllNews() {
    this.NewsService.getAllNews().subscribe((data) => {
      this.data = data;
      this.news = this.data.data;
      this.totalItems = this.data.totalUser;
    });
  }
  onPageChange(event: number): void {
    this.currentPage = event;
    this.getAllNews();
  }
  onHandleRemove(_id:any){
    const confirm = window.confirm('Bạn có chắc chắn muốn xóa?');
    if (confirm) {
      this.NewsService.deleteNews(_id).subscribe(
        (data) => {
          if (data.success) {
            this.news = this.news.filter(
              (cate) => cate._id !== _id
            );
            this.ToastrService.success(data.message);
          }
        },
        (error) => {
          this.ToastrService.warning(error.error.message);
        }
      );
    }
  }
  }
 

