
import { Shield } from "lucide-react";

const KenyanFlag = () => {
  return (
    <div className="relative w-32 h-20 rounded-lg overflow-hidden shadow-xl border-2 border-white/20">
      {/* Authentic Kenyan Flag Stripes */}
      <div className="h-full flex flex-col">
        {/* Black stripe */}
        <div className="h-1/5 bg-black"></div>
        
        {/* Red stripe with white borders */}
        <div className="h-1/5 bg-white flex">
          <div className="w-full bg-red-600 mx-1"></div>
        </div>
        
        {/* Central white stripe with Maasai shield and spears */}
        <div className="h-1/5 bg-white flex items-center justify-center relative">
          {/* Traditional Maasai Shield representation */}
          <div className="relative flex items-center justify-center">
            {/* Shield */}
            <Shield className="h-6 w-6 text-red-600 z-10" fill="currentColor" />
            {/* Spears behind shield */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-0.5 bg-amber-800 rotate-45 absolute"></div>
              <div className="w-8 h-0.5 bg-amber-800 -rotate-45 absolute"></div>
            </div>
          </div>
        </div>
        
        {/* Red stripe with white borders */}
        <div className="h-1/5 bg-white flex">
          <div className="w-full bg-red-600 mx-1"></div>
        </div>
        
        {/* Green stripe */}
        <div className="h-1/5 bg-green-700"></div>
      </div>
      
      {/* Subtle shine overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
};

export default KenyanFlag;
