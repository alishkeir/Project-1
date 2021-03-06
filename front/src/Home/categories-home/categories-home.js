import React,{Component} from 'react';
import "./categories-home.css"

class Category extends Component{

    
    constructor(props) {
        super(props);
        this.state = {
            category:[]
        };
      }
    


    async componentDidMount(){
        
        const url='http://localhost:8001/category';
        
        const response=await fetch(url);
      
        const result=await response.json();
        
        this.setState({category:result});
        
        console.log(this.state.category);

    }

    createCategory =async(e)=>{
        e.preventDefault();
        const url='http://localhost:8001/addcategory';
        const body={
            categories:e.target.categoryname.value}
        const response=await fetch(url,{method:'POST',headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },body:JSON.stringify(body)});
        const result=await response.json();
        console.log("elie")
        this.componentDidMount();
        e.target.categoryname.value="";

    }
   
    // getId=async(e)=>{
    // const  id=e.target.del.value;
    //     const url=`http://localhost:8001/categoryid/${id}`;
    //     console.log(id+"piza");
    // }


    removeCategory =async(x)=>{

        const url='http://localhost:8001/deletecategory';
        const body={
            id:x
        }
        const response=await fetch(url,{method:'DELETE',headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },body:JSON.stringify(body)
    });
     this.componentDidMount();
        }


        filterGame =async(e)=>{
           
            let id=e.target.value
            console.log(id)
            const url=`http://localhost:8001/filtergames/${id}`;
           
            const response=await fetch(url)
            const result= await response.json()
            //console.log(result)
            this.props.filter(result)
    
        }
 

    
    render(){
        return(
            
            <div className="Category">

                   <div className="allBlogsTop homeCategories">
                       <h2 className="allBlogsHeading">All Blogs:</h2>
                        <select onChange={this.filterGame} name="" id="selection" className="mySelection">{this.state.category.map(cat=> 
                          <option  key={cat.id} value={cat.id} >{cat.categories}</option>)}
                        </select>
                     </div>



         </div>
        )
    }
}
export default Category;