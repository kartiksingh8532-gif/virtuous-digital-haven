import { MapPin, Mail, Phone } from "lucide-react";

export const ContactInfo = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Address",
      content: "123 Legal Avenue, Delhi NCR, India"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@virtuouslaw.com"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 11 1234 5678"
    }
  ];

  return (
    <div className="space-y-6">
      {contactDetails.map((detail, index) => (
        <div key={index} className="flex items-start gap-4">
          <detail.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-primary text-lg mb-1">
              {detail.title}
            </h4>
            <p className="text-muted-foreground">
              {detail.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};