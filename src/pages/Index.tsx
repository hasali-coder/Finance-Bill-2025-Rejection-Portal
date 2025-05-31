
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Users, Shield, Megaphone, Zap, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import KenyanFlag from "@/components/KenyanFlag";
import EmailPreview from "@/components/EmailPreview";

const Index = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { toast } = useToast();

  const emailSubject = "RE: MEMORANDUM OF OBJECTION TO THE FINANCE BILL 2025 (BILL NO. 19 OF 2025)";
  const emailRecipients = ["cna@parliament.go.ke", "financecommitteeena@parliament.go.ke"];
  
  const emailBody = `Dear Official,

The above subject refers.

Following the invitation by the National Assembly to submit comments on the above Bill, and recognizing the Sovereignty of the People and the Supremacy of the Constitution of Kenya 2010, I submit my objection as follows:

1. **Rejection of Section A, Part I of the 1st Schedule of the Value Added Tax Act.**
   The proposed amendment is incompatible with Article 43 of the Constitution, and it raises the cost of living for ordinary Kenyans.

2. **Rejection of Amendments to Sections 2 & 5 of the Excise Duty Act.**
   These amendments risk widening economic disparities and infringe on the rights guaranteed under the Constitution.

I urge the National Assembly to stand by the people's interests and uphold constitutional rights.

Yours sincerely,
[Your Full Name]
[Your National ID (Optional)]
[Your Constituency (Optional)]`;

  const handleSendEmail = () => {
    const subject = encodeURIComponent(emailSubject);
    const body = encodeURIComponent(emailBody);
    const recipients = emailRecipients.join(",");
    
    const mailtoLink = `mailto:${recipients}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Tumeshikana! 💪",
      description: "Your email is ready. Let's make our voices heard!",
    });
  };

  return (
    <div className="min-h-screen kenyan-movement-bg maasai-pattern">
      {/* Cultural backdrop overlay */}
      <div className="min-h-screen bg-gradient-to-br from-black/20 via-transparent to-green-900/30">
        <div className="container mx-auto px-4 py-8">
          {/* Header with authentic Kenyan flag */}
          <header className="text-center mb-8 rise-up">
            <div className="flex justify-center mb-6">
              <KenyanFlag />
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 unity-glow tracking-tight">
              REJECT
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-red-400 mb-4">
              Finance Bill 2025
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium">
              🇰🇪 <span className="text-green-400">Umoja</span> wa Vijana. <span className="text-red-400">Sauti</span> ya Wakenya. 
              <br className="hidden md:block" />
              <span className="text-white">One Click. One Voice.</span>
            </p>
          </header>

          {/* Main Action Card with youth energy */}
          <div className="max-w-5xl mx-auto mb-8 rise-up">
            <Card className="youth-card shadow-2xl border-0">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-3xl md:text-4xl font-black text-gray-900 flex items-center justify-center gap-3">
                  <Megaphone className="h-8 w-8 text-red-600" />
                  TUSHIKE HATAMU
                  <Megaphone className="h-8 w-8 text-green-700" />
                </CardTitle>
                <CardDescription className="text-lg md:text-xl text-gray-700 font-semibold">
                  Join the movement. Send your official objection NOW! 🔥
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Power Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-green-600 to-green-700 rounded-xl text-white shadow-lg">
                    <Users className="h-10 w-10 mx-auto mb-3" />
                    <div className="text-3xl font-black">1M+</div>
                    <div className="text-sm font-bold opacity-90">UNITED VOICES</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-red-600 to-red-700 rounded-xl text-white shadow-lg">
                    <Shield className="h-10 w-10 mx-auto mb-3" />
                    <div className="text-3xl font-black">47</div>
                    <div className="text-sm font-bold opacity-90">COUNTIES RISING</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-gray-800 to-black rounded-xl text-white shadow-lg">
                    <Heart className="h-10 w-10 mx-auto mb-3" />
                    <div className="text-3xl font-black">100%</div>
                    <div className="text-sm font-bold opacity-90">FOR THE PEOPLE</div>
                  </div>
                </div>

                {/* Main Action Buttons */}
                <div className="space-y-6">
                  <Button
                    onClick={handleSendEmail}
                    className="w-full h-20 text-2xl md:text-3xl font-black grassroots-btn text-white power-pulse rounded-xl"
                    size="lg"
                  >
                    <Mail className="h-8 w-8 mr-4" />
                    SEND EMAIL NOW! 🚀
                  </Button>
                  
                  <Button
                    onClick={() => setIsPreviewOpen(true)}
                    variant="outline"
                    className="w-full h-16 text-xl font-bold border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-xl"
                    size="lg"
                  >
                    <Zap className="h-6 w-6 mr-3" />
                    Preview Your Power Move
                  </Button>
                </div>

                {/* Recipients Info with local flavor */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl text-white">
                  <h3 className="font-black text-xl mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    DIRECT TO PARLIAMENT:
                  </h3>
                  <div className="space-y-2">
                    {emailRecipients.map((email, index) => (
                      <Badge key={index} variant="secondary" className="text-sm font-bold bg-white/20 text-white border-0">
                        📧 {email}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Points with revolutionary energy */}
                <div className="bg-gradient-to-r from-red-600/20 to-red-700/20 p-6 rounded-xl border-l-8 border-red-600">
                  <h3 className="font-black text-xl text-red-700 mb-4 flex items-center gap-2">
                    <Megaphone className="h-6 w-6" />
                    OUR DEMANDS:
                  </h3>
                  <ul className="space-y-3 text-gray-800">
                    <li className="flex items-start gap-3 font-semibold">
                      <span className="text-red-600 text-xl">💥</span>
                      REJECT VAT amendments that burden ordinary Kenyans
                    </li>
                    <li className="flex items-start gap-3 font-semibold">
                      <span className="text-red-600 text-xl">⚡</span>
                      OPPOSE Excise Duty changes widening inequality
                    </li>
                    <li className="flex items-start gap-3 font-semibold">
                      <span className="text-green-600 text-xl">🛡️</span>
                      PROTECT our constitutional rights & people's interests
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer with cultural pride */}
          <footer className="text-center text-white/90 rise-up">
            <p className="text-lg font-bold">
              🇰🇪 <span className="text-green-400">BUILT BY KENYANS</span>, 
              <span className="text-red-400"> FOR KENYANS</span>, 
              <span className="text-white">WITH KENYAN PRIDE</span> 🇰🇪
            </p>
            <p className="text-sm mt-2 opacity-80">
              Harambee! Together we rise. 💪
            </p>
          </footer>
        </div>
      </div>

      {/* Email Preview Modal */}
      <EmailPreview
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        subject={emailSubject}
        recipients={emailRecipients}
        body={emailBody}
      />
    </div>
  );
};

export default Index;
