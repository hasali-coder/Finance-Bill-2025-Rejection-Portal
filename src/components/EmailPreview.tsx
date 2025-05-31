
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Copy, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EmailPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  subject: string;
  recipients: string[];
  body: string;
}

const EmailPreview = ({ isOpen, onClose, subject, recipients, body }: EmailPreviewProps) => {
  const { toast } = useToast();

  const handleCopyToClipboard = () => {
    const emailContent = `To: ${recipients.join(", ")}\nSubject: ${subject}\n\n${body}`;
    navigator.clipboard.writeText(emailContent);
    toast({
      title: "Copied to Clipboard",
      description: "Email content has been copied to your clipboard.",
    });
  };

  const handleSendEmail = () => {
    const emailSubject = encodeURIComponent(subject);
    const emailBody = encodeURIComponent(body);
    const emailRecipients = recipients.join(",");
    
    const mailtoLink = `mailto:${emailRecipients}?subject=${emailSubject}&body=${emailBody}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Email Client Opening",
      description: "Your email client should open with the pre-drafted objection letter.",
    });
    
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-kenya-black">
            <Mail className="h-5 w-5" />
            Email Preview
          </DialogTitle>
          <DialogDescription>
            Review your official objection letter before sending
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Recipients */}
          <div>
            <label className="text-sm font-semibold text-kenya-black">To:</label>
            <div className="mt-1 space-x-2">
              {recipients.map((email, index) => (
                <Badge key={index} variant="secondary">
                  {email}
                </Badge>
              ))}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="text-sm font-semibold text-kenya-black">Subject:</label>
            <div className="mt-1 p-3 bg-gray-50 rounded-md text-sm">
              {subject}
            </div>
          </div>

          {/* Body */}
          <div>
            <label className="text-sm font-semibold text-kenya-black">Message:</label>
            <div className="mt-1 p-4 bg-gray-50 rounded-md text-sm whitespace-pre-line font-mono leading-relaxed max-h-64 overflow-y-auto">
              {body}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              onClick={handleSendEmail}
              className="flex-1 bg-kenya-green hover:bg-kenya-green/90 text-white"
            >
              <Mail className="h-4 w-4 mr-2" />
              Send Email Now
            </Button>
            <Button
              onClick={handleCopyToClipboard}
              variant="outline"
              className="flex-1 border-kenya-black hover:bg-kenya-black/5"
            >
              <Copy className="h-4 w-4 mr-2" />
              Copy to Clipboard
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              size="icon"
              className="border-gray-300"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmailPreview;
