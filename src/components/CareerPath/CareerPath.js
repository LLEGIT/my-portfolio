import { School, Work, WorkspacePremium } from "@mui/icons-material";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, timelineItemClasses } from "@mui/lab";

export default function CareerPath({translations}) {
    const timelineItems = [
        [translations.timeline.item1, <Work />],
        [translations.timeline.item2, <School />],
        [translations.timeline.item3, <School />],
        [translations.timeline.item4, <WorkspacePremium />],
    ];
    const colors = ["primary", "secondary", "error", "success", "warning"]

    return (
        <Timeline
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }}
        >
            {timelineItems.map((item, key) => <TimelineItem key={key}>
                <TimelineSeparator>
                    <TimelineDot color={colors[key]}>
                        {item[1]}
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>{item[0]}</TimelineContent>
            </TimelineItem>)}
        </Timeline>
    )
}