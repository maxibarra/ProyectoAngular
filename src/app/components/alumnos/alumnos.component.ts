import { jitOnlyGuardedExpression } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  
  public alumnos=[
     {nombre:"alex", nota:1},
     {nombre:"Exequiel", nota:9},
     {nombre:"Benicio", nota:7},
     {nombre:"Belen", nota:9},
     {nombre:"Maxi", nota:2}
  ];
  constructor() {}   
   
  ngOnInit(): void {
  }

}
