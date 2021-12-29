import { useState, useEffect } from "react";


export const ControlledInput = () => {
    const [input, setInput] = useState( {texto: ''} );

    useEffect(() => {
      console.log('subcripcion');

      return () => {
        console.log('dessubscripcion')
      }

    }, [input])

    const handleOnChange = (e) =>{
      console.log(e.target.name)
      console.log(e.target.value)
      setInput({
        ...input,
        [e.target.name]: e.target.value
      })
    }


    console.log('input');
    console.log(input);
    return (
      <input
        type="text"
        name='texto'
        value={input.texto}
        onChange={handleOnChange}
      />
    );
  };


  
export  function LoadingComponent() {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {

      setTimeout(() => {
        setLoading(false);
      }, 3000);

      return ()=>{
          console.log('Limpiando componente');
      }
    }, []);
    
    return <>
        {loading ? <h2>Cargando... </h2> : <h3>¡Los Productos están cargardos!</h3>}
    </>;
  }



  
export  function TextComponent({ condition = false }) {
    
    if (!condition) {
      return <h2>Uds no esta logeado</h2>;
    }
  
    return (
      <>  
        <h2>Ud esta logueado, puede ver la página</h2>
      </>
    )
  }




// condicion ? :,  condicion && , condicion || 


export  function TextComponent2({ condition = true }) {
    
    return (
      <>
        {condition && <h2>Ud esta logueado puede ver esta parte.</h2>}

        {!condition && <h2>Ud no esta logueado, NO puede ver esta sección.</h2>}

      </>
    );
  }

// condicion ? :(si no), condición && accion si, condicion  || acciones





export  function TextComponent3({ condition = false }) {
    return (
      <>
        <h2> {condition ? 'Ud esta logueado puede ver la pág.' : 'Ud esta logueado no puede ver la pág.'} </h2>            
        
      </>
    )
  }




 export function TextComponent4({ condition = false }) {

    return (
      <>
        <h2 style={ { color: condition ? "green" : "red" } }>
          Ud esta logueado puede ver la pág.
        </h2>
      </>
    );
  }




  
export  function TextComponent5({ condition = false }) {
    return (
      <>
        <h2 className={ (condition === true) ? "btn btn-success" : "btn btn-danger" }>
         stock
        </h2>
      </>
    );
  }










export  function TextComponent6( { condition = true, otro='mt-5' }  ) {
    return (
      <>
        <h2
          className={ `${condition === true ? "btn btn-success" : "btn btn-danger"} ${otro || ""} `}
        >
          Ud esta logueado puede ver la pág.
        </h2>
      </>
    );
  }





export function TextComponent7({ condition = false , otro = "mt-5" }) {
    
    const config = condition

      ?
            {
                className: `btn btn-success ${otro || ""}`,
                style: {color: 'red'},
                title: "Este es el titulo si la condicion es verdadera",
                nombre: 'Camila'
            }
      : 
            {
                className: `btn btn-warning ${otro || ""}`,
                style: {color: 'black'},
            }

            
    
      return (
      <>
        <h2 {...config} >Ud esta logueado puede ver la pág.</h2>
      </>
    )
  }
