import { useState } from "react";
import axios from "axios";

function SuggestionForm() {
    const [uname, setUname] = useState("");
    const [ucontact, setUcontact] = useState();
    const [uemail, setUemail] = useState("");
    const [comment, setComment] = useState("");

    const [check, setCheck] = useState(false)
    const [done, setDone] = useState(false)

    const submithandler = () => {
        if(uname==="" || ucontact==="" || comment===""  || uemail===""  ){
            setCheck(true);
            return
        }

        const suggestion = {
            username: uname,
            usercontact: ucontact,
            useremail: uemail,
            usernote: comment,

        }
        axios.post('https://karanmahesh.herokuapp.com/suggestions/add', suggestion)
        .then(res => console.log(res.data))
        setCheck(false);
        setDone(true);

        setUname("");
        setUcontact("");
        setUemail("");
        setComment("");

    }


    return (
        <div className="flex flex-col justify-center items-center w-full ml-8 mr-8 md:ml-32 md:mr-32 lg:ml-40 lg:mr-40">
        
            <input required type="text" placeholder="Enter Name" value={uname} onChange={(e) => setUname(e.target.value)} className="border-2 border-porabay my-2 p-2 rounded-md focus:border-black w-full" />
                            
            <input required type="number" placeholder="Enter Contact no." value={ucontact} onChange={(e) => setUcontact(e.target.value)} className="border-2 border-porabay my-2 p-2 rounded-md focus:border-black w-full"  />
                                

            <input  type="email" placeholder="Enter Email Address" value={uemail} onChange={(e) => setUemail(e.target.value)} className="border-2 border-porabay my-2 p-2 rounded-md focus:border-black w-full" />
                                
        
            <textarea required type="text" style={{height:115}} placeholder="Enter Note" value={comment} onChange={(e) => setComment(e.target.value)} className="border-2 border-porabay my-2 p-2 rounded-md focus:border-black w-full"></textarea>
            {check ?  <p className="text-center text-red-500">Please Enter the Details</p>: ""}
            {done ? <p className="text-center text-green-500">Thank you for submitting the form :)</p> : ""}                    
            <button type="submit" className="flex justify-center items-center m-4 py-3 px-10 text-porabay border-2 border-porabay rounded-3xl cursor-pointer hover:text-white hover:bg-porabay hover:underline hover:border-black font-bold text-lg bg-white" onClick={() => submithandler()}>Submit</button>
       
        </div>
    )
}

export default SuggestionForm
