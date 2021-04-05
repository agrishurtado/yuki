import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import {Datos } from '../models/datos.model';

@Component({
  selector: 'app-access-create-out',
  templateUrl: './access-create-out.page.html',
  styleUrls: ['./access-create-out.page.scss'],
})
export class AccessCreateOutPage implements OnInit {
  post = {} as Datos;
  id: any;
  
    constructor(private firestore: AngularFirestore, private actRoute: ActivatedRoute,
      private router: Router) {
        this.id = this.actRoute.snapshot.paramMap.get("id");
  
       }
  
    ngOnInit() {
      this.getPostById(this.id);
    }
  
    val(post:Datos){
      this.updatePost(this.post);
      this.crear(this.post);
    }
  
    async getPostById(id : string){  
      console.log(this.id);
      this.firestore.doc("entradas/" + id)
      .valueChanges()
      .subscribe(data => {
        this.post.nombre = data["nombre"];
        this.post.domicilio = data["domicilio"];      
        this.post.fecha = data["fecha"];  
        this.post.fechaEntrada = data["fechaEntrada"];   
        this.post.tipoFecha = data["tipoFecha"];      
        this.post.tipoVisita = data["tipoVisita"];      
        this.post.clave = data["clave"];      
  
  
    
            
             
      });
   
    }
  
    async updatePost(post: Datos){    
        if(this.validation()){   
          try {
            await this.firestore.doc("entradas/" + this.id).update(post);
          } catch (e) {
            console.log("Error: al actualizar datos")
          }    
        }
      }
     
  
  
    async crear(post: Datos){
      // if(this.validation()){
      try {
        // falta el nombre de la tabla
        await this.firestore.collection("salidas").add(post);      
      } catch (error) {
        console.log('Error: crear los datos');
      }   
      
    // }   
  }
  
    validation(){
      if(!this.post.nombre){
        console.log("falta el nombre");
        return false;
      }
      if(!this.post.fecha){
        console.log("falta el fecha");
        return false;
      }
      if(!this.post.domicilio){
        console.log("falta el domicilio");
        return false;
      }
      if(!this.post.clave){
        console.log("falta el clave");
        return false;
      }
      if(!this.post.tipoFecha){
        console.log("falta el tipo de Fecha");
        return false;
      }
      if(!this.post.tipoVisita){
        console.log("falta el Tip de Visita");
        return false;
      }
      return true;
    }
  
  }
  