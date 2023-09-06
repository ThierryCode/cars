import React from 'react';
export default function Cars({children, color}) {
  // console.log(children, color);
  const colorInfo = color ? (<p>Couleur : {color}</p>) : (<p>Couleur Néant</p>);
  if(children){
    return (
      <div className='Cars' style={{backgroundColor:'pink', width:'50%',display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginTop:'5px'}}>
          <p>Marque : {children}</p>
          {colorInfo}
      </div>
    )
  }

}
