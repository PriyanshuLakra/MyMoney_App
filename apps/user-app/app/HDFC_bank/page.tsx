




import { ConfirmAdd } from "@repo/ui/confirmAdd";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";

export default async function confirmAddMoney(){
   
    const session = await getServerSession(authOptions);
    
    const userId = session.user.id;
   
    return(
        <div>
            
            <ConfirmAdd user_identifier={userId}></ConfirmAdd>
        </div>
        
    )

}