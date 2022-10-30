console.log('*********LIVE JB ***********')

//https://app.studi.fr/#/dashboard/events/26195/replay   <= live JB

//      DEFI  //

let blocs = {
    id : string,
    blocs: [] // stock une liste de blocs
 }
 
 
 
 const page = {
   blocs: [
     {
       id: 'block1',
       blocs: [
         {
           id: 'block3',
           blocs: []
         },
         {
           id: 'block4',
           blocs: [
             {
               id: 'block7',
               blocs: []
             }
           ]
         }
       ]
     },
     {
       id: 'block2',
       blocs: [
         {
           id: 'block5',
           blocs: [
             {
               id: 'block6',
               blocs: []
             }
           ]
         }
       ]
     }
   ]
 }
 
 
 getBlock = (bloc, idBlocs) => {
   if ( bloc.idBlocs.length > 0){
     bloc.idBlocs.forEach(b => {
       idBlocs.push(b.id)
       getBlock(b, idBlocs)
     
     })
   }
 }
 
 getBlock(page)