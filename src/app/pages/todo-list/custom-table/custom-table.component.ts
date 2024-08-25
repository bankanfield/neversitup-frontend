import { Component, OnInit } from '@angular/core';

interface TableRow {
  id: string;
  no: string;
  title: string;
  desc: string;
  date: string;
}

@Component({
  selector: 'ngx-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
})
export class CustomTableComponent implements OnInit {
  data = {
    columns: [
      {
        key: 'id',
        name: '',
      },
      {
        key: 'no',
        name: 'No.',
      },
      {
        key: 'title',
        name: 'Title',
      },
      {
        key: 'desc',
        name: 'Description',
      },
      {
        key: 'date',
        name: 'Created Date',
      },
    ],
    data: [
      [
        'f22ecad5-cbb6-402b-995f-6867792bc9c6',
        1,
        'Job 1',
        'This is job 1',
        '1 Oct 2023 12:03:48',
      ],
      [
        '6a412fa7-2c3b-4e38-8973-2b32479bffab',
        2,
        'Job 2',
        'This is job 2',
        '11 Oct 2023 10:03:48',
      ],
      [
        '2c302941-3ba7-413d-84a6-20503355b08a',
        3,
        'Job 3',
        'This is job 3',
        '14 Oct 2023 18:34:48',
      ],
      [
        'eff7e063-3e18-4790-95b4-abf62470e874',
        4,
        'Job 4',
        'This is job 4',
        '1 Oct 2023 09:26:48',
      ],
    ],
  };
  friendly: TableRow[] = [];
  friendlyColumns = [];
  ngOnInit(): void {
    // decorate friendly data
    this.friendly = this.data.data.map((row) => {
      const tr: any = {};
      row.forEach((cell, _index) => {
        const columnKey = this.data.columns[_index].key;
        tr[columnKey] = cell;
      });
      return tr;
    });
    this.friendlyColumns = Object.keys(this.friendly[0]).slice(1);
  }
}
