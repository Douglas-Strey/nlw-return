import { Popover } from "@headlessui/react";
import { ArrowLeft } from "phosphor-react";

interface ReturnButtonProps {
    onRestartFeedback: () => void;
}

export function ReturnButton({ onRestartFeedback }: ReturnButtonProps) {
    return (
        <button onClick={onRestartFeedback} className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100" title="Voltar para a página anterior">
            <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
    );
}