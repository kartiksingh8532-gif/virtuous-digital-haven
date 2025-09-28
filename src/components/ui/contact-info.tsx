import { MapPin, Mail, Phone } from "lucide-react";

export const ContactInfo = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Our Presence",
      content: "Delhi • Allahabad • Lucknow • Gautam Buddha Nagar – Noida, Greater Noida, Jewar"
    },
    {
      icon: MapPin,
      title: "Offices",
      content: "A-84, Defense Colony, New Delhi | G-53, SNG Plaza, Knowledge Park II, Greater NOIDA, UP | Chamber No. 611-612, Lane no. 14, District and Sessions Court, Gautam Buddha Nagar, UP"
    },
    {
      icon: Mail,
      title: "Email",
      content: "virtuouslawpartners@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "9315788388 / 9634705613 / 8810641831"
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