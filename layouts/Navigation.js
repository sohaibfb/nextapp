import React, { Component } from 'react';
import Link from 'next/link'



export default function Navigation(as,mainpath,code,path,pathname,id,name) {


    return (
   

      <Link as={as} href={{ pathname: './SubsettingsTemplate', query: { mainpath:mainpath,code:code, path:path, pathname:pathname } }}><a title='MenuLinks' id={id}>{name}</a></Link>
      
    
    )



  }

  
