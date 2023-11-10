import React from "react";
import '../App.css';
import { Link } from "@mui/material";

function Country({data}) {
    return(
			<div>
				{data.map((item)=> {
					return (
						<div style={{
								backgroundColor: "#e68ede",
						}}>
							<div className="Country-Card">
								<div style={{backgroundColor: "#d3d3d3", paddingLeft: "10px", paddingTop: "2px" , marginTop: "15px", width: '50%'}}>
									<h3>{item.name}</h3>
								</div>
								<div style={{backgroundColor: "#d3d3d3", paddingLeft: "10px" ,paddingTop: "2px" ,marginTop: "15px", width: '50%'}}>
									<h4>{item.country}</h4>
								</div>
								<div style={{backgroundColor: "#d3d3d3", padding: "5px" , marginTop: "15px",width: '50%'}}>
									<h4><Link href={item.web_pages[0]}>{item.web_pages[0]}</Link></h4>
								</div>
							</div>
						</div>
					)
				})}
			</div>
    )
}

export default Country;