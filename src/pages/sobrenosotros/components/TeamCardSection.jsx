import { useState } from "react";
import { team } from "../../../data/team";
import { TeamCard } from "./TeamCard";
import { TeamModal } from "./TeamModal";

export default function TeamCardSection(){

    const [selectedMember, setSelectedMember] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleMemberClick = (member) => {
      setSelectedMember(member);
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
      setTimeout(() => setSelectedMember(null), 300);
    };

    return (
        <div className="min-h-screen ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Team Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="w-full max-w-sm animate-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                 <TeamCard member={member} onClick={handleMemberClick} />
                </div>
              ))}
            </div>
          </div>
    
          {/* Modal 
          */}
          <TeamModal 
            member={selectedMember} 
            isOpen={isModalOpen} 
            onClose={handleCloseModal} 
          />
        </div>
      );

    
}