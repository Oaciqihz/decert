import { createContext } from "react";

const PublicContext = createContext<{ showConnectModal: () => void } | null>(null);


export default PublicContext;