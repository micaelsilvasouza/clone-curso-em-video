// icone Sucesso
import { FaRegCheckCircle } from "react-icons/fa";

export function IconeSucesso({ tipo }: { tipo: string }) {
  let iconNotification = null;
  if (tipo === "sucesso") {
    iconNotification = (
      <div className="flex items-center justify-center border-2 border-green-500/10 rounded-full p-1 absolute -top-2 -left-2">
        <div
          className="flex items-center justify-center p-1 
        border-2 border-green-500/30 rounded-full animate-pulse"
        >
          <div className="bg-white rounded-full flex items-center justify-center">
            <FaRegCheckCircle
              size={16}
              className="text-green-700 animate-pulse"
            />
          </div>
        </div>
      </div>
    );
  }
  return iconNotification;
}
