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

Sincerly,
Kenyan Citizen`;

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
    <div className="min-h-screen bg-kenya-vibrant bg-cover bg-no-repeat text-white font-inter">
      <div className="min-h-screen bg-glass-dark backdrop-blur-md">
        <div className="container mx-auto px-4 py-10">
          <header className="text-center mb-10">
            <div className="flex justify-center mb-6">
              <KenyanFlag />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-2 tracking-wide leading-tight drop-shadow-sm">
              REJECT
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-red-400 mb-3 tracking-tight">
              Finance Bill 2025
            </h2>
            <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
              🇰🇪 <span className="text-green-400">Umoja</span> wa Vijana. <span className="text-red-400">Sauti</span> ya Wakenya. <br className="hidden md:block" /> One Click. One Voice.
            </p>
          </header>

          <div className="max-w-5xl mx-auto mb-12">
            <Card className="shadow-xl border-0 rounded-2xl bg-white text-gray-800">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight flex items-center justify-center gap-3">
                  <Megaphone className="h-6 w-6 text-red-600" />
                  TUSHIKE HATAMU
                  <Megaphone className="h-6 w-6 text-green-700" />
                </CardTitle>
                <CardDescription className="text-base md:text-lg text-gray-600 mt-2 font-medium">
                  Join the movement. Send your official objection NOW! 🔥
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-5 bg-green-700 rounded-2xl text-white shadow-md">
                    <Users className="h-9 w-9 mx-auto mb-2" />
                    <div className="text-2xl font-extrabold">1M+</div>
                    <div className="text-xs font-semibold tracking-wide">UNITED VOICES</div>
                  </div>
                  <div className="text-center p-5 bg-red-700 rounded-2xl text-white shadow-md">
                    <Shield className="h-9 w-9 mx-auto mb-2" />
                    <div className="text-2xl font-extrabold">47</div>
                    <div className="text-xs font-semibold tracking-wide">COUNTIES RISING</div>
                  </div>
                  <div className="text-center p-5 bg-black rounded-2xl text-white shadow-md">
                    <Heart className="h-9 w-9 mx-auto mb-2" />
                    <div className="text-2xl font-extrabold">100%</div>
                    <div className="text-xs font-semibold tracking-wide">FOR THE PEOPLE</div>
                  </div>
                </div>

                <div className="space-y-5">
                  <Button onClick={handleSendEmail} className="w-full h-16 text-xl md:text-2xl font-extrabold text-white bg-green-600 hover:bg-green-700 rounded-xl transition duration-300 ease-in-out shadow-lg" size="lg">
                    <Mail className="h-6 w-6 mr-3" />
                    SEND EMAIL NOW! 🚀
                  </Button>

                  <Button onClick={() => setIsPreviewOpen(true)} variant="outline" className="w-full h-14 text-lg font-bold border-2 border-gray-800 hover:bg-gray-800 hover:text-white rounded-xl transition duration-300" size="lg">
                    <Zap className="h-5 w-5 mr-2" />
                    Preview Your Power Move
                  </Button>
                </div>

                <div className="bg-gray-900 p-5 rounded-xl text-white">
                  <h3 className="font-black text-lg mb-2 flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    DIRECT TO PARLIAMENT:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {emailRecipients.map((email, index) => (
                      <Badge key={index} variant="secondary" className="text-sm font-semibold bg-white/20 text-white px-3 py-1 rounded-full">
                        📧 {email}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-red-700/10 p-5 rounded-xl border-l-4 border-red-600">
                  <h3 className="font-black text-lg text-red-700 mb-3 flex items-center gap-2">
                    <Megaphone className="h-5 w-5" />
                    OUR DEMANDS:
                  </h3>
                  <ul className="space-y-3 text-gray-800 text-sm md:text-base">
                    <li className="flex items-start gap-3 font-medium">
                      <span className="text-red-600 text-lg">💥</span>
                      REJECT VAT amendments that burden ordinary Kenyans
                    </li>
                    <li className="flex items-start gap-3 font-medium">
                      <span className="text-red-600 text-lg">⚡</span>
                      OPPOSE Excise Duty changes widening inequality
                    </li>
                    <li className="flex items-start gap-3 font-medium">
                      <span className="text-green-600 text-lg">🛡️</span>
                      PROTECT our constitutional rights & people's interests
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <footer className="text-center text-white/90">
            <p className="text-base font-semibold">
              🇰🇪 <span className="text-green-400">BUILT BY KENYANS</span>, <span className="text-red-400">FOR KENYANS</span>, <span className="text-white">WITH KENYAN PRIDE</span> 🇰🇪
            </p>
            <p className="text-sm mt-2 opacity-80">
              Harambee! Together we rise. 💪
            </p>
          </footer>
        </div>
      </div>

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
