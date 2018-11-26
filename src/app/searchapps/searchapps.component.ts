import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'pm-searchapps',
  templateUrl: './searchapps.component.html'
})
export class SearchAppsComponent implements OnInit {

  constructor(private itunes: SearchService) { }

  ngOnInit() {
  }

  doSearch(term: string){
    this.itunes.doSearch(term);
  }

 

}
