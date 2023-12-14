import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message : String[] = []

  add(message: String){
    this.message.push(message)
  }

  clear(){
    this.message=[]
  }
}
