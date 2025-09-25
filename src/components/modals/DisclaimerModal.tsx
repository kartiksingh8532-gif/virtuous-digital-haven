import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface DisclaimerModalProps {
  onAccept: () => void;
}

export const DisclaimerModal = ({ onAccept }: DisclaimerModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-[100]">
      <div className="bg-background rounded-lg shadow-elegant max-w-2xl w-full p-8 relative border border-brand-border">
        <h2 className="text-2xl font-serif font-bold text-primary mb-6 text-center">
          Disclaimer & Terms of Use
        </h2>
        <div className="space-y-4 text-muted-foreground text-sm max-h-[60vh] overflow-y-auto pr-4">
          <p>
            <strong className="text-primary">Non-Advertising Notice:</strong> I am aware that Indian lawyers 
            are not allowed to advertise or solicit work in any way under the regulations set forth by the 
            Bar Council of India (BCI). This website's content is only meant to be educational and informative; 
            it is not meant to be a solicitation, promotion, or commercial.
          </p>
          <p>
            <strong className="text-primary">Consent and Understanding:</strong> By continuing, I attest that 
            I am using this website voluntarily and only for educational purposes. No lawyer-client relationship 
            or legal advice is intended to be created by any of the information, content, or materials on this website.
          </p>
          <p>
            <strong className="text-primary">Duty Restrictions:</strong> Virtuous Law Partners disclaims all 
            duty for any actions performed in response to information found on this website. For specific legal 
            issues, we advise visitors to obtain expert legal advice.
          </p>
          <p>
            <strong className="text-primary">No Warranty:</strong> The accuracy and completeness of the material 
            on this website are not guaranteed by Virtuous Law Partners, either explicitly or implicitly.
          </p>
        </div>
        <div className="text-center mt-8">
          <Button
            onClick={onAccept}
            className="w-full sm:w-auto font-bold px-8 py-3 transition-all duration-300 hover:scale-105"
            size="lg"
          >
            I Accept
          </Button>
        </div>
      </div>
    </div>
  );
};