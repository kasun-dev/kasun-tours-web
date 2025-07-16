import { CheckCircle, XCircle } from "lucide-react";
import { useEffect } from "react";

type NotificationProps = {
  type: "success" | "error";
  message: string;
  onClose: () => void;
};

export default function Notification({ type, message, onClose }: NotificationProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // auto-close after 3s
    return () => clearTimeout(timer);
  }, [onClose]);

  const Icon = type === "success" ? CheckCircle : XCircle;
  const color = type === "success" ? "text-green-600" : "text-red-600";

  return (
    <div className={`fixed bottom-4 right-4 z-100 flex items-center gap-3 bg-white p-4 rounded-xl shadow-xl border-l-4 ${color}`}>
      <Icon className={color} />
      <span className="text-sm text-gray-800">{message}</span>
    </div>
  );
}