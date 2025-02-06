// import { Notebook } from 'lucide-react'
// import React from 'react'
// import { Link } from 'react-router-dom'

// function ResumeCardItem(resume) {
//     console.log(resume)
//   return (
//     <Link to={`/select-template/${resume?.resume?.data?.resumeId}`}>
//      {/* <Link to={'/dashboard/resume/'+resume.resume.data.resumeId+"/edit"}> */}
//         <div className='p-14 bg-secondary border items-center flex justify-center rounded-lg h-[282px] hover:scale-105 transition-all shadow-lg cursor-pointer border-orange-400' onClick={()=>setOpenDialog(true)}>
//             <Notebook/>
//         </div>
//         <h2 className='text-center my-1 border border-double'>{resume.resume.data.title}</h2>
//     </Link>
//   )
// }

// export default ResumeCardItem


import { Notebook, Eye, Edit, Trash2, MoreVertical, File } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import GlobalApi from "./../../../service/GlobalApi";

function ResumeCardItem({ resume,key, onDelete }) {
    const navigate = useNavigate();
    const resumeId = resume?.data?.resumeId;
    const title = resume?.data?.title;
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = () => {
        if (!resumeId) return;

        const confirmDelete = window.confirm("Are you sure you want to delete this resume?");
        if (!confirmDelete) return;

        setIsDeleting(true);

        GlobalApi.DeleteResumeById(resumeId)
            .then(() => {
                console.log(`Resume ${resumeId} deleted successfully.`);
                onDelete(resume?.Id); // Remove from UI
            })
            .catch((error) => {
                console.log(resumeId);
                console.error("Failed to delete resume:", error);
                alert("Failed to delete resume. Please try again.");
            })
            .finally(() => setIsDeleting(false));
    };

    return (
        <Card className="relative w-60 h-72 rounded-lg border-orange-400 shadow-lg hover:shadow-xl transition-all cursor-pointer">
            <CardContent className="flex flex-col items-center justify-center h-full" onClick={() => navigate(`/select-template/${resumeId}`)}>
                <File className="h-16 w-16 text-gray-600" />
                <h2 className="mt-4 text-lg font-semibold text-center text-gray-800">{title}</h2>
            </CardContent>

            {/* Dropdown Menu for Options */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="absolute top-2 right-2">
                        <MoreVertical className="w-5 h-5 text-gray-600" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-36 bg-white shadow-lg border rounded-lg">
                    <DropdownMenuItem onClick={() => navigate(`/my-resume/${resumeId}/view`)} className="cursor-pointer hover:bg-gray-100 flex items-center">
                        <Eye className="w-4 h-4 mr-2 text-blue-500" /> View
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate(`/dashboard/resume/${resumeId}/edit`)} className="cursor-pointer hover:bg-gray-100 flex items-center">
                        <Edit className="w-4 h-4 mr-2 text-green-500" /> Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleDelete} disabled={isDeleting} className="cursor-pointer hover:bg-gray-100 flex items-center text-red-500">
                        <Trash2 className="w-4 h-4 mr-2" /> {isDeleting ? "Deleting..." : "Delete"}
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </Card>
    );
}

export default ResumeCardItem;


