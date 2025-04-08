import { Component, OnInit } from '@angular/core';
import { HalService } from '../hal.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit{
  publications: any[] = [];

  constructor(private halService: HalService) {}

  ngOnInit(): void {
    this.halService.getPublications().subscribe(data => {
      this.publications = data.response.docs; 
    });
  }
}
