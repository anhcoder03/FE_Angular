import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommentService } from 'src/app/services/comment/comment.service';
import { IComment } from 'src/app/interface/Comment';
@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.scss']
})
export class ListCommentComponent {
  constructor(
    private CommentService : CommentService,
    private toastrService :ToastrService
    ){}
    comment: IComment[] = [];
    data: any;
    currentPage: number = 1;
    itemsPerPage: number = 10;
    totalItems: number | undefined = 0;
    ngOnInit() {
      this.getAllAccount();
    }
    getAllAccount() {
      this.CommentService.getAllComment().subscribe((data) => {
        this.data = data;
        this.comment = this.data.data;
        this.totalItems = this.data.totalUser;
      });
    }
    onPageChange(event: number): void {
      this.currentPage = event;
      this.getAllAccount();
    }
    onHandleRemove(_id:any){
      const comfirm = window.confirm("Bạn có chắc chắn muốn xóa");
      if(comfirm){
        this.CommentService.DeleteComment(_id).subscribe((data)=>{
          if(data.success){
            this.toastrService.success('Xóa Comment thành công ')
            this.comment = this.comment.filter((user)=> user._id !== _id)
          }else{
            this.toastrService.error('xóa Comment thất bại')
          }
        })
      }
    }
}
