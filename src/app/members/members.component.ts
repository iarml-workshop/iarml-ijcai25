import { Component } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {
  members = [
    { name:  'Astrid Klipfel', url: 'https://www.cril.univ-artois.fr/members/klipfel/' },
    { name : 'Elohan Veillon', url: 'https://www.cril.univ-artois.fr/members/veillon/'},
    { name:  'Emmanuel Lonca', url: 'https://www.cril.univ-artois.fr/members/lonca/' },
    { name : 'Esteban Marquer', url:'https://www.cril.univ-artois.fr/members/marquer/'},
    { name : 'Francois Olivier', url:'https://www.cril.univ-artois.fr/members/olivier/'},
    { name : 'Hanane Kteich', url:''},
    { name : 'Jalma Duersch'},
    { name : 'Mukherjee Tanmoy', url:'https://www.cril.univ-artois.fr/members/mukherjee/'},
    { name : 'Naïm Es-Sebbani', url:'https://www.cril.univ-artois.fr/members/essebbani/'},
    { name : 'Nathanael Haas', url:'https://www.cril.univ-artois.fr/members/haas/'},
    { name : 'Thomas Bailleux', url:'https://www.cril.univ-artois.fr/members/bailleux/'},
    { name : 'Wahmed Abro'},
    { name:  'Zied Bouraoui', url: 'https://www.cril.univ-artois.fr/members/bouraoui/' },
  ];
}