import { AiOutlineExclamationCircle } from "react-icons/ai";

export function IconeAviso({ tipo }: { tipo: string }) {
  let iconNotification = null;

  if (tipo === "aviso") {
    iconNotification = (
      <div className="flex items-center justify-center border-2 border-yellow-500/10 rounded-full p-1 absolute -top-2 -left-2">
        <div
          className="flex items-center justify-center p-1
        border-2 border-yellow-500/30 rounded-full animate-pulse"
        >
          <div className="bg-white rounded-full flex items-center justify-center">
            <AiOutlineExclamationCircle size={16} className="text-yellow-700" />
          </div>
        </div>
      </div>
    );
  }

  return iconNotification;
}
