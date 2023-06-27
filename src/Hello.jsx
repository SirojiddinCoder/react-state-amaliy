import React from "react";



class Hello extends React.Component{
    constructor(props){
        super(props)
            this.state = {
                // name:'Salom props',
                name:'',
                surname:'',
                fullname:'',
                count:0
                
            
        }
    }
    render(){

        const decrement =()=>{
            if(this.state.count > 0){
                this.setState({count:this.state.count - 1})
            }
           
        }


        const Increment =()=>{
            this.setState({count:this.state.count + 1})
        }


        const onchange = (event) =>{
            console.log(event.target.value);
            this.setState({
                // name:event.target.value
                [event.target.name]:event.target.value
            })

        }
        // const onsurname = (event) =>{
        //     console.log(event.target.value);
        //     this.setState({
        //         surname:event.target.value
        //     })
        // }

       
        return(
            <div>
            
            {/* <h1>{this.state.name}</h1> */}

            <button onClick={decrement}>-</button>
            <h4>{this.state.count}</h4>
            <button onClick={Increment}>+</button>
          
          <h1>Name:{this.state.name}</h1>
          <h1>SurName:{this.state.surname}</h1>
          <h1>FullName:{this.state.fullname}</h1>
            <div>
                <input name="name" placeholder="Name"
                 onChange={onchange} type="text" value={this.state.name} />
              
                <input name="surname" placeholder="surname"
                 onChange={onchange} type="text" value={this.state.surname} />
              
                <input name="fullname" placeholder="surname"
                 onChange={onchange} type="text" value={this.state.fullname} />
            </div>
            </div>
        )
    }
}

export default Hello;