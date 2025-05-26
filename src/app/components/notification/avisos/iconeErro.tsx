// icone exclamação
import { AiOutlineExclamationCircle } from "react-icons/ai";

export function IconeErro({ tipo }: { tipo: string }) {
  let iconNotification = null;

  if (tipo === "erro") {
    iconNotification = (
      <div className="flex items-center justify-center border-2 border-red-500/10 rounded-full p-1 absolute -top-2 -left-2">
        <div
          className="flex items-center justify-center p-1
    border-2 border-red-500/30 rounded-full"
        >
          <div className="bg-white rounded-full flex items-center justify-center">
            <AiOutlineExclamationCircle size={16} className="text-red-700" />
          </div>
        </div>
      </div>
    );
  }

  return iconNotification;
}
