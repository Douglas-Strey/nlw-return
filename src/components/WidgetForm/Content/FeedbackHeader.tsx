import { CloseButton } from "../../CloseButton";
import { ReturnButton } from "../../ReturnButton";

interface FeedbackHeaderProps {
    title: string;
    imageSrc?: string;
    imageAlt?: string;
    restartFeedback: () => void;
}

export function FeedbackHeader({
    title,
    imageSrc,
    imageAlt,
    restartFeedback
}: FeedbackHeaderProps) {
    return (
        <header>
            {title != 'Deixe seu feedback' ? (
                <ReturnButton onRestartFeedback={restartFeedback} />
            ) : null}

            <span className="text-xl leading-6 flex items-center gap-2">
                {imageSrc ? (
                    <img className="w-6 h-6" src={imageSrc} alt={imageAlt} />
                ) : null}
                {title}
            </span>

            <CloseButton />
        </header>
    )
}