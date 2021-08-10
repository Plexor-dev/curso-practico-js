// const lista1 = [1, 2, 3, 1,2,5,6,8,1,1,2,1,2,5]

// const lista1Count = {}

// lista1.map(elemento=>{
//     if(lista1Count[elemento]){
//     lista1Count[elemento] += 1;}

//     else {
//     lista1Count[elemento] = 1;}
//     }
//     );

//     const lista1Array = Object.entries(lista1Count).sort(
//         function (elementoA, elementoB) {
//           return elementoA[1] - elementoB[1];
//         }
//       );
      
//       const moda = lista1Array[lista1Array.length - 1];

   //! Ordenar de forma mas simple
   
      function mode(arr){
        return arr.sort((a,b) =>
              arr.filter(v => v===a).length
            - arr.filter(v => v===b).length
        ).pop();
    }


const lista1 = [1, 2, 3, 1,2,5,6,8,1,1,2,1,2,5]

    console.log(mode(lista1))