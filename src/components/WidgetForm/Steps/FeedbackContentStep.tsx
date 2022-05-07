import { FeedbackType, feedbackTypes } from "..";
import { FeedbackHeader } from "../Content/FeedbackHeader";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({ feedbackType, onFeedbackRestartRequested }: FeedbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType]

    return (
        <>
            <FeedbackHeader
                title={feedbackTypeInfo.title}
                imageSrc={feedbackTypeInfo.image.source}
                imageAlt={feedbackTypeInfo.image.alt}
                restartFeedback={onFeedbackRestartRequested}
            />

            <div className="flex py-8 gap-2 w-full">

            </div>
        </>
    );
}