import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'visible'
})
export class VisiblePipe implements PipeTransform {

  transform(value: string, accionar:boolean): string {
    
    
    if(accionar==true)
    {
      return value;
    }
    else
    {
      let salida:string ="";

      for(let i = 0;i<value.length;i++)
      {
        salida+="*";
      }
      return salida;
    }
  }

}
