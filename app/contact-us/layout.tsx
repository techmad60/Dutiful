// /app/contact-us/layout.tsx
export default function ContactUsLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex flex-col bg-white">
        {children}
      </div>
    );
  }
  