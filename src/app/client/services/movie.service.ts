import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  listPhim = [
    {
      id: '1',
      name: 'Than Chet',
      price: '20000',
      detail: 'test detail',
      imgUrl: '',
    },
    {
      id: '2',
      name: 'Chi Muoi Ba',
      price: '25000',
      detail: 'test detail',
      imgUrl: '',
    },
    {
      id: '3',
      name: 'Bo Gia',
      price: '30000',
      detail: 'test detail',
      imgUrl: '',
    },
    {
      id: '4',
      name: 'Mortal Kombat',
      price: '15000',
      detail: 'test detail',
      imgUrl: '',
    },
  ];

  constructor(private httpClient: HttpClient) {}

  getDataMovies(): Observable<ObjPhim[]> {
    const api =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07';
    return this.httpClient.get<ObjPhim[]>(api).pipe(
      map((res: ObjPhim[]) => {
        return res.map((item) => {
          item.tenPhim = item.tenPhim + 'abc';
          return item;
        });
      }));
  }

  getDetailMovie(id: string): Observable<any> {
    const api = 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=' + id;
    return this.httpClient.get(api)
  }
}

export interface ObjPhim {
  maPhim: number;
  tenPhim : string;
  biDanh: string;
  trailer: string;
  hinhAnh : string;
  moTa : string;
  maNhom: 'GP07';
  ngayKhoiChieu : string;
  danhGia: number
}
