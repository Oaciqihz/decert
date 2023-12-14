import ModalConnect from "@/components/Modal/connect";
import { useState } from "react";
import PublicContext from "./context";



export default function ContextProvider({children}:{children: React.ReactNode}) {

    const [isShowConnectModal, setIsShowConnectModal] = useState(false);

    function showConnectModal() {
        setIsShowConnectModal(true);
    }

    return (
        <PublicContext.Provider value={{ showConnectModal }}>
            <ModalConnect
                isModalOpen={isShowConnectModal}
                handleCancel={() => setIsShowConnectModal(false)}
            />
            {children}
        </PublicContext.Provider>
      );
}