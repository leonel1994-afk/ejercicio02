import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  tabla: any = [];
    TablaOk = false;
    abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
  

  ngOnInit(): void {
  }
  soloLetras(e:any):boolean {
    var key = e.keyCode || e.which;
    var tecla = String.fromCharCode(key).toLowerCase();
    var letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    var especiales = [8, 37, 39, 46];

    var tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial){}
              return false;
    
}

verificarTabla() {
  let TablaCapmlea = true;
  for (var i = 1; i <= 26; i++) {
      this.tabla[i - 1] = (<HTMLInputElement>document.getElementById('txtletra' + i)).value;
      if (this.tabla[i - 1].length == 0) {
          alert('Complete todas las entradas');
          TablaCapmlea = false;
          break;

      }

  }
  if (TablaCapmlea) {
      let duplicados = false;
      for (var i = 0; i < 26; i++) {
          for (var j = i + 1; j < 26; j++) {
              if (this.tabla[i] == this.tabla[j]) {
                  alert('Valores Duplicados');
                  duplicados = true;
                  break;
              }
          }
      }
      if (!duplicados) {
          this.TablaOk = true;
          //(<HTMLButtonElement>document.getElementById('btnVerificar')).disabled = true;
      }
  }

  console.log(this.tabla);


}
clickEncriptar():void {
  this.verificarTabla();
  if (this.TablaOk) {//cuando la tabla es valida
      let llave: any = [];
      let txtLLaveVal = (<HTMLInputElement>document.getElementById('txtLlave')).value;
      let txtMensajeVal = (<HTMLInputElement>document.getElementById('txtMensaje')).value;
     // alert(txtMensajeVal);
      let resultado = '';
      if (txtLLaveVal.length > 1) {
          llave = txtLLaveVal.split(' ');
          let indxLlave = 0;
          for (var i = 0; i < txtMensajeVal.length; i++) {
              let letra = txtMensajeVal.substr(i, 1);
              if (letra != ' ') {
                  let puesto:any = this.buscarIndxLetra(letra);
                  //console.log(puesto);
                  let recorrido = puesto + Number(llave[indxLlave]);
                  //console.log('recorido', recorrido, llave[indxLlave], indxLlave)
                  if (recorrido >= 26) {
                      recorrido = recorrido - 26;
                  }
                  resultado += this.tabla[recorrido];

                  if (indxLlave < llave.length - 1) {
                      indxLlave++;
                  } else {
                      indxLlave = 0;
                  }
              }


          }

          //alert(resultado);
          (<HTMLDivElement>document.getElementById('DivResultado')).innerHTML='<h3>Encriptado= '+resultado+' <h3>';




      } else {
          alert('No se a añadido una llave');
      }
  }


}
clickDesencriptar() {
  this.verificarTabla();
  if (this.TablaOk) {
      let llave: any = [];
      let txtLLaveVal = (<HTMLInputElement>document.getElementById('txtLlave')).value;
      let txtMensajeVal = (<HTMLInputElement>document.getElementById('txtMensaje')).value;
     // alert(txtMensajeVal);
      let resultado = '';
      if (txtLLaveVal.length > 1) {
          llave = txtLLaveVal.split(' ');
          let indxLlave = 0;
          for (var i = 0; i < txtMensajeVal.length; i++) {
              let letra = txtMensajeVal.substr(i, 1);
              if (letra != ' ') {
                  let puesto: any = this.buscarIndxLetra2(letra);
                  //console.log(puesto);
                  let recorrido = puesto - Number(llave[indxLlave]);
                  console.log('recorido', recorrido, llave[indxLlave], indxLlave)
                  if (recorrido <0) {
                      recorrido = recorrido + 26;
                  }
                  resultado += this.abecedario[recorrido];

                  if (indxLlave < llave.length - 1) {
                      indxLlave++;
                  } else {
                      indxLlave = 0;
                  }
              }


          }

          //alert(resultado);
          (<HTMLDivElement>document.getElementById('DivResultado')).innerHTML='<h3>Desencriptado= '+resultado+' <h3>';




      } else {
          alert('No se a añadido una llave');
      }
  }


}


buscarIndxLetra(Letra: string):number {
  //console.log('dentro', Letra);
  for (var i = 0; i < this.abecedario.length; i++) {

      if (this.abecedario[i] === Letra.toUpperCase()) {

          return Number(i);
         
      }
      
  }
  return (i);
}

constructor(){
 this.buscarIndxLetra2= this.buscarIndxLetra2;
}

buscarIndxLetra2(Letra: string) {
 // console.log('dentro', Letra);
  for (var j:number = 0; j < this.tabla.length; j++) {

      if (this.tabla[j].toUpperCase() == Letra.toUpperCase()) {

          return Number(j);
          
      }

  }
  return (j);
}

}
