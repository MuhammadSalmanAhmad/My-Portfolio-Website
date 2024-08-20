import React ,{useContext} from "react";
import Technology from "./technologies";
import linkedin from '../../assets/project-1.png';



export default function Project({ title,technologies,image,project_discription }) {
    //const technologies = useContext(ArrayContext)
    return(
        <div className="bg-neutral-600 p-6 " style={{
            width:"fit-content",
            marginLeft:"20px",
            marginRight:"20px",
            borderRadius:"30px",
            alignSelf:"start",
            display: "flex",
            flexDirection:"row",
            height:"fit-content",
            marginBottom:"20px"
        
            
        }}>
            <div class="flex flex-col">
                <h5 style={{
                    color:"white",
                    fontSize:"20px",
                    fontWeight:"bold",
                    marginBottom:"10px"
                }}>{title}</h5>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 " style={{
                width:"fit-content",
                height:"fit-content",
                display:"flex",
                flexDirection:"row",
                flexWrap:"wrap",
                gap:"10px",
                marginBottom:"10px"
            }}>
               {technologies.map((tech, index) => (
                        <Technology key={index} title={tech} />
                    ))}
            </div>
            <article>
            <p class="text-white text-base sm:text-sm md:text-lg lg:text-xl">
          {project_discription}
            </p>

            </article>
          

            </div>
            <img src={image} className="w-20 h-20 sm:w-40 sm:h-40 md:w-32 md:h-32 lg:w-48 lg:h-48 ml-5 rounded-lg self-start" />
        </div>

    )
}