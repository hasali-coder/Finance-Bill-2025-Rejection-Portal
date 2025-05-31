import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    const hasDismissed = localStorage.getItem("hideDisclaimer");
    if (!hasDismissed) {
      const timeout = setTimeout(() => {
        setIsOpen(true);
      }, 2000); // delay by 2s
      return () => clearTimeout(timeout);
    }
  }, []);

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem("hideDisclaimer", "true");
    }
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md bg-white text-gray-800 rounded-xl shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">
            Civic Participation Disclaimer
          </DialogTitle>
        </DialogHeader>
        <div className="text-sm space-y-2">
          <p>
            This site is part of civic participation protected by{" "}
            <a href="https://www.klrc.go.ke/index.php/constitution-of-kenya/120-chapter-four-the-bill-of-rights/part-2-rights-and-fundamental-freedoms/292-33-freedom-of-expression" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Article 33
            </a>{" "}
            and{" "}
            <a href="https://www.klrc.go.ke/index.php/constitution-of-kenya/129-chapter-eight-the-legislature/part-5-parliamentary-proceedings/317-118-public-access-and-participation" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Article 118(1)(b)
            </a>{" "}
            of the Constitution of Kenya.
          </p>
          <p>
            No personal data is collected or stored. This is a voluntary, non-commercial project for public awareness.
          </p>
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <Checkbox id="dont-show-again" checked={dontShowAgain} onCheckedChange={() => setDontShowAgain(!dontShowAgain)} />
          <label htmlFor="dont-show-again" className="text-sm cursor-pointer">
            Do not show again
          </label>
        </div>
        <DialogFooter>
          <Button onClick={handleClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerModal;
